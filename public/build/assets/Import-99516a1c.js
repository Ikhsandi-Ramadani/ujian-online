import{L as h}from"./Admin-173beb0f.js";import{H as p,L as w,e as y,r as c,o as r,c as i,a as d,w as m,b as t,f as v,t as _,h as f,F as x,i as k,j as l}from"./app-cb61d73c.js";import{S as g}from"./sweetalert2.all-c2815362.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const L={layout:h,components:{Head:p,Link:w},props:{errors:Object},setup(){const o=y({file:""});return{form:o,submit:()=>{k.Inertia.post("/admin/teachers/import",{file:o.file},{onSuccess:()=>{g.fire({title:"Success!",text:"Import Dosen Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},S=t("title",null,"Import Dosen - Aplikasi Ujian Online",-1),B={class:"container-fluid mb-5 mt-5"},C={class:"row"},D={class:"col-md-12"},F=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),H=l(" Kembali"),N=t("a",{href:"/assets/excel/teachers.xls",target:"_blank",class:"btn btn-md btn-success border-0 shadow mb-3 text-white",type:"button"},[t("i",{class:"fa fa-file-excel me-2"}),l(" Contoh Format")],-1),V={class:"card border-0 shadow"},j={class:"card-body"},A=t("h5",null,[t("i",{class:"fa fa-user"}),l(" Import Dosen")],-1),E=t("hr",null,null,-1),O={class:"mb-4"},U=t("label",null,"File Excel",-1),K={key:0,class:"alert alert-danger mt-2"},M={key:1,class:"alert alert-danger mt-2"},R=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Upload",-1),T=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function q(o,e,s,n,z,G){const b=c("Head"),u=c("Link");return r(),i(x,null,[d(b,null,{default:m(()=>[S]),_:1}),t("div",B,[t("div",C,[t("div",D,[d(u,{href:"/admin/teachers",class:"btn btn-md btn-primary border-0 shadow mb-3 me-3",type:"button"},{default:m(()=>[F,H]),_:1}),N,t("div",V,[t("div",j,[A,E,t("form",{onSubmit:e[1]||(e[1]=v((...a)=>n.submit&&n.submit(...a),["prevent"]))},[t("div",O,[U,t("input",{type:"file",class:"form-control",onInput:e[0]||(e[0]=a=>n.form.file=a.target.files[0])},null,32),s.errors.file?(r(),i("div",K,_(s.errors.file),1)):f("",!0),s.errors[0]?(r(),i("div",M,_(s.errors[0]),1)):f("",!0)]),R,T],32)])])])])])],64)}const X=I(L,[["render",q]]);export{X as default};
