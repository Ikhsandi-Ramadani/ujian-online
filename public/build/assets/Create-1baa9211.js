import{L as i}from"./Admin-fe958327.js";import{H as c,L as d,v as e,d as m}from"./app-f85ba253.js";import{S as _}from"./sweetalert2.all-fdd07371.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const h={layout:i,components:{Head:c,Link:d},props:{errors:Object},setup(){const s=e.reactive({title:""});return{form:s,submit:()=>{m.Inertia.post("/admin/lessons",{title:s.title},{onSuccess:()=>{_.fire({title:"Success!",text:"Mata Kuliah Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},b=e.createElementVNode("title",null,"Tambah Mata Kuliah - Aplikasi Ujian Online",-1),p={class:"container-fluid mb-5 mt-5"},f={class:"row"},N={class:"col-md-12"},V=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),E=e.createTextVNode(" Kembali"),v={class:"card border-0 shadow"},k={class:"card-body"},w=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-bookmark"}),e.createTextVNode(" Tambah Kuliah")],-1),x=e.createElementVNode("hr",null,null,-1),y={class:"mb-4"},C=e.createElementVNode("label",null,"Nama Kuliah",-1),S={key:0,class:"alert alert-danger mt-2"},B=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),K=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function L(s,t,a,o,g,M){const r=e.resolveComponent("Head"),l=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(r,null,{default:e.withCtx(()=>[b]),_:1}),e.createElementVNode("div",p,[e.createElementVNode("div",f,[e.createElementVNode("div",N,[e.createVNode(l,{href:"/admin/lessons",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[V,E]),_:1}),e.createElementVNode("div",v,[e.createElementVNode("div",k,[w,x,e.createElementVNode("form",{onSubmit:t[1]||(t[1]=e.withModifiers((...n)=>o.submit&&o.submit(...n),["prevent"]))},[e.createElementVNode("div",y,[C,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Kuliah","onUpdate:modelValue":t[0]||(t[0]=n=>o.form.title=n)},null,512),[[e.vModelText,o.form.title]]),a.errors.title?(e.openBlock(),e.createElementBlock("div",S,e.toDisplayString(a.errors.title),1)):e.createCommentVNode("",!0)]),B,K],32)])])])])])],64)}const A=u(h,[["render",L]]);export{A as default};
