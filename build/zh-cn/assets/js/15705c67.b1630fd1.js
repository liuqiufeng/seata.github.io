"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[36517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),i=u(n),d=o,g=i["".concat(s,".").concat(d)]||i[d]||m[d]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[i]="string"==typeof e?e:o,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Seata\u65b0\u7279\u6027\u652f\u6301 -- undo_log\u538b\u7f29",author:"chd",keywords:["Seata","undo_log","compress"],date:"2021/05/07"},l="Seata\u65b0\u7279\u6027\u652f\u6301 -- undo_log\u538b\u7f29",p={permalink:"/zh-cn/blog/seata-feature-undo-log-compress",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-feature-undo-log-compress.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-feature-undo-log-compress.md",title:"Seata\u65b0\u7279\u6027\u652f\u6301 -- undo_log\u538b\u7f29",description:"\u73b0\u72b6 & \u75db\u70b9",date:"2021-05-07T00:00:00.000Z",formattedDate:"2021\u5e745\u67087\u65e5",tags:[],readingTime:5.78,hasTruncateMarker:!1,authors:[{name:"chd"}],frontMatter:{title:"Seata\u65b0\u7279\u6027\u652f\u6301 -- undo_log\u538b\u7f29",author:"chd",keywords:["Seata","undo_log","compress"],date:"2021/05/07"},prevItem:{title:"Seata\u57fa\u4e8e\u6539\u826f\u7248\u96ea\u82b1\u7b97\u6cd5\u7684\u5206\u5e03\u5f0fUUID\u751f\u6210\u5668\u5206\u6790",permalink:"/zh-cn/blog/seata-analysis-UUID-generator"},nextItem:{title:"ConcurrentHashMap\u5bfc\u81f4\u7684Seata\u6b7b\u9501\u95ee\u9898",permalink:"/zh-cn/blog/seata-dsproxy-deadlock"}},s={authorsImageUrls:[void 0]},u=[{value:"\u73b0\u72b6 &amp; \u75db\u70b9",id:"\u73b0\u72b6--\u75db\u70b9",level:3},{value:"\u5934\u8111\u98ce\u66b4",id:"\u5934\u8111\u98ce\u66b4",level:3},{value:"\u53ef\u884c\u6027\u5206\u6790",id:"\u53ef\u884c\u6027\u5206\u6790",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"\u5b9e\u73b0\u601d\u8def",id:"\u5b9e\u73b0\u601d\u8def",level:4},{value:"\u90e8\u5206\u4ee3\u7801",id:"\u90e8\u5206\u4ee3\u7801",level:4},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:3}],c={toc:u},i="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u73b0\u72b6--\u75db\u70b9"},"\u73b0\u72b6 & \u75db\u70b9"),(0,o.kt)("p",null,"\u5bf9\u4e8eSeata\u800c\u8a00\uff0c\u662f\u901a\u8fc7\u8bb0\u5f55DML\u64cd\u4f5c\u7684\u524d\u540e\u7684\u6570\u636e\u7528\u4e8e\u8fdb\u884c\u540e\u7eed\u53ef\u80fd\u7684\u56de\u6eda\u64cd\u4f5c\u7684\uff0c\u5e76\u4e14\u628a\u8fd9\u4e9b\u6570\u636e\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u7684\u4e00\u4e2ablob\u7684\u5b57\u6bb5\u91cc\u9762\u3002\u5bf9\u4e8e\u6279\u91cf\u63d2\u5165\uff0c\u66f4\u65b0\uff0c\u5220\u9664\u7b49\u64cd\u4f5c\uff0c\u5176\u5f71\u54cd\u7684\u884c\u6570\u53ef\u80fd\u4f1a\u6bd4\u8f83\u591a\uff0c\u62fc\u63a5\u6210\u4e00\u4e2a\u5927\u7684\u5b57\u6bb5\u63d2\u5165\u5230\u6570\u636e\u5e93\uff0c\u53ef\u80fd\u4f1a\u5e26\u6765\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8d85\u51fa\u6570\u636e\u5e93\u5355\u6b21\u64cd\u4f5c\u7684\u6700\u5927\u5199\u5165\u9650\u5236(\u6bd4\u5982MySQL\u7684max_allowed_package\u53c2\u6570)\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u8f83\u5927\u7684\u6570\u636e\u91cf\u5e26\u6765\u7684\u7f51\u7edcIO\u548c\u6570\u636e\u5e93\u78c1\u76d8IO\u5f00\u9500\u6bd4\u8f83\u5927\u3002")),(0,o.kt)("h3",{id:"\u5934\u8111\u98ce\u66b4"},"\u5934\u8111\u98ce\u66b4"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u7b2c1\u70b9\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u7684\u5b9e\u9645\u60c5\u51b5\uff0c\u8c03\u5927max_allowed_package\u53c2\u6570\u7684\u9650\u5236\uff0c\u4ece\u800c\u907f\u514d\u51fa\u73b0query is too large\u7684\u95ee\u9898\uff1b\u5bf9\u4e8e\u7b2c2\u70b9\uff0c\u53ef\u4ee5\u901a\u8fc7\u63d0\u9ad8\u5e26\u5bbd\u548c\u9009\u7528\u9ad8\u6027\u80fd\u7684SSD\u4f5c\u4e3a\u6570\u636e\u5e93\u7684\u5b58\u50a8\u4ecb\u8d28\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0a\u90fd\u662f\u901a\u8fc7\u5916\u90e8\u65b9\u6848\u6216\u8005\u52a0\u94b1\u65b9\u6848\u53bb\u89e3\u51b3\u7684\u3002\u90a3\u4e48\u6709\u6ca1\u6709\u6846\u67b6\u5c42\u9762\u89e3\u51b3\u65b9\u6848\u4ee5\u89e3\u51b3\u4e0a\u9762\u7684\u75db\u70b9\uff1f"),(0,o.kt)("p",null,"\u6b64\u65f6\u7ed3\u5408\u5230\u4ee5\u4e0a\u7684\u75db\u70b9\u51fa\u73b0\u7684\u6839\u6e90\uff0c\u5728\u4e8e\u751f\u6210\u7684\u6570\u636e\u5b57\u6bb5\u8fc7\u5927\u3002\u4e3a\u6b64\uff0c\u5982\u679c\u53ef\u4ee5\u628a\u5bf9\u5e94\u7684\u6570\u636e\u8fdb\u884c\u4e1a\u52a1\u65b9\u538b\u7f29\u4e4b\u540e\uff0c\u518d\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u4ee5\u53ca\u843d\u5e93\uff0c\u7406\u8bba\u4e0a\u4e5f\u53ef\u4ee5\u89e3\u51b3\u4e0a\u9762\u7684\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"\u53ef\u884c\u6027\u5206\u6790"},"\u53ef\u884c\u6027\u5206\u6790"),(0,o.kt)("p",null,"\u7ed3\u5408\u4ee5\u4e0a\u5934\u8111\u98ce\u66b4\u7684\u5185\u5bb9\uff0c\u8003\u8651\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u5f53\u9700\u8981\u8fdb\u884c\u5927\u6279\u91cf\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u5927\u591a\u4f1a\u9009\u5728\u8f83\u5c11\u7528\u6237\u64cd\u4f5c\uff0c\u5e76\u53d1\u76f8\u5bf9\u8f83\u4f4e\u7684\u65f6\u95f4\u70b9\u6267\u884c\uff0c\u6b64\u65f6CPU\uff0c\u5185\u5b58\u7b49\u8d44\u6e90\u53ef\u4ee5\u76f8\u5bf9\u5360\u7528\u591a\u4e00\u70b9\u4ee5\u5feb\u901f\u5b8c\u6210\u5bf9\u5e94\u7684\u64cd\u4f5c\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u901a\u8fc7\u6d88\u8017CPU\u8d44\u6e90\u548c\u5185\u5b58\u8d44\u6e90\uff0c\u6765\u5bf9\u5bf9\u5e94\u7684\u56de\u6eda\u7684\u6570\u636e\u8fdb\u884c\u538b\u7f29\uff0c\u4ece\u800c\u7f29\u5c0f\u6570\u636e\u4f20\u8f93\u548c\u5b58\u50a8\u7684\u5927\u5c0f\u3002"),(0,o.kt)("p",null,"\u6b64\u65f6\uff0c\u8fd8\u9700\u8981\u8bc1\u660e\u4ee5\u4e0b\u4e24\u4ef6\u4e8b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7ecf\u8fc7\u538b\u7f29\u4e4b\u540e\uff0c\u53ef\u4ee5\u51cf\u5c11\u7f51\u7edcIO\u548c\u6570\u636e\u5e93\u78c1\u76d8IO\u7684\u538b\u529b\uff0c\u8fd9\u91cc\u53ef\u4ee5\u91c7\u7528\u6570\u636e\u538b\u7f29+\u843d\u5e93\u5b8c\u6210\u7684\u603b\u65f6\u95f4\u4f5c\u4e3a\u4fa7\u9762\u53c2\u8003\u6307\u6807\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7ecf\u8fc7\u538b\u7f29\u4e4b\u540e\uff0c\u6570\u636e\u5927\u5c0f\u8ddf\u539f\u6765\u6bd4\u8f83\u7684\u538b\u7f29\u6548\u7387\u6709\u591a\u9ad8\uff0c\u8fd9\u91cc\u4f7f\u7528\u538b\u7f29\u524d\u540e\u7684\u6570\u636e\u5927\u5c0f\u6765\u4f5c\u4e3a\u6307\u6807\u3002")),(0,o.kt)("p",null,"\u538b\u7f29\u7f51\u7edc\u7528\u65f6\u6307\u6807\u6d4b\u8bd5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/22959373/95567752-f55ddf80-0a55-11eb-8092-1f1d99855bdd.png",alt:"image"})),(0,o.kt)("p",null,"\u538b\u7f29\u6bd4\u6d4b\u8bd5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/22959373/95567834-0ad30980-0a56-11eb-9d7e-48b74babbea4.png",alt:"image"})),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u7684\u6d4b\u8bd5\u7ed3\u679c\uff0c\u53ef\u4ee5\u660e\u663e\u7684\u770b\u51fa\uff0c\u4f7f\u7528gzip\u6216zip\u8fdb\u884c\u538b\u7f29\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u8f83\u5927\u7a0b\u5ea6\u7684\u51cf\u5c11\u6570\u636e\u5e93\u7684\u538b\u529b\u548c\u7f51\u7edc\u4f20\u8f93\u7684\u538b\u529b\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u8f83\u5927\u5e45\u5ea6\u7684\u51cf\u5c11\u4fdd\u5b58\u7684\u6570\u636e\u7684\u5927\u5c0f\u3002"),(0,o.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,o.kt)("h4",{id:"\u5b9e\u73b0\u601d\u8def"},"\u5b9e\u73b0\u601d\u8def"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/22959373/116281711-8f039900-a7bc-11eb-91f8-82afdbb9f932.png",alt:"\u538b\u7f29"})),(0,o.kt)("h4",{id:"\u90e8\u5206\u4ee3\u7801"},"\u90e8\u5206\u4ee3\u7801"),(0,o.kt)("p",null,"properties\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# \u662f\u5426\u5f00\u542fundo_log\u538b\u7f29\uff0c\u9ed8\u8ba4\u4e3atrue\nseata.client.undo.compress.enable=true\n# \u538b\u7f29\u5668\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3azip\uff0c\u4e00\u822c\u5efa\u8bae\u90fd\u662fzip\nseata.client.undo.compress.type=zip\n# \u542f\u52a8\u538b\u7f29\u7684\u9608\u503c\uff0c\u9ed8\u8ba4\u4e3a64k\nseata.client.undo.compress.threshold=64k\n")),(0,o.kt)("p",null,"\u5224\u65ad\u662f\u5426\u5f00\u542f\u4e86undo_log\u538b\u7f29\u529f\u80fd\u4ee5\u53ca\u662f\u5426\u8fbe\u5230\u538b\u7f29\u7684\u9608\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"protected boolean needCompress(byte[] undoLogContent) {\n    // 1. \u5224\u65ad\u662f\u5426\u5f00\u542f\u4e86undo_log\u538b\u7f29\u529f\u80fd(1.4.2\u9ed8\u8ba4\u5f00\u542f)\n    // 2. \u5224\u65ad\u662f\u5426\u8fbe\u5230\u4e86\u538b\u7f29\u7684\u9608\u503c(\u9ed8\u8ba464k)\n    // \u5982\u679c\u90fd\u6ee1\u8db3\u8fd4\u56de\u9700\u8981\u5bf9\u5bf9\u5e94\u7684undoLogContent\u8fdb\u884c\u538b\u7f29\n    return ROLLBACK_INFO_COMPRESS_ENABLE \n        && undoLogContent.length > ROLLBACK_INFO_COMPRESS_THRESHOLD;\n}\n")),(0,o.kt)("p",null,"\u786e\u5b9a\u9700\u8981\u538b\u7f29\u540e\uff0c\u5bf9undo_log\u8fdb\u884c\u538b\u7f29\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// \u5982\u679c\u9700\u8981\u538b\u7f29\uff0c\u5bf9undo_log\u8fdb\u884c\u538b\u7f29\nif (needCompress(undoLogContent)) {\n    // \u83b7\u53d6\u538b\u7f29\u7c7b\u578b\uff0c\u9ed8\u8ba4zip\n    compressorType = ROLLBACK_INFO_COMPRESS_TYPE;\n    // \u83b7\u53d6\u5bf9\u5e94\u7684\u538b\u7f29\u5668\uff0c\u5e76\u4e14\u8fdb\u884c\u538b\u7f29\n    undoLogContent = CompressorFactory.getCompressor(compressorType.getCode()).compress(undoLogContent);\n}\n// else \u4e0d\u9700\u8981\u538b\u7f29\u5c31\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u64cd\u4f5c\n")),(0,o.kt)("p",null,"\u5c06\u538b\u7f29\u7c7b\u578b\u540c\u6b65\u4fdd\u5b58\u5230\u6570\u636e\u5e93\uff0c\u4f9b\u56de\u6eda\u65f6\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"protected String buildContext(String serializer, CompressorType compressorType) {\n    Map<String, String> map = new HashMap<>();\n    map.put(UndoLogConstants.SERIALIZER_KEY, serializer);\n    // \u4fdd\u5b58\u538b\u7f29\u7c7b\u578b\u5230\u6570\u636e\u5e93\n    map.put(UndoLogConstants.COMPRESSOR_TYPE_KEY, compressorType.name());\n    return CollectionUtils.encodeMap(map);\n}\n")),(0,o.kt)("p",null,"\u56de\u6eda\u65f6\u89e3\u538b\u7f29\u5bf9\u5e94\u7684\u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"protected byte[] getRollbackInfo(ResultSet rs) throws SQLException  {\n    // \u83b7\u53d6\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u7684\u56de\u6eda\u4fe1\u606f\u7684\u5b57\u8282\u6570\u7ec4\n    byte[] rollbackInfo = rs.getBytes(ClientTableColumnsName.UNDO_LOG_ROLLBACK_INFO);\n    // \u83b7\u53d6\u538b\u7f29\u7c7b\u578b\n    // getOrDefault\u4f7f\u7528\u9ed8\u8ba4\u503cCompressorType.NONE\u6765\u517c\u5bb91.4.2\u4e4b\u524d\u7684\u7248\u672c\u76f4\u63a5\u5347\u7ea71.4.2+\n    String rollbackInfoContext = rs.getString(ClientTableColumnsName.UNDO_LOG_CONTEXT);\n    Map<String, String> context = CollectionUtils.decodeMap(rollbackInfoContext);\n    CompressorType compressorType = CompressorType.getByName(context.getOrDefault(UndoLogConstants.COMPRESSOR_TYPE_KEY,\n    CompressorType.NONE.name()));\n    // \u83b7\u53d6\u5bf9\u5e94\u7684\u538b\u7f29\u5668\uff0c\u5e76\u4e14\u89e3\u538b\u7f29\n    return CompressorFactory.getCompressor(compressorType.getCode())\n        .decompress(rollbackInfo);\n}\n")),(0,o.kt)("h3",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,o.kt)("p",null,"\u901a\u8fc7\u5bf9undo_log\u7684\u538b\u7f29\uff0c\u5728\u6846\u67b6\u5c42\u9762\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8Seata\u5728\u5904\u7406\u6570\u636e\u91cf\u8f83\u5927\u7684\u65f6\u5019\u7684\u6027\u80fd\u3002\u540c\u65f6\uff0c\u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u5f00\u5173\u548c\u76f8\u5bf9\u5408\u7406\u7684\u9ed8\u8ba4\u503c\uff0c\u65e2\u65b9\u4fbf\u7528\u6237\u8fdb\u884c\u5f00\u7bb1\u5373\u7528\uff0c\u4e5f\u65b9\u4fbf\u7528\u6237\u6839\u636e\u5b9e\u9645\u9700\u6c42\u8fdb\u884c\u4e00\u5b9a\u7684\u8c03\u6574\uff0c\u4f7f\u5f97\u5bf9\u5e94\u7684\u529f\u80fd\u66f4\u9002\u5408\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u3002"))}m.isMDXComponent=!0}}]);