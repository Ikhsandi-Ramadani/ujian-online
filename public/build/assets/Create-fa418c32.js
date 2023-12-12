import{L as c}from"./Teacher-8876a5f0.js";import{H as m,L as _,v as e,d as u}from"./app-5cdaf58f.js";import{S as V}from"./sweetalert2.all-f691c165.js";import{y as h}from"./main-5d3cba15.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const b={layout:c,components:{Head:m,Link:_,Datepicker:h},props:{errors:Object,exams:Array},setup(){const n=e.reactive({title:"",exam_id:"",start_time:"",end_time:""});return{form:n,submit:()=>{u.Inertia.post("/teacher/exam_sessions",{title:n.title,exam_id:n.exam_id,start_time:n.start_time,end_time:n.end_time},{onSuccess:()=>{V.fire({title:"Success!",text:"Sesi Ujian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},E=e.createElementVNode("title",null,"Tambah Sesi Ujian - Aplikasi Ujian Online",-1),f={class:"container-fluid mb-5 mt-5"},v={class:"row"},k={class:"col-md-12"},p=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),y=e.createTextVNode(" Kembali"),x={class:"card border-0 shadow"},S={class:"card-body"},w=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fas fa-stopwatch"}),e.createTextVNode(" Tambah Sesi")],-1),B=e.createElementVNode("hr",null,null,-1),g={class:"row"},C={class:"col-md-6"},D={class:"mb-4"},U=e.createElementVNode("label",null,"Nama Sesi",-1),L={key:0,class:"alert alert-danger mt-2"},T={class:"col-md-6"},j={class:"mb-4"},M=e.createElementVNode("label",null,"Ujian",-1),H=["value"],A={key:0,class:"alert alert-danger mt-2"},F={class:"row"},O={class:"col-md-6"},W={class:"mb-4"},I=e.createElementVNode("label",null,"Waktu Mulai",-1),K={key:0,class:"alert alert-danger mt-2"},R={class:"col-md-6"},q={class:"mb-4"},z=e.createElementVNode("label",null,"Waktu Selesai",-1),G={key:0,class:"alert alert-danger mt-2"},J=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),P=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function Q(n,o,a,s,X,Y){const r=e.resolveComponent("Head"),i=e.resolveComponent("Link"),l=e.resolveComponent("Datepicker");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(r,null,{default:e.withCtx(()=>[E]),_:1}),e.createElementVNode("div",f,[e.createElementVNode("div",v,[e.createElementVNode("div",k,[e.createVNode(i,{href:"/teacher/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[p,y]),_:1}),e.createElementVNode("div",x,[e.createElementVNode("div",S,[w,B,e.createElementVNode("form",{onSubmit:o[4]||(o[4]=e.withModifiers((...t)=>s.submit&&s.submit(...t),["prevent"]))},[e.createElementVNode("div",g,[e.createElementVNode("div",C,[e.createElementVNode("div",D,[U,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Sesi","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.title=t)},null,512),[[e.vModelText,s.form.title]]),a.errors.title?(e.openBlock(),e.createElementBlock("div",L,e.toDisplayString(a.errors.title),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",T,[e.createElementVNode("div",j,[M,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":o[1]||(o[1]=t=>s.form.exam_id=t)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.exams,(t,d)=>(e.openBlock(),e.createElementBlock("option",{key:d,value:t.id},e.toDisplayString(t.title),9,H))),128))],512),[[e.vModelSelect,s.form.exam_id]]),a.errors.exam_id?(e.openBlock(),e.createElementBlock("div",A,e.toDisplayString(a.errors.exam_id),1)):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",F,[e.createElementVNode("div",O,[e.createElementVNode("div",W,[I,e.createVNode(l,{modelValue:s.form.start_time,"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.start_time=t),"teleport-center":""},null,8,["modelValue"]),a.errors.start_time?(e.openBlock(),e.createElementBlock("div",K,e.toDisplayString(a.errors.start_time),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",R,[e.createElementVNode("div",q,[z,e.createVNode(l,{modelValue:s.form.end_time,"onUpdate:modelValue":o[3]||(o[3]=t=>s.form.end_time=t)},null,8,["modelValue"]),a.errors.end_time?(e.openBlock(),e.createElementBlock("div",G,e.toDisplayString(a.errors.end_time),1)):e.createCommentVNode("",!0)])])]),J,P],32)])])])])])],64)}const se=N(b,[["render",Q]]);export{se as default};
