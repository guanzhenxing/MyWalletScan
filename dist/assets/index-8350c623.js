import{r as i,j as s}from"./index-aeda1e87.js";import"./FileSaver.min-b2a08254.js";import{a as se,C as te}from"./axios-057734f1.js";import{F as C}from"./index-9f5a0d13.js";import{S as u}from"./index-c463ec7e.js";import{T as ae,a as ne}from"./index-e00a8a8b.js";import{B as J,E as oe}from"./EditOutlined-3f21ada2.js";import{L as ie}from"./index-06592163.js";import{S as le,n as B}from"./SyncOutlined-80c16cfc.js";import{m as H}from"./index-a00c1fcb.js";import{I as ce,E as de,a as ue}from"./Pagination-637f931d.js";import"./useFlexGapSupport-69780201.js";import"./PlusOutlined-74a5f9c7.js";import"./index-cd8267bc.js";import"./row-da0b9f45.js";import"./responsiveObserver-953ba023.js";import"./col-bebaa28a.js";import"./Sider-20598f97.js";import"./useNotification-4ae4ff01.js";async function M(p,b){try{p=p.toLowerCase();let y=`https://api.basescan.org/api?module=account&action=txlist&address=${p}&startblock=0&endblock=99999999&page=1&offset=9999&sort=asc&apikey=${b}`,d=(await se.get(y)).data.result;if(d.length===0)return"No transactions";d=d==null?void 0:d.filter(h=>h.from===p);let f=d==null?void 0:d.map(h=>h.to);f=f==null?void 0:f.map(h=>h.toLowerCase());let k=d==null?void 0:d.map(h=>h.timeStamp*1e3);return[f,k]}catch(y){return console.error(y),"Error"}}const{Content:pe}=ie;function ze(){i.useState(0),i.useState(0),i.useState(!1),i.useState({});const[p,b]=i.useState([]);i.useState(!1),i.useState(!1),C.useForm(),C.useForm();const[y,x]=i.useState([]);C.useForm(),i.useState(!1);const[d,f]=i.useState(!1),[k,h]=i.useState(!1),[j,v]=i.useState(new Map),[$,S]=i.useState([]),[A,R]=i.useState(!1),[Q,V]=i.useState(0),[_,q]=i.useState(!1),[P,G]=i.useState(localStorage.getItem("base_api_key")),E="0x18cd499e3d7ed42feba981ac9236a278e4cdc2ee",F="0x1111111254eeb25477b68fb85ed929f73a960582",L="0xdef1c0ded9bec7f1a1670819833240f027b25eff",z="0x6131b5fae19ea4f9d964eac0408e4408b66337b5",T="0xec8b0f7ffe3ae75d7ffab09429e3675bb63503e4",O="0x19ceead7105607cd444f5ad10dd51356436095a1",N="0x00000000000000adc04c56bf30ac9d3c0aaf14dc",D="0x50b6ebc2103bfec165949cc946d739d5650d7ae4",K="0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae";i.useEffect(()=>{const e=localStorage.getItem("base_api_key");e&&G(e)},[]);const U=()=>{q(!_)},W=()=>_?s.jsx(de,{}):s.jsx(ue,{}),X=async()=>{try{const e=[...p],r=[];for(let a of e)r.push(()=>new Promise(n=>{const t=c(a.address,E);a.aave=t,n()})),r.push(()=>new Promise(n=>{const t=c(a.address,F);a._1inch=t,n()})),r.push(()=>new Promise(n=>{const t=c(a.address,L);a.matcha=t,n()})),r.push(()=>new Promise(n=>{const t=c(a.address,z);a.kyber=t,n()})),r.push(()=>new Promise(n=>{const t=c(a.address,T);a.uniswap=t,n()})),r.push(()=>new Promise(n=>{const t=c(a.address,O);a.baseswap=t,n()})),r.push(()=>new Promise(n=>{const t=c(a.address,N);a.opensea=t,n()})),r.push(()=>new Promise(n=>{const t=c(a.address,D);a.stargate=t,n()})),r.push(()=>new Promise(n=>{const t=c(a.address,K);a.lifi=t,n()}));await Promise.all(r.map(a=>a())),S([...e]),localStorage.setItem("base_addresses",JSON.stringify(e))}catch(e){console.error(e)}finally{f(!1)}},Y=async()=>{if(!y.length){B.error({message:"错误",description:"请先选择要刷新的地址"},2);return}f(!0);try{const e=[...p],r=[];for(let a of y){const n=e.findIndex(t=>t.key===a);if(n!==-1){const t=e[n],m=new Map,w=(await M(t.address,P))[0];m.set(t.address,w),v(m),await new Promise(l=>{setTimeout(()=>{l()},200)}),r.push(()=>new Promise(l=>{const o=c(t.address,E);t.aave=o,l()})),r.push(()=>new Promise(l=>{const o=c(t.address,F);t._1inch=o,l()})),r.push(()=>new Promise(l=>{const o=c(t.address,L);t.matcha=o,l()})),r.push(()=>new Promise(l=>{const o=c(t.address,z);t.kyber=o,l()})),r.push(()=>new Promise(l=>{const o=c(t.address,T);t.uniswap=o,l()})),r.push(()=>new Promise(l=>{const o=c(t.address,O);t.baseswap=o,l()})),r.push(()=>new Promise(l=>{const o=c(t.address,N);t.opensea=o,l()})),r.push(()=>new Promise(l=>{const o=c(t.address,D);t.stargate=o,l()})),r.push(()=>new Promise(l=>{const o=c(t.address,K);t.lifi=o,l()}))}}await Promise.all(r.map(a=>a())),S([...e]),localStorage.setItem("base_addresses",JSON.stringify(e)),H.success("刷新成功")}catch(e){B.error({message:"错误",description:e.message},2)}finally{f(!1),x([])}},c=(e,r)=>{r=r.toLowerCase();const a=j.get(e);return a==null?(H.info("等待数据加载完成再刷新"),"error"):a==null?void 0:a.reduce((t,m)=>m===r?t+1:t,0)};i.useEffect(()=>{const e=()=>{V(window.innerHeight-180)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),i.useEffect(()=>{h(!0);const e=localStorage.getItem("base_addresses");e&&(b(JSON.parse(e)),S(JSON.parse(e))),(async()=>{const a=JSON.parse(e);if(!a)return;const n=new Map;let t=[];const m=[];for(const g of a){const w=g.address,l=M(w,P).then(o=>{n.set(w,o[0]),t.push(o[1])}).catch(o=>{console.error(`Error fetching tasks for address ${w}:`,o)});m.push(l)}try{await Promise.all(m),h(!1),v(n);const g=t.flat();localStorage.setItem("base_timestamps",JSON.stringify(g))}catch(g){console.error("Error fetching task contracts:",g)}})()},[]),i.useEffect(()=>{!A&&p.length>0&&j.size>0&&(X(),R(!0))},[p,j]);const Z={selectedRowKeys:y,onChange:e=>{x(e)}},[ee,I]=i.useState(null),re=[{title:"#",key:"index",align:"center",render:(e,r,a)=>a+1,width:34.5},{title:"备注",dataIndex:"name",key:"name",align:"center",render:(e,r)=>r.key===ee?s.jsx(ce,{placeholder:"请输入备注",defaultValue:e,onPressEnter:n=>{r.name=n.target.value,b([...p]),localStorage.setItem("base_addresses",JSON.stringify(p)),I(null)}}):s.jsxs(s.Fragment,{children:[s.jsx(ne,{color:"blue",onClick:()=>I(r.key),children:e}),!e&&s.jsx(J,{shape:"circle",icon:s.jsx(oe,{}),size:"small",onClick:()=>I(r.key)})]}),width:70},{title:s.jsxs("span",{children:["钱包地址",s.jsx("span",{onClick:U,style:{marginLeft:8,cursor:"pointer"},children:W()})]}),dataIndex:"address",key:"address",align:"center",render:e=>_?"***":e,width:200},{title:"最后交易",dataIndex:"base_last_tx",key:"base_last_tx",align:"center",render:(e,r)=>{let a="inherit";return e===null?s.jsx(u,{}):(e!=null&&e.includes("天")&&parseInt(e)>7?a="red":a="#1677ff",s.jsx("a",{href:"https://basescan.build/address/"+r.address,target:"_blank",style:{color:a},children:e}))},width:65},{title:s.jsxs("a",{href:"https://defillama.com/chain/base",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:["Base Task List  [参考defillama TVL数据] ",s.jsx("br",{}),"🔴请注意，通过点击任务列表的超链接，您将离开本网页。我们建议您在访问这些外部链接之前，仔细阅读其网站的隐私政策和使用条款。我们不能控制这些网站的内容和安全性，并且不对其造成的任何损失或损害负责。 在访问外部链接时，您需要自行评估潜在的风险。这些链接不构成对所链接网站内容的认可或支持。我们不对这些外部链接的准确性、内容、服务质量或安全性做任何承诺。 我们建议您保持您的计算机和设备的安全性，使用防病毒软件和防火墙，并时刻注意潜在的网络钓鱼或恶意软件攻击。 通过继续使用本网页并访问其中的超链接，您同意承担访问外部链接可能带来的一切风险。我们不对由此导致的任何损失或损害负责！"]}),key:"zks_era_group",className:"zks_era",children:[{title:s.jsx("a",{href:"https://app.aave.com/",target:"_blank",rel:"noopener noreferrer",children:"aave"}),dataIndex:"aave",key:"aave",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.aave===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(u,{}):e}),width:65},{title:s.jsx("a",{href:"https://app.1inch.io/",target:"_blank",rel:"noopener noreferrer",children:"1inch"}),dataIndex:"_1inch",key:"_1inch",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.inch===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(u,{}):e}),width:65},{title:s.jsx("a",{href:"https://matcha.xyz/",target:"_blank",rel:"noopener noreferrer",children:"matcha"}),dataIndex:"matcha",key:"matcha",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.matcha===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(u,{}):e}),width:65},{title:s.jsx("a",{href:"https://kyberswap.com/swap/base/",target:"_blank",rel:"noopener noreferrer",children:"kyberswap"}),dataIndex:"kyber",key:"kyber",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.kyber===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(u,{}):e}),width:65},{title:s.jsx("a",{href:"https://app.uniswap.org/swap?chain=base",target:"_blank",rel:"noopener noreferrer",children:"uniswap"}),dataIndex:"uniswap",key:"uniswap",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.uniswap===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(u,{}):e}),width:65},{title:s.jsx("a",{href:"https://baseswap.fi/",target:"_blank",rel:"noopener noreferrer",children:"baseswap"}),dataIndex:"baseswap",key:"baseswap",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.baseswap===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(u,{}):e}),width:65},{title:s.jsx("a",{href:"https://opensea.io/",target:"_blank",rel:"noopener noreferrer",children:"opensea"}),dataIndex:"opensea",key:"opensea",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.opensea===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(u,{}):e}),width:65},{title:s.jsx("a",{href:"https://stargate.finance/transfer",target:"_blank",rel:"noopener noreferrer",children:"stargate"}),dataIndex:"stargate",key:"stargate",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.stargate===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(u,{}):e}),width:65},{title:s.jsx("a",{href:"https://jumper.exchange",target:"_blank",rel:"noopener noreferrer",children:"lifi"}),dataIndex:"lifi",key:"lifi",align:"center",filters:[{text:"未完成",value:0}],onFilter:(e,r)=>r.lifi===e,render:(e,r)=>s.jsx("span",{style:{color:e===0?"red":"inherit"},children:e===null?s.jsx(u,{}):e}),width:65},{title:"进度",dataIndex:"progress",key:"progress",align:"center",sorter:(e,r)=>e.progress-r.progress,render:(e,r)=>{const a=["aave","_1inch","matcha","kyber","uniswap","baseswap","opensea","stargate","lifi"],t=a.reduce((g,w)=>r[w]>0?g+1:g,0)/a.length*100;r.progress=t;const m=`rgba(240, 121, 78, ${t/100})`;return{children:s.jsx("span",{children:e===null?s.jsx(u,{}):`${t.toFixed(2)}%`}),props:{style:{background:m}}}},width:65}]}];return s.jsx("div",{children:s.jsx(pe,{children:s.jsx(u,{spinning:k,children:s.jsx(ae,{rowSelection:Z,dataSource:$,pagination:!1,bordered:!0,style:{marginBottom:"0px",zIndex:2},size:"small",columns:re,scroll:{y:Q},footer:()=>s.jsx(te,{children:s.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",gap:"10px"},children:s.jsx(J,{type:"primary",onClick:Y,loading:d,size:"large",style:{width:"20%"},icon:s.jsx(le,{}),children:d?"正在刷新":"刷新选中地址"})})})})})})})}export{ze as default};
