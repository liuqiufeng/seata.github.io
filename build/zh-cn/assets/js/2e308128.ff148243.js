"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[40557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(n),d=a,m=l["".concat(p,".").concat(d)]||l[d]||g[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u900f\u8fc7\u6e90\u7801\u89e3\u51b3SeataAT\u6a21\u5f0f\u6574\u5408Mybatis-Plus\u5931\u53bbMP\u7279\u6027\u7684\u95ee\u9898",keywords:["Seata","Mybatis-Plus","\u5206\u5e03\u5f0f\u4e8b\u52a1"],description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u900f\u8fc7\u6e90\u7801\u89e3\u51b3Seata\u6574\u5408Mybatis-Plus\u5931\u53bbMP\u7279\u6027\u7684\u95ee\u9898",author:"FUNKYE",date:"2019/11/30"},i="\u900f\u8fc7\u6e90\u7801\u89e3\u51b3SeataAT\u6a21\u5f0f\u6574\u5408Mybatis-Plus\u5931\u53bbMP\u7279\u6027\u7684\u95ee\u9898",s={permalink:"/zh-cn/blog/seata-mybatisplus-analysis",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-mybatisplus-analysis.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-mybatisplus-analysis.md",title:"\u900f\u8fc7\u6e90\u7801\u89e3\u51b3SeataAT\u6a21\u5f0f\u6574\u5408Mybatis-Plus\u5931\u53bbMP\u7279\u6027\u7684\u95ee\u9898",description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u900f\u8fc7\u6e90\u7801\u89e3\u51b3Seata\u6574\u5408Mybatis-Plus\u5931\u53bbMP\u7279\u6027\u7684\u95ee\u9898",date:"2019-11-30T00:00:00.000Z",formattedDate:"2019\u5e7411\u670830\u65e5",tags:[],readingTime:10.225,hasTruncateMarker:!1,authors:[{name:"FUNKYE"}],frontMatter:{title:"\u900f\u8fc7\u6e90\u7801\u89e3\u51b3SeataAT\u6a21\u5f0f\u6574\u5408Mybatis-Plus\u5931\u53bbMP\u7279\u6027\u7684\u95ee\u9898",keywords:["Seata","Mybatis-Plus","\u5206\u5e03\u5f0f\u4e8b\u52a1"],description:"\u672c\u6587\u8bb2\u8ff0\u5982\u4f55\u900f\u8fc7\u6e90\u7801\u89e3\u51b3Seata\u6574\u5408Mybatis-Plus\u5931\u53bbMP\u7279\u6027\u7684\u95ee\u9898",author:"FUNKYE",date:"2019/11/30"},prevItem:{title:"Seata Community Meetup\xb7\u676d\u5dde\u7ad9",permalink:"/zh-cn/blog/seata-meetup-hangzhou"},nextItem:{title:"SpringBoot+Dubbo+MybatisPlus\u6574\u5408seata\u5206\u5e03\u5f0f\u4e8b\u52a1",permalink:"/zh-cn/blog/springboot-dubbo-mybatisplus-seata"}},p={authorsImageUrls:[void 0]},c=[{value:"\u5206\u6790\u539f\u56e0",id:"\u5206\u6790\u539f\u56e0",level:2}],u={toc:c},l="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9879\u76ee\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/itCjb/springboot-dubbo-mybatisplus-seata"},"https://gitee.com/itCjb/springboot-dubbo-mybatisplus-seata")," "),(0,a.kt)("p",null,"\u672c\u6587\u4f5c\u8005\uff1aFUNKYE(\u9648\u5065\u658c),\u676d\u5dde\u67d0\u4e92\u8054\u7f51\u516c\u53f8\u4e3b\u7a0b\u3002"),(0,a.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"Mybatis-Plus\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/baomidou/mybatis-plus"},"MyBatis-Plus"),"\uff08\u7b80\u79f0 MP\uff09\u662f\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"http://www.mybatis.org/mybatis-3/"},"MyBatis")," \u7684\u589e\u5f3a\u5de5\u5177\uff0c\u5728 MyBatis \u7684\u57fa\u7840\u4e0a\u53ea\u505a\u589e\u5f3a\u4e0d\u505a\u6539\u53d8\uff0c\u4e3a\u7b80\u5316\u5f00\u53d1\u3001\u63d0\u9ad8\u6548\u7387\u800c\u751f\u3002"),(0,a.kt)("p",null,"MP\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id="sqlSessionFactory" class="com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean">\n    <property name="dataSource" ref="dataSource"/>\n</bean>\n')),(0,a.kt)("p",null,"Seata\uff1aSeata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002Seata \u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86 AT\u3001TCC\u3001SAGA \u548c XA \u4e8b\u52a1\u6a21\u5f0f\uff0c\u4e3a\u7528\u6237\u6253\u9020\u4e00\u7ad9\u5f0f\u7684\u5206\u5e03\u5f0f\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("p",null,"AT\u6a21\u5f0f\u673a\u5236\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5\uff1a\u4e1a\u52a1\u6570\u636e\u548c\u56de\u6eda\u65e5\u5fd7\u8bb0\u5f55\u5728\u540c\u4e00\u4e2a\u672c\u5730\u4e8b\u52a1\u4e2d\u63d0\u4ea4\uff0c\u91ca\u653e\u672c\u5730\u9501\u548c\u8fde\u63a5\u8d44\u6e90\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u5f02\u6b65\u5316\uff0c\u975e\u5e38\u5feb\u901f\u5730\u5b8c\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u56de\u6eda\u901a\u8fc7\u4e00\u9636\u6bb5\u7684\u56de\u6eda\u65e5\u5fd7\u8fdb\u884c\u53cd\u5411\u8865\u507f\u3002")))),(0,a.kt)("h2",{id:"\u5206\u6790\u539f\u56e0"},"\u5206\u6790\u539f\u56e0"),(0,a.kt)("p",null,"\u200b\t1.\u9996\u5148\u6211\u4eec\u901a\u8fc7\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u770b\u5230\uff0cmp\u662f\u9700\u8981\u6ce8\u518csqlSessionFactory\uff0c\u6ce8\u5165\u6570\u636e\u6e90\uff0c\u800cSeata\u662f\u901a\u8fc7\u4ee3\u7406\u6570\u636e\u6e90\u6765\u4fdd\u8bc1\u4e8b\u52a1\u7684\u6b63\u5e38\u56de\u6eda\u8ddf\u63d0\u4ea4\u3002"),(0,a.kt)("p",null,"\u200b\t2.\u6211\u4eec\u6765\u770b\u57fa\u4e8eseata\u7684\u5b98\u65b9demo\u63d0\u4f9b\u7684SeataAutoConfig\u7684\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.test.config;\n \nimport javax.sql.DataSource; \n \nimport org.apache.ibatis.session.SqlSessionFactory;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Primary;\n \nimport com.alibaba.druid.pool.DruidDataSource;\nimport com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean;\n \nimport io.seata.rm.datasource.DataSourceProxy;\nimport io.seata.spring.annotation.GlobalTransactionScanner;\n \n@Configuration\npublic class SeataAutoConfig {\n    @Autowired(required = true)\n    private DataSourceProperties dataSourceProperties;\n    private final static Logger logger = LoggerFactory.getLogger(SeataAutoConfig.class);\n \n    @Bean(name = "dataSource") // \u58f0\u660e\u5176\u4e3aBean\u5b9e\u4f8b\n    @Primary // \u5728\u540c\u6837\u7684DataSource\u4e2d\uff0c\u9996\u5148\u4f7f\u7528\u88ab\u6807\u6ce8\u7684DataSource\n    public DataSource druidDataSource() {\n        DruidDataSource druidDataSource = new DruidDataSource();\n        logger.info("dataSourceProperties.getUrl():{}",dataSourceProperties.getUrl());\n        druidDataSource.setUrl(dataSourceProperties.getUrl());\n        druidDataSource.setUsername(dataSourceProperties.getUsername());\n        druidDataSource.setPassword(dataSourceProperties.getPassword());\n        druidDataSource.setDriverClassName(dataSourceProperties.getDriverClassName());\n        druidDataSource.setInitialSize(0);\n        druidDataSource.setMaxActive(180);\n        druidDataSource.setMaxWait(60000);\n        druidDataSource.setMinIdle(0);\n        druidDataSource.setValidationQuery("Select 1 from DUAL");\n        druidDataSource.setTestOnBorrow(false);\n        druidDataSource.setTestOnReturn(false);\n        druidDataSource.setTestWhileIdle(true);\n        druidDataSource.setTimeBetweenEvictionRunsMillis(60000);\n        druidDataSource.setMinEvictableIdleTimeMillis(25200000);\n        druidDataSource.setRemoveAbandoned(true);\n        druidDataSource.setRemoveAbandonedTimeout(1800);\n        druidDataSource.setLogAbandoned(true);\n        logger.info("\u88c5\u8f7ddataSource........");\n        return druidDataSource;\n    }\n \n    /**\n     * init datasource proxy\n     * \n     * @Param: druidDataSource datasource bean instance\n     * @Return: DataSourceProxy datasource proxy\n     */\n    @Bean\n    public DataSourceProxy dataSourceProxy(DataSource dataSource) {\n        logger.info("\u4ee3\u7406dataSource........");\n        return new DataSourceProxy(dataSource);\n    }\n \n    @Bean\n    public SqlSessionFactory sqlSessionFactory(DataSourceProxy dataSourceProxy) throws Exception {\n        MybatisSqlSessionFactoryBean factory = new MybatisSqlSessionFactoryBean();\n        factory.setDataSource(dataSourceProxy);\n        factory.setMapperLocations(new PathMatchingResourcePatternResolver()\n            .getResources("classpath*:/mapper/*.xml"));\n        return factory.getObject();\n    }\n \n    /**\n     * init global transaction scanner\n     *\n     * @Return: GlobalTransactionScanner\n     */\n    @Bean\n    public GlobalTransactionScanner globalTransactionScanner() {\n        logger.info("\u914d\u7f6eseata........");\n        return new GlobalTransactionScanner("test-service", "test-group");\n    }\n}\n\n')),(0,a.kt)("p",null,"\u9996\u5148\u770b\u5230\u6211\u4eec\u7684seata\u914d\u7f6e\u6570\u636e\u6e90\u7684\u7c7b\u91cc,\u6211\u4eec\u914d\u7f6e\u4e86\u4e00\u4e2a\u6570\u636e\u6e90,\u7136\u540e\u53c8\u914d\u7f6e\u4e86\u4e00\u4e2aseata\u4ee3\u7406datasource\u7684bean,\u8fd9\u65f6\u5019."),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5982\u679c\u76f4\u63a5\u542f\u52a8mp\u6574\u5408seata\u7684\u9879\u76ee\u4f1a\u53d1\u73b0,\u5206\u9875\u4e4b\u7c7b\u7684\u63d2\u4ef6\u4f1a\u76f4\u63a5\u5931\u6548,\u8fde\u626b\u63cfmapper\u90fd\u5f97\u4ece\u4ee3\u7801\u4e0a\u5199,\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462?"),(0,a.kt)("p",null,"\u901a\u8fc7\u9605\u8bfb\u4ee5\u4e0a\u4ee3\u7801,\u662f\u56e0\u4e3a\u6211\u4eec\u53e6\u5916\u7684\u914d\u7f6e\u4e86\u4e00\u4e2asqlSessionFactory,\u5bfc\u81f4mp\u7684sqlSessionFactory\u5931\u6548\u4e86,\u8fd9\u65f6\u5019\u6211\u4eec\u53d1\u73b0\u4e86\u95ee\u9898\u7684\u6240\u5728\u4e86\uff0c\u5373\u4f7f\u6211\u4eec\u4e0d\u914d\u7f6esqlSessionFactoryl\uff0c\u4e5f\u4f1a\u56e0\u4e3amp\u6240\u4f7f\u7528\u7684\u6570\u636e\u6e90\u4e0d\u662f\u88abseata\u4ee3\u7406\u8fc7\u540e\u7684\u6570\u636e\u6e90\uff0c\u5bfc\u81f4\u5206\u5e03\u5f0f\u4e8b\u52a1\u5931\u6548.\u4f46\u662f\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5462?"),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u6211\u4eec\u9700\u8981\u53bb\u9605\u8bfbmp\u7684\u6e90\u7801,\u627e\u5230\u4ed6\u7684\u542f\u52a8\u7c7b,\u4e00\u770b\u4fbf\u77e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/*\n * Copyright (c) 2011-2020, baomidou (jobob@qq.com).\n * <p>\n * Licensed under the Apache License, Version 2.0 (the "License"); you may not\n * use this file except in compliance with the License. You may obtain a copy of\n * the License at\n * <p>\n * https://www.apache.org/licenses/LICENSE-2.0\n * <p>\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT\n * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the\n * License for the specific language governing permissions and limitations under\n * the License.\n */\npackage com.baomidou.mybatisplus.autoconfigure;\n \n \nimport com.baomidou.mybatisplus.core.MybatisConfiguration;\nimport com.baomidou.mybatisplus.core.config.GlobalConfig;\nimport com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;\nimport com.baomidou.mybatisplus.core.incrementer.IKeyGenerator;\nimport com.baomidou.mybatisplus.core.injector.ISqlInjector;\nimport com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean;\nimport org.apache.ibatis.annotations.Mapper;\nimport org.apache.ibatis.mapping.DatabaseIdProvider;\nimport org.apache.ibatis.plugin.Interceptor;\nimport org.apache.ibatis.scripting.LanguageDriver;\nimport org.apache.ibatis.session.ExecutorType;\nimport org.apache.ibatis.session.SqlSessionFactory;\nimport org.apache.ibatis.type.TypeHandler;\nimport org.mybatis.spring.SqlSessionFactoryBean;\nimport org.mybatis.spring.SqlSessionTemplate;\nimport org.mybatis.spring.mapper.MapperFactoryBean;\nimport org.mybatis.spring.mapper.MapperScannerConfigurer;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.BeanWrapper;\nimport org.springframework.beans.BeanWrapperImpl;\nimport org.springframework.beans.factory.BeanFactory;\nimport org.springframework.beans.factory.BeanFactoryAware;\nimport org.springframework.beans.factory.InitializingBean;\nimport org.springframework.beans.factory.ObjectProvider;\nimport org.springframework.beans.factory.support.BeanDefinitionBuilder;\nimport org.springframework.beans.factory.support.BeanDefinitionRegistry;\nimport org.springframework.boot.autoconfigure.AutoConfigurationPackages;\nimport org.springframework.boot.autoconfigure.AutoConfigureAfter;\nimport org.springframework.boot.autoconfigure.EnableAutoConfiguration;\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnClass;\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnSingleCandidate;\nimport org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;\nimport org.springframework.boot.context.properties.EnableConfigurationProperties;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Import;\nimport org.springframework.context.annotation.ImportBeanDefinitionRegistrar;\nimport org.springframework.core.io.Resource;\nimport org.springframework.core.io.ResourceLoader;\nimport org.springframework.core.type.AnnotationMetadata;\nimport org.springframework.util.Assert;\nimport org.springframework.util.CollectionUtils;\nimport org.springframework.util.ObjectUtils;\nimport org.springframework.util.StringUtils;\n \nimport javax.sql.DataSource;\nimport java.util.List;\nimport java.util.Optional;\nimport java.util.stream.Stream;\n \n/**\n * {@link EnableAutoConfiguration Auto-Configuration} for Mybatis. Contributes a\n * {@link SqlSessionFactory} and a {@link SqlSessionTemplate}.\n * <p>\n * If {@link org.mybatis.spring.annotation.MapperScan} is used, or a\n * configuration file is specified as a property, those will be considered,\n * otherwise this auto-configuration will attempt to register mappers based on\n * the interface definitions in or under the root auto-configuration package.\n * </p>\n * <p> copy from {@link org.mybatis.spring.boot.autoconfigure.MybatisAutoConfiguration}</p>\n *\n * @author Edd\xfa Mel\xe9ndez\n * @author Josh Long\n * @author Kazuki Shimizu\n * @author Eduardo Macarr\xf3n\n */\n@Configuration\n@ConditionalOnClass({SqlSessionFactory.class, SqlSessionFactoryBean.class})\n@ConditionalOnSingleCandidate(DataSource.class)\n@EnableConfigurationProperties(MybatisPlusProperties.class)\n@AutoConfigureAfter(DataSourceAutoConfiguration.class)\npublic class MybatisPlusAutoConfiguration implements InitializingBean {\n \n    private static final Logger logger = LoggerFactory.getLogger(MybatisPlusAutoConfiguration.class);\n \n    private final MybatisPlusProperties properties;\n \n    private final Interceptor[] interceptors;\n \n    private final TypeHandler[] typeHandlers;\n \n    private final LanguageDriver[] languageDrivers;\n \n    private final ResourceLoader resourceLoader;\n \n    private final DatabaseIdProvider databaseIdProvider;\n \n    private final List<ConfigurationCustomizer> configurationCustomizers;\n \n    private final List<MybatisPlusPropertiesCustomizer> mybatisPlusPropertiesCustomizers;\n \n    private final ApplicationContext applicationContext;\n \n \n    public MybatisPlusAutoConfiguration(MybatisPlusProperties properties,\n                                        ObjectProvider<Interceptor[]> interceptorsProvider,\n                                        ObjectProvider<TypeHandler[]> typeHandlersProvider,\n                                        ObjectProvider<LanguageDriver[]> languageDriversProvider,\n                                        ResourceLoader resourceLoader,\n                                        ObjectProvider<DatabaseIdProvider> databaseIdProvider,\n                                        ObjectProvider<List<ConfigurationCustomizer>> configurationCustomizersProvider,\n                                        ObjectProvider<List<MybatisPlusPropertiesCustomizer>> mybatisPlusPropertiesCustomizerProvider,\n                                        ApplicationContext applicationContext) {\n        this.properties = properties;\n        this.interceptors = interceptorsProvider.getIfAvailable();\n        this.typeHandlers = typeHandlersProvider.getIfAvailable();\n        this.languageDrivers = languageDriversProvider.getIfAvailable();\n        this.resourceLoader = resourceLoader;\n        this.databaseIdProvider = databaseIdProvider.getIfAvailable();\n        this.configurationCustomizers = configurationCustomizersProvider.getIfAvailable();\n        this.mybatisPlusPropertiesCustomizers = mybatisPlusPropertiesCustomizerProvider.getIfAvailable();\n        this.applicationContext = applicationContext;\n    }\n \n    @Override\n    public void afterPropertiesSet() {\n        if (!CollectionUtils.isEmpty(mybatisPlusPropertiesCustomizers)) {\n            mybatisPlusPropertiesCustomizers.forEach(i -> i.customize(properties));\n        }\n        checkConfigFileExists();\n    }\n \n    private void checkConfigFileExists() {\n        if (this.properties.isCheckConfigLocation() && StringUtils.hasText(this.properties.getConfigLocation())) {\n            Resource resource = this.resourceLoader.getResource(this.properties.getConfigLocation());\n            Assert.state(resource.exists(),\n                "Cannot find config location: " + resource + " (please add config file or check your Mybatis configuration)");\n        }\n    }\n \n    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")\n    @Bean\n    @ConditionalOnMissingBean\n    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {\n        // TODO \u4f7f\u7528 MybatisSqlSessionFactoryBean \u800c\u4e0d\u662f SqlSessionFactoryBean\n        MybatisSqlSessionFactoryBean factory = new MybatisSqlSessionFactoryBean();\n        factory.setDataSource(dataSource);\n        factory.setVfs(SpringBootVFS.class);\n        if (StringUtils.hasText(this.properties.getConfigLocation())) {\n            factory.setConfigLocation(this.resourceLoader.getResource(this.properties.getConfigLocation()));\n        }\n        applyConfiguration(factory);\n        if (this.properties.getConfigurationProperties() != null) {\n            factory.setConfigurationProperties(this.properties.getConfigurationProperties());\n        }\n        if (!ObjectUtils.isEmpty(this.interceptors)) {\n            factory.setPlugins(this.interceptors);\n        }\n        if (this.databaseIdProvider != null) {\n            factory.setDatabaseIdProvider(this.databaseIdProvider);\n        }\n        if (StringUtils.hasLength(this.properties.getTypeAliasesPackage())) {\n            factory.setTypeAliasesPackage(this.properties.getTypeAliasesPackage());\n        }\n        if (this.properties.getTypeAliasesSuperType() != null) {\n            factory.setTypeAliasesSuperType(this.properties.getTypeAliasesSuperType());\n        }\n        if (StringUtils.hasLength(this.properties.getTypeHandlersPackage())) {\n            factory.setTypeHandlersPackage(this.properties.getTypeHandlersPackage());\n        }\n        if (!ObjectUtils.isEmpty(this.typeHandlers)) {\n            factory.setTypeHandlers(this.typeHandlers);\n        }\n        if (!ObjectUtils.isEmpty(this.properties.resolveMapperLocations())) {\n            factory.setMapperLocations(this.properties.resolveMapperLocations());\n        }\n \n        // TODO \u5bf9\u6e90\u7801\u505a\u4e86\u4e00\u5b9a\u7684\u4fee\u6539(\u56e0\u4e3a\u6e90\u7801\u9002\u914d\u4e86\u8001\u65e7\u7684mybatis\u7248\u672c,\u4f46\u6211\u4eec\u4e0d\u9700\u8981\u9002\u914d)\n        Class<? extends LanguageDriver> defaultLanguageDriver = this.properties.getDefaultScriptingLanguageDriver();\n        if (!ObjectUtils.isEmpty(this.languageDrivers)) {\n            factory.setScriptingLanguageDrivers(this.languageDrivers);\n        }\n        Optional.ofNullable(defaultLanguageDriver).ifPresent(factory::setDefaultScriptingLanguageDriver);\n \n        // TODO \u81ea\u5b9a\u4e49\u679a\u4e3e\u5305\n        if (StringUtils.hasLength(this.properties.getTypeEnumsPackage())) {\n            factory.setTypeEnumsPackage(this.properties.getTypeEnumsPackage());\n        }\n        // TODO \u6b64\u5904\u5fc5\u4e3a\u975e NULL\n        GlobalConfig globalConfig = this.properties.getGlobalConfig();\n        // TODO \u6ce8\u5165\u586b\u5145\u5668\n        if (this.applicationContext.getBeanNamesForType(MetaObjectHandler.class,\n            false, false).length > 0) {\n            MetaObjectHandler metaObjectHandler = this.applicationContext.getBean(MetaObjectHandler.class);\n            globalConfig.setMetaObjectHandler(metaObjectHandler);\n        }\n        // TODO \u6ce8\u5165\u4e3b\u952e\u751f\u6210\u5668\n        if (this.applicationContext.getBeanNamesForType(IKeyGenerator.class, false,\n            false).length > 0) {\n            IKeyGenerator keyGenerator = this.applicationContext.getBean(IKeyGenerator.class);\n            globalConfig.getDbConfig().setKeyGenerator(keyGenerator);\n        }\n        // TODO \u6ce8\u5165sql\u6ce8\u5165\u5668\n        if (this.applicationContext.getBeanNamesForType(ISqlInjector.class, false,\n            false).length > 0) {\n            ISqlInjector iSqlInjector = this.applicationContext.getBean(ISqlInjector.class);\n            globalConfig.setSqlInjector(iSqlInjector);\n        }\n        // TODO \u8bbe\u7f6e GlobalConfig \u5230 MybatisSqlSessionFactoryBean\n        factory.setGlobalConfig(globalConfig);\n        return factory.getObject();\n    }\n \n    // TODO \u5165\u53c2\u4f7f\u7528 MybatisSqlSessionFactoryBean\n    private void applyConfiguration(MybatisSqlSessionFactoryBean factory) {\n        // TODO \u4f7f\u7528 MybatisConfiguration\n        MybatisConfiguration configuration = this.properties.getConfiguration();\n        if (configuration == null && !StringUtils.hasText(this.properties.getConfigLocation())) {\n            configuration = new MybatisConfiguration();\n        }\n        if (configuration != null && !CollectionUtils.isEmpty(this.configurationCustomizers)) {\n            for (ConfigurationCustomizer customizer : this.configurationCustomizers) {\n                customizer.customize(configuration);\n            }\n        }\n        factory.setConfiguration(configuration);\n    }\n \n    @Bean\n    @ConditionalOnMissingBean\n    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) {\n        ExecutorType executorType = this.properties.getExecutorType();\n        if (executorType != null) {\n            return new SqlSessionTemplate(sqlSessionFactory, executorType);\n        } else {\n            return new SqlSessionTemplate(sqlSessionFactory);\n        }\n    }\n \n    /**\n     * This will just scan the same base package as Spring Boot does. If you want more power, you can explicitly use\n     * {@link org.mybatis.spring.annotation.MapperScan} but this will get typed mappers working correctly, out-of-the-box,\n     * similar to using Spring Data JPA repositories.\n     */\n    public static class AutoConfiguredMapperScannerRegistrar implements BeanFactoryAware, ImportBeanDefinitionRegistrar {\n \n        private BeanFactory beanFactory;\n \n        @Override\n        public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {\n \n            if (!AutoConfigurationPackages.has(this.beanFactory)) {\n                logger.debug("Could not determine auto-configuration package, automatic mapper scanning disabled.");\n                return;\n            }\n \n            logger.debug("Searching for mappers annotated with @Mapper");\n \n            List<String> packages = AutoConfigurationPackages.get(this.beanFactory);\n            if (logger.isDebugEnabled()) {\n                packages.forEach(pkg -> logger.debug("Using auto-configuration base package \'{}\'", pkg));\n            }\n \n            BeanDefinitionBuilder builder = BeanDefinitionBuilder.genericBeanDefinition(MapperScannerConfigurer.class);\n            builder.addPropertyValue("processPropertyPlaceHolders", true);\n            builder.addPropertyValue("annotationClass", Mapper.class);\n            builder.addPropertyValue("basePackage", StringUtils.collectionToCommaDelimitedString(packages));\n            BeanWrapper beanWrapper = new BeanWrapperImpl(MapperScannerConfigurer.class);\n            Stream.of(beanWrapper.getPropertyDescriptors())\n                // Need to mybatis-spring 2.0.2+\n                .filter(x -> x.getName().equals("lazyInitialization")).findAny()\n                .ifPresent(x -> builder.addPropertyValue("lazyInitialization", "${mybatis.lazy-initialization:false}"));\n            registry.registerBeanDefinition(MapperScannerConfigurer.class.getName(), builder.getBeanDefinition());\n        }\n \n        @Override\n        public void setBeanFactory(BeanFactory beanFactory) {\n            this.beanFactory = beanFactory;\n        }\n    }\n \n    /**\n     * If mapper registering configuration or mapper scanning configuration not present, this configuration allow to scan\n     * mappers based on the same component-scanning path as Spring Boot itself.\n     */\n    @Configuration\n    @Import(AutoConfiguredMapperScannerRegistrar.class)\n    @ConditionalOnMissingBean({MapperFactoryBean.class, MapperScannerConfigurer.class})\n    public static class MapperScannerRegistrarNotFoundConfiguration implements InitializingBean {\n \n        @Override\n        public void afterPropertiesSet() {\n            logger.debug(\n                "Not found configuration for registering mapper bean using @MapperScan, MapperFactoryBean and MapperScannerConfigurer.");\n        }\n    }\n}\n\n')),(0,a.kt)("p",null,"\u770b\u5230mp\u542f\u52a8\u7c7b\u91cc\u7684sqlSessionFactory\u65b9\u6cd5\u4e86\u5417,\u4ed6\u4e5f\u662f\u4e00\u6837\u7684\u6ce8\u5165\u4e00\u4e2a\u6570\u636e\u6e90,\u8fd9\u65f6\u5019\u5927\u5bb6\u5e94\u8be5\u90fd\u77e5\u9053\u89e3\u51b3\u65b9\u6cd5\u4e86\u5427?"),(0,a.kt)("p",null,"\u6ca1\u9519,\u5c31\u662f\u628a\u88ab\u4ee3\u7406\u8fc7\u7684\u6570\u636e\u6e90\u7ed9\u653e\u5230mp\u7684sqlSessionFactory\u4e2d."),(0,a.kt)("p",null,"\u5f88\u7b80\u5355,\u6211\u4eec\u9700\u8981\u7a0d\u5fae\u6539\u52a8\u4e00\u4e0b\u6211\u4eec\u7684seata\u914d\u7f6e\u7c7b\u5c31\u884c\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.test.config;\n\nimport javax.sql.DataSource;\n\nimport org.mybatis.spring.annotation.MapperScan;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Primary;\n\nimport com.alibaba.druid.pool.DruidDataSource;\n\nimport io.seata.rm.datasource.DataSourceProxy;\nimport io.seata.spring.annotation.GlobalTransactionScanner;\n\n@Configuration\n@MapperScan("com.baomidou.springboot.mapper*")\npublic class SeataAutoConfig {\n    @Autowired(required = true)\n    private DataSourceProperties dataSourceProperties;\n    private final static Logger logger = LoggerFactory.getLogger(SeataAutoConfig.class);\n    private DataSourceProxy dataSourceProxy;\n\n    @Bean(name = "dataSource") // \u58f0\u660e\u5176\u4e3aBean\u5b9e\u4f8b\n    @Primary // \u5728\u540c\u6837\u7684DataSource\u4e2d\uff0c\u9996\u5148\u4f7f\u7528\u88ab\u6807\u6ce8\u7684DataSource\n    public DataSource druidDataSource() {\n        DruidDataSource druidDataSource = new DruidDataSource();\n        logger.info("dataSourceProperties.getUrl():{}", dataSourceProperties.getUrl());\n        druidDataSource.setUrl(dataSourceProperties.getUrl());\n        druidDataSource.setUsername(dataSourceProperties.getUsername());\n        druidDataSource.setPassword(dataSourceProperties.getPassword());\n        druidDataSource.setDriverClassName(dataSourceProperties.getDriverClassName());\n        druidDataSource.setInitialSize(0);\n        druidDataSource.setMaxActive(180);\n        druidDataSource.setMaxWait(60000);\n        druidDataSource.setMinIdle(0);\n        druidDataSource.setValidationQuery("Select 1 from DUAL");\n        druidDataSource.setTestOnBorrow(false);\n        druidDataSource.setTestOnReturn(false);\n        druidDataSource.setTestWhileIdle(true);\n        druidDataSource.setTimeBetweenEvictionRunsMillis(60000);\n        druidDataSource.setMinEvictableIdleTimeMillis(25200000);\n        druidDataSource.setRemoveAbandoned(true);\n        druidDataSource.setRemoveAbandonedTimeout(1800);\n        druidDataSource.setLogAbandoned(true);\n        logger.info("\u88c5\u8f7ddataSource........");\n        dataSourceProxy = new DataSourceProxy(druidDataSource);\n        return dataSourceProxy;\n    }\n\n    /**\n     * init datasource proxy\n     * \n     * @Param: druidDataSource datasource bean instance\n     * @Return: DataSourceProxy datasource proxy\n     */\n    @Bean\n    public DataSourceProxy dataSourceProxy() {\n        logger.info("\u4ee3\u7406dataSource........");\n        return dataSourceProxy;\n    }\n\n    /**\n     * init global transaction scanner\n     *\n     * @Return: GlobalTransactionScanner\n     */\n    @Bean\n    public GlobalTransactionScanner globalTransactionScanner() {\n        logger.info("\u914d\u7f6eseata........");\n        return new GlobalTransactionScanner("test-service", "test-group");\n    }\n}\n\n')),(0,a.kt)("p",null,"\u770b\u4ee3\u7801,\u6211\u4eec\u53bb\u6389\u4e86\u81ea\u5df1\u914d\u7f6e\u7684sqlSessionFactory,\u76f4\u63a5\u8ba9DataSource bean\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u88ab\u4ee3\u7406\u8fc7\u7684bean,\u5e76\u4e14\u6211\u4eec\u52a0\u5165\u4e86@Primary,\u5bfc\u81f4mp\u4f18\u5148\u4f7f\u7528\u6211\u4eec\u914d\u7f6e\u7684\u6570\u636e\u6e90,\u8fd9\u6837\u5c31\u89e3\u51b3\u4e86mp\u56e0\u4e3aseata\u4ee3\u7406\u4e86\u6570\u636e\u6e90\u8ddf\u521b\u5efa\u4e86\u65b0\u7684sqlSessionFactory,\u5bfc\u81f4mp\u7684\u63d2\u4ef6,\u7ec4\u4ef6\u5931\u6548\u7684bug\u4e86!"),(0,a.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u8e29\u5230\u5751\u4e0d\u53ef\u6015\uff0c\u4e3b\u8981\u53c8\u8010\u5fc3\u7684\u987a\u7740\u6bcf\u4e2a\u7ec4\u4ef6\u5b9e\u73b0\u7684\u539f\u7406\uff0c\u518d\u53bb\u601d\u8003\uff0c\u67e5\u627e\u5bf9\u5e94\u51b2\u7a81\u7684\u4ee3\u7801\u5757\uff0c\u4f60\u4e00\u5b9a\u80fd\u627e\u5230\u4e2a\u517c\u5bb9\u4e8c\u8005\u7684\u65b9\u6cd5\u3002"))}g.isMDXComponent=!0}}]);