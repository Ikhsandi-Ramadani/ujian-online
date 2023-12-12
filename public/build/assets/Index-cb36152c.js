import{L as l}from"./Student_2-233c6ee5.js";import{H as d,L as i,v as e,d as c}from"./app-f0142ba0.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const p={layout:l,components:{Head:d,Link:i},props:{errors:Object},setup(){const o=e.reactive({nim:"",password:""});return{form:o,submit:()=>{c.Inertia.post("/students/login",{nim:o.nim,password:o.password})}}}},_=e.createElementVNode("title",null,"Login Siswa - Aplikasi Ujian Online",-1),u={class:"row justify-content-center mt-5"},N={class:"col-md-5"},g={class:"bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500"},V=e.createElementVNode("div",{class:"text-center"},[e.createElementVNode("img",{class:"",src:"/assets/images/logo2.png",height:"100"})],-1),f={key:0,class:"alert alert-danger mt-2"},E={key:1,class:"alert alert-danger mt-2"},h={class:"form-group mb-4"},v=e.createElementVNode("label",{for:"email"},"Nim",-1),w={class:"input-group"},b=e.createElementVNode("span",{class:"input-group-text",id:"basic-addon1"},[e.createElementVNode("i",{class:"fa fa-key"})],-1),k={key:0,class:"alert alert-danger mt-2"},y={class:"form-group"},x={class:"form-group mb-4"},B=e.createElementVNode("label",{for:"password"},"Password",-1),D={class:"input-group"},S=e.createElementVNode("span",{class:"input-group-text",id:"basic-addon2"},[e.createElementVNode("i",{class:"fa fa-lock"})],-1),C={key:0,class:"alert alert-danger mt-2"},L=e.createElementVNode("div",{class:"d-grid"},[e.createElementVNode("button",{type:"submit",class:"btn btn-gray-800"},"LOGIN")],-1),H=e.createElementVNode("div",{class:"text-center mt-2"},[e.createElementVNode("p",null,[e.createTextVNode("Belum punya akun ? "),e.createElementVNode("a",{href:"/register"},"Daftar disini")])],-1);function j(o,t,s,r,I,M){const a=e.resolveComponent("Head");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(a,null,{default:e.withCtx(()=>[_]),_:1}),e.createElementVNode("div",u,[e.createElementVNode("div",N,[e.createElementVNode("div",g,[V,s.errors.message?(e.openBlock(),e.createElementBlock("div",f,e.toDisplayString(s.errors.message),1)):e.createCommentVNode("",!0),o.$page.props.session.error?(e.openBlock(),e.createElementBlock("div",E,e.toDisplayString(o.$page.props.session.error),1)):e.createCommentVNode("",!0),e.createElementVNode("form",{onSubmit:t[2]||(t[2]=e.withModifiers((...n)=>r.submit&&r.submit(...n),["prevent"])),class:"mt-4"},[e.createElementVNode("div",h,[v,e.createElementVNode("div",w,[b,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=n=>r.form.nim=n),placeholder:"Nim"},null,512),[[e.vModelText,r.form.nim]])]),s.errors.nim?(e.openBlock(),e.createElementBlock("div",k,e.toDisplayString(s.errors.nim),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",y,[e.createElementVNode("div",x,[B,e.createElementVNode("div",D,[S,e.withDirectives(e.createElementVNode("input",{type:"password",placeholder:"Password",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=n=>r.form.password=n)},null,512),[[e.vModelText,r.form.password]])]),s.errors.password?(e.openBlock(),e.createElementBlock("div",C,e.toDisplayString(s.errors.password),1)):e.createCommentVNode("",!0)])]),L,H],32)])])])],64)}const P=m(p,[["render",j]]);export{P as default};
