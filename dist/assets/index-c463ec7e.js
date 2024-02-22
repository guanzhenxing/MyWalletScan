import{l as T,q as M,s as E,r as P,C as I,e as $,t as L}from"./useFlexGapSupport-69780201.js";import{r as a}from"./index-aeda1e87.js";import{H as w,k as N}from"./EditOutlined-3f21ada2.js";function X(n,t,e){var i=e||{},o=i.noTrailing,c=o===void 0?!1:o,p=i.noLeading,u=p===void 0?!1:p,v=i.debounceMode,m=v===void 0?void 0:v,s,C=!1,b=0;function d(){s&&clearTimeout(s)}function y(g){var f=g||{},l=f.upcomingOnly,S=l===void 0?!1:l;d(),C=!S}function z(){for(var g=arguments.length,f=new Array(g),l=0;l<g;l++)f[l]=arguments[l];var S=this,D=Date.now()-b;if(C)return;function r(){b=Date.now(),t.apply(S,f)}function h(){s=void 0}!u&&m&&!s&&r(),d(),m===void 0&&D>n?u?(b=Date.now(),c||(s=setTimeout(m?h:r,n))):r():c!==!0&&(s=setTimeout(m?h:r,m===void 0?n-D:n))}return z.cancel=y,z}function j(n,t,e){var i=e||{},o=i.atBegin,c=o===void 0?!1:o;return X(n,t,{debounceMode:c!==!1})}const G=new E("antSpinMove",{to:{opacity:1}}),H=new E("antRotate",{to:{transform:"rotate(405deg)"}}),_=n=>({[`${n.componentCls}`]:Object.assign(Object.assign({},P(n)),{position:"absolute",display:"none",color:n.colorPrimary,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${n.motionDurationSlow} ${n.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${n.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:n.contentHeight,[`${n.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-n.spinDotSize/2},[`${n.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(n.spinDotSize-n.fontSize)/2+2,textShadow:`0 1px 2px ${n.colorBgContainer}`},[`&${n.componentCls}-show-text ${n.componentCls}-dot`]:{marginTop:-(n.spinDotSize/2)-10},"&-sm":{[`${n.componentCls}-dot`]:{margin:-n.spinDotSizeSM/2},[`${n.componentCls}-text`]:{paddingTop:(n.spinDotSizeSM-n.fontSize)/2+2},[`&${n.componentCls}-show-text ${n.componentCls}-dot`]:{marginTop:-(n.spinDotSizeSM/2)-10}},"&-lg":{[`${n.componentCls}-dot`]:{margin:-(n.spinDotSizeLG/2)},[`${n.componentCls}-text`]:{paddingTop:(n.spinDotSizeLG-n.fontSize)/2+2},[`&${n.componentCls}-show-text ${n.componentCls}-dot`]:{marginTop:-(n.spinDotSizeLG/2)-10}}},[`${n.componentCls}-container`]:{position:"relative",transition:`opacity ${n.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:n.colorBgContainer,opacity:0,transition:`all ${n.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${n.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none",["&::after"]:{opacity:.4,pointerEvents:"auto"}}},["&-tip"]:{color:n.spinDotDefault},[`${n.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:n.spinDotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(n.spinDotSize-n.marginXXS/2)/2,height:(n.spinDotSize-n.marginXXS/2)/2,backgroundColor:n.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:G,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:H,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${n.componentCls}-dot`]:{fontSize:n.spinDotSizeSM,i:{width:(n.spinDotSizeSM-n.marginXXS/2)/2,height:(n.spinDotSizeSM-n.marginXXS/2)/2}},[`&-lg ${n.componentCls}-dot`]:{fontSize:n.spinDotSizeLG,i:{width:(n.spinDotSizeLG-n.marginXXS)/2,height:(n.spinDotSizeLG-n.marginXXS)/2}},[`&${n.componentCls}-show-text ${n.componentCls}-text`]:{display:"block"}})}),B=T("Spin",n=>{const t=M(n,{spinDotDefault:n.colorTextDescription,spinDotSize:n.controlHeightLG/2,spinDotSizeSM:n.controlHeightLG*.35,spinDotSizeLG:n.controlHeight});return[_(t)]},{contentHeight:400});var R=globalThis&&globalThis.__rest||function(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(e[i[o]]=n[i[o]]);return e};let x=null;function A(n,t){const{indicator:e}=t,i=`${n}-dot`;return e===null?null:w(e)?N(e,{className:$(e.props.className,i)}):w(x)?N(x,{className:$(x.props.className,i)}):a.createElement("span",{className:$(i,`${n}-dot-spin`)},a.createElement("i",{className:`${n}-dot-item`}),a.createElement("i",{className:`${n}-dot-item`}),a.createElement("i",{className:`${n}-dot-item`}),a.createElement("i",{className:`${n}-dot-item`}))}function F(n,t){return!!n&&!!t&&!isNaN(Number(t))}const q=n=>{const{spinPrefixCls:t,spinning:e=!0,delay:i=0,className:o,rootClassName:c,size:p="default",tip:u,wrapperClassName:v,style:m,children:s,hashId:C}=n,b=R(n,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[d,y]=a.useState(()=>e&&!F(e,i));a.useEffect(()=>{if(e){const r=j(i,()=>{y(!0)});return r(),()=>{var h;(h=r==null?void 0:r.cancel)===null||h===void 0||h.call(r)}}y(!1)},[i,e]);const z=a.useMemo(()=>typeof s<"u",[s]),{direction:g}=a.useContext(I),f=$(t,{[`${t}-sm`]:p==="small",[`${t}-lg`]:p==="large",[`${t}-spinning`]:d,[`${t}-show-text`]:!!u,[`${t}-rtl`]:g==="rtl"},o,c,C),l=$(`${t}-container`,{[`${t}-blur`]:d}),S=L(b,["indicator","prefixCls"]),D=a.createElement("div",Object.assign({},S,{style:m,className:f,"aria-live":"polite","aria-busy":d}),A(t,n),u?a.createElement("div",{className:`${t}-text`},u):null);return z?a.createElement("div",Object.assign({},S,{className:$(`${t}-nested-loading`,v,C)}),d&&a.createElement("div",{key:"loading"},D),a.createElement("div",{className:l,key:"container"},s)):D},O=n=>{const{prefixCls:t}=n,{getPrefixCls:e}=a.useContext(I),i=e("spin",t),[o,c]=B(i),p=Object.assign(Object.assign({},n),{spinPrefixCls:i,hashId:c});return o(a.createElement(q,Object.assign({},p)))};O.setDefaultIndicator=n=>{x=n};const Q=O;export{Q as S};
