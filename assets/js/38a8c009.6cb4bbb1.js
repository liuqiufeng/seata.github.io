"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[84421],{80540:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>j,frontMatter:()=>i,metadata:()=>x,toc:()=>c});var s=l(74848),n=l(28453);const i={title:"Functions",keywords:["Seata"],description:"Seata Functions"},d="Functions",x={id:"user/sqlreference/function",title:"Functions",description:"Seata Functions",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.3/user/sqlreference/function.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/function",permalink:"/seata.github.io/docs/v1.3/user/sqlreference/function",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.3/user/sqlreference/function.md",tags:[],version:"v1.3",frontMatter:{title:"Functions",keywords:["Seata"],description:"Seata Functions"},sidebar:"docs",previous:{title:"SQL Decoration",permalink:"/seata.github.io/docs/v1.3/user/sqlreference/sql-decoration"},next:{title:"SkyWalking",permalink:"/seata.github.io/docs/v1.3/user/apm/skywalking"}},r={},c=[{value:"DML Statement Support",id:"dml-statement-support",level:3},{value:"DQL Statement Support",id:"dql-statement-support",level:3}];function h(t){const e={h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(e.p,{children:"The table below lists the support for functions in DQL and DML statements. It is important to note that functions cannot be used as primary keys in DML statements."}),"\n",(0,s.jsx)(e.h3,{id:"dml-statement-support",children:"DML Statement Support"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Supported or not"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CONCAT(string2[,...])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"INSTR(string,substring)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LCASE(string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LEFT(string2,length)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LENGTH(string)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LOAD_FILE(file_name)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LOCATE(substring,string[,start_position])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LPAD(string2,length,pad)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LTRIM(string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"REPEAT(string2,count)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"REPLACE(str,search_str,replace_str)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"RPAD(string2,length,pad)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"RTRIM(string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"STRCMP(string1,string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SUBSTRING(str,position[,length])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TRIM([[BOTH|LEADING|TRAILING][padding]FROM]string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"UCASE(string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"RIGHT(string2,length)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SPACE(count)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ABS(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"BIN(decimal_number)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CEILING(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CONV(number2,from_base,to_base)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"FLOOR(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"FORMAT(number,decimal_places)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"HEX(DecimalNumber)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LEAST(number,number2[,..])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MOD(numerator,denominator)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"POWER(number,power)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"RAND([seed])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ROUND(number[,decimals])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SIGN(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SQRT(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ADDTIME(date2,time_interval)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CONVERT_TZ(datetime2,fromTZ,toTZ)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CURRENT_DATE()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CURRENT_TIME()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CURRENT_TIMESTAMP()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATE(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATE_ADD(date2,INTERVALd_valued_type)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATE_FORMAT(datetime,FormatCodes)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATE_SUB(date2,INTERVALd_valued_type)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATEDIFF(date1,date2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAY(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAYNAME(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAYOFWEEK(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAYOFYEAR(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"EXTRACT(interval_nameFROMdate)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAKEDATE(year,day)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAKETIME(hour,minute,second)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MONTHNAME(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"NOW()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SEC_TO_TIME(seconds)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"STR_TO_DATE(string,format)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TIMEDIFF(datetime1,datetime2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TIME_TO_SEC(time)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"WEEK(date_time[,start_of_week])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"YEAR(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAYOFMONTH(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"HOUR(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LAST_DAY(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MICROSECOND(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MONTH(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MINUTE(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"FIRST()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LAST()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MIN()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAX()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"AVG()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SUM()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"COUNT()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"dql-statement-support",children:"DQL Statement Support"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Read Uncommitted"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Read Committed"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CONCAT(string2[,...])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"INSTR(string,substring)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LCASE(string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LEFT(string2,length)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LENGTH(string)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LOAD_FILE(file_name)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LOCATE(substring,string[,start_position])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LPAD(string2,length,pad)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LTRIM(string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"REPEAT(string2,count)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"REPLACE(str,search_str,replace_str)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"RPAD(string2,length,pad)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"RTRIM(string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"STRCMP(string1,string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SUBSTRING(str,position[,length])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TRIM([[BOTH|LEADING|TRAILING][padding]FROM]string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"UCASE(string2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"RIGHT(string2,length)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SPACE(count)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ABS(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"BIN(decimal_number)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CEILING(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CONV(number2,from_base,to_base)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"FLOOR(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"FORMAT(number,decimal_places)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"HEX(DecimalNumber)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LEAST(number,number2[,..])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MOD(numerator,denominator)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"POWER(number,power)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"RAND([seed])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ROUND(number[,decimals])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SIGN(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SQRT(number2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ADDTIME(date2,time_interval)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CONVERT_TZ(datetime2,fromTZ,toTZ)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CURRENT_DATE()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CURRENT_TIME()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CURRENT_TIMESTAMP()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATE(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATE_ADD(date2,INTERVALd_valued_type)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATE_FORMAT(datetime,FormatCodes)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATE_SUB(date2,INTERVALd_valued_type)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATEDIFF(date1,date2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAY(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAYNAME(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAYOFWEEK(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAYOFYEAR(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"EXTRACT(interval_nameFROMdate)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAKEDATE(year,day)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAKETIME(hour,minute,second)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MONTHNAME(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"NOW()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SEC_TO_TIME(seconds)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"STR_TO_DATE(string,format)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TIMEDIFF(datetime1,datetime2)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"TIME_TO_SEC(time)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"WEEK(date_time[,start_of_week])"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"YEAR(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DAYOFMONTH(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"HOUR(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LAST_DAY(date)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MICROSECOND(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MONTH(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MINUTE(datetime)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"FIRST()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"LAST()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MIN()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"MAX()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"AVG()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SUM()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"COUNT()"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"No"})]})]})]})]})}function j(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(h,{...t})}):h(t)}},28453:(t,e,l)=>{l.d(e,{R:()=>d,x:()=>x});var s=l(96540);const n={},i=s.createContext(n);function d(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function x(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:d(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);