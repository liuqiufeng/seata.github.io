"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[524],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(b,i(i({ref:t},u),{},{components:a})):r.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"\u5982\u4f55\u4f7f\u7528Seata\u4fdd\u8bc1Dubbo\u5fae\u670d\u52a1\u95f4\u7684\u4e00\u81f4\u6027",keywords:["Dubbo","Seata","\u4e00\u81f4\u6027"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Seata\u4fdd\u8bc1Dubbo\u5fae\u670d\u52a1\u95f4\u7684\u4e00\u81f4\u6027",author:"slievrly",date:new Date("2019-03-07T00:00:00.000Z")},i="\u5982\u4f55\u4f7f\u7528Seata\u4fdd\u8bc1Dubbo\u5fae\u670d\u52a1\u95f4\u7684\u4e00\u81f4\u6027",s={permalink:"/seata.github.io/zh-cn/blog/quick-start-use-seata-and-dubbo-services",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/quick-start-use-seata-and-dubbo-services.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/quick-start-use-seata-and-dubbo-services.md",title:"\u5982\u4f55\u4f7f\u7528Seata\u4fdd\u8bc1Dubbo\u5fae\u670d\u52a1\u95f4\u7684\u4e00\u81f4\u6027",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Seata\u4fdd\u8bc1Dubbo\u5fae\u670d\u52a1\u95f4\u7684\u4e00\u81f4\u6027",date:"2019-03-07T00:00:00.000Z",formattedDate:"2019\u5e743\u67087\u65e5",tags:[],readingTime:3.345,hasTruncateMarker:!1,authors:[{name:"slievrly"}],frontMatter:{title:"\u5982\u4f55\u4f7f\u7528Seata\u4fdd\u8bc1Dubbo\u5fae\u670d\u52a1\u95f4\u7684\u4e00\u81f4\u6027",keywords:["Dubbo","Seata","\u4e00\u81f4\u6027"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Seata\u4fdd\u8bc1Dubbo\u5fae\u670d\u52a1\u95f4\u7684\u4e00\u81f4\u6027",author:"slievrly",date:"2019-03-07T00:00:00.000Z"},prevItem:{title:"TCC \u7406\u8bba\u53ca\u8bbe\u8ba1\u5b9e\u73b0\u6307\u5357\u4ecb\u7ecd",permalink:"/seata.github.io/zh-cn/blog/tcc-mode-design-principle"},nextItem:{title:"Fescar\u5206\u5e03\u5f0f\u4e8b\u52a1\u539f\u7406\u89e3\u6790\u63a2\u79d8",permalink:"/seata.github.io/zh-cn/blog/seata-analysis-simple"}},l={authorsImageUrls:[void 0]},c=[{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u4e1a\u52a1\u7ed3\u6784\u56fe",id:"\u4e1a\u52a1\u7ed3\u6784\u56fe",level:3},{value:"StorageService",id:"storageservice",level:3},{value:"OrderService",id:"orderservice",level:3},{value:"AccountService",id:"accountservice",level:3},{value:"\u4e3b\u8981\u7684\u4e1a\u52a1\u903b\u8f91\uff1a",id:"\u4e3b\u8981\u7684\u4e1a\u52a1\u903b\u8f91",level:3},{value:"Seata \u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848",id:"seata-\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848",level:2},{value:"Dubbo \u4e0e Seata \u7ed3\u5408\u7684\u4f8b\u5b50",id:"dubbo-\u4e0e-seata-\u7ed3\u5408\u7684\u4f8b\u5b50",level:2},{value:"Step 1: \u5b89\u88c5\u6570\u636e\u5e93",id:"step-1-\u5b89\u88c5\u6570\u636e\u5e93",level:3},{value:"Step 2: \u4e3a Seata \u521b\u5efa UNDO_LOG \u8868",id:"step-2-\u4e3a-seata-\u521b\u5efa-undo_log-\u8868",level:3},{value:"Step 3: \u521b\u5efa\u76f8\u5173\u4e1a\u52a1\u8868",id:"step-3-\u521b\u5efa\u76f8\u5173\u4e1a\u52a1\u8868",level:3},{value:"Step 4: \u542f\u52a8 Seata-Server \u670d\u52a1",id:"step-4-\u542f\u52a8-seata-server-\u670d\u52a1",level:3},{value:"Step 5: \u8fd0\u884c\u4f8b\u5b50",id:"step-5-\u8fd0\u884c\u4f8b\u5b50",level:3},{value:"\u76f8\u5173\u9879\u76ee",id:"\u76f8\u5173\u9879\u76ee",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,n.kt)("p",null,"\u7528\u6237\u91c7\u8d2d\u5546\u54c1\u4e1a\u52a1\uff0c\u6574\u4e2a\u4e1a\u52a1\u5305\u542b3\u4e2a\u5fae\u670d\u52a1:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e93\u5b58\u670d\u52a1: \u6263\u51cf\u7ed9\u5b9a\u5546\u54c1\u7684\u5e93\u5b58\u6570\u91cf\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8ba2\u5355\u670d\u52a1: \u6839\u636e\u91c7\u8d2d\u8bf7\u6c42\u751f\u6210\u8ba2\u5355\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8d26\u6237\u670d\u52a1: \u7528\u6237\u8d26\u6237\u91d1\u989d\u6263\u51cf\u3002")),(0,n.kt)("h3",{id:"\u4e1a\u52a1\u7ed3\u6784\u56fe"},"\u4e1a\u52a1\u7ed3\u6784\u56fe"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture",src:a(31837).Z,width:"1468",height:"868"})," "),(0,n.kt)("h3",{id:"storageservice"},"StorageService"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface StorageService {\n\n    /**\n     * deduct storage count\n     */\n    void deduct(String commodityCode, int count);\n}\n")),(0,n.kt)("h3",{id:"orderservice"},"OrderService"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface OrderService {\n\n    /**\n     * create order\n     */\n    Order create(String userId, String commodityCode, int orderCount);\n}\n")),(0,n.kt)("h3",{id:"accountservice"},"AccountService"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface AccountService {\n\n    /**\n     * debit balance of user's account\n     */\n    void debit(String userId, int money);\n}\n")),(0,n.kt)("h3",{id:"\u4e3b\u8981\u7684\u4e1a\u52a1\u903b\u8f91"},"\u4e3b\u8981\u7684\u4e1a\u52a1\u903b\u8f91\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class BusinessServiceImpl implements BusinessService {\n\n    private StorageService storageService;\n\n    private OrderService orderService;\n\n    /**\n     * purchase\n     */\n    public void purchase(String userId, String commodityCode, int orderCount) {\n\n        storageService.deduct(commodityCode, orderCount);\n\n        orderService.create(userId, commodityCode, orderCount);\n    }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class StorageServiceImpl implements StorageService {\n\n  private StorageDAO storageDAO;\n  \n    @Override\n    public void deduct(String commodityCode, int count) {\n        Storage storage = new Storage();\n        storage.setCount(count);\n        storage.setCommodityCode(commodityCode);\n        storageDAO.update(storage);\n    }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class OrderServiceImpl implements OrderService {\n\n    private OrderDAO orderDAO;\n\n    private AccountService accountService;\n\n    public Order create(String userId, String commodityCode, int orderCount) {\n\n        int orderMoney = calculate(commodityCode, orderCount);\n\n        accountService.debit(userId, orderMoney);\n\n        Order order = new Order();\n        order.userId = userId;\n        order.commodityCode = commodityCode;\n        order.count = orderCount;\n        order.money = orderMoney;\n\n        return orderDAO.insert(order);\n    }\n}\n")),(0,n.kt)("h2",{id:"seata-\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848"},"Seata \u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"undefined",src:a(2059).Z,width:"1490",height:"852"})," "),(0,n.kt)("p",null,"\u6b64\u5904\u4ec5\u4ec5\u9700\u8981\u4e00\u884c\u6ce8\u89e3 ",(0,n.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," \u5199\u5728\u4e1a\u52a1\u53d1\u8d77\u65b9\u7684\u65b9\u6cd5\u4e0a: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\n    @GlobalTransactional\n    public void purchase(String userId, String commodityCode, int orderCount) {\n        ......\n    }\n")),(0,n.kt)("h2",{id:"dubbo-\u4e0e-seata-\u7ed3\u5408\u7684\u4f8b\u5b50"},"Dubbo \u4e0e Seata \u7ed3\u5408\u7684\u4f8b\u5b50"),(0,n.kt)("h3",{id:"step-1-\u5b89\u88c5\u6570\u636e\u5e93"},"Step 1: \u5b89\u88c5\u6570\u636e\u5e93"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8981\u6c42: MySQL (InnoDB \u5b58\u50a8\u5f15\u64ce)\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u63d0\u793a:")," \u4e8b\u5b9e\u4e0a\u4f8b\u5b50\u4e2d3\u4e2a\u5fae\u670d\u52a1\u9700\u89813\u4e2a\u72ec\u7acb\u7684\u6570\u636e\u5e93\uff0c\u4f46\u4e3a\u4e86\u65b9\u4fbf\u6211\u4eec\u4f7f\u7528\u540c\u4e00\u7269\u7406\u5e93\u5e76\u914d\u7f6e3\u4e2a\u903b\u8f91\u8fde\u63a5\u4e32\u3002 "),(0,n.kt)("p",null,"\u66f4\u6539\u4ee5\u4e0bxml\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5e93url\u3001username\u548cpassword"),(0,n.kt)("p",null,"dubbo-account-service.xml\ndubbo-order-service.xml\ndubbo-storage-service.xml"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'    <property name="url" value="jdbc:mysql://x.x.x.x:3306/xxx" />\n    <property name="username" value="xxx" />\n    <property name="password" value="xxx" />\n')),(0,n.kt)("h3",{id:"step-2-\u4e3a-seata-\u521b\u5efa-undo_log-\u8868"},"Step 2: \u4e3a Seata \u521b\u5efa UNDO_LOG \u8868"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"UNDO_LOG")," \u6b64\u8868\u7528\u4e8e Seata \u7684AT\u6a21\u5f0f\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `undo_log` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n  `branch_id` bigint(20) NOT NULL,\n  `xid` varchar(100) NOT NULL,\n  `rollback_info` longblob NOT NULL,\n  `log_status` int(11) NOT NULL,\n  `log_created` datetime NOT NULL,\n  `log_modified` datetime NOT NULL,\n  `ext` varchar(100) DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  KEY `idx_unionkey` (`xid`,`branch_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8\n")),(0,n.kt)("h3",{id:"step-3-\u521b\u5efa\u76f8\u5173\u4e1a\u52a1\u8868"},"Step 3: \u521b\u5efa\u76f8\u5173\u4e1a\u52a1\u8868"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\nDROP TABLE IF EXISTS `storage_tbl`;\nCREATE TABLE `storage_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY (`commodity_code`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `order_tbl`;\nCREATE TABLE `order_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `account_tbl`;\nCREATE TABLE `account_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,n.kt)("h3",{id:"step-4-\u542f\u52a8-seata-server-\u670d\u52a1"},"Step 4: \u542f\u52a8 Seata-Server \u670d\u52a1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0b\u8f7dServer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/releases"},"package"),", \u5e76\u89e3\u538b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884cbin\u76ee\u5f55\u4e0b\u7684\u542f\u52a8\u811a\u672c\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sh seata-server.sh $LISTEN_PORT $PATH_FOR_PERSISTENT_DATA\n\ne.g.\n\nsh seata-server.sh 8091 /home/admin/seata/data/\n")),(0,n.kt)("h3",{id:"step-5-\u8fd0\u884c\u4f8b\u5b50"},"Step 5: \u8fd0\u884c\u4f8b\u5b50"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u8d26\u6237\u670d\u52a1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboAccountServiceStarter.java"},"DubboAccountServiceStarter"),")\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u5e93\u5b58\u670d\u52a1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboStorageServiceStarter.java"},"DubboStorageServiceStarter"),")\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u8ba2\u5355\u670d\u52a1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboOrderServiceStarter.java"},"DubboOrderServiceStarter"),")\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884cBusinessService\u5165\u53e3 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples/blob/master/dubbo/src/main/java/com/seata/seata/samples/dubbo/starter/DubboBusinessTester.java"},"DubboBusinessTester"),")\u3002")),(0,n.kt)("h3",{id:"\u76f8\u5173\u9879\u76ee"},"\u76f8\u5173\u9879\u76ee"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"seata:          ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/"},"https://github.com/seata/seata/")),(0,n.kt)("li",{parentName:"ul"},"seata-samples : ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-samples"},"https://github.com/seata/seata-samples"))))}p.isMDXComponent=!0},31837:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/seata-1-921f8d579a15d413c12f3542be7f5ffb.png"},2059:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/seata-2-3e4981c059d8c4d72aec440b06c30a65.png"}}]);