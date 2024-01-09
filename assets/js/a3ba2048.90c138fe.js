"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[34958],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:e},l),{},{components:r})):n.createElement(f,i({ref:e},l))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57882:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Prometheus",keywords:["Seata"],description:"Seata supports enabling Metrics data collection in TC and outputting it to the Prometheus monitoring system.."},i="Prometheus Metrics Configuration Guide",s={unversionedId:"user/apm/prometheus",id:"version-v1.3/user/apm/prometheus",title:"Prometheus",description:"Seata supports enabling Metrics data collection in TC and outputting it to the Prometheus monitoring system..",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.3/user/apm/prometheus.md",sourceDirName:"user/apm",slug:"/user/apm/prometheus",permalink:"/docs/v1.3/user/apm/prometheus",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.3/user/apm/prometheus.md",tags:[],version:"v1.3",frontMatter:{title:"Prometheus",keywords:["Seata"],description:"Seata supports enabling Metrics data collection in TC and outputting it to the Prometheus monitoring system.."},sidebar:"docs",previous:{title:"SkyWalking",permalink:"/docs/v1.3/user/apm/skywalking"},next:{title:"Performance Testing Report",permalink:"/docs/v1.3/user/performance"}},c={},u=[{value:"Configure Metrics in TC",id:"configure-metrics-in-tc",level:3},{value:"Step 1: Open the Metrics configuration in TC",id:"step-1-open-the-metrics-configuration-in-tc",level:4},{value:"Step 2: Modify the Prometheus configuration file and start Prometheus",id:"step-2-modify-the-prometheus-configuration-file-and-start-prometheus",level:4},{value:"Step 3: View Seata TC Metrics in Prometheus UI or Grafana",id:"step-3-view-seata-tc-metrics-in-prometheus-ui-or-grafana",level:4}],l={toc:u},p="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prometheus-metrics-configuration-guide"},"Prometheus Metrics Configuration Guide"),(0,a.kt)("p",null,"Seata supports enabling Metrics data collection in TC and outputting it to the Prometheus monitoring system."),(0,a.kt)("h3",{id:"configure-metrics-in-tc"},"Configure Metrics in TC"),(0,a.kt)("h4",{id:"step-1-open-the-metrics-configuration-in-tc"},"Step 1: Open the Metrics configuration in TC"),(0,a.kt)("p",null,"Seata Server already includes the metrics (seata-metrics-all) dependency, but it is disabled by default. You need to enable the collection configuration for metrics."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"seata:\n  metrics:\n    enabled: true\n    registry-type: compact\n    exporter-list: prometheus\n    exporter-prometheus-port: 9898\n\n")),(0,a.kt)("p",null,"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"http://tc-server-ip:9898/metrics")," to obtain the latest Metrics data, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# HELP seata seata\n# TYPE seata untyped\nseata_transaction{meter="counter",role="tc",status="committed",} 1358.0 1551946035372\nseata_transaction{meter="counter",role="tc",status="active",} 0.0 1551946035372\nseata_transaction{meter="summary",role="tc",statistic="count",status="committed",} 6.0 1551946035372\nseata_transaction{meter="summary",role="tc",statistic="total",status="committed",} 6.0 1551946035372\nseata_transaction{meter="summary",role="tc",statistic="tps",status="committed",} 1.6163793103448276 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="count",status="committed",} 6.0 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="total",status="committed",} 910.0 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="max",status="committed",} 164.0 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="average",status="committed",} 151.66666666666666 1551946035372\n')),(0,a.kt)("p",null,"Obtaining similar data as above proves that the metric is successfully enabled."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"If certain transaction statuses, such as rollback, do not occur, the corresponding metric indicators will not exist (output)."))),(0,a.kt)("h4",{id:"step-2-modify-the-prometheus-configuration-file-and-start-prometheus"},"Step 2: Modify the Prometheus configuration file and start Prometheus"),(0,a.kt)("p",null,"Open the Prometheus configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus.yml")," and add a scrape configuration to fetch Seata TC's Metrics data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"static_configs:\n- targets: ['localhost:9090']\n\n- job_name: 'seata'\n\n# metrics_path defaults to '/metrics'\n# scheme defaults to 'http'.\n\nstatic_configs:\n- targets: ['tc-server-ip:9898']\n")),(0,a.kt)("h4",{id:"step-3-view-seata-tc-metrics-in-prometheus-ui-or-grafana"},"Step 3: View Seata TC Metrics in Prometheus UI or Grafana"),(0,a.kt)("p",null,"Open Prometheus UI ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/graph")," in a browser, select ",(0,a.kt)("inlineCode",{parentName:"p"},"seata_transaction"),', and click on "Execute" to retrieve the latest data:'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01r6916n1DiXhwH07dj_!!6000000000250-2-tps-1698-959.png",alt:"tc-prometheus"})),(0,a.kt)("p",null,"It is recommended to use Grafana in conjunction with Prometheus for better query results:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01IdJk5G25B62KpD5If_!!6000000007487-2-tps-1694-973.png",alt:"tc-grafana"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This configuration sets Prometheus as the data source for Grafana, so the data is the same, but Grafana provides a better display effect.")))}m.isMDXComponent=!0}}]);