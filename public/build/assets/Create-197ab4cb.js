import{L as m}from"./Teacher-328f0e3a.js";import{H as u,L as c,e as b,r as s,o as g,c as f,a as e,w as p,b as t,f as _,g as h,m as y,F as w,i as k,j,d as V}from"./app-cb61d73c.js";import{S as q}from"./sweetalert2.all-c2815362.js";import{E as v}from"./Editor-752bdce4.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const S={layout:m,components:{Head:u,Link:c,Editor:v},props:{errors:Object,exam:Object},setup(a){const o=b({question:"",option_1:"",option_2:"",option_3:"",option_4:"",option_5:"",answer:""});return{form:o,submit:()=>{k.Inertia.post("/teacher/question_banks",{question:o.question,option_1:o.option_1,option_2:o.option_2,option_3:o.option_3,option_4:o.option_4,option_5:o.option_5,answer:o.answer},{onSuccess:()=>{q.fire({title:"Success!",text:"Soal Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},U=t("title",null,"Tambah Soal Ujian - Aplikasi Ujian Online",-1),B={class:"container-fluid mb-5 mt-5"},x={class:"row"},E={class:"col-md-12"},C={class:"card border-0 shadow"},P={class:"card-body"},D=t("h5",null,[t("i",{class:"fa fa-question-circle"}),j(" Tambah Soal ")],-1),H=t("hr",null,null,-1),L={class:"table-responsive mb-4"},N={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},T=t("td",{style:{width:"20%"},class:"fw-bold"},"Soal",-1),A=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan A",-1),O=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan B",-1),F=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan C",-1),M=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan D",-1),I=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan E",-1),J=t("td",{style:{width:"20%"},class:"fw-bold"},"Jawaban Benar",-1),R=V('<option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',5),G=[R],K=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),Q=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function W(a,o,r,i,X,Y){const d=s("Head"),n=s("Editor");return g(),f(w,null,[e(d,null,{default:p(()=>[U]),_:1}),t("div",B,[t("div",x,[t("div",E,[t("div",C,[t("div",P,[D,H,t("form",{onSubmit:o[7]||(o[7]=_((...l)=>i.submit&&i.submit(...l),["prevent"]))},[t("div",L,[t("table",N,[t("tbody",null,[t("tr",null,[T,t("td",null,[e(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.question,"onUpdate:modelValue":o[0]||(o[0]=l=>i.form.question=l),init:{menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[A,t("td",null,[e(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_1,"onUpdate:modelValue":o[1]||(o[1]=l=>i.form.option_1=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[O,t("td",null,[e(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_2,"onUpdate:modelValue":o[2]||(o[2]=l=>i.form.option_2=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[F,t("td",null,[e(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_3,"onUpdate:modelValue":o[3]||(o[3]=l=>i.form.option_3=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[M,t("td",null,[e(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_4,"onUpdate:modelValue":o[4]||(o[4]=l=>i.form.option_4=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[I,t("td",null,[e(n,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_5,"onUpdate:modelValue":o[5]||(o[5]=l=>i.form.option_5=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[J,t("td",null,[h(t("select",{class:"form-control","onUpdate:modelValue":o[6]||(o[6]=l=>i.form.answer=l)},G,512),[[y,i.form.answer]])])])])])]),K,Q],32)])])])])])],64)}const lt=z(S,[["render",W]]);export{lt as default};