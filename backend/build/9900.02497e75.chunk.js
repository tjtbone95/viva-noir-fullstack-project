(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9900],{94445:N=>{function k(c,s,y,m){for(var j=-1,v=c==null?0:c.length;++j<v;){var A=c[j];s(m,A,y(A),c)}return m}N.exports=k},7233:(N,k,c)=>{var s=c(97449);function y(m,j,v,A){return s(m,function($,S,I){j(A,$,v($),I)}),A}N.exports=y},88532:(N,k,c)=>{var s=c(94445),y=c(7233),m=c(45353),j=c(82261);function v(A,$){return function(S,I){var J=j(S)?s:y,Q=$?$():{};return J(S,A,m(I,2),Q)}}N.exports=v},94710:(N,k,c)=>{var s=c(95292),y=c(88532),m=Object.prototype,j=m.hasOwnProperty,v=y(function(A,$,S){j.call(A,S)?A[S].push($):s(A,S,[$])});N.exports=v},49900:(N,k,c)=>{"use strict";c.d(k,{P:()=>Rs});var s=c(92132),y=c(21272),m=c(43242),j=c(44370),v=c(72182),A=c(57842),$=c(69564),S=c(50642),I=c(6479),J=c(53900),Q=c(32161),pe=c(80846),q=c(47098),he=c(96294),ge=c(80725),re=c(12050),we=c(57564),Ge=c(68065),Je=c(15926),Ae=c(44622),ee=c(83724),Oe=c(32474),Ee=c(88761),me=c(51187),M=c(2600),ae=c(412),se=c(77965),H=c(48940),K=c(54894),w=c(47207),Xe=c(95267),Ye=c(59080),Ce=c(94710),be=c(35223),L=c(63891),ze=c(28556),Ze=c(28816),Qe=c(99787),qe=c(7448),es=c(32372),ss=c(714),ts=c(39404);const[ns,os]=(0,Xe.q)("PermissionsDataManager"),z=()=>os("usePermissionsDataManager"),Me=e=>Array.isArray(e)?e.reduce((t,o)=>(Array.isArray(o)?t.push(...Me(o)):t.push(o),t),[]):[],X=e=>(0,w.F)(e)?Me(Object.values(e).map(t=>(0,w.F)(t)?X(t):t)):[],ve=(e,t,o)=>e.find(n=>n.action===t&&n.subject===o),is=e=>{const t=Pe(e.plugins),o=Pe(e.settings),n=Te(e.collectionTypes),r=Te(e.singleTypes);return[...t,...o,...n,...r]},Pe=e=>Object.values(e).reduce((t,o)=>{const n=Object.values(o).reduce((r,a)=>{const d=Object.entries(a).reduce((i,[l,{conditions:u,properties:{enabled:p}}])=>(p&&i.push({action:l,subject:null,conditions:xe(u),properties:{}}),i),[]);return[...r,...d]},[]);return[...t,...n]},[]),Te=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,d=Object.entries(a).reduce((i,l)=>{const[u,p]=l;if(!X(p).some(C=>C))return i;if(!p?.properties?.enabled){const C=Object.entries(p.properties).reduce((f,_)=>{const[h,x]=_;return f.properties[h]=De(x),f},{action:u,subject:r,conditions:xe(p.conditions),properties:{}});return[...i,C]}return p.properties.enabled&&i.push({action:u,subject:r,properties:{},conditions:xe(p.conditions)}),i},[]);return[...o,...d]},[]),De=(e,t="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return(0,w.F)(a)?[...o,...De(a,`${t}${r}.`)]:(a&&!(0,w.F)(a)&&o.push(`${t}${r}`),o)},[]),xe=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Se=(e,t=[])=>e.reduce((o,n)=>(o[n.id]=t.indexOf(n.id)!==-1,o),{}),$e=(e,t,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const d=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((u,p)=>{const g=ve(o,p.action,null);return u[p.action]={properties:{enabled:g!==void 0},conditions:Se(t,g?.conditions??[])},u},{}),i),{});return n[r]=d,n},{}),rs=(e,t,o)=>{const n=({children:r=[]},a,d="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${d}${l.value}.`)};const u=a.indexOf(`${d}${l.value}`)!==-1;return i[l.value]=u,i},{});return e.reduce((r,a)=>{const d=t.properties.find(({value:i})=>i===a);if(d){const i=o?.properties[d.value]??[],l=n(d,i);r.properties[a]=l}return r},{properties:{}})},Le=({subjects:e,actions:t=[]},o,n=[])=>t.reduce((r,a)=>{const d=a.subjects.reduce((l,u)=>{const p=e.find(({uid:g})=>g===u)||null;return p&&(l[u]=p),l},{});if(se(d))return r;const i=Object.keys(d).reduce((l,u)=>{const{actionId:p,applyToProperties:g}=a,_=d[u].properties.map(({value:P})=>P).every(P=>(g||[]).indexOf(P)===-1),h=ve(n,p,u),x=Se(o,h?.conditions??[]);if(l[u]||(l[u]={}),se(g)||_)return l[u][p]={properties:{enabled:h!==void 0},conditions:x},l;const O=rs(g,d[u],h);return l[u][p]={...O,conditions:x},l},{});return Ye(r,i)},{}),Be=(e,t)=>Object.entries(Ce(e,t)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(Ce(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),le=e=>Object.keys(e).reduce((t,o)=>{const n=e[o];if((0,w.F)(n)&&!ae(n,"conditions"))return{...t,[o]:le(n)};if((0,w.F)(n)&&ae(n,"conditions")&&!X(be(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((d,i)=>(d[i]=!1,d),{});return{...t,[o]:{...n,conditions:a}}}return t[o]=n,t},{}),te=(e,t,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):(0,w.F)(a)?{...n,[r]:te(a,t,r==="fields")}:(n[r]=t,n)},{}),F=`${120/16}rem`,fe=`${200/16}rem`,de=`${53/16}rem`,_e=e=>e?Object.entries(e).reduce((t,[o,n])=>(o!=="conditions"&&(t[o]=n),t),{}):null,Y=e=>{const t=_e(e),o=X(t);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},ce=e=>e.charAt(0).toUpperCase()+e.slice(1),Re=(0,L.Ay)(m.s)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,ye=L.Ay.div`
  width: ${F};
`,Ie=()=>(0,s.jsx)(j.a,{color:"danger700",paddingLeft:1,children:"*"}),We=({checkboxName:e="",children:t,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:d,onClick:i,someChecked:l=!1,value:u})=>{const{formatMessage:p}=(0,K.A)();return(0,s.jsxs)(m.s,{alignItems:"center",paddingLeft:6,width:fe,shrink:0,children:[(0,s.jsx)(j.a,{paddingRight:2,children:(0,s.jsx)(v.J,{name:e,"aria-label":p({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onValueChange:g=>d({target:{name:e,value:g}}),indeterminate:l,value:u})}),(0,s.jsxs)(Re,{title:a,alignItems:"center",isCollapsable:n,...n&&{onClick:i,"aria-expanded":o,onKeyDown:({key:g})=>(g==="Enter"||g===" ")&&i(),tabIndex:0,role:"button"},children:[(0,s.jsx)(A.o,{fontWeight:o?"bold":void 0,textColor:o?"primary600":"neutral800",ellipsis:!0,children:ce(a)}),t]})]})},as=({availableActions:e=[],childrenForm:t=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const d=(0,y.useMemo)(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return(0,s.jsxs)(m.s,{display:"inline-flex",direction:"column",minWidth:0,children:[(0,s.jsx)(Cs,{label:n,headers:d}),(0,s.jsx)(j.a,{children:t.map(({children:i,label:l,value:u,required:p},g)=>(0,s.jsx)(ls,{childrenForm:i,label:l,isFormDisabled:o,name:u,required:p,propertyActions:d,pathToData:r,propertyName:a,isOdd:g%2===0},u))})]})},ls=({childrenForm:e=[],label:t,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:d,propertyName:i,isOdd:l=!1})=>{const{formatMessage:u}=(0,K.A)(),[p,g]=y.useState(null),{modifiedData:C,onChangeCollectionTypeLeftActionRowCheckbox:f,onChangeParentCheckbox:_,onChangeSimpleCheckbox:h}=z(),x=p===n,O=(0,y.useMemo)(()=>Array.isArray(e)?e:[],[e]),P=O.length>0,B=y.useCallback(()=>{P&&g(T=>T===n?null:n)},[P,n]),E=({target:{value:T}})=>{f(a,i,n,T)},{hasAllActionsSelected:b,hasSomeActionsSelected:D}=(0,y.useMemo)(()=>ds(d,C,a,i,n),[d,C,a,i,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(cs,{alignItems:"center",isCollapsable:P,isActive:x,background:l?"neutral100":"neutral0",children:(0,s.jsxs)(m.s,{children:[(0,s.jsxs)(We,{onChange:E,onClick:B,isCollapsable:P,isFormDisabled:o,label:t,someChecked:D,value:b,isActive:x,children:[r&&(0,s.jsx)(Ie,{}),(0,s.jsx)(ne,{$isActive:x})]}),(0,s.jsx)(m.s,{children:d.map(({label:T,isActionRelatedToCurrentProperty:W,actionId:U})=>{if(!W)return(0,s.jsx)(ye,{},T);const R=[...a.split(".."),U,"properties",i,n];if(!P){const V=M(C,R,!1);return(0,s.jsx)(m.s,{width:F,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:o,name:R.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${T}`}),onValueChange:Ks=>{h({target:{name:R.join(".."),value:Ks}})},value:V})},U)}const Z=M(C,R,{}),{hasAllActionsSelected:G,hasSomeActionsSelected:ie}=Y(Z);return(0,s.jsx)(m.s,{width:F,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:o,name:R.join(".."),onValueChange:V=>{_({target:{name:R.join(".."),value:V}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${T}`}),value:G,indeterminate:ie})},T)})})]})}),x&&(0,s.jsx)(ke,{childrenForm:O,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:d,recursiveLevel:0})]})},ds=(e,t,o,n,r)=>{const d=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const u=M(t,[...o.split(".."),l,"properties",n,r],!1);return i[l]=u,i},{});return Y(d)},cs=(0,L.Ay)(m.s)`
  height: ${de};
  flex: 1;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ne} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${oe(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&oe(t)};
`,ne=(0,L.Ay)(ze.A)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,ke=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:d})=>{const{formatMessage:i}=(0,K.A)(),{modifiedData:l,onChangeParentCheckbox:u,onChangeSimpleCheckbox:p}=z(),[g,C]=y.useState(null),f=h=>{C(x=>x===h?null:h)},_=(0,y.useMemo)(()=>g?e.find(({value:h})=>h===g):null,[g,e]);return(0,s.jsxs)(j.a,{paddingLeft:"2rem",children:[(0,s.jsx)(hs,{}),e.map(({label:h,value:x,required:O,children:P},B)=>{const E=B+1<e.length,b=Array.isArray(P),D=g===x;return(0,s.jsxs)(us,{isVisible:E,children:[(0,s.jsxs)(m.s,{height:de,children:[(0,s.jsx)(gs,{children:(0,s.jsx)(ms,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"primary200",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),(0,s.jsxs)(m.s,{style:{flex:1},children:[(0,s.jsx)(ps,{level:o,isActive:D,isCollapsable:b,children:(0,s.jsxs)(Re,{alignItems:"center",isCollapsable:b,...b&&{onClick:()=>f(x),"aria-expanded":D,onKeyDown:({key:T})=>(T==="Enter"||T===" ")&&f(x),tabIndex:0,role:"button"},title:h,children:[(0,s.jsx)(A.o,{ellipsis:!0,children:ce(h)}),O&&(0,s.jsx)(Ie,{}),(0,s.jsx)(ne,{$isActive:D})]})}),(0,s.jsx)(m.s,{style:{flex:1},children:r.map(({actionId:T,label:W,isActionRelatedToCurrentProperty:U})=>{if(!U)return(0,s.jsx)(ye,{},T);const R=[...n.split(".."),T,"properties",d,...a.split(".."),x],Z=M(l,R,!1);if(!P)return(0,s.jsx)(m.s,{position:"relative",width:F,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:t,name:R.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${W}`}),onValueChange:V=>{p({target:{name:R.join(".."),value:V}})},value:Z})},W);const{hasAllActionsSelected:G,hasSomeActionsSelected:ie}=Y(Z);return(0,s.jsx)(m.s,{position:"relative",width:F,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:t,name:R.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${W}`}),onValueChange:V=>{u({target:{name:R.join(".."),value:V}})},value:G,indeterminate:ie},W)},W)})})]})]}),_&&D&&(0,s.jsx)(j.a,{paddingBottom:2,children:(0,s.jsx)(ke,{isFormDisabled:t,parentName:`${a}..${x}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:d,recursiveLevel:o+1,childrenForm:_.children})})]},x)})]})},us=(0,L.Ay)(j.a)`
  border-left: ${({isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,ps=(0,L.Ay)(m.s)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ne} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${oe(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&oe(t)};
`,hs=L.Ay.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,gs=(0,L.Ay)(j.a)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,ms=L.Ay.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,Cs=({headers:e=[],label:t})=>{const{formatMessage:o}=(0,K.A)();return(0,s.jsxs)(m.s,{children:[(0,s.jsx)(m.s,{width:fe,height:de,shrink:0,alignItems:"center",paddingLeft:6,children:(0,s.jsx)(A.o,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(n=>n.isActionRelatedToCurrentProperty?(0,s.jsx)(m.s,{width:F,shrink:0,justifyContent:"center",children:(0,s.jsx)(A.o,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):(0,s.jsx)(m.s,{width:F,shrink:0},n.label))]})},oe=e=>(0,L.AH)`
  ${A.o} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold};
  }
  ${ne} {
    display: block;

    path {
      fill: ${e.colors.primary600};
    }
  }
`,xs=({onClick:e,className:t,hasConditions:o=!1,variant:n="tertiary"})=>{const{formatMessage:r}=(0,K.A)();return(0,s.jsx)(fs,{hasConditions:o,className:t,children:(0,s.jsx)($.$,{variant:n,startIcon:(0,s.jsx)(Ze.A,{}),onClick:e,children:r({id:"global.settings",defaultMessage:"Settings"})})})},fs=(0,L.Ay)(j.a)`
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ue=(0,L.Ay)(xs)``,Ke=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:o,onClosed:n,onToggle:r})=>{const{formatMessage:a}=(0,K.A)(),{availableConditions:d,modifiedData:i,onChangeConditions:l}=z(),u=y.useMemo(()=>Object.entries(Ce(d,"category")),[d]),p=e.filter(({isDisplayed:h,hasSomeActionsSelected:x,hasAllActionsSelected:O})=>h&&Boolean(x||O)),[g,C]=y.useState(_s(p,i,u)),f=(h,x)=>{C((0,Ee.Ay)(O=>{O[h]||(O[h]={}),O[h].default||(O[h].default={}),O[h].default=x}))},_=()=>{const h=Object.entries(g).reduce((x,O)=>{const[P,B]=O,E=Object.values(B).reduce((b,D)=>({...b,...D}),{});return x[P]=E,x},{});l(h),r()};return(0,s.jsxs)(S.k,{labelledBy:"condition-modal-breadcrumbs",onClose:n,children:[(0,s.jsx)(I.r,{children:(0,s.jsx)(es.B,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((h,x,O)=>(0,s.jsx)(ss.m,{isCurrent:x===O.length-1,children:ts(a({id:h,defaultMessage:h}))},h))})}),(0,s.jsxs)(J.c,{children:[p.length===0&&(0,s.jsx)(A.o,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,s.jsx)("ul",{children:p.map(({actionId:h,label:x,pathToConditionsObject:O},P)=>{const B=O.join("..");return(0,s.jsx)(ys,{arrayOfOptionsGroupedByCategory:u,label:x,isFormDisabled:o,isGrey:P%2===0,name:B,onChange:f,value:M(g,B,{})},h)})})]}),(0,s.jsx)(Q.j,{startActions:(0,s.jsx)($.$,{variant:"tertiary",onClick:r,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)($.$,{onClick:_,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})},_s=(e,t,o)=>e.reduce((n,r)=>{const a=M(t,[...r.pathToConditionsObject,"conditions"],{}),d=o.reduce((i,l)=>{const[u,p]=l,g=p.reduce((C,f)=>(C[f.id]=M(a,f.id,!1),C),{});return i[u]=g,i},{});return n[r.pathToConditionsObject.join("..")]=d,n},{}),ys=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:d})=>{const{formatMessage:i}=(0,K.A)(),l=u=>{a&&a(r,Os(e,u))};return(0,s.jsxs)(m.s,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,s.jsxs)(m.s,{paddingLeft:6,style:{width:180},children:[(0,s.jsxs)(A.o,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,s.jsx)(A.o,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),(0,s.jsxs)(A.o,{variant:"sigma",textColor:"neutral600",children:["\xA0",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,s.jsx)(j.a,{style:{maxWidth:430,width:"100%"},children:(0,s.jsx)(pe.B,{id:r,customizeContent:(u=[])=>`${u.length} currently selected`,onChange:l,value:js(d),options:As(e),disabled:t})})]})},js=e=>Object.values(e).map(t=>Object.entries(t).filter(([,o])=>o).map(([o])=>o)).flat(),As=e=>e.reduce((t,[o,n])=>(t.push({label:ce(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),t),[]),Os=(e,t)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:t.includes(n.id),...o}),{}),Es=({actions:e=[],isFormDisabled:t,pathToData:o,subjects:n=[]})=>{const[r,a]=y.useState(null),d=i=>()=>{a(r===i?null:i)};return(0,s.jsx)(s.Fragment,{children:n.map(({uid:i,label:l,properties:u},p)=>{const g=r===i,C=e.map(f=>({...f,isDisplayed:Array.isArray(f.subjects)&&f.subjects.indexOf(i)!==-1}));return(0,s.jsxs)(m.s,{direction:"column",display:"inline-flex",minWidth:"100%",borderColor:"primary600",borderWidth:g?1:0,children:[(0,s.jsx)(bs,{availableActions:C,isActive:g,isGrey:p%2===0,isFormDisabled:t,label:l,onClickToggle:d(i),pathToData:[o,i].join("..")}),g&&u.map(({label:f,value:_,children:h})=>(0,s.jsx)(as,{availableActions:C,childrenForm:h,isFormDisabled:t,label:f,pathToData:[o,i].join(".."),propertyName:_},_))]},i)})})},bs=({availableActions:e=[],isActive:t=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:d})=>{const[i,l]=y.useState(!1),{formatMessage:u}=(0,K.A)(),{modifiedData:p,onChangeParentCheckbox:g,onChangeSimpleCheckbox:C}=z(),f=()=>{l(b=>!b)},_=()=>{l(!1)},h=M(p,d.split(".."),{}),x=y.useMemo(()=>Object.keys(h).reduce((b,D)=>(b[D]=be(h[D],"conditions"),b),{}),[h]),{hasAllActionsSelected:O,hasSomeActionsSelected:P}=Y(x),B=y.useMemo(()=>Ms(e,p,d),[e,p,d]),E=B.some(b=>b.hasConditions);return(0,s.jsxs)(vs,{isActive:t,children:[(0,s.jsxs)(Ue,{height:de,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[(0,s.jsx)(We,{isCollapsable:!0,isFormDisabled:n,label:r,checkboxName:d,onChange:g,onClick:a,someChecked:P,value:O,isActive:t,children:(0,s.jsx)(Ve,{paddingLeft:2,children:t?(0,s.jsx)(Qe.A,{}):(0,s.jsx)(qe.A,{})})}),(0,s.jsx)(m.s,{style:{flex:1},children:B.map(({actionId:b,hasSomeActionsSelected:D,isDisplayed:T,...W})=>{if(!T)return(0,s.jsx)(ye,{},b);const{hasConditions:U,hasAllActionsSelected:R,isParentCheckbox:Z,checkboxName:G,label:ie}=W;return Z?(0,s.jsxs)(Ne,{justifyContent:"center",alignItems:"center",children:[U&&(0,s.jsx)(j.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(v.J,{disabled:n,name:G,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${ie} ${r}`}),onValueChange:V=>{g({target:{name:G,value:V}})},indeterminate:D,value:R})]},b):(0,s.jsxs)(Ne,{justifyContent:"center",alignItems:"center",children:[U&&(0,s.jsx)(j.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(v.J,{disabled:n,indeterminate:U,name:G,onValueChange:V=>{C({target:{name:G,value:V}})},value:R})]},b)})}),i&&(0,s.jsx)(Ke,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:B,isFormDisabled:n,onClosed:_,onToggle:f})]}),(0,s.jsx)(j.a,{transform:"translateY(10px)",right:"9px",position:"absolute",children:(0,s.jsx)(ue,{onClick:f,hasConditions:E})})]})},Ms=(e,t,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:d})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=se(a)?[...i,"properties","enabled"]:i,u=M(t,[...i,"conditions"],null),p={actionId:n,checkboxName:l.join(".."),hasConditions:X(u).some(_=>_),isDisplayed:r,label:d,pathToConditionsObject:i};if(se(a)){const _=M(t,l,!1);return{...p,hasAllActionsSelected:_,hasSomeActionsSelected:_,isParentCheckbox:!1}}const g=M(t,l,null),{hasAllActionsSelected:C,hasSomeActionsSelected:f}=Y(g);return{...p,hasAllActionsSelected:C,hasSomeActionsSelected:f,isParentCheckbox:!0}}),je=(e,t)=>`
  ${Ue} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
  }
  ${Ve} {
    display: flex;
  }
  ${ue} {
    display: block;
  }
  &:hover {
    ${oe(e)}
  }

  &:focus-within {
    ${()=>je(e,t)}
  }
`,Ue=(0,L.Ay)(m.s)`
  border: 1px solid transparent;
`,vs=L.Ay.div`
  display: inline-flex;
  min-width: 100%;

  ${ue} {
    display: none;
  }
  ${({isActive:e,theme:t})=>e&&je(t,e)}
  &:hover {
    ${({theme:e,isActive:t})=>je(e,t)}
  }
`,Ne=(0,L.Ay)(m.s)`
  width: ${F};
  position: relative;
`,Ve=(0,L.Ay)(j.a)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ps=({actions:e=[],isFormDisabled:t,kind:o})=>{const{formatMessage:n}=(0,K.A)(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=z(),d=e.filter(({subjects:l})=>l&&l.length),i=y.useMemo(()=>{const l=d.map(({actionId:C})=>C),u=r[o],p=l.reduce((C,f)=>(Object.keys(u).forEach(_=>{const h=M(u,[_,f]),x={[_]:_e(h)};C[f]?C[f]={...C[f],...x}:C[f]=x}),C),{});return Object.keys(p).reduce((C,f)=>(C[f]=Y(p[f]),C),{})},[r,d,o]);return(0,s.jsx)(j.a,{paddingBottom:4,paddingTop:6,style:{paddingLeft:fe},children:(0,s.jsx)(m.s,{gap:0,children:d.map(({label:l,actionId:u})=>(0,s.jsxs)(m.s,{shrink:0,width:F,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,s.jsx)(A.o,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),(0,s.jsx)(v.J,{disabled:t,onValueChange:p=>{a(o,u,p)},name:u,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),value:M(i,[u,"hasAllActionsSelected"],!1),indeterminate:M(i,[u,"hasSomeActionsSelected"],!1)})]},u))})})},He=({isFormDisabled:e,kind:t,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,d)=>a.label.localeCompare(d.label));return(0,s.jsxs)(Ts,{background:"neutral0",children:[(0,s.jsx)(Ps,{actions:o,kind:t,isFormDisabled:e}),(0,s.jsx)(Es,{actions:o,isFormDisabled:e,pathToData:t,subjects:r})]})},Ts=(0,L.Ay)(j.a)`
  overflow-x: auto;
`,Fe=({layout:e,...t})=>{const[o,n]=y.useState(null),r=a=>{n(a===o?null:a)};return(0,s.jsx)(j.a,{padding:6,background:"neutral0",children:e.map(({category:a,categoryId:d,childrenForm:i},l)=>(0,s.jsx)(Ds,{childrenForm:i,isOpen:o===a,isWhite:l%2===1,name:a,onOpenCategory:r,pathToData:[t.kind,d],...t},a))})},Ds=({childrenForm:e,kind:t,name:o,isOpen:n=!1,isFormDisabled:r=!1,isWhite:a,onOpenCategory:d,pathToData:i})=>{const{formatMessage:l}=(0,K.A)(),u=()=>{d(o)},p=o.split("::").pop()??"";return(0,s.jsxs)(q.n,{expanded:n,onToggle:u,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,s.jsx)(he.P,{title:ce(p),description:`${l({id:"Settings.permissions.category",defaultMessage:p},{category:p})} ${t==="plugins"?"plugin":t}`}),(0,s.jsx)(ge.u,{children:(0,s.jsx)(j.a,{padding:6,children:e.map(({actions:g,subCategoryName:C,subCategoryId:f})=>(0,s.jsx)(Ss,{actions:g,categoryName:p,isFormDisabled:r,subCategoryName:C,pathToData:[...i,f]},C))})})]})},Ss=({actions:e=[],categoryName:t,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const[a,d]=y.useState(!1),{modifiedData:i,onChangeParentCheckbox:l,onChangeSimpleCheckbox:u}=z(),{formatMessage:p}=(0,K.A)(),g=M(i,r,{}),C=y.useMemo(()=>Object.keys(g).reduce((E,b)=>(E[b]=_e(g[b]),E),{}),[g]),{hasAllActionsSelected:f,hasSomeActionsSelected:_}=Y(C),h=()=>{d(E=>!E)},x=()=>{d(!1)},O=y.useMemo(()=>e.map(E=>{const b=[...r,E.action,"properties","enabled"],D=M(i,b,!1),T=M(i,[...r,E.action,"conditions"],{}),W=X(T).some(U=>U);return{...E,isDisplayed:D,checkboxName:b.join(".."),hasSomeActionsSelected:D,value:D,hasConditions:W,label:E.displayName,actionId:E.action,pathToConditionsObject:[...r,E.action]}}),[e,i,r]),P=M(i,[...r],{}),B=X(Object.entries(P).reduce((E,b)=>{const[D,{conditions:T}]=b;return E[D]=T,E},{})).some(E=>E);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(j.a,{children:[(0,s.jsxs)(m.s,{justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(j.a,{paddingRight:4,children:(0,s.jsx)(A.o,{variant:"sigma",textColor:"neutral600",children:n})}),(0,s.jsx)($s,{flex:1}),(0,s.jsx)(j.a,{paddingLeft:4,children:(0,s.jsx)(re.S,{name:r.join(".."),disabled:o,onValueChange:E=>{l({target:{name:r.join(".."),value:E}})},indeterminate:_,value:f,children:p({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsxs)(m.s,{paddingTop:6,paddingBottom:6,children:[(0,s.jsx)(we.x,{gap:2,style:{flex:1},children:O.map(({checkboxName:E,value:b,action:D,displayName:T,hasConditions:W})=>(0,s.jsx)(Ge.E,{col:3,children:(0,s.jsx)(Ls,{disabled:o,hasConditions:W,children:(0,s.jsx)(re.S,{name:E,disabled:o,onValueChange:U=>{u({target:{name:E,value:U}})},value:b,children:T})})},D))}),(0,s.jsx)(ue,{hasConditions:B,onClick:h})]})]}),a&&(0,s.jsx)(Ke,{headerBreadCrumbs:[t,n],actions:O,isFormDisabled:o,onClosed:x,onToggle:h})]})},$s=(0,L.Ay)(j.a)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ls=L.Ay.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Bs=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Rs=y.forwardRef(({layout:e,isFormDisabled:t,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:d},i]=y.useReducer(Ws,Is,()=>ks(e,o)),{formatMessage:l}=(0,K.A)();y.useImperativeHandle(n,()=>({getPermissions(){const _=(0,Oe.iv)(r.collectionTypes,d.collectionTypes),h=(0,Oe.iv)(r.singleTypes,d.singleTypes),x={..._,...h};let O;return se(x)?O=!1:O=Object.values(x).some((P={})=>Object.values(P).some(B=>ae(B,"conditions"))),{permissionsToSend:is(d),didUpdateConditions:O}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(_,h,x,O)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:_,propertyName:h,rowName:x,value:O})},p=(_,h,x)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:_,actionId:h,value:x})},g=_=>{i({type:"ON_CHANGE_CONDITIONS",conditions:_})},C=y.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:_,value:h})},[]),f=y.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:_,value:h})},[]);return(0,s.jsx)(ns,{availableConditions:e.conditions,modifiedData:d,onChangeConditions:g,onChangeSimpleCheckbox:C,onChangeParentCheckbox:f,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:p,children:(0,s.jsxs)(Je.f,{id:"tabs",label:l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,s.jsx)(Ae.t,{children:Bs.map(_=>(0,s.jsx)(Ae.o,{children:l({id:_.labelId,defaultMessage:_.defaultMessage})},_.id))}),(0,s.jsxs)(ee.T,{style:{position:"relative"},children:[(0,s.jsx)(ee.K,{children:(0,s.jsx)(He,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),(0,s.jsx)(ee.K,{children:(0,s.jsx)(He,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),(0,s.jsx)(ee.K,{children:(0,s.jsx)(Fe,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),(0,s.jsx)(ee.K,{children:(0,s.jsx)(Fe,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})]})})}),Is={initialData:{},modifiedData:{},layouts:{}},Ws=(e,t)=>(0,Ee.Ay)(e,o=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=t,d=["modifiedData",n];Object.keys(M(e,d)).forEach(i=>{const l=M(e,[...d,i,r],void 0);if(l){let u=te(l,a);if(!a&&u.conditions){const p=te(u.conditions,!1);u={...u,conditions:p}}H(o,[...d,i,r],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:d}=t;let i=me(e.modifiedData);const l=n.split(".."),u=M(i,l,{});Object.keys(u).forEach(p=>{if(ae(u[p],`properties.${r}`)){const g=M(u,[p,"properties",r,a]),C=[...l,p,"properties",r,a];if(!(0,w.F)(g))H(i,C,d);else{const f=te(g,d);H(i,C,f)}}}),d||(i=le(i)),H(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(n=>{const[r,a]=n;H(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=me(e.modifiedData);H(n,[...t.keys.split("..")],t.value),t.value||(n=le(n)),H(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=t,a=[...n.split("..")];let d=me(e.modifiedData);const i=M(d,a,{}),l=te(i,r);H(d,a,l),r||(d=le(d)),H(o,["modifiedData"],d);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),ks=(e,t)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:d}}=e,i={collectionTypes:n,singleTypes:r,plugins:Be(a,"plugin"),settings:Be(d,"category")},l={collectionTypes:Le(n,o,t),singleTypes:Le(r,o,t),plugins:$e(i.plugins,o,t),settings:$e(i.settings,o,t)};return{initialData:l,modifiedData:l,layouts:i}}},80846:(N,k,c)=>{"use strict";c.d(k,{B:()=>j});var s=c(92132),y=c(63891),m=c(5391);const j=({options:A,...$})=>(0,s.jsx)(m.KF,{...$,children:A.map(S=>"children"in S?(0,s.jsx)(m.np,{label:S.label,values:S.children.map(I=>I.value.toString()),children:S.children.map(I=>(0,s.jsx)(v,{value:I.value,children:I.label},I.value))},S.label):(0,s.jsx)(m.fe,{value:S.value,children:S.label},S.value))}),v=(0,y.Ay)(m.fe)`
  padding-left: ${({theme:A})=>A.spaces[7]};
`},32372:(N,k,c)=>{"use strict";c.d(k,{B:()=>I});var s=c(92132),y=c(21272),m=c(63891),j=c(44370),v=c(57842);const A=()=>(0,s.jsx)(j.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,s.jsx)(v.o,{variant:"pi",textColor:"neutral500",children:"/"})});A.displayName="Divider";var $=c(43242);const S=(0,m.Ay)($.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:J})=>`calc(-1*${J.spaces[2]})`};
  }
`,I=({label:J,children:Q,...pe})=>{const q=y.Children.toArray(Q);return(0,s.jsx)(j.a,{"aria-label":J,...pe,children:(0,s.jsx)(S,{as:"ol",children:y.Children.map(q,(he,ge)=>{const re=q.length>1&&ge+1<q.length;return(0,s.jsxs)($.s,{inline:!0,as:"li",children:[he,re&&(0,s.jsx)(A,{})]})})})})};I.displayName="Breadcrumbs"},714:(N,k,c)=>{"use strict";c.d(k,{m:()=>j});var s=c(92132),y=c(44370),m=c(57842);const j=({children:v,isCurrent:A=!1,...$})=>(0,s.jsx)(y.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,s.jsx)(m.o,{variant:"pi",textColor:"neutral800",fontWeight:A?"bold":"normal","aria-current":A,...$,children:v})});j.displayName="Crumb"}}]);
