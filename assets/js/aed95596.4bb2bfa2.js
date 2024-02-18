"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[30983],{91187:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(74848),o=t(28453);const a={title:"Api Guide",keywords:["Seata"],description:"Api Guide."},r="1. Overview",l={id:"user/api",title:"Api Guide",description:"Api Guide.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/api.md",sourceDirName:"user",slug:"/user/api",permalink:"/seata.github.io/docs/v1.2/user/api",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/api.md",tags:[],version:"v1.2",frontMatter:{title:"Api Guide",keywords:["Seata"],description:"Api Guide."},sidebar:"docs",previous:{title:"Zookeeper Registry Center",permalink:"/seata.github.io/docs/v1.2/user/registry/zookeeper"},next:{title:"Microservice Framework Guide",permalink:"/seata.github.io/docs/v1.2/user/microservice"}},c={},s=[{value:"2.1 GlobalTransaction",id:"21-globaltransaction",level:2},{value:"2.2 GlobalTransactionContext",id:"22-globaltransactioncontext",level:2},{value:"2.3 TransactionalTemplate",id:"23-transactionaltemplate",level:2},{value:"3.1 RootContext",id:"31-rootcontext",level:2},{value:"1. The propagation of transaction context by remote invoke",id:"1-the-propagation-of-transaction-context-by-remote-invoke",level:3},{value:"2. Pause and recover of transaction",id:"2-pause-and-recover-of-transaction",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1-overview",children:"1. Overview"}),"\n",(0,i.jsx)(e.p,{children:"Seata API is devided into 2 categories: High-Level API and Low-Level API"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"High-Level API"})," : Used for defining and controlling transaction boundary, and querying transaction status."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Low-Level API"})," : Used for controlling the propagation of transaction context."]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"2-high-level-api",children:"2. High-Level API"}),"\n",(0,i.jsx)(e.h2,{id:"21-globaltransaction",children:"2.1 GlobalTransaction"}),"\n",(0,i.jsx)(e.p,{children:"GlobalTransaction class contains methods about begin transaction, commit transaction, rollback transaction and get status of transaction and so on."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public interface GlobalTransaction {\n\n    /**\n     * Begin a global transaction(Use default transaction name and timeout)\n     */\n    void begin() throws TransactionException;\n\n    /**\n     * Begin a global transaction, and point out the timeout(use default transaction name)\n     */\n    void begin(int timeout) throws TransactionException;\n\n    /**\n     * Begin a global transaction, and point out the transaction name and timeout.\n     */\n    void begin(int timeout, String name) throws TransactionException;\n\n    /**\n     * Commit globally\n     */\n    void commit() throws TransactionException;\n\n    /**\n     * Rollback globally\n     */\n    void rollback() throws TransactionException;\n\n    /**\n     * Get the status of transaction\n     */\n    GlobalStatus getStatus() throws TransactionException;\n\n    /**\n     * Get the XID of transaction\n     */\n    String getXid();\n\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"22-globaltransactioncontext",children:"2.2 GlobalTransactionContext"}),"\n",(0,i.jsx)(e.p,{children:"GlobalTransaction instance can be retrieved from GlobalTransactionContext:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"\n    /**\n     * Retrieve current global transaction instance, if it doesn't exist, create a new one.\n     */\n    public static GlobalTransaction getCurrentOrCreate() {\n        GlobalTransaction tx = getCurrent();\n        if (tx == null) {\n            return createNew();\n        }\n        return tx;\n    }\n\n    /**\n     * Reload the global transaction identified by XID, the instance aren't allowed to begin transaction.\n     * This API is usually used for centralized handling of failed transaction later.\n     * For example, if it's time out to commit globally, the subsequent centralized processing steps are like this: reload the instance, from which retrieve the status, then recommit the transaction globally or not depends on the status value.\n     */\n    public static GlobalTransaction reload(String xid) throws TransactionException {\n        GlobalTransaction tx = new DefaultGlobalTransaction(xid, GlobalStatus.UnKnown, GlobalTransactionRole.Launcher) {\n            @Override\n            public void begin(int timeout, String name) throws TransactionException {\n                throw new IllegalStateException(\"Never BEGIN on a RELOADED GlobalTransaction. \");\n            }\n        };\n        return tx;\n    }\n"})}),"\n",(0,i.jsx)(e.h2,{id:"23-transactionaltemplate",children:"2.3 TransactionalTemplate"}),"\n",(0,i.jsx)(e.p,{children:"TransactionalTemplate: Wrap a business service invoke into  a distributed transaction supported  service with preceding GlobalTransaction and GlobalTransactionContext API."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class TransactionalTemplate {\n\n    public Object execute(TransactionalExecutor business) throws TransactionalExecutor.ExecutionException {\n\n        // 1. Get current global transaction instance or create a new one\n        GlobalTransaction tx = GlobalTransactionContext.getCurrentOrCreate();\n\n        // 2. Begin the global transaction\n        try {\n            tx.begin(business.timeout(), business.name());\n\n        } catch (TransactionException txe) {\n            // 2.1 Fail to begin\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.BeginFailure);\n\n        }\n\n        Object rs = null;\n        try {\n            // 3. invoke service\n            rs = business.execute();\n\n        } catch (Throwable ex) {\n\n            // Exception from business service invoke\n            try {\n                // Rollback globally\n                tx.rollback();\n\n                // 3.1 Global rollback success, throw original business exception\n                throw new TransactionalExecutor.ExecutionException(tx, TransactionalExecutor.Code.RollbackDone, ex);\n\n            } catch (TransactionException txe) {\n                // 3.2 Global rollback failed\n                throw new TransactionalExecutor.ExecutionException(tx, txe,\n                    TransactionalExecutor.Code.RollbackFailure, ex);\n\n            }\n\n        }\n\n        // 4. Commit globally\n        try {\n            tx.commit();\n\n        } catch (TransactionException txe) {\n            // 4.1 Global commit failed\n            throw new TransactionalExecutor.ExecutionException(tx, txe,\n                TransactionalExecutor.Code.CommitFailure);\n\n        }\n        return rs;\n    }\n\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"The exception of template method: ExecutionException"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"    class ExecutionException extends Exception {\n\n        // Transaction instance threw exception\n        private GlobalTransaction transaction;\n\n        // Exception code:\n        // BeginFailure(Fail to begin transaction)\n        // CommitFailure(Fail to commit globally)\n        // RollbackFailure(Fail to rollback globally)\n        // RollbackDone(Global rollback success)\n        private Code code;\n\n        // Original exception triggered by rollback\n        private Throwable originalException;\n"})}),"\n",(0,i.jsx)(e.p,{children:"Outer calling logic try-catch the exception, and do something based on the exception code:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"BeginFailure"})," (Fail to begin transaction): getCause() gets the framework exception of begin transaction, getOriginalException() is null."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"CommitFailure"}),"(Fail to commit globally):  getCause() gets the framework exception of commit transaction, getOriginalException() is null."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"RollbackFailure"})," (Fail to rollback globally)\uff1agetCause() gets the framework exception of rollback transaction\uff0cgetOriginalException() gets the original exception of business invoke."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"RollbackDone"}),"(Global rollback success): getCause()  is null, getOriginalException() gets the original exception of business invoke."]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"3-low-level-api",children:"3. Low-Level API"}),"\n",(0,i.jsx)(e.h2,{id:"31-rootcontext",children:"3.1 RootContext"}),"\n",(0,i.jsx)(e.p,{children:"RootContext: It's responsible for maintaining XID during runtime of application."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'    /**\n     * Get the global XID of the current running application\n     */\n    public static String getXID() {\n        return CONTEXT_HOLDER.get(KEY_XID);\n    }\n\n    /**\n     * Bind the global XID to the current application runtime\n     */\n    public static void bind(String xid) {\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("bind " + xid);\n        }\n        CONTEXT_HOLDER.put(KEY_XID, xid);\n    }\n\n    /**\n     * Unbind the global XID from the current application runtime, and return XID\n     */\n    public static String unbind() {\n        String xid = CONTEXT_HOLDER.remove(KEY_XID);\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("unbind " + xid);\n        }\n        return xid;\n    }\n\n    /**\n     * Check if the current application runtime is in the global transaction context\n     */\n    public static boolean inGlobalTransaction() {\n        return CONTEXT_HOLDER.get(KEY_XID) != null;\n    }\n'})}),"\n",(0,i.jsx)(e.p,{children:"The implementation of High-Level API is based on maintaining XID in the RootContext."}),"\n",(0,i.jsx)(e.p,{children:"Whether or not the operation of the current running application is in a global transaction context, just check if there is an XID in the RootContext."}),"\n",(0,i.jsx)(e.p,{children:"The default implementation of RootContext is based on ThreadLocal, which is the XID is in the context of current thread."}),"\n",(0,i.jsx)(e.p,{children:"Two classic scenes of Low-Level API :"}),"\n",(0,i.jsx)(e.h3,{id:"1-the-propagation-of-transaction-context-by-remote-invoke",children:"1. The propagation of transaction context by remote invoke"}),"\n",(0,i.jsx)(e.p,{children:"Retrieve current XID by remote invoke:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"String xid = RootContext.getXID();\n"})}),"\n",(0,i.jsx)(e.p,{children:"Propagating the XID to the provider of service by RPC, bind the XID to current RootContext before executing the business logic of provider."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"RootContext.bind(rpcXid);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2-pause-and-recover-of-transaction",children:"2. Pause and recover of transaction"}),"\n",(0,i.jsx)(e.p,{children:"In a global transaction, if some business logic shouldn't be in the scope of the global transaction, unbind XID before invoke it."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"String unbindXid = RootContext.unbind();\n"})}),"\n",(0,i.jsx)(e.p,{children:"Rebind the XID back after the execution of related business logic to achieve recovering the global transaction."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"RootContext.bind(unbindXid);\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var i=t(96540);const o={},a=i.createContext(o);function r(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);