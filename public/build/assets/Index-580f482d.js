import{L as f}from"./Teacher-e28d0d24.js";import{H as u,L as x,e as v,r as w,o as a,c as o,a as p,w as y,b as t,f as N,g as k,m as L,F as _,l as h,t as s,h as m,i as j,j as d}from"./app-d582b5b9.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const g={layout:f,components:{Head:u,Link:x},props:{errors:Object,exams:Array,grades:Array},setup(){const n=v({exam_id:new URL(document.location).searchParams.get("exam_id")});return{form:n,filter:()=>{j.Inertia.get("/teacher/reports/filter",{exam_id:n.exam_id})}}}},S=t("title",null,"Laporan Nilai Ujian - Aplikasi Ujian Online",-1),V={class:"container-fluid mb-5 mt-5"},A={class:"row"},C={class:"col-md-12"},D={class:"card border-0 shadow mb-4"},F={class:"card-body"},H=t("h5",null,[t("i",{class:"fa fa-filter"}),d(" Filter Nilai Ujian")],-1),O=t("hr",null,null,-1),B={class:"row"},E={class:"col-md-9"},M=t("label",{class:"control-label",for:"name"},"Ujian",-1),I=["value"],P={key:0,class:"alert alert-danger mt-2"},T=t("div",{class:"col-md-3"},[t("label",{class:"form-label fw-bold text-white"},"*"),t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow w-100"},[t("i",{class:"fa fa-filter"}),d(" Filter")])],-1),K={key:0,class:"card border-0 shadow"},R={class:"card-body"},W={class:"row"},X=t("div",{class:"col-md-9 col-12"},[t("h5",{class:"mt-2"},[t("i",{class:"fa fa-chart-line"}),d(" Laporan Nilai Ujian")])],-1),q={class:"col-md-3 col-12"},z=["href"],G=t("i",{class:"fa fa-file-excel"},null,-1),J=d(" DOWNLOAD EXCEL"),Q=[G,J],Y=t("hr",null,null,-1),Z={class:"table-responsive"},$={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},tt=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),t("th",{class:"border-0"},"Ujian"),t("th",{class:"border-0"},"Sesi"),t("th",{class:"border-0"},"Nama Siswa"),t("th",{class:"border-0"},"Pelajaran"),t("th",{class:"border-0"},"Nilai")])],-1),et=t("div",{class:"mt-2"},null,-1),st={class:"fw-bold text-center"},at={class:"fw-bold text-center"};function ot(n,l,r,i,lt,rt){const b=w("Head");return a(),o(_,null,[p(b,null,{default:y(()=>[S]),_:1}),t("div",V,[t("div",A,[t("div",C,[t("div",D,[t("div",F,[H,O,t("form",{onSubmit:l[1]||(l[1]=N((...e)=>i.filter&&i.filter(...e),["prevent"]))},[t("div",B,[t("div",E,[M,k(t("select",{class:"form-select","onUpdate:modelValue":l[0]||(l[0]=e=>i.form.exam_id=e)},[(a(!0),o(_,null,h(r.exams,(e,c)=>(a(),o("option",{key:c,value:e.id},s(e.title)+" — Mata Kuliah : "+s(e.lesson.title),9,I))),128))],512),[[L,i.form.exam_id]]),r.errors.exam_id?(a(),o("div",P,s(r.errors.exam_id),1)):m("",!0)]),T])],32)])]),r.grades.length>0?(a(),o("div",K,[t("div",R,[t("div",W,[X,t("div",q,[t("a",{href:`/teacher/reports/export?exam_id=${i.form.exam_id}`,target:"_blank",class:"btn btn-success btn-md border-0 shadow w-100 text-white"},Q,8,z)])]),Y,t("div",Z,[t("table",$,[tt,et,t("tbody",null,[(a(!0),o(_,null,h(r.grades,(e,c)=>(a(),o("tr",{key:e.id},[t("td",st,s(c+1),1),t("td",null,s(e.exam.title),1),t("td",null,s(e.exam_session.title),1),t("td",null,s(e.student.name),1),t("td",null,s(e.exam.lesson.title),1),t("td",at,s(e.grade),1)]))),128))])])])])])):m("",!0)])])])],64)}const ct=U(g,[["render",ot]]);export{ct as default};
