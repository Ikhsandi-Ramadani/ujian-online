import{L as _}from"./Student_2-e5707951.js";import{H as u,L as f,e as g,r as h,o as i,c as n,a as v,w,b as s,t as d,h as l,f as b,g as c,v as m,F as y,i as k,j as x}from"./app-2f294101.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const L={layout:_,components:{Head:u,Link:f},props:{errors:Object},setup(){const e=g({nim:"",password:""});return{form:e,submit:()=>{k.Inertia.post("/students/login",{nim:e.nim,password:e.password})}}}},V=s("title",null,"Login Siswa - Aplikasi Ujian Online",-1),j={class:"row justify-content-center mt-5"},B={class:"col-md-5"},H={class:"bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500"},S=s("div",{class:"text-center"},[s("img",{class:"",src:"/assets/images/logo2.png",height:"100"})],-1),C={key:0,class:"alert alert-danger mt-2"},D={key:1,class:"alert alert-danger mt-2"},I={class:"form-group mb-4"},O=s("label",{for:"email"},"Nim",-1),U={class:"input-group"},F=s("span",{class:"input-group-text",id:"basic-addon1"},[s("i",{class:"fa fa-key"})],-1),M={key:0,class:"alert alert-danger mt-2"},P={class:"form-group"},T={class:"form-group mb-4"},A=s("label",{for:"password"},"Password",-1),E={class:"input-group"},G=s("span",{class:"input-group-text",id:"basic-addon2"},[s("i",{class:"fa fa-lock"})],-1),q={key:0,class:"alert alert-danger mt-2"},z=s("div",{class:"d-grid"},[s("button",{type:"submit",class:"btn btn-gray-800"},"LOGIN")],-1),J=s("div",{class:"text-center mt-2"},[s("p",null,[x("Belum punya akun ? "),s("a",{href:"/register"},"Daftar disini")])],-1);function K(e,t,o,r,Q,R){const p=h("Head");return i(),n(y,null,[v(p,null,{default:w(()=>[V]),_:1}),s("div",j,[s("div",B,[s("div",H,[S,o.errors.message?(i(),n("div",C,d(o.errors.message),1)):l("",!0),e.$page.props.session.error?(i(),n("div",D,d(e.$page.props.session.error),1)):l("",!0),s("form",{onSubmit:t[2]||(t[2]=b((...a)=>r.submit&&r.submit(...a),["prevent"])),class:"mt-4"},[s("div",I,[O,s("div",U,[F,c(s("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=a=>r.form.nim=a),placeholder:"Nim"},null,512),[[m,r.form.nim]])]),o.errors.nim?(i(),n("div",M,d(o.errors.nim),1)):l("",!0)]),s("div",P,[s("div",T,[A,s("div",E,[G,c(s("input",{type:"password",placeholder:"Password",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=a=>r.form.password=a)},null,512),[[m,r.form.password]])]),o.errors.password?(i(),n("div",q,d(o.errors.password),1)):l("",!0)])]),z,J],32)])])])],64)}const Z=N(L,[["render",K]]);export{Z as default};
