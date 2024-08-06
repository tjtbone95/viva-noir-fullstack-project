"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[1093],{94061:(A,p,i)=>{i.d(p,{a:()=>_});var t=i(63891),l=i(28672),a=i(5146);const o={color:!0,cursor:!0,height:!0,width:!0},_=t.Ay.div.withConfig({shouldForwardProp:(s,e)=>!o[s]&&e(s)})`
  // Font
  font-size: ${({fontSize:s,theme:e})=>(0,a.K)(e.fontSizes,s,s)};

  // Colors
  background: ${({theme:s,background:e})=>(0,a.K)(s.colors,e,e)};
  color: ${({theme:s,color:e})=>(0,a.K)(s.colors,e,void 0)};

  // Spaces
  ${({theme:s,padding:e})=>(0,l.A)("padding",e,s)}
  ${({theme:s,paddingTop:e})=>(0,l.A)("padding-top",e,s)}
  ${({theme:s,paddingRight:e})=>(0,l.A)("padding-right",e,s)}
  ${({theme:s,paddingBottom:e})=>(0,l.A)("padding-bottom",e,s)}
  ${({theme:s,paddingLeft:e})=>(0,l.A)("padding-left",e,s)}
  ${({theme:s,marginLeft:e})=>(0,l.A)("margin-left",e,s)}
  ${({theme:s,marginRight:e})=>(0,l.A)("margin-right",e,s)}
  ${({theme:s,marginTop:e})=>(0,l.A)("margin-top",e,s)}
  ${({theme:s,marginBottom:e})=>(0,l.A)("margin-bottom",e,s)}

  // Responsive hiding
  ${({theme:s,hiddenS:e})=>e?`${s.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:s,hiddenXS:e})=>e?`${s.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:s,hasRadius:e,borderRadius:c})=>e?s.borderRadius:c};
  border-style: ${({borderStyle:s})=>s};
  border-width: ${({borderWidth:s})=>s};
  border-color: ${({borderColor:s,theme:e})=>(0,a.K)(e.colors,s,void 0)};
  border: ${({theme:s,borderColor:e,borderStyle:c,borderWidth:M})=>{if(e&&!c&&typeof M>"u")return`1px solid ${s.colors[e]}`}};

  // Shadows
  box-shadow: ${({theme:s,shadow:e})=>(0,a.K)(s.shadows,e,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:s})=>s};
  &:hover {
    ${({_hover:s,theme:e})=>s?s(e):void 0}
  }

  // Display
  display: ${({display:s})=>s};

  // Position
  position: ${({position:s})=>s};
  left: ${({left:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  right: ${({right:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  top: ${({top:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  bottom: ${({bottom:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  z-index: ${({zIndex:s})=>s};
  overflow: ${({overflow:s})=>s};

  // Size
  width: ${({width:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  max-width: ${({maxWidth:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  min-width: ${({minWidth:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  height: ${({height:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  max-height: ${({maxHeight:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  min-height: ${({minHeight:s,theme:e})=>(0,a.K)(e.spaces,s,s)};

  // Animation
  transition: ${({transition:s})=>s};
  transform: ${({transform:s})=>s};
  animation: ${({animation:s})=>s};

  //Flexbox children props
  flex-shrink: ${({shrink:s})=>s};
  flex-grow: ${({grow:s})=>s};
  flex-basis: ${({basis:s})=>s};
  flex: ${({flex:s})=>s};

  // Text
  text-align: ${({textAlign:s})=>s};
  text-transform: ${({textTransform:s})=>s};
  line-height: ${({theme:s,lineHeight:e})=>(0,a.K)(s.lineHeights,e,e)};

  // Cursor
  cursor: ${({cursor:s})=>s};
`},83997:(A,p,i)=>{i.d(p,{s:()=>_});var t=i(63891),l=i(28672),a=i(94061);const o={direction:!0},_=(0,t.Ay)(a.a).withConfig({shouldForwardProp:(s,e)=>!o[s]&&e(s)})`
  align-items: ${({alignItems:s="center"})=>s};
  display: ${({display:s="flex",inline:e})=>e?"inline-flex":s};
  flex-direction: ${({direction:s="row"})=>s};
  flex-shrink: ${({shrink:s})=>s};
  flex-wrap: ${({wrap:s})=>s};
  ${({gap:s,theme:e})=>(0,l.A)("gap",s,e)};
  justify-content: ${({justifyContent:s})=>s};
`},30893:(A,p,i)=>{i.d(p,{o:()=>h});var t=i(63891);const l="alpha",a="beta",o="delta",_="epsilon",s="omega",e="pi",c="sigma",M=[l,a,o,_,s,e,c],P=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,C=({variant:d=s,theme:n})=>{switch(d){case l:return`
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
      `;case _:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case s:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case e:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case c:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var v=i(5146);const y={fontSize:!0,fontWeight:!0},h=t.Ay.span.withConfig({shouldForwardProp:(d,n)=>!y[d]&&n(d)})`
  ${C}
  ${P}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:n})=>(0,v.K)(d.fontWeights,n,void 0)};
  font-size: ${({theme:d,fontSize:n})=>(0,v.K)(d.fontSizes,n,void 0)};
  line-height: ${({theme:d,lineHeight:n})=>(0,v.K)(d.lineHeights,n,n)};
  color: ${({theme:d,textColor:n})=>d.colors[n||"neutral800"]};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},28672:(A,p,i)=>{i.d(p,{A:()=>t});const t=(l,a,o)=>{if(!a)return;if(typeof a=="object")return(Array.isArray(a)?a:[a?.desktop,a?.tablet,a?.mobile]).reduce((c,M,P)=>{if(M)switch(P){case 0:return`${c}${l}: ${o.spaces[M]};`;case 1:return`${c}${o.mediaQueries.tablet}{${l}: ${o.spaces[M]};}`;case 2:return`${c}${o.mediaQueries.mobile}{${l}: ${o.spaces[M]};}`;default:return c}return c},"");const _=o.spaces[a]??a;return`${l}: ${_};`}},5146:(A,p,i)=>{i.d(p,{K:()=>a});function t(o,_){return typeof o=="string"?!1:_ in o}function l(o){return o&&typeof o=="object"&&!Array.isArray(o)}function a(o,_,s){return _&&t(o,_)?o[_]:s}},37679:(A,p,i)=>{i.d(p,{B:()=>M});var t=i(92132),l=i(21272),a=i(63891),o=i(94061),_=i(30893);const s=()=>(0,t.jsx)(o.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(_.o,{variant:"pi",textColor:"neutral500",children:"/"})});s.displayName="Divider";var e=i(83997);const c=(0,a.Ay)(e.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:P})=>`calc(-1*${P.spaces[2]})`};
  }
`,M=({label:P,children:C,...v})=>{const y=l.Children.toArray(C);return(0,t.jsx)(o.a,{"aria-label":P,...v,children:(0,t.jsx)(c,{as:"ol",children:l.Children.map(y,(h,d)=>{const n=y.length>1&&d+1<y.length;return(0,t.jsxs)(e.s,{inline:!0,as:"li",children:[h,n&&(0,t.jsx)(s,{})]})})})})};M.displayName="Breadcrumbs"},60043:(A,p,i)=>{i.d(p,{m:()=>o});var t=i(92132),l=i(94061),a=i(30893);const o=({children:_,isCurrent:s=!1,...e})=>(0,t.jsx)(l.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(a.o,{variant:"pi",textColor:"neutral800",fontWeight:s?"bold":"normal","aria-current":s,...e,children:_})});o.displayName="Crumb"},31093:(A,p,i)=>{i.r(p),i.d(p,{default:()=>es});var t=i(92132),l=i(21272),a=i(50642),o=i(6479),_=i(53900),s=i(57564),e=i(68065),c=i(168),M=i(32161),P=i(69564),C=i(79318),v=i(70768),y=i(34508),h=i(21270),d=i(96586),n=i(57842),G=i(83314),W=i(27026),I=i(19106),X=i(70230),U=i(55794),b=i(43121),S=i(32559),r=i(32474),K=i(54894),B=i(74930),m=i(88724),gs=i(77965),J=i(37679),z=i(60043),Z=i(61535),E=i(33544),D=i(12083),k=i(4032),F=i(31708),q=i(13333);const ss=D.Ik().shape({options:D.Ik().shape({from:D.Ik().shape({name:D.Yj().required(r.iW.required),email:D.Yj().email(r.iW.email).required(r.iW.required)}).required(),response_email:D.Yj().email(r.iW.email),object:D.Yj().required(r.iW.required),message:D.Yj().required(r.iW.required)}).required(r.iW.required)}),N=({template:g,onToggle:$,onSubmit:f})=>{const{formatMessage:x}=(0,K.A)();return(0,t.jsxs)(a.k,{onClose:$,labelledBy:`${x({id:(0,m.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${x({id:(0,m.g)(g.display),defaultMessage:g.display})}`,children:[(0,t.jsx)(o.r,{children:(0,t.jsxs)(J.B,{label:`${x({id:(0,m.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${x({id:(0,m.g)(g.display),defaultMessage:g.display})}`,children:[(0,t.jsx)(z.m,{children:x({id:(0,m.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,t.jsx)(z.m,{isCurrent:!0,children:x({id:(0,m.g)(g.display),defaultMessage:g.display})})]})}),(0,t.jsx)(Z.l1,{onSubmit:f,initialValues:g,validateOnChange:!1,validationSchema:ss,enableReinitialize:!0,children:({errors:j,values:O,handleChange:T,isSubmitting:L})=>(0,t.jsxs)(r.lV,{children:[(0,t.jsx)(_.c,{children:(0,t.jsxs)(s.x,{gap:5,children:[(0,t.jsx)(e.E,{col:6,s:12,children:(0,t.jsx)(r.ah,{intlLabel:{id:(0,m.g)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:T,value:O.options.from.name,error:j?.options?.from?.name,type:"text"})}),(0,t.jsx)(e.E,{col:6,s:12,children:(0,t.jsx)(r.ah,{intlLabel:{id:(0,m.g)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:T,value:O.options.from.email,error:j?.options?.from?.email,type:"text"})}),(0,t.jsx)(e.E,{col:6,s:12,children:(0,t.jsx)(r.ah,{intlLabel:{id:(0,m.g)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:T,value:O.options.response_email,error:j?.options?.response_email,type:"text"})}),(0,t.jsx)(e.E,{col:6,s:12,children:(0,t.jsx)(r.ah,{intlLabel:{id:(0,m.g)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:T,value:O.options.object,error:j?.options?.object,type:"text"})}),(0,t.jsx)(e.E,{col:12,s:12,children:(0,t.jsx)(c.T,{label:x({id:(0,m.g)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:T,value:O.options.message,error:j?.options?.message&&x({id:j.options.message,defaultMessage:j.options.message})})})]})}),(0,t.jsx)(M.j,{startActions:(0,t.jsx)(P.$,{onClick:$,variant:"tertiary",children:"Cancel"}),endActions:(0,t.jsx)(P.$,{loading:L,type:"submit",children:"Finish"})})]})})]})};N.propTypes={template:E.shape({display:E.string,icon:E.string,options:E.shape({from:E.shape({name:E.string,email:E.string}),message:E.string,object:E.string,response_email:E.string})}).isRequired,onSubmit:E.func.isRequired,onToggle:E.func.isRequired};const w=({canUpdate:g,onEditClick:$})=>{const{formatMessage:f}=(0,K.A)();return(0,t.jsxs)(C.X,{colCount:3,rowCount:3,children:[(0,t.jsx)(v.d,{children:(0,t.jsxs)(y.Tr,{children:[(0,t.jsx)(h.Th,{width:"1%",children:(0,t.jsx)(d.s,{children:f({id:(0,m.g)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,t.jsx)(h.Th,{children:(0,t.jsx)(n.o,{variant:"sigma",textColor:"neutral600",children:f({id:(0,m.g)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,t.jsx)(h.Th,{width:"1%",children:(0,t.jsx)(d.s,{children:f({id:(0,m.g)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,t.jsxs)(G.N,{children:[(0,t.jsxs)(y.Tr,{...(0,r.qM)({fn:()=>$("reset_password")}),children:[(0,t.jsx)(h.Td,{children:(0,t.jsx)(W.I,{children:(0,t.jsx)(k.A,{"aria-label":f({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,t.jsx)(h.Td,{children:(0,t.jsx)(n.o,{children:f({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,t.jsx)(h.Td,{...r.dG,children:(0,t.jsx)(I.K,{onClick:()=>$("reset_password"),label:f({id:(0,m.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&(0,t.jsx)(F.A,{})})})]}),(0,t.jsxs)(y.Tr,{...(0,r.qM)({fn:()=>$("email_confirmation")}),children:[(0,t.jsx)(h.Td,{children:(0,t.jsx)(W.I,{children:(0,t.jsx)(q.A,{"aria-label":f({id:(0,m.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,t.jsx)(h.Td,{children:(0,t.jsx)(n.o,{children:f({id:(0,m.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,t.jsx)(h.Td,{...r.dG,children:(0,t.jsx)(I.K,{onClick:()=>$("email_confirmation"),label:f({id:(0,m.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&(0,t.jsx)(F.A,{})})})]})]})]})};w.propTypes={canUpdate:E.bool.isRequired,onEditClick:E.func.isRequired};const es=()=>(0,t.jsx)(r.kz,{permissions:m.P.readEmailTemplates,children:(0,t.jsx)(ts,{})}),ts=()=>{const{formatMessage:g}=(0,K.A)(),{trackUsage:$}=(0,r.z1)(),{notifyStatus:f}=(0,X.W)(),x=(0,r.hN)(),{lockApp:j,unlockApp:O}=(0,r.MA)(),T=(0,B.useQueryClient)(),{get:L,put:is}=(0,r.ry)(),{formatAPIError:H}=(0,r.wq)();(0,r.L4)();const[as,ns]=l.useState(!1),[Q,os]=l.useState(null),{isLoading:ls,allowedActions:{canUpdate:rs}}=(0,r.ec)({update:m.P.updateEmailTemplates}),{isLoading:ds,data:V}=(0,B.useQuery)(["users-permissions","email-templates"],async()=>{const{data:u}=await L("/users-permissions/email-templates");return u},{onSuccess(){f(g({id:(0,m.g)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(u){x({type:"warning",message:H(u)})}}),ms=ls||ds,R=()=>{ns(u=>!u)},_s=u=>{os(u),R()},Y=(0,B.useMutation)(u=>is("/users-permissions/email-templates",{"email-templates":u}),{async onSuccess(){await T.invalidateQueries(["users-permissions","email-templates"]),x({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),$("didEditEmailTemplates"),O(),R()},onError(u){x({type:"warning",message:H(u)}),O()},refetchActive:!0}),ps=u=>{j(),$("willEditEmailTemplates");const cs={...V,[Q]:u};Y.mutate(cs)};return ms?(0,t.jsxs)(U.g,{"aria-busy":"true",children:[(0,t.jsx)(r.x7,{name:g({id:(0,m.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsx)(b.Q,{title:g({id:(0,m.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsx)(S.s,{children:(0,t.jsx)(r.Bl,{})})]}):(0,t.jsxs)(U.g,{"aria-busy":Y.isLoading,children:[(0,t.jsx)(r.x7,{name:g({id:(0,m.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsx)(b.Q,{title:g({id:(0,m.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsxs)(S.s,{children:[(0,t.jsx)(w,{onEditClick:_s,canUpdate:rs}),as&&(0,t.jsx)(N,{template:V[Q],onToggle:R,onSubmit:ps})]})]})}}}]);
