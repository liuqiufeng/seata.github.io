"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[6016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Quick Start",keywords:["Seata"],description:"Let's begin with a Microservices example."},o="Quick Start",s={unversionedId:"user/quickstart",id:"version-v1.5/user/quickstart",title:"Quick Start",description:"Let's begin with a Microservices example.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.5/user/quickstart.md",sourceDirName:"user",slug:"/user/quickstart",permalink:"/seata.github.io/docs/v1.5/user/quickstart",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.5/user/quickstart.md",tags:[],version:"v1.5",frontMatter:{title:"Quick Start",keywords:["Seata"],description:"Let's begin with a Microservices example."},sidebar:"docs",previous:{title:"FAQ",permalink:"/seata.github.io/docs/v1.5/overview/faq"},next:{title:"Seata Parameter Configuration",permalink:"/seata.github.io/docs/v1.5/user/configurations"}},c={},l=[{value:"Use case",id:"use-case",level:2},{value:"Architecture",id:"architecture",level:3},{value:"StorageService",id:"storageservice",level:3},{value:"OrderService",id:"orderservice",level:3},{value:"AccountService",id:"accountservice",level:3},{value:"Main business logic",id:"main-business-logic",level:3},{value:"Distributed Transaction Solution with SEATA",id:"distributed-transaction-solution-with-seata",level:2},{value:"Example powered by Dubbo + SEATA",id:"example-powered-by-dubbo--seata",level:2},{value:"Step 1: Setup database",id:"step-1-setup-database",level:3},{value:"Step 2: Create UNDO_LOG table",id:"step-2-create-undo_log-table",level:3},{value:"Step 3: Create tables for example business",id:"step-3-create-tables-for-example-business",level:3},{value:"Step 4: Start Server",id:"step-4-start-server",level:3},{value:"Step 5: Run example",id:"step-5-run-example",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Let's begin with a Microservices example."),(0,a.kt)("h2",{id:"use-case"},"Use case"),(0,a.kt)("p",null,"A business logic for user purchasing commodities. The whole business logic is powered by 3 microservices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Storage service: deduct storage count on given commodity."),(0,a.kt)("li",{parentName:"ul"},"Order service: create order according to purchase request."),(0,a.kt)("li",{parentName:"ul"},"Account service: debit the balance of user's account.")),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:r(69692).Z,width:"1732",height:"940"})," "),(0,a.kt)("h3",{id:"storageservice"},"StorageService"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface StorageService {\n\n    /**\n     * deduct storage count\n     */\n    void deduct(String commodityCode, int count);\n}\n")),(0,a.kt)("h3",{id:"orderservice"},"OrderService"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface OrderService {\n\n    /**\n     * create order\n     */\n    Order create(String userId, String commodityCode, int orderCount);\n}\n")),(0,a.kt)("h3",{id:"accountservice"},"AccountService"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface AccountService {\n\n    /**\n     * debit balance of user's account\n     */\n    void debit(String userId, int money);\n}\n")),(0,a.kt)("h3",{id:"main-business-logic"},"Main business logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class BusinessServiceImpl implements BusinessService {\n\n    private StorageService storageService;\n\n    private OrderService orderService;\n\n    /**\n     * purchase\n     */\n    public void purchase(String userId, String commodityCode, int orderCount) {\n\n        storageService.deduct(commodityCode, orderCount);\n\n        orderService.create(userId, commodityCode, orderCount);\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class OrderServiceImpl implements OrderService {\n\n    private OrderDAO orderDAO;\n\n    private AccountService accountService;\n\n    public Order create(String userId, String commodityCode, int orderCount) {\n\n        int orderMoney = calculate(commodityCode, orderCount);\n\n        accountService.debit(userId, orderMoney);\n\n        Order order = new Order();\n        order.userId = userId;\n        order.commodityCode = commodityCode;\n        order.count = orderCount;\n        order.money = orderMoney;\n\n        // INSERT INTO orders ...\n        return orderDAO.insert(order);\n    }\n}\n")),(0,a.kt)("h2",{id:"distributed-transaction-solution-with-seata"},"Distributed Transaction Solution with SEATA"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(77750).Z,width:"868",height:"473"})),(0,a.kt)("p",null,"We just need an annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," on business method: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n    @GlobalTransactional\n    public void purchase(String userId, String commodityCode, int orderCount) {\n        ......\n    }\n")),(0,a.kt)("h2",{id:"example-powered-by-dubbo--seata"},"Example powered by Dubbo + SEATA"),(0,a.kt)("h3",{id:"step-1-setup-database"},"Step 1: Setup database"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Requirement: MySQL with InnoDB engine.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," In fact, there should be 3 database for the 3 services in the example use case. However, we can just create one database and configure 3 data sources for simple. "),(0,a.kt)("p",null,"Modify Spring XML with the database URL/username/password you just created."),(0,a.kt)("p",null,"dubbo-account-service.xml\ndubbo-order-service.xml\ndubbo-storage-service.xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'        <property name="url" value="jdbc:mysql://x.x.x.x:3306/xxx" />\n        <property name="username" value="xxx" />\n        <property name="password" value="xxx" />\n')),(0,a.kt)("h3",{id:"step-2-create-undo_log-table"},"Step 2: Create UNDO_LOG table"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UNDO_LOG")," table is required by SEATA AT mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u6ce8\u610f\u6b64\u59040.3.0+ \u589e\u52a0\u552f\u4e00\u7d22\u5f15 ux_undo_log\nCREATE TABLE `undo_log` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n  `branch_id` bigint(20) NOT NULL,\n  `xid` varchar(100) NOT NULL,\n  `context` varchar(128) NOT NULL,\n  `rollback_info` longblob NOT NULL,\n  `log_status` int(11) NOT NULL,\n  `log_created` datetime NOT NULL,\n  `log_modified` datetime NOT NULL,\n  `ext` varchar(100) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n")),(0,a.kt)("h3",{id:"step-3-create-tables-for-example-business"},"Step 3: Create tables for example business"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\nDROP TABLE IF EXISTS `storage_tbl`;\nCREATE TABLE `storage_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY (`commodity_code`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `order_tbl`;\nCREATE TABLE `order_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `account_tbl`;\nCREATE TABLE `account_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,a.kt)("h3",{id:"step-4-start-server"},"Step 4: Start Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download server package from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/releases"},"https://github.com/seata/seata/releases"),", unzip it.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Usage: sh seata-server.sh(for linux and mac) or cmd seata-server.bat(for windows) [options]\n  Options:\n    --host, -h\n      The address is expose to registration center and other service can access seata-server via this ip.\n      Default: 0.0.0.0\n    --port, -p\n      The port to listen.\n      Default: 8091\n    --storeMode, -m\n      log store mode : file\u3001db\n      Default: file\n    --help\n\ne.g.\n\nsh seata-server.sh -p 8091 -h 127.0.0.1 -m file\n")),(0,a.kt)("h3",{id:"step-5-run-example"},"Step 5: Run example"),(0,a.kt)("p",null,"Go to samples repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata-samples"},"seata-samples")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start DubboAccountServiceStarter"),(0,a.kt)("li",{parentName:"ul"},"Start DubboStorageServiceStarter"),(0,a.kt)("li",{parentName:"ul"},"Start DubboOrderServiceStarter"),(0,a.kt)("li",{parentName:"ul"},"Run DubboBusinessTester for demo test")),(0,a.kt)("p",null,"TBD: scripts for run demo applications"))}p.isMDXComponent=!0},69692:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-6bdb120b83710010167e8b75448505ec.png"},77750:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/solution-1bdadb80e54074aa3088372c17f0244b.png"}}]);