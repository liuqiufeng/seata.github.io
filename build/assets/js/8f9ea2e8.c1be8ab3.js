"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[99465],{39302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(74848),i=t(28453);const s={title:"Seata Saga Mode",keywords:["Seata","Saga mode"],description:"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development."},o="SEATA Saga Mode",c={id:"dev/mode/saga-mode",title:"Seata Saga Mode",description:"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.0/dev/mode/saga-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/saga-mode",permalink:"/seata.github.io/docs/dev/mode/saga-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.0/dev/mode/saga-mode.md",tags:[],version:"v2.0",frontMatter:{title:"Seata Saga Mode",keywords:["Seata","Saga mode"],description:"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development."},sidebar:"docs",previous:{title:"Seata TCC Mode",permalink:"/seata.github.io/docs/dev/mode/tcc-mode"},next:{title:"Seata XA Mode",permalink:"/seata.github.io/docs/dev/mode/xa-mode"}},r={},d=[{value:"Overview",id:"overview",level:2},{value:"Saga&#39;s implementation:",id:"sagas-implementation",level:2},{value:"Saga implementation based on state machine engine:",id:"saga-implementation-based-on-state-machine-engine",level:3},{value:"Design",id:"design",level:2},{value:"State Machine Engine Principle:",id:"state-machine-engine-principle",level:3},{value:"State Machine Engine Design:",id:"state-machine-engine-design",level:3}];function l(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"seata-saga-mode",children:"SEATA Saga Mode"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"The Saga model is a long transaction solution provided by SEATA. In the Saga model, each participant in the business process submits a local transaction. When a participant fails, the previous successful participant is compensated. One stage is positive serving and The two-stage compensation services are implemented by business development."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://img.alicdn.com/tfs/TB1Y2kuw7T2gK0jSZFkXXcIQFXa-445-444.png",alt:"Saga mode diagram"})}),"\n",(0,a.jsx)(n.p,{children:"Theoretical basis: Hector & Kenneth Post a comment Sagas \uff081987\uff09"}),"\n",(0,a.jsx)(n.h2,{id:"sagas-implementation",children:"Saga's implementation:"}),"\n",(0,a.jsx)(n.h3,{id:"saga-implementation-based-on-state-machine-engine",children:"Saga implementation based on state machine engine:"}),"\n",(0,a.jsx)(n.p,{children:"Currently, the Saga mode provided by SEATA is implemented based on the state machine engine. The mechanism is:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Define the process of service invocation through state diagram and generate json state language definition file"}),"\n",(0,a.jsx)(n.li,{children:"A node in the state diagram can call a service, and the node can configure its compensation node"}),"\n",(0,a.jsx)(n.li,{children:"The state diagram json is driven by the state machine engine. When an exception occurs, the state engine reversely executes the compensation node corresponding to the successful node and rolls back the transaction"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Note: Whether to compensate when an exception occurs can also be determined by the user"}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Support the realization of service orchestration requirements, support single selection, concurrency, sub-process, parameter conversion, parameter mapping, service execution status judgment, exception capture and other functions"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example state diagram:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Example state diagram",src:t(93691).A+"",width:"508",height:"543"})}),"\n",(0,a.jsx)(n.h2,{id:"design",children:"Design"}),"\n",(0,a.jsx)(n.h3,{id:"state-machine-engine-principle",children:"State Machine Engine Principle:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"State Machine Engine Principle",src:t(13605).A+"",width:"936",height:"672"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The state diagram in the figure is to execute stateA, then stateB, and then stateC"}),"\n",(0,a.jsx)(n.li,{children:'The execution of "state" is based on the event-driven model. After the execution of stateA, routing messages will be generated and put into EventQueue. The event consumer will fetch messages from EventQueue and execute stateB.'}),"\n",(0,a.jsx)(n.li,{children:'When the entire state machine is started, it will call Seata Server to start distributed transactions, and generate xid, and then record "state machine instance" startup events to the local database'}),"\n",(0,a.jsx)(n.li,{children:'When the execution reaches a "state", it will call Seata Server to register branch transactions and produce branchId, and then record the "state instance" to start executing events to the local database'}),"\n",(0,a.jsx)(n.li,{children:'When a "status" execution is completed, the "status instance" execution end event is recorded to the local database, and then the Seata Server is called to report the status of the branch transaction'}),"\n",(0,a.jsx)(n.li,{children:'When the execution of the entire state machine is completed, the "state machine instance" execution completion event is recorded to the local database, and then Seata Server is called to submit or roll back the distributed transaction'}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"state-machine-engine-design",children:"State Machine Engine Design:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"State Machine Engine Design",src:t(50419).A+"",width:"1044",height:"702"})}),"\n",(0,a.jsx)(n.p,{children:"The design of the state machine engine is mainly divided into three layers. The upper layer depends on the lower layer. From bottom to top:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Eventing layer:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Implement event-driven architecture, which can push events and consume events by the consumer. This layer does not care what the event is and what the consumer performs."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["ProcessController layer:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Because the upper-level Eventing drives the execution of an "empty" process engine, the behavior and routing of "state" are not implemented.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:'Based on the above two layers, in theory, you can customize and extend any "process" engine'}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["StateMachineEngine layer:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Implement the behavior and routing logic of each state of the state machine engine"}),"\n",(0,a.jsx)(n.li,{children:"Provide API, state machine language warehouse"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},93691:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/demo_statelang-90f1fc01bfaf3a795c3b3357e1046f16.png"},50419:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/saga_engine-41e75396b108b8e6c157d08766368124.png"},13605:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/saga_engine_mechanism-38f1563ee8316a5dcabeeba27f511f79.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var a=t(96540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);