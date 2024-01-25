import{L as p}from"./Teacher-443ba9fc.js";import{P as v}from"./Pagination-a69965e7.js";import{H as k,L as y,r as n,o as l,c as i,a as d,w as h,b as s,t as e,F as m,l as g,i as B,j as c,f as C}from"./app-d0c346f8.js";import{S as u}from"./sweetalert2.all-331f1a32.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const L={layout:p,components:{Head:k,Link:y,Pagination:v},props:{errors:Object,exam_session:Object},setup(){return{destroy:(r,t)=>{u.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&(B.Inertia.delete(`/teacher/exam_sessions/${r}/enrolle/${t}/destroy`),u.fire({title:"Deleted!",text:"Mahasiswa Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},N=s("title",null,"Peserta Sesi Ujian - Aplikasi Ujian Online",-1),P={class:"container-fluid mb-5 mt-5"},S={class:"row"},A={class:"col-md-12"},M=s("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),U=c(" Kembali"),D={class:"card border-0 shadow mb-4"},H={class:"card-body"},K=s("h5",null,[s("i",{class:"fa fa-stopwatch"}),c(" Detail Sesi Ujian")],-1),O=s("hr",null,null,-1),T={class:"row"},V={class:"col-6"},F={class:"table-responsive"},E={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},I=s("td",{style:{width:"30%"},class:"fw-bold"},"Nama Ujian",-1),J=s("td",{class:"fw-bold"},"Mata Kuliah",-1),Y=s("td",{class:"fw-bold"},"Sesi",-1),q={class:"col-6"},z={class:"table-responsive"},G={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},Q=s("td",{class:"fw-bold"},"Mulai",-1),R=s("td",{class:"fw-bold"},"Selesai",-1),W={class:"card border-0 shadow"},X={class:"card-body"},Z=s("h5",null,[s("i",{class:"fa fa-user-plus"}),c(" Peserta Ujian")],-1),$=s("hr",null,null,-1),ss={class:"table-responsive mt-3"},ts={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},es=s("thead",{class:"thead-dark"},[s("tr",{class:"border-0"},[s("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),s("th",{class:"border-0"},"Nim"),s("th",{class:"border-0"},"Nama Mahasiswa"),s("th",{class:"border-0"},"Jenis Kelamin"),s("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),os=s("div",{class:"mt-2"},null,-1),as={class:"fw-bold text-center"},ns={class:"text-center"},ls={class:"text-center"},is={class:"text-center"},ds=["onClick"],cs=s("i",{class:"fa fa-trash"},null,-1),rs=[cs];function _s(b,r,t,a,hs,ms){const f=n("Head"),x=n("Link"),w=n("Pagination");return l(),i(m,null,[d(f,null,{default:h(()=>[N]),_:1}),s("div",P,[s("div",S,[s("div",A,[d(x,{href:"/teacher/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:h(()=>[M,U]),_:1}),s("div",D,[s("div",H,[K,O,s("div",T,[s("div",V,[s("div",F,[s("table",E,[s("tbody",null,[s("tr",null,[I,s("td",null,e(t.exam_session.exam.title),1)]),s("tr",null,[J,s("td",null,e(t.exam_session.exam.lesson.title),1)]),s("tr",null,[Y,s("td",null,e(t.exam_session.title),1)])])])])]),s("div",q,[s("div",z,[s("table",G,[s("tbody",null,[s("tr",null,[Q,s("td",null,e(t.exam_session.start_time),1)]),s("tr",null,[R,s("td",null,e(t.exam_session.end_time),1)])])])])])])])]),s("div",W,[s("div",X,[Z,$,s("div",ss,[s("table",ts,[es,os,s("tbody",null,[(l(!0),i(m,null,g(t.exam_session.exam_groups.data,(o,_)=>(l(),i("tr",{key:_},[s("td",as,e(++_+(t.exam_session.exam_groups.current_page-1)*t.exam_session.exam_groups.per_page),1),s("td",ns,e(o.student.nim),1),s("td",null,e(o.student.name),1),s("td",ls,e(o.student.gender),1),s("td",is,[s("button",{onClick:C(us=>a.destroy(t.exam_session.id,o.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},rs,8,ds)])]))),128))])])]),d(w,{links:t.exam_session.exam_groups.links,align:"end"},null,8,["links"])])])])])])],64)}const vs=j(L,[["render",_s]]);export{vs as default};
