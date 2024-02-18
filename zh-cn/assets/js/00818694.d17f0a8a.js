"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[37383],{4219:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=e(74848),s=e(28453);const r={title:"Seata\u5206\u5e03\u5f0f\u4e8b\u52a1\u542f\u7528Nacos\u505a\u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Nacos","\u5206\u5e03\u5f0f\u4e8b\u52a1"],description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528Seata\u6574\u5408Nacos\u914d\u7f6e",author:"FUNKYE",date:"2019/12/02"},o="Seata\u5206\u5e03\u5f0f\u4e8b\u52a1\u542f\u7528Nacos\u505a\u914d\u7f6e\u4e2d\u5fc3",c={permalink:"/seata.github.io/zh-cn/blog/seata-nacos-analysis",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-nacos-analysis.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-nacos-analysis.md",title:"Seata\u5206\u5e03\u5f0f\u4e8b\u52a1\u542f\u7528Nacos\u505a\u914d\u7f6e\u4e2d\u5fc3",description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528Seata\u6574\u5408Nacos\u914d\u7f6e",date:"2019-12-02T00:00:00.000Z",formattedDate:"2019\u5e7412\u67082\u65e5",tags:[],readingTime:6.475,hasTruncateMarker:!1,authors:[{name:"FUNKYE"}],frontMatter:{title:"Seata\u5206\u5e03\u5f0f\u4e8b\u52a1\u542f\u7528Nacos\u505a\u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Nacos","\u5206\u5e03\u5f0f\u4e8b\u52a1"],description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u4f7f\u7528Seata\u6574\u5408Nacos\u914d\u7f6e",author:"FUNKYE",date:"2019/12/02"},unlisted:!1,prevItem:{title:"Docker\u90e8\u7f72Seata\u4e0eNacos\u6574\u5408",permalink:"/seata.github.io/zh-cn/blog/seata-nacos-docker"},nextItem:{title:"Seata Community Meetup\xb7\u676d\u5dde\u7ad9",permalink:"/seata.github.io/zh-cn/blog/seata-meetup-hangzhou"}},i={authorsImageUrls:[void 0]},d=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"Seata\u914d\u7f6e",id:"seata\u914d\u7f6e",level:2}];function p(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://gitee.com/itCjb/springboot-dubbo-mybatisplus-seata",children:"\u9879\u76ee\u5730\u5740"})}),"\n",(0,a.jsx)(n.p,{children:"\u672c\u6587\u4f5c\u8005\uff1aFUNKYE(\u9648\u5065\u658c),\u676d\u5dde\u67d0\u4e92\u8054\u7f51\u516c\u53f8\u4e3b\u7a0b\u3002"}),"\n",(0,a.jsx)(n.h1,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0a\u6b21\u53d1\u5e03\u4e86\u76f4\u8fde\u65b9\u5f0f\u7684seata\u914d\u7f6e,\u8be6\u7ec6\u53ef\u4ee5\u770b\u8fd9\u7bc7",(0,a.jsx)(n.a,{href:"/blog/springboot-dubbo-mybatisplus-seata",children:"\u535a\u5ba2"})]}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u63a5\u7740\u4e0a\u4e00\u7bc7\u7684\u57fa\u7840\u4e0a\u53bb\u914d\u7f6enacos\u505a\u914d\u7f6e\u4e2d\u5fc3\u8ddfdubbo\u6ce8\u518c\u4e2d\u5fc3."}),"\n",(0,a.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,a.jsxs)(n.p,{children:["\u200b\t1.\u9996\u5148\u53bbnacos\u7684github\u4e0a\u4e0b\u8f7d",(0,a.jsx)(n.a,{href:"https://github.com/alibaba/nacos/releases/tag/1.1.4",children:"\u6700\u65b0\u7248\u672c"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u200b\t",(0,a.jsx)(n.img,{src:e(86845).A+"",width:"810",height:"139"})]}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t2.\u4e0b\u8f7d\u597d\u4e86\u540e,\u5f88\u7b80\u5355,\u89e3\u538b\u540e\u5230bin\u76ee\u5f55\u4e0b\u53bb\u542f\u52a8\u5c31\u597d\u4e86,\u770b\u5230\u5982\u56fe\u6240\u793a\u5c31\u6210\u4e86\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:e(75592).A+"",width:"933",height:"800"})}),"\n",(0,a.jsxs)(n.p,{children:["\u200b\t3.\u542f\u52a8\u5b8c\u6bd5\u540e\u8bbf\u95ee:",(0,a.jsx)(n.a,{href:"http://127.0.0.1:8848/nacos/#/login",children:"http://127.0.0.1:8848/nacos/#/login"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:e(64635).A+"",width:"1872",height:"631"})}),"\n",(0,a.jsx)(n.p,{children:"\u662f\u4e0d\u662f\u770b\u5230\u8fd9\u6837\u7684\u754c\u9762\u4e86?\u8f93\u5165nacos(\u8d26\u53f7\u5bc6\u7801\u76f8\u540c),\u5148\u8fdb\u53bb\u770b\u770b\u5427."}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u65f6\u5019\u53ef\u4ee5\u53d1\u73b0\u6ca1\u6709\u4efb\u4f55\u670d\u52a1\u6ce8\u518c"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202204147",src:e(15329).A+"",width:"1079",height:"508"})}),"\n",(0,a.jsx)(n.p,{children:"\u522b\u6025\u6211\u4eec\u9a6c\u4e0a\u8ba9seata\u670d\u52a1\u8fde\u63a5\u8fdb\u6765."}),"\n",(0,a.jsx)(n.h2,{id:"seata\u914d\u7f6e",children:"Seata\u914d\u7f6e"}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t1.\u8fdb\u5165seata\u7684conf\u6587\u4ef6\u5939\u770b\u5230\u8fd9\u4e2a\u6728\u6709?"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:e(22011).A+"",width:"378",height:"269"})}),"\n",(0,a.jsx)(n.p,{children:"\u5c31\u662f\u5b83,\u7f16\u8f91\u5b83:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202204353",src:e(29532).A+"",width:"898",height:"282"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202204437",src:e(42201).A+"",width:"1103",height:"437"})}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t2.\u7136\u540e\u8bb0\u5f97\u4fdd\u5b58\u54e6!\u63a5\u7740\u6211\u4eec\u628aregistry.conf\u6587\u4ef6\u6253\u5f00\u7f16\u8f91\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'registry {\n  # file \u3001nacos \u3001eureka\u3001redis\u3001zk\u3001consul\u3001etcd3\u3001sofa\n  type = "nacos"\n\n  nacos {\n    serverAddr = "localhost"\n    namespace = ""\n    cluster = "default"\n  }\n  eureka {\n    serviceUrl = "http://localhost:8761/eureka"\n    application = "default"\n    weight = "1"\n  }\n  redis {\n    serverAddr = "localhost:6379"\n    db = "0"\n  }\n  zk {\n    cluster = "default"\n    serverAddr = "127.0.0.1:2181"\n    session.timeout = 6000\n    connect.timeout = 2000\n  }\n  consul {\n    cluster = "default"\n    serverAddr = "127.0.0.1:8500"\n  }\n  etcd3 {\n    cluster = "default"\n    serverAddr = "http://localhost:2379"\n  }\n  sofa {\n    serverAddr = "127.0.0.1:9603"\n    application = "default"\n    region = "DEFAULT_ZONE"\n    datacenter = "DefaultDataCenter"\n    cluster = "default"\n    group = "SEATA_GROUP"\n    addressWaitTime = "3000"\n  }\n  file {\n    name = "file.conf"\n  }\n}\n\nconfig {\n  # file\u3001nacos \u3001apollo\u3001zk\u3001consul\u3001etcd3\n  type = "nacos"\n\n  nacos {\n    serverAddr = "localhost"\n    namespace = ""\n  }\n  consul {\n    serverAddr = "127.0.0.1:8500"\n  }\n  apollo {\n    app.id = "seata-server"\n    apollo.meta = "http://192.168.1.204:8801"\n  }\n  zk {\n    serverAddr = "127.0.0.1:2181"\n    session.timeout = 6000\n    connect.timeout = 2000\n  }\n  etcd3 {\n    serverAddr = "http://localhost:2379"\n  }\n  file {\n    name = "file.conf"\n  }\n}\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u90fd\u7f16\u8f91\u597d\u4e86\u540e\uff0c\u6211\u4eec\u8fd0\u884cnacos-config.sh,\u8fd9\u65f6\u5019\u6211\u4eec\u914d\u7f6e\u7684nacos-config.txt\u7684\u5185\u5bb9\u5df2\u7ecf\u88ab\u53d1\u9001\u5230nacos\u4e2d\u4e86\u8be6\u7ec6\u5982\u56fe\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202205743",src:e(58480).A+"",width:"572",height:"337"})}),"\n",(0,a.jsx)(n.p,{children:"\u51fa\u73b0\u4ee5\u4e0a\u7c7b\u4f3c\u7684\u4ee3\u7801\u5c31\u662f\u8bf4\u660e\u6210\u529f\u4e86\uff0c\u63a5\u7740\u6211\u4eec\u767b\u5f55nacos\u914d\u7f6e\u4e2d\u5fc3\uff0c\u67e5\u770b\u914d\u7f6e\u5217\u8868\uff0c\u51fa\u73b0\u5982\u56fe\u5217\u8868\u8bf4\u660e\u914d\u7f6e\u6210\u529f\u4e86\uff1a"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202205912",src:e(16236).A+"",width:"1826",height:"643"})}),"\n",(0,a.jsx)(n.p,{children:"\u770b\u5230\u4e86\u5427,\u4f60\u7684\u914d\u7f6e\u5df2\u7ecf\u5168\u90e8\u90fd\u63d0\u4ea4\u4e0a\u53bb\u4e86,\u5982\u679c\u518dgit\u5de5\u5177\u5185\u8fd0\u884csh\u4e0d\u884c\u7684\u8bdd,\u8bd5\u7740\u628a\u7f16\u8f91sh\u6587\u4ef6,\u8bd5\u8bd5\u6539\u6210\u5982\u4e0b\u64cd\u4f5c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'for line in $(cat nacos-config.txt)\n\ndo\n\nkey=${line%%=*}\nvalue=${line#*=}\necho "\\r\\n set "${key}" = "${value}\n\nresult=`curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=$key&group=SEATA_GROUP&content=$value"`\n\nif [ "$result"x == "true"x ]; then\n\n  echo "\\033[42;37m $result \\033[0m"\n\nelse\n\n  echo "\\033[41;37 $result \\033[0m"\n  let error++\n\nfi\n\ndone\n\n\nif [ $error -eq 0 ]; then\n\necho  "\\r\\n\\033[42;37m init nacos config finished, please start seata-server. \\033[0m"\n\nelse\n\necho  "\\r\\n\\033[41;33m init nacos config fail. \\033[0m"\n\nfi\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t3.\u76ee\u524d\u6211\u4eec\u7684\u51c6\u5907\u5de5\u4f5c\u5168\u90e8\u5b8c\u6210,\u6211\u4eec\u53bbseata-service/bin\u53bb\u8fd0\u884cseata\u670d\u52a1\u5427,\u5982\u56fe\u6240\u793a\u5c31\u6210\u529f\u5566!"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202210112",src:e(2270).A+"",width:"948",height:"805"})}),"\n",(0,a.jsx)(n.h1,{id:"\u8fdb\u884c\u8c03\u8bd5",children:"\u8fdb\u884c\u8c03\u8bd5"}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t1.\u9996\u5148\u628aspringboot-dubbo-mybatsiplus-seata\u9879\u76ee\u7684pom\u7684\u4f9d\u8d56\u66f4\u6539,\u53bb\u9664\u6389zk\u8fd9\u4e9b\u914d\u7f6e,\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528nacos\u505a\u6ce8\u518c\u4e2d\u5fc3\u4e86."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"\t<properties>\n\t\t<webVersion>3.1</webVersion>\n\t\t<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n\t\t<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n\t\t<maven.compiler.source>1.8</maven.compiler.source>\n\t\t<maven.compiler.target>1.8</maven.compiler.target>\n\t\t<HikariCP.version>3.2.0</HikariCP.version>\n\t\t<mybatis-plus-boot-starter.version>3.2.0</mybatis-plus-boot-starter.version>\n\t</properties>\n\t<parent>\n\t\t<groupId>org.springframework.boot</groupId>\n\t\t<artifactId>spring-boot-starter-parent</artifactId>\n\t\t<version>2.1.8.RELEASE</version>\n\t</parent>\n\t<dependencies>\n\t\t<dependency>\n\t\t\t<groupId>com.alibaba.nacos</groupId>\n\t\t\t<artifactId>nacos-client</artifactId>\n\t\t\t<version>1.1.4</version>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.apache.dubbo</groupId>\n\t\t\t<artifactId>dubbo-registry-nacos</artifactId>\n\t\t\t<version>2.7.4.1</version>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.apache.dubbo</groupId>\n\t\t\t<artifactId>dubbo-spring-boot-starter</artifactId>\n\t\t\t<version>2.7.4.1</version>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.apache.commons</groupId>\n\t\t\t<artifactId>commons-lang3</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>com.alibaba</groupId>\n\t\t\t<artifactId>fastjson</artifactId>\n\t\t\t<version>1.2.60</version>\n\t\t</dependency>\n\t\t\x3c!-- <dependency> <groupId>javax</groupId> <artifactId>javaee-api</artifactId> \n\t\t\t<version>7.0</version> <scope>provided</scope> </dependency> --\x3e\n\t\t<dependency>\n\t\t\t<groupId>io.springfox</groupId>\n\t\t\t<artifactId>springfox-swagger2</artifactId>\n\t\t\t<version>2.9.2</version>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>io.springfox</groupId>\n\t\t\t<artifactId>springfox-swagger-ui</artifactId>\n\t\t\t<version>2.9.2</version>\n\t\t</dependency>\n \n\t\t\x3c!-- mybatis-plus begin --\x3e\n\t\t<dependency>\n\t\t\t<groupId>com.baomidou</groupId>\n\t\t\t<artifactId>mybatis-plus-boot-starter</artifactId>\n\t\t\t<version>${mybatis-plus-boot-starter.version}</version>\n\t\t</dependency>\n\t\t\x3c!-- mybatis-plus end --\x3e\n\t\t\x3c!-- https://mvnrepository.com/artifact/org.projectlombok/lombok --\x3e\n\t\t<dependency>\n\t\t\t<groupId>org.projectlombok</groupId>\n\t\t\t<artifactId>lombok</artifactId>\n\t\t\t<scope>provided</scope>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>io.seata</groupId>\n\t\t\t<artifactId>seata-all</artifactId>\n\t\t\t<version>0.9.0.1</version>\n\t\t</dependency>\n\t\t\x3c!-- <dependency> <groupId>com.baomidou</groupId> <artifactId>dynamic-datasource-spring-boot-starter</artifactId> \n\t\t\t<version>2.5.4</version> </dependency> --\x3e\n \n\t\t\x3c!-- <dependency> <groupId>com.baomidou</groupId> <artifactId>mybatis-plus-generator</artifactId> \n\t\t\t<version>3.1.0</version> </dependency> --\x3e\n\t\t\x3c!-- https://mvnrepository.com/artifact/org.freemarker/freemarker --\x3e\n\t\t<dependency>\n\t\t\t<groupId>org.freemarker</groupId>\n\t\t\t<artifactId>freemarker</artifactId>\n\t\t</dependency>\n\t\t\x3c!-- https://mvnrepository.com/artifact/com.alibaba/druid-spring-boot-starter --\x3e\n\t\t<dependency>\n\t\t\t<groupId>com.alibaba</groupId>\n\t\t\t<artifactId>druid-spring-boot-starter</artifactId>\n\t\t\t<version>1.1.20</version>\n\t\t</dependency>\n\t\t\x3c!-- \u52a0\u4e0a\u8fd9\u4e2a\u624d\u80fd\u8fa8\u8ba4\u5230log4j2.yml\u6587\u4ef6 --\x3e\n\t\t<dependency>\n\t\t\t<groupId>com.fasterxml.jackson.dataformat</groupId>\n\t\t\t<artifactId>jackson-dataformat-yaml</artifactId>\n\t\t</dependency>\n\t\t<dependency> \x3c!-- \u5f15\u5165log4j2\u4f9d\u8d56 --\x3e\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-starter-log4j2</artifactId>\n\t\t</dependency>\n\t\t\x3c!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java --\x3e\n\t\t<dependency>\n\t\t\t<groupId>mysql</groupId>\n\t\t\t<artifactId>mysql-connector-java</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-starter-web</artifactId>\n\t\t\t<exclusions>\n\t\t\t\t<exclusion>\n\t\t\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t\t\t<artifactId>spring-boot-starter-logging</artifactId>\n\t\t\t\t</exclusion>\n\t\t\t\t<exclusion>\n\t\t\t\t\t<groupId>org.slf4j</groupId>\n\t\t\t\t\t<artifactId>slf4j-log4j12</artifactId>\n\t\t\t\t</exclusion>\n\t\t\t</exclusions>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-starter-aop</artifactId>\n\t\t</dependency>\n\t\t<dependency>\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-starter-test</artifactId>\n\t\t\t<scope>test</scope>\n\t\t</dependency>\n\t\t\x3c!-- <dependency> <groupId>org.scala-lang</groupId> <artifactId>scala-library</artifactId> \n\t\t\t<version>2.11.0</version> </dependency> --\x3e\n\t\t<dependency>\n\t\t\t<groupId>org.springframework.boot</groupId>\n\t\t\t<artifactId>spring-boot-configuration-processor</artifactId>\n\t\t\t<optional>true</optional>\n\t\t</dependency>\n\t</dependencies>\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t2.\u7136\u540e\u66f4\u6539test-service\u7684\u76ee\u5f55\u7ed3\u6784,\u5220\u9664zk\u7684\u914d\u7f6e\u5e76\u66f4\u6539application.yml\u6587\u4ef6,\u76ee\u5f55\u7ed3\u6784\u4e0e\u4ee3\u7801:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"server:\n  port: 38888\nspring:\n  application: \n      name: test-service\n  datasource:\n    type: com.alibaba.druid.pool.DruidDataSource\n    url: jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    username: root\n    password: 123456\ndubbo:\n  protocol:\n    loadbalance: leastactive\n    threadpool: cached\n  scan:\n    base-packages: org\u3002test.service\n  application:\n    qos-enable: false\n    name: testserver\n  registry:\n    id: my-registry\n    address:  nacos://127.0.0.1:8848\nmybatis-plus:\n  mapper-locations: classpath:/mapper/*Mapper.xml\n  typeAliasesPackage: org.test.entity\n  global-config:\n    db-config:\n      field-strategy: not-empty\n      id-type: auto\n      db-type: mysql\n  configuration:\n    map-underscore-to-camel-case: true\n    cache-enabled: true      \n    auto-mapping-unknown-column-behavior: none\n"})}),"\n",(0,a.jsx)("img",{src:"/img/blog/20191202211833.png",alt:"20191202211833",style:{zoom:"100%"}}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t3.\u518d\u66f4\u6539registry.conf\u6587\u4ef6,\u5982\u679c\u4f60\u7684nacos\u662f\u5176\u5b83\u670d\u52a1\u5668,\u8bf7\u6539\u6210\u5bf9\u5e94\u90fdip\u8ddf\u7aef\u53e3"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'registry {\n  type = "nacos"\n  file {\n    name = "file.conf"\n  }\n   zk {\n    cluster = "default"\n    serverAddr = "127.0.0.1:2181"\n    session.timeout = 6000\n    connect.timeout = 2000\n  }\n    nacos {\n    serverAddr = "localhost"\n    namespace = ""\n    cluster = "default"\n  }\n}\nconfig {\n  type = "nacos"\n  file {\n    name = "file.conf"\n  }\n  zk {\n    serverAddr = "127.0.0.1:2181"\n    session.timeout = 6000\n    connect.timeout = 2000\n  }\n    nacos {\n    serverAddr = "localhost"\n    namespace = ""\n    cluster = "default"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t4.\u63a5\u7740\u6211\u4eec\u8fd0\u884cprovideApplication"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202212000",src:e(73644).A+"",width:"938",height:"743"})}),"\n",(0,a.jsx)(n.p,{children:"\u542f\u52a8\u6210\u529f\u5566,\u6211\u4eec\u518d\u53bb\u770bseata\u7684\u65e5\u5fd7:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202212028",src:e(96590).A+"",width:"755",height:"143"})}),"\n",(0,a.jsx)(n.p,{children:"\u6210\u529f\u4e86,\u8fd9\u4e0b\u6211\u4eec\u4e00\u6837,\u53bb\u4fee\u6539test-client\u7684\u5185\u5bb9,\u9996\u5148\u4e00\u6837application.yml,\u628azk\u6362\u6210nacos,\u8fd9\u91cc\u5c31\u4e0d\u8be6\u7ec6\u63cf\u8ff0\u4e86,\u628atest-service\u5185\u7684registry.conf,\u590d\u5236\u5230client\u9879\u76ee\u7684resources\u4e2d\u8986\u76d6\u539f\u6765\u7684registry.conf."}),"\n",(0,a.jsx)(n.p,{children:"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u8fd0\u884cclientApplication:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202212114",src:e(65798).A+"",width:"1183",height:"474"})}),"\n",(0,a.jsx)(n.p,{children:"\u200b\t5.\u786e\u8ba4\u670d\u52a1\u5df2\u7ecf\u88ab\u53d1\u5e03\u5e76\u6d4b\u8bd5\u4e8b\u52a1\u8fd0\u884c\u662f\u5426\u6b63\u5e38"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202212203",src:e(75909).A+"",width:"1650",height:"165"})}),"\n",(0,a.jsxs)(n.p,{children:["\u670d\u52a1\u6210\u529f\u53d1\u5e03\u51fa\u6765,\u4e5f\u88ab\u6210\u529f\u6d88\u8d39\u4e86.\u8fd9\u4e0b\u6211\u4eec\u518d\u53bbswagger\u4e2d\u53bb\u6d4b\u8bd5\u56de\u6eda\u662f\u5426\u4e00\u5207\u6b63\u5e38,\u8bbf\u95ee",(0,a.jsx)(n.a,{href:"http://127.0.0.1:28888/swagger-ui.html",children:"http://127.0.0.1:28888/swagger-ui.html"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"20191202212240",src:e(28626).A+"",width:"1143",height:"244"})}),"\n",(0,a.jsx)(n.p,{children:"\u606d\u559c\u4f60,\u770b\u5230\u8fd9\u4e00\u5b9a\u8ddf\u6211\u4e00\u6837\u6210\u529f\u4e86!"}),"\n",(0,a.jsx)(n.h1,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,a.jsx)(n.p,{children:"\u5173\u4e8enacos\u7684\u4f7f\u7528\u8ddfseata\u7684\u7b80\u5355\u642d\u5efa\u5df2\u7ecf\u5b8c\u6210\u4e86,\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\u5e0c\u671b\u5e0c\u671b\u5927\u5bb6\u8bbf\u95ee\u4ee5\u4e0b\u5730\u5740\u9605\u8bfb\u8be6\u7ec6\u6587\u6863"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://nacos.io/zh-cn/index.html",children:"nacos\u5b98\u7f51"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://dubbo.apache.org/en-us/",children:"dubbo\u5b98\u7f51"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://seata.apache.org/zh-cn/",children:"seata\u5b98\u7f51"})})]})}function l(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(p,{...t})}):p(t)}},86845:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202203649-11d447c6013cbe1fb71acb701475508e.png"},75592:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202203943-d4ce12cc0da3c7fa848f2dcf5a84977b.png"},64635:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202204101-6eb6475ce187b523c8c2d411ae73d32a.png"},15329:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202204147-8f3f242ffa570395ef5fa444241b6f00.png"},22011:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202204259-13ebda796065fb073e7e7e2574b187c1.png"},29532:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202204353-6fa148ad6b20007dc762102f807f8b66.png"},42201:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202204437-0b67dc1d7d76a3ee5d8bd1262c1527eb.png"},58480:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202205743-d8f7d228a9332386965ab38997c396ee.png"},16236:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202205912-4d939ad3e578e3d7997d786bc108775e.png"},2270:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202210112-29971287d77f148d4e26b4a6d80e4218.png"},73644:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202212000-5680e0e779d6a31cf37b5478f57e33d0.png"},96590:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202212028-a985d4f7546feb43d77cc087b672cc67.png"},65798:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202212114-2c7c0131021c98c3567cf56f7b505b03.png"},75909:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202212203-0d9443f6ccda1e642c1f54fbd842fa9c.png"},28626:(t,n,e)=>{e.d(n,{A:()=>a});const a=e.p+"assets/images/20191202212240-6d41e2697a84196f90210896b55064a6.png"},28453:(t,n,e)=>{e.d(n,{R:()=>o,x:()=>c});var a=e(96540);const s={},r=a.createContext(s);function o(t){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),a.createElement(r.Provider,{value:n},t.children)}}}]);