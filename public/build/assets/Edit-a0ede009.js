import{L as i}from"./Admin-fe958327.js";import{H as d,L as c,v as e,d as m}from"./app-f85ba253.js";import{S as u}from"./sweetalert2.all-fdd07371.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const b={layout:i,components:{Head:d,Link:c},props:{errors:Object,lesson:Object},setup(s){const t=e.reactive({title:s.lesson.title});return{form:t,submit:()=>{m.Inertia.put(`/admin/lessons/${s.lesson.id}`,{title:t.title},{onSuccess:()=>{u.fire({title:"Success!",text:"Mata Kuliah Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},h=e.createElementVNode("title",null,"Edit Mata Kuliah - Aplikasi Ujian Online",-1),f={class:"container-fluid mb-5 mt-5"},p={class:"row"},N={class:"col-md-12"},E=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),V=e.createTextVNode(" Kembali"),v={class:"card border-0 shadow"},k={class:"card-body"},w=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-bookmark"}),e.createTextVNode(" Edit Kuliah")],-1),x=e.createElementVNode("hr",null,null,-1),y={class:"mb-4"},B=e.createElementVNode("label",null,"Nama Kuliah",-1),C={key:0,class:"alert alert-danger mt-2"},K=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),L=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function S(s,t,n,o,g,M){const l=e.resolveComponent("Head"),r=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(l,null,{default:e.withCtx(()=>[h]),_:1}),e.createElementVNode("div",f,[e.createElementVNode("div",p,[e.createElementVNode("div",N,[e.createVNode(r,{href:"/admin/lessons",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[E,V]),_:1}),e.createElementVNode("div",v,[e.createElementVNode("div",k,[w,x,e.createElementVNode("form",{onSubmit:t[1]||(t[1]=e.withModifiers((...a)=>o.submit&&o.submit(...a),["prevent"]))},[e.createElementVNode("div",y,[B,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Kuliah","onUpdate:modelValue":t[0]||(t[0]=a=>o.form.title=a)},null,512),[[e.vModelText,o.form.title]]),n.errors.title?(e.openBlock(),e.createElementBlock("div",C,e.toDisplayString(n.errors.title),1)):e.createCommentVNode("",!0)]),K,L],32)])])])])])],64)}const T=_(b,[["render",S]]);export{T as default};
