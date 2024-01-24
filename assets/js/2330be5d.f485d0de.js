"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[59522],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(i),g=r,h=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return i?n.createElement(h,a(a({ref:t},u),{},{components:i})):n.createElement(h,a({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},77841:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const o={title:"Test coverage guide",keywords:["Seata","coverage"],description:"Test coverage guide."},a="Test coverage guide",s={unversionedId:"developers/contributor-guide/test-coverage-guide_dev",id:"developers/contributor-guide/test-coverage-guide_dev",title:"Test coverage guide",description:"Test coverage guide.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/contributor-guide/test-coverage-guide_dev.md",sourceDirName:"developers/contributor-guide",slug:"/developers/contributor-guide/test-coverage-guide_dev",permalink:"/seata.github.io/docs/next/developers/contributor-guide/test-coverage-guide_dev",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/current/developers/contributor-guide/test-coverage-guide_dev.md",tags:[],version:"current",frontMatter:{title:"Test coverage guide",keywords:["Seata","coverage"],description:"Test coverage guide."},sidebar:"developers",previous:{title:"New contributor guide",permalink:"/seata.github.io/docs/next/developers/contributor-guide/new-contributor-guide_dev"},next:{title:"Reporting Security Issues",permalink:"/seata.github.io/docs/next/developers/contributor-guide/reporting-security-issues_dev"}},c={},l=[{value:"How to divide test granularity",id:"how-to-divide-test-granularity",level:2},{value:"Unit Test",id:"unit-test",level:2},{value:"1.The benefits of unit testing",id:"1the-benefits-of-unit-testing",level:3},{value:"2.Some design principle of unit test case",id:"2some-design-principle-of-unit-test-case",level:3},{value:"3.The specified value of the test coverage",id:"3the-specified-value-of-the-test-coverage",level:3},{value:"4.Project agreement",id:"4project-agreement",level:3},{value:"Integration test",id:"integration-test",level:2},{value:"Project agreement",id:"project-agreement",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-coverage-guide"},"Test coverage guide"),(0,r.kt)("h2",{id:"how-to-divide-test-granularity"},"How to divide test granularity"),(0,r.kt)("img",{src:"https://microservices.io/i/test-pyramid.jpeg"}),'How to divide test granularity is a big problem. Chris Richardson has divided unit test, integration test, component test and end-to-end test for services test in "[Descending the Testing Pyramid: Effective Testing Strategies for Microservices](https://microservices.io/microservices/testing/2019/09/20/oracle-code-one-testing.html)". We can use it for reference in the process of designing test cases.',(0,r.kt)("h2",{id:"unit-test"},"Unit Test"),(0,r.kt)("h3",{id:"1the-benefits-of-unit-testing"},"1.The benefits of unit testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit test code can help everyone to go into details and understand the function of the code."),(0,r.kt)("li",{parentName:"ul"},"We can find bugs by test case, and then enhance the robustness of the code."),(0,r.kt)("li",{parentName:"ul"},"Test case code is also the demo usage of the core code.")),(0,r.kt)("h3",{id:"2some-design-principle-of-unit-test-case"},"2.Some design principle of unit test case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Steps, fine-grained and combination conditions should be well designed."),(0,r.kt)("li",{parentName:"ul"},"Attention to boundary condition test"),(0,r.kt)("li",{parentName:"ul"},"Test code should also be designed without writing useless code."),(0,r.kt)("li",{parentName:"ul"},"When you find a ",(0,r.kt)("inlineCode",{parentName:"li"},"method")," that is hard to write unit test, if you can be sure the ",(0,r.kt)("inlineCode",{parentName:"li"},"method"),' is "smelly code", then  refactor it with the committer.'),(0,r.kt)("li",{parentName:"ul"},"The mock framework in seata is: ",(0,r.kt)("a",{parentName:"li",href:"http://site.mockito.org/"},"mockito"),". Some tutorials:",(0,r.kt)("a",{parentName:"li",href:"http://www.baeldung.com/bdd-mockito"},"mockito tutorial"),",",(0,r.kt)("a",{parentName:"li",href:"https://dzone.com/refcardz/mockito"},"mockito refcard")),(0,r.kt)("li",{parentName:"ul"},"TDD\uff08optional\uff09\uff1aWhen you start a new issue, you can try to write test case at first ")),(0,r.kt)("h3",{id:"3the-specified-value-of-the-test-coverage"},"3.The specified value of the test coverage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the stage, the test coverage specified value of delta changed codes is \uff1a>=80%. The higher, the better."),(0,r.kt)("li",{parentName:"ul"},"We can see the coverage report in this page: ",(0,r.kt)("a",{parentName:"li",href:"https://codecov.io/gh/apache/incubator-seata"},"https://codecov.io/gh/apache/incubator-seata"))),(0,r.kt)("h3",{id:"4project-agreement"},"4.Project agreement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The unit test cases of the Seata project are distributed in each sub module of the project, and the test assertion class ends with Test.")),(0,r.kt)("h2",{id:"integration-test"},"Integration test"),(0,r.kt)("h3",{id:"project-agreement"},"Project agreement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integration test in this project generally refers to the test above unit test level."),(0,r.kt)("li",{parentName:"ul"},"This project use ",(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions"},"github actions"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/jib"},"jiblib maven plugin"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fabric8io/fabric8-maven-plugin"},"fabric maven plugin"),"\u3001",(0,r.kt)("a",{parentName:"li",href:"https://github.com/testcontainers/testcontainers-java"},"testContainers")," to build ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," images\uff0cand build integration test environment "),(0,r.kt)("li",{parentName:"ul"},"Different from unit test, if a test case needs to rely on the third-party middleware, you can use the above tools to build the docker environment and test without mock. But also pay attention to the granularity of building components. For an overly complex environment, you can: the middleware on which the core test depends can be built by docker, and the middleware on which the core test depends can be mocked"),(0,r.kt)("li",{parentName:"ul"},"The integration test cases of the Seata project are uniformly placed in the integration-test sub module, and the test assertion class ends with IT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://junit.org/junit5/"},"Junit5")," is used here"),(0,r.kt)("li",{parentName:"ul"},"In the process of parallel running of test cases, pay attention to the isolation state of common middleware, plan the test data and prevent conflicts.")))}p.isMDXComponent=!0}}]);