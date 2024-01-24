import{L as y}from"./Teacher-a1ac5b37.js";import{H as w,L as S,e as V,r as _,o as i,c as n,a as d,w as u,b as e,f as g,g as h,v as U,t as r,h as m,m as j,F as b,l as p,i as L,j as f}from"./app-2f294101.js";import{S as D}from"./sweetalert2.all-7ef14205.js";import{y as N}from"./main-49954c8b.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const M={layout:y,components:{Head:w,Link:S,Datepicker:N},props:{errors:Object,exam_session:Object,exams:Array},setup(l){const t=V({title:l.exam_session.title,exam_id:l.exam_session.exam_id,start_time:l.exam_session.start_time,end_time:l.exam_session.end_time});return{form:t,submit:()=>{L.Inertia.put(`/teacher/exam_sessions/${l.exam_session.id}`,{title:t.title,exam_id:t.exam_id,start_time:t.start_time,end_time:t.end_time},{onSuccess:()=>{D.fire({title:"Success!",text:"Sesi Ujian Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},C=e("title",null,"Edit Sesi Ujian - Aplikasi Ujian Online",-1),E={class:"container-fluid mb-5 mt-5"},H={class:"row"},O={class:"col-md-12"},T=e("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),A=f(" Kembali"),F={class:"card border-0 shadow"},W={class:"card-body"},I=e("h5",null,[e("i",{class:"fas fa-stopwatch"}),f(" Edit Sesi")],-1),K=e("hr",null,null,-1),R={class:"row"},q={class:"col-md-6"},z={class:"mb-4"},G=e("label",null,"Nama Sesi",-1),J={key:0,class:"alert alert-danger mt-2"},P={class:"col-md-6"},Q={class:"mb-4"},X=e("label",null,"Ujian",-1),Y=["value"],Z={key:0,class:"alert alert-danger mt-2"},$={class:"row"},ee={class:"col-md-6"},te={class:"mb-4"},se=e("label",null,"Waktu Mulai",-1),oe={key:0,class:"alert alert-danger mt-2"},ae={class:"col-md-6"},ie={class:"mb-4"},ne=e("label",null,"Waktu Selesai",-1),le={key:0,class:"alert alert-danger mt-2"},re=e("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),de=e("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function me(l,t,o,a,_e,ce){const v=_("Head"),x=_("Link"),c=_("Datepicker");return i(),n(b,null,[d(v,null,{default:u(()=>[C]),_:1}),e("div",E,[e("div",H,[e("div",O,[d(x,{href:"/teacher/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:u(()=>[T,A]),_:1}),e("div",F,[e("div",W,[I,K,e("form",{onSubmit:t[4]||(t[4]=g((...s)=>a.submit&&a.submit(...s),["prevent"]))},[e("div",R,[e("div",q,[e("div",z,[G,h(e("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Sesi","onUpdate:modelValue":t[0]||(t[0]=s=>a.form.title=s)},null,512),[[U,a.form.title]]),o.errors.title?(i(),n("div",J,r(o.errors.title),1)):m("",!0)])]),e("div",P,[e("div",Q,[X,h(e("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=s=>a.form.exam_id=s)},[(i(!0),n(b,null,p(o.exams,(s,k)=>(i(),n("option",{key:k,value:s.id},r(s.title),9,Y))),128))],512),[[j,a.form.exam_id]]),o.errors.exam_id?(i(),n("div",Z,r(o.errors.exam_id),1)):m("",!0)])])]),e("div",$,[e("div",ee,[e("div",te,[se,d(c,{modelValue:a.form.start_time,"onUpdate:modelValue":t[2]||(t[2]=s=>a.form.start_time=s)},null,8,["modelValue"]),o.errors.start_time?(i(),n("div",oe,r(o.errors.start_time),1)):m("",!0)])]),e("div",ae,[e("div",ie,[ne,d(c,{modelValue:a.form.end_time,"onUpdate:modelValue":t[3]||(t[3]=s=>a.form.end_time=s)},null,8,["modelValue"]),o.errors.end_time?(i(),n("div",le,r(o.errors.end_time),1)):m("",!0)])])]),re,de],32)])])])])])],64)}const xe=B(M,[["render",me]]);export{xe as default};
