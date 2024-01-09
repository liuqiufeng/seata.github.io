"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[47562],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Deploying Raft Cluster",keywords:["Seata"],description:"Server-Raft mode deploy"},i="Deploying Server-Raft",s={unversionedId:"ops/deploy-server-raft",id:"version-v2.0/ops/deploy-server-raft",title:"Deploying Raft Cluster",description:"Server-Raft mode deploy",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.0/ops/deploy-server-raft.md",sourceDirName:"ops",slug:"/ops/deploy-server-raft",permalink:"/docs/ops/deploy-server-raft",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.0/ops/deploy-server-raft.md",tags:[],version:"v2.0",frontMatter:{title:"Deploying Raft Cluster",keywords:["Seata"],description:"Server-Raft mode deploy"},sidebar:"docs",previous:{title:"Deploy Server",permalink:"/docs/ops/deploy-server"},next:{title:"Deploy Seata Server By Docker",permalink:"/docs/ops/deploy-by-docker"}},l={},p=[{value:"Server",id:"server",level:2},{value:"Client",id:"client",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-server-raft"},"Deploying Server-Raft"),(0,a.kt)("p",null,"Seata-Raft mode is a transaction storage mode that integrates storage and computing, with high performance, easy scalability, low entry barriers, and low operational costs. For more detailed information about the architecture and usage, please click here."),(0,a.kt)("p",null,"Note: Since this mode does not support integration with third-party registry centers, only one TC cluster is allowed for the entire chain, which means that the TC cluster corresponding to the client's transaction group must remain consistent. In the future, the Seata community will launch a self-contained NamingServer that is compatible with the Seata-Raft mode and supports multi-raft."),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the server application from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases"},"RELEASE")," and unzip. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change config\nAdd the following parameters under seata: in the application.yml file in the conf."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"seata:\n  server:\n    raft:\n      group: default #This value represents the group of the Raft cluster, and the value corresponding to the client's transaction branch must correspond to it\n      server-addr: 192.168.0.111:9091,192.168.0.112:9091,192.168.0.113:9091 # The IP address and port of the 3 nodes, the port is the netty port of the node + 1000, and the default netty port is 8091\n      snapshot-interval: 600 # Take a snapshot of the data every 600 seconds to ensure fast rolling of the Raft log. However, if there is too much transaction data in memory during each snapshot, it may cause fluctuations in business response time (rt) every 600 seconds. Adjusting the snapshot interval to 30 minutes or 1 hour is also acceptable, depending on the specific business requirements. It is recommended to conduct performance testing to determine if there are any rt fluctuations. Find a balance point between rt fluctuations and fault recovery that suits your business needs.\n      apply-batch: 32 # Commit the Raft log with a maximum batch of 32 actions at a time.\n      max-append-bufferSize: 262144 #The maximum size of the log storage buffer is 256 KB by default.\n      max-replicator-inflight-msgs: 256 #\u5728When using pipeline requests, the maximum number of in-flight requests is 256 by default.\n      disruptor-buffer-size: 16384 #The size of the internal disruptor buffer is 16384 by default. If the write throughput is high, you may need to increase this value appropriately.\n      election-timeout-ms: 1000 #The duration after which a leader without heartbeat triggers a new election.\n      reporter-enabled: false # raft monitor enable\n      reporter-initial-delay: 60 # The interval between monitoring intervals.\n      serialization: jackson # Serialization method, do not modify.\n      compressor: none # The compression method used for the Raft log, such as gzip, zstd, lz4\uff0cetc\n      sync: true # The flushing method for Raft logs is synchronous flushing by default.\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: file # This configuration can select different configuration centers.\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: file # In Raft mode, it is not allowed to use non-file-based registry centers.\n  store:\n    # support: file \u3001 db \u3001 redis \u3001 raft\n    mode: raft # use raft mode\n    file:\n      dir: sessionStore # This path is the storage location for Raft logs and transaction-related logs. By default, it is a relative path, but it is recommended to set a fixed location.\n")),(0,a.kt)("p",null,"If the addresses in server-addr: are all on the local machine, then you need to add an offset of 1000 to the Netty port for different servers on this machine. For example, if ",(0,a.kt)("inlineCode",{parentName:"p"},"server.port: 7092"),", the Netty port would be ",(0,a.kt)("inlineCode",{parentName:"p"},"8092"),", and the Raft election and communication port would be ",(0,a.kt)("inlineCode",{parentName:"p"},"9092"),". You need to add the startup parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"-Dserver.raftPort=9092"),".\nOn Linux, you can specify the export ",(0,a.kt)("inlineCode",{parentName:"p"},'JAVA_OPT="-Dserver.raftPort=9092"')," command to set the desired value.\u3002"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Startup")),(0,a.kt)("p",null,"On Linux/Mac"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sh ./bin/seata-server.sh\n")),(0,a.kt)("p",null,"On Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"bin\\seata-server.bat\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Volume expansion and contraction")),(0,a.kt)("p",null,'Assuming the original cluster list is "192.168.0.111:7091, 192.168.0.112:7091, 192.168.0.113:7091", whether it is scaling or shrinking, only need to modify this string and submit it to the volume expansion and contraction interface of a member, such as scaling "curl -X POST -i ',(0,a.kt)("a",{parentName:"p",href:"http://192.168.0.111:7091/metadata/v1/changeCluster?raftClusterStr=192.168.0.111"},"http://192.168.0.111:7091/metadata/v1/changeCluster?raftClusterStr=192.168.0.111"),": 7091, 192.168.0.112:7091, 192.168.0.113:7091, 192.168.0.114:7091\" ', if it is scaling, only need to remove the nodes in the cluster connection string that need to be offline, and call the volume expansion and contraction interface.\nNote: The seata.server.raft.server-addr configuration is invalid as long as the cluster is built. Please perform volume expansion and contraction through the API. The subsequent console will also integrate volume expansion and contraction and cluster management functions."),(0,a.kt)("h2",{id:"client"},"Client"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"registry.type"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   registry:\n      type: raft\n      raft:\n         server-addr: 192.168.0.111:7091, 192.168.0.112:7091, 192.168.0.113:7091\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Change the TC cluster corresponding to the transaction group to the Raft group of the server.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'seata:\n   tx-service-group: default_tx_group\n   service:\n      vgroup-mapping:\n         default_tx_group: If server.raft.group is set to "default", then this field should be set to "default" as well.\n')))}d.isMDXComponent=!0}}]);