import{L as b}from"./Teacher-913bef55.js";import{H as h,L as p,e as f,r,o as i,c as l,a as c,w as d,b as t,f as k,g as v,v as w,t as g,h as y,F as x,i as S,j as m}from"./app-924facc6.js";import{S as K}from"./sweetalert2.all-4bf3da73.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const N={layout:b,components:{Head:h,Link:p},props:{errors:Object,question_group:Object},setup(s){const e=f({name:s.question_group.name});return{form:e,submit:()=>{S.Inertia.put(`/teacher/question_groups/${s.question_group.id}`,{name:e.name},{onSuccess:()=>{K.fire({name:"Success!",text:"Kelompok Soal Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},q=t("title",null,"Edit Kelompok Soal - Aplikasi Ujian Online",-1),B={class:"container-fluid mb-5 mt-5"},V={class:"row"},j={class:"col-md-12"},C=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),E=m(" Kembali"),H={class:"card border-0 shadow"},D={class:"card-body"},M=t("h5",null,[t("i",{class:"fa fa-bookmark"}),m(" Edit Kuliah")],-1),O=t("hr",null,null,-1),T={class:"mb-4"},U=t("label",null,"Nama Kuliah",-1),F={key:0,class:"alert alert-danger mt-2"},A=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),I=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function R(s,e,a,o,z,G){const u=r("Head"),_=r("Link");return i(),l(x,null,[c(u,null,{default:d(()=>[q]),_:1}),t("div",B,[t("div",V,[t("div",j,[c(_,{href:"/teacher/question_groups",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:d(()=>[C,E]),_:1}),t("div",H,[t("div",D,[M,O,t("form",{onSubmit:e[1]||(e[1]=k((...n)=>o.submit&&o.submit(...n),["prevent"]))},[t("div",T,[U,v(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Kuliah","onUpdate:modelValue":e[0]||(e[0]=n=>o.form.name=n)},null,512),[[w,o.form.name]]),a.errors.name?(i(),l("div",F,g(a.errors.name),1)):y("",!0)]),A,I],32)])])])])])],64)}const X=L(N,[["render",R]]);export{X as default};
