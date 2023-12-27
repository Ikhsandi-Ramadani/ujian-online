import{L as c}from"./Teacher-df977335.js";import{H as i,L as d,v as e,d as m}from"./app-c0cf9767.js";import{S as u}from"./sweetalert2.all-07a6e669.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const p={layout:c,components:{Head:i,Link:d},props:{errors:Object,question_group:Object},setup(n){const t=e.reactive({name:n.question_group.name});return{form:t,submit:()=>{m.Inertia.put(`/teacher/question_groups/${n.question_group.id}`,{name:t.name},{onSuccess:()=>{u.fire({name:"Success!",text:"Kelompok Soal Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},h=e.createElementVNode("title",null,"Edit Kelompok Soal - Aplikasi Ujian Online",-1),b={class:"container-fluid mb-5 mt-5"},f={class:"row"},N={class:"col-md-12"},E=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),V=e.createTextVNode(" Kembali"),k={class:"card border-0 shadow"},v={class:"card-body"},w=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-bookmark"}),e.createTextVNode(" Edit Kuliah")],-1),x=e.createElementVNode("hr",null,null,-1),y={class:"mb-4"},g=e.createElementVNode("label",null,"Nama Kuliah",-1),S={key:0,class:"alert alert-danger mt-2"},B=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),C=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function K(n,t,s,o,L,q){const r=e.resolveComponent("Head"),l=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(r,null,{default:e.withCtx(()=>[h]),_:1}),e.createElementVNode("div",b,[e.createElementVNode("div",f,[e.createElementVNode("div",N,[e.createVNode(l,{href:"/teacher/question_groups",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[E,V]),_:1}),e.createElementVNode("div",k,[e.createElementVNode("div",v,[w,x,e.createElementVNode("form",{onSubmit:t[1]||(t[1]=e.withModifiers((...a)=>o.submit&&o.submit(...a),["prevent"]))},[e.createElementVNode("div",y,[g,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Kuliah","onUpdate:modelValue":t[0]||(t[0]=a=>o.form.name=a)},null,512),[[e.vModelText,o.form.name]]),s.errors.name?(e.openBlock(),e.createElementBlock("div",S,e.toDisplayString(s.errors.name),1)):e.createCommentVNode("",!0)]),B,C],32)])])])])])],64)}const M=_(p,[["render",K]]);export{M as default};
