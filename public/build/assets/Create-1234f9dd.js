import{L as r}from"./Teacher-9e1d0d0a.js";import{H as d,L as m,v as e,d as c}from"./app-af81db02.js";import{S as u}from"./sweetalert2.all-2c0059b4.js";import{E as b}from"./Editor-7648f8c5.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const f={layout:r,components:{Head:d,Link:m,Editor:b},props:{errors:Object,exam:Object},setup(n){const t=e.reactive({question:"",option_1:"",option_2:"",option_3:"",option_4:"",option_5:"",answer:""});return{form:t,submit:()=>{c.Inertia.post("/teacher/question_banks",{question:t.question,option_1:t.option_1,option_2:t.option_2,option_3:t.option_3,option_4:t.option_4,option_5:t.option_5,answer:t.answer},{onSuccess:()=>{u.fire({title:"Success!",text:"Soal Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},p=e.createElementVNode("title",null,"Tambah Soal Ujian - Aplikasi Ujian Online",-1),_={class:"container-fluid mb-5 mt-5"},V={class:"row"},h={class:"col-md-12"},N={class:"card border-0 shadow"},E={class:"card-body"},y=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-question-circle"}),e.createTextVNode(" Tambah Soal ")],-1),w=e.createElementVNode("hr",null,null,-1),k={class:"table-responsive mb-4"},j={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},v=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Soal",-1),q=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan A",-1),z=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan B",-1),S=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan C",-1),U=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan D",-1),x=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan E",-1),B=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Jawaban Benar",-1),C=e.createStaticVNode('<option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',5),P=[C],D=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),H=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function L(n,t,a,o,T,A){const s=e.resolveComponent("Head"),i=e.resolveComponent("Editor");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(s,null,{default:e.withCtx(()=>[p]),_:1}),e.createElementVNode("div",_,[e.createElementVNode("div",V,[e.createElementVNode("div",h,[e.createElementVNode("div",N,[e.createElementVNode("div",E,[y,w,e.createElementVNode("form",{onSubmit:t[7]||(t[7]=e.withModifiers((...l)=>o.submit&&o.submit(...l),["prevent"]))},[e.createElementVNode("div",k,[e.createElementVNode("table",j,[e.createElementVNode("tbody",null,[e.createElementVNode("tr",null,[v,e.createElementVNode("td",null,[e.createVNode(i,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.question,"onUpdate:modelValue":t[0]||(t[0]=l=>o.form.question=l),init:{menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[q,e.createElementVNode("td",null,[e.createVNode(i,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_1,"onUpdate:modelValue":t[1]||(t[1]=l=>o.form.option_1=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[z,e.createElementVNode("td",null,[e.createVNode(i,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_2,"onUpdate:modelValue":t[2]||(t[2]=l=>o.form.option_2=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[S,e.createElementVNode("td",null,[e.createVNode(i,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_3,"onUpdate:modelValue":t[3]||(t[3]=l=>o.form.option_3=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[U,e.createElementVNode("td",null,[e.createVNode(i,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_4,"onUpdate:modelValue":t[4]||(t[4]=l=>o.form.option_4=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[x,e.createElementVNode("td",null,[e.createVNode(i,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_5,"onUpdate:modelValue":t[5]||(t[5]=l=>o.form.option_5=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[B,e.createElementVNode("td",null,[e.withDirectives(e.createElementVNode("select",{class:"form-control","onUpdate:modelValue":t[6]||(t[6]=l=>o.form.answer=l)},P,512),[[e.vModelSelect,o.form.answer]])])])])])]),D,H],32)])])])])])],64)}const R=g(f,[["render",L]]);export{R as default};
