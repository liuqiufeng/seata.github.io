"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[22505],{4344:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(74848),s=r(28453);const i={title:"Quick Start",keywords:["Seata"],description:"Let's begin with a Microservices example."},a="Quick Start",c={id:"user/quickstart",title:"Quick Start",description:"Let's begin with a Microservices example.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.4/user/quickstart.md",sourceDirName:"user",slug:"/user/quickstart",permalink:"/seata.github.io/docs/v1.4/user/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.4/user/quickstart.md",tags:[],version:"v1.4",frontMatter:{title:"Quick Start",keywords:["Seata"],description:"Let's begin with a Microservices example."},sidebar:"docs",previous:{title:"FAQ",permalink:"/seata.github.io/docs/v1.4/overview/faq"},next:{title:"Seata Parameter Configuration",permalink:"/seata.github.io/docs/v1.4/user/configurations"}},o={},d=[{value:"Use case",id:"use-case",level:2},{value:"Architecture",id:"architecture",level:3},{value:"StorageService",id:"storageservice",level:3},{value:"OrderService",id:"orderservice",level:3},{value:"AccountService",id:"accountservice",level:3},{value:"Main business logic",id:"main-business-logic",level:3},{value:"Distributed Transaction Solution with SEATA",id:"distributed-transaction-solution-with-seata",level:2},{value:"Example powered by Dubbo + SEATA",id:"example-powered-by-dubbo--seata",level:2},{value:"Step 1: Setup database",id:"step-1-setup-database",level:3},{value:"Step 2: Create UNDO_LOG table",id:"step-2-create-undo_log-table",level:3},{value:"Step 3: Create tables for example business",id:"step-3-create-tables-for-example-business",level:3},{value:"Step 4: Start Server",id:"step-4-start-server",level:3},{value:"Step 5: Run example",id:"step-5-run-example",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(n.p,{children:"Let's begin with a Microservices example."}),"\n",(0,t.jsx)(n.h2,{id:"use-case",children:"Use case"}),"\n",(0,t.jsx)(n.p,{children:"A business logic for user purchasing commodities. The whole business logic is powered by 3 microservices:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Storage service: deduct storage count on given commodity."}),"\n",(0,t.jsx)(n.li,{children:"Order service: create order according to purchase request."}),"\n",(0,t.jsx)(n.li,{children:"Account service: debit the balance of user's account."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Architecture",src:r(42740).A+"",width:"1732",height:"940"})}),"\n",(0,t.jsx)(n.h3,{id:"storageservice",children:"StorageService"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public interface StorageService {\n\n    /**\n     * deduct storage count\n     */\n    void deduct(String commodityCode, int count);\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"orderservice",children:"OrderService"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public interface OrderService {\n\n    /**\n     * create order\n     */\n    Order create(String userId, String commodityCode, int orderCount);\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"accountservice",children:"AccountService"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public interface AccountService {\n\n    /**\n     * debit balance of user's account\n     */\n    void debit(String userId, int money);\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"main-business-logic",children:"Main business logic"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class BusinessServiceImpl implements BusinessService {\n\n    private StorageService storageService;\n\n    private OrderService orderService;\n\n    /**\n     * purchase\n     */\n    public void purchase(String userId, String commodityCode, int orderCount) {\n\n        storageService.deduct(commodityCode, orderCount);\n\n        orderService.create(userId, commodityCode, orderCount);\n    }\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class OrderServiceImpl implements OrderService {\n\n    private OrderDAO orderDAO;\n\n    private AccountService accountService;\n\n    public Order create(String userId, String commodityCode, int orderCount) {\n\n        int orderMoney = calculate(commodityCode, orderCount);\n\n        accountService.debit(userId, orderMoney);\n\n        Order order = new Order();\n        order.userId = userId;\n        order.commodityCode = commodityCode;\n        order.count = orderCount;\n        order.money = orderMoney;\n\n        // INSERT INTO orders ...\n        return orderDAO.insert(order);\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"distributed-transaction-solution-with-seata",children:"Distributed Transaction Solution with SEATA"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(6200).A+"",width:"868",height:"473"})}),"\n",(0,t.jsxs)(n.p,{children:["We just need an annotation ",(0,t.jsx)(n.code,{children:"@GlobalTransactional"})," on business method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"\n    @GlobalTransactional\n    public void purchase(String userId, String commodityCode, int orderCount) {\n        ......\n    }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-powered-by-dubbo--seata",children:"Example powered by Dubbo + SEATA"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-setup-database",children:"Step 1: Setup database"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Requirement: MySQL with InnoDB engine."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," In fact, there should be 3 database for the 3 services in the example use case. However, we can just create one database and configure 3 data sources for simple."]}),"\n",(0,t.jsx)(n.p,{children:"Modify Spring XML with the database URL/username/password you just created."}),"\n",(0,t.jsx)(n.p,{children:"dubbo-account-service.xml\ndubbo-order-service.xml\ndubbo-storage-service.xml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'        <property name="url" value="jdbc:mysql://x.x.x.x:3306/xxx" />\n        <property name="username" value="xxx" />\n        <property name="password" value="xxx" />\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-create-undo_log-table",children:"Step 2: Create UNDO_LOG table"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UNDO_LOG"})," table is required by SEATA AT mode."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u6ce8\u610f\u6b64\u59040.3.0+ \u589e\u52a0\u552f\u4e00\u7d22\u5f15 ux_undo_log\nCREATE TABLE `undo_log` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n  `branch_id` bigint(20) NOT NULL,\n  `xid` varchar(100) NOT NULL,\n  `context` varchar(128) NOT NULL,\n  `rollback_info` longblob NOT NULL,\n  `log_status` int(11) NOT NULL,\n  `log_created` datetime NOT NULL,\n  `log_modified` datetime NOT NULL,\n  `ext` varchar(100) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-create-tables-for-example-business",children:"Step 3: Create tables for example business"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"\nDROP TABLE IF EXISTS `storage_tbl`;\nCREATE TABLE `storage_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY (`commodity_code`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `order_tbl`;\nCREATE TABLE `order_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `account_tbl`;\nCREATE TABLE `account_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-4-start-server",children:"Step 4: Start Server"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Download server package from ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/releases",children:"https://github.com/apache/incubator-seata/releases"}),", unzip it."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"Usage: sh seata-server.sh(for linux and mac) or cmd seata-server.bat(for windows) [options]\n  Options:\n    --host, -h\n      The address is expose to registration center and other service can access seata-server via this ip.\n      Default: 0.0.0.0\n    --port, -p\n      The port to listen.\n      Default: 8091\n    --storeMode, -m\n      log store mode : file\u3001db\n      Default: file\n    --help\n\ne.g.\n\nsh seata-server.sh -p 8091 -h 127.0.0.1 -m file\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-5-run-example",children:"Step 5: Run example"}),"\n",(0,t.jsxs)(n.p,{children:["Go to samples repo: ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-seata-samples",children:"seata-samples"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Start DubboAccountServiceStarter"}),"\n",(0,t.jsx)(n.li,{children:"Start DubboStorageServiceStarter"}),"\n",(0,t.jsx)(n.li,{children:"Start DubboOrderServiceStarter"}),"\n",(0,t.jsx)(n.li,{children:"Run DubboBusinessTester for demo test"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"TBD: scripts for run demo applications"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},42740:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/architecture-6bdb120b83710010167e8b75448505ec.png"},6200:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/solution-1bdadb80e54074aa3088372c17f0244b.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);