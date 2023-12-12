import{L as k}from"./Teacher-e28d0d24.js";import{P as g}from"./Pagination-5bbbb422.js";import{H as w,L as y,r as a,o as i,c as r,a as d,w as _,b as e,F as m,l as v,i as B,j as u,t as n,f as C}from"./app-d582b5b9.js";import{S as h}from"./sweetalert2.all-fd1ed82b.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const P={layout:k,components:{Head:w,Link:y,Pagination:g},props:{errors:Object,exam_session:Object},setup(){return{destroy:(l,t)=>{h.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(o=>{o.isConfirmed&&(B.Inertia.delete(`/teacher/exam_sessions/${l}/enrolle/${t}/destroy`),h.fire({title:"Deleted!",text:"Mahasiswa Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},j=e("title",null,"Peserta Sesi Ujian - Aplikasi Ujian Online",-1),N={class:"container-fluid mb-5 mt-5"},A={class:"row"},H={class:"col-md-12"},S=e("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),D=u(" Kembali"),M={class:"card border-0 shadow"},O={class:"card-body"},T=e("h5",null,[e("i",{class:"fa fa-user-plus"}),u(" Peserta Ujian")],-1),U=e("hr",null,null,-1),V={class:"table-responsive mt-3"},F={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},K=e("thead",{class:"thead-dark"},[e("tr",{class:"border-0"},[e("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),e("th",{class:"border-0"},"Nim"),e("th",{class:"border-0"},"Nama Mahasiswa"),e("th",{class:"border-0"},"Jenis Kelamin"),e("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),E=e("div",{class:"mt-2"},null,-1),I={class:"fw-bold text-center"},J={class:"text-center"},Y={class:"text-center"},$={class:"text-center"},q=["onClick"],z=e("i",{class:"fa fa-trash"},null,-1),G=[z];function Q(b,l,t,o,R,W){const f=a("Head"),p=a("Link"),x=a("Pagination");return i(),r(m,null,[d(f,null,{default:_(()=>[j]),_:1}),e("div",N,[e("div",A,[e("div",H,[d(p,{href:"/teacher/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:_(()=>[S,D]),_:1}),e("div",M,[e("div",O,[T,U,e("div",V,[e("table",F,[K,E,e("tbody",null,[(i(!0),r(m,null,v(t.exam_session.exam_groups.data,(s,c)=>(i(),r("tr",{key:c},[e("td",I,n(++c+(t.exam_session.exam_groups.current_page-1)*t.exam_session.exam_groups.per_page),1),e("td",J,n(s.student.nim),1),e("td",null,n(s.student.name),1),e("td",Y,n(s.student.gender),1),e("td",$,[e("button",{onClick:C(X=>o.destroy(t.exam_session.id,s.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},G,8,q)])]))),128))])])]),d(x,{links:t.exam_session.exam_groups.links,align:"end"},null,8,["links"])])])])])])],64)}const oe=L(P,[["render",Q]]);export{oe as default};