"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[81540],{71695:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=s(74848),i=s(28453);const a={title:"Prometheus",keywords:["Seata"],description:"Seata supports enabling Metrics data collection in TC and outputting it to the Prometheus monitoring system."},r="Prometheus Metrics Configuration Guide",o={id:"user/apm/prometheus",title:"Prometheus",description:"Seata supports enabling Metrics data collection in TC and outputting it to the Prometheus monitoring system.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/user/apm/prometheus.md",sourceDirName:"user/apm",slug:"/user/apm/prometheus",permalink:"/seata.github.io/docs/next/user/apm/prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/current/user/apm/prometheus.md",tags:[],version:"current",frontMatter:{title:"Prometheus",keywords:["Seata"],description:"Seata supports enabling Metrics data collection in TC and outputting it to the Prometheus monitoring system."},sidebar:"docs",previous:{title:"SkyWalking",permalink:"/seata.github.io/docs/next/user/apm/skywalking"},next:{title:"Performance Testing Report",permalink:"/seata.github.io/docs/next/user/performance"}},c={},u=[{value:"Configure Metrics in TC",id:"configure-metrics-in-tc",level:3},{value:"Step 1: Open the Metrics configuration in TC",id:"step-1-open-the-metrics-configuration-in-tc",level:4},{value:"Step 2: Modify the Prometheus configuration file and start Prometheus",id:"step-2-modify-the-prometheus-configuration-file-and-start-prometheus",level:4},{value:"Step 3: View Seata TC Metrics in Prometheus UI or Grafana",id:"step-3-view-seata-tc-metrics-in-prometheus-ui-or-grafana",level:4}];function l(t){const e={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"prometheus-metrics-configuration-guide",children:"Prometheus Metrics Configuration Guide"}),"\n",(0,n.jsx)(e.p,{children:"Seata supports enabling Metrics data collection in TC and outputting it to the Prometheus monitoring system."}),"\n",(0,n.jsx)(e.h3,{id:"configure-metrics-in-tc",children:"Configure Metrics in TC"}),"\n",(0,n.jsx)(e.h4,{id:"step-1-open-the-metrics-configuration-in-tc",children:"Step 1: Open the Metrics configuration in TC"}),"\n",(0,n.jsx)(e.p,{children:"Seata Server already includes the metrics (seata-metrics-all) dependency, but it is disabled by default. You need to enable the collection configuration for metrics."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-yml",children:"seata:\n  metrics:\n    enabled: true\n    registry-type: compact\n    exporter-list: prometheus\n    exporter-prometheus-port: 9898\n\n"})}),"\n",(0,n.jsxs)(e.p,{children:["Enter ",(0,n.jsx)(e.code,{children:"http://tc-server-ip:9898/metrics"})," to obtain the latest Metrics data, for example:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:'# HELP seata seata\n# TYPE seata untyped\nseata_transaction{meter="counter",role="tc",status="committed",} 1358.0 1551946035372\nseata_transaction{meter="counter",role="tc",status="active",} 0.0 1551946035372\nseata_transaction{meter="summary",role="tc",statistic="count",status="committed",} 6.0 1551946035372\nseata_transaction{meter="summary",role="tc",statistic="total",status="committed",} 6.0 1551946035372\nseata_transaction{meter="summary",role="tc",statistic="tps",status="committed",} 1.6163793103448276 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="count",status="committed",} 6.0 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="total",status="committed",} 910.0 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="max",status="committed",} 164.0 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="average",status="committed",} 151.66666666666666 1551946035372\n'})}),"\n",(0,n.jsx)(e.p,{children:"Obtaining similar data as above proves that the metric is successfully enabled."}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"Note:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"If certain transaction statuses, such as rollback, do not occur, the corresponding metric indicators will not exist (output)."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"step-2-modify-the-prometheus-configuration-file-and-start-prometheus",children:"Step 2: Modify the Prometheus configuration file and start Prometheus"}),"\n",(0,n.jsxs)(e.p,{children:["Open the Prometheus configuration file ",(0,n.jsx)(e.code,{children:"prometheus.yml"})," and add a scrape configuration to fetch Seata TC's Metrics data:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-yaml",children:"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-markdown",children:"static_configs:\n- targets: ['localhost:9090']\n\n- job_name: 'seata'\n\n# metrics_path defaults to '/metrics'\n# scheme defaults to 'http'.\n\nstatic_configs:\n- targets: ['tc-server-ip:9898']\n"})}),"\n",(0,n.jsx)(e.h4,{id:"step-3-view-seata-tc-metrics-in-prometheus-ui-or-grafana",children:"Step 3: View Seata TC Metrics in Prometheus UI or Grafana"}),"\n",(0,n.jsxs)(e.p,{children:["Open Prometheus UI ",(0,n.jsx)(e.code,{children:"http://localhost:9090/graph"})," in a browser, select ",(0,n.jsx)(e.code,{children:"seata_transaction"}),', and click on "Execute" to retrieve the latest data:']}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://img.alicdn.com/imgextra/i2/O1CN01r6916n1DiXhwH07dj_!!6000000000250-2-tps-1698-959.png",alt:"tc-prometheus"})}),"\n",(0,n.jsx)(e.p,{children:"It is recommended to use Grafana in conjunction with Prometheus for better query results:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://img.alicdn.com/imgextra/i2/O1CN01IdJk5G25B62KpD5If_!!6000000007487-2-tps-1694-973.png",alt:"tc-grafana"})}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"Note: This configuration sets Prometheus as the data source for Grafana, so the data is the same, but Grafana provides a better display effect."}),"\n"]})]})}function m(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var n=s(96540);const i={},a=n.createContext(i);function r(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);