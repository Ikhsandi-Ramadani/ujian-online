import{L as y}from"./Teacher-328f0e3a.js";import{H as p,L as w,e as S,r as c,o as i,c as l,a as d,w as u,b as t,f as V,g as h,v as g,t as r,h as m,m as U,F as b,l as L,i as j,j as f}from"./app-cb61d73c.js";import{S as D}from"./sweetalert2.all-c2815362.js";import{y as N}from"./main-2eba8d56.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const C={layout:y,components:{Head:p,Link:w,Datepicker:N},props:{errors:Object,exams:Array},setup(){const n=S({title:"",exam_id:"",start_time:"",end_time:""});return{form:n,submit:()=>{j.Inertia.post("/teacher/exam_sessions",{title:n.title,exam_id:n.exam_id,start_time:n.start_time,end_time:n.end_time},{onSuccess:()=>{D.fire({title:"Success!",text:"Sesi Ujian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},M=t("title",null,"Tambah Sesi Ujian - Aplikasi Ujian Online",-1),T={class:"container-fluid mb-5 mt-5"},H={class:"row"},A={class:"col-md-12"},F=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),O=f(" Kembali"),W={class:"card border-0 shadow"},E={class:"card-body"},I=t("h5",null,[t("i",{class:"fas fa-stopwatch"}),f(" Tambah Sesi")],-1),K=t("hr",null,null,-1),R={class:"row"},q={class:"col-md-6"},z={class:"mb-4"},G=t("label",null,"Nama Sesi",-1),J={key:0,class:"alert alert-danger mt-2"},P={class:"col-md-6"},Q={class:"mb-4"},X=t("label",null,"Ujian",-1),Y=["value"],Z={key:0,class:"alert alert-danger mt-2"},$={class:"row"},tt={class:"col-md-6"},et={class:"mb-4"},st=t("label",null,"Waktu Mulai",-1),ot={key:0,class:"alert alert-danger mt-2"},at={class:"col-md-6"},it={class:"mb-4"},lt=t("label",null,"Waktu Selesai",-1),nt={key:0,class:"alert alert-danger mt-2"},rt=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),dt=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function mt(n,s,a,o,ct,_t){const v=c("Head"),k=c("Link"),_=c("Datepicker");return i(),l(b,null,[d(v,null,{default:u(()=>[M]),_:1}),t("div",T,[t("div",H,[t("div",A,[d(k,{href:"/teacher/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:u(()=>[F,O]),_:1}),t("div",W,[t("div",E,[I,K,t("form",{onSubmit:s[4]||(s[4]=V((...e)=>o.submit&&o.submit(...e),["prevent"]))},[t("div",R,[t("div",q,[t("div",z,[G,h(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Sesi","onUpdate:modelValue":s[0]||(s[0]=e=>o.form.title=e)},null,512),[[g,o.form.title]]),a.errors.title?(i(),l("div",J,r(a.errors.title),1)):m("",!0)])]),t("div",P,[t("div",Q,[X,h(t("select",{class:"form-select","onUpdate:modelValue":s[1]||(s[1]=e=>o.form.exam_id=e)},[(i(!0),l(b,null,L(a.exams,(e,x)=>(i(),l("option",{key:x,value:e.id},r(e.title),9,Y))),128))],512),[[U,o.form.exam_id]]),a.errors.exam_id?(i(),l("div",Z,r(a.errors.exam_id),1)):m("",!0)])])]),t("div",$,[t("div",tt,[t("div",et,[st,d(_,{modelValue:o.form.start_time,"onUpdate:modelValue":s[2]||(s[2]=e=>o.form.start_time=e),"teleport-center":""},null,8,["modelValue"]),a.errors.start_time?(i(),l("div",ot,r(a.errors.start_time),1)):m("",!0)])]),t("div",at,[t("div",it,[lt,d(_,{modelValue:o.form.end_time,"onUpdate:modelValue":s[3]||(s[3]=e=>o.form.end_time=e)},null,8,["modelValue"]),a.errors.end_time?(i(),l("div",nt,r(a.errors.end_time),1)):m("",!0)])])]),rt,dt],32)])])])])])],64)}const kt=B(C,[["render",mt]]);export{kt as default};
