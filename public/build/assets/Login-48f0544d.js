import{L as n}from"./Auth-c2ff51b3.js";import{H as d,L as i,v as e,d as c}from"./app-af81db02.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const p={layout:n,components:{Head:d,Link:i},props:{errors:Object,session:Object},setup(){const r=e.reactive({email:"",password:""});return{form:r,submit:()=>{c.Inertia.post("/login",{email:r.email,password:r.password})}}}},u=e.createElementVNode("title",null,"Login Administrator - Aplikasi Ujian Online",-1),_={class:"bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500"},f=e.createElementVNode("div",{class:"text-center text-md-center mb-4 mt-md-0"},[e.createElementVNode("h3",null,"ADMINISTRATOR")],-1),b={class:"form-group mb-4"},E=e.createElementVNode("label",{for:"email"},"Email Address",-1),N={class:"input-group"},V=e.createElementVNode("span",{class:"input-group-text",id:"basic-addon1"},[e.createElementVNode("i",{class:"fa fa-envelope"})],-1),h={key:0,class:"alert alert-danger mt-2"},v={class:"form-group"},g={class:"form-group mb-4"},w=e.createElementVNode("label",{for:"password"},"Password",-1),k={class:"input-group"},x=e.createElementVNode("span",{class:"input-group-text",id:"basic-addon2"},[e.createElementVNode("i",{class:"fa fa-lock"})],-1),y={key:0,class:"alert alert-danger mt-2"},A=e.createElementVNode("div",{class:"d-flex justify-content-between align-items-top mb-4"},[e.createElementVNode("div",{class:"form-check"},[e.createElementVNode("input",{class:"form-check-input",type:"checkbox",value:"",id:"remember"}),e.createElementVNode("label",{class:"form-check-label mb-0",for:"remember"}," Remember me ")])],-1),L=e.createElementVNode("div",{class:"d-grid"},[e.createElementVNode("button",{type:"submit",class:"btn btn-gray-800"},"LOGIN")],-1);function B(r,t,a,o,D,O){const l=e.resolveComponent("Head");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(l,null,{default:e.withCtx(()=>[u]),_:1}),e.createElementVNode("div",_,[f,e.createElementVNode("form",{onSubmit:t[2]||(t[2]=e.withModifiers((...s)=>o.submit&&o.submit(...s),["prevent"])),class:"mt-4"},[e.createElementVNode("div",b,[E,e.createElementVNode("div",N,[V,e.withDirectives(e.createElementVNode("input",{type:"email",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>o.form.email=s),placeholder:"Email Address"},null,512),[[e.vModelText,o.form.email]])]),a.errors.email?(e.openBlock(),e.createElementBlock("div",h,e.toDisplayString(a.errors.email),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",v,[e.createElementVNode("div",g,[w,e.createElementVNode("div",k,[x,e.withDirectives(e.createElementVNode("input",{type:"password",placeholder:"Password",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>o.form.password=s)},null,512),[[e.vModelText,o.form.password]])]),a.errors.password?(e.openBlock(),e.createElementBlock("div",y,e.toDisplayString(a.errors.password),1)):e.createCommentVNode("",!0)]),A]),L],32)])],64)}const I=m(p,[["render",B]]);export{I as default};
