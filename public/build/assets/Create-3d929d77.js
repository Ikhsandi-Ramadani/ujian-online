import{L as b}from"./Teacher-a1ac5b37.js";import{H as h,L as p,e as f,r,o as i,c as l,a as c,w as m,b as t,f as k,g as v,v as w,t as y,h as S,F as g,i as x,j as d}from"./app-2f294101.js";import{S as L}from"./sweetalert2.all-7ef14205.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const B={layout:b,components:{Head:h,Link:p},props:{errors:Object},setup(){const s=f({name:""});return{form:s,submit:()=>{x.Inertia.post("/teacher/question_groups",{name:s.name},{onSuccess:()=>{L.fire({name:"Success!",text:"Mata Kuliah Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},C=t("title",null,"Tambah Kelompok Soal - Aplikasi Ujian Online",-1),K={class:"container-fluid mb-5 mt-5"},T={class:"row"},V={class:"col-md-12"},H=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),M=d(" Kembali"),j={class:"card border-0 shadow"},D={class:"card-body"},q=t("h5",null,[t("i",{class:"fa fa-bookmark"}),d(" Tambah Kelompok Soal")],-1),F=t("hr",null,null,-1),O={class:"mb-4"},U=t("label",null,"Nama ",-1),A={key:0,class:"alert alert-danger mt-2"},E=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),I=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function R(s,e,n,o,z,G){const _=r("Head"),u=r("Link");return i(),l(g,null,[c(_,null,{default:m(()=>[C]),_:1}),t("div",K,[t("div",T,[t("div",V,[c(u,{href:"/teacher/question_groups",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:m(()=>[H,M]),_:1}),t("div",j,[t("div",D,[q,F,t("form",{onSubmit:e[1]||(e[1]=k((...a)=>o.submit&&o.submit(...a),["prevent"]))},[t("div",O,[U,v(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Kelompok Soal","onUpdate:modelValue":e[0]||(e[0]=a=>o.form.name=a)},null,512),[[w,o.form.name]]),n.errors.name?(i(),l("div",A,y(n.errors.name),1)):S("",!0)]),E,I],32)])])])])])],64)}const X=N(B,[["render",R]]);export{X as default};
