"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[24162],{79530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(74848),s=n(28453);const r={title:"Metrics Design",keywords:["Seata","Metrics"],description:"Seata Metrics"},o=void 0,a={id:"dev/seata-mertics",title:"Metrics Design",description:"Seata Metrics",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1/dev/seata-mertics.md",sourceDirName:"dev",slug:"/dev/seata-mertics",permalink:"/seata.github.io/docs/v1.1/dev/seata-mertics",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.1/dev/seata-mertics.md",tags:[],version:"v1.1",frontMatter:{title:"Metrics Design",keywords:["Seata","Metrics"],description:"Seata Metrics"},sidebar:"docs",previous:{title:"Transaction Coordinator(TC)",permalink:"/seata.github.io/docs/v1.1/dev/domain/tc"},next:{title:"Version Upgrade Guide",permalink:"/seata.github.io/docs/v1.1/ops/upgrade"}},c={},l=[{value:"Metrics",id:"metrics",level:3},{value:"Design Philosophy",id:"design-philosophy",level:4},{value:"Module Description",id:"module-description",level:4},{value:"How to Use",id:"how-to-use",level:4},{value:"Add Configuration",id:"add-configuration",level:5},{value:"Download and start Prometheus",id:"download-and-start-prometheus",level:5},{value:"View data output",id:"view-data-output",level:5},{value:"How to extend",id:"how-to-extend",level:4}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"metrics",children:"Metrics"}),"\n",(0,i.jsx)(t.h4,{id:"design-philosophy",children:"Design Philosophy"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Seata, as an integrated data consistency framework, will minimize the use of third-party dependencies to reduce the risk of conflicts in the Metrics module."}),"\n",(0,i.jsx)(t.li,{children:"The Metrics module will strive for higher measurement performance and lower resource overhead, minimizing side effects when enabled."}),"\n",(0,i.jsxs)(t.li,{children:["When configuring, whether Metrics is activated and how data are published depend on the corresponding configuration; enabling configuration will automatically activate Metrics and publish measurement data to ",(0,i.jsx)(t.a,{href:"https://github.com/prometheus",children:"Prometheus"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Using Service Provider Interface (SPI) for loading extensions instead of Spring."}),"\n",(0,i.jsx)(t.li,{children:"Initially, only core Transaction-related metrics will be published, and all other operational metrics will be gradually improved based on community needs."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"module-description",children:"Module Description"}),"\n",(0,i.jsxs)(t.p,{children:["It consists of two core API modules, ",(0,i.jsx)(t.code,{children:"seata-metrics-api"})," and ",(0,i.jsx)(t.code,{children:"seata-metrics-core"}),", as well as N implementation modules such as ",(0,i.jsx)(t.code,{children:"seata-metrics-registry-compact"})," and ",(0,i.jsx)(t.code,{children:"seata-metrics-exporter-prometheus"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"seata-metrics-api Module"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This module is the core of Metrics and is part of the Seata infrastructure, referenced by TC, TM, and RM. It ",(0,i.jsx)(t.strong,{children:"does not contain any specific implementation code"}),", but it only includes interface definitions, including:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Meter class interfaces: ",(0,i.jsx)(t.code,{children:"Gauge"}),", ",(0,i.jsx)(t.code,{children:"Counter"}),", ",(0,i.jsx)(t.code,{children:"Timer"}),", etc."]}),"\n",(0,i.jsxs)(t.li,{children:["Registry container interface ",(0,i.jsx)(t.code,{children:"Registry"})]}),"\n",(0,i.jsxs)(t.li,{children:["Measurement publishing interface ",(0,i.jsx)(t.code,{children:"Publisher"})]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Note: There are many existing implementations of Metrics in the open-source community, such as"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/Netflix/spectator",children:"Netflix-Spectator"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/dropwizard/metrics",children:"Dropwizard-Metrics"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/dubbo/dubbo-metrics",children:"Dubbo-Metrics"}),'\nSome of them are lightweight and agile, while others are heavy and powerful. Since they are also "implementations", they will not be included in ',(0,i.jsx)(t.code,{children:"seata-metrics-api"})," to avoid implementation binding."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"seata-metrics-core Module"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This core module of Metrics organizes (loads) one Registry and N Exporters based on configuration."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"seata-metrics-registry-compact Module"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This is the default (built-in) Registry implementation we provide.Instead of using other open-source Metrics libraries, it provides lightweight implementations of four types of Meters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"seata-metrics-exporter-prometheus Module"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This is the default Metrics implementation we provide. Without using other open-source Metrics implementations, it provides lightweight implementations of three types of Meters:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Meter Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Gauge"}),(0,i.jsx)(t.td,{children:"Single latest value meter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Counter"}),(0,i.jsx)(t.td,{children:"Single accumulating meter, can increase or decrease"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Summary"}),(0,i.jsxs)(t.td,{children:["Multi-measurement output counter, outputs ",(0,i.jsx)(t.code,{children:"total"}),", ",(0,i.jsx)(t.code,{children:"count"}),", and ",(0,i.jsx)(t.code,{children:"tps"})," (total per second) with no units"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Timer"}),(0,i.jsxs)(t.td,{children:["Multi-measurement output timer, outputs ",(0,i.jsx)(t.code,{children:"total"}),", ",(0,i.jsx)(t.code,{children:"count"}),", ",(0,i.jsx)(t.code,{children:"max"}),", and ",(0,i.jsx)(t.code,{children:"average"}),", supports accumulation in microseconds"]})]})]})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Note:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"More complex meters such as Histogram may be added in the future. Histogram is a type of meter that locally aggregates 75th, 90th, 95th, 98th, 99th, 99.9th, etc., and is suitable for certain scenarios but requires more memory."}),"\n",(0,i.jsx)(t.li,{children:"All meters inherit from Meter, and after executing the measure() method, all meters will generate 1 or N normalized Measurement results."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"It also implements an in-memory Registry and Prometheus Exporter to synchronize measurement data with Prometheus."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Note: Different monitoring systems have different ways of collecting measurement data. For example, Zabbix supports pushing with zabbix-agent, while Prometheus recommends using prometheus-server ",(0,i.jsx)(t.a,{href:"https://prometheus.io/docs/practices/pushing/",children:"pulling"}),". Similarly, data exchange protocols are also different, so adaptation is often needed one by one."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"how-to-use",children:"How to Use"}),"\n",(0,i.jsx)(t.h5,{id:"add-configuration",children:"Add Configuration"}),"\n",(0,i.jsx)(t.p,{children:"If you need to enable TC Metrics, you need to add configuration items in its configuration file:"}),"\n",(0,i.jsx)(t.p,{children:"Take file.conf for example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'## metrics settings\nmetrics {\n  enabled = true\n  registryType = "compact"\n  # multi exporters use comma divided\n  exporterList = "prometheus"\n  exporterPrometheusPort = 9898\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Or You can use application.yaml for versions above 1.5.0"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"seata:\n  metrics:\n    enabled: true\n    registryType: compact\n    exporterList: prometheus\n    exporterPrometheusPort: 9898\n"})}),"\n",(0,i.jsx)(t.p,{children:"Or You can also use a third-party configuration center such as nacos, apollo, etc."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/config-center",children:"Please refer to here"})," to upload the seata metrics configuration items to the corresponding configuration center, or open the corresponding configuration center console for manually adding."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"metrics.enabled=true\nmetrics.registryType=compact\nmetrics.exporterList=prometheus\nmetrics.exporterPrometheusPort=9898\n"})}),"\n",(0,i.jsxs)(t.p,{children:["After starting TC, you can get the text format data of Metrics on ",(0,i.jsx)(t.code,{children:"http://tc-server-ip:9898/metrics"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Tips: Port ",(0,i.jsx)(t.code,{children:"9898"})," is used by default, and the list of ports registered by Prometheus ",(0,i.jsx)(t.a,{href:"https://github.com/prometheus/prometheus/wiki/Default-port-allocations",children:"can be visited here"}),". If you want to change this port, you can use ",(0,i.jsx)(t.code,{children:"metrics.exporter.prometheus.port"})," to modify the configuration."]}),"\n"]}),"\n",(0,i.jsx)(t.h5,{id:"download-and-start-prometheus",children:"Download and start Prometheus"}),"\n",(0,i.jsxs)(t.p,{children:["After the download is complete, modify the Prometheus configuration file ",(0,i.jsx)(t.code,{children:"prometheus.yml"}),", and add an item to grab Seata's measurement data in ",(0,i.jsx)(t.code,{children:"scrape_configs"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n      - targets: ['localhost:9090']\n\n  - job_name: 'seata'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n      - targets: ['tc-server-ip:9898']\n"})}),"\n",(0,i.jsx)(t.h5,{id:"view-data-output",children:"View data output"}),"\n",(0,i.jsxs)(t.p,{children:["It is recommended to combine the configuration [Grafana] (",(0,i.jsx)(t.a,{href:"https://prometheus.io/docs/visualization/grafana/",children:"https://prometheus.io/docs/visualization/grafana/"}),") to obtain better query results. The initial Metrics exported by Seata include:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"TC :"}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metrics"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"seata.transaction(role=tc,meter=counter,status=active/committed/rollback)"}),(0,i.jsx)(t.td,{children:"Total number of currently active/committed/rollback transactions"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"seata.transaction(role=tc, meter=summary, statistic=count, status=committed/rollback)"}),(0,i.jsx)(t.td,{children:"The number of transactions committed/rolled back in the current cycle"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"seata.transaction(role=tc,meter=summary,statistic=tps,status=committed/rollback)"}),(0,i.jsx)(t.td,{children:"Transaction TPS(transaction per second) committed/rolled back in the current cycle"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"seata.transaction(role=tc, meter=timer, statistic=total, status=committed/rollback)"}),(0,i.jsx)(t.td,{children:"The sum of time-consuming transactions committed/rolled back in the current cycle"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"seata.transaction(role=tc, meter=timer, statistic=count, status=committed/rollback)"}),(0,i.jsx)(t.td,{children:"The number of transactions committed/rolled back in the current cycle"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"seata.transaction(role=tc, meter=timer, statistic=average, status=committed/rollback)"}),(0,i.jsx)(t.td,{children:"The average transaction time spent on committing/rolling back in the current cycle"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"seata.transaction(role=tc, meter=timer, statistic=max, status=committed/rollback)"}),(0,i.jsx)(t.td,{children:"The maximum time-consuming transaction committed/rolled back in the current cycle"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Hint: the values of seata.transaction(role=tc, meter=summary, statistic=count, status=committed/rollback) and seata.transaction(role=tc, meter=timer, statistic=count, status=committed/rollback) may be the same, but they are derived from two different metrics."}),"\n",(0,i.jsx)(t.p,{children:"-TM:"}),"\n",(0,i.jsx)(t.p,{children:"TM will be implemented later, including:\nseata.transaction(role=tm,name={GlobalTransactionalName},meter=counter,status=active/committed/rollback) : Use GlobalTransactionalName as the dimension to distinguish the status of different Transactional."}),"\n",(0,i.jsx)(t.p,{children:"-RM:"}),"\n",(0,i.jsx)(t.p,{children:"RM will be implemented later, including:\nseata.transaction(role=rm, name={BranchTransactionalName}, mode=at/mt, meter=counter, status=active/committed/rollback): Use BranchTransactionalName as the dimension and AT/MT dimension to distinguish the transactional status of different branches."}),"\n",(0,i.jsx)(t.h4,{id:"how-to-extend",children:"How to extend"}),"\n",(0,i.jsx)(t.p,{children:"If there are any of the following situations:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"You do not use Prometheus as the operation and maintenance monitoring system, but you want to integrate Seata's Metrics data into Dashboard;"}),"\n",(0,i.jsx)(t.li,{children:"You need more complex and powerful metric types, which already exist in other Metrics implementation libraries, and hope to integrate these third-party dependencies for direct use;"}),"\n",(0,i.jsxs)(t.li,{children:["You need to change the Measurement output of the default Metric, such as adding a ",(0,i.jsx)(t.code,{children:"min"})," or ",(0,i.jsx)(t.code,{children:"sd"})," (variance) to the Timer;"]}),"\n",(0,i.jsx)(t.li,{children:"..."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Then you need to extend the implementation of Metrics by yourself, please create a new module project such as ",(0,i.jsx)(t.code,{children:"seata-metrics-xxxx"}),", after that:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For 1: you need to implement a new Exporter;"}),"\n",(0,i.jsx)(t.li,{children:"For 2: You can change the default Registry implementation and return the third-party Meter implementation;"}),"\n",(0,i.jsxs)(t.li,{children:["For 3: You can modify the implementation of the corresponding Meter, including the Measurement list returned by the ",(0,i.jsx)(t.code,{children:"measure()"})," method."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);