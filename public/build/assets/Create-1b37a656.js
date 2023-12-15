import{L as w}from"./Teacher-e5123484.js";import{H as y,L as q,e as j,r as u,o as l,c as n,a as h,w as f,b as e,f as k,g as d,m as v,F as b,l as L,t as i,h as c,v as S,i as V,j as m,d as U}from"./app-a09bc75d.js";import"./sweetalert2.all-65cebffe.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const N={layout:w,components:{Head:y,Link:q},props:{errors:Object,exam:Object,questions:Array,question_groups:Array},setup(r){const o=j({exam_id:r.exam.id||new URL(document.location).searchParams.get("exam_id"),level:new URL(document.location).searchParams.get("level"),question_group_id:new URL(document.location).searchParams.get("question_group_id"),question_id:[],allSelected:!1,jumlah:""});return{form:o,generate:()=>{V.Inertia.get(`/teacher/exams/${r.exam.id}/enrolle/create/generate`,{exam_id:o.exam_id,level:o.level,question_group_id:o.question_group_id,jumlah:o.jumlah})},selectAll:()=>{o.allSelected?o.question_id=r.questions.map(_=>_.id):o.question_id=[]}}}},C=e("title",null,"Enrolle Soal - Aplikasi Ujian Online",-1),H={class:"container-fluid mb-5 mt-5"},B={class:"row"},M={class:"col-md-12"},O=e("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),P=m(" Kembali"),R={class:"card border-0 shadow mb-4"},T={class:"card-body"},D=e("h5",null,[e("i",{class:"fa fa-filter"}),m(" Generate Soal")],-1),E=e("hr",null,null,-1),F={class:"row"},G={class:"col-md-5"},K=e("label",{class:"control-label",for:"name"},"Kelompok Soal",-1),I=["value"],J={key:0,class:"alert alert-danger mt-2"},z={class:"col-md-2"},Q=e("label",{class:"control-label",for:"name"},"Level Soal",-1),W=U('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>',5),X=[W],Y={key:0,class:"alert alert-danger mt-2"},Z={class:"col-md-2"},$=e("label",{class:"control-label",for:"name"},"Jumlah Soal",-1),ee={key:0,class:"alert alert-danger mt-2"},oe=e("div",{class:"col-md-3"},[e("label",{class:"form-label fw-bold text-white"},"*"),e("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow w-100"},[e("i",{class:"fa fa-filter"}),m(" Generate")])],-1);function te(r,o,s,a,_,se){const g=u("Head"),p=u("Link");return l(),n(b,null,[h(g,null,{default:f(()=>[C]),_:1}),e("div",H,[e("div",B,[e("div",M,[h(p,{href:`/teacher/exams/${s.exam.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:f(()=>[O,P]),_:1},8,["href"]),e("div",R,[e("div",T,[D,E,e("form",{onSubmit:o[3]||(o[3]=k((...t)=>a.generate&&a.generate(...t),["prevent"]))},[e("div",F,[e("div",G,[K,d(e("select",{class:"form-select","onUpdate:modelValue":o[0]||(o[0]=t=>a.form.question_group_id=t)},[(l(!0),n(b,null,L(s.question_groups,(t,x)=>(l(),n("option",{key:x,value:t.id},i(t.name),9,I))),128))],512),[[v,a.form.question_group_id]]),s.errors.question_group_id?(l(),n("div",J,i(s.errors.question_group_id),1)):c("",!0)]),e("div",z,[Q,d(e("select",{class:"form-select","onUpdate:modelValue":o[1]||(o[1]=t=>a.form.level=t)},X,512),[[v,a.form.level]]),s.errors.level?(l(),n("div",Y,i(s.errors.level),1)):c("",!0)]),e("div",Z,[$,d(e("input",{type:"number","onUpdate:modelValue":o[2]||(o[2]=t=>a.form.jumlah=t),class:"form-control"},null,512),[[S,a.form.jumlah]]),s.errors.jumlah?(l(),n("div",ee,i(s.errors.jumlah),1)):c("",!0)]),oe])],32)])])])])])],64)}const ie=A(N,[["render",te]]);export{ie as default};
