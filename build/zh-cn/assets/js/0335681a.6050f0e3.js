"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[60364],{68994:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=r(74848),t=r(28453);const s={title:"\u5feb\u901f\u542f\u52a8",keywords:["Seata"],description:"Seata \u5feb\u901f\u5f00\u59cb\u3002"},c="\u5feb\u901f\u5f00\u59cb",d={id:"user/quickstart",title:"\u5feb\u901f\u542f\u52a8",description:"Seata \u5feb\u901f\u5f00\u59cb\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/user/quickstart.md",sourceDirName:"user",slug:"/user/quickstart",permalink:"/seata.github.io/zh-cn/docs/v1.3/user/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/user/quickstart.md",tags:[],version:"v1.3",frontMatter:{title:"\u5feb\u901f\u542f\u52a8",keywords:["Seata"],description:"Seata \u5feb\u901f\u5f00\u59cb\u3002"},sidebar:"docs",previous:{title:"FAQ",permalink:"/seata.github.io/zh-cn/docs/v1.3/overview/faq"},next:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/seata.github.io/zh-cn/docs/v1.3/user/configurations"}},o={},a=[{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:2},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",level:3},{value:"\u4ed3\u50a8\u670d\u52a1",id:"\u4ed3\u50a8\u670d\u52a1",level:3},{value:"\u8ba2\u5355\u670d\u52a1",id:"\u8ba2\u5355\u670d\u52a1",level:3},{value:"\u5e10\u6237\u670d\u52a1",id:"\u5e10\u6237\u670d\u52a1",level:3},{value:"\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91",id:"\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91",level:3},{value:"SEATA \u7684\u5206\u5e03\u5f0f\u4ea4\u6613\u89e3\u51b3\u65b9\u6848",id:"seata-\u7684\u5206\u5e03\u5f0f\u4ea4\u6613\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u7531 Dubbo + SEATA \u63d0\u4f9b\u652f\u6301\u7684\u793a\u4f8b",id:"\u7531-dubbo--seata-\u63d0\u4f9b\u652f\u6301\u7684\u793a\u4f8b",level:2},{value:"\u6b65\u9aa4 1\uff1a\u5efa\u7acb\u6570\u636e\u5e93",id:"\u6b65\u9aa4-1\u5efa\u7acb\u6570\u636e\u5e93",level:3},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa UNDO_LOG \u8868",id:"\u6b65\u9aa4-2\u521b\u5efa-undo_log-\u8868",level:3},{value:"\u6b65\u9aa4 3\uff1a\u4e3a\u793a\u4f8b\u4e1a\u52a1\u521b\u5efa\u8868",id:"\u6b65\u9aa4-3\u4e3a\u793a\u4f8b\u4e1a\u52a1\u521b\u5efa\u8868",level:3},{value:"\u6b65\u9aa4 4: \u542f\u52a8\u670d\u52a1",id:"\u6b65\u9aa4-4-\u542f\u52a8\u670d\u52a1",level:3},{value:"\u6b65\u9aa4 5: \u8fd0\u884c\u793a\u4f8b",id:"\u6b65\u9aa4-5-\u8fd0\u884c\u793a\u4f8b",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,i.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u4ece\u4e00\u4e2a\u5fae\u670d\u52a1\u793a\u4f8b\u5f00\u59cb\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7528\u4f8b",children:"\u7528\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u8d2d\u4e70\u5546\u54c1\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u6574\u4e2a\u4e1a\u52a1\u903b\u8f91\u7531 3 \u4e2a\u5fae\u670d\u52a1\u63d0\u4f9b\u652f\u6301\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4ed3\u50a8\u670d\u52a1\uff1a\u5bf9\u7ed9\u5b9a\u7684\u5546\u54c1\u6263\u9664\u4ed3\u50a8\u6570\u91cf\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u8ba2\u5355\u670d\u52a1\uff1a\u6839\u636e\u91c7\u8d2d\u9700\u6c42\u521b\u5efa\u8ba2\u5355\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5e10\u6237\u670d\u52a1\uff1a\u4ece\u7528\u6237\u5e10\u6237\u4e2d\u6263\u9664\u4f59\u989d\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u67b6\u6784\u56fe",children:"\u67b6\u6784\u56fe"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Architecture",src:r(42740).A+"",width:"1732",height:"940"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4ed3\u50a8\u670d\u52a1",children:"\u4ed3\u50a8\u670d\u52a1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public interface StorageService {\n\n    /**\n     * \u6263\u9664\u5b58\u50a8\u6570\u91cf\n     */\n    void deduct(String commodityCode, int count);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u8ba2\u5355\u670d\u52a1",children:"\u8ba2\u5355\u670d\u52a1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public interface OrderService {\n\n    /**\n     * \u521b\u5efa\u8ba2\u5355\n     */\n    Order create(String userId, String commodityCode, int orderCount);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5e10\u6237\u670d\u52a1",children:"\u5e10\u6237\u670d\u52a1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public interface AccountService {\n\n    /**\n     * \u4ece\u7528\u6237\u8d26\u6237\u4e2d\u501f\u51fa\n     */\n    void debit(String userId, int money);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91",children:"\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class BusinessServiceImpl implements BusinessService {\n\n    private StorageService storageService;\n\n    private OrderService orderService;\n\n    /**\n     * \u91c7\u8d2d\n     */\n    public void purchase(String userId, String commodityCode, int orderCount) {\n\n        storageService.deduct(commodityCode, orderCount);\n\n        orderService.create(userId, commodityCode, orderCount);\n    }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class OrderServiceImpl implements OrderService {\n\n    private OrderDAO orderDAO;\n\n    private AccountService accountService;\n\n    public Order create(String userId, String commodityCode, int orderCount) {\n\n        int orderMoney = calculate(commodityCode, orderCount);\n\n        accountService.debit(userId, orderMoney);\n\n        Order order = new Order();\n        order.userId = userId;\n        order.commodityCode = commodityCode;\n        order.count = orderCount;\n        order.money = orderMoney;\n\n        // INSERT INTO orders ...\n        return orderDAO.insert(order);\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"seata-\u7684\u5206\u5e03\u5f0f\u4ea4\u6613\u89e3\u51b3\u65b9\u6848",children:"SEATA \u7684\u5206\u5e03\u5f0f\u4ea4\u6613\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:r(6200).A+"",width:"868",height:"473"}),"\n\u6211\u4eec\u53ea\u9700\u8981\u4f7f\u7528\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"@GlobalTransactional"})," \u6ce8\u89e3\u5728\u4e1a\u52a1\u65b9\u6cd5\u4e0a:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\n    @GlobalTransactional\n    public void purchase(String userId, String commodityCode, int orderCount) {\n        ......\n    }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7531-dubbo--seata-\u63d0\u4f9b\u652f\u6301\u7684\u793a\u4f8b",children:"\u7531 Dubbo + SEATA \u63d0\u4f9b\u652f\u6301\u7684\u793a\u4f8b"}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa4-1\u5efa\u7acb\u6570\u636e\u5e93",children:"\u6b65\u9aa4 1\uff1a\u5efa\u7acb\u6570\u636e\u5e93"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8981\u6c42\uff1a\u5177\u6709 InnoDB \u5f15\u64ce\u7684 MySQL\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6ce8\u610f:"})," \u5b9e\u9645\u4e0a\uff0c\u5728\u793a\u4f8b\u7528\u4f8b\u4e2d\uff0c\u8fd9 3 \u4e2a\u670d\u52a1\u5e94\u8be5\u6709 3 \u4e2a\u6570\u636e\u5e93\u3002 \u4f46\u662f\uff0c\u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u53ea\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93\u5e76\u914d\u7f6e 3 \u4e2a\u6570\u636e\u6e90\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u60a8\u521a\u521b\u5efa\u7684\u6570\u636e\u5e93 URL/username/password \u4fee\u6539 Spring XML\u3002"}),"\n",(0,i.jsx)(n.p,{children:"dubbo-account-service.xml\ndubbo-order-service.xml\ndubbo-storage-service.xml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'        <property name="url" value="jdbc:mysql://x.x.x.x:3306/xxx" />\n        <property name="username" value="xxx" />\n        <property name="password" value="xxx" />\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa4-2\u521b\u5efa-undo_log-\u8868",children:"\u6b65\u9aa4 2\uff1a\u521b\u5efa UNDO_LOG \u8868"}),"\n",(0,i.jsxs)(n.p,{children:["SEATA AT \u6a21\u5f0f\u9700\u8981 ",(0,i.jsx)(n.code,{children:"UNDO_LOG"})," \u8868"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- \u6ce8\u610f\u6b64\u59040.3.0+ \u589e\u52a0\u552f\u4e00\u7d22\u5f15 ux_undo_log\nCREATE TABLE `undo_log` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n  `branch_id` bigint(20) NOT NULL,\n  `xid` varchar(100) NOT NULL,\n  `context` varchar(128) NOT NULL,\n  `rollback_info` longblob NOT NULL,\n  `log_status` int(11) NOT NULL,\n  `log_created` datetime NOT NULL,\n  `log_modified` datetime NOT NULL,\n  `ext` varchar(100) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa4-3\u4e3a\u793a\u4f8b\u4e1a\u52a1\u521b\u5efa\u8868",children:"\u6b65\u9aa4 3\uff1a\u4e3a\u793a\u4f8b\u4e1a\u52a1\u521b\u5efa\u8868"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"\nDROP TABLE IF EXISTS `storage_tbl`;\nCREATE TABLE `storage_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY (`commodity_code`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `order_tbl`;\nCREATE TABLE `order_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `account_tbl`;\nCREATE TABLE `account_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa4-4-\u542f\u52a8\u670d\u52a1",children:"\u6b65\u9aa4 4: \u542f\u52a8\u670d\u52a1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4ece ",(0,i.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/releases,%E4%B8%8B%E8%BD%BD%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BD%AF%E4%BB%B6%E5%8C%85%EF%BC%8C%E5%B0%86%E5%85%B6%E8%A7%A3%E5%8E%8B%E7%BC%A9%E3%80%82",children:"https://github.com/apache/incubator-seata/releases,\u4e0b\u8f7d\u670d\u52a1\u5668\u8f6f\u4ef6\u5305\uff0c\u5c06\u5176\u89e3\u538b\u7f29\u3002"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Usage: sh seata-server.sh(for linux and mac) or cmd seata-server.bat(for windows) [options]\n  Options:\n    --host, -h\n      The address is expose to registration center and other service can access seata-server via this ip\n      Default: 0.0.0.0\n    --port, -p\n      The port to listen.\n      Default: 8091\n    --storeMode, -m\n      log store mode : file\u3001db\n      Default: file\n    --help\n\ne.g.\n\nsh seata-server.sh -p 8091 -h 127.0.0.1 -m file\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6b65\u9aa4-5-\u8fd0\u884c\u793a\u4f8b",children:"\u6b65\u9aa4 5: \u8fd0\u884c\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u4ed3\u5e93: ",(0,i.jsx)(n.a,{href:"https://github.com/apache/incubator-seata-samples",children:"seata-samples"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u542f\u52a8 DubboAccountServiceStarter"}),"\n",(0,i.jsx)(n.li,{children:"\u542f\u52a8 DubboStorageServiceStarter"}),"\n",(0,i.jsx)(n.li,{children:"\u542f\u52a8 DubboOrderServiceStarter"}),"\n",(0,i.jsx)(n.li,{children:"\u8fd0\u884c DubboBusinessTester for demo test"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"TBD: \u8fd0\u884c\u6f14\u793a\u5e94\u7528\u7a0b\u5e8f\u7684\u811a\u672c"})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},42740:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/architecture-6bdb120b83710010167e8b75448505ec.png"},6200:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/solution-1bdadb80e54074aa3088372c17f0244b.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var i=r(96540);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);