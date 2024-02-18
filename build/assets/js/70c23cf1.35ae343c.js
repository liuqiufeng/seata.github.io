"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[88572],{87884:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(74848),a=n(28453);const o={title:"Seata Core Module Source Code Analysis",author:"runze.zhao",keywords:["Seata","distributed transaction"],date:"2019/12/23"},r=void 0,i={permalink:"/seata.github.io/blog/seata-analysis-core-modular",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-analysis-core-modular.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-analysis-core-modular.md",title:"Seata Core Module Source Code Analysis",description:"1. Introduction",date:"2019-12-23T00:00:00.000Z",formattedDate:"December 23, 2019",tags:[],readingTime:5.335,hasTruncateMarker:!1,authors:[{name:"runze.zhao"}],frontMatter:{title:"Seata Core Module Source Code Analysis",author:"runze.zhao",keywords:["Seata","distributed transaction"],date:"2019/12/23"},unlisted:!1,prevItem:{title:"Seata Community Meetup\xb7Hangzhou Station",permalink:"/seata.github.io/blog/seata-community-meetup-hangzhou-ready"},nextItem:{title:"Dynamically Creating/Closing Seata Distributed Transactions through AOP",permalink:"/seata.github.io/blog/seata-spring-boot-aop-aspectj"}},c={authorsImageUrls:[void 0]},l=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1. codec Module",id:"1-codec-module",level:2},{value:"2. Analysis of Exception Handling in the exception Package",id:"2-analysis-of-exception-handling-in-the-exception-package",level:2},{value:"3. Analysis of the rpc Package",id:"3-analysis-of-the-rpc-package",level:2},{value:"4. Analysis of the rpc Package (Continued)",id:"4-analysis-of-the-rpc-package-continued",level:2},{value:"5. Conclusion",id:"5-conclusion",level:2},{value:"6. Seata Source Code Analysis Series Links",id:"6-seata-source-code-analysis-series-links",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsx)(s.p,{children:"The core module defines the types and states of transactions, common behaviors, protocols, and message models for communication between clients and servers, as well as exception handling methods, compilation, compression types, configuration information names, environment context, etc. It also encapsulates RPC based on Netty for use by both clients and servers."}),"\n",(0,t.jsx)(s.p,{children:"Let's analyze the main functional classes of the core module according to the package order:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/20191223162313317.png",alt:"Image Description"})}),"\n",(0,t.jsx)(s.p,{children:"codec: Defines a codec factory class, which provides a method to find the corresponding processing class based on the serialization type. It also provides an interface class Codec with two abstract methods:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"<T> byte[] encode(T t);\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"<T> T decode(byte[] bytes);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"1-codec-module",children:"1. codec Module"}),"\n",(0,t.jsx)(s.p,{children:"In version 1.0, the codec module has three serialization implementations: SEATA, PROTOBUF, and KRYO."}),"\n",(0,t.jsx)(s.p,{children:"compressor: Similar to classes under the codec package, there are three classes here: a compression type class, a factory class, and an abstract class for compression and decompression operations. In version 1.0, there is only one compression method: Gzip."}),"\n",(0,t.jsx)(s.p,{children:"constants: Consists of two classes, ClientTableColumnsName and ServerTableColumnsName, representing the models for transaction tables stored on the client and server sides respectively. It also includes classes defining supported database types and prefixes for configuration information attributes."}),"\n",(0,t.jsx)(s.p,{children:"context: The environment class RootContext holds a ThreadLocalContextCore to store transaction identification information. For example, TX_XID uniquely identifies a transaction, and TX_LOCK indicates the need for global lock control for local transactions on update/delete/insert/selectForUpdate SQL operations."}),"\n",(0,t.jsx)(s.p,{children:"event: Utilizes the Guava EventBus event bus for registration and notification, implementing the listener pattern. In the server module's metrics package, MetricsManager registers monitoring events for changes in GlobalStatus, which represents several states of transaction processing in the server module. When the server processes transactions, the callback methods registered for monitoring events are invoked, primarily for statistical purposes."}),"\n",(0,t.jsx)(s.p,{children:"lock: When the server receives a registerBranch message for branch registration, it acquires a lock. In version 1.0, there are two lock implementations: DataBaseLocker and MemoryLocker, representing database locks and in-memory locks respectively. Database locks are acquired based on the rowKey = resourceId + tableName + pk, while memory locks are based directly on the primary key."}),"\n",(0,t.jsx)(s.p,{children:"model: BranchStatus, GlobalStatus, and BranchType are used to define transaction types and global/branch states. Additionally, TransactionManager and ResourceManager are abstract classes representing resource managers (RMs) and transaction managers (TMs) respectively. Specific implementations of RMs and TMs are not provided here due to variations in transaction types."}),"\n",(0,t.jsx)(s.p,{children:"protocol: Defines entity classes used for transmission in the RPC module, representing models for requests and responses under different transaction status scenarios."}),"\n",(0,t.jsx)(s.p,{children:"store: Defines data models for interacting with databases and the SQL statements used for database interactions."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'    public void exceptionHandleTemplate(Callback callback, AbstractTransactionRequest request,\n        AbstractTransactionResponse response) {\n        try {\n            callback.execute(request, response); //\u6267\u884c\u4e8b\u52a1\u4e1a\u52a1\u7684\u65b9\u6cd5\n            callback.onSuccess(request, response); //\u8bbe\u7f6eresponse\u8fd4\u56de\u7801\n        } catch (TransactionException tex) {\n            LOGGER.error("Catch TransactionException while do RPC, request: {}", request, tex);\n            callback.onTransactionException(request, response, tex); //\u8bbe\u7f6eresponse\u8fd4\u56de\u7801\u5e76\u8bbe\u7f6emsg\n        } catch (RuntimeException rex) {\n            LOGGER.error("Catch RuntimeException while do RPC, request: {}", request, rex);\n            callback.onException(request, response, rex);  //\u8bbe\u7f6eresponse\u8fd4\u56de\u7801\u5e76\u8bbe\u7f6emsg\n        }\n    }\n'})}),"\n",(0,t.jsx)(s.h2,{id:"2-analysis-of-exception-handling-in-the-exception-package",children:"2. Analysis of Exception Handling in the exception Package"}),"\n",(0,t.jsx)(s.p,{children:"This is the UML diagram of AbstractExceptionHandler. Callback and AbstractCallback are internal interfaces and classes of AbstractExceptionHandler. AbstractCallback implements three methods of the Callback interface but leaves the execute() method unimplemented. AbstractExceptionHandler uses AbstractCallback as a parameter for the template method and utilizes its implemented methods. However, the execute() method is left to be implemented by subclasses."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/20191211165628768.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODA0NzM3,size_16,color_FFFFFF,t_70",alt:"Image Description"})}),"\n",(0,t.jsx)(s.p,{children:"From an external perspective, AbstractExceptionHandler defines a template method with exception handling. The template includes four behaviors, three of which are already implemented, and the behavior execution is delegated to subclasses."}),"\n",(0,t.jsx)(s.h2,{id:"3-analysis-of-the-rpc-package",children:"3. Analysis of the rpc Package"}),"\n",(0,t.jsx)(s.p,{children:"When it comes to the encapsulation of RPC by Seata, one need not delve into the details. However, it's worth studying how transaction business is handled."}),"\n",(0,t.jsx)(s.p,{children:"The client-side RPC class is AbstractRpcRemotingClient:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://img-blog.csdnimg.cn/20191211180129741.png",alt:"Image Description"})}),"\n",(0,t.jsx)(s.p,{children:"The important attributes and methods are depicted in the class diagram. The methods for message sending and initialization are not shown in the diagram. Let's analyze the class diagram in detail:"}),"\n",(0,t.jsx)(s.p,{children:"clientBootstrap: This is a wrapper class for the netty startup class Bootstrap. It holds an instance of Bootstrap and customizes the properties as desired."}),"\n",(0,t.jsx)(s.p,{children:"clientChannelManager: Manages the correspondence between server addresses and channels using a ConcurrentHashMap<serverAddress,channel> container."}),"\n",(0,t.jsx)(s.p,{children:"clientMessageListener: Handles messages. Depending on the message type, there are three specific processing methods."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'public void onMessage(RpcMessage request, String serverAddress, ClientMessageSender sender) {\n        Object msg = request.getBody();\n        if (LOGGER.isInfoEnabled()) {\n            LOGGER.info("onMessage:" + msg);\n        }\n        if (msg instanceof BranchCommitRequest) {\n            handleBranchCommit(request, serverAddress, (BranchCommitRequest)msg, sender);\n        } else if (msg instanceof BranchRollbackRequest) {\n            handleBranchRollback(request, serverAddress, (BranchRollbackRequest)msg, sender);\n        } else if (msg instanceof UndoLogDeleteRequest) {\n            handleUndoLogDelete((UndoLogDeleteRequest)msg);\n        }\n    }\n'})}),"\n",(0,t.jsx)(s.h2,{id:"4-analysis-of-the-rpc-package-continued",children:"4. Analysis of the rpc Package (Continued)"}),"\n",(0,t.jsx)(s.p,{children:"Within the message class, the TransactionMessageHandler is responsible for handling messages of different types. Eventually, based on the different transaction types (AT, TCC, SAGE), specific handling classes, as mentioned in the second part, exceptionHandleTemplate(), are invoked."}),"\n",(0,t.jsx)(s.p,{children:"mergeSendExecutorService: This is a thread pool with only one thread responsible for merging and sending messages from different addresses. In the sendAsyncRequest() method, messages are offered to the queue LinkedBlockingQueue of the thread pool. The thread is then responsible for polling and processing messages."}),"\n",(0,t.jsx)(s.p,{children:"channelRead(): Handles server-side HeartbeatMessage.PONG heartbeat messages. Additionally, it processes MergeResultMessage, which are response messages for asynchronous messages. It retrieves the corresponding MessageFuture based on the msgId and sets the result of the asynchronous message."}),"\n",(0,t.jsx)(s.p,{children:"dispatch(): Invokes the clientMessageListener to handle messages sent by the server. Different types of requests have different handling classes."}),"\n",(0,t.jsx)(s.p,{children:"In summary, when looking at Netty, one should focus on serialization methods and message handling handler classes. Seata's RPC serialization method is processed by finding the Codec implementation class through the factory class, and the handler is the TransactionMessageHandler mentioned earlier."}),"\n",(0,t.jsx)(s.h2,{id:"5-conclusion",children:"5. Conclusion"}),"\n",(0,t.jsx)(s.p,{children:"The core module covers a wide range of functionalities, with most classes serving as abstract classes for other modules. Business models are abstracted out, and specific implementations are distributed across different modules. The code in the core module is of high quality, with many classic design patterns such as the template pattern discussed earlier. It is very practical and well-crafted, deserving careful study."}),"\n",(0,t.jsx)(s.h2,{id:"6-seata-source-code-analysis-series-links",children:"6. Seata Source Code Analysis Series Links"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://blog.csdn.net/qq_37804737/category_9530078.html",children:"Series Links"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>i});var t=n(96540);const a={},o=t.createContext(a);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);