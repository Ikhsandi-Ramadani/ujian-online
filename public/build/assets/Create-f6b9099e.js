import{L as c}from"./Teacher-df977335.js";import{H as m,L as d,v as e,d as i}from"./app-c0cf9767.js";import{S as _}from"./sweetalert2.all-07a6e669.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const p={layout:c,components:{Head:m,Link:d},props:{errors:Object},setup(){const n=e.reactive({name:""});return{form:n,submit:()=>{i.Inertia.post("/teacher/question_groups",{name:n.name},{onSuccess:()=>{_.fire({name:"Success!",text:"Mata Kuliah Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},b=e.createElementVNode("title",null,"Tambah Kelompok Soal - Aplikasi Ujian Online",-1),h={class:"container-fluid mb-5 mt-5"},f={class:"row"},N={class:"col-md-12"},V=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),E=e.createTextVNode(" Kembali"),k={class:"card border-0 shadow"},v={class:"card-body"},w=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-bookmark"}),e.createTextVNode(" Tambah Kelompok Soal")],-1),x=e.createElementVNode("hr",null,null,-1),y={class:"mb-4"},S=e.createElementVNode("label",null,"Nama ",-1),g={key:0,class:"alert alert-danger mt-2"},C=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),B=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function L(n,t,s,o,T,K){const r=e.resolveComponent("Head"),l=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(r,null,{default:e.withCtx(()=>[b]),_:1}),e.createElementVNode("div",h,[e.createElementVNode("div",f,[e.createElementVNode("div",N,[e.createVNode(l,{href:"/teacher/question_groups",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[V,E]),_:1}),e.createElementVNode("div",k,[e.createElementVNode("div",v,[w,x,e.createElementVNode("form",{onSubmit:t[1]||(t[1]=e.withModifiers((...a)=>o.submit&&o.submit(...a),["prevent"]))},[e.createElementVNode("div",y,[S,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Kelompok Soal","onUpdate:modelValue":t[0]||(t[0]=a=>o.form.name=a)},null,512),[[e.vModelText,o.form.name]]),s.errors.name?(e.openBlock(),e.createElementBlock("div",g,e.toDisplayString(s.errors.name),1)):e.createCommentVNode("",!0)]),C,B],32)])])])])])],64)}const q=u(p,[["render",L]]);export{q as default};
