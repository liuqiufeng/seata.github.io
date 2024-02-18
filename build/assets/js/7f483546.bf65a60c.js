"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[78642],{20801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=a(74848),s=a(28453);const i={title:"Q&A on the New Version of Snowflake Algorithm",author:"selfishlover",keywords:["Seata","snowflake","UUID","page split"],date:"2021/06/21"},o="Q&A on the New Version of Snowflake Algorithm",r={permalink:"/seata.github.io/blog/seata-snowflake-explain",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-snowflake-explain.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-snowflake-explain.md",title:"Q&A on the New Version of Snowflake Algorithm",description:"In the previous analysis of the new version of the Snowflake algorithm, we mentioned two changes made in the new version:",date:"2021-06-21T00:00:00.000Z",formattedDate:"June 21, 2021",tags:[],readingTime:7.315,hasTruncateMarker:!1,authors:[{name:"selfishlover"}],frontMatter:{title:"Q&A on the New Version of Snowflake Algorithm",author:"selfishlover",keywords:["Seata","snowflake","UUID","page split"],date:"2021/06/21"},unlisted:!1,prevItem:{title:"In-Depth Analysis of Seata AT Mode Transaction Isolation Levels and Global Lock Design",permalink:"/seata.github.io/blog/seata-at-lock"},nextItem:{title:"Analysis of Seata's Distributed UUID Generator Based on Improved Snowflake Algorithm",permalink:"/seata.github.io/blog/seata-analysis-UUID-generator"}},l={authorsImageUrls:[void 0]},h=[{value:"Further Considerations",id:"further-considerations",level:2}];function d(e){const t={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In the previous analysis of the new version of the Snowflake algorithm, we mentioned two changes made in the new version:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The timestamp no longer constantly follows the system clock."}),"\n",(0,n.jsxs)(t.li,{children:["The exchange of positions between node ID and timestamp. From the original:\n",(0,n.jsx)(t.img,{alt:"Original Bit Allocation Strategy",src:a(45044).A+"",width:"904",height:"156"}),"\nto:\n",(0,n.jsx)(t.img,{alt:"Improved Bit Allocation Strategy",src:a(64003).A+"",width:"900",height:"157"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A careful student raised a question: In the new version, the algorithm is indeed monotonically increasing within a single node, but in a multi-instance deployment, it is no longer globally monotonically increasing! Because it is obvious that the node ID is in the high bits, so the generated ID with a larger node ID will definitely be greater than the ID with a smaller node ID, regardless of the chronological order. In contrast, the original algorithm, with the timestamp in the high bits and always following the system clock, can ensure that IDs generated earlier are smaller than those generated later. Only when two nodes happen to generate IDs at the same timestamp, the order of the two IDs is determined by the node ID. So, does it mean that the new version of the algorithm is wrong?"}),"\n",(0,n.jsx)(t.p,{children:"This is a great question! The fact that students can raise this question indicates a deep understanding of the essential differences between the standard Snowflake algorithm and the new version. This is commendable! Here, let's first state the conclusion: indeed, the new version of the algorithm does not possess global monotonicity, but this does not affect our original intention (to reduce database page splits). This conclusion may seem counterintuitive but can be proven."}),"\n",(0,n.jsxs)(t.p,{children:["Before providing the proof, let's briefly review some knowledge about page splits in databases. Taking the classic MySQL InnoDB as an example, InnoDB uses a B+ tree index where the leaf nodes of the primary key index also store the complete records of data rows. The leaf nodes are linked together in the form of a doubly linked list. The physical storage form of the leaf nodes is a data page, and each data page can store up to N rows of records (where N is inversely proportional to the size of each row). As shown in the diagram:\n",(0,n.jsx)(t.img,{alt:"Data Page",src:a(43835).A+"",width:"956",height:"256"}),"\nThe characteristics of the B+ tree require that the left node should be smaller than the right node. What happens if we want to insert a record with an ID of 25 at this point (assuming each data page can only hold 4 records)? The answer is that it will cause a page split, as shown in the diagram:\n",(0,n.jsx)(t.img,{alt:"Page Split",src:a(88800).A+"",width:"1213",height:"270"}),"\nPage splits are unfriendly to I/O, requiring the creation of new data pages, copying and transferring part of the records from the old data page, etc., and should be avoided as much as possible."]}),"\n",(0,n.jsx)(t.p,{children:"Ideally, the primary key ID should be sequentially increasing (for example, setting the primary key as auto_increment). This way, a new page will only be needed when the current data page is full, and the doubly linked list will always grow sequentially at the tail, avoiding any mid-node splits."}),"\n",(0,n.jsx)(t.p,{children:"In the worst-case scenario, if the primary key ID is randomly generated and unordered (for example, a UUID string in Java), new records will be randomly assigned to any data page. If the page is already full, it will trigger a page split."}),"\n",(0,n.jsx)(t.p,{children:"If the primary key ID is generated by the standard Snowflake algorithm, in the best-case scenario, only one node is generating IDs within each timestamp. In this case, the algorithm's effect is equivalent to the ideal situation of sequential incrementation, similar to auto_increment. In the worst-case scenario, all nodes within each timestamp are generating IDs, and the algorithm's effect is close to unordered (but still much better than completely unordered UUIDs, as the workerId with only 10 bits limits the nodes to a maximum of 1024). In actual production, the algorithm's effectiveness depends on business traffic, and the lower the concurrency, the closer the algorithm is to the ideal scenario."}),"\n",(0,n.jsx)(t.p,{children:"So, how does it fare with the new version of the algorithm?"}),"\n",(0,n.jsx)(t.p,{children:"The new version of the algorithm, from a global perspective, produces IDs in an unordered manner. However, for each workerId, the generated IDs are strictly monotonically increasing. Additionally, since workerId is finite, it can divide into a maximum of 1024 subsequences, each of which is monotonically increasing."}),"\n",(0,n.jsxs)(t.p,{children:["For a database, initially, the received IDs may be unordered, coming from various subsequences, as illustrated here:\n",(0,n.jsx)(t.img,{alt:"Initial State",src:a(43625).A+"",width:"986",height:"268"})]}),"\n",(0,n.jsxs)(t.p,{children:["If, at this point, a worker1-seq2 arrives, it will clearly cause a page split:\n",(0,n.jsx)(t.img,{alt:"First Split",src:a(69366).A+"",width:"1228",height:"258"})]}),"\n",(0,n.jsx)(t.p,{children:'However, after the split, interesting things happen. For worker1, subsequent seq3, seq4 will not cause page splits anymore (because there is still space), and seq5 only needs to link to a new page for sequential growth (the difference is that this new page is not at the tail of the doubly linked list). Note that the subsequent IDs of worker1 will not be placed after any nodes from worker2 or beyond (thus avoiding page splits for later nodes) because they are always smaller than the IDs of worker2; nor will they be placed before the current node of worker1 (thus avoiding page splits for previous nodes) because the subsequences of worker1 are always monotonically increasing. Here, we refer to such subsequences as reaching a steady state, meaning that the subsequence has "stabilized," and its subsequent growth will only occur at the end of the subsequence without causing page splits for other nodes.'}),"\n",(0,n.jsxs)(t.p,{children:["The same principle can be extended to all subsequences. Regardless of how chaotic the IDs received by the database are initially, after a finite number of page splits, the doubly linked list can always reach a stable state:\n",(0,n.jsx)(t.img,{alt:"Steady State",src:a(47455).A+"",width:"789",height:"298"})]}),"\n",(0,n.jsx)(t.p,{children:"After reaching the steady state, subsequent IDs will only grow sequentially within their respective subsequences, without causing page splits. The difference between this sequential growth and the sequential growth of auto_increment is that the former has 1024 growth points (the ends of various subsequences), while the latter only has one at the end."}),"\n",(0,n.jsxs)(t.p,{children:["At this point, we can answer the question posed at the beginning: indeed, the new algorithm is not globally monotonically increasing, but the algorithm ",(0,n.jsx)(t.strong,{children:"converges"}),". After reaching a steady state, the new algorithm can achieve the same effect as global sequential incrementation."]}),"\n",(0,n.jsx)(t.h2,{id:"further-considerations",children:"Further Considerations"}),"\n",(0,n.jsx)(t.p,{children:"The discussion so far has focused on the continuous growth of sequences. However, in practical production, there is not only the insertion of new data but also the deletion of old data. Data deletion may lead to page merging (InnoDB, if it finds that the space utilization of two adjacent data pages is both less than 50%, it will merge them). How does this affect the new algorithm?"}),"\n",(0,n.jsx)(t.p,{children:"As we have seen in the above process, the essence of the new algorithm is to utilize early page splits to gradually separate different subsequences, allowing the algorithm to continuously converge to a steady state. Page merging, on the other hand, may reverse this process by merging different subsequences back into the same data page, hindering the convergence of the algorithm. Especially in the early stages of convergence, frequent page merging may even prevent the algorithm from converging forever (I just separated them, and now I'm merging them back together, back to square one~)! However, after convergence, only page merging at the end nodes of each subsequence has the potential to disrupt the steady state (merging the end node of one subsequence with the head node of the next subsequence). Merging on the remaining nodes of the subsequence does not affect the steady state because the subsequence remains ordered, albeit with a shorter length."}),"\n",(0,n.jsx)(t.p,{children:"Taking Seata's server as an example, the data in the three tables of the server has a relatively short lifecycle. After a global transaction ends, the data is cleared. This is not friendly to the new algorithm, as it does not provide enough time for convergence. However, there is already a pull request (PR) for delayed deletion in the review process, and with this PR, the effect will be much better. For example, periodic weekly cleanup allows sufficient time for the algorithm to converge in the early stages, and for most of the time, the database can benefit from it. At the time of cleanup, the worst-case result is that the table is cleared, and the algorithm starts from scratch."}),"\n",(0,n.jsx)(t.p,{children:"If you wish to apply the new algorithm to a business system, make sure to ensure that the algorithm has time to converge. For example, for user tables or similar, where data is intended to be stored for a long time, the algorithm can naturally converge. Alternatively, implement a mechanism for delayed deletion, providing enough time for the algorithm to converge."}),"\n",(0,n.jsx)(t.p,{children:"If you have better opinions and suggestions, feel free to contact the Seata community!"})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},64003:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/after-cad00baeb92d348340136601174c9d8c.png"},45044:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/before-8c52102c116e08f0b37d947b30008b58.png"},43835:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/page1-09fa5360a09c5f6ce7e1c5978f370eb1.png"},88800:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/page2-0ddae897017478780b7f338cca9daa02.png"},43625:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/page3-00bbd658b09cdde9b7cb39a0bd38fbe0.png"},69366:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/page4-883fee2cd79ec31b7f1d67c9e6362bca.png"},47455:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/page5-24bcb08065fcf74b8e6a55b3c54e81b2.png"},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var n=a(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);