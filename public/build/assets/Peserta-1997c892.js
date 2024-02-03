import{L as m}from"./Teacher-e069bafe.js";import{P as _}from"./Pagination-e5c6f3c5.js";import{H as h,L as u,v as e,d as N}from"./app-9fc4214f.js";import{S as l}from"./sweetalert2.all-6c7228fe.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const E={layout:m,components:{Head:h,Link:u,Pagination:_},props:{errors:Object,exam_session:Object},setup(){return{destroy:(n,t)=>{l.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&(N.Inertia.delete(`/teacher/exam_sessions/${n}/enrolle/${t}/destroy`),l.fire({title:"Deleted!",text:"Mahasiswa Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},b=e.createElementVNode("title",null,"Peserta Sesi Ujian - Aplikasi Ujian Online",-1),f={class:"container-fluid mb-5 mt-5"},p={class:"row"},x={class:"col-md-12"},w=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),y=e.createTextVNode(" Kembali"),g={class:"card border-0 shadow mb-4"},v={class:"card-body"},k=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-stopwatch"}),e.createTextVNode(" Detail Sesi Ujian")],-1),S=e.createElementVNode("hr",null,null,-1),B={class:"row"},C={class:"col-6"},D={class:"table-responsive"},j={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},L=e.createElementVNode("td",{style:{width:"30%"},class:"fw-bold"},"Nama Ujian",-1),P=e.createElementVNode("td",{class:"fw-bold"},"Mata Kuliah",-1),A=e.createElementVNode("td",{class:"fw-bold"},"Sesi",-1),M={class:"col-6"},T={class:"table-responsive"},U={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},H=e.createElementVNode("td",{class:"fw-bold"},"Mulai",-1),K=e.createElementVNode("td",{class:"fw-bold"},"Selesai",-1),O={class:"card border-0 shadow"},F={class:"card-body"},I=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-user-plus"}),e.createTextVNode(" Peserta Ujian")],-1),J=e.createElementVNode("hr",null,null,-1),Y={class:"table-responsive mt-3"},q={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},z=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),e.createElementVNode("th",{class:"border-0"},"Nim"),e.createElementVNode("th",{class:"border-0"},"Nama Mahasiswa"),e.createElementVNode("th",{class:"border-0"},"Jenis Kelamin"),e.createElementVNode("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),G=e.createElementVNode("div",{class:"mt-2"},null,-1),Q={class:"fw-bold text-center"},R={class:"text-center"},W={class:"text-center"},X={class:"text-center"},Z=["onClick"],$=e.createElementVNode("i",{class:"fa fa-trash"},null,-1),ee=[$];function te(d,n,t,s,oe,se){const r=e.resolveComponent("Head"),c=e.resolveComponent("Link"),i=e.resolveComponent("Pagination");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(r,null,{default:e.withCtx(()=>[b]),_:1}),e.createElementVNode("div",f,[e.createElementVNode("div",p,[e.createElementVNode("div",x,[e.createVNode(c,{href:"/teacher/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[w,y]),_:1}),e.createElementVNode("div",g,[e.createElementVNode("div",v,[k,S,e.createElementVNode("div",B,[e.createElementVNode("div",C,[e.createElementVNode("div",D,[e.createElementVNode("table",j,[e.createElementVNode("tbody",null,[e.createElementVNode("tr",null,[L,e.createElementVNode("td",null,e.toDisplayString(t.exam_session.exam.title),1)]),e.createElementVNode("tr",null,[P,e.createElementVNode("td",null,e.toDisplayString(t.exam_session.exam.lesson.title),1)]),e.createElementVNode("tr",null,[A,e.createElementVNode("td",null,e.toDisplayString(t.exam_session.title),1)])])])])]),e.createElementVNode("div",M,[e.createElementVNode("div",T,[e.createElementVNode("table",U,[e.createElementVNode("tbody",null,[e.createElementVNode("tr",null,[H,e.createElementVNode("td",null,e.toDisplayString(t.exam_session.start_time),1)]),e.createElementVNode("tr",null,[K,e.createElementVNode("td",null,e.toDisplayString(t.exam_session.end_time),1)])])])])])])])]),e.createElementVNode("div",O,[e.createElementVNode("div",F,[I,J,e.createElementVNode("div",Y,[e.createElementVNode("table",q,[z,G,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.exam_session.exam_groups.data,(o,a)=>(e.openBlock(),e.createElementBlock("tr",{key:a},[e.createElementVNode("td",Q,e.toDisplayString(++a+(t.exam_session.exam_groups.current_page-1)*t.exam_session.exam_groups.per_page),1),e.createElementVNode("td",R,e.toDisplayString(o.student.nim),1),e.createElementVNode("td",null,e.toDisplayString(o.student.name),1),e.createElementVNode("td",W,e.toDisplayString(o.student.gender),1),e.createElementVNode("td",X,[e.createElementVNode("button",{onClick:e.withModifiers(ne=>s.destroy(t.exam_session.id,o.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},ee,8,Z)])]))),128))])])]),e.createVNode(i,{links:t.exam_session.exam_groups.links,align:"end"},null,8,["links"])])])])])])],64)}const ie=V(E,[["render",te]]);export{ie as default};
