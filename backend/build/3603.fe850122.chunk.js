(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3603],{94445:W=>{function Y(a,n,m,y){for(var B=-1,D=a==null?0:a.length;++B<D;){var O=a[B];n(y,O,m(O),a)}return y}W.exports=Y},33999:(W,Y,a)=>{var n=a(32193),m=n("length");W.exports=m},7233:(W,Y,a)=>{var n=a(97449);function m(y,B,D,O){return n(y,function(b,S,z){B(O,b,D(b),z)}),O}W.exports=m},97449:(W,Y,a)=>{var n=a(85373),m=a(75821),y=m(n);W.exports=y},41225:(W,Y,a)=>{var n=a(81204),m=a(51646),y="[object RegExp]";function B(D){return m(D)&&n(D)==y}W.exports=B},29884:(W,Y,a)=>{var n=a(97449),m=a(91522);function y(B,D){var O=-1,b=m(B)?Array(B.length):[];return n(B,function(S,z,_){b[++O]=D(S,z,_)}),b}W.exports=y},4191:(W,Y,a)=>{var n=a(87864),m=a(86386),y=a(45353),B=a(29884),D=a(74565),O=a(52689),b=a(48126),S=a(82388),z=a(82261);function _(ne,re,We){re.length?re=n(re,function(ae){return z(ae)?function(ie){return m(ie,ae.length===1?ae[0]:ae)}:ae}):re=[S];var pe=-1;re=n(re,O(y));var ce=B(ne,function(ae,ie,oe){var Re=n(re,function(Ee){return Ee(ae)});return{criteria:Re,index:++pe,value:ae}});return D(ce,function(ae,ie){return b(ae,ie,We)})}W.exports=_},74565:W=>{function Y(a,n){var m=a.length;for(a.sort(n);m--;)a[m]=a[m].value;return a}W.exports=Y},64958:(W,Y,a)=>{var n=a(91662);function m(y,B){if(y!==B){var D=y!==void 0,O=y===null,b=y===y,S=n(y),z=B!==void 0,_=B===null,ne=B===B,re=n(B);if(!_&&!re&&!S&&y>B||S&&z&&ne&&!_&&!re||O&&z&&ne||!D&&ne||!b)return 1;if(!O&&!S&&!re&&y<B||re&&D&&b&&!O&&!S||_&&D&&b||!z&&b||!ne)return-1}return 0}W.exports=m},48126:(W,Y,a)=>{var n=a(64958);function m(y,B,D){for(var O=-1,b=y.criteria,S=B.criteria,z=b.length,_=D.length;++O<z;){var ne=n(b[O],S[O]);if(ne){if(O>=_)return ne;var re=D[O];return ne*(re=="desc"?-1:1)}}return y.index-B.index}W.exports=m},88532:(W,Y,a)=>{var n=a(94445),m=a(7233),y=a(45353),B=a(82261);function D(O,b){return function(S,z){var _=B(S)?n:m,ne=b?b():{};return _(S,O,y(z,2),ne)}}W.exports=D},75821:(W,Y,a)=>{var n=a(91522);function m(y,B){return function(D,O){if(D==null)return D;if(!n(D))return y(D,O);for(var b=D.length,S=B?b:-1,z=Object(D);(B?S--:++S<b)&&O(z[S],S,z)!==!1;);return D}}W.exports=m},49605:(W,Y,a)=>{var n=a(33999),m=a(20598),y=a(71387);function B(D){return m(D)?y(D):n(D)}W.exports=B},71387:W=>{var Y="\\ud800-\\udfff",a="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",m="\\u20d0-\\u20ff",y=a+n+m,B="\\ufe0e\\ufe0f",D="["+Y+"]",O="["+y+"]",b="\\ud83c[\\udffb-\\udfff]",S="(?:"+O+"|"+b+")",z="[^"+Y+"]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",ne="[\\ud800-\\udbff][\\udc00-\\udfff]",re="\\u200d",We=S+"?",pe="["+B+"]?",ce="(?:"+re+"(?:"+[z,_,ne].join("|")+")"+pe+We+")*",ae=pe+We+ce,ie="(?:"+[z+O+"?",O,_,ne,D].join("|")+")",oe=RegExp(b+"(?="+b+")|"+ie+ae,"g");function Re(Ee){for(var xe=oe.lastIndex=0;oe.test(Ee);)++xe;return xe}W.exports=Re},94710:(W,Y,a)=>{var n=a(95292),m=a(88532),y=Object.prototype,B=y.hasOwnProperty,D=m(function(O,b,S){B.call(O,S)?O[S].push(b):n(O,S,[b])});W.exports=D},22171:(W,Y,a)=>{var n=a(41225),m=a(52689),y=a(54765),B=y&&y.isRegExp,D=B?m(B):n;W.exports=D},34827:(W,Y,a)=>{var n=a(81204),m=a(82261),y=a(51646),B="[object String]";function D(O){return typeof O=="string"||!m(O)&&y(O)&&n(O)==B}W.exports=D},14311:(W,Y,a)=>{var n=a(32628),m=a(50633),y=a(91522),B=a(34827),D=a(49605),O="[object Map]",b="[object Set]";function S(z){if(z==null)return 0;if(y(z))return B(z)?D(z):z.length;var _=m(z);return _==O||_==b?z.size:n(z).length}W.exports=S},45635:(W,Y,a)=>{var n=a(87212),m=a(4191),y=a(39226),B=a(3956),D=y(function(O,b){if(O==null)return[];var S=b.length;return S>1&&B(O,b[0],b[1])?b=[]:S>2&&B(b[0],b[1],b[2])&&(b=[b[0]]),m(O,n(b,1),[])});W.exports=D},89102:(W,Y,a)=>{var n=a(85306);function m(y){return n(y).toLowerCase()}W.exports=m},35336:(W,Y,a)=>{var n=a(8928),m=a(88974),y=a(20598),B=a(57505),D=a(22171),O=a(49605),b=a(30660),S=a(88765),z=a(85306),_=30,ne="...",re=/\w*$/;function We(pe,ce){var ae=_,ie=ne;if(B(ce)){var oe="separator"in ce?ce.separator:oe;ae="length"in ce?S(ce.length):ae,ie="omission"in ce?n(ce.omission):ie}pe=z(pe);var Re=pe.length;if(y(pe)){var Ee=b(pe);Re=Ee.length}if(ae>=Re)return pe;var xe=ae-O(ie);if(xe<1)return ie;var Te=Ee?m(Ee,0,xe).join(""):pe.slice(0,xe);if(oe===void 0)return Te+ie;if(Ee&&(xe+=Te.length-xe),D(oe)){if(pe.slice(xe).search(oe)){var ft,se=Te;for(oe.global||(oe=RegExp(oe.source,z(re.exec(oe))+"g")),oe.lastIndex=0;ft=oe.exec(se);)var ot=ft.index;Te=Te.slice(0,ot===void 0?xe:ot)}}else if(pe.indexOf(n(oe),xe)!=xe){var ht=Te.lastIndexOf(oe);ht>-1&&(Te=Te.slice(0,ht))}return Te+ie}W.exports=We},71547:(W,Y,a)=>{var n=a(19913);function m(y){return y&&y.length?n(y):[]}W.exports=m},80846:(W,Y,a)=>{"use strict";a.d(Y,{B:()=>B});var n=a(92132),m=a(63891),y=a(5391);const B=({options:O,...b})=>(0,n.jsx)(y.KF,{...b,children:O.map(S=>"children"in S?(0,n.jsx)(y.np,{label:S.label,values:S.children.map(z=>z.value.toString()),children:S.children.map(z=>(0,n.jsx)(D,{value:z.value,children:z.label},z.value))},S.label):(0,n.jsx)(y.fe,{value:S.value,children:S.label},S.value))}),D=(0,m.Ay)(y.fe)`
  padding-left: ${({theme:O})=>O.spaces[7]};
`},83603:(W,Y,a)=>{"use strict";a.r(Y),a.d(Y,{A:()=>ct,C:()=>Wt,a:()=>_e,g:()=>c,i:()=>Fd,u:()=>Ue});var n=a(92132),m=a(21272),y=a(44370),B=a(43274),D=a(27026),O=a(80846),b=a(43242),S=a(57842),z=a(76106),_=a(57564),ne=a(68065),re=a(93744),We=a(53900),pe=a(15926),ce=a(44622),ae=a(24122),ie=a(83724),oe=a(45024),Re=a(89787),Ee=a(35089),xe=a(12050),Te=a(81926),ft=a(72171),se=a(69564),ot=a(6479),ht=a(91894),Is=a(41516),Rs=a(96586),Es=a(17122),ks=a(18670),an=a(19106),ws=a(42035),Ds=a(71262),Os=a(37373),Bs=a(168),Ps=a(50642),Ws=a(32161),zs=a(53432),F=a(32474),Us=a(14718),K=a(54894),on=a(71389),Ne=a(17703),k=a(63891);const ke=(e,t,s)=>{if(!t)return;if(typeof t=="object")return(Array.isArray(t)?t:[t?.desktop,t?.tablet,t?.mobile]).reduce((i,d,u)=>{if(d)switch(u){case 0:return`${i}${e}: ${s.spaces[d]};`;case 1:return`${i}${s.mediaQueries.tablet}{${e}: ${s.spaces[d]};}`;case 2:return`${i}${s.mediaQueries.mobile}{${e}: ${s.spaces[d]};}`;default:return i}return i},"");const o=s.spaces[t]??t;return`${e}: ${o};`};function Vs(e,t){return typeof e=="string"?!1:t in e}function Gd(e){return e&&typeof e=="object"&&!Array.isArray(e)}function le(e,t,s){return t&&Vs(e,t)?e[t]:s}const Zs={color:!0,cursor:!0,height:!0,width:!0},Q=k.Ay.div.withConfig({shouldForwardProp:(e,t)=>!Zs[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>le(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>le(e.colors,t,t)};
  color: ${({theme:e,color:t})=>le(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>ke("padding",t,e)}
  ${({theme:e,paddingTop:t})=>ke("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>ke("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>ke("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>ke("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>ke("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>ke("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>ke("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>ke("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:s})=>t?e.borderRadius:s};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>le(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:s,borderWidth:o})=>{if(t&&!s&&typeof o>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>le(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>le(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>le(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>le(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>le(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>le(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>le(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>le(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>le(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>le(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>le(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>le(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`,Hs=(0,k.Ay)(Q)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:e})=>e}, 1fr);
  ${({theme:e,gap:t})=>ke("gap",t,e)}
`,Gs=e=>{const{gap:t="0",gridCols:s=12,...o}=e;return(0,n.jsx)(Hs,{gap:t,gridCols:s,...o})},Ys=`${232/16}rem`,Ks=(0,k.Ay)(Gs)`
  width: ${Ys};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,Qs=({ariaLabel:e,...t})=>(0,n.jsx)(Ks,{"aria-label":e,as:"nav",...t});var yt=a(67067);const Xs={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"},Js=m["useId".toString()]||(()=>{});let qs=0;const et=e=>{const[t,s]=(0,m.useState)(Js());return(0,m.useLayoutEffect)(()=>{e||s(o=>o??String(qs++))},[e]),e?.toString()??(t||"")},_s=e=>{const t=(0,m.useRef)();return(0,m.useEffect)(()=>{t.current=e}),t.current},ea=(0,k.Ay)(Q)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,ta=({unsetMargin:e=!0,...t})=>(0,n.jsx)(ea,{...t,background:"neutral150",as:"hr",unsetMargin:e}),na=e=>(0,n.jsx)("form",{...e,role:"search"});var sa=a(98889);function aa(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function rn(...e){return t=>e.forEach(s=>aa(s,t))}function Yd(...e){return React.useCallback(rn(...e),e)}const Kd=e=>({theme:t,size:s})=>t.sizes[e][s],ln=(e="&")=>({theme:t,hasError:s=!1})=>(0,k.AH)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${s?t.colors.danger600:t.colors.primary600};
      box-shadow: ${s?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,dn=({theme:e})=>(0,k.AH)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e.colors.primary600};
    }
  }
`,cn=(0,m.createContext)({id:"",required:!1}),un=()=>(0,m.useContext)(cn),oa={direction:!0},ue=(0,k.Ay)(Q).withConfig({shouldForwardProp:(e,t)=>!oa[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>ke("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`,mn={S:6.5,M:10.5},ra=(0,m.forwardRef)(({endAction:e,startAction:t,disabled:s=!1,onChange:o,size:r="M",...l},i)=>{const{id:d,error:u,hint:p,name:f,required:g}=un();let T;u?T=`${d}-error`:p&&(T=`${d}-hint`);const A=Boolean(u),v=M=>{!s&&o&&o(M)};return(0,n.jsxs)($t,{justifyContent:"space-between",hasError:A,disabled:s,children:[t?(0,n.jsx)(Q,{paddingLeft:3,paddingRight:2,children:t}):null,(0,n.jsx)(ia,{id:d,name:f,ref:i,"aria-describedby":T,"aria-invalid":A,"aria-disabled":s,disabled:s,"data-disabled":s?"":void 0,hasLeftAction:Boolean(t),hasRightAction:Boolean(e),onChange:v,"aria-required":g,$size:r,...l}),e?(0,n.jsx)(Q,{paddingLeft:2,paddingRight:3,children:e}):null]})}),ia=k.Ay.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${mn[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:t})=>t?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:t})=>t?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${mn[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,$t=(0,k.Ay)(ue)`
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${ln()}

  ${({theme:e,disabled:t})=>t?(0,k.AH)`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`,xt=k.Ay.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,la=(0,k.Ay)(ue)`
  font-size: 1.6rem;
  padding: 0;
`,da=(0,m.forwardRef)(({label:e,children:t,...s},o)=>(0,n.jsxs)(la,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...s,as:"button",ref:o,children:[(0,n.jsx)(xt,{as:"span",children:e}),(0,m.cloneElement)(t,{"aria-hidden":!0,focusable:!1})]})),ca=(0,m.forwardRef)(({children:e,name:t,error:s,hint:o,id:r,required:l=!1,...i},d)=>{const u=et(r),p=(0,m.useMemo)(()=>({name:t,id:u,error:s,hint:o,required:l}),[s,u,o,t,l]);return(0,n.jsx)(Q,{ref:d,...i,children:(0,n.jsx)(cn.Provider,{value:p,children:e})})}),ua="[@strapi/design-system]:",ma=e=>{const t=e;let s=!1;if(typeof t!="function")throw new TypeError(`${ua} once requires a function parameter`);return(...o)=>{s||(t(...o),s=!0)}},pn="alpha",gn="beta",fn="delta",hn="epsilon",St="omega",yn="pi",xn="sigma",Qd=[pn,gn,fn,hn,St,yn,xn],pa=({ellipsis:e=!1})=>e&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,ga=({variant:e=St,theme:t})=>{switch(e){case pn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case gn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case fn:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case hn:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case St:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case yn:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case xn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},fa={fontSize:!0,fontWeight:!0},q=k.Ay.span.withConfig({shouldForwardProp:(e,t)=>!fa[e]&&t(e)})`
  ${ga}
  ${pa}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:t})=>le(e.fontWeights,t,void 0)};
  font-size: ${({theme:e,fontSize:t})=>le(e.fontSizes,t,void 0)};
  line-height: ${({theme:e,lineHeight:t})=>le(e.lineHeights,t,t)};
  color: ${({theme:e,textColor:t})=>e.colors[t||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`,ha=ma(console.warn),ya=(0,m.forwardRef)(({children:e,action:t,required:s,...o},r)=>{const{id:l,required:i}=un(),d=i||s;return s!==void 0&&ha('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,n.jsxs)(xa,{ref:r,variant:"pi",textColor:"neutral800",htmlFor:l,fontWeight:"bold",as:"label",...o,children:[e,d&&(0,n.jsx)(ba,{textColor:"danger600",children:"*"}),t&&(0,n.jsx)(va,{marginLeft:1,children:t})]})}),xa=(0,k.Ay)(q)`
  display: flex;
  align-items: center;
`,ba=(0,k.Ay)(q)`
  line-height: 0;
`,va=(0,k.Ay)(ue)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Ca=(0,k.Ay)(sa.A)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,bn=(0,k.Ay)(yt.A)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,Aa=k.Ay.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${bn} {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${$t} {
    border: 1px solid transparent;
  }

  ${ln($t)}
`,ja=(0,m.forwardRef)(({name:e,size:t="M",children:s,value:o="",onClear:r,clearLabel:l,...i},d)=>{const u=(0,m.useRef)(null),p=o.length>0,f=T=>{r(T),u.current.focus()},g=rn(d,u);return(0,n.jsx)(Aa,{children:(0,n.jsxs)(ca,{name:e,children:[(0,n.jsx)(xt,{children:(0,n.jsx)(ya,{children:s})}),(0,n.jsx)(ra,{ref:g,value:o,startAction:(0,n.jsx)(bn,{"aria-hidden":!0}),size:t,endAction:p?(0,n.jsx)(da,{label:l,onClick:f,children:(0,n.jsx)(Ca,{})}):void 0,...i})]})})}),Ta=e=>{const[t,s]=(0,m.useState)(!1),o=(0,m.useRef)(null),r=()=>{typeof o.current=="number"&&(clearTimeout(o.current),o.current=null)};return(0,m.useEffect)(()=>()=>{r()},[]),{visible:t,onFocus:()=>{s(!0)},onBlur:()=>{s(!1)},onMouseEnter:()=>{o.current=setTimeout(()=>{s(!0)},e)},onMouseLeave:()=>{r(),s(!1)}}},He=8,Ma=(e,t)=>{const s=(e.width-t.width)/2,o=t.left-s,r=t.top+t.height+He+window.pageYOffset;return{left:o,top:r}},$a=(e,t)=>{const s=(e.height-t.height)/2,o=t.left+t.width+He,r=t.top-s+window.pageYOffset;return{left:o,top:r}},Sa=(e,t)=>{const s=(e.height-t.height)/2,o=t.left-e.width-He,r=t.top-s+window.pageYOffset;return{left:o,top:r}},Fa=(e,t)=>{const s=(e.width-t.width)/2;let o=t.left-s,r=t.top-e.height-He+window.pageYOffset;const l=window.innerWidth-t.right;return t.left+e.width-l>window.innerWidth?(o=t.left-e.width-He,r=t.top+window.scrollY-t.height/2):o<0?(o=t.width+t.left+He,r=t.top+window.scrollY-e.height/2+He):r<0&&o>0&&(r=t.top+t.height+He),{left:o,top:r}},Na=(e,t,s)=>{const o=e.getBoundingClientRect(),r=t.getBoundingClientRect();return s==="bottom"?Ma(o,r):s==="right"?$a(o,r):s==="left"?Sa(o,r):Fa(o,r)},La=(e,t)=>{const s=(0,m.useRef)(null),o=(0,m.useRef)(null);return(0,m.useLayoutEffect)(()=>{if(e){const r=s.current,l=o.current;if(r&&l){const i=Na(r,l,t);r.style.left=`${i.left}px`,r.style.top=`${i.top}px`}}},[t,e]),{tooltipWrapperRef:s,toggleSourceRef:o}};var Ia=a(26509);const vn=m.forwardRef(({container:e=globalThis?.document?.body,...t},s)=>e?(0,Ia.createPortal)((0,n.jsx)(Q,{ref:s,...t}),e):null);vn.displayName="Portal";const Ra=(0,k.Ay)(Q)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:e})=>e?"revert":"none"};
`,Ea=({children:e,label:t,description:s,delay:o=500,position:r="top",id:l,...i})=>{const d=et(l),u=et(),{visible:p,...f}=Ta(o),{tooltipWrapperRef:g,toggleSourceRef:T}=La(p,r),A=m.cloneElement(e,{tabIndex:0,"aria-labelledby":t?d:void 0,"aria-describedby":s?d:void 0,...f});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vn,{children:(0,n.jsxs)(Ra,{id:d,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:g,visible:p,position:"absolute",...i,children:[p&&(0,n.jsx)(xt,{id:u,children:s}),(0,n.jsx)(q,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:t||s})]})}),(0,n.jsx)("span",{ref:T,children:A})]})},ka=(0,k.Ay)(ue)`
  > svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${dn}
`,Ft=m.forwardRef(({disabled:e,children:t,background:s="neutral0",...o},r)=>(0,n.jsx)(ka,{ref:r,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:s,borderColor:"neutral200",cursor:"pointer",...o,children:t}));Ft.displayName="BaseButton";const wa="tertiary",rt="secondary",Da=["S","M","L"],Oa=[wa,rt],Ba=m.forwardRef(({label:e,background:t,borderWidth:s,noBorder:o=!1,children:r,icon:l,disabled:i=!1,onClick:d,size:u=Da[0],"aria-label":p,variant:f=Oa[0],...g},T)=>{const A=M=>{!i&&d&&d(M)},v=(0,n.jsxs)(Cn,{"aria-disabled":i,background:i?"neutral150":t,borderWidth:o?0:s,justifyContent:"center",...g,ref:T,size:u,onClick:A,variant:f,children:[(0,n.jsx)(xt,{as:"span",children:e??p}),m.cloneElement(l||r,{"aria-hidden":!0,focusable:!1})]});return e?(0,n.jsx)(Ea,{label:e,children:v}):v}),Cn=(0,k.Ay)(Ft)`
  background-color: ${({theme:e,variant:t})=>{if(t===rt)return e.colors.primary100}};
  border-color: ${({theme:e,variant:t})=>t===rt?e.colors.primary200:e.colors.neutral200};
  height: ${({theme:e,size:t})=>e.sizes.button[t]};
  width: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    g,
    path {
      fill: ${({theme:e,variant:t})=>t===rt?e.colors.primary500:e.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:e,variant:t})=>t===rt?e.colors.primary600:e.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,Xd=(0,k.Ay)(ue)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Cn} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`,An=(0,k.Ay)(ta)`
  width: ${24/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`,Pa=({as:e="h2",label:t,searchLabel:s="",searchable:o=!1,onChange:r=()=>{},value:l="",onClear:i=()=>{},onSubmit:d=()=>{},id:u})=>{const[p,f]=(0,m.useState)(!1),g=_s(p),T=et(u),A=(0,m.useRef)(void 0),v=(0,m.useRef)(void 0);(0,m.useEffect)(()=>{p&&A.current&&A.current.focus(),g&&!p&&v.current&&v.current.focus()},[p,g]);const M=()=>{f(L=>!L)},U=L=>{i(L),A.current.focus()},$=L=>{L.relatedTarget?.id!==T&&f(!1)},N=L=>{L.key===Xs.ESCAPE&&f(!1)};return p?(0,n.jsxs)(Q,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,n.jsx)(na,{children:(0,n.jsx)(ja,{name:"searchbar",value:l,onChange:r,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:N,ref:A,onBlur:$,onClear:U,onSubmit:d,clearLabel:"Clear",size:"S",children:s})}),(0,n.jsx)(Q,{paddingLeft:2,paddingTop:4,children:(0,n.jsx)(An,{})})]}):(0,n.jsxs)(Q,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,n.jsxs)(ue,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,n.jsx)(q,{variant:"beta",as:e,children:t}),o&&(0,n.jsx)(Ba,{ref:v,onClick:M,label:s,icon:(0,n.jsx)(yt.A,{})})]}),(0,n.jsx)(Q,{paddingTop:4,children:(0,n.jsx)(An,{})})]})},Wa=({children:e,spacing:t=2,horizontal:s=!1,...o})=>(0,n.jsx)(Q,{paddingTop:2,paddingBottom:4,children:(0,n.jsx)(ue,{as:"ol",gap:t,direction:s?"row":"column",alignItems:s?"center":"stretch",...o,children:m.Children.map(e,(r,l)=>(0,n.jsx)("li",{children:r},l))})});var Nt=a(28556);const jn=(0,k.Ay)(ue)`
  border: none;
  padding: 0;
  background: transparent;
`,za=k.Ay.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Ua=({collapsable:e=!1,label:t,onClick:s=()=>{},ariaExpanded:o,ariaControls:r})=>e?(0,n.jsxs)(jn,{as:"button",onClick:s,"aria-expanded":o,"aria-controls":r,textAlign:"left",children:[(0,n.jsx)(Q,{paddingRight:1,children:(0,n.jsx)(q,{variant:"sigma",textColor:"neutral600",children:t})}),e&&(0,n.jsx)(za,{rotated:o,children:(0,n.jsx)(Nt.A,{"aria-hidden":!0})})]}):(0,n.jsx)(jn,{children:(0,n.jsx)(Q,{paddingRight:1,children:(0,n.jsx)(q,{variant:"sigma",textColor:"neutral600",children:t})})}),Va=(0,k.Ay)(ue)`
  border-radius: ${({theme:e,size:t})=>t==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:t})=>t.sizes.badge[e]};
`,Za=({active:e=!1,size:t="M",textColor:s="neutral600",backgroundColor:o="neutral150",children:r,minWidth:l=5,...i})=>{const d=t==="S"?1:2;return(0,n.jsx)(Va,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:l,paddingLeft:d,paddingRight:d,background:e?"primary200":o,size:t,...i,children:(0,n.jsx)(q,{variant:"sigma",textColor:e?"primary600":s,children:r})})},Ha=(0,k.Ay)(Q)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,Ga=({collapsable:e=!1,label:t,badgeLabel:s,children:o,id:r})=>{const[l,i]=(0,m.useState)(!0),d=et(r),u=()=>{i(p=>!p)};return(0,n.jsxs)(ue,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(Ha,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsxs)(Q,{position:"relative",paddingRight:s?6:0,children:[(0,n.jsx)(Ua,{onClick:u,ariaExpanded:l,ariaControls:d,collapsable:e,label:t}),s&&(0,n.jsx)(Za,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:s})]})}),(!e||l)&&(0,n.jsx)("ol",{id:d,children:m.Children.map(o,(p,f)=>(0,n.jsx)("li",{children:p},f))})]})},Ya=(0,k.Ay)(Q)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,Ka=k.Ay.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,Qa=k.Ay.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Xa=({label:e,children:t,id:s})=>{const[o,r]=(0,m.useState)(!0),l=et(s),i=()=>{r(d=>!d)};return(0,n.jsxs)(Q,{children:[(0,n.jsx)(Ya,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsx)(ue,{justifyContent:"space-between",children:(0,n.jsxs)(Ka,{onClick:i,"aria-expanded":o,"aria-controls":l,children:[(0,n.jsx)(Qa,{rotated:o,children:(0,n.jsx)(Nt.A,{"aria-hidden":!0})}),(0,n.jsx)(Q,{paddingLeft:2,children:(0,n.jsx)(q,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),o&&(0,n.jsx)("ul",{id:l,children:m.Children.map(t,(d,u)=>(0,n.jsx)("li",{children:d},u))})]})};var Ja=a(47576);const Lt=m.forwardRef(({href:e,rel:t="noreferrer noopener",target:s="_self",disabled:o=!1,isExternal:r=!1,...l},i)=>(0,n.jsx)(Q,{as:"a",ref:i,target:r?"_blank":s,rel:r?t:void 0,href:o?"#":e,"aria-disabled":o,cursor:"pointer",...l}));Lt.displayName="BaseLink";const qa=(0,k.Ay)(Q)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${q} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,Tn=(0,k.Ay)(Ja.A)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  }
`,_a=k.Ay.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,Mn=m.forwardRef(({children:e,icon:t=null,withBullet:s=!1,as:o=Lt,isSubSectionChild:r=!1,...l},i)=>(0,n.jsxs)(qa,{as:o,icon:t,background:"neutral100",paddingLeft:r?9:7,paddingBottom:2,paddingTop:2,ref:i,...l,children:[(0,n.jsxs)(ue,{children:[t?(0,n.jsx)(_a,{children:t}):(0,n.jsx)(Tn,{}),(0,n.jsx)(Q,{paddingLeft:2,children:(0,n.jsx)(q,{as:"span",children:e})})]}),s&&(0,n.jsx)(Q,{as:ue,paddingRight:4,children:(0,n.jsx)(Tn,{$active:!0})})]}));var eo=a(44010);const to=(0,k.Ay)(Lt)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${dn};
`,bt=m.forwardRef(({children:e,href:t,disabled:s=!1,startIcon:o,endIcon:r,isExternal:l=!0,...i},d)=>(0,n.jsxs)(to,{ref:d,href:t,disabled:s,isExternal:l,...i,children:[o,(0,n.jsx)(q,{textColor:s?"neutral600":"primary600",children:e}),r,t&&!r&&l&&(0,n.jsx)(eo.A,{})]}));bt.displayName="Link";const $n=()=>(0,n.jsx)(Q,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,n.jsx)(q,{variant:"pi",textColor:"neutral500",children:"/"})});$n.displayName="Divider";const no=(0,k.Ay)(ue)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,Sn=({label:e,children:t,...s})=>{const o=m.Children.toArray(t);return(0,n.jsx)(Q,{"aria-label":e,...s,children:(0,n.jsx)(no,{as:"ol",children:m.Children.map(o,(r,l)=>{const i=o.length>1&&l+1<o.length;return(0,n.jsxs)(ue,{inline:!0,as:"li",children:[r,i&&(0,n.jsx)($n,{})]})})})})};Sn.displayName="Breadcrumbs";const Fn=({children:e,isCurrent:t=!1,...s})=>(0,n.jsx)(Q,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,n.jsx)(q,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"normal","aria-current":t,...s,children:e})});Fn.displayName="Crumb";var Be=a(96234),so=a(4702),ao=a(16034);const It="success-light",Rt="danger-light",vt="default",it="tertiary",lt="secondary",Nn="danger",Ln="success",Et="ghost",kt=[It,Rt],oo=[vt,it,lt,Nn,Ln,Et,...kt],ro=["S","M","L"],Me=e=>e===It||e===Rt?`${e.substring(0,e.lastIndexOf("-"))}`:e===it?"neutral":e===vt||e===lt||oo.every(t=>t!==e)?"primary":`${e}`,In=({theme:e})=>`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${q} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `,io=({theme:e,variant:t})=>[...kt,lt].includes(t)?`
      background-color: ${e.colors.neutral0};
    `:t===it?`
      background-color: ${e.colors.neutral100};
    `:t===Et?`
      background-color: ${e.colors.neutral100};
    `:t===vt?`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:`
    border: 1px solid ${e.colors[`${Me(t)}500`]};
    background: ${e.colors[`${Me(t)}500`]};
  `,lo=({theme:e,variant:t})=>[...kt,lt].includes(t)?`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${Me(t)}600`]};
      ${q} {
        color: ${e.colors[`${Me(t)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${Me(t)}600`]};
        }
      }
    `:t===it?`
      background-color: ${e.colors.neutral150};
    `:`
    border: 1px solid ${e.colors[`${Me(t)}600`]};
    background: ${e.colors[`${Me(t)}600`]};
  `,co=({theme:e,variant:t})=>{switch(t){case Rt:case It:case lt:return`
          border: 1px solid ${e.colors[`${Me(t)}200`]};
          background: ${e.colors[`${Me(t)}100`]};
          ${q} {
            color: ${e.colors[`${Me(t)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${Me(t)}700`]};
            }
          }
        `;case it:return`
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${q} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;case Et:return`
        border: 1px solid transparent;
        background: transparent;

        ${q} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;case Ln:case Nn:return`
          border: 1px solid ${e.colors[`${Me(t)}600`]};
          background: ${e.colors[`${Me(t)}600`]};
          ${q} {
            color: ${e.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `}},uo=(0,k.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,mo=(0,k.Ay)(ao.A)`
  animation: ${uo} 2s infinite linear;
  will-change: transform;
`,po=(0,k.Ay)(Ft)`
  height: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${In}

    &:active {
      ${In}
    }
  }

  &:hover {
    ${io}
  }

  &:active {
    ${lo}
  }

  ${co}
`,Rn=m.forwardRef(({variant:e=vt,startIcon:t,endIcon:s,disabled:o=!1,children:r,onClick:l,size:i=ro[0],loading:d=!1,fullWidth:u=!1,...p},f)=>{const g=o||d,T=A=>{!g&&l&&l(A)};return(0,n.jsxs)(po,{ref:f,"aria-disabled":g,disabled:g,size:i,variant:e,onClick:T,fullWidth:u,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:u,justifyContent:u?"center":void 0,paddingLeft:4,paddingRight:4,width:u?"100%":void 0,...p,children:[(t||d)&&(0,n.jsx)(Q,{"aria-hidden":!0,children:d?(0,n.jsx)(mo,{}):t}),(0,n.jsx)(q,{variant:i==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:r}),s&&(0,n.jsx)(ue,{"aria-hidden":!0,children:s})]})});Rn.displayName="Button";const go=Be.bL,fo=(0,m.forwardRef)(({size:e,endIcon:t=(0,n.jsx)(Nt.A,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...s},o)=>(0,n.jsx)(Be.l9,{asChild:!0,children:(0,n.jsx)(Rn,{ref:o,type:"button",variant:"ghost",endIcon:t,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...s})})),ho=(0,m.forwardRef)(({children:e,intersectionId:t,popoverPlacement:s="bottom-start",...o},r)=>{const[l,i]=s.split("-");return(0,n.jsx)(Be.ZL,{children:(0,n.jsx)(Be.UC,{align:i,side:l,loop:!0,asChild:!0,children:(0,n.jsxs)(En,{ref:r,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...o,children:[e,(0,n.jsx)(Q,{id:t,width:"100%",height:"1px"})]})})})}),En=(0,k.Ay)(ue)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,yo=({onSelect:e,disabled:t=!1,...s})=>(0,n.jsx)(Be.q7,{asChild:!0,onSelect:e,disabled:t,children:s.isLink||s.isExternal?(0,n.jsx)(xo,{color:"neutral800",...s,isExternal:s.isExternal??!1,children:(0,n.jsx)(q,{children:s.children})}):(0,n.jsx)(wn,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...s,children:(0,n.jsx)(q,{children:s.children})})}),kn=({theme:e})=>(0,k.AH)`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${q} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${q} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,wn=(0,k.Ay)(ue)`
  ${kn}
`,xo=(0,k.Ay)(bt)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>le(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${kn}
`,Jd=(0,m.forwardRef)((e,t)=>(0,n.jsx)(Be.JU,{asChild:!0,children:(0,n.jsx)(bo,{ref:t,variant:"sigma",textColor:"neutral600",...e})})),bo=(0,k.Ay)(q)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,qd=Be.Pb,_d=(0,m.forwardRef)(({disabled:e=!1,...t},s)=>(0,n.jsx)(Be.ZP,{asChild:!0,disabled:e,children:(0,n.jsxs)(vo,{ref:s,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[(0,n.jsx)(q,{children:t.children}),(0,n.jsx)(Co,{height:12,width:12})]})})),vo=(0,k.Ay)(wn)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,Co=(0,k.Ay)(so.A)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,ec=(0,m.forwardRef)((e,t)=>(0,n.jsx)(Be.ZL,{children:(0,n.jsx)(Be.G5,{sideOffset:8,asChild:!0,children:(0,n.jsx)(En,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),Ao=go,jo=fo,To=ho,Mo=yo,tc=null,nc=null,sc=null,ac=null;var $o=a(75516),So=a(66159),Fo=a(28763),No=a(52230),Dn=a(95065),Lo=a(59148),Io=a(83461),Ro=a(94744),Eo=a(59004),ko=a(13318),wo=a(18904),Do=a(95289),Oo=a(38697),Bo=a(15691),Po=a(83609),Wo=a(40339),zo=a(44030),Uo=a(40463),Vo=a(59385),Zo=a(24685),Ho=a(13333),Go=a(69999),Yo=a(77938),Ko=a(66804),Qo=a(28816),Xo=a(88938),Jo=a(10034),qo=a(73568),_o=a(58241),er=a(90808),tr=a(24304),nr=a(91325),sr=a(44169),ar=a(47213),or=a(2664),rr=a(97219),ir=a(34610),lr=a(56349),dr=a(69840),cr=a(14027),ur=a(2570),mr=a(21291),pr=a(4043),gr=a(8046),fr=a(29468),hr=a(58037),yr=a(90817),xr=a(80141),br=a(94013),vr=a(61983),Cr=a(32598),Ar=a(36005),jr=a(88706),Tr=a(51303),Mr=a(99136),$r=a(97937),Sr=a(4219),Fr=a(79265),Nr=a(29325),Lr=a(70983),Ir=a(61271),Rr=a(19404),Er=a(98266),kr=a(50350),wr=a(36625),Dr=a(41564),Or=a(423),Br=a(95350),Pr=a(43400),On=a(27060),Bn=a(83551),Pn=a(25394),Wr=a(32782),zr=a(50660),Ur=a(6299),Vr=a(79195),Zr=a(15196),Hr=a(94624),Wn=a(19143),zn=a(72734),Un=a(37218),Gr=a(46905),Yr=a(54063),Kr=a(87863),Qr=a(31708),Xr=a(12233),Jr=a(73283),qr=a(26140),_r=a(26190),ei=a(7187),ti=a(47449),Ge=a(31127),ni=a(41670),si=a(40547),ai=a(55087),oi=a(71597),ri=a(25942),ii=a(68110),li=a(84395),di=a(99074),ci=a(47658),ui=a(22019),mi=a(58314),pi=a(83620),gi=a(31317),fi=a(3669),hi=a(86173),yi=a(47605),xi=a(35127),bi=a(71222),vi=a(17304),Ci=a(59267),Ai=a(88719),ji=a(61857),Ti=a(33950),Mi=a(17971),$i=a(70552),Si=a(41686),Fi=a(60261),Ni=a(7138),Li=a(32310),Ii=a(7954),Ri=a(69816),Ei=a(82083),ki=a(50336),dt=a(80868);const wi=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 34 25",...e,children:[(0,n.jsx)("rect",{width:33,height:23,x:.5,y:1,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M18.901 9.828a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M19.703 8.785a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.814.814 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 13.488a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M19.703 12.445a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.307 1.307 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 17.247a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M19.703 16.204a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.698 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.313-.477-.313-.482-.002ZM15.075 9.842a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M15.876 8.8a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 13.503a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M15.876 12.46a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 17.261a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,n.jsx)("path",{fill:"#0C75AF",d:"M15.876 16.218a.81.81 0 0 1-.512.749.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.808.808 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.293 1.293 0 0 0-.119 1.487c.283.468.831.698 1.365.596.596-.113 1.011-.664 1.02-1.258.006-.311-.477-.311-.482 0Z"})]}),Di=wi;var Oi=a(45673);const Bi=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...e,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#4945FF",stroke:"#4945FF",rx:2.5}),(0,n.jsx)("path",{fill:"#fff",d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"})]}),Vn=Bi;var Pi=a(86040),Ct=a(43023),Wi=a(67152),zi=a(48313),Zn=a(35800),wt=a(26085),Hn=a(3177);const Ui=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...e,children:[(0,n.jsx)("path",{fill:"#FDF4DC",stroke:"#FAE7B9",d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"}),(0,n.jsx)("path",{fill:"#D9822F",d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"})]}),Vi=Ui;var Zi=a(39915);const Hi=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...e,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,n.jsx)("path",{fill:"#0C75AF",fillRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",clipRule:"evenodd"})]}),Gi=Hi,Yi=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...e,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#0C75AF",stroke:"#0C75AF",rx:2.5}),(0,n.jsx)("path",{fill:"#fff",d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"})]}),Ki=Yi;var Gn=a(65414),Qi=a(78519);const Xi=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...e,children:[(0,n.jsx)("path",{fill:"#181826",d:"m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"}),(0,n.jsx)("path",{fill:"#181826",d:"m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"})]}),Ji=Xi;var qi=a(28312),_i=a(39423),ze=a(39404),C=a(20406),Dt=a(56336),w=a(2600),el=a(94710),Yn=a(48940),tl=a(14311),qe=a(82437),nl=a(412),Kn=a(89102),sl=a(5409),At=a(21835),Qn=a(35336),al=a(71547),j=a(12083),ol=a(17024),H=a(58692),Ot=a(71210),Xn=a(70653),rl=a(5790),Jn=a(35223),il=a(45635);const c=e=>`${C.p}.${e}`,qn=(0,m.createContext)(),Ue=()=>(0,m.useContext)(qn),_n=m.createContext(),_e=()=>(0,m.useContext)(_n),ll=()=>{const{components:e,componentsGroupedByCategory:t,contentTypes:s,isInDevelopmentMode:o,sortedContentTypesList:r,modifiedData:l,initialData:i}=Ue(),d=(0,F.hN)(),{trackUsage:u}=(0,F.z1)(),[p,f]=(0,m.useState)(""),{onOpenModalCreateSchema:g,onOpenModalEditCategory:T}=_e(),{locale:A}=(0,K.A)(),{startsWith:v}=(0,F.U2)(A,{sensitivity:"base"}),M=(0,F.QM)(A,{sensitivity:"base"}),U=!Object.keys(s).some(V=>s[V].isTemporary===!0)&&!Object.keys(e).some(V=>e[V].isTemporary===!0)&&Dt(l,i),$=()=>{U?(u("willCreateContentType"),g({modalType:"contentType",kind:"collectionType",actionType:"create",forTarget:"contentType"})):P()},N=()=>{U?(u("willCreateSingleType"),g({modalType:"contentType",kind:"singleType",actionType:"create",forTarget:"contentType"})):P()},L=()=>{U?(u("willCreateComponent"),g({modalType:"component",kind:null,actionType:"create",forTarget:"component"})):P()},P=()=>{d({type:"info",message:{id:c("notification.info.creating.notSaved"),defaultMessage:"Please save your work before creating a new collection type or component"}})},ee=Object.entries(t).map(([V,je])=>({name:V,title:V,isEditable:o,onClickEdit(te,Se){te.stopPropagation(),U?T(Se.name):P()},links:je.map(te=>({name:te.uid,to:`/plugins/${C.p}/component-categories/${V}/${te.uid}`,title:te.schema.displayName})).sort((te,Se)=>M.compare(te.title,Se.title))})).sort((V,je)=>M.compare(V.title,je.title)),he=r.filter(V=>V.visible);return{menu:[{name:"models",title:{id:`${c("menu.section.models.name")}`,defaultMessage:"Collection Types"},customLink:o&&{id:`${c("button.model.create")}`,defaultMessage:"Create new collection type",onClick:$},links:he.filter(V=>V.kind==="collectionType")},{name:"singleTypes",title:{id:`${c("menu.section.single-types.name")}`,defaultMessage:"Single Types"},customLink:o&&{id:`${c("button.single-types.create")}`,defaultMessage:"Create new single type",onClick:N},links:he.filter(V=>V.kind==="singleType")},{name:"components",title:{id:`${c("menu.section.components.name")}`,defaultMessage:"Components"},customLink:o&&{id:`${c("button.component.create")}`,defaultMessage:"Create a new component",onClick:L},links:ee}].map(V=>V.links.some(te=>Array.isArray(te.links))?{...V,links:V.links.map(te=>{const Se=te.links.filter(be=>v(be.title,p));return Se.length===0?null:{...te,links:Se.sort((be,de)=>M.compare(be.title,de.title))}}).filter(Boolean)}:{...V,links:V.links.filter(te=>v(te.title,p)).sort((te,Se)=>M.compare(te.title,Se.title))}),searchValue:p,onSearchChange:f}},dl=()=>{const{menu:e,searchValue:t,onSearchChange:s}=ll(),{formatMessage:o}=(0,K.A)();return(0,n.jsxs)(Qs,{ariaLabel:o({id:`${c("plugin.name")}`,defaultMessage:"Content-Types Builder"}),children:[(0,n.jsx)(Pa,{searchable:!0,value:t,onClear:()=>s(""),onChange:r=>s(r.target.value),label:o({id:`${c("plugin.name")}`,defaultMessage:"Content-Types Builder"}),searchLabel:o({id:"global.search",defaultMessage:"Search"})}),(0,n.jsx)(Wa,{children:e.map(r=>(0,n.jsxs)(m.Fragment,{children:[(0,n.jsx)(Ga,{label:o({id:r.title.id,defaultMessage:r.title.defaultMessage}),collapsable:!0,badgeLabel:r.links.length.toString(),children:r.links.map(l=>l.links?(0,n.jsx)(Xa,{label:ze(l.title),children:l.links.map(i=>(0,n.jsx)(Mn,{as:on.k2,to:i.to,active:i.active,isSubSectionChild:!0,children:ze(o({id:i.name,defaultMessage:i.title}))},i.name))},l.name):(0,n.jsx)(Mn,{as:on.k2,to:l.to,active:l.active,children:ze(o({id:l.name,defaultMessage:l.title}))},l.name))}),r.customLink&&(0,n.jsx)(y.a,{paddingLeft:7,children:(0,n.jsx)(B.Q,{onClick:r.customLink.onClick,startIcon:(0,n.jsx)(D.I,{as:Ge.A,width:(0,F.a8)(8),height:(0,F.a8)(8)}),marginTop:2,children:o({id:r.customLink.id,defaultMessage:r.customLink.defaultMessage})})})]},r.name))})]})},es=e=>e.kind==="collectionType"&&(e.restrictRelationsTo===null||Array.isArray(e.restrictRelationsTo)&&e.restrictRelationsTo.length>0),Bt=(e,t)=>e.find(({name:s})=>s===t),cl=[{label:"All",children:[{label:"images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)",value:"images"},{label:"videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)",value:"videos"},{label:"audios (MP3, WAV, OGG)",value:"audios"},{label:"files (CSV, ZIP, PDF, Excel, JSON, ...)",value:"files"}]}],ul=({intlLabel:e,name:t,onChange:s,value:o=null})=>{const{formatMessage:r}=(0,K.A)(),l=o===null||o?.length===0?r({id:"global.none",defaultMessage:"None"}):[...o].sort().map(d=>ze(d)).join(", "),i=e.id?r({id:e.id,defaultMessage:e.defaultMessage}):t;return(0,n.jsx)(O.B,{id:"select1",label:i,customizeContent:()=>l,onChange:d=>{d.length>0?s({target:{name:t,value:d,type:"allowed-types-select"}}):s({target:{name:t,value:null,type:"allowed-types-select"}})},options:cl,value:o||[]})},ts={biginteger:dt.A,blocks:Di,boolean:Oi.A,collectionType:Vn,component:Pi.A,contentType:Vn,date:Ct.A,datetime:Ct.A,decimal:dt.A,dynamiczone:Wi.A,email:zi.A,enum:Zn.A,enumeration:Zn.A,file:wt.A,files:wt.A,float:dt.A,integer:dt.A,json:Hn.A,JSON:Hn.A,media:wt.A,number:dt.A,password:Vi,relation:Zi.A,richtext:Gi,singleType:Ki,string:Gn.A,text:Gn.A,time:Ct.A,timestamp:Ct.A,uid:Qi.A},ml=(0,k.Ay)(y.a)`
  svg {
    height: 100%;
    width: 100%;
  }
`,ct=({type:e,customField:t=null,...s})=>{const o=(0,F.AC)();let r=ts[e];if(t){const i=o.get(t)?.icon;i&&(r=i)}return ts[e]?(0,n.jsx)(ml,{height:(0,F.a8)(24),width:(0,F.a8)(32),shrink:0,...s,"aria-hidden":!0,children:(0,n.jsx)(y.a,{as:r})}):null},ns=(0,k.Ay)(y.a)`
  width: 100%;
  height: 100%;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
    border: 1px solid ${({theme:e})=>e.colors.primary200};
  }
`,pl=[],gl=()=>(0,n.jsx)(b.s,{grow:1,justifyContent:"flex-end",children:(0,n.jsxs)(b.s,{gap:1,hasRadius:!0,background:"alternative100",padding:`${2/16}rem ${4/16}rem`,children:[(0,n.jsx)(D.I,{width:`${10/16}rem`,height:`${10/16}rem`,as:Ji,color:"alternative600"}),(0,n.jsx)(S.o,{textColor:"alternative600",variant:"sigma",children:"New"})]})}),fl=({type:e="text"})=>{const{formatMessage:t}=(0,K.A)(),{onClickSelectField:s}=_e(),o=()=>{s({attributeType:e,step:e==="component"?"1":null})};return(0,n.jsx)(ns,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:o,children:(0,n.jsxs)(b.s,{children:[(0,n.jsx)(ct,{type:e}),(0,n.jsxs)(y.a,{paddingLeft:4,width:"100%",children:[(0,n.jsxs)(b.s,{justifyContent:"space-between",children:[(0,n.jsx)(S.o,{fontWeight:"bold",children:t({id:c(`attribute.${e}`),defaultMessage:e})}),pl.includes(e)&&(0,n.jsx)(gl,{})]}),(0,n.jsx)(b.s,{children:(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:t({id:c(`attribute.${e}.description`),defaultMessage:"A type for modeling data"})})})]})]})})},hl=({attributes:e})=>(0,n.jsx)(z.r,{tagName:"button",children:(0,n.jsx)(b.s,{direction:"column",alignItems:"stretch",gap:8,children:e.map((t,s)=>(0,n.jsx)(_.x,{gap:3,children:t.map(o=>(0,n.jsx)(ne.E,{col:6,children:(0,n.jsx)(fl,{type:o})},o))},s))})}),yl=({customFieldUid:e,customField:t})=>{const{type:s,intlLabel:o,intlDescription:r}=t,{formatMessage:l}=(0,K.A)(),{onClickSelectCustomField:i}=_e(),d=()=>{i({attributeType:s,customFieldUid:e})};return(0,n.jsx)(ns,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:d,children:(0,n.jsxs)(b.s,{children:[(0,n.jsx)(ct,{type:s,customField:e}),(0,n.jsxs)(y.a,{paddingLeft:4,children:[(0,n.jsx)(b.s,{children:(0,n.jsx)(S.o,{fontWeight:"bold",children:l(o)})}),(0,n.jsx)(b.s,{children:(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:l(r)})})]})]})})},xl=(0,k.Ay)(y.a)`
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${e.colors.neutral150} 100%)`};
  opacity: 0.33;
`,bl=()=>(0,n.jsx)(b.s,{wrap:"wrap",gap:4,children:[...Array(4)].map((e,t)=>(0,n.jsx)(xl,{height:"138px",width:"375px",hasRadius:!0},`empty-card-${t}`))}),vl=()=>{const{formatMessage:e}=(0,K.A)();return(0,n.jsxs)(y.a,{position:"relative",children:[(0,n.jsx)(bl,{}),(0,n.jsx)(y.a,{position:"absolute",top:6,width:"100%",children:(0,n.jsxs)(b.s,{alignItems:"center",justifyContent:"center",direction:"column",children:[(0,n.jsx)(D.I,{as:qi.A,color:"",width:"160px",height:"88px"}),(0,n.jsx)(y.a,{paddingTop:6,paddingBottom:4,children:(0,n.jsxs)(y.a,{textAlign:"center",children:[(0,n.jsx)(S.o,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:c("modalForm.empty.heading"),defaultMessage:"Nothing in here yet."})}),(0,n.jsx)(y.a,{paddingTop:4,children:(0,n.jsx)(S.o,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:c("modalForm.empty.sub-heading"),defaultMessage:"Find what you are looking for through a wide range of extensions."})})})]})}),(0,n.jsx)(re.z,{to:`/marketplace?${sl.stringify({categories:["Custom fields"]})}`,variant:"secondary",startIcon:(0,n.jsx)(Ge.A,{}),children:e({id:c("modalForm.empty.button"),defaultMessage:"Add custom fields"})})]})})]})},Cl=()=>{const{formatMessage:e}=(0,K.A)(),t=(0,F.AC)(),s=Object.entries(t.getAll());if(!s.length)return(0,n.jsx)(vl,{});const o=s.sort((r,l)=>r[1].name>l[1].name?1:-1);return(0,n.jsx)(z.r,{tagName:"button",children:(0,n.jsxs)(b.s,{direction:"column",alignItems:"stretch",gap:3,children:[(0,n.jsx)(_.x,{gap:3,children:o.map(([r,l])=>(0,n.jsx)(ne.E,{col:6,children:(0,n.jsx)(yl,{customFieldUid:r,customField:l},r)},r))}),(0,n.jsx)(bt,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",isExternal:!0,children:e({id:c("modalForm.tabs.custom.howToLink"),defaultMessage:"How to add custom fields"})})]})})},Al=({attributes:e,forTarget:t,kind:s})=>{const{formatMessage:o}=(0,K.A)(),r=c("modalForm.tabs.default"),l=c("modalForm.tabs.custom"),i=t.includes("component")?"component":s,d=c(`modalForm.sub-header.chooseAttribute.${i}`);return(0,n.jsx)(We.c,{padding:7,children:(0,n.jsxs)(pe.f,{label:o({id:c("modalForm.tabs.label"),defaultMessage:"Default and Custom types tabs"}),id:"attribute-type-tabs",variant:"simple",children:[(0,n.jsxs)(b.s,{justifyContent:"space-between",children:[(0,n.jsx)(S.o,{variant:"beta",as:"h2",children:o({id:d,defaultMessage:"Select a field"})}),(0,n.jsxs)(ce.t,{children:[(0,n.jsx)(ce.o,{children:o({id:r,defaultMessage:"Default"})}),(0,n.jsx)(ce.o,{children:o({id:l,defaultMessage:"Custom"})})]})]}),(0,n.jsx)(y.a,{paddingBottom:6,children:(0,n.jsx)(ae.c,{})}),(0,n.jsxs)(ie.T,{children:[(0,n.jsx)(ie.K,{children:(0,n.jsx)(hl,{attributes:e})}),(0,n.jsx)(ie.K,{children:(0,n.jsx)(Cl,{})})]})]})})},jl=({intlLabel:e,name:t,options:s,onChange:o,value:r=null})=>{const{formatMessage:l}=(0,K.A)(),i=e.id?l({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):t,d=u=>{let p="";u==="true"&&(p=!0),u==="false"&&(p=!1),o({target:{name:t,value:p,type:"select-default-boolean"}})};return(0,n.jsx)(oe.l,{label:i,id:t,name:t,onChange:d,value:(r===null?"":r).toString(),children:s.map(({metadatas:{intlLabel:u,disabled:p,hidden:f},key:g,value:T})=>(0,n.jsx)(Re.c,{value:T,disabled:p,hidden:f,children:u.defaultMessage},g))})},Tl=(0,k.Ay)(b.s)`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,Ee.id)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    will-change: transform, opacity;
    background: ${({theme:e})=>e.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({theme:e})=>e.colors.neutral0};
      width: ${({theme:e})=>e.spaces[5]};
      height: ${({theme:e})=>e.spaces[5]};
      border: solid 1px ${({theme:e})=>e.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({theme:e})=>e.spaces[3]};
        height: ${({theme:e})=>e.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({theme:e})=>e.colors.primary100};
    ${S.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    .checkmark {
      border: solid 1px ${({theme:e})=>e.colors.primary600};
      &::after {
        background: ${({theme:e})=>e.colors.primary600};
        transform: scale(1);
      }
    }
  }
`,Pt=({intlLabel:e,name:t,onChange:s,radios:o=[],value:r})=>{const{formatMessage:l}=(0,K.A)();return(0,n.jsxs)(b.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"neutral800",htmlFor:t,as:"label",children:l(e)}),(0,n.jsx)(Tl,{gap:4,alignItems:"stretch",children:o.map(i=>(0,n.jsxs)("label",{htmlFor:i.value.toString(),className:"container",children:[(0,n.jsx)("input",{id:i.value.toString(),name:t,className:"option-input",checked:i.value===r,value:i.value,onChange:s,type:"radio"},i.value),(0,n.jsx)(y.a,{className:"option",padding:4,children:(0,n.jsxs)(b.s,{children:[(0,n.jsx)(y.a,{paddingRight:4,children:(0,n.jsx)("span",{className:"checkmark"})}),(0,n.jsxs)(b.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(S.o,{fontWeight:"bold",children:l(i.title)}),(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:l(i.description)})]})]})})]},i.value))})]})},Ml=({onChange:e,name:t,intlLabel:s,...o})=>{const r=l=>{const i=l.target.value!=="false";e({target:{name:t,value:i,type:"boolean-radio-group"}})};return(0,n.jsx)(Pt,{...o,name:t,onChange:r,intlLabel:s})},$l=({error:e,intlLabel:t,modifiedData:s,name:o,onChange:r,value:l=null})=>{const{formatMessage:i}=(0,K.A)(),[d,u]=(0,m.useState)(!!l||l===0),p=t.id?i({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):o,f=s.type==="biginteger"?"text":"number",g=!s.type,T=e?i({id:e,defaultMessage:e}):"";return(0,n.jsxs)(b.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(xe.S,{id:o,name:o,onValueChange:A=>{r({target:{name:o,value:A?f==="text"?"0":0:null}}),u(U=>!U)},value:d,children:p}),d&&(0,n.jsx)(y.a,{paddingLeft:6,style:{maxWidth:"200px"},children:f==="text"?(0,n.jsx)(Te.k,{label:"","aria-label":p,disabled:g,error:T,id:o,name:o,onChange:r,value:l===null?"":l}):(0,n.jsx)(ft.Q,{"aria-label":p,disabled:g,error:T,id:o,name:o,onValueChange:A=>{r({target:{name:o,value:A,type:f}})},value:l||0})})]})},Sl=({onChange:e,...t})=>{const s=(0,F.hN)(),o=r=>{s({type:"info",message:{id:c("contentType.kind.change.warning"),defaultMessage:"You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."}}),e(r)};return(0,n.jsx)(Pt,{...t,onChange:o})},Fl=({description:e,disabled:t=!1,intlLabel:s,isCreating:o,name:r,onChange:l,value:i=!1})=>{const{formatMessage:d}=(0,K.A)(),[u,p]=(0,m.useState)(!1),f=s.id?d({id:s.id,defaultMessage:s.defaultMessage},{...s.values}):r,g=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",T=()=>p(M=>!M),A=()=>{l({target:{name:r,value:!1}}),T()},v=({target:{checked:M}})=>{if(!M&&!o){T();return}l({target:{name:r,value:M}})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(xe.S,{checked:i,disabled:t,hint:g,name:r,onChange:v,children:f}),(0,n.jsx)(F.TM,{isOpen:u,onToggleDialog:T,onConfirm:A,bodyText:{id:c("popUpWarning.draft-publish.message"),defaultMessage:"If you disable the draft & publish, your drafts will be deleted."},leftButtonText:{id:"components.popUpWarning.button.cancel",defaultMessage:"No, cancel"},rightButtonText:{id:c("popUpWarning.draft-publish.button.confirm"),defaultMessage:"Yes, disable"}})]})},Nl=({categoryName:e,deleteCategory:t,deleteComponent:s,deleteContentType:o,isAttributeModal:r,isCustomFieldModal:l,isComponentAttribute:i,isComponentToDzModal:d,isContentTypeModal:u,isCreatingComponent:p,isCreatingComponentAttribute:f,isCreatingComponentInDz:g,isCreatingComponentWhileAddingAField:T,isCreatingContentType:A,isCreatingDz:v,isComponentModal:M,isDzAttribute:U,isEditingAttribute:$,isEditingCategory:N,isInFirstComponentStep:L,onSubmitAddComponentAttribute:P,onSubmitAddComponentToDz:ee,onSubmitCreateContentType:he,onSubmitCreateComponent:$e,onSubmitCreateDz:V,onSubmitEditAttribute:je,onSubmitEditCategory:te,onSubmitEditComponent:Se,onSubmitEditContentType:be,onSubmitEditCustomFieldAttribute:de,onSubmitEditDz:Ve,onClickFinish:ye})=>{const{formatMessage:J}=(0,K.A)();return d?g?(0,n.jsx)(se.$,{variant:"secondary",type:"submit",onClick:I=>{I.preventDefault(),ee(I,!0)},startIcon:(0,n.jsx)(Ge.A,{}),children:J({id:c("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"})}):(0,n.jsx)(se.$,{variant:"default",type:"submit",onClick:I=>{I.preventDefault(),ee(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):r&&U&&!v?(0,n.jsx)(se.$,{variant:"default",type:"submit",onClick:I=>{I.preventDefault(),ye(),Ve(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):r&&U&&v?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(se.$,{variant:"secondary",type:"submit",onClick:I=>{I.preventDefault(),V(I,!0)},startIcon:(0,n.jsx)(Ge.A,{}),children:J({id:c("form.button.add-components-to-dynamiczone"),defaultMessage:"Add components to the zone"})})}):r&&i?L?(0,n.jsx)(se.$,{variant:"secondary",type:"submit",onClick:I=>{I.preventDefault(),P(I,!0)},children:J(f?{id:c("form.button.configure-component"),defaultMessage:"Configure the component"}:{id:c("form.button.select-component"),defaultMessage:"Configure the component"})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{variant:"secondary",type:"submit",onClick:I=>{I.preventDefault(),P(I,!0)},startIcon:(0,n.jsx)(Ge.A,{}),children:J(T?{id:c("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"}:{id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(se.$,{variant:"default",type:"button",onClick:I=>{I.preventDefault(),ye(),P(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):r&&!i&&!U?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:$?"button":"submit",variant:"secondary",onClick:I=>{I.preventDefault(),je(I,!0)},startIcon:(0,n.jsx)(Ge.A,{}),children:J({id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(se.$,{type:$?"submit":"button",variant:"default",onClick:I=>{I.preventDefault(),ye(),je(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):u?(0,n.jsxs)(n.Fragment,{children:[!A&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:"button",variant:"danger",onClick:I=>{I.preventDefault(),o()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(se.$,{type:"submit",variant:"default",onClick:I=>{I.preventDefault(),be(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),A&&(0,n.jsx)(se.$,{type:"submit",variant:"secondary",onClick:I=>{I.preventDefault(),he(I,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):M?(0,n.jsxs)(n.Fragment,{children:[!p&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:"button",variant:"danger",onClick:I=>{I.preventDefault(),s()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(se.$,{type:"submit",variant:"default",onClick:I=>{I.preventDefault(),Se(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),p&&(0,n.jsx)(se.$,{type:"submit",variant:"secondary",onClick:I=>{I.preventDefault(),$e(I,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):N?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:"button",variant:"danger",onClick:I=>{I.preventDefault(),e&&t(e)},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(se.$,{type:"submit",variant:"default",onClick:I=>{I.preventDefault(),te(I)},children:J({id:"global.finish",defaultMessage:"finish"})})]}):l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:$?"button":"submit",variant:"secondary",onClick:I=>{I.preventDefault(),de(I,!0)},startIcon:(0,n.jsx)(Ge.A,{}),children:J({id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(se.$,{type:$?"submit":"button",variant:"default",onClick:I=>{I.preventDefault(),ye(),de(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):null},Ll=({actionType:e=null,attributeName:t,attributeType:s,categoryName:o,contentTypeKind:r,dynamicZoneTarget:l,forTarget:i,modalType:d=null,targetUid:u,customFieldUid:p=null,showBackLink:f=!1})=>{const{formatMessage:g}=(0,K.A)(),{modifiedData:T}=Ue(),{onOpenModalAddField:A}=_e();let v="component",M=[];const U=T?.[i]?.[u]||T?.[i]||null,$=U?.schema.displayName;if(d==="contentType"&&(v=r),["component","editCategory"].includes(d||"")&&(v="component"),["component","contentType"].includes(d||"")){let L=c(`modalForm.component.header-${e}`);return d==="contentType"&&(L=c(`modalForm.${r}.header-create`)),e==="edit"&&(L=c("modalForm.header-edit")),(0,n.jsx)(ot.r,{children:(0,n.jsxs)(b.s,{children:[(0,n.jsx)(y.a,{children:(0,n.jsx)(ct,{type:v})}),(0,n.jsx)(y.a,{paddingLeft:3,children:(0,n.jsx)(S.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:g({id:L},{name:$})})})]})})}return M=[{label:$,info:{category:U?.category||null,name:U?.schema.displayName}}],d==="chooseAttribute"&&(v=["component","components"].includes(i)?"component":U.schema.kind),d==="addComponentToDynamicZone"&&(v="dynamiczone",M.push({label:l})),(d==="attribute"||d==="customField")&&(v=s,M.push({label:t})),d==="editCategory"&&(M=[{label:g({id:c("modalForm.header.categories"),defaultMessage:"Categories"})},{label:o}]),(0,n.jsx)(ot.r,{children:(0,n.jsxs)(b.s,{gap:3,children:[f&&(0,n.jsx)(bt,{"aria-label":g({id:c("modalForm.header.back"),defaultMessage:"Back"}),startIcon:(0,n.jsx)(Dn.A,{}),onClick:()=>A({forTarget:i,targetUid:u}),href:"#back",isExternal:!1}),(0,n.jsx)(ct,{type:v,customField:p}),(0,n.jsx)(Sn,{label:M.map(({label:L})=>L).join(","),children:M.map(({label:L,info:P},ee,he)=>{if(L=ze(L),!L)return null;const $e=`${L}.${ee}`;return P?.category&&(L=`${L} (${ze(P.category)} - ${ze(P.name)})`),(0,n.jsx)(Fn,{isCurrent:ee===he.length-1,children:L},$e)})})]})})},Il=({modalType:e,forTarget:t,kind:s,actionType:o,step:r})=>{switch(e){case"chooseAttribute":return c(`modalForm.sub-header.chooseAttribute.${t?.includes("component")?"component":s||"collectionType"}`);case"attribute":return c(`modalForm.sub-header.attribute.${o}${r!=="null"&&r!==null&&o!=="edit"?".step":""}`);case"customField":return c(`modalForm.sub-header.attribute.${o}`);case"addComponentToDynamicZone":return c("modalForm.sub-header.addComponentToDynamicZone");default:return c("configurations")}},Rl=({actionType:e,modalType:t,forTarget:s,kind:o,step:r,attributeType:l,attributeName:i,customField:d})=>{const{formatMessage:u}=(0,K.A)(),p=t==="customField"?d?.intlLabel:{id:c(`attribute.${l}`)};return(0,n.jsxs)(b.s,{direction:"column",alignItems:"flex-start",paddingBottom:2,gap:1,children:[(0,n.jsx)(S.o,{as:"h2",variant:"beta",children:u({id:Il({actionType:e,forTarget:s,kind:o,step:r,modalType:t}),defaultMessage:"Add new field"},{type:p?ze(u(p)):"",name:ze(i),step:r})}),(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:u({id:c(`attribute.${l}.description`),defaultMessage:"A type for modeling data"})})]})},Wt={alien:$o.A,apps:So.A,archive:Fo.A,arrowDown:No.A,arrowLeft:Dn.A,arrowRight:Lo.A,arrowUp:Io.A,attachment:Ro.A,bell:Eo.A,bold:ko.A,book:wo.A,briefcase:Do.A,brush:Oo.A,bulletList:Bo.A,calendar:Po.A,car:Wo.A,cast:zo.A,chartBubble:Uo.A,chartCircle:Vo.A,chartPie:Zo.A,check:Ho.A,clock:Go.A,cloud:Yo.A,code:Ko.A,cog:Qo.A,collapse:Xo.A,command:Jo.A,connector:qo.A,crop:_o.A,crown:er.A,cube:tr.A,cup:nr.A,cursor:sr.A,dashboard:ar.A,database:or.A,discuss:rr.A,doctor:ir.A,earth:lr.A,emotionHappy:dr.A,emotionUnhappy:cr.A,envelop:ur.A,exit:mr.A,expand:pr.A,eye:gr.A,feather:fr.A,file:hr.A,fileError:yr.A,filePdf:xr.A,filter:br.A,folder:vr.A,gate:Cr.A,gift:Ar.A,globe:jr.A,grid:Tr.A,handHeart:Mr.A,hashtag:$r.A,headphone:Sr.A,heart:Fr.A,house:Nr.A,information:Lr.A,italic:Ir.A,key:Rr.A,landscape:Er.A,layer:kr.A,layout:wr.A,lightbulb:Dr.A,link:Or.A,lock:Br.A,magic:Pr.A,manyToMany:On.A,manyToOne:Bn.A,manyWays:Pn.A,medium:Wr.A,message:zr.A,microphone:Ur.A,monitor:Vr.A,moon:Zr.A,music:Hr.A,oneToMany:Wn.A,oneToOne:zn.A,oneWay:Un.A,paint:Gr.A,paintBrush:Yr.A,paperPlane:Kr.A,pencil:Qr.A,phone:Xr.A,picture:Jr.A,pin:qr.A,pinMap:_r.A,plane:ei.A,play:ti.A,plus:Ge.A,priceTag:ni.A,puzzle:si.A,question:ai.A,quote:oi.A,repeat:ri.A,restaurant:ii.A,rocket:li.A,rotate:di.A,scissors:ci.A,search:yt.A,seed:ui.A,server:mi.A,shield:pi.A,shirt:gi.A,shoppingCart:fi.A,slideshow:hi.A,stack:yi.A,star:xi.A,store:bi.A,strikeThrough:vi.A,sun:Ci.A,television:Ai.A,thumbDown:ji.A,thumbUp:Ti.A,train:Mi.A,twitter:$i.A,typhoon:Si.A,underline:Fi.A,user:Ni.A,volumeMute:Li.A,volumeUp:Ii.A,walk:Ri.A,wheelchair:Ei.A,write:ki.A},El=(0,k.Ay)(b.s)`
  label {
    ${(0,Ee.id)()}
    border-radius: ${({theme:e})=>e.borderRadius};
    border: 1px solid ${({theme:e})=>e.colors.neutral100};
  }
`,kl=({iconKey:e,name:t,onChange:s,isSelected:o,ariaLabel:r})=>(0,n.jsx)(ht.D,{name:t,required:!1,children:(0,n.jsxs)(Is.d,{htmlFor:e,id:`${e}-label`,children:[(0,n.jsxs)(Rs.s,{children:[(0,n.jsx)(Es.T,{type:"radio",id:e,name:t,checked:o,onChange:s,value:e,"aria-checked":o,"aria-labelledby":`${e}-label`}),r]}),(0,n.jsx)(b.s,{padding:2,cursor:"pointer",hasRadius:!0,background:o?"primary200":void 0,children:(0,n.jsx)(D.I,{as:Wt[e],color:o?"primary600":"neutral300"})})]})}),wl=({intlLabel:e,name:t,onChange:s,value:o=""})=>{const{formatMessage:r}=(0,K.A)(),[l,i]=(0,m.useState)(!1),[d,u]=(0,m.useState)(""),p=Object.keys(Wt),[f,g]=(0,m.useState)(p),T=(0,m.useRef)(null),A=(0,m.useRef)(null),v=()=>{i(!l)},M=({target:{value:N}})=>{u(N),g(()=>p.filter(L=>L.toLowerCase().includes(N.toLowerCase())))},U=()=>{v(),u(""),g(p)},$=()=>{s({target:{name:t,value:""}})};return(0,m.useEffect)(()=>{l&&A.current?.focus()},[l]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(b.s,{justifyContent:"space-between",paddingBottom:2,children:[(0,n.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"neutral800",as:"label",children:r(e)}),(0,n.jsxs)(b.s,{gap:1,children:[l?(0,n.jsx)(ks.S,{ref:A,name:"searchbar",size:"S",placeholder:r({id:c("ComponentIconPicker.search.placeholder"),defaultMessage:"Search for an icon"}),onBlur:()=>{d||v()},onChange:M,value:d,onClear:U,clearLabel:r({id:c("IconPicker.search.clear.label"),defaultMessage:"Clear the icon search"}),children:r({id:c("IconPicker.search.placeholder.label"),defaultMessage:"Search for an icon"})}):(0,n.jsx)(an.K,{ref:T,onClick:v,"aria-label":r({id:c("IconPicker.search.button.label"),defaultMessage:"Search icon button"}),icon:(0,n.jsx)(yt.A,{}),noBorder:!0}),o&&(0,n.jsx)(ws.m,{description:r({id:c("IconPicker.remove.tooltip"),defaultMessage:"Remove the selected icon"}),children:(0,n.jsx)(an.K,{onClick:$,"aria-label":r({id:c("IconPicker.remove.button"),defaultMessage:"Remove the selected icon button"}),icon:(0,n.jsx)(_i.A,{}),noBorder:!0})})]})]}),(0,n.jsx)(El,{position:"relative",padding:1,background:"neutral100",hasRadius:!0,wrap:"wrap",gap:2,maxHeight:"126px",overflow:"auto",textAlign:"center",children:f.length>0?f.map(N=>(0,n.jsx)(kl,{iconKey:N,name:t,onChange:s,isSelected:N===o,ariaLabel:r({id:c("IconPicker.icon.label"),defaultMessage:"Select {icon} icon"},{icon:N})},N)):(0,n.jsx)(y.a,{padding:4,grow:2,children:(0,n.jsx)(S.o,{variant:"delta",textColor:"neutral600",textAlign:"center",children:r({id:c("IconPicker.emptyState.label"),defaultMessage:"No icon found"})})})})]})},Dl=({description:e,error:t,intlLabel:s,modifiedData:o,name:r,onChange:l,value:i})=>{const{formatMessage:d}=(0,K.A)(),u=(0,m.useRef)(l),p=o?.displayName||"";(0,m.useEffect)(()=>{if(p){const A=(0,C.n)(p);try{const v=At(A,2);u.current({target:{name:r,value:v}})}catch{u.current({target:{name:r,value:A}})}}else u.current({target:{name:r,value:""}})},[p,r]);const f=t?d({id:t,defaultMessage:t}):"",g=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",T=d(s);return(0,n.jsx)(Te.k,{error:f,label:T,id:r,hint:g,name:r,onChange:l,value:i||""})},Ol=({oneThatIsCreatingARelationWithAnother:e,target:t})=>{const{contentTypes:s,sortedContentTypesList:o}=Ue(),r=(0,qe.wA)(),l=o.filter(es),{plugin:i=null,schema:{displayName:d}={displayName:"error"}}=s?.[t]??{},u=({uid:p,plugin:f,title:g,restrictRelationsTo:T})=>()=>{const A=f?`${f}_${g}`:g;r({type:C.O,target:{value:p,oneThatIsCreatingARelationWithAnother:e,selectedContentTypeFriendlyName:A,targetContentTypeAllowedRelations:T}})};return(0,n.jsxs)(Ao,{children:[(0,n.jsx)(Bl,{children:`${d} ${i?`(from: ${i})`:""}`}),(0,n.jsx)(To,{zIndex:5,children:l.map(({uid:p,title:f,restrictRelationsTo:g,plugin:T})=>(0,n.jsxs)(Mo,{onSelect:u({uid:p,plugin:T,title:f,restrictRelationsTo:g}),children:[f,"\xA0",T&&(0,n.jsxs)(n.Fragment,{children:["(from: ",T,")"]})]},p))})]})},Bl=(0,k.Ay)(jo)`
  svg {
    width: ${6/16}rem;
    height: ${4/16}rem;
  }
`,ss=({disabled:e=!1,error:t,header:s,isMain:o=!1,name:r,onChange:l,oneThatIsCreatingARelationWithAnother:i="",target:d="",value:u=""})=>(0,n.jsxs)(y.a,{background:"neutral100",hasRadius:!0,borderColor:"neutral200",children:[(0,n.jsx)(b.s,{paddingTop:o?4:1,paddingBottom:o?3:1,justifyContent:"center",children:o?(0,n.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"neutral800",children:s}):(0,n.jsx)(Ol,{target:d,oneThatIsCreatingARelationWithAnother:i})}),(0,n.jsx)(ae.c,{background:"neutral200"}),(0,n.jsx)(y.a,{padding:4,children:(0,n.jsx)(F.ah,{disabled:e,error:t?.id||null,intlLabel:{id:c("form.attribute.item.defineRelation.fieldName"),defaultMessage:"Field name"},name:r,onChange:l,type:"text",value:u})})]}),Pl=(0,k.Ay)(y.a)`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({theme:e})=>e.colors.primary600};
    z-index: 0;
  }
`,Wl=(0,k.Ay)(y.a)`
  background: ${({theme:e,isSelected:t})=>e.colors[t?"primary100":"neutral0"]};
  border: 1px solid
    ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral200"]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`,zl=(0,k.Ay)(b.s)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`,Ul={oneWay:Un.A,oneToOne:zn.A,oneToMany:Wn.A,manyToOne:Bn.A,manyToMany:On.A,manyWay:Pn.A},Vl=({naturePickerType:e,oneThatIsCreatingARelationWithAnother:t,relationType:s,target:o})=>{const r=(0,qe.wA)(),{formatMessage:l}=(0,K.A)(),{contentTypes:i,modifiedData:d}=Ue(),u=["oneWay","oneToOne","oneToMany","manyToOne","manyToMany","manyWay"],p=["oneWay","manyWay"],g=(e==="contentType"?w(d,[e,"schema","kind"],""):e)==="collectionType"?u:p,T=s==="manyToOne",A=w(i,[o,"schema","displayName"],"unknown"),v=T?A:t,M=T?t:A,U=At(v,s==="manyToMany"?2:1),$=w(i,[o,"schema","restrictRelationsTo"],null),N=At(M,["manyToMany","oneToMany","manyToOne","manyWay"].includes(s)?2:1);return s?(0,n.jsxs)(b.s,{style:{flex:1},children:[(0,n.jsx)(Pl,{children:(0,n.jsx)(b.s,{paddingLeft:9,paddingRight:9,paddingTop:1,justifyContent:"center",children:(0,n.jsx)(z.r,{tagName:"button",children:(0,n.jsx)(b.s,{gap:3,children:g.map(L=>{const P=Ul[L],ee=$===null||$.includes(L);return(0,n.jsx)(Wl,{as:"button",isSelected:s===L,disabled:!ee,onClick:()=>{ee&&r({type:C.a,target:{oneThatIsCreatingARelationWithAnother:t,targetContentType:o,value:L}})},padding:2,type:"button",children:(0,n.jsx)(P,{},L)},L)})})})})}),(0,n.jsxs)(zl,{justifyContent:"center",children:[(0,n.jsxs)(S.o,{children:[Qn(U,{length:24}),"\xA0"]}),(0,n.jsxs)(S.o,{textColor:"primary600",children:[l({id:c(`relation.${s}`)}),"\xA0"]}),(0,n.jsx)(S.o,{children:Qn(N,{length:24})})]})]}):null},Zl=({formErrors:e,mainBoxHeader:t,modifiedData:s,naturePickerType:o,onChange:r})=>{const l=(0,C.g)(s.relation,s.targetAttribute);return(0,n.jsxs)(b.s,{style:{position:"relative"},children:[(0,n.jsx)(ss,{isMain:!0,header:t,error:e?.name||null,name:"name",onChange:r,value:s?.name||""}),(0,n.jsx)(Vl,{naturePickerType:o,oneThatIsCreatingARelationWithAnother:t,relationType:l,target:s.target}),(0,n.jsx)(ss,{disabled:["oneWay","manyWay"].includes(l),error:e?.targetAttribute||null,name:"targetAttribute",onChange:r,oneThatIsCreatingARelationWithAnother:t,target:s.target,value:s?.targetAttribute||""})]})},Hl=({error:e=null,intlLabel:t,name:s,onChange:o,value:r=void 0})=>{const{formatMessage:l}=(0,K.A)(),{allComponentsCategories:i}=Ue(),[d,u]=(0,m.useState)(i),p=e?l({id:e,defaultMessage:e}):"",f=l(t),g=A=>{o({target:{name:s,value:A,type:"select-category"}})},T=A=>{u(v=>[...v,A]),g(A)};return(0,n.jsx)(Ds.nP,{error:p,id:s,label:f,name:s,onChange:g,onCreateOption:T,value:r,children:d.map(A=>(0,n.jsx)(Os.j,{value:A,children:A},A))})},Gl=({error:e=null,intlLabel:t,isAddingAComponentToAnotherComponent:s,isCreating:o,isCreatingComponentWhileAddingAField:r,componentToCreate:l,name:i,onChange:d,targetUid:u,forTarget:p,value:f})=>{const{formatMessage:g}=(0,K.A)(),T=e?g({id:e,defaultMessage:e}):"",A=g(t),{componentsGroupedByCategory:v,componentsThatHaveOtherComponentInTheirAttributes:M}=Ue(),U=["component","components"].includes(p);let $=Object.entries(v).reduce((N,L)=>{const[P,ee]=L,he=ee.map($e=>({uid:$e.uid,label:$e.schema.displayName,categoryName:P}));return[...N,...he]},[]);return s&&($=$.filter(N=>!M.includes(N.uid))),U&&($=$.filter(N=>N.uid!==u)),r&&($=[{uid:f,label:l?.displayName,categoryName:l?.category}]),(0,n.jsx)(oe.l,{disabled:r||!o,error:T,label:A,id:i,name:i,onChange:N=>{d({target:{name:i,value:N,type:"select-category"}})},value:f||"",children:$.map(N=>(0,n.jsx)(Re.c,{value:N.uid,children:`${N.categoryName} - ${N.label}`},N.uid))})},Yl=({dynamicZoneTarget:e,intlLabel:t,name:s,onChange:o,value:r})=>{const{formatMessage:l}=(0,K.A)(),{componentsGroupedByCategory:i,modifiedData:d}=Ue(),p=Bt(d.contentType.schema.attributes,e)?.components||[],f=Object.keys(i).reduce((A,v)=>{const M=i[v].filter(({uid:U})=>!p.includes(U));return M.length>0&&(A[v]=M),A},{}),g=Object.entries(f).reduce((A,v)=>{const[M,U]=v,$={label:M,children:U.map(({uid:N,schema:{displayName:L}})=>({label:L,value:N}))};return A.push($),A},[]),T=l({id:c("components.SelectComponents.displayed-value"),defaultMessage:"{number, plural, =0 {# components} one {# component} other {# components}} selected"},{number:r?.length??0});return(0,n.jsx)(O.B,{id:"select1",label:l(t),customizeContent:()=>T,name:s,onChange:A=>{o({target:{name:s,value:A,type:"select-components"}})},options:g,value:r||[]})},Kl=({intlLabel:e,error:t=void 0,modifiedData:s,name:o,onChange:r,options:l,value:i=""})=>{const{formatMessage:d}=(0,K.A)(),u=d(e),p=t?d({id:t,defaultMessage:t}):"",f=g=>{r({target:{name:o,value:g,type:"select"}}),i&&s.default!==void 0&&s.default!==null&&r({target:{name:"default",value:null}})};return(0,n.jsx)(oe.l,{error:p,label:u,id:o,name:o,onChange:f,value:i||"",children:l.map(({metadatas:{intlLabel:g,disabled:T,hidden:A},key:v,value:M})=>(0,n.jsx)(Re.c,{value:M,disabled:T,hidden:A,children:d({id:g.id,defaultMessage:g.defaultMessage},g.values)},v))})},as=({intlLabel:e,error:t=void 0,modifiedData:s,name:o,onChange:r,options:l,value:i=""})=>{const{formatMessage:d}=(0,K.A)(),u=d(e),p=t?d({id:t,defaultMessage:t}):"",f=g=>{r({target:{name:o,value:g,type:"select"}}),i&&(g==="biginteger"&&i!=="biginteger"&&(s.default!==void 0&&s.default!==null&&r({target:{name:"default",value:null}}),s.max!==void 0&&s.max!==null&&r({target:{name:"max",value:null}}),s.min!==void 0&&s.min!==null&&r({target:{name:"min",value:null}})),typeof g=="string"&&["decimal","float","integer"].includes(g)&&i==="biginteger"&&(s.default!==void 0&&s.default!==null&&r({target:{name:"default",value:null}}),s.max!==void 0&&s.max!==null&&r({target:{name:"max",value:null}}),s.min!==void 0&&s.min!==null&&r({target:{name:"min",value:null}})))};return(0,n.jsx)(oe.l,{error:p,label:u,id:o,name:o,onChange:f,value:i||"",children:l.map(({metadatas:{intlLabel:g,disabled:T,hidden:A},key:v,value:M})=>(0,n.jsx)(Re.c,{value:M,disabled:T,hidden:A,children:d(g)},v))})};as.defaultProps={error:void 0,value:""};const Ql=({description:e=null,error:t=null,intlLabel:s,modifiedData:o,name:r,onChange:l,value:i=null})=>{const{formatMessage:d}=(0,K.A)(),u=(0,m.useRef)(l),p=o?.displayName||"";(0,m.useEffect)(()=>{p?u.current({target:{name:r,value:(0,C.n)(p)}}):u.current({target:{name:r,value:""}})},[p,r]);const f=t?d({id:t,defaultMessage:t}):"",g=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",T=d(s);return(0,n.jsx)(Te.k,{error:f,label:T,id:r,hint:g,name:r,onChange:l,value:i||""})},os=({form:e,formErrors:t,genericInputProps:s,modifiedData:o,onChange:r})=>{const{formatMessage:l}=(0,K.A)();return(0,n.jsx)(n.Fragment,{children:e.map((i,d)=>i.items.length===0?null:(0,n.jsxs)(y.a,{children:[i.sectionTitle&&(0,n.jsx)(y.a,{paddingBottom:4,children:(0,n.jsx)(S.o,{variant:"delta",as:"h3",children:l(i.sectionTitle)})}),(0,n.jsx)(_.x,{gap:4,children:i.items.map((u,p)=>{const f=`${d}.${p}`,g=w(o,u.name,void 0),T=Object.keys(t).find(v=>v===u.name),A=T?t[T].id:w(t,[...u.name.split(".").filter(v=>v!=="componentToCreate"),"id"],null);return u.type==="pushRight"?(0,n.jsx)(ne.E,{col:u.size||6,children:(0,n.jsx)("div",{})},u.name||f):(0,n.jsx)(ne.E,{col:u.size||6,children:(0,n.jsx)(F.ah,{...u,...s,error:A,onChange:r,value:g})},u.name||f)})})]},d))})},Xl=({description:e=null,disabled:t=!1,error:s="",intlLabel:o,labelAction:r,name:l,onChange:i,placeholder:d=null,value:u=""})=>{const{formatMessage:p}=(0,K.A)(),f=s?p({id:s,defaultMessage:s}):"",g=e?p({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",T=p(o),A=d?p({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",v=Array.isArray(u)?u.join(`
`):"",M=U=>{const $=U.target.value.split(`
`);i({target:{name:l,value:$}})};return(0,n.jsx)(Bs.T,{disabled:t,error:f,label:T,labelAction:r,id:l,hint:g,name:l,onChange:M,placeholder:A,value:v,children:v})},Pe={name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:c("modalForm.attribute.form.base.name.description"),defaultMessage:"No space is allowed for the name of the attribute"}},Jl={sections:[{sectionTitle:null,items:[Pe]}]},tt={base(e=""){return[{sectionTitle:null,items:[{name:`${e}displayName`,type:"text",intlLabel:{id:c("contentType.displayName.label"),defaultMessage:"Display Name"}},{name:`${e}category`,type:"select-category",intlLabel:{id:c("modalForm.components.create-component.category.label"),defaultMessage:"Select a category or enter a name to create a new one"}}]},{sectionTitle:null,items:[{name:`${e}icon`,type:"icon-picker",size:12,intlLabel:{id:c("modalForm.components.icon.label"),defaultMessage:"Icon"}}]}]},advanced(){return[]}},R={default:{name:"default",type:"text",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"}},max:{name:"max",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.maximum"),defaultMessage:"Maximum value"}},maxLength:{name:"maxLength",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.maximumLength"),defaultMessage:"Maximum length"}},min:{name:"min",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.minimum"),defaultMessage:"Minimum value"}},minLength:{name:"minLength",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.minimumLength"),defaultMessage:"Minimum length"}},private:{name:"private",type:"checkbox",intlLabel:{id:c("form.attribute.item.privateField"),defaultMessage:"Private field"},description:{id:c("form.attribute.item.privateField.description"),defaultMessage:"This field will not show up in the API response"}},regex:{intlLabel:{id:c("form.attribute.item.text.regex"),defaultMessage:"RegExp pattern"},name:"regex",type:"text",description:{id:c("form.attribute.item.text.regex.description"),defaultMessage:"The text of the regular expression"}},required:{name:"required",type:"checkbox",intlLabel:{id:c("form.attribute.item.requiredField"),defaultMessage:"Required field"},description:{id:c("form.attribute.item.requiredField.description"),defaultMessage:"You won't be able to create an entry if this field is empty"}},unique:{name:"unique",type:"checkbox",intlLabel:{id:c("form.attribute.item.uniqueField"),defaultMessage:"Unique field"},description:{id:c("form.attribute.item.uniqueField.description"),defaultMessage:"You won't be able to create an entry if there is an existing entry with identical content"}}},ql={blocks(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},boolean(){return{sections:[{sectionTitle:null,items:[{autoFocus:!0,type:"select-default-boolean",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},name:"default",options:[{value:"true",key:"true",metadatas:{intlLabel:{id:"true",defaultMessage:"true"}}},{value:"",key:"null",metadatas:{intlLabel:{id:"null",defaultMessage:"null"}}},{value:"false",key:"false",metadatas:{intlLabel:{id:"false",defaultMessage:"false"}}}]}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},component({repeatable:e},t){return t==="1"?{sections:tt.advanced()}:e?{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private,R.max,R.min]}]}:{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},date({type:e}){return{sections:[{sectionTitle:null,items:[{...R.default,type:e||"date",value:null,withDefaultValue:!1,disabled:!e,autoFocus:!1}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.private]}]}},dynamiczone(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.max,R.min]}]}},email(){return{sections:[{sectionTitle:null,items:[{...R.default,type:"email"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.maxLength,R.minLength,R.private]}]}},enumeration(e){return{sections:[{sectionTitle:null,items:[{name:"default",type:"select",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{},options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}}},...(e.enum||[]).filter((t,s)=>e.enum.indexOf(t)===s&&t).map(t=>({key:t,value:t,metadatas:{intlLabel:{id:`${t}.no-override`,defaultMessage:t}}}))]},{intlLabel:{id:c("form.attribute.item.enumeration.graphql"),defaultMessage:"Name override for GraphQL"},name:"enumName",type:"text",validations:{},description:{id:c("form.attribute.item.enumeration.graphql.description"),defaultMessage:"Allows you to override the default generated name for GraphQL"}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},json(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},media(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:c("form.attribute.media.allowed-types"),defaultMessage:"Select allowed types of media"},name:"allowedTypes",type:"allowed-types-select",size:7,value:"",validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},number(e){const t=e.type==="decimal"||e.type==="float"?"any":1;return{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"default",type:e.type==="biginteger"?"text":"number",step:t,intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.max,R.min,R.private]}]}},password(){return{sections:[{sectionTitle:null,items:[R.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}},relation(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.private]}]}},richtext(){return{sections:[{sectionTitle:null,items:[R.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}},text(){return{sections:[{sectionTitle:null,items:[R.default,R.regex]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.maxLength,R.minLength,R.private]}]}},uid(e){return{sections:[{sectionTitle:null,items:[{...R.default,disabled:Boolean(e.targetField),type:"text"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}}},zt={intlLabel:{id:"global.type",defaultMessage:"Type"},name:"createComponent",type:"boolean-radio-group",size:12,radios:[{title:{id:c("form.attribute.component.option.create"),defaultMessage:"Create a new component"},description:{id:c("form.attribute.component.option.create.description"),defaultMessage:"A component is shared across types and components, it will be available and accessible everywhere."},value:!0},{title:{id:c("form.attribute.component.option.reuse-existing"),defaultMessage:"Use an existing component"},description:{id:c("form.attribute.component.option.reuse-existing.description"),defaultMessage:"Reuse a component already created to keep your data consistent across content-types."},value:!1}]},rs={advanced:ql,base:{component(e,t){if(t==="1"){const s=e.createComponent===!0?tt.base("componentToCreate."):[];return{sections:[{sectionTitle:null,items:[zt]},...s]}}return{sections:[{sectionTitle:null,items:[Pe,{name:"component",type:"select-component",intlLabel:{id:c("modalForm.attributes.select-component"),defaultMessage:"Select a component"},isMultiple:!1}]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"repeatable",type:"boolean-radio-group",size:12,radios:[{title:{id:c("form.attribute.component.option.repeatable"),defaultMessage:"Repeatable component"},description:{id:c("form.attribute.component.option.repeatable.description"),defaultMessage:"Best for multiple instances (array) of ingredients, meta tags, etc.."},value:!0},{title:{id:c("form.attribute.component.option.single"),defaultMessage:"Single component"},description:{id:c("form.attribute.component.option.single.description"),defaultMessage:"Best for grouping fields like full address, main information, etc..."},value:!1}]}]}]}},date(){return{sections:[{sectionTitle:null,items:[Pe,{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",type:"select-date",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"date",value:"date",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.date"),defaultMessage:"date (ex: 01/01/{currentYear})",values:{currentYear:new Date().getFullYear()}}}},{key:"datetime",value:"datetime",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.datetime"),defaultMessage:"datetime (ex: 01/01/{currentYear} 00:00 AM)",values:{currentYear:new Date().getFullYear()}}}},{key:"time",value:"time",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.time"),defaultMessage:"time (ex: 00:00 AM)"}}}]}]}]}},enumeration(){return{sections:[{sectionTitle:null,items:[Pe]},{sectionTitle:null,items:[{name:"enum",type:"textarea-enum",size:6,intlLabel:{id:c("form.attribute.item.enumeration.rules"),defaultMessage:"Values (one line per value)"},placeholder:{id:c("form.attribute.item.enumeration.placeholder"),defaultMessage:`Ex:
morning
noon
evening`},validations:{required:!0}}]}]}},media(){return{sections:[{sectionTitle:null,items:[Pe]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"multiple",size:12,type:"boolean-radio-group",radios:[{title:{id:c("form.attribute.media.option.multiple"),defaultMessage:"Multiple media"},description:{id:c("form.attribute.media.option.multiple.description"),defaultMessage:"Best for sliders, carousels or multiple files download"},value:!0},{title:{id:c("form.attribute.media.option.single"),defaultMessage:"Single media"},description:{id:c("form.attribute.media.option.single.description"),defaultMessage:"Best for avatar, profile picture or cover"},value:!1}]}]}]}},number(){return{sections:[{sectionTitle:null,items:[Pe,{intlLabel:{id:c("form.attribute.item.number.type"),defaultMessage:"Number format"},name:"type",type:"select-number",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"integer",value:"integer",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.integer"),defaultMessage:"integer (ex: 10)"}}},{key:"biginteger",value:"biginteger",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.biginteger"),defaultMessage:"biginteger (ex: 123456789)"}}},{key:"decimal",value:"decimal",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.decimal"),defaultMessage:"decimal (ex: 2.22)"}}},{key:"float",value:"float",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.float"),defaultMessage:"decimal (ex: 3.3333333)"}}}]}]}]}},relation(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:"FIXME",defaultMessage:"FIXME"},name:"relation",size:12,type:"relation"}]}]}},string(){return{sections:[{sectionTitle:null,items:[Pe]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:c("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:c("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:c("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:c("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},text(){return{sections:[{sectionTitle:null,items:[Pe]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:c("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:c("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:c("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:c("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},uid(e,t,s){const o=s.filter(({type:r})=>["string","text"].includes(r)).map(({name:r})=>({key:r,value:r,metadatas:{intlLabel:{id:`${r}.no-override`,defaultMessage:r}}}));return{sections:[{sectionTitle:null,items:[{...Pe,placeholder:{id:c("modalForm.attribute.form.base.name.placeholder"),defaultMessage:"e.g. slug, seoUrl, canonicalUrl"}},{intlLabel:{id:c("modalForm.attribute.target-field"),defaultMessage:"Attached field"},name:"targetField",type:"select",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"global.none",defaultMessage:"None"}}},...o]}]}]}}}},Ut=e=>e?ol(e,{decamelize:!1,lowercase:!1,separator:"_"}):"",is=/^[A-Za-z][_0-9A-Za-z]*$/,ls=e=>({name:"attributeNameAlreadyUsed",message:F.iW.unique,test(t){if(!t)return!1;const s=(0,H.snakeCase)(t);return!e.some(o=>o===t?!1:(0,H.snakeCase)(o)===s)}}),Vt=e=>({name:"forbiddenAttributeName",message:c("error.attributeName.reserved-name"),test(t){if(!t)return!1;const s=(0,H.snakeCase)(t);return!e.some(o=>(0,H.snakeCase)(o)===s)}}),x={default:()=>j.Yj().nullable(),max:()=>j.ai().integer().nullable(),min:()=>j.ai().integer().when("max",(e,t)=>e?t.max(e,c("error.validation.minSupMax")):t).nullable(),maxLength:()=>j.ai().integer().positive(c("error.validation.positive")).nullable(),minLength:()=>j.ai().integer().min(0).when("maxLength",(e,t)=>e?t.max(e,c("error.validation.minSupMax")):t).nullable(),name(e,t){return j.Yj().test(ls(e)).test(Vt(t)).matches(is,F.iW.regex).required(F.iW.required)},required:()=>j.zM(),type:()=>j.Yj().required(F.iW.required),unique:()=>j.zM().nullable()},Zt=(e,t)=>({name:x.name(e,t),type:x.type(),default:x.default(),unique:x.unique(),required:x.required(),maxLength:x.maxLength(),minLength:x.minLength(),regex:j.Yj().test({name:"isValidRegExpPattern",message:c("error.validation.regex"),test(o){return new RegExp(o||"")!==null}}).nullable()}),Ht=()=>({name:"isMinSuperiorThanMax",message:c("error.validation.minSupMax"),test(e){if(!e)return!0;const{max:t}=this.parent;return!t||Number.isNaN(Ot(e))?!0:Ot(t)>=Ot(e)}}),ut={date(e,t){const s={name:x.name(e,t),type:x.type()};return j.Ik(s)},datetime(e,t){const s={name:x.name(e,t),type:x.type()};return j.Ik(s)},time(e,t){const s={name:x.name(e,t),type:x.type()};return j.Ik(s)},default(e,t){const s={name:x.name(e,t),type:x.type()};return j.Ik(s)},biginteger(e,t){const s={name:x.name(e,t),type:x.type(),default:j.Yj().nullable().matches(/^-?\d*$/),unique:x.unique(),required:x.required(),max:j.Yj().nullable().matches(/^-?\d*$/,F.iW.regex),min:j.Yj().nullable().test(Ht()).matches(/^-?\d*$/,F.iW.regex)};return j.Ik(s)},boolean(e,t){const s={name:x.name(e,t),default:j.zM().nullable(),required:x.required(),unique:x.unique()};return j.Ik(s)},component(e,t){const s={name:x.name(e,t),type:x.type(),required:x.required(),max:x.max(),min:x.min(),component:j.Yj().required(F.iW.required)};return j.Ik(s)},decimal(e,t){const s={name:x.name(e,t),type:x.type(),default:j.ai(),required:x.required(),max:j.ai(),min:j.ai().test(Ht())};return j.Ik(s)},dynamiczone(e,t){const s={name:x.name(e,t),type:x.type(),required:x.required(),max:x.max(),min:x.min()};return j.Ik(s)},email(e,t){const s={name:x.name(e,t),type:x.type(),default:j.Yj().email().nullable(),unique:x.unique(),required:x.required(),maxLength:x.maxLength(),minLength:x.minLength()};return j.Ik(s)},enumeration(e,t){const s=/^[_A-Za-z][_0-9A-Za-z]*$/,o={name:j.Yj().test(ls(e)).test(Vt(t)).matches(s,F.iW.regex).required(F.iW.required),type:x.type(),default:x.default(),unique:x.unique(),required:x.required(),enum:j.YO().of(j.Yj()).min(1,F.iW.min).test({name:"areEnumValuesUnique",message:c("error.validation.enum-duplicate"),test(r){return r?!al(r.map(Ut).filter((i,d,u)=>u.indexOf(i)!==d)).length:!1}}).test({name:"doesNotHaveEmptyValues",message:c("error.validation.enum-empty-string"),test:r=>r?!r.map(Ut).some(l=>l===""):!1}).test({name:"doesMatchRegex",message:c("error.validation.enum-regex"),test:r=>r?r.map(Ut).every(l=>s.test(l)):!1}),enumName:j.Yj().nullable()};return j.Ik(o)},float(e,t){const s={name:x.name(e,t),type:x.type(),required:x.required(),default:j.ai(),max:j.ai(),min:j.ai().test(Ht())};return j.Ik(s)},integer(e,t){const s={name:x.name(e,t),type:x.type(),default:j.ai().integer(),unique:x.unique(),required:x.required(),max:x.max(),min:x.min()};return j.Ik(s)},json(e,t){const s={name:x.name(e,t),type:x.type(),required:x.required(),unique:x.unique()};return j.Ik(s)},media(e,t){const s={name:x.name(e,t),type:x.type(),multiple:j.zM(),required:x.required(),allowedTypes:j.YO().of(j.Yj().oneOf(["images","videos","files","audios"])).min(1).nullable()};return j.Ik(s)},password(e,t){const s={name:x.name(e,t),type:x.type(),default:x.default(),unique:x.unique(),required:x.required(),maxLength:x.maxLength(),minLength:x.minLength()};return j.Ik(s)},relation(e,t,s,{initialData:o,modifiedData:r}){const l={name:x.name(e,t),target:j.Yj().required(F.iW.required),relation:j.Yj().required(),type:j.Yj().required(),targetAttribute:j.RZ(()=>{const i=(0,C.g)(r.relation,r.targetAttribute);if(i==="oneWay"||i==="manyWay")return j.Yj().nullable();const d=j.Yj().test(Vt(t)),p=[...s.map(({name:f})=>f),r.name].filter(f=>f!==o.targetAttribute);return d.matches(is,F.iW.regex).test({name:"forbiddenTargetAttributeName",message:c("error.validation.relation.targetAttribute-taken"),test(f){return f?!p.includes(f):!1}}).required(F.iW.required)})};return j.Ik(l)},richtext(e,t){const s={name:x.name(e,t),type:x.type(),default:x.default(),unique:x.unique(),required:x.required(),maxLength:x.maxLength(),minLength:x.minLength()};return j.Ik(s)},blocks(e,t){const s={name:x.name(e,t),type:x.type(),default:x.default(),unique:x.unique(),required:x.required(),maxLength:x.maxLength(),minLength:x.minLength()};return j.Ik(s)},string(e,t){const s=Zt(e,t);return j.Ik(s)},text(e,t){const s=Zt(e,t);return j.Ik(s)},uid(e,t){const s=Zt(e,t);return j.Ik(s)}},ds=/^[A-Za-z][-_0-9A-Za-z]*$/,_l=e=>{const t={name:j.Yj().matches(ds,F.iW.regex).test({name:"nameNotAllowed",message:F.iW.unique,test(s){return s?!e.includes(s?.toLowerCase()):!1}}).required(F.iW.required)};return j.Ik(t)},ed={base:{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:c("modalForm.editCategory.base.name.description"),defaultMessage:"No space is allowed for the name of the category"}}]}]}},td=(e,t,s,o,r)=>{const l={displayName:j.Yj().test({name:"nameAlreadyUsed",message:F.iW.unique,test(i){if(!i)return!1;const d=(0,C.c)(i,s),u=(0,H.snakeCase)(d),p=(0,H.snakeCase)(r);return e.every(f=>(0,H.snakeCase)(f)!==u)&&o.every(f=>(0,H.snakeCase)(f)!==p)}}).test({name:"nameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return t.every(u=>(0,H.snakeCase)(u)!==d)}}).required(F.iW.required),category:j.Yj().matches(ds,F.iW.regex).required(F.iW.required),icon:j.Yj()};return j.Ik(l)},cs={name:"displayName",type:"text",intlLabel:{id:c("contentType.displayName.label"),defaultMessage:"Display name"}},Gt={advanced:{default(){return{sections:[{items:[{intlLabel:{id:c("contentType.draftAndPublish.label"),defaultMessage:"Draft & publish"},description:{id:c("contentType.draftAndPublish.description"),defaultMessage:"Allows writing a draft version of an entry, before it is published"},name:"draftAndPublish",type:"toggle-draft-publish",validations:{}}]}]}}},base:{create(){return{sections:[{sectionTitle:null,items:[cs,{description:{id:c("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:c("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text-singular"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{description:{id:c("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:c("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text-plural"}]}]}},edit(){return{sections:[{sectionTitle:null,items:[cs,{disabled:!0,description:{id:c("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:c("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{disabled:!0,description:{id:c("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:c("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text"},{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"kind",type:"content-type-radio-group",size:12,radios:[{title:{id:c("form.button.collection-type.name"),defaultMessage:"Collection Type"},description:{id:c("form.button.collection-type.description"),defaultMessage:"Best for multiple instances like articles, products, comments, etc."},value:"collectionType"},{title:{id:c("form.button.single-type.name"),defaultMessage:"Single Type"},description:{id:c("form.button.single-type.description"),defaultMessage:"Best for single instance like about us, homepage, etc."},value:"singleType"}]}]}]}}}},nd=({usedContentTypeNames:e=[],reservedModels:t=[],singularNames:s=[],pluralNames:o=[],collectionNames:r=[]})=>{const l={displayName:j.Yj().test({name:"nameAlreadyUsed",message:F.iW.unique,test(i){if(!i)return!1;const d=(0,C.b)(i),u=(0,H.snakeCase)(d);return!e.some(p=>(0,H.snakeCase)(p)===u)}}).test({name:"nameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!t.some(u=>(0,H.snakeCase)(u)===d)}}).required(F.iW.required),pluralName:j.Yj().test({name:"pluralNameAlreadyUsed",message:F.iW.unique,test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!o.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralNameAlreadyUsedAsSingular",message:c("error.contentType.pluralName-equals-singularName"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!s.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralAndSingularAreUnique",message:c("error.contentType.pluralName-used"),test(i,d){return i?(0,H.snakeCase)(d.parent.singularName)!==(0,H.snakeCase)(i):!1}}).test({name:"pluralNameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!t.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralNameNotAlreadyUsedInCollectionName",message:c("error.contentType.pluralName-equals-collectionName"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!r.some(u=>(0,H.snakeCase)(u)===d)}}).required(F.iW.required),singularName:j.Yj().test({name:"singularNameAlreadyUsed",message:F.iW.unique,test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!s.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"singularNameAlreadyUsedAsPlural",message:c("error.contentType.singularName-equals-pluralName"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!o.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralAndSingularAreUnique",message:c("error.contentType.singularName-used"),test(i,d){return i?(0,H.snakeCase)(d.parent.pluralName)!==(0,H.snakeCase)(i):!1}}).test({name:"singularNameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!t.some(u=>(0,H.snakeCase)(u)===d)}}).required(F.iW.required),draftAndPublish:j.zM(),kind:j.Yj().oneOf(["singleType","collectionType"]),reviewWorkflows:j.zM()};return j.Ik(l)},Yt={advanced:{default(){return{sections:tt.advanced()}}},base:{createComponent(){return{sections:[{sectionTitle:null,items:[zt]},...tt.base("componentToCreate.")]}},default(){return{sections:[{sectionTitle:null,items:[zt]},{sectionTitle:null,items:[{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{name:"components",type:"select-components",intlLabel:{id:c("modalForm.attributes.select-components"),defaultMessage:"Select the components"},isMultiple:!0}]}]}}}},us=(e,t)=>{e.forEach(s=>{if(!("sectionTitle"in s)){t[0].items?.push(s);return}t.push(s)})},sd=(e,t)=>`components_${(0,H.snakeCase)(t)}_${At((0,H.snakeCase)(e))}`,ms=(e,t)=>e.filter(({name:s})=>s!==t.initialData.name).map(({name:s})=>s),Ye={customField:{schema({schemaAttributes:e,attributeType:t,customFieldValidator:s,reservedNames:o,schemaData:r,ctbFormsAPI:l}){const i=ms(e,r);ut[t];let d;return t==="relation"?d=ut[t](i,o.attributes,[],{initialData:{},modifiedData:{}}):d=ut[t](i,o.attributes),l.makeCustomFieldValidator(d,s,i,o.attributes,r)},form:{base({customField:e}){const t=[{sectionTitle:null,items:[Pe]}];return e.options?.base&&us(e.options.base,t),{sections:t}},advanced({customField:e,data:t,step:s,extensions:o,...r}){const l=[{sectionTitle:null,items:[]}],i=o.getAdvancedForm(["attribute",e.type],{data:t,type:e.type,step:s,...r});if(e.options?.advanced&&us(e.options.advanced,l),i){const d={sectionTitle:{id:c("modalForm.custom-fields.advanced.settings.extended"),defaultMessage:"Extended settings"},items:i};l.push(d)}return{sections:l}}}},attribute:{schema(e,t,s,o,r,l){const i=e?.schema?.attributes??[],d=ms(i,r);try{const u=ut[t](d,s.attributes,o,r);return l.makeValidator(["attribute",t],u,d,s.attributes,o,r)}catch(u){return console.error("Error yup build schema",u),ut.default(d,s.attributes)}},form:{advanced({data:e,type:t,step:s,extensions:o,...r}){try{const l=rs.advanced[t](e,s).sections,i=o.getAdvancedForm(["attribute",t],{data:e,type:t,step:s,...r});return{sections:l.reduce((u,p)=>(p.sectionTitle===null?u.push(p):u.push({...p,items:[...p.items,...i]}),u),[])}}catch(l){return console.error(l),{sections:[]}}},base({data:e,type:t,step:s,attributes:o}){try{return rs.base[t](e,s,o)}catch{return Jl}}}},contentType:{schema(e,t,s,o,r,l){const i=Object.values(l).map(v=>v.schema.singularName),d=Object.values(l).map(v=>v?.schema?.pluralName??""),u=t?e.filter(v=>v!==s):e,p=t?i.filter(v=>{const{schema:M}=l[s];return M.singularName!==v}):i,f=t?d.filter(v=>{const{schema:M}=l[s];return M.pluralName!==v}):d,g=Object.values(l).map(v=>v?.schema?.collectionName??""),T=t?g.filter(v=>{const{schema:M}=l[s],U=M.collectionName;return v!==U}):g,A=nd({usedContentTypeNames:u,reservedModels:o.models,singularNames:p,pluralNames:f,collectionNames:T});return r.makeValidator(["contentType"],A,u,o.models,p,f)},form:{base({actionType:e}){return e==="create"?Gt.base.create():Gt.base.edit()},advanced({extensions:e}){const t=Gt.advanced.default().sections.map(o=>o.items).flat(),s=e.getAdvancedForm(["contentType"]);return{sections:[{items:[...t,...s]}]}}}},component:{schema(e,t,s,o=!1,r,l,i=null){const d=o?e.filter(g=>g!==i):e,u=Object.values(r).map(g=>g?.schema?.collectionName),p=sd(l,t),f=o?u.filter(g=>g!==p):u;return td(d,s.models,t,f,p)},form:{advanced(){return{sections:tt.advanced()}},base(){return{sections:tt.base()}}}},addComponentToDynamicZone:{form:{advanced(){return Yt.advanced.default()},base({data:e}){return e?.createComponent??!1?Yt.base.createComponent():Yt.base.default()}}},editCategory:{schema(e,t){const s=e.filter(o=>o!==t.name).map(o=>o.toLowerCase());return _l(s)},form:{advanced:()=>({sections:[]}),base(){return ed.base}}}},ad=()=>e=>e[`${C.p}_formModal`]||C.i,od=()=>(0,Xn.Mz)(ad(),e=>e),rd=(e,t)=>{const s=w(e,["contentType","schema","kind"],"");return s==="singleType"||s===t.kind?!0:w(e,["contentType","schema","attributes"],[]).filter(({relation:l,type:i,targetAttribute:d})=>{const u=(0,C.g)(l,d);return i==="relation"&&!["oneWay","manyWay"].includes(u||"")}).length===0},id=(e="",t,s)=>{const o=["text","boolean","blocks","json","number","email","date","password","media","enumeration","relation","richtext"],r=e==="contentType",l=s.includes(t),i=!r&&!l;return r?[[...o.slice(0,-1),"uid",...o.slice(-1)],["component","dynamiczone"]]:i?[o,["component"]]:[o]},ps=e=>e.reduce((t,s)=>{const o=s.items.reduce((r,l)=>(l.name&&r.push(l.name),r),[]);return[...t,...o]},[]),ld=()=>{const{onCloseModal:e,onNavigateToChooseAttributeModal:t,onNavigateToAddCompoToDZModal:s,onNavigateToCreateComponentStep2:o,actionType:r,attributeName:l,attributeType:i,customFieldUid:d,categoryName:u,dynamicZoneTarget:p,forTarget:f,modalType:g,isOpen:T,kind:A,step:v,targetUid:M,showBackLink:U}=_e(),$=(0,F.AC)().get(d),N=(0,m.useRef)(),L=(0,m.useMemo)(od,[]),P=(0,qe.wA)(),ee=(0,F.hN)(),he=(0,qe.d4)(G=>L(G),qe.bN),{push:$e}=(0,Ne.W6)(),{trackUsage:V}=(0,F.z1)(),{formatMessage:je}=(0,K.A)(),{getPlugin:te}=(0,F.vD)(),be=te(C.p)?.apis.forms,de=be.components.inputs,{addAttribute:Ve,addCustomFieldAttribute:ye,addCreatedComponentToDynamicZone:J,allComponentsCategories:I,changeDynamicZoneComponents:Kt,contentTypes:nt,components:Ke,createSchema:st,deleteCategory:Qt,deleteData:Tt,editCategory:Xt,editCustomFieldAttribute:Jt,submitData:qt,modifiedData:ve,nestedComponents:_t,setModifiedData:en,sortedContentTypesList:tn,updateSchema:Mt,reservedNames:Qe}=Ue(),{componentToCreate:pt,formErrors:Ze,initialData:ge,isCreatingComponentWhileAddingAField:gt,modifiedData:h}=he,E=f==="contentType"||f==="component"?[f]:[f,M];(0,m.useEffect)(()=>{if(T){const G=tn.filter(es);g==="editCategory"&&en(),r==="edit"&&g==="attribute"&&f==="contentType"&&V("willEditFieldOfContentType");const Fe=[...E,"schema","attributes"],Oe=Bt(w(ve,Fe,[]),p)||null;if(g==="editCategory"&&r==="edit"&&P({type:C.S,modalType:g,actionType:r,data:{name:u}}),g==="contentType"&&r==="create"&&P({type:C.S,modalType:g,actionType:r,data:{draftAndPublish:!0},pluginOptions:{}}),g==="contentType"&&r==="edit"){const{displayName:X,draftAndPublish:fe,kind:Ie,pluginOptions:Ae,pluralName:Vd,reviewWorkflows:Zd,singularName:Hd}=w(ve,[...E,"schema"],{displayName:null,pluginOptions:{},singularName:null,pluralName:null});P({type:C.S,actionType:r,modalType:g,data:{displayName:X,draftAndPublish:fe,kind:Ie,pluginOptions:Ae,pluralName:Vd,reviewWorkflows:Zd??!1,singularName:Hd}})}if(g==="component"&&r==="edit"){const X=w(ve,E,{});P({type:C.S,actionType:r,modalType:g,data:{displayName:X.schema.displayName,category:X.category,icon:X.schema.icon}})}if(g==="addComponentToDynamicZone"&&r==="edit"){const X={...Oe,components:[],name:p,createComponent:!1,componentToCreate:{type:"component"}};P({type:C.d,attributeToEdit:X})}if(i){const fe={...Bt(w(ve,Fe,[]),l),name:l};i==="component"&&r==="edit"&&(fe.repeatable||Yn(fe,"repeatable",!1)),P(g==="customField"?{type:C.e,customField:$,isEditing:r==="edit",modifiedDataToSetForEditing:fe,forTarget:f}:{type:C.f,attributeType:i,nameToSetForRelation:w(G,["0","title"],"error"),targetUid:w(G,["0","uid"],"error"),isEditing:r==="edit",modifiedDataToSetForEditing:fe,step:v,forTarget:f})}}else P({type:C.R})},[r,l,i,u,p,f,T,g]);const Z=g==="contentType",me=g==="component",Ce=g==="attribute",we=g==="customField",De=i==="component"&&Ce,Xe=r==="create",Je=w(h,"createComponent",!1)||gt,at=v==="1",js=g==="editCategory",Ts=g==="chooseAttribute",nn=(0,C.b)(h.displayName||""),sn=w(ve,[...E,"schema","attributes"],null),Nd=async()=>{let G;const Fe=Je&&v==="1"?w(h,"componentToCreate",{}):h;if(Z)G=Ye.contentType.schema(Object.keys(nt),r==="edit",w(ve,[...E,"uid"],null),Qe,be,nt);else if(me)G=Ye.component.schema(Object.keys(Ke),h.category||"",Qe,r==="edit",Ke,h.displayName||"",w(ve,[...E,"uid"],null));else if(we)G=Ye.customField.schema({schemaAttributes:w(ve,[...E,"schema","attributes"],[]),attributeType:$.type,reservedNames:Qe,schemaData:{modifiedData:h,initialData:ge},ctbFormsAPI:be,customFieldValidator:$.options?.validator});else if(De&&Je&&at)G=Ye.component.schema(Object.keys(Ke),w(h,"componentToCreate.category",""),Qe,r==="edit",Ke,h.componentToCreate.displayName||"");else if(Ce&&!at){const Oe=i==="relation"?"relation":h.type;let X=[];if(Oe==="relation"){const fe=w(h,["target"],null);X=w(nt,[fe,"schema","attributes"],[]).filter(({name:Ae})=>r!=="edit"?!0:Ae!==ge.targetAttribute)}G=Ye.attribute.schema(w(ve,E,{}),Oe,Qe,X,{modifiedData:h,initialData:ge},be)}else if(js)G=Ye.editCategory.schema(I,ge);else if(at&&Je)G=Ye.component.schema(Object.keys(Ke),w(h,"componentToCreate.category",""),Qe,r==="edit",Ke,h.componentToCreate.displayName||"");else return;await G.validate(Fe,{abortEarly:!1})},Ms=(0,m.useCallback)(({target:{name:G,value:Fe,type:Oe,...X}})=>{const fe=["enumName","max","min","maxLength","minLength","regex","default"];let Ie;fe.includes(G)&&Fe===""?Ie=null:Ie=Fe;const Ae=Object.assign({},Ze);G==="max"&&delete Ae.min,G==="maxLength"&&delete Ae.minLength,delete Ae[G],P({type:C.h,errors:Ae}),P({type:C.j,keys:G.split("."),value:Ie,...X})},[P,Ze]),Le=async(G,Fe=Xe)=>{G.preventDefault();try{await Nd(),Rd(Fe);const Oe=f==="components"?M:nn;if(Z)if(Xe)st({...h,kind:A},g,nn),$e({pathname:`/plugins/${C.p}/content-types/${nn}`}),t({forTarget:f,targetUid:Oe});else{rd(ve,h)?(e(),qt(h)):ee({type:"warning",message:{id:"notification.contentType.relations.conflict"}});return}else if(g==="component")if(Xe){const X=(0,C.c)(h.displayName,h.category),{category:fe,...Ie}=h;st(Ie,"component",X,fe),$e({pathname:`/plugins/${C.p}/component-categories/${fe}/${X}`}),t({forTarget:f,targetUid:X})}else{Mt(h,g,M),e();return}else if(js){if(Kn(ge.name)===Kn(h.name)){e();return}Xt(ge.name,h);return}else if(we){const X={attributeToSet:{...h,customField:d},forTarget:f,targetUid:M,initialAttribute:ge};r==="edit"?Jt(X):ye(X),Fe?t({forTarget:f,targetUid:Oe}):e();return}else if(Ce&&!Je){if(i==="dynamiczone"){Ve(h,f,M,r==="edit",ge),Xe?(P({type:C.k}),N.current!==void 0&&N.current._handlers.setSelectedTabIndex(0),s({dynamicZoneTarget:h.name})):e();return}if(!De){Ve(h,f,M,r==="edit",ge),Fe?t({forTarget:f,targetUid:Oe}):e();return}if(at){o(),P({type:C.l,forTarget:f});return}Ve(h,f,M,r==="edit",ge,!0),Fe?t({forTarget:f,targetUid:M}):e()}else if(Ce&&Je){if(at){V("willCreateComponentFromAttributesModal"),P({type:C.m,forTarget:f}),o();return}const{category:X,type:fe,...Ie}=pt,Ae=(0,C.c)(pt.displayName,X);st(Ie,fe,Ae,X,Je),Ve(h,f,M,!1),P({type:C.R}),Fe?t({forTarget:"components",targetUid:Ae}):e();return}else{if(at)if(Je){const{category:X,type:fe,...Ie}=h.componentToCreate,Ae=(0,C.c)(h.componentToCreate.displayName,X);st(Ie,fe,Ae,X,Je),J(p,[Ae]),t({forTarget:"components",targetUid:Ae})}else Kt(p,h.components),e();else console.error("This case is not handled");return}P({type:C.R})}catch(Oe){const X=(0,F.ed)(Oe);P({type:C.h,errors:X})}},Ld=()=>{window.confirm(je({id:"window.confirm.close-modal.file",defaultMessage:"Are you sure? Your changes will be lost."}))&&(e(),P({type:C.R}))},$s=()=>{Dt(h,ge)?(e(),P({type:C.R})):Ld()},Id=G=>{if(G==="advanced"){if(Z){V("didSelectContentTypeSettings");return}f==="contentType"&&V("didSelectContentTypeFieldSettings")}},Rd=G=>{g==="attribute"&&f==="contentType"&&i!=="dynamiczone"&&G&&V("willAddMoreFieldToContentType")},Ed=()=>!!(g==="editCategory"||g==="component"||nl(h,"createComponent")),kd=id(f,M,_t);if(!T||!g)return null;const Ss=w(Ye,[g,"form"],{advanced:()=>({sections:[]}),base:()=>({sections:[]})}),wd=f==="components"||f==="component",Fs={customInputs:{"allowed-types-select":ul,"boolean-radio-group":Ml,"checkbox-with-number-field":$l,"icon-picker":wl,"content-type-radio-group":Sl,"radio-group":Pt,relation:Zl,"select-category":Hl,"select-component":Gl,"select-components":Yl,"select-default-boolean":jl,"select-number":as,"select-date":Kl,"toggle-draft-publish":Fl,"text-plural":Dl,"text-singular":Ql,"textarea-enum":Xl,...de},componentToCreate:pt,dynamicZoneTarget:p,formErrors:Ze,isAddingAComponentToAnotherComponent:wd,isCreatingComponentWhileAddingAField:gt,mainBoxHeader:w(ve,[...E,"schema","displayName"],""),modifiedData:h,naturePickerType:f,isCreating:Xe,targetUid:M,forTarget:f},Ns=Ss.advanced({data:h,type:i,step:v,actionType:r,attributes:sn,extensions:be,forTarget:f,contentTypeSchema:ve.contentType||{},customField:$}).sections,Ls=Ss.base({data:h,type:i,step:v,actionType:r,attributes:sn,extensions:be,forTarget:f,contentTypeSchema:ve.contentType||{},customField:$}).sections,Dd=ps(Ls),Od=ps(Ns),Bd=Object.keys(Ze).some(G=>Dd.includes(G)),Pd=Object.keys(Ze).some(G=>Od.includes(G)),Wd=w(nt,[M,"schema","kind"]),zd=()=>r==="edit"&&sn.every(({name:G})=>G!==h?.name),Ud=()=>{zd()&&V("didEditFieldNameOnContentType")};return(0,n.jsxs)(Ps.k,{onClose:$s,labelledBy:"title",children:[(0,n.jsx)(Ll,{actionType:r,attributeName:l,categoryName:u,contentTypeKind:A,dynamicZoneTarget:p,modalType:g,forTarget:f,targetUid:M,attributeType:i,customFieldUid:d,showBackLink:U}),Ts&&(0,n.jsx)(Al,{attributes:kd,forTarget:f,kind:Wd||"collectionType"}),!Ts&&(0,n.jsxs)("form",{onSubmit:Le,children:[(0,n.jsx)(We.c,{children:(0,n.jsxs)(pe.f,{label:"todo",id:"tabs",variant:"simple",ref:N,onTabChange:G=>{G===1&&Id("advanced")},children:[(0,n.jsxs)(b.s,{justifyContent:"space-between",children:[(0,n.jsx)(Rl,{actionType:r,forTarget:f,kind:A,step:v,modalType:g,attributeType:i,attributeName:l,customField:$}),(0,n.jsxs)(ce.t,{children:[(0,n.jsx)(ce.o,{hasError:Bd,children:je({id:c("popUpForm.navContainer.base"),defaultMessage:"Basic settings"})}),(0,n.jsx)(ce.o,{hasError:Pd,disabled:Ed(),children:je({id:c("popUpForm.navContainer.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,n.jsx)(ae.c,{}),(0,n.jsx)(y.a,{paddingTop:6,children:(0,n.jsxs)(ie.T,{children:[(0,n.jsx)(ie.K,{children:(0,n.jsx)(b.s,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(os,{form:Ls,formErrors:Ze,genericInputProps:Fs,modifiedData:h,onChange:Ms})})}),(0,n.jsx)(ie.K,{children:(0,n.jsx)(b.s,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(os,{form:Ns,formErrors:Ze,genericInputProps:Fs,modifiedData:h,onChange:Ms})})})]})})]})}),(0,n.jsx)(Ws.j,{endActions:(0,n.jsx)(Nl,{deleteCategory:Qt,deleteContentType:Tt,deleteComponent:Tt,categoryName:ge.name,isAttributeModal:g==="attribute",isCustomFieldModal:g==="customField",isComponentToDzModal:g==="addComponentToDynamicZone",isComponentAttribute:i==="component",isComponentModal:g==="component",isContentTypeModal:g==="contentType",isCreatingComponent:r==="create",isCreatingDz:r==="create",isCreatingComponentAttribute:h.createComponent||!1,isCreatingComponentInDz:h.createComponent||!1,isCreatingComponentWhileAddingAField:gt,isCreatingContentType:r==="create",isEditingAttribute:r==="edit",isDzAttribute:i==="dynamiczone",isEditingCategory:g==="editCategory",isInFirstComponentStep:v==="1",onSubmitAddComponentAttribute:Le,onSubmitAddComponentToDz:Le,onSubmitCreateComponent:Le,onSubmitCreateContentType:Le,onSubmitCreateDz:Le,onSubmitEditAttribute:Le,onSubmitEditCategory:Le,onSubmitEditComponent:Le,onSubmitEditContentType:Le,onSubmitEditCustomFieldAttribute:Le,onSubmitEditDz:Le,onClickFinish:Ud}),startActions:(0,n.jsx)(se.$,{variant:"tertiary",onClick:$s,children:je({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})})]})]})},dd=()=>e=>e[`${C.p}_dataManagerProvider`]||C.o,cd=()=>(0,Xn.Mz)(dd(),e=>e),ud=(e,t)=>{const s=Object.keys(e).filter(o=>{const r=w(e,o,{}),l=w(t,o,{}),i=w(r,["isTemporary"],!1),d=!Dt(r,l);return i||d});return(0,C.q)(s)},md=(e,t)=>{const s=fs(w(e,"schema.attributes",[]),t),o=w(e,"isTemporary",!1)?{tmpUID:e.uid}:{uid:e.uid};return Object.assign({},o,{category:e.category},Jn(e.schema,"attributes"),{attributes:s})},gs=(e,t=!1)=>{const s=w(e,"uid",null),o=fs(w(e,"schema.attributes",[]),s),r=t?{category:w(e,"category","")}:{},l=Object.assign(r,Jn(e.schema,"attributes"),{attributes:o});return delete l.uid,delete l.isTemporary,delete l.visible,delete l.restrictRelationsTo,l},fs=(e,t)=>e.reduce((s,{name:o,...r})=>{const l=r,i=l.target===t,d=l.type==="relation",u=w(l,"targetAttribute",null);if(!i)if(d){const p=Object.assign({},l,{targetAttribute:hs(u)});s[o]=jt(p)}else s[o]=jt(l);if(i){const p=l.target,f=Object.assign({},l,{target:p,targetAttribute:hs(u)});s[o]=jt(f)}if(l.customField){const p={...l,type:"customField"};s[o]=jt(p)}return s},{}),hs=e=>e==="-"?null:e,jt=e=>Object.keys(e).reduce((t,s)=>(e[s]!==null&&s!=="plugin"&&(t[s]=e[s]),t),{}),pd=(e,t,s)=>ud(e,t).map(l=>{const i=w(e,l,{});return md(i,s)}),gd=e=>il(Object.keys(e).map(t=>({visible:e[t].schema.visible,name:t,title:e[t].schema.displayName,plugin:e[t].plugin||null,uid:t,to:`/plugins/${C.p}/content-types/${t}`,kind:e[t].schema.kind,restrictRelationsTo:e[t].schema.restrictRelationsTo})).filter(t=>t!==null),t=>rl(t.title)),ys=e=>e.reduce((t,s)=>(t[s.uid]=s,t),{}),fd=(e,t,s,o)=>{const r=t.reduce((d,u)=>{const p=w(s,u,{});return d[u]=p,d},{});return{[o?"contentType":"component"]:e,components:r}},xs=e=>Object.keys(e).reduce((t,s)=>{const o=e[s].schema;return t[s]={...e[s],schema:{...o,attributes:hd(o.attributes)}},t},{}),hd=e=>Object.keys(e).reduce((t,s)=>(t.push({...e[s],name:s}),t),[]),yd=e=>{const t=Object.keys(e).reduce((s,o)=>{const r=w(e,[o]),l=r.uid;return xd(r)&&s.push(l),s},[]);return(0,C.q)(t)},xd=e=>w(e,["schema","attributes"],[]).some(s=>{const{type:o}=s;return o==="component"}),bs=e=>{const t=Object.keys(e).reduce((s,o)=>{const r=e?.[o]?.schema?.attributes??[],l=bd(r);return[...s,...l]},[]);return(0,C.q)(t)},bd=e=>e.reduce((t,s)=>{const{type:o,component:r}=s;return o==="component"&&t.push(r),t},[]),vd=(e,t)=>{const s=Object.keys(e).map(o=>w(e,[o,...t],""));return(0,C.q)(s)},vs="did-not-kill-server",Cd="server is down";function mt(e,t){return new Promise(s=>{fetch(`${window.strapi.backendURL}/_health`,{method:"HEAD",mode:"no-cors",headers:{"Content-Type":"application/json","Keep-Alive":"false"}}).then(o=>{if(o.status>=400)throw new Error(Cd);if(!t)throw new Error(vs);s(e)}).catch(o=>{setTimeout(()=>mt(e,o.message!==vs).then(s),100)})})}const Ad=e=>Object.values(e.attributes).filter(s=>s.type==="dynamiczone").every(s=>Array.isArray(s.components)&&s.components.length>0),jd=({children:e})=>{const t=(0,qe.wA)(),{components:s,contentTypes:o,isLoading:r,isLoadingForDataToBeSet:l,initialData:i,modifiedData:d,reservedNames:u}=(0,qe.d4)(cd()),p=(0,F.hN)(),{lockAppWithAutoreload:f,unlockAppWithAutoreload:g}=(0,F.Ip)(),{setCurrentStep:T}=(0,F.Cx)(),{getPlugin:A}=(0,F.vD)(),v=A(C.p),{autoReload:M}=(0,F.Xe)(),{formatMessage:U}=(0,K.A)(),{trackUsage:$}=(0,F.z1)(),{refetchPermissions:N}=(0,F.r5)(),{pathname:L}=(0,Ne.zy)(),{onCloseModal:P}=_e(),ee=(0,Ne.W5)(`/plugins/${C.p}/content-types/:uid`),he=(0,Ne.W5)(`/plugins/${C.p}/component-categories/:categoryUid/:componentUid`),$e=(0,F.ry)(),{put:V,post:je,del:te}=$e,Se=(0,m.useRef)();Se.current=U;const be=M,de=ee!==null,Ve=de?"contentType":"component",ye=de?w(ee,"params.uid",null):w(he,"params.componentUid",null),J=(0,m.useRef)(),I=de?"content-types":"components";J.current=async()=>{try{const[{data:{data:h}},{data:{data:E}},{data:Z}]=await Promise.all(["components","content-types","reserved-names"].map(Xe=>$e.get(`/${C.p}/${Xe}`))),me=ys(h),Ce=xs(me),we=ys(E),De=xs(we);t({type:C.G,components:Ce,contentTypes:De,reservedNames:Z})}catch(h){console.error({err:h}),p({type:"warning",message:{id:"notification.error"}})}},(0,m.useEffect)(()=>(J.current(),()=>{t({type:C.r})}),[]),(0,m.useEffect)(()=>{!r&&ye&&Mt()},[r,L,ye]),(0,m.useEffect)(()=>{M||p({type:"info",message:{id:c("notification.info.autoreaload-disable")}})},[M,p]);const Kt=(h,E,Z,me=!1,Ce,we=!1)=>{const De=me?C.x:C.y;t({type:De,attributeToSet:h,forTarget:E,targetUid:Z,initialAttribute:Ce,shouldAddComponentToData:we})},nt=({attributeToSet:h,forTarget:E,targetUid:Z,initialAttribute:me})=>{t({type:C.A,attributeToSet:h,forTarget:E,targetUid:Z,initialAttribute:me})},Ke=({attributeToSet:h,forTarget:E,targetUid:Z,initialAttribute:me})=>{t({type:C.E,attributeToSet:h,forTarget:E,targetUid:Z,initialAttribute:me})},st=(h,E)=>{t({type:C.u,dynamicZoneTarget:h,componentsToAdd:E})},Qt=(h,E,Z,me,Ce=!1)=>{const we=E==="contentType"?C.z:C.B;t({type:we,data:h,componentCategory:me,schemaType:E,uid:Z,shouldAddComponentToData:Ce})},Tt=(h,E)=>{t({type:C.C,dynamicZoneTarget:h,newComponents:E})},Xt=(h,E,Z="")=>{const me=h==="components"?C.F:C.H;h==="contentType"&&$("willDeleteFieldOfContentType"),t({type:me,mainDataKey:h,attributeToRemoveName:E,componentUid:Z})},Jt=async h=>{try{const E=`/${C.p}/component-categories/${h}`,Z=window.confirm(U({id:c("popUpWarning.bodyMessage.category.delete")}));P(),Z&&(f?.(),await te(E),await mt(!0),g?.(),await ge())}catch(E){console.error({err:E}),p({type:"warning",message:{id:"notification.error"}})}finally{g?.()}},qt=async()=>{try{const h=`/${C.p}/${I}/${ye}`,E=w(d,[Ve,"isTemporary"],!1),Z=window.confirm(U({id:c(`popUpWarning.bodyMessage.${de?"contentType":"component"}.delete`)}));if(P(),Z){if(E){t({type:C.D});return}f?.(),await te(h),await mt(!0),await g?.(),await ge()}}catch(h){console.error({err:h}),p({type:"warning",message:{id:"notification.error"}})}finally{g?.()}},ve=async(h,E)=>{try{const Z=`/${C.p}/component-categories/${h}`;P(),f?.(),await V(Z,E),await mt(!0),await g?.(),await ge()}catch(Z){console.error({err:Z}),p({type:"warning",message:{id:"notification.error"}})}finally{g?.()}},_t=()=>{const h=Object.assign({},s,d.components);if(!de){const Z=w(d,"component",{});Yn(h,w(Z,["uid"],""),Z)}const E=yd(h);return(0,C.q)(E)},en=()=>{const h=bs(s),E=bs(d.components||{});return(0,C.q)([...E,...h])},tn=(h,E)=>{t({type:C.v,dzName:h,componentToRemoveIndex:E})},Mt=()=>{const E=w(de?o:s,ye??"",{schema:{attributes:[]}}),Z=(0,C.s)(E.schema.attributes,s),me=fd(E,Z,s,de),Ce=w(E,"isTemporary",!1)&&tl(w(E,"schema.attributes",[]))===0;t({type:C.t,schemaToSet:me,hasJustCreatedSchema:Ce})},Qe=(0,m.useMemo)(()=>{const h=de?o:s;return ye==="create-content-type"?!1:!Object.keys(h).includes(ye||"")&&!r},[s,o,ye,de,r]),pt=(0,m.useMemo)(()=>{const h=Object.keys(o).filter(E=>w(o,[E,"schema","visible"],!0)).sort();return w(h,"0","create-content-type")},[o]);if(Qe)return(0,n.jsx)(Ne.rd,{to:`/plugins/${C.p}/content-types/${pt}`});const Ze=async h=>{try{const E=w(d,[Ve,"isTemporary"],!1),Z={components:pd(d.components,s,ye)};if(de){const De=(v?.apis?.forms).mutateContentTypeSchema({...gs(d.contentType),...h},i.contentType);if(!Ad(De)){p({type:"warning",message:{id:c("notification.error.dynamiczone-min.validation"),defaultMessage:"At least one component is required in a dynamic zone to be able to save a content type"}});return}Z.contentType=De,$("willSaveContentType")}else Z.component=gs(d.component,!0),$("willSaveComponent");f?.();const me=`/${C.p}/${I}`,Ce=E?me:`${me}/${ye}`;if(E?await je(Ce,Z):await V(Ce,Z),await mt(!0),g?.(),E&&(i.contentType?.schema.kind==="collectionType"||i.contentType?.schema.kind==="singleType")&&T("contentTypeBuilder.success"),de){$("didSaveContentType");const we=w(Z,["contentType","schema","name"],""),De=w(i,["contentType","schema","name"],"");!E&&we!==De&&$("didEditNameOfContentType")}else $("didSaveComponent");await J.current(),t({type:C.U}),await ge()}catch(E){de||$("didNotSaveComponent"),console.error({err:E.response}),p({type:"warning",message:{id:"notification.error"}})}finally{g?.()}},ge=async()=>{await N()},gt=(h,E,Z)=>{t({type:C.w,data:h,schemaType:E,uid:Z})};return(0,n.jsx)(qn.Provider,{value:{addAttribute:Kt,addCustomFieldAttribute:nt,addCreatedComponentToDynamicZone:st,allComponentsCategories:vd(s,["category"]),changeDynamicZoneComponents:Tt,components:s,componentsGroupedByCategory:el(s,"category"),componentsThatHaveOtherComponentInTheirAttributes:_t(),contentTypes:o,createSchema:Qt,deleteCategory:Jt,deleteData:qt,editCategory:ve,editCustomFieldAttribute:Ke,isInDevelopmentMode:be,initialData:i,isInContentTypeView:de,modifiedData:d,nestedComponents:en(),removeAttribute:Xt,removeComponentFromDynamicZone:tn,reservedNames:u,setModifiedData:Mt,sortedContentTypesList:gd(o),submitData:Ze,updateSchema:gt},children:l?(0,n.jsx)(F.Bl,{}):(0,n.jsxs)(n.Fragment,{children:[e,be&&(0,n.jsx)(ld,{})]})})},Td=(0,m.memo)(jd),Cs={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,modalType:null,isOpen:!1,showBackLink:!1,kind:null,step:null,targetUid:null,customFieldUid:null},Md=({children:e})=>{const[t,s]=m.useState(Cs),{trackUsage:o}=(0,F.z1)(),r=({attributeType:$,customFieldUid:N})=>{s(L=>({...L,actionType:"create",modalType:"customField",attributeType:$,customFieldUid:N}))},l=({attributeType:$,step:N})=>{t.forTarget==="contentType"&&o("didSelectContentTypeFieldType",{type:$}),s(L=>({...L,actionType:"create",modalType:"attribute",step:N,attributeType:$,showBackLink:!0}))},i=({dynamicZoneTarget:$,targetUid:N})=>{s(L=>({...L,dynamicZoneTarget:$,targetUid:N,modalType:"addComponentToDynamicZone",forTarget:"contentType",step:"1",actionType:"edit",isOpen:!0}))},d=({forTarget:$,targetUid:N})=>{s(L=>({...L,actionType:"create",forTarget:$,targetUid:N,modalType:"chooseAttribute",isOpen:!0,showBackLink:!1}))},u=$=>{s(N=>({...N,...$,isOpen:!0}))},p=$=>{s(N=>({...N,categoryName:$,actionType:"edit",modalType:"editCategory",isOpen:!0}))},f=({forTarget:$,targetUid:N,attributeName:L,attributeType:P,customFieldUid:ee})=>{s(he=>({...he,modalType:"customField",customFieldUid:ee,actionType:"edit",forTarget:$,targetUid:N,attributeName:L,attributeType:P,isOpen:!0}))},g=({forTarget:$,targetUid:N,attributeName:L,attributeType:P,step:ee})=>{s(he=>({...he,modalType:"attribute",actionType:"edit",forTarget:$,targetUid:N,attributeName:L,attributeType:P,step:ee,isOpen:!0}))},T=({modalType:$,forTarget:N,targetUid:L,kind:P})=>{s(ee=>({...ee,modalType:$,actionType:"edit",forTarget:N,targetUid:L,kind:P,isOpen:!0}))},A=()=>{s(Cs)},v=({forTarget:$,targetUid:N})=>{s(L=>({...L,forTarget:$,targetUid:N,modalType:"chooseAttribute"}))},M=()=>{s($=>({...$,attributeType:"component",modalType:"attribute",step:"2"}))},U=({dynamicZoneTarget:$})=>{s(N=>({...N,dynamicZoneTarget:$,modalType:"addComponentToDynamicZone",actionType:"create",step:"1",attributeType:null,attributeName:null}))};return(0,n.jsx)(_n.Provider,{value:{...t,onClickSelectField:l,onClickSelectCustomField:r,onCloseModal:A,onNavigateToChooseAttributeModal:v,onNavigateToAddCompoToDZModal:U,onOpenModalAddComponentsToDZ:i,onNavigateToCreateComponentStep2:M,onOpenModalAddField:d,onOpenModalCreateSchema:u,onOpenModalEditCategory:p,onOpenModalEditField:g,onOpenModalEditCustomField:f,onOpenModalEditSchema:T,setFormModalNavigationState:s},children:e})},$d=(0,m.lazy)(()=>a.e(6064).then(a.bind(a,46064))),Sd=()=>{const{url:e}=(0,Ne.W5)();return(0,n.jsx)(m.Suspense,{fallback:(0,n.jsx)(F.Bl,{}),children:(0,n.jsx)(Ne.dO,{children:(0,n.jsx)(Ne.qh,{path:`${e}/:componentUid`,children:(0,n.jsx)($d,{})})})})},As=(0,m.lazy)(()=>a.e(6064).then(a.bind(a,46064))),Fd=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{formatMessage:e}=(0,K.A)(),t=e({id:`${C.p}.plugin.name`,defaultMessage:"Content Types Builder"}),{startSection:s}=(0,F.Cx)(),o=(0,m.useRef)(s);return(0,m.useEffect)(()=>{o.current&&o.current("contentTypeBuilder")},[]),(0,n.jsxs)(F.kz,{permissions:C.P.main,children:[(0,n.jsx)(Us.m,{title:t}),(0,n.jsx)(Md,{children:(0,n.jsx)(Td,{children:(0,n.jsx)(zs.P,{sideNav:(0,n.jsx)(dl,{}),children:(0,n.jsx)(m.Suspense,{fallback:(0,n.jsx)(F.Bl,{}),children:(0,n.jsxs)(Ne.dO,{children:[(0,n.jsx)(Ne.qh,{path:`/plugins/${C.p}/content-types/create-content-type`,component:As}),(0,n.jsx)(Ne.qh,{path:`/plugins/${C.p}/content-types/:uid`,component:As}),(0,n.jsx)(Ne.qh,{path:`/plugins/${C.p}/component-categories/:categoryUid`,component:Sd})]})})})})})]})}},Symbol.toStringTag,{value:"Module"}))}}]);
