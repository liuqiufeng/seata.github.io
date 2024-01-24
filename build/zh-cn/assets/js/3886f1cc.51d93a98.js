"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[59653],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>k});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?t.createElement(k,s(s({ref:n},p),{},{components:a})):t.createElement(k,s({ref:n},p))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23342:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(87462),r=(a(67294),a(3905));const o={hidden:!0,title:"Docker compose\u90e8\u7f72",keywords:["docker-compose","ops"],description:"\u4f7f\u7528 Docker-compose \u5feb\u901f\u90e8\u7f72 Seata Server",author:"zouwei",date:new Date("2022-09-06T00:00:00.000Z")},s="\u4f7f\u7528 docker-compose \u90e8\u7f72 Seata Server",l={unversionedId:"ops/deploy-by-docker-compose",id:"version-v1.2/ops/deploy-by-docker-compose",title:"Docker compose\u90e8\u7f72",description:"\u4f7f\u7528 Docker-compose \u5feb\u901f\u90e8\u7f72 Seata Server",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/ops/deploy-by-docker-compose.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker-compose",permalink:"/seata.github.io/zh-cn/docs/v1.2/ops/deploy-by-docker-compose",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/ops/deploy-by-docker-compose.md",tags:[],version:"v1.2",frontMatter:{hidden:!0,title:"Docker compose\u90e8\u7f72",keywords:["docker-compose","ops"],description:"\u4f7f\u7528 Docker-compose \u5feb\u901f\u90e8\u7f72 Seata Server",author:"zouwei",date:"2022-09-06T00:00:00.000Z"}},i={},c=[{value:"\u5386\u53f2\u7248\u672c\u90e8\u7f72",id:"\u5386\u53f2\u7248\u672c\u90e8\u7f72",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:'<a id="file-file">\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cfile\u5b58\u50a8</a>',id:"\u65e0\u6ce8\u518c\u4e2d\u5fc3file\u5b58\u50a8",level:3},{value:'<a id="file-db">\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cDB\u5b58\u50a8</a>',id:"\u65e0\u6ce8\u518c\u4e2d\u5fc3db\u5b58\u50a8",level:3},{value:'<a id="nacos-db">nacos\u6ce8\u518c\u4e2d\u5fc3\uff0cdb\u5b58\u50a8</a>',id:"nacos\u6ce8\u518c\u4e2d\u5fc3db\u5b58\u50a8",level:3},{value:'<a id="ha-nacos-db">\u9ad8\u53ef\u7528\u90e8\u7f72</a>',id:"\u9ad8\u53ef\u7528\u90e8\u7f72",level:3},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-docker-compose-\u90e8\u7f72-seata-server"},"\u4f7f\u7528 docker-compose \u90e8\u7f72 Seata Server"),(0,r.kt)("h2",{id:"\u5386\u53f2\u7248\u672c\u90e8\u7f72"},"\u5386\u53f2\u7248\u672c\u90e8\u7f72"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/ops/deploy-by-docker-compose-142/"},"1.5.0\u4ee5\u524d\u7248\u672c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/ops/deploy-by-docker-compose/"},"1.5.0\u4ee5\u540e\u7248\u672c(\u542b1.5.0)")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u76f4\u63a5\u62c9\u53d6latest\u7248\u672c\u955c\u50cf\uff0clatest\u7248\u672c\u5e76\u4e0d\u4e00\u5b9a\u662f\u7a33\u5b9a\u7248\u672c\uff0c\u4e3a\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u95ee\u9898\uff0c\u8bf7\u5230",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/seataio/seata-server/tags"},"docker\u955c\u50cf\u4ed3\u5e93"),"\u786e\u5b9a\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7248\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},"Seata Server 1.5.0\u7248\u672c\u5f00\u59cb\uff0c\u914d\u7f6e\u6587\u4ef6\u6539\u4e3aapplication.yml\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u65f6\u5019\uff0c\u9700\u8981\u5148\u628a\u539f\u751f\u914d\u7f6e\u62f7\u8d1d\u51fa\u6765\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u4e3a\u4e86\u83b7\u53d6seata server 1.5.0\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6211\u4eec\u9700\u8981\u5148\u542f\u52a8\u4e00\u4e2aseata server 1.5.0\u7684\u670d\u52a1\uff0c\u7136\u540e\u518d\u4ece\u542f\u52a8\u7684\u5bb9\u5668\u5b9e\u4f8b\u4e2d\u628a\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u590d\u5236\u51fa\u6765\uff0c\u518d\u8fdb\u884c\u4fee\u6539\u3002"),(0,r.kt)("p",null,"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n')),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"docker cp"),"\u547d\u4ee4\u628a\u5bb9\u5668\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"/seata-server/resources"),"\u4f4d\u7f6e\u7684\u8d44\u6e90\u6587\u4ef6\u62f7\u8d1d\u5230\u5bbf\u4e3b\u673a\u6307\u5b9a\u4f4d\u7f6e\u3002\n\u5728\u5bbf\u4e3b\u673a\u6307\u5b9a\u4f4d\u7f6e\u6211\u4eec\u5c31\u53ef\u4ee5\u770b\u5230\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u914d\u7f6e\u6587\u4ef6\uff0c\u76f8\u5173\u7684\u914d\u7f6e\u53ea\u9700\u8981\u4fee\u6539\u8fd9\u4e2a\u6587\u4ef6\u5373\u53ef\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u914d\u7f6e\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml"},"application.example.yml"))),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#file-file"},"\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cfile\u5b58\u50a8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#file-db"},"\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cdb\u5b58\u50a8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#nacos-db"},"nacos\u6ce8\u518c\u4e2d\u5fc3\uff0cdb\u5b58\u50a8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"#ha-nacos-db"},"\u9ad8\u53ef\u7528\u90e8\u7f72"))),(0,r.kt)("h3",{id:"\u65e0\u6ce8\u518c\u4e2d\u5fc3file\u5b58\u50a8"},(0,r.kt)("a",{id:"file-file"},"\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cfile\u5b58\u50a8")),(0,r.kt)("p",null,"\u8be5\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u9700\u8981\u6ce8\u518c\u4e2d\u5fc3\uff0c\u4e5f\u4e0d\u9700\u8981\u4efb\u4f55\u7b2c\u4e09\u65b9\u5b58\u50a8\u4e2d\u5fc3\u3002"),(0,r.kt)("p",null,"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n')),(0,r.kt)("h3",{id:"\u65e0\u6ce8\u518c\u4e2d\u5fc3db\u5b58\u50a8"},(0,r.kt)("a",{id:"file-db"},"\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cDB\u5b58\u50a8")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"db\u6a21\u5f0f\u9700\u8981\u5728\u6570\u636e\u5e93\u521b\u5efa\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\uff0c",(0,r.kt)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db"},"[\u5efa\u8868\u811a\u672c]"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff081\uff09application.yml\u914d\u7f6e\u6587\u4ef6")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u914d\u7f6e\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml"},"application.example.yml")),(0,r.kt)("p",null,"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f\u652f\u6301\u53ef\u53c2\u8003",(0,r.kt)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt"},"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 7091\n\nspring:\n  application:\n    name: seata-server\n\nlogging:\n  config: classpath:logback-spring.xml\n  file:\n    path: ${user.home}/logs/seata\n  extend:\n    logstash-appender:\n      destination: 127.0.0.1:4560\n    kafka-appender:\n      bootstrap-servers: 127.0.0.1:9092\n      topic: logback_to_logstash\n\nconsole:\n  user:\n    username: seata\n    password: seata\n\nseata:\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: file\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: file\n  store:\n    # support: file \u3001 db \u3001 redis\n    mode: db\n    db:\n      datasource: druid\n      dbType: mysql\n      # \u9700\u8981\u6839\u636emysql\u7684\u7248\u672c\u8c03\u6574driverClassName\n      # mysql8\u53ca\u4ee5\u4e0a\u7248\u672c\u5bf9\u5e94\u7684driver\uff1acom.mysql.cj.jdbc.Driver\n      # mysql8\u4ee5\u4e0b\u7248\u672c\u7684driver\uff1acom.mysql.jdbc.Driver\n      driverClassName: com.mysql.cj.jdbc.Driver\n      url: jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n      user: \u7528\u6237\u540d\n      password: \u5bc6\u7801\n      \n  #  server:\n  #    service-port: 8091 #If not configured, the default is '${server.port} + 1000'\n  security:\n    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n    tokenValidityInMilliseconds: 1800000\n    ignore:\n      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff082\uff09\u51c6\u5907docker-compose.yaml\u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:1.5.2\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - STORE_MODE=db\n      # \u4ee5SEATA_IP\u4f5c\u4e3ahost\u6ce8\u518cseata server\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime"        #\u8bbe\u7f6e\u7cfb\u7edf\u65f6\u533a\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  #\u8bbe\u7f6e\u65f6\u533a\n      # \u5047\u8bbe\u6211\u4eec\u901a\u8fc7docker cp\u547d\u4ee4\u628a\u8d44\u6e90\u6587\u4ef6\u62f7\u8d1d\u5230\u76f8\u5bf9\u8def\u5f84`./seata-server/resources`\u4e2d\n      # \u5982\u6709\u95ee\u9898\uff0c\u8bf7\u9605\u8bfb\u4e0a\u9762\u7684[\u6ce8\u610f\u4e8b\u9879]\u4ee5\u53ca[\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6]\n      - "./seata-server/resources:/seata-server/resources"\n')),(0,r.kt)("h3",{id:"nacos\u6ce8\u518c\u4e2d\u5fc3db\u5b58\u50a8"},(0,r.kt)("a",{id:"nacos-db"},"nacos\u6ce8\u518c\u4e2d\u5fc3\uff0cdb\u5b58\u50a8")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"db\u6a21\u5f0f\u9700\u8981\u5728\u6570\u636e\u5e93\u521b\u5efa\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\uff0c",(0,r.kt)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db"},"[\u5efa\u8868\u811a\u672c]"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff081\uff09application.yml\u914d\u7f6e\u6587\u4ef6")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u914d\u7f6e\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml"},"application.example.yml")),(0,r.kt)("p",null,"nacos\u6ce8\u518c\u4e2d\u5fc3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 7091\n\nspring:\n  application:\n    name: seata-server\n\nlogging:\n  config: classpath:logback-spring.xml\n  file:\n    path: ${user.home}/logs/seata\n  extend:\n    logstash-appender:\n      destination: 127.0.0.1:4560\n    kafka-appender:\n      bootstrap-servers: 127.0.0.1:9092\n      topic: logback_to_logstash\n\nconsole:\n  user:\n    username: seata\n    password: seata\n\nseata:\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: nacos\n    nacos:\n      server-addr: nacos_ip:nacos_port\n      namespace: seata-server\n      group: SEATA_GROUP\n      username: nacos\n      password: nacos\n      data-id: seataServer.properties\n\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: nacos_ip:nacos_port\n      group: SEATA_GROUP\n      namespace: seata-server\n      # tc\u96c6\u7fa4\u540d\u79f0\n      cluster: default\n      username: nacos\n      password: nacos\n#  server:\n#    service-port: 8091 #If not configured, the default is '${server.port} + 1000'\n  security:\n    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n    tokenValidityInMilliseconds: 1800000\n    ignore:\n      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff082\uff09\u51c6\u5907nacos\u914d\u7f6e\u4e2d\u5fc3\u914d\u7f6e")),(0,r.kt)("p",null,"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f\u652f\u6301\u53ef\u53c2\u8003",(0,r.kt)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt"},"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f60\u9700\u8981\u5728nacos\u65b0\u5efa\u914d\u7f6e\uff0c\u6b64\u5904dataId\u4e3aseataServer.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"store.mode=db\n#-----db-----\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# \u9700\u8981\u6839\u636emysql\u7684\u7248\u672c\u8c03\u6574driverClassName\n# mysql8\u53ca\u4ee5\u4e0a\u7248\u672c\u5bf9\u5e94\u7684driver\uff1acom.mysql.cj.jdbc.Driver\n# mysql8\u4ee5\u4e0b\u7248\u672c\u7684driver\uff1acom.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\nstore.db.user= \u7528\u6237\u540d\nstore.db.password=\u5bc6\u7801\n# \u6570\u636e\u5e93\u521d\u59cb\u8fde\u63a5\u6570\nstore.db.minConn=1\n# \u6570\u636e\u5e93\u6700\u5927\u8fde\u63a5\u6570\nstore.db.maxConn=20\n# \u83b7\u53d6\u8fde\u63a5\u65f6\u6700\u5927\u7b49\u5f85\u65f6\u95f4 \u9ed8\u8ba45000\uff0c\u5355\u4f4d\u6beb\u79d2\nstore.db.maxWait=5000\n# \u5168\u5c40\u4e8b\u52a1\u8868\u540d \u9ed8\u8ba4global_table\nstore.db.globalTable=global_table\n# \u5206\u652f\u4e8b\u52a1\u8868\u540d \u9ed8\u8ba4branch_table\nstore.db.branchTable=branch_table\n# \u5168\u5c40\u9501\u8868\u540d \u9ed8\u8ba4lock_table\nstore.db.lockTable=lock_table\n# \u67e5\u8be2\u5168\u5c40\u4e8b\u52a1\u4e00\u6b21\u7684\u6700\u5927\u6761\u6570 \u9ed8\u8ba4100\nstore.db.queryLimit=100\n\n\n# undo\u4fdd\u7559\u5929\u6570 \u9ed8\u8ba47\u5929,log_status=1\uff08\u9644\u5f553\uff09\u548c\u672a\u6b63\u5e38\u6e05\u7406\u7684undo\nserver.undo.logSaveDays=7\n# undo\u6e05\u7406\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4 \u9ed8\u8ba486400000\uff0c\u5355\u4f4d\u6beb\u79d2\nserver.undo.logDeletePeriod=86400000\n# \u4e8c\u9636\u6bb5\u63d0\u4ea4\u91cd\u8bd5\u8d85\u65f6\u65f6\u957f \u5355\u4f4dms,s,m,h,d,\u5bf9\u5e94\u6beb\u79d2,\u79d2,\u5206,\u5c0f\u65f6,\u5929,\u9ed8\u8ba4\u6beb\u79d2\u3002\u9ed8\u8ba4\u503c-1\u8868\u793a\u65e0\u9650\u91cd\u8bd5\n# \u516c\u5f0f: timeout>=now-globalTransactionBeginTime,true\u8868\u793a\u8d85\u65f6\u5219\u4e0d\u518d\u91cd\u8bd5\n# \u6ce8: \u8fbe\u5230\u8d85\u65f6\u65f6\u95f4\u540e\u5c06\u4e0d\u4f1a\u505a\u4efb\u4f55\u91cd\u8bd5,\u6709\u6570\u636e\u4e0d\u4e00\u81f4\u98ce\u9669,\u9664\u975e\u4e1a\u52a1\u81ea\u884c\u53ef\u6821\u51c6\u6570\u636e,\u5426\u8005\u614e\u7528\nserver.maxCommitRetryTimeout=-1\n# \u4e8c\u9636\u6bb5\u56de\u6eda\u91cd\u8bd5\u8d85\u65f6\u65f6\u957f\nserver.maxRollbackRetryTimeout=-1\n# \u4e8c\u9636\u6bb5\u63d0\u4ea4\u672a\u5b8c\u6210\u72b6\u6001\u5168\u5c40\u4e8b\u52a1\u91cd\u8bd5\u63d0\u4ea4\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4 \u9ed8\u8ba41000\uff0c\u5355\u4f4d\u6beb\u79d2\nserver.recovery.committingRetryPeriod=1000\n# \u4e8c\u9636\u6bb5\u5f02\u6b65\u63d0\u4ea4\u72b6\u6001\u91cd\u8bd5\u63d0\u4ea4\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4 \u9ed8\u8ba41000\uff0c\u5355\u4f4d\u6beb\u79d2\nserver.recovery.asynCommittingRetryPeriod=1000\n# \u4e8c\u9636\u6bb5\u56de\u6eda\u72b6\u6001\u91cd\u8bd5\u56de\u6eda\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4  \u9ed8\u8ba41000\uff0c\u5355\u4f4d\u6beb\u79d2\nserver.recovery.rollbackingRetryPeriod=1000\n# \u8d85\u65f6\u72b6\u6001\u68c0\u6d4b\u91cd\u8bd5\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4 \u9ed8\u8ba41000\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u68c0\u6d4b\u51fa\u8d85\u65f6\u5c06\u5168\u5c40\u4e8b\u52a1\u7f6e\u5165\u56de\u6eda\u4f1a\u8bdd\u7ba1\u7406\u5668\nserver.recovery.timeoutRetryPeriod=1000\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff083\uff09\u51c6\u5907docker-compose.yaml\u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:1.5.2\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - STORE_MODE=db\n      # \u4ee5SEATA_IP\u4f5c\u4e3ahost\u6ce8\u518cseata server\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime"        #\u8bbe\u7f6e\u7cfb\u7edf\u65f6\u533a\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  #\u8bbe\u7f6e\u65f6\u533a\n      # \u5047\u8bbe\u6211\u4eec\u901a\u8fc7docker cp\u547d\u4ee4\u628a\u8d44\u6e90\u6587\u4ef6\u62f7\u8d1d\u5230\u76f8\u5bf9\u8def\u5f84`./seata-server/resources`\u4e2d\n      # \u5982\u6709\u95ee\u9898\uff0c\u8bf7\u9605\u8bfb\u4e0a\u9762\u7684[\u6ce8\u610f\u4e8b\u9879]\u4ee5\u53ca[\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6]\n      - "./seata-server/resources:/seata-server/resources"\n')),(0,r.kt)("h3",{id:"\u9ad8\u53ef\u7528\u90e8\u7f72"},(0,r.kt)("a",{id:"ha-nacos-db"},"\u9ad8\u53ef\u7528\u90e8\u7f72")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"seata\u9ad8\u53ef\u7528\u4f9d\u8d56\u4e8e\u6ce8\u518c\u4e2d\u5fc3\u3001\u6570\u636e\u5e93\uff0c\u53ef\u4e0d\u4f9d\u8d56\u914d\u7f6e\u4e2d\u5fc3\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u4fdd\u8bc1\u591a\u4e2aSeata Server\u4f7f\u7528\u540c\u4e00\u4e2a\u6ce8\u518c\u4e2d\u5fc3\u548c\u540c\u4e00\u4e2a\u5b58\u50a8\u4e2d\u5fc3\uff0c\u8fd9\u6837\u624d\u80fd\u5f62\u6210\u9ad8\u53ef\u7528\u90e8\u7f72")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"db\u6a21\u5f0f\u9700\u8981\u5728\u6570\u636e\u5e93\u521b\u5efa\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\uff0c",(0,r.kt)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db"},"[\u5efa\u8868\u811a\u672c]"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff081\uff09application.yml\u914d\u7f6e\u6587\u4ef6")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u914d\u7f6e\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml"},"application.example.yml")),(0,r.kt)("p",null,"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f\u652f\u6301\u53ef\u53c2\u8003",(0,r.kt)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt"},"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 7091\n\nspring:\n  application:\n    name: seata-server\n\nlogging:\n  config: classpath:logback-spring.xml\n  file:\n    path: ${user.home}/logs/seata\n  extend:\n    logstash-appender:\n      destination: 127.0.0.1:4560\n    kafka-appender:\n      bootstrap-servers: 127.0.0.1:9092\n      topic: logback_to_logstash\n\nconsole:\n  user:\n    username: seata\n    password: seata\n\nseata:\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: nacos\n    nacos:\n      server-addr: nacos_ip:nacos_port\n      namespace: seata-server\n      group: SEATA_GROUP\n      usernam: nacos\n      password: nacos\n      data-id: seataServer.properties\n\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: nacos_ip:nacos_port\n      group: SEATA_GROUP\n      namespace: seata-server\n      # tc\u96c6\u7fa4\u540d\u79f0\n      cluster: default\n      username: nacos\n      password: nacos\n    #  store:\n    # support: file \u3001 db \u3001 redis\n  #    mode: file\n  #  server:\n  #    service-port: 8091 #If not configured, the default is '${server.port} + 1000'\n  security:\n    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n    tokenValidityInMilliseconds: 1800000\n    ignore:\n      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff082\uff09\u51c6\u5907nacos\u914d\u7f6e\u4e2d\u5fc3\u914d\u7f6e")),(0,r.kt)("p",null,"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f\u652f\u6301\u53ef\u53c2\u8003",(0,r.kt)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt"},"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f60\u9700\u8981\u5728nacos\u65b0\u5efa\u914d\u7f6e\uff0c\u6b64\u5904dataId\u4e3aseataServer.properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"store.mode=db\n#-----db-----\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# \u9700\u8981\u6839\u636emysql\u7684\u7248\u672c\u8c03\u6574driverClassName\n# mysql8\u53ca\u4ee5\u4e0a\u7248\u672c\u5bf9\u5e94\u7684driver\uff1acom.mysql.cj.jdbc.Driver\n# mysql8\u4ee5\u4e0b\u7248\u672c\u7684driver\uff1acom.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\nstore.db.user= \u7528\u6237\u540d\nstore.db.password=\u5bc6\u7801\n# \u6570\u636e\u5e93\u521d\u59cb\u8fde\u63a5\u6570\nstore.db.minConn=1\n# \u6570\u636e\u5e93\u6700\u5927\u8fde\u63a5\u6570\nstore.db.maxConn=20\n# \u83b7\u53d6\u8fde\u63a5\u65f6\u6700\u5927\u7b49\u5f85\u65f6\u95f4 \u9ed8\u8ba45000\uff0c\u5355\u4f4d\u6beb\u79d2\nstore.db.maxWait=5000\n# \u5168\u5c40\u4e8b\u52a1\u8868\u540d \u9ed8\u8ba4global_table\nstore.db.globalTable=global_table\n# \u5206\u652f\u4e8b\u52a1\u8868\u540d \u9ed8\u8ba4branch_table\nstore.db.branchTable=branch_table\n# \u5168\u5c40\u9501\u8868\u540d \u9ed8\u8ba4lock_table\nstore.db.lockTable=lock_table\n# \u67e5\u8be2\u5168\u5c40\u4e8b\u52a1\u4e00\u6b21\u7684\u6700\u5927\u6761\u6570 \u9ed8\u8ba4100\nstore.db.queryLimit=100\n\n\n# undo\u4fdd\u7559\u5929\u6570 \u9ed8\u8ba47\u5929,log_status=1\uff08\u9644\u5f553\uff09\u548c\u672a\u6b63\u5e38\u6e05\u7406\u7684undo\nserver.undo.logSaveDays=7\n# undo\u6e05\u7406\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4 \u9ed8\u8ba486400000\uff0c\u5355\u4f4d\u6beb\u79d2\nserver.undo.logDeletePeriod=86400000\n# \u4e8c\u9636\u6bb5\u63d0\u4ea4\u91cd\u8bd5\u8d85\u65f6\u65f6\u957f \u5355\u4f4dms,s,m,h,d,\u5bf9\u5e94\u6beb\u79d2,\u79d2,\u5206,\u5c0f\u65f6,\u5929,\u9ed8\u8ba4\u6beb\u79d2\u3002\u9ed8\u8ba4\u503c-1\u8868\u793a\u65e0\u9650\u91cd\u8bd5\n# \u516c\u5f0f: timeout>=now-globalTransactionBeginTime,true\u8868\u793a\u8d85\u65f6\u5219\u4e0d\u518d\u91cd\u8bd5\n# \u6ce8: \u8fbe\u5230\u8d85\u65f6\u65f6\u95f4\u540e\u5c06\u4e0d\u4f1a\u505a\u4efb\u4f55\u91cd\u8bd5,\u6709\u6570\u636e\u4e0d\u4e00\u81f4\u98ce\u9669,\u9664\u975e\u4e1a\u52a1\u81ea\u884c\u53ef\u6821\u51c6\u6570\u636e,\u5426\u8005\u614e\u7528\nserver.maxCommitRetryTimeout=-1\n# \u4e8c\u9636\u6bb5\u56de\u6eda\u91cd\u8bd5\u8d85\u65f6\u65f6\u957f\nserver.maxRollbackRetryTimeout=-1\n# \u4e8c\u9636\u6bb5\u63d0\u4ea4\u672a\u5b8c\u6210\u72b6\u6001\u5168\u5c40\u4e8b\u52a1\u91cd\u8bd5\u63d0\u4ea4\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4 \u9ed8\u8ba41000\uff0c\u5355\u4f4d\u6beb\u79d2\nserver.recovery.committingRetryPeriod=1000\n# \u4e8c\u9636\u6bb5\u5f02\u6b65\u63d0\u4ea4\u72b6\u6001\u91cd\u8bd5\u63d0\u4ea4\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4 \u9ed8\u8ba41000\uff0c\u5355\u4f4d\u6beb\u79d2\nserver.recovery.asynCommittingRetryPeriod=1000\n# \u4e8c\u9636\u6bb5\u56de\u6eda\u72b6\u6001\u91cd\u8bd5\u56de\u6eda\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4  \u9ed8\u8ba41000\uff0c\u5355\u4f4d\u6beb\u79d2\nserver.recovery.rollbackingRetryPeriod=1000\n# \u8d85\u65f6\u72b6\u6001\u68c0\u6d4b\u91cd\u8bd5\u7ebf\u7a0b\u95f4\u9694\u65f6\u95f4 \u9ed8\u8ba41000\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u68c0\u6d4b\u51fa\u8d85\u65f6\u5c06\u5168\u5c40\u4e8b\u52a1\u7f6e\u5165\u56de\u6eda\u4f1a\u8bdd\u7ba1\u7406\u5668\nserver.recovery.timeoutRetryPeriod=1000\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uff083\uff09\u51c6\u5907docker-compose.yaml\u6587\u4ef6")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ea\u8981\u4fdd\u6301\u914d\u7f6e\u4e00\u81f4\uff0cseata\u670d\u52a1\u53ef\u5728\u4e00\u53f0\u673a\u5668\u4e0a\u90e8\u7f72\u591a\u5b9e\u4f8b\uff0c\u4e5f\u53ef\u540c\u65f6\u90e8\u7f72\u5728\u591a\u53f0\u4e0d\u540c\u7684\u4e3b\u673a\u4e0b\u9762\u5b9e\u73b0\u670d\u52a1\u9ad8\u53ef\u7528\u3002\n",(0,r.kt)("a",{parentName:"p",href:"/docs/ops/deploy-ha/"},"\u9ad8\u53ef\u7528\u90e8\u7f72"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  seata-server-1:\n    image: seataio/seata-server:${latest-release-version}\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - STORE_MODE=db\n      # \u4ee5SEATA_IP\u4f5c\u4e3ahost\u6ce8\u518cseata server\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime"        #\u8bbe\u7f6e\u7cfb\u7edf\u65f6\u533a\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  #\u8bbe\u7f6e\u65f6\u533a\n      # \u5047\u8bbe\u6211\u4eec\u901a\u8fc7docker cp\u547d\u4ee4\u628a\u8d44\u6e90\u6587\u4ef6\u62f7\u8d1d\u5230\u76f8\u5bf9\u8def\u5f84`./seata-server/resources`\u4e2d\n      # \u5982\u6709\u95ee\u9898\uff0c\u8bf7\u9605\u8bfb\u4e0a\u9762\u7684[\u6ce8\u610f\u4e8b\u9879]\u4ee5\u53ca[\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6]\n      - "./seata-server/resources:/seata-server/resources"\n\n  seata-server-2:\n    image: seataio/seata-server:${latest-release-version}\n    ports:\n      - "7092:7091"\n      - "8092:8092"\n    environment:\n      - STORE_MODE=db\n      # \u4ee5SEATA_IP\u4f5c\u4e3ahost\u6ce8\u518cseata server\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8092\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime"        #\u8bbe\u7f6e\u7cfb\u7edf\u65f6\u533a\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  #\u8bbe\u7f6e\u65f6\u533a\n      # \u5047\u8bbe\u6211\u4eec\u901a\u8fc7docker cp\u547d\u4ee4\u628a\u8d44\u6e90\u6587\u4ef6\u62f7\u8d1d\u5230\u76f8\u5bf9\u8def\u5f84`./seata-server/resources`\u4e2d\n      # \u5982\u6709\u95ee\u9898\uff0c\u8bf7\u9605\u8bfb\u4e0a\u9762\u7684[\u6ce8\u610f\u4e8b\u9879]\u4ee5\u53ca[\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6]\n      - "./seata-server/resources:/seata-server/resources"\n\n  # seata\u670d\u52a13......seata\u670d\u52a1N\n')),(0,r.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"seata-server \u652f\u6301\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\uff1a "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SEATA_IP"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684IP, \u8be5IP\u7528\u4e8e\u5411\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u65f6\u4f7f\u7528, \u5982eureka\u7b49")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SEATA_PORT"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684\u7aef\u53e3, \u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"8091"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STORE_MODE"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9aseata-server\u7684\u4e8b\u52a1\u65e5\u5fd7\u5b58\u50a8\u65b9\u5f0f, \u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"db"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"redis"),"(Seata-Server 1.3\u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301), \u9ed8\u8ba4\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"file"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SERVER_NODE"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u7528\u4e8e\u6307\u5b9aseata-server\u8282\u70b9ID, \u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),",",(0,r.kt)("inlineCode",{parentName:"p"},"2"),",",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"..., \u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6839\u636eip\u751f\u6210"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SEATA_ENV"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9a seata-server \u8fd0\u884c\u73af\u5883, \u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," \u7b49, \u670d\u52a1\u542f\u52a8\u65f6\u4f1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"registry-dev.conf")," \u8fd9\u6837\u7684\u914d\u7f6e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SEATA_CONFIG_NAME"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u9009, \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e, \u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"file:/root/registry"),", \u5c06\u4f1a\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/registry.conf")," \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u9700\u8981\u540c\u65f6\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"file.conf"),"\u6587\u4ef6\uff0c\u9700\u8981\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"config.file.name"),"\u7684\u503c\u6539\u4e3a\u7c7b\u4f3c",(0,r.kt)("inlineCode",{parentName:"p"},"file:/root/file.conf"),"\uff1a")))}d.isMDXComponent=!0}}]);