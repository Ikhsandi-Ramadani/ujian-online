import{L as g}from"./Teacher-e5123484.js";import{H as p,L as h,e as y,r as a,o as w,c as q,a as n,w as r,b as t,f as k,g as u,m,F as v,i as j,j as c,d as _}from"./app-a09bc75d.js";import{S as V}from"./sweetalert2.all-65cebffe.js";import{E as S}from"./Editor-8621ec1d.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const E={layout:g,components:{Head:p,Link:h,Editor:S},props:{errors:Object,question:Object,question_group:Object},setup(e){const o=y({question:e.question.question,option_1:e.question.option_1,option_2:e.question.option_2,option_3:e.question.option_3,option_4:e.question.option_4,option_5:e.question.option_5,answer:e.question.answer,level:e.question.level});return{form:o,submit:()=>{j.Inertia.put(`/teacher/question_groups/${e.question_group.id}/question_banks/${e.question.id}`,{question:o.question,option_1:o.option_1,option_2:o.option_2,option_3:o.option_3,option_4:o.option_4,option_5:o.option_5,answer:o.answer,level:o.level},{onSuccess:()=>{V.fire({title:"Success!",text:"Soal Ujian Berhasil Dipdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},U=t("title",null,"Edit Soal - Aplikasi Ujian Online",-1),B={class:"container-fluid mb-5 mt-5"},L={class:"row"},x={class:"col-md-12"},C=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),P=c(" Kembali"),D={class:"card border-0 shadow"},H={class:"card-body"},N=t("h5",null,[t("i",{class:"fa fa-question-circle"}),c(" Edit Soal ")],-1),O=t("hr",null,null,-1),A={class:"table-responsive mb-4"},F={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},M=t("td",{style:{width:"20%"},class:"fw-bold"},"Soal",-1),T=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan A",-1),I=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan B",-1),J=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan C",-1),K=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan D",-1),R=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan E",-1),G=t("td",{style:{width:"20%"},class:"fw-bold"},"Jawaban Benar",-1),Q=_('<option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',5),W=[Q],X=t("td",{style:{width:"20%"},class:"fw-bold"},"Level Soal",-1),Y=_('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>',5),Z=[Y],$=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),tt=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function ot(e,o,d,i,it,lt){const b=a("Head"),f=a("Link"),s=a("Editor");return w(),q(v,null,[n(b,null,{default:r(()=>[U]),_:1}),t("div",B,[t("div",L,[t("div",x,[n(f,{href:`/teacher/question_groups/${d.question_group.id}/question_banks`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:r(()=>[C,P]),_:1},8,["href"]),t("div",D,[t("div",H,[N,O,t("form",{onSubmit:o[8]||(o[8]=k((...l)=>i.submit&&i.submit(...l),["prevent"]))},[t("div",A,[t("table",F,[t("tbody",null,[t("tr",null,[M,t("td",null,[n(s,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.question,"onUpdate:modelValue":o[0]||(o[0]=l=>i.form.question=l),init:{menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[T,t("td",null,[n(s,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_1,"onUpdate:modelValue":o[1]||(o[1]=l=>i.form.option_1=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[I,t("td",null,[n(s,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_2,"onUpdate:modelValue":o[2]||(o[2]=l=>i.form.option_2=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[J,t("td",null,[n(s,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_3,"onUpdate:modelValue":o[3]||(o[3]=l=>i.form.option_3=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[K,t("td",null,[n(s,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_4,"onUpdate:modelValue":o[4]||(o[4]=l=>i.form.option_4=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[R,t("td",null,[n(s,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:i.form.option_5,"onUpdate:modelValue":o[5]||(o[5]=l=>i.form.option_5=l),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[G,t("td",null,[u(t("select",{class:"form-control","onUpdate:modelValue":o[6]||(o[6]=l=>i.form.answer=l)},W,512),[[m,i.form.answer]])])]),t("tr",null,[X,t("td",null,[u(t("select",{class:"form-control","onUpdate:modelValue":o[7]||(o[7]=l=>i.form.level=l)},Z,512),[[m,i.form.level]])])])])])]),$,tt],32)])])])])])],64)}const rt=z(E,[["render",ot]]);export{rt as default};
