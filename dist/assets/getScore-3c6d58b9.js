var yt=Object.defineProperty;var xt=(n,t,e)=>t in n?yt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var G=(n,t,e)=>(xt(n,typeof t!="symbol"?t+"":t,e),e),H=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var o=(n,t,e)=>(H(n,t,"read from private field"),e?e.call(n):t.get(n)),w=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},P=(n,t,e,r)=>(H(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e);var a=(n,t,e)=>(H(n,t,"access private method"),e);import{a as rt}from"./axios-057734f1.js";async function Pt(n,t){try{const e=["https://eth.llamarpc.com","https://rpc.ankr.com/eth","https://1rpc.io/eth","https://eth.rpc.blxrbdn.com","https://eth-mainnet.public.blastapi.io"],r=Math.floor(Math.random()*e.length),i=e[r];let l=(await rt.post(i,{jsonrpc:"2.0",method:"eth_getBalance",params:[n,"latest"],id:1})).data.result;return(parseInt(l,16)/10**18).toFixed(4)}catch(e){return console.error(e),"Error"}}const Ut={ethereum:["https://eth.llamarpc.com","https://rpc.ankr.com/eth","https://1rpc.io/eth","https://eth.rpc.blxrbdn.com","https://eth-mainnet.public.blastapi.io"],optimism:"https://optimism-mainnet.public.blastapi.io",arbitrum:"https://rpc.ankr.com/arbitrum",polygon:"https://polygon-bor.publicnode.com",bsc:"https://bscrpc.com"};async function $t(n,t){try{const e=Ut[t];if(!e)return"Error: Invalid Network Name";const r=Math.floor(Math.random()*e.length),i=e[r],l=(await rt.post(i,{jsonrpc:"2.0",method:"eth_getTransactionCount",params:[n,"latest"],id:1})).data.result;return parseInt(l,16)}catch(e){return console.error(e),"Error"}}const At="6.3.0";function Nt(n,t,e){const r=t.split("|").map(s=>s.trim());for(let s=0;s<r.length;s++)switch(t){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof n===t)return}const i=new Error(`invalid value for type ${t}`);throw i.code="INVALID_ARGUMENT",i.argument=`value.${e}`,i.value=n,i}async function Ot(n){const t=Object.keys(n);return(await Promise.all(t.map(r=>Promise.resolve(n[r])))).reduce((r,i,s)=>(r[t[s]]=i,r),{})}function it(n,t,e){for(let r in t){let i=t[r];const s=e?e[r]:null;s&&Nt(i,s,r),Object.defineProperty(n,r,{enumerable:!0,value:i,writable:!1})}}function B(n){if(n==null)return"null";if(Array.isArray(n))return"[ "+n.map(B).join(", ")+" ]";if(n instanceof Uint8Array){const t="0123456789abcdef";let e="0x";for(let r=0;r<n.length;r++)e+=t[n[r]>>4],e+=t[n[r]&15];return e}if(typeof n=="object"&&typeof n.toJSON=="function")return B(n.toJSON());switch(typeof n){case"boolean":case"symbol":return n.toString();case"bigint":return BigInt(n).toString();case"number":return n.toString();case"string":return JSON.stringify(n);case"object":{const t=Object.keys(n);return t.sort(),"{ "+t.map(e=>`${B(e)}: ${B(n[e])}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function Et(n,t){return n&&n.code===t}function Vt(n){return Et(n,"CALL_EXCEPTION")}function It(n,t,e){{const i=[];if(e){if("message"in e||"code"in e||"name"in e)throw new Error(`value will overwrite populated values: ${B(e)}`);for(const s in e){const l=e[s];i.push(s+"="+B(l))}}i.push(`code=${t}`),i.push(`version=${At}`),i.length&&(n+=" ("+i.join(", ")+")")}let r;switch(t){case"INVALID_ARGUMENT":r=new TypeError(n);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":r=new RangeError(n);break;default:r=new Error(n)}return it(r,{code:t}),e&&Object.assign(r,e),r}function u(n,t,e,r){if(!n)throw It(t,e,r)}function f(n,t,e,r){u(n,t,"INVALID_ARGUMENT",{argument:e,value:r})}function jt(n,t,e){e==null&&(e=""),e&&(e=": "+e),u(n>=t,"missing arguemnt"+e,"MISSING_ARGUMENT",{count:n,expectedCount:t}),u(n<=t,"too many arguemnts"+e,"UNEXPECTED_ARGUMENT",{count:n,expectedCount:t})}const Tt=["NFD","NFC","NFKD","NFKC"].reduce((n,t)=>{try{if("test".normalize(t)!=="test")throw new Error("bad");if(t==="NFD"){const e=String.fromCharCode(233).normalize("NFD"),r=String.fromCharCode(101,769);if(e!==r)throw new Error("broken")}n.push(t)}catch{}return n},[]);function Dt(n){u(Tt.indexOf(n)>=0,"platform missing String.prototype.normalize","UNSUPPORTED_OPERATION",{operation:"String.prototype.normalize",info:{form:n}})}function Bt(n,t,e){if(e==null&&(e=""),n!==t){let r=e,i="new";e&&(r+=".",i+=" "+e),u(!1,`private constructor; use ${r}from* methods`,"UNSUPPORTED_OPERATION",{operation:i})}}function st(n,t,e){if(n instanceof Uint8Array)return e?new Uint8Array(n):n;if(typeof n=="string"&&n.match(/^0x([0-9a-f][0-9a-f])*$/i)){const r=new Uint8Array((n.length-2)/2);let i=2;for(let s=0;s<r.length;s++)r[s]=parseInt(n.substring(i,i+2),16),i+=2;return r}f(!1,"invalid BytesLike value",t||"value",n)}function M(n,t){return st(n,t,!1)}function Gt(n,t){return st(n,t,!0)}function ot(n,t){return!(typeof n!="string"||!n.match(/^0x[0-9A-Fa-f]*$/)||typeof t=="number"&&n.length!==2+2*t||t===!0&&n.length%2!==0)}function Ft(n){return ot(n,!0)||n instanceof Uint8Array}const tt="0123456789abcdef";function $(n){const t=M(n);let e="0x";for(let r=0;r<t.length;r++){const i=t[r];e+=tt[(i&240)>>4]+tt[i&15]}return e}function Ht(n){return"0x"+n.map(t=>$(t).substring(2)).join("")}function Jt(n){return ot(n,!0)?(n.length-2)/2:M(n).length}function Xt(n,t,e){const r=M(n);return e!=null&&e>r.length&&u(!1,"cannot slice beyond data bounds","BUFFER_OVERRUN",{buffer:r,length:r.length,offset:e}),$(r.slice(t??0,e??r.length))}function _t(n,t,e){const r=M(n);u(t>=r.length,"padding exceeds data length","BUFFER_OVERRUN",{buffer:new Uint8Array(r),length:t,offset:t+1});const i=new Uint8Array(t);return i.fill(0),e?i.set(r,t-r.length):i.set(r,0),$(i)}function Zt(n,t){return _t(n,t,!0)}const O=BigInt(0),b=BigInt(1),F=9007199254740991;function X(n,t){const e=j(n,"value"),r=BigInt(I(t,"width"));if(u(e>>r===O,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:n}),e>>r-b){const i=(b<<r)-b;return-((~e&i)+b)}return e}function qt(n,t){let e=V(n,"value");const r=BigInt(I(t,"width")),i=b<<r-b;if(e<O){e=-e,u(e<=i,"too low","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:n});const s=(b<<r)-b;return(~e&s)+b}else u(e<i,"too high","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:n});return e}function nt(n,t){const e=j(n,"value"),r=BigInt(I(t,"bits"));return e&(b<<r)-b}function V(n,t){switch(typeof n){case"bigint":return n;case"number":return f(Number.isInteger(n),"underflow",t||"value",n),f(n>=-F&&n<=F,"overflow",t||"value",n),BigInt(n);case"string":try{if(n==="")throw new Error("empty string");return n[0]==="-"&&n[1]!=="-"?-BigInt(n.substring(1)):BigInt(n)}catch(e){f(!1,`invalid BigNumberish string: ${e.message}`,t||"value",n)}}f(!1,"invalid BigNumberish value",t||"value",n)}function j(n,t){const e=V(n,t);return u(e>=O,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:n}),e}const et="0123456789abcdef";function ct(n){if(n instanceof Uint8Array){let t="0x0";for(const e of n)t+=et[e>>4],t+=et[e&15];return BigInt(t)}return V(n)}function I(n,t){switch(typeof n){case"bigint":return f(n>=-F&&n<=F,"overflow",t||"value",n),Number(n);case"number":return f(Number.isInteger(n),"underflow",t||"value",n),f(n>=-F&&n<=F,"overflow",t||"value",n),n;case"string":try{if(n==="")throw new Error("empty string");return I(BigInt(n),t)}catch(e){f(!1,`invalid numeric string: ${e.message}`,t||"value",n)}}f(!1,"invalid numeric value",t||"value",n)}function Kt(n){return I(ct(n))}function Qt(n,t){let r=j(n,"value").toString(16);if(t==null)r.length%2&&(r="0"+r);else{const i=I(t,"width");for(u(i*2>=r.length,`value exceeds width (${i} bits)`,"NUMERIC_FAULT",{operation:"toBeHex",fault:"overflow",value:n});r.length<i*2;)r="0"+r}return"0x"+r}function St(n){const t=j(n,"value");if(t===O)return new Uint8Array([]);let e=t.toString(16);e.length%2&&(e="0"+e);const r=new Uint8Array(e.length/2);for(let i=0;i<r.length;i++){const s=i*2;r[i]=parseInt(e.substring(s,s+2),16)}return r}function Wt(n){let t=$(Ft(n)?n:St(n)).substring(2);for(;t.startsWith("0");)t=t.substring(1);return t===""&&(t="0"),"0x"+t}const kt=BigInt(-1),m=BigInt(0),_=BigInt(1),vt=BigInt(5),T={};let S="0000";for(;S.length<80;)S+=S;function N(n){let t=S;for(;t.length<n;)t+=t;return BigInt("1"+t.substring(0,n))}function k(n,t,e){const r=BigInt(t.width);if(t.signed){const i=_<<r-_;u(e==null||n>=-i&&n<i,"overflow","NUMERIC_FAULT",{operation:e,fault:"overflow",value:n}),n>m?n=X(nt(n,r),r):n=-X(nt(-n,r),r)}else{const i=_<<r;u(e==null||n>=0&&n<i,"overflow","NUMERIC_FAULT",{operation:e,fault:"overflow",value:n}),n=(n%i+i)%i&i-_}return n}function J(n){typeof n=="number"&&(n=`fixed128x${n}`);let t=!0,e=128,r=18;if(typeof n=="string"){if(n!=="fixed")if(n==="ufixed")t=!1;else{const s=n.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);f(s,"invalid fixed format","format",n),t=s[1]!=="u",e=parseInt(s[2]),r=parseInt(s[3])}}else if(n){const s=n,l=(g,z,D)=>s[g]==null?D:(f(typeof s[g]===z,"invalid fixed format ("+g+" not "+z+")","format."+g,s[g]),s[g]);t=l("signed","boolean",t),e=l("width","number",e),r=l("decimals","number",r)}f(e%8===0,"invalid FixedNumber width (not byte aligned)","format.width",e),f(r<=80,"invalid FixedNumber decimals (too large)","format.decimals",r);const i=(t?"":"u")+"fixed"+String(e)+"x"+String(r);return{signed:t,width:e,decimals:r,name:i}}function Rt(n,t){let e="";n<m&&(e="-",n*=kt);let r=n.toString();if(t===0)return e+r;for(;r.length<=t;)r=S+r;const i=r.length-t;for(r=r.substring(0,i)+"."+r.substring(i);r[0]==="0"&&r[1]!==".";)r=r.substring(1);for(;r[r.length-1]==="0"&&r[r.length-2]!==".";)r=r.substring(0,r.length-1);return e+r}var d,c,h,U,E,p,x,v,q,R,K,C,Q,L,W;const A=class{constructor(t,e,r){w(this,U);w(this,p);w(this,v);w(this,R);w(this,C);w(this,L);G(this,"format");w(this,d,void 0);w(this,c,void 0);w(this,h,void 0);G(this,"_value");Bt(t,T,"FixedNumber"),P(this,c,e),P(this,d,r);const i=Rt(e,r.decimals);it(this,{format:r.name,_value:i}),P(this,h,N(r.decimals))}get signed(){return o(this,d).signed}get width(){return o(this,d).width}get decimals(){return o(this,d).decimals}get value(){return o(this,c)}addUnsafe(t){return a(this,v,q).call(this,t)}add(t){return a(this,v,q).call(this,t,"add")}subUnsafe(t){return a(this,R,K).call(this,t)}sub(t){return a(this,R,K).call(this,t,"sub")}mulUnsafe(t){return a(this,C,Q).call(this,t)}mul(t){return a(this,C,Q).call(this,t,"mul")}mulSignal(t){a(this,U,E).call(this,t);const e=o(this,c)*o(t,c);return u(e%o(this,h)===m,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),a(this,p,x).call(this,e/o(this,h),"mulSignal")}divUnsafe(t){return a(this,L,W).call(this,t)}div(t){return a(this,L,W).call(this,t,"div")}divSignal(t){u(o(t,c)!==m,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),a(this,U,E).call(this,t);const e=o(this,c)*o(this,h);return u(e%o(t,c)===m,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),a(this,p,x).call(this,e/o(t,c),"divSignal")}cmp(t){let e=this.value,r=t.value;const i=this.decimals-t.decimals;return i>0?r*=N(i):i<0&&(e*=N(-i)),e<r||e>r?-1:0}eq(t){return this.cmp(t)===0}lt(t){return this.cmp(t)<0}lte(t){return this.cmp(t)<=0}gt(t){return this.cmp(t)>0}gte(t){return this.cmp(t)>=0}floor(){let t=o(this,c);return o(this,c)<m&&(t-=o(this,h)-_),t=o(this,c)/o(this,h)*o(this,h),a(this,p,x).call(this,t,"floor")}ceiling(){let t=o(this,c);return o(this,c)>m&&(t+=o(this,h)-_),t=o(this,c)/o(this,h)*o(this,h),a(this,p,x).call(this,t,"ceiling")}round(t){if(t==null&&(t=0),t>=this.decimals)return this;const e=this.decimals-t,r=vt*N(e-1);let i=this.value+r;const s=N(e);return i=i/s*s,k(i,o(this,d),"round"),new A(T,i,o(this,d))}isZero(){return o(this,c)===m}isNegative(){return o(this,c)<m}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return A.fromString(this.toString(),t)}static fromValue(t,e,r){e==null&&(e=0);const i=J(r);let s=V(t,"value");const l=e-i.decimals;if(l>0){const g=N(l);u(s%g===m,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:t}),s/=g}else l<0&&(s*=N(-l));return k(s,i,"fromValue"),new A(T,s,i)}static fromString(t,e){const r=t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);f(r&&r[2].length+r[3].length>0,"invalid FixedNumber string value","value",t);const i=J(e);let s=r[2]||"0",l=r[3]||"";for(;l.length<i.decimals;)l+=S;u(l.substring(i.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:t}),l=l.substring(0,i.decimals);const g=BigInt(r[1]+s+l);return k(g,i,"fromString"),new A(T,g,i)}static fromBytes(t,e){let r=ct(M(t,"value"));const i=J(e);return i.signed&&(r=X(r,i.width)),k(r,i,"fromBytes"),new A(T,r,i)}};let Z=A;d=new WeakMap,c=new WeakMap,h=new WeakMap,U=new WeakSet,E=function(t){f(this.format===t.format,"incompatible format; use fixedNumber.toFormat","other",t)},p=new WeakSet,x=function(t,e){return t=k(t,o(this,d),e),new A(T,t,o(this,d))},v=new WeakSet,q=function(t,e){return a(this,U,E).call(this,t),a(this,p,x).call(this,o(this,c)+o(t,c),e)},R=new WeakSet,K=function(t,e){return a(this,U,E).call(this,t),a(this,p,x).call(this,o(this,c)-o(t,c),e)},C=new WeakSet,Q=function(t,e){return a(this,U,E).call(this,t),a(this,p,x).call(this,o(this,c)*o(t,c)/o(this,h),e)},L=new WeakSet,W=function(t,e){return u(o(t,c)!==m,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),a(this,U,E).call(this,t),a(this,p,x).call(this,o(this,c)*o(this,h)/o(t,c),e)};const Ct=["wei","kwei","mwei","gwei","szabo","finney","ether"];function Lt(n,t){let e=18;if(typeof t=="string"){const r=Ct.indexOf(t);f(r>=0,"invalid unit","unit",t),e=3*r}else t!=null&&(e=I(t,"unit"));return Z.fromValue(n,e,{decimals:e}).toString()}function Yt(n){return Lt(n,18)}async function tn(n){let t=0;const e=[4,10,25,100],r=n.contractActivity;t+=y(r,e);const i=[7,21,49],s=n.dayActivity;t+=y(s,i);const l=[.1,1,10],g=parseFloat(n.l1Tol2Amount);t+=y(g,l);const z=[1,3],D=n.l1Tol2Times;t+=y(D,z,!0);const lt=[2,6,9],at=n.monthActivity;t+=y(at,lt);const ut=[1e3,1e4,5e4,25e4],ft=parseFloat(n.totalExchangeAmount);t+=y(ft,ut);const ht=[4,8,12],gt=n.weekActivity;t+=y(gt,ht,!0);const mt=[3,5,10],dt=n.zks1_tx_amount;t+=y(dt,mt);const pt=[.01,.1,1],Y=parseFloat(n.zks2_balance);Y>=.005?t+=y(Y,pt):t-=1;const bt=[4,10,25,100],wt=n.zks2_tx_amount;return t+=y(wt,bt),t}function y(n,t,e=!1){if(e&&n===0)return-1;let r=0;for(const i of t)if(n>=i)r+=1;else break;return r}export{Ot as A,Vt as B,Yt as C,tn as D,Pt as E,$t as F,Dt as a,f as b,u as c,it as d,I as e,Gt as f,M as g,$ as h,Kt as i,Ht as j,St as k,Jt as l,Bt as m,V as n,ot as o,Qt as p,Xt as q,jt as r,Et as s,ct as t,nt as u,qt as v,X as w,Wt as x,It as y,Zt as z};
