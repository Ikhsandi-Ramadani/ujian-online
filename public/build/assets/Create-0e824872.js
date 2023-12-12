import{L as d}from"./Teacher-8876a5f0.js";import{H as m,L as c,v as e,d as u}from"./app-5cdaf58f.js";import{S as b}from"./sweetalert2.all-f691c165.js";import{E as p}from"./Editor-df28f026.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const f={layout:d,components:{Head:m,Link:c,Editor:p},props:{errors:Object,exam:Object,question_group:Object},setup(i){const t=e.reactive({question:"",option_1:"",option_2:"",option_3:"",option_4:"",option_5:"",answer:"",level:""});return{form:t,submit:()=>{u.Inertia.post(`/teacher/question_groups/${i.question_group.id}/question_banks`,{question:t.question,option_1:t.option_1,option_2:t.option_2,option_3:t.option_3,option_4:t.option_4,option_5:t.option_5,answer:t.answer,level:t.level},{onSuccess:()=>{b.fire({title:"Success!",text:"Soal Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},g=e.createElementVNode("title",null,"Tambah Soal Ujian - Aplikasi Ujian Online",-1),V={class:"container-fluid mb-5 mt-5"},h={class:"row"},N={class:"col-md-12"},E=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),y=e.createTextVNode(" Kembali"),w={class:"card border-0 shadow"},v={class:"card-body"},k=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-question-circle"}),e.createTextVNode(" Tambah Soal ")],-1),q=e.createElementVNode("hr",null,null,-1),j={class:"table-responsive mb-4"},S={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},z=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Soal",-1),x=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan A",-1),U=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan B",-1),C=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan C",-1),B=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan D",-1),L=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan E",-1),D=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Jawaban Benar",-1),P=e.createStaticVNode('<option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',5),T=[P],H=e.createElementVNode("td",{style:{width:"20%"},class:"fw-bold"},"Level Soal",-1),O=e.createStaticVNode('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>',5),A=[O],M=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),F=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow me-2"},"Reset",-1);function I(i,t,a,o,J,K){const s=e.resolveComponent("Head"),r=e.resolveComponent("Link"),n=e.resolveComponent("Editor");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(s,null,{default:e.withCtx(()=>[g]),_:1}),e.createElementVNode("div",V,[e.createElementVNode("div",h,[e.createElementVNode("div",N,[e.createVNode(r,{href:`/teacher/question_groups/${a.question_group.id}/question_banks`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[E,y]),_:1},8,["href"]),e.createElementVNode("div",w,[e.createElementVNode("div",v,[k,q,e.createElementVNode("form",{onSubmit:t[8]||(t[8]=e.withModifiers((...l)=>o.submit&&o.submit(...l),["prevent"]))},[e.createElementVNode("div",j,[e.createElementVNode("table",S,[e.createElementVNode("tbody",null,[e.createElementVNode("tr",null,[z,e.createElementVNode("td",null,[e.createVNode(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.question,"onUpdate:modelValue":t[0]||(t[0]=l=>o.form.question=l),init:{menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[x,e.createElementVNode("td",null,[e.createVNode(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_1,"onUpdate:modelValue":t[1]||(t[1]=l=>o.form.option_1=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[U,e.createElementVNode("td",null,[e.createVNode(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_2,"onUpdate:modelValue":t[2]||(t[2]=l=>o.form.option_2=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[C,e.createElementVNode("td",null,[e.createVNode(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_3,"onUpdate:modelValue":t[3]||(t[3]=l=>o.form.option_3=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[B,e.createElementVNode("td",null,[e.createVNode(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_4,"onUpdate:modelValue":t[4]||(t[4]=l=>o.form.option_4=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[L,e.createElementVNode("td",null,[e.createVNode(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:o.form.option_5,"onUpdate:modelValue":t[5]||(t[5]=l=>o.form.option_5=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),e.createElementVNode("tr",null,[D,e.createElementVNode("td",null,[e.withDirectives(e.createElementVNode("select",{class:"form-control","onUpdate:modelValue":t[6]||(t[6]=l=>o.form.answer=l)},T,512),[[e.vModelSelect,o.form.answer]])])]),e.createElementVNode("tr",null,[H,e.createElementVNode("td",null,[e.withDirectives(e.createElementVNode("select",{class:"form-control","onUpdate:modelValue":t[7]||(t[7]=l=>o.form.level=l)},A,512),[[e.vModelSelect,o.form.level]])])])])])]),M,F],32)])])])])])],64)}const Y=_(f,[["render",I]]);export{Y as default};
