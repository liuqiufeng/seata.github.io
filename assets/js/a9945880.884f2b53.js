"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[69893],{48366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(74848),s=n(28453);const i={Title:"Seata parameter configuration",keywords:["Seata"],Description:"Seata parameter configuration."},a="The seata parameter configuration version 1.0.0",l={id:"user/configurations100",title:"The seata parameter configuration version 1.0.0",description:"Change record",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.5/user/configurations100.md",sourceDirName:"user",slug:"/user/configurations100",permalink:"/seata.github.io/docs/v1.5/user/configurations100",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.5/user/configurations100.md",tags:[],version:"v1.5",frontMatter:{Title:"Seata parameter configuration",keywords:["Seata"],Description:"Seata parameter configuration."}},o={},d=[{value:"Change record",id:"change-record",level:3},{value:"Attention attribute (see all attributes for detailed description)",id:"attention-attribute-see-all-attributes-for-detailed-description",level:2},{value:"All attributes",id:"all-attributes",level:2},{value:"Public sector",id:"public-sector",level:3},{value:"Server side",id:"server-side",level:3},{value:"client \u7aef",id:"client-\u7aef",level:3},{value:"Not in used",id:"not-in-used",level:3},{value:"synchronize parameters to the configuration center for use demo",id:"synchronize-parameters-to-the-configuration-center-for-use-demo",level:3},{value:"Nacos",id:"nacos",level:4},{value:"Apollo",id:"apollo",level:4},{value:"Consul",id:"consul",level:4},{value:"Etcd3",id:"etcd3",level:4},{value:"ZK",id:"zk",level:4},{value:"Appendix 1:",id:"appendix-1",level:3},{value:"Appendix 2:",id:"appendix-2",level:3},{value:"Appendix 3:",id:"appendix-3",level:3},{value:"Appendix 4:",id:"appendix-4",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"the-seata-parameter-configuration-version-100",children:"The seata parameter configuration version 1.0.0"}),"\n",(0,r.jsx)(t.h3,{id:"change-record",children:"Change record"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\n20191221: Added seata. enabled, client. report. success. enable\n\ntransport.enable-client-batch-send-request\u3001client.log.exceptionRate\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"attention-attribute-see-all-attributes-for-detailed-description",children:"Attention attribute (see all attributes for detailed description)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"server side"}),(0,r.jsx)(t.th,{children:"client side"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"registry.type"}),(0,r.jsx)(t.td,{children:"registry.type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"config.type"}),(0,r.jsx)(t.td,{children:"config.type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.mode"}),(0,r.jsx)(t.td,{children:"service.vgroup_mapping.my_test_tx_group"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.driver-class-name"}),(0,r.jsx)(t.td,{children:"service.default.grouplist"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.url"}),(0,r.jsx)(t.td,{children:"service.disableGlobalTransaction"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.user"}),(0,r.jsx)(t.td,{children:"client.support.spring.datasource.autoproxy"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.password"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"all-attributes",children:"All attributes"}),"\n",(0,r.jsx)(t.h3,{id:"public-sector",children:"Public sector"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"key"}),(0,r.jsx)(t.th,{children:"desc"}),(0,r.jsx)(t.th,{children:"remark"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"transport.serialization"}),(0,r.jsx)(t.td,{children:"client and server communication codec method"}),(0,r.jsx)(t.td,{children:"seata (ByteBuf), protobuf, kryo, mission, default seata"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"transport.compressor"}),(0,r.jsx)(t.td,{children:"compression method of communication data between client and server"}),(0,r.jsx)(t.td,{children:"none, gzip, default: none"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"transport.heartbeat"}),(0,r.jsx)(t.td,{children:"the heartbeat detection switch for communication between client and server"}),(0,r.jsx)(t.td,{children:"True is enabled by default"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"registry.type"}),(0,r.jsx)(t.td,{children:"registry type"}),(0,r.jsx)(t.td,{children:"default file, supporting file, nacos, eureka, redis, zk, consumer, etcd3, sofa, and custom"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"config.type"}),(0,r.jsx)(t.td,{children:"configuration center type"}),(0,r.jsx)(t.td,{children:"Default file, supporting file, nacos, apollo, zk, consult, etcd3, and custom"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"server-side",children:"Server side"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"key"}),(0,r.jsx)(t.th,{children:"desc"}),(0,r.jsx)(t.th,{children:"remark"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"server.undo.log.save.days"}),(0,r.jsx)(t.td,{children:"undo retention days"}),(0,r.jsx)(t.td,{children:"7 days by default, log_ Status=1 (Appendix 3) and undo not normally cleaned"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"server.undo.log.delete.period"}),(0,r.jsx)(t.td,{children:"undo Cleanup thread interval"}),(0,r.jsx)(t.td,{children:"86400000 by default, in milliseconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"server.max.commit.retry.timeout"}),(0,r.jsx)(t.td,{children:"Timeout duration of two-phase commit retry"}),(0,r.jsx)(t.td,{children:"Unit: ms, s, m, h, d, corresponding to ms, s, min, h, d, and the default is ms. The default value of - 1 means unlimited retries. Formula: timeout>=now globalTransactionBeginTime, true means no retry if timeout occurs"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"server.max.rollback.retry.timeout"}),(0,r.jsx)(t.td,{children:"Timeout duration of two-phase rollback retry"}),(0,r.jsx)(t.td,{children:"Same as commit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"server.recovery.committing-retry-period"}),(0,r.jsx)(t.td,{children:"Phase2 commit unfinished status Global transaction retry commit thread interval"}),(0,r.jsx)(t.td,{children:"1000 by default, in milliseconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"server.recovery.async-committing-retry-period"}),(0,r.jsx)(t.td,{children:"Phase2 asynchronous submission status Retry submission thread interval"}),(0,r.jsx)(t.td,{children:"1000 by default, in milliseconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"server.recovery.rollback-retry-period"}),(0,r.jsx)(t.td,{children:"Phase2 rollback status retry rollbacking thread interval"}),(0,r.jsx)(t.td,{children:"1000 by default, in milliseconds"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"server.recovery.timeout-retry-period"}),(0,r.jsx)(t.td,{children:"Timeout status detection Retry thread interval"}),(0,r.jsx)(t.td,{children:"1000 by default, in milliseconds. If timeout is detected, put the global transaction into the rollback session manager"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.mode"}),(0,r.jsx)(t.td,{children:"Transaction session information storage mode"}),(0,r.jsx)(t.td,{children:"file Local file (HA is not supported), db database (HA is supported)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.file.dir"}),(0,r.jsx)(t.td,{children:"file mode file storage folder name"}),(0,r.jsx)(t.td,{children:"default sessionStore"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.datasource"}),(0,r.jsx)(t.td,{children:"db mode data source type"}),(0,r.jsx)(t.td,{children:"default dbcp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.db-type"}),(0,r.jsx)(t.td,{children:"db mode database type"}),(0,r.jsx)(t.td,{children:"default mysql"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.driver-class-name"}),(0,r.jsx)(t.td,{children:"db mode database driver"}),(0,r.jsx)(t.td,{children:"default com.mysql.jdbc Driver"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.url"}),(0,r.jsx)(t.td,{children:"db mode database url"}),(0,r.jsx)(t.td,{children:"default jdbc: mysql://127.0.0.1:3306/seata"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.user"}),(0,r.jsx)(t.td,{children:"db mode database account"}),(0,r.jsx)(t.td,{children:"default MySQL"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.password"}),(0,r.jsx)(t.td,{children:"db mode database account password"}),(0,r.jsx)(t.td,{children:"default MySQL"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.min-conn"}),(0,r.jsx)(t.td,{children:"The number of initial connections to the database in db mode"}),(0,r.jsx)(t.td,{children:"1 by default"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.max-conn"}),(0,r.jsx)(t.td,{children:"maximum number of connections to database in db mode"}),(0,r.jsx)(t.td,{children:"3 by default"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.global.table"}),(0,r.jsx)(t.td,{children:"db mode global transaction table name"}),(0,r.jsx)(t.td,{children:"default global_ table"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.branch.table"}),(0,r.jsx)(t.td,{children:"db mode branch transaction table name"}),(0,r.jsx)(t.td,{children:"default branch_ table"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.lock-table"}),(0,r.jsx)(t.td,{children:"db mode global lock table name"}),(0,r.jsx)(t.td,{children:"default lock_ table"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"store.db.query-limit"}),(0,r.jsx)(t.td,{children:"The maximum number of global transactions queried in db mode"}),(0,r.jsx)(t.td,{children:"100 by default"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metrics.enabled"}),(0,r.jsx)(t.td,{children:"whether to enable Metrics"}),(0,r.jsx)(t.td,{children:"False is off by default. In the false state, all Metrics related components will not be initialized to minimize the performance loss"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metrics.registry-type"}),(0,r.jsx)(t.td,{children:"indicator registrar type"}),(0,r.jsx)(t.td,{children:"The indicator registrar type used by Metrics is a built-in compact (simple) implementation by default. Meters in this implementation only use limited memory counts, and the performance is high enough to meet most scenarios; Currently, only one indicator registrar can be set"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metrics.exporter-list"}),(0,r.jsx)(t.td,{children:"indicator result Measurement data outputter list"}),(0,r.jsx)(t.td,{children:'default prometheus. Multiple outputters are separated by English commas, such as "prometheus, jmx". Currently, only the prometheus outputters are connected'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metrics.exporter-prometheus-port"}),(0,r.jsx)(t.td,{children:"prometheus exporter client port number"}),(0,r.jsx)(t.td,{children:"9898 by default"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"client-\u7aef",children:"client \u7aef"}),"\n",(0,r.jsx)(t.p,{children:"| key                                        | desc                                              | remark                                                                                                                     |\n| ------------------------------------------ | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| seata.enabled                              | whether to enable spring boot automatic assembly  | true\u3001false\uff0cdefault true\uff08appendix 4\uff09                                                                                    |\n| client.report.success.enable               | whether to report success in the first phase      | true, false, default true is used to keep the branch transaction lifecycle records complete, false can improve performance |\n| transport.enable-client-batch-send-request | client.log.exceptionRate                          | whether to batch merge and send the client transaction message requests                                                    | The default is true and false                                                                                                                                                                                     |\n| service.vgroup_mapping.my_test_tx_group    | service.default.grouplist                         | log exception output probability                                                                                           | 100 by default, currently used for exception stack output when undo rollback fails, 1% probability output, rollback failure is basically dirty data, and the output stack does not need to occupy hard disk space |\n| service.disableGlobalTransaction           | service.enableDegrade                             | transaction Group (Appendix 1)                                                                                             | my* test* tx_ Group refers to grouping, and the configuration item value is TC cluster name                                                                                                                      |\n| client.rm.async.commit.buffer.limit        | client.rm.lock.retry.internal                     | TC Service List (Appendix 2)                                                                                               | Only used when the registry is file                                                                                                                                                                               |\n| client.rm.lock.retry.times                 | client.rm.lock.retry.policy.branch-rollback-on-co | global transaction switch                                                                                                  | False by default. false is on, true is off                                                                                                                                                                        |\n| client.rm.report.retry.count               | client.rm.table.meta.check.enable                 | degradation switch (to be implemented)                                                                                     | False by default. The business side automatically downgrades according to the number of consecutive errors and does not go through the seata transaction                                                          |\n| client.tm.commit.retry.count               | client.tm.rollback.retry.count                    | asynchronous commit cache queue length                                                                                     | 10000 by default. Phase II commit succeeded. RM asynchronously cleans the undo queue                                                                                                                              |\n| client.undo.data.validation                | client.undo.log.serialization                     | check or occupy the global lock retry interval                                                                             | 10 by default, in milliseconds                                                                                                                                                                                    |\n| client.undo.log.table                      | client.support.spring.datasource.autoproxy        | number of retries to verify or occupy the global lock                                                                      | 30 by default                                                                                                                                                                                                     |"}),"\n",(0,r.jsx)(t.h3,{id:"not-in-used",children:"Not in used"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"key"}),(0,r.jsx)(t.th,{children:"desc"}),(0,r.jsx)(t.th,{children:"remark"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lock.mode"}),(0,r.jsx)(t.td,{children:"\u9501\u5b58\u50a8\u65b9\u5f0f"}),(0,r.jsx)(t.td,{children:"local\u3001remote"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lock.local"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lock.remote"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"synchronize-parameters-to-the-configuration-center-for-use-demo",children:"synchronize parameters to the configuration center for use demo"}),"\n",(0,r.jsx)(t.h4,{id:"nacos",children:"Nacos"}),"\n",(0,r.jsx)(t.p,{children:"shell:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sh $\\{SEATAPATH}/script/config-center/nacos/nacos-config.sh -h localhost -p 8848 -g SEATA_GROUP -t 5a3c7d6c-f497-4d68-a71a-2e5e3340b3ca\n"})}),"\n",(0,r.jsx)(t.p,{children:"Parameter description:"}),"\n",(0,r.jsx)(t.p,{children:"-h: Host, the default is localhost"}),"\n",(0,r.jsx)(t.p,{children:"-p: Port, default 8848"}),"\n",(0,r.jsx)(t.p,{children:"-g: Configure grouping. The default value is' SEATA_ GROUP'"}),"\n",(0,r.jsx)(t.p,{children:"-t: Tenant information, corresponding to the namespace ID field of Nacos, the default value is null ''"}),"\n",(0,r.jsx)(t.h4,{id:"apollo",children:"Apollo"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sh $\\{SEATAPATH}/script/config-center/apollo/apollo-config.sh -h localhost -p 8070 -e DEV -a seata-server -c default -n application -d apollo -r apollo -t 3aa026fc8435d0fc4505b345b8fa4578fb646a2c\n"})}),"\n",(0,r.jsx)(t.p,{children:"Parameter description:"}),"\n",(0,r.jsx)(t.p,{children:"-h: Host, the default is localhost"}),"\n",(0,r.jsx)(t.p,{children:"-p: Port, the default value is 8070"}),"\n",(0,r.jsx)(t.p,{children:"-e: Managed configuration environment, default value DEV"}),"\n",(0,r.jsx)(t.p,{children:"-a: AppId of the Namespace. The default value is seata server"}),"\n",(0,r.jsx)(t.p,{children:"-c: The name of the managed configuration cluster is generally passed in as default. If it is a special cluster, just pass in the name of the corresponding cluster. The default value is default"}),"\n",(0,r.jsx)(t.p,{children:"-n: The name of the namespace under management, if it is not in the properties format, needs to add a suffix, such as sample Yml, default value application"}),"\n",(0,r.jsx)(t.p,{children:"-d: The creator of the item, in the format of domain account, that is, the user ID of the sso system"}),"\n",(0,r.jsx)(t.p,{children:"-r: Publisher, domain account, note: if Apollo ConfigDB namespace.lock in ServerConfig If the switch is set to true (false by default), the environment does not allow the publisher and editor to be the same person. So if the editor is zhangsan, the publisher can no longer be zhangsan."}),"\n",(0,r.jsx)(t.p,{children:"-t: The Apollo administrator can click http://{portal_address}/open/manage Html To create a third-party application, you'd better first query whether this AppId has been created. After successful creation, a token will be generated"}),"\n",(0,r.jsx)(t.p,{children:"For details of the above parameters, see:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/ctripcorp/apollo/wiki/Apollo%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0",children:"https://github.com/ctripcorp/apollo/wiki/Apollo%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0"})}),"\n",(0,r.jsx)(t.h4,{id:"consul",children:"Consul"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sh $\\{SEATAPATH}/script/config-center/consul/consul-config.sh -h localhost -p 8500\n"})}),"\n",(0,r.jsx)(t.p,{children:"Parameter description:"}),"\n",(0,r.jsx)(t.p,{children:"-h: host, the default is localhost"}),"\n",(0,r.jsx)(t.p,{children:"-p: port, the default value is 8500"}),"\n",(0,r.jsx)(t.h4,{id:"etcd3",children:"Etcd3"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sh $\\{SEATAPATH}/script/config-center/etcd3/etcd3-config.sh -h localhost -p 2379\n"})}),"\n",(0,r.jsx)(t.p,{children:"Parameter description:"}),"\n",(0,r.jsx)(t.p,{children:"-h: Host, the default is localhost"}),"\n",(0,r.jsx)(t.p,{children:"-p: Port, the default value is 2379"}),"\n",(0,r.jsx)(t.p,{children:"python:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python $\\{SEATAPATH}/script/config-center/nacos/nacos-config.py localhost:8848\n"})}),"\n",(0,r.jsx)(t.h4,{id:"zk",children:"ZK"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'sh $\\{SEATAPATH}/script/config-center/zk/zk-config.sh -h localhost -p 2181 -z "/Users/zhangchenghui/zookeeper-3.4.14"\n'})}),"\n",(0,r.jsx)(t.p,{children:"Parameter description:"}),"\n",(0,r.jsx)(t.p,{children:"-h: Host, the default is localhost"}),"\n",(0,r.jsx)(t.p,{children:"-p: Port, the default value is 2181"}),"\n",(0,r.jsx)(t.p,{children:"-z: zk path"}),"\n",(0,r.jsx)(t.h3,{id:"appendix-1",children:"Appendix 1:"}),"\n",(0,r.jsx)(t.p,{children:"Description of transaction grouping."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"What is a transaction group?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Transaction grouping is the resource logic of seata, similar to service instance. My in file.conf* test* tx_ A group is a transaction group."}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"How to find the back-end cluster through transaction grouping?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"First, the program configures transaction grouping (txServiceGroup parameter of GlobalTransactionScanner construction method), and the program will search for service.vgroup through the user configured configuration center_ mapping. Transaction grouping configuration item. The value of the configuration item obtained is the name of the TC cluster. The program that obtains the cluster name constructs the service name through a certain prefix+cluster name. The service name of each configuration center is different. Get the service name, go to the corresponding registry, pull the service list of the corresponding service name, and get the real TC service list of the back-end."}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Why is the design so that the service name is not directly taken?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"There is an additional layer to obtain the configuration of transaction groups to the mapping cluster. After this design, the transaction group can be used as the logical isolation unit of resources, which can quickly fail over when a failure occurs."}),"\n",(0,r.jsx)(t.h3,{id:"appendix-2",children:"Appendix 2:"}),"\n",(0,r.jsx)(t.p,{children:"About the grouplist question."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"When will the default.grouplist in file.conf be used?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"It is used when registry.type=file. It is not read in other times."}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Can multiple value lists be configured for default.grouplist?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Multiple can be configured, which means cluster, but when store When mode=file, an error will be reported. The reason is that the file storage mode does not provide synchronization of local files, so you need to use store.mode=db to share data between TC clusters through db"}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Is default.grouplist recommended?"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Not recommended. For example, question 1, when registering It is used when type=file, which means that the real registry is not used here, and the health check mechanism without specific services cannot automatically remove the list when the tc is unavailable. It is recommended to use nacos, eureka, redis, zk, consumer, etcd3, and sofa. Registry. type=file or config The original purpose of type=file design is to enable users to quickly verify the seata service through direct connection without relying on a third-party registry or configuration center."}),"\n",(0,r.jsx)(t.h3,{id:"appendix-3",children:"Appendix 3:"}),"\n",(0,r.jsx)(t.p,{children:"log_ Status=1 is defensive. It means that a global rollback request is received, but it is uncertain whether the local transaction of a transaction branch has been executed. At this time, a piece of data with the same branch ID is inserted in advance, and the inserted false data is successful. If the local transaction continues to execute, the master key conflict will be automatically rolled back."}),"\n",(0,r.jsx)(t.p,{children:"If the insertion is unsuccessful, it indicates that the local transaction has been completed, and the undo data is taken out for reverse rollback."}),"\n",(0,r.jsx)(t.h3,{id:"appendix-4",children:"Appendix 4:"}),"\n",(0,r.jsx)(t.p,{children:"Whether to enable spring boot automatic assembly. If it is enabled, the integration of seata and spring boot will be automatically configured, including the automatic proxy of data source and initialization of GlobalTransactionScanner."}),"\n",(0,r.jsx)(t.p,{children:"Note: New features of version 1.0 need to rely on seata spring boot starter."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);