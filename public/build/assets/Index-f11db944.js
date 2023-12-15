import{L as y}from"./Admin-281f4956.js";import{P as x}from"./Pagination-c01cecaf.js";import{H as B,L as C,k as L,r as l,o as h,c as _,a as n,w as i,b as t,f as b,g as S,v as A,F as f,l as D,i as p,t as d,j as v}from"./app-a09bc75d.js";import{S as w}from"./sweetalert2.all-65cebffe.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const N={layout:y,components:{Head:B,Link:C,Pagination:x},props:{teachers:Object},setup(){const c=L(new URL(document.location).searchParams.get("q"));return{search:c,handleSearch:()=>{p.Inertia.get("/admin/teachers",{q:c.value})},destroy:e=>{w.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(m=>{m.isConfirmed&&(p.Inertia.delete(`/admin/teachers/${e}`),w.fire({title:"Deleted!",text:"Dosen Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},H=t("title",null,"Dosen - Aplikasi Ujian Online",-1),I={class:"container-fluid mb-5 mt-5"},T={class:"row"},V={class:"col-md-8"},j={class:"row"},U={class:"col-md-5 col-12 mb-2"},q={class:"row"},F={class:"col-md-6 col-12 mb-2"},M=t("i",{class:"fa fa-plus-circle"},null,-1),O=v(" Tambah"),E={class:"col-md-6 col-12 mb-2"},J=t("i",{class:"fa fa-file-excel"},null,-1),K=v(" Import"),R={class:"col-md-7 col-12 mb-2"},Y={class:"input-group"},z=t("span",{class:"input-group-text border-0 shadow"},[t("i",{class:"fa fa-search"})],-1),G={class:"row mt-1"},Q={class:"col-md-12"},W={class:"card border-0 shadow"},X={class:"card-body"},Z={class:"table-responsive"},$={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},tt=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),t("th",{class:"border-0"},"nip"),t("th",{class:"border-0"},"Nama"),t("th",{class:"border-0"},"Jenis Kelamin"),t("th",{class:"border-0"},"Password"),t("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),st=t("div",{class:"mt-2"},null,-1),et={class:"fw-bold text-center"},ot={class:"text-center"},at={class:"text-center"},nt=t("i",{class:"fa fa-pencil-alt"},null,-1),dt=["onClick"],it=t("i",{class:"fa fa-trash"},null,-1),ct=[it];function rt(c,o,a,e,m,lt){const k=l("Head"),r=l("Link"),g=l("Pagination");return h(),_(f,null,[n(k,null,{default:i(()=>[H]),_:1}),t("div",I,[t("div",T,[t("div",V,[t("div",j,[t("div",U,[t("div",q,[t("div",F,[n(r,{href:"/admin/teachers/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:i(()=>[M,O]),_:1})]),t("div",E,[n(r,{href:"/admin/teachers/import",class:"btn btn-md btn-success border-0 shadow w-100 text-white",type:"button"},{default:i(()=>[J,K]),_:1})])])]),t("div",R,[t("form",{onSubmit:o[1]||(o[1]=b((...s)=>e.handleSearch&&e.handleSearch(...s),["prevent"]))},[t("div",Y,[S(t("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":o[0]||(o[0]=s=>e.search=s),placeholder:"masukkan kata kunci dan enter..."},null,512),[[A,e.search]]),z])],32)])])])]),t("div",G,[t("div",Q,[t("div",W,[t("div",X,[t("div",Z,[t("table",$,[tt,st,t("tbody",null,[(h(!0),_(f,null,D(a.teachers.data,(s,u)=>(h(),_("tr",{key:u},[t("td",et,d(++u+(a.teachers.current_page-1)*a.teachers.per_page),1),t("td",null,d(s.nip),1),t("td",null,d(s.name),1),t("td",ot,d(s.gender),1),t("td",null,d(s.password),1),t("td",at,[n(r,{href:`/admin/teachers/${s.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:i(()=>[nt]),_:2},1032,["href"]),t("button",{onClick:b(ht=>e.destroy(s.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},ct,8,dt)])]))),128))])])]),n(g,{links:a.teachers.links,align:"end"},null,8,["links"])])])])])])],64)}const pt=P(N,[["render",rt]]);export{pt as default};
