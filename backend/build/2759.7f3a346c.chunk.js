"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2759],{94061:(j,m,t)=>{t.d(m,{a:()=>g});var i=t(63891),d=t(28672),a=t(5146);const o={color:!0,cursor:!0,height:!0,width:!0},g=i.Ay.div.withConfig({shouldForwardProp:(e,s)=>!o[e]&&s(e)})`
  // Font
  font-size: ${({fontSize:e,theme:s})=>(0,a.K)(s.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:s})=>(0,a.K)(e.colors,s,s)};
  color: ${({theme:e,color:s})=>(0,a.K)(e.colors,s,void 0)};

  // Spaces
  ${({theme:e,padding:s})=>(0,d.A)("padding",s,e)}
  ${({theme:e,paddingTop:s})=>(0,d.A)("padding-top",s,e)}
  ${({theme:e,paddingRight:s})=>(0,d.A)("padding-right",s,e)}
  ${({theme:e,paddingBottom:s})=>(0,d.A)("padding-bottom",s,e)}
  ${({theme:e,paddingLeft:s})=>(0,d.A)("padding-left",s,e)}
  ${({theme:e,marginLeft:s})=>(0,d.A)("margin-left",s,e)}
  ${({theme:e,marginRight:s})=>(0,d.A)("margin-right",s,e)}
  ${({theme:e,marginTop:s})=>(0,d.A)("margin-top",s,e)}
  ${({theme:e,marginBottom:s})=>(0,d.A)("margin-bottom",s,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:s})=>s?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:s})=>s?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:s,borderRadius:f})=>s?e.borderRadius:f};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:s})=>(0,a.K)(s.colors,e,void 0)};
  border: ${({theme:e,borderColor:s,borderStyle:f,borderWidth:P})=>{if(s&&!f&&typeof P>"u")return`1px solid ${e.colors[s]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:s})=>(0,a.K)(e.shadows,s,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:s})=>e?e(s):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  right: ${({right:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  top: ${({top:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  bottom: ${({bottom:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  min-width: ${({minWidth:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  height: ${({height:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:s})=>(0,a.K)(s.spaces,e,e)};
  min-height: ${({minHeight:e,theme:s})=>(0,a.K)(s.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:s})=>(0,a.K)(e.lineHeights,s,s)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},83997:(j,m,t)=>{t.d(m,{s:()=>g});var i=t(63891),d=t(28672),a=t(94061);const o={direction:!0},g=(0,i.Ay)(a.a).withConfig({shouldForwardProp:(e,s)=>!o[e]&&s(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:s})=>s?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:s})=>(0,d.A)("gap",e,s)};
  justify-content: ${({justifyContent:e})=>e};
`},30893:(j,m,t)=>{t.d(m,{o:()=>I});var i=t(63891);const d="alpha",a="beta",o="delta",g="epsilon",e="omega",s="pi",f="sigma",P=[d,a,o,g,e,s,f],y=({ellipsis:u=!1})=>u&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,W=({variant:u=e,theme:n})=>{switch(u){case d:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case a:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case o:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case g:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case s:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case f:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var D=t(5146);const A={fontSize:!0,fontWeight:!0},I=i.Ay.span.withConfig({shouldForwardProp:(u,n)=>!A[u]&&n(u)})`
  ${W}
  ${y}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:u,fontWeight:n})=>(0,D.K)(u.fontWeights,n,void 0)};
  font-size: ${({theme:u,fontSize:n})=>(0,D.K)(u.fontSizes,n,void 0)};
  line-height: ${({theme:u,lineHeight:n})=>(0,D.K)(u.lineHeights,n,n)};
  color: ${({theme:u,textColor:n})=>u.colors[n||"neutral800"]};
  text-align: ${({textAlign:u})=>u};
  text-decoration: ${({textDecoration:u})=>u};
  text-transform: ${({textTransform:u})=>u};
`},28672:(j,m,t)=>{t.d(m,{A:()=>i});const i=(d,a,o)=>{if(!a)return;if(typeof a=="object")return(Array.isArray(a)?a:[a?.desktop,a?.tablet,a?.mobile]).reduce((f,P,y)=>{if(P)switch(y){case 0:return`${f}${d}: ${o.spaces[P]};`;case 1:return`${f}${o.mediaQueries.tablet}{${d}: ${o.spaces[P]};}`;case 2:return`${f}${o.mediaQueries.mobile}{${d}: ${o.spaces[P]};}`;default:return f}return f},"");const g=o.spaces[a]??a;return`${d}: ${g};`}},5146:(j,m,t)=>{t.d(m,{K:()=>a});function i(o,g){return typeof o=="string"?!1:g in o}function d(o){return o&&typeof o=="object"&&!Array.isArray(o)}function a(o,g,e){return g&&i(o,g)?o[g]:e}},37679:(j,m,t)=>{t.d(m,{B:()=>P});var i=t(92132),d=t(21272),a=t(63891),o=t(94061),g=t(30893);const e=()=>(0,i.jsx)(o.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,i.jsx)(g.o,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var s=t(83997);const f=(0,a.Ay)(s.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:y})=>`calc(-1*${y.spaces[2]})`};
  }
`,P=({label:y,children:W,...D})=>{const A=d.Children.toArray(W);return(0,i.jsx)(o.a,{"aria-label":y,...D,children:(0,i.jsx)(f,{as:"ol",children:d.Children.map(A,(I,u)=>{const n=A.length>1&&u+1<A.length;return(0,i.jsxs)(s.s,{inline:!0,as:"li",children:[I,n&&(0,i.jsx)(e,{})]})})})})};P.displayName="Breadcrumbs"},60043:(j,m,t)=>{t.d(m,{m:()=>o});var i=t(92132),d=t(94061),a=t(30893);const o=({children:g,isCurrent:e=!1,...s})=>(0,i.jsx)(d.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,i.jsx)(a.o,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...s,children:g})});o.displayName="Crumb"},72759:(j,m,t)=>{t.r(m),t.d(m,{ProvidersPage:()=>oe,default:()=>be});var i=t(92132),d=t(21272),a=t(44158),o=t(81926),g=t(50642),e=t(6479),s=t(53900),f=t(43242),P=t(57564),y=t(68065),W=t(32161),D=t(69564),A=t(53432),I=t(55794),u=t(43121),n=t(32559),_e=t(79318),ge=t(70768),se=t(34508),R=t(21270),z=t(57842),pe=t(96586),he=t(83314),me=t(19106),_=t(32474),fe=t(31708),Ee=t(39404),N=t(54894),H=t(74930),ve=t(37679),Pe=t(60043),Me=t(61535),r=t(33544),p=t(88724),Le=t(77965),l=t(12083);const Q=({description:E,disabled:K,intlLabel:L,error:x,name:b,onChange:B,placeholder:h,providerToEditName:T,type:O,value:M})=>{const{formatMessage:v}=(0,N.A)(),C=b==="noName"?`${window.strapi.backendURL}/api/connect/${T}/callback`:M,U=v({id:L.id,defaultMessage:L.defaultMessage},{provider:T,...L.values}),$=E?v({id:E.id,defaultMessage:E.defaultMessage},{provider:T,...E.values}):"";if(O==="bool")return(0,i.jsx)(a.l,{"aria-label":b,checked:M,disabled:K,hint:$,label:U,name:b,offLabel:v({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:v({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:w=>{B({target:{name:b,value:w.target.checked}})}});const J=h?v({id:h.id,defaultMessage:h.defaultMessage},{...h.values}):"",Z=x?v({id:x,defaultMessage:x}):"";return(0,i.jsx)(o.k,{"aria-label":b,disabled:K,error:Z,label:U,name:b,onChange:B,placeholder:J,type:O,value:C})};Q.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},Q.propTypes={description:r.shape({id:r.string.isRequired,defaultMessage:r.string.isRequired,values:r.object}),disabled:r.bool,error:r.string,intlLabel:r.shape({id:r.string.isRequired,defaultMessage:r.string.isRequired,values:r.object}).isRequired,name:r.string.isRequired,onChange:r.func.isRequired,placeholder:r.shape({id:r.string.isRequired,defaultMessage:r.string.isRequired,values:r.object}),providerToEditName:r.string.isRequired,type:r.string.isRequired,value:r.oneOfType([r.bool,r.string])};const V=({headerBreadcrumbs:E,initialData:K,isSubmiting:L,layout:x,isOpen:b,onSubmit:B,onToggle:h,providerToEditName:T})=>{const{formatMessage:O}=(0,N.A)();return b?(0,i.jsxs)(g.k,{onClose:h,labelledBy:"title",children:[(0,i.jsx)(e.r,{children:(0,i.jsx)(ve.B,{label:E.join(", "),children:E.map((M,v,C)=>(0,i.jsx)(Pe.m,{isCurrent:v===C.length-1,children:M},M))})}),(0,i.jsx)(Me.l1,{onSubmit:M=>B(M),initialValues:K,validationSchema:x.schema,validateOnChange:!1,children:({errors:M,handleChange:v,values:C})=>(0,i.jsxs)(_.lV,{children:[(0,i.jsx)(s.c,{children:(0,i.jsx)(f.s,{direction:"column",alignItems:"stretch",gap:1,children:(0,i.jsx)(P.x,{gap:5,children:x.form.map(U=>U.map($=>(0,i.jsx)(y.E,{col:$.size,xs:12,children:(0,i.jsx)(Q,{...$,error:M[$.name],onChange:v,value:C[$.name],providerToEditName:T})},$.name)))})})}),(0,i.jsx)(W.j,{startActions:(0,i.jsx)(D.$,{variant:"tertiary",onClick:h,type:"button",children:O({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,i.jsx)(D.$,{type:"submit",loading:L,children:O({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};V.defaultProps={initialData:null,providerToEditName:null},V.propTypes={headerBreadcrumbs:r.arrayOf(r.string).isRequired,initialData:r.object,layout:r.shape({form:r.arrayOf(r.array),schema:r.object}).isRequired,isOpen:r.bool.isRequired,isSubmiting:r.bool.isRequired,onSubmit:r.func.isRequired,onToggle:r.func.isRequired,providerToEditName:r.string};const te={id:(0,p.g)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ie={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},k={id:(0,p.g)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},G={id:(0,p.g)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ae={id:(0,p.g)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},ne={id:(0,p.g)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},S={id:(0,p.g)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},re={id:(0,p.g)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},X={email:{form:[[{intlLabel:G,name:"enabled",type:"bool",description:k,size:6}]],schema:l.Ik().shape({enabled:l.lc().required(_.iW.required)})},providers:{form:[[{intlLabel:G,name:"enabled",type:"bool",description:k,size:6,validations:{required:!0}}],[{intlLabel:ae,name:"key",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:re,name:"secret",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:te,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ne,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:l.Ik().shape({enabled:l.lc().required(_.iW.required),key:l.Yj().when("enabled",{is:!0,then:l.Yj().required(_.iW.required),otherwise:l.Yj()}),secret:l.Yj().when("enabled",{is:!0,then:l.Yj().required(_.iW.required),otherwise:l.Yj()}),callback:l.Yj().when("enabled",{is:!0,then:l.Yj().required(_.iW.required),otherwise:l.Yj()})})},providersWithSubdomain:{form:[[{intlLabel:G,name:"enabled",type:"bool",description:k,size:6,validations:{required:!0}}],[{intlLabel:ae,name:"key",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:re,name:"secret",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,p.g)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:S,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,p.g)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,p.g)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:te,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ne,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:l.Ik().shape({enabled:l.lc().required(_.iW.required),key:l.Yj().when("enabled",{is:!0,then:l.Yj().required(_.iW.required),otherwise:l.Yj()}),secret:l.Yj().when("enabled",{is:!0,then:l.Yj().required(_.iW.required),otherwise:l.Yj()}),subdomain:l.Yj().when("enabled",{is:!0,then:l.Yj().required(_.iW.required),otherwise:l.Yj()}),callback:l.Yj().when("enabled",{is:!0,then:l.Yj().required(_.iW.required),otherwise:l.Yj()})})}},oe=()=>{const{formatMessage:E,locale:K}=(0,N.A)(),L=(0,H.useQueryClient)(),{trackUsage:x}=(0,_.z1)(),[b,B]=d.useState(!1),[h,T]=d.useState(null),O=(0,_.hN)(),{lockApp:M,unlockApp:v}=(0,_.MA)(),{get:C,put:U}=(0,_.ry)(),{formatAPIError:$}=(0,_.wq)(),J=(0,_.QM)(K,{sensitivity:"base"});(0,_.L4)();const{isLoading:Z,allowedActions:{canUpdate:w}}=(0,_.ec)({update:p.P.updateProviders}),{isLoading:ye,data:q}=(0,H.useQuery)(["users-permissions","get-providers"],async()=>{const{data:c}=await C("/users-permissions/providers");return c},{initialData:{}}),de=(0,H.useMutation)(c=>U("/users-permissions/providers",c),{async onSuccess(){await L.invalidateQueries(["users-permissions","providers"]),O({type:"success",message:{id:(0,p.g)("notification.success.submit")}}),x("didEditAuthenticationProvider"),ee(),v()},onError(c){O({type:"warning",message:$(c)}),v()},refetchActive:!1}),Y=Object.entries(q).reduce((c,[F,Oe])=>{const{icon:ue,enabled:je,subdomain:Ae}=Oe;return c.push({name:F,icon:ue==="envelope"?["fas","envelope"]:["fab",ue],enabled:je,subdomain:Ae}),c},[]).sort((c,F)=>J.compare(c.name,F.name)),xe=ye||Z,le=d.useMemo(()=>h?!!Y.find(F=>F.name===h)?.subdomain:!1,[Y,h]),$e=d.useMemo(()=>h==="email"?X.email:le?X.providersWithSubdomain:X.providers,[h,le]),ee=()=>{B(c=>!c)},ce=c=>{w&&(T(c.name),ee())},De=async c=>{M(),x("willEditAuthenticationProvider"),de.mutate({providers:{...q,[h]:c}})};return(0,i.jsxs)(A.P,{children:[(0,i.jsx)(_.x7,{name:E({id:(0,p.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,i.jsxs)(I.g,{children:[(0,i.jsx)(u.Q,{title:E({id:(0,p.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),xe?(0,i.jsx)(_.Bl,{}):(0,i.jsx)(n.s,{children:(0,i.jsxs)(_e.X,{colCount:3,rowCount:Y.length+1,children:[(0,i.jsx)(ge.d,{children:(0,i.jsxs)(se.Tr,{children:[(0,i.jsx)(R.Th,{children:(0,i.jsx)(z.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.name",defaultMessage:"Name"})})}),(0,i.jsx)(R.Th,{children:(0,i.jsx)(z.o,{variant:"sigma",textColor:"neutral600",children:E({id:(0,p.g)("Providers.status"),defaultMessage:"Status"})})}),(0,i.jsx)(R.Th,{children:(0,i.jsx)(z.o,{variant:"sigma",children:(0,i.jsx)(pe.s,{children:E({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,i.jsx)(he.N,{children:Y.map(c=>(0,i.jsxs)(se.Tr,{...(0,_.qM)({fn:()=>ce(c),condition:w}),children:[(0,i.jsx)(R.Td,{width:"45%",children:(0,i.jsx)(z.o,{fontWeight:"semiBold",textColor:"neutral800",children:c.name})}),(0,i.jsx)(R.Td,{width:"65%",children:(0,i.jsx)(z.o,{textColor:c.enabled?"success600":"danger600","data-testid":`enable-${c.name}`,children:c.enabled?E({id:"global.enabled",defaultMessage:"Enabled"}):E({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,i.jsx)(R.Td,{..._.dG,children:w&&(0,i.jsx)(me.K,{onClick:()=>ce(c),noBorder:!0,icon:(0,i.jsx)(fe.A,{}),label:"Edit"})})]},c.name))})]})})]}),(0,i.jsx)(V,{initialData:q[h],isOpen:b,isSubmiting:de.isLoading,layout:$e,headerBreadcrumbs:[E({id:(0,p.g)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),Ee(h)],onToggle:ee,onSubmit:De,providerToEditName:h})]})},be=()=>(0,i.jsx)(_.kz,{permissions:p.P.readProviders,children:(0,i.jsx)(oe,{})})}}]);
