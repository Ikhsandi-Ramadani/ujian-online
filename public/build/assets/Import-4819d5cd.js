import{L as h}from"./Teacher-328f0e3a.js";import{H as p,L as w,e as y,r as c,o as r,c as a,a as d,w as m,b as t,f as g,t as _,h as u,F as k,i as v,j as i}from"./app-cb61d73c.js";import{S as x}from"./sweetalert2.all-c2815362.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const q={layout:h,components:{Head:p,Link:w},props:{errors:Object},setup(l){const s=y({file:""});return{form:s,submit:()=>{v.Inertia.post(`/teacher/question_groups/${question_group.id}/question_banks/import`,{file:s.file},{onSuccess:()=>{x.fire({title:"Success!",text:"Import Soal Ujian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},I=t("title",null,"Import Soal - Aplikasi Ujian Online",-1),L={class:"container-fluid mb-5 mt-5"},B={class:"row"},C={class:"col-md-12"},j=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),F=i(" Kembali"),H=t("a",{href:"/assets/excel/questions.xls",target:"_blank",class:"btn btn-md btn-success border-0 shadow mb-3 text-white",type:"button"},[t("i",{class:"fa fa-file-excel me-2"}),i(" Contoh Format")],-1),N={class:"card border-0 shadow"},V={class:"card-body"},U=t("h5",null,[t("i",{class:"fa fa-question-circle"}),i(" Import Soal")],-1),D=t("hr",null,null,-1),E={class:"mb-4"},O=t("label",null,"File Excel",-1),T={key:0,class:"alert alert-danger mt-2"},A={key:1,class:"alert alert-danger mt-2"},K=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Upload",-1),M=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function R(l,s,e,o,z,G){const f=c("Head"),b=c("Link");return r(),a(k,null,[d(f,null,{default:m(()=>[I]),_:1}),t("div",L,[t("div",B,[t("div",C,[d(b,{href:`/teacher/question_groups/${l.question_group.id}/question_banks`,class:"btn btn-md btn-primary border-0 shadow mb-3 me-3",type:"button"},{default:m(()=>[j,F]),_:1},8,["href"]),H,t("div",N,[t("div",V,[U,D,t("form",{onSubmit:s[1]||(s[1]=g((...n)=>o.submit&&o.submit(...n),["prevent"]))},[t("div",E,[O,t("input",{type:"file",class:"form-control",onInput:s[0]||(s[0]=n=>o.form.file=n.target.files[0])},null,32),e.errors.file?(r(),a("div",T,_(e.errors.file),1)):u("",!0),e.errors[0]?(r(),a("div",A,_(e.errors[0]),1)):u("",!0)]),K,M],32)])])])])])],64)}const X=S(q,[["render",R]]);export{X as default};