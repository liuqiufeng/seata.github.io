"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[68796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={title:"Seata TCC Mode",keywords:["Seata","TCC"],description:"User guide for Seata TCC mode"},r="Seata TCC Mode",s={unversionedId:"user/mode/tcc",id:"version-v1.2/user/mode/tcc",title:"Seata TCC Mode",description:"User guide for Seata TCC mode",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/mode/tcc.md",sourceDirName:"user/mode",slug:"/user/mode/tcc",permalink:"/seata.github.io/docs/v1.2/user/mode/tcc",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/mode/tcc.md",tags:[],version:"v1.2",frontMatter:{title:"Seata TCC Mode",keywords:["Seata","TCC"],description:"User guide for Seata TCC mode"},sidebar:"docs",previous:{title:"Seata AT Mode",permalink:"/seata.github.io/docs/v1.2/user/mode/at"},next:{title:"Seata Saga Mode",permalink:"/seata.github.io/docs/v1.2/user/mode/saga"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Overall Mechanism",id:"overall-mechanism",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Getting Started",id:"getting-started",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"seata-tcc-mode"},"Seata TCC Mode"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"TCC Mode is a distributed transaction solution supported by Seata that allows fine-grained control by business entities. It is an intrusive solution, meaning it directly impacts the service layer, independent of the underlying database. TCC Mode is the second transaction mode supported by Seata, initially contributed by Ant Financial. Its distributed transaction model operates directly on the service layer, does not rely on the underlying database, offers flexibility in choosing the granularity of business resource locking, reduces resource lock holding time, exhibits good scalability, and is designed for independently deployable SOA services."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Overview of a global transaction",src:a(55352).Z,width:"853",height:"482"})),(0,i.kt)("p",null,"In this document, we will focus on the usage of Seata TCC Mode. If you are interested in the principles behind TCC Mode and want to understand how Seata TCC addresses idempotence, empty rollback, and hanging issues, please refer to the corresponding ",(0,i.kt)("a",{parentName:"p",href:"../../dev/mode/tcc-mode"},"Developer Guide"),"."),(0,i.kt)("h3",{id:"advantages"},"Advantages"),(0,i.kt)("p",null,"TCC is entirely independent of the underlying database, allowing for the management of resources across databases and applications, providing more granular control to business entities."),(0,i.kt)("h3",{id:"disadvantages"},"Disadvantages"),(0,i.kt)("p",null,"TCC is an intrusive distributed transaction solution that requires business systems to implement the Try, Confirm, and Cancel operations. It has a significant impact on business systems and is relatively complex in design."),(0,i.kt)("h3",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"TCC Mode is a high-performance distributed transaction solution suitable for scenarios with high performance requirements, such as core systems."),(0,i.kt)("h2",{id:"overall-mechanism"},"Overall Mechanism"),(0,i.kt)("p",null,'In the two-phase commit protocol, the Resource Manager (RM) needs to provide "prepare," "commit," and "rollback" operations. The Transaction Manager (TM) coordinates all Resource Managers in two phases. In the first phase, it queries all Resource Managers to check if the "prepare" is successful. If all resources are prepared successfully, it executes the "commit" operations in the second phase. Otherwise, it executes the "rollback" operations, ensuring that the final state of all resources is consistent, either all committed or all rolled back.'),(0,i.kt)("p",null,"There are many ways to implement Resource Managers, and TCC (Try-Confirm-Cancel) is a service-oriented implementation of Resource Managers. TCC is a mature distributed transaction solution used to address data consistency issues in operations across databases and services. TCC, with its Try, Confirm, and Cancel methods, is implemented by business code, making it a service-oriented Resource Manager."),(0,i.kt)("p",null,"The TCC Try operation serves as the first phase, responsible for checking and reserving resources. The Confirm operation is the second-phase commit operation, executing the actual business logic. Cancel is the second-phase rollback operation, canceling the reserved resources and reverting them to their initial state."),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,'In contrast to AT Mode, where data source proxy is used to shield distributed transaction details, in TCC Mode, business entities need to define the "prepare," "commit," and "rollback" for TCC resources. For example:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public interface TccActionOne {\n    @TwoPhaseBusinessAction(name = "DubboTccActionOne", commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "a") String a);\n    public boolean commit(BusinessActionContext actionContext);\n    public boolean rollback(BusinessActionContext actionContext);\n}\n')),(0,i.kt)("p",null,"Seata treats a TCC interface as a resource, also known as a TCC Resource. The core annotation in the business interface is ",(0,i.kt)("inlineCode",{parentName:"p"},"@TwoPhaseBusinessAction"),", indicating that the current method uses TCC Mode for transaction management and specifying the Try, Confirm, and Cancel phases. The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute registers a globally unique TCC bean name for the current transaction. The three execution phases of TCC Mode are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Try phase: Reserving operational resources (Prepare). The method executed in this phase is the one annotated with ",(0,i.kt)("inlineCode",{parentName:"li"},"@TwoPhaseBusinessAction"),", such as the ",(0,i.kt)("inlineCode",{parentName:"li"},"prepare")," method in the example code."),(0,i.kt)("li",{parentName:"ul"},"Confirm phase: Executing the main business logic (Commit). This phase uses the method specified by the ",(0,i.kt)("inlineCode",{parentName:"li"},"commitMethod")," attribute to perform the Confirm work."),(0,i.kt)("li",{parentName:"ul"},"Cancel phase: Transaction rollback (Rollback). This phase uses the method specified by the ",(0,i.kt)("inlineCode",{parentName:"li"},"rollbackMethod")," attribute to perform the Cancel work.")),(0,i.kt)("p",null,"Additionally, in TCC Mode, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"BusinessActionContext")," to pass query parameters in the transaction context. The attributes include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xid"),": Global transaction ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"branchId"),": Branch transaction ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actionName"),": Branch resource ID (resource ID)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actionContext"),": Parameters passed by the business, which can be annotated with ",(0,i.kt)("inlineCode",{parentName:"li"},"@BusinessActionContextParameter")," to indicate the parameters to be passed.")),(0,i.kt)("p",null,"After defining the TCC interface, you can open a distributed transaction using ",(0,i.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional"),", similar to AT Mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@GlobalTransactional\npublic String doTransactionCommit(){\n    tccActionOne.prepare(null,"one");\n    tccActionTwo.prepare(null,"two");\n}\n')),(0,i.kt)("p",null,"Note that if TCC participants are local beans (non-remote RPC services), you need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"@LocalTCC")," annotation to the interface definition, as shown in the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@LocalTCC\npublic interface TccActionTwo {\n    @TwoPhaseBusinessAction(name = "TccActionTwo", commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "a") String a);\n    public boolean commit(BusinessActionContext actionContext);\n    public boolean rollback(BusinessActionContext actionContext);\n}\n')),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc"},"seata-samples/tcc")," section for several examples to experiment with. You can start ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc/local-tcc-sample"},"local-tcc-example")," to view an example of local bean usage or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc/local-tcc-sample"},"dubbo-tcc-example")," for a remote TCC example."))}p.isMDXComponent=!0},55352:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/seata_tcc-1-1f7a834639aa755d73fa2af435c4f042.png"}}]);