import{L as g}from"./Admin-281f4956.js";import{P as y}from"./Pagination-c01cecaf.js";import{H as x,L as B,k as C,r as d,o as l,c as r,a as n,w as c,b as t,f as u,g as L,v as S,F as b,l as A,i as f,t as p,j as M}from"./app-a09bc75d.js";import{S as k}from"./sweetalert2.all-65cebffe.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const P={layout:g,components:{Head:x,Link:B,Pagination:y},props:{lessons:Object},setup(){const i=C(new URL(document.location).searchParams.get("q"));return{search:i,handleSearch:()=>{f.Inertia.get("/admin/lessons",{q:i.value})},destroy:s=>{k.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(_=>{_.isConfirmed&&(f.Inertia.delete(`/admin/lessons/${s}`),k.fire({title:"Deleted!",text:"Mata Kuliah Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},D=t("title",null,"Mata Kuliah - Aplikasi Ujian Online",-1),H={class:"container-fluid mb-5 mt-5"},T={class:"row"},V={class:"col-md-8"},j={class:"row"},I={class:"col-md-3 col-12 mb-2"},K=t("i",{class:"fa fa-plus-circle"},null,-1),U=M(" Tambah"),q={class:"col-md-9 col-12 mb-2"},F={class:"input-group"},O=t("span",{class:"input-group-text border-0 shadow"},[t("i",{class:"fa fa-search"})],-1),E={class:"row mt-1"},R={class:"col-md-12"},Y={class:"card border-0 shadow"},z={class:"card-body"},G={class:"table-responsive"},J={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},Q=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),t("th",{class:"border-0"},"Nama Mata Kuliah"),t("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),W=t("div",{class:"mt-2"},null,-1),X={class:"fw-bold text-center"},Z={class:"text-center"},$=t("i",{class:"fa fa-pencil-alt"},null,-1),tt=["onClick"],st=t("i",{class:"fa fa-trash"},null,-1),et=[st];function at(i,a,o,s,_,ot){const v=d("Head"),h=d("Link"),w=d("Pagination");return l(),r(b,null,[n(v,null,{default:c(()=>[D]),_:1}),t("div",H,[t("div",T,[t("div",V,[t("div",j,[t("div",I,[n(h,{href:"/admin/lessons/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:c(()=>[K,U]),_:1})]),t("div",q,[t("form",{onSubmit:a[1]||(a[1]=u((...e)=>s.handleSearch&&s.handleSearch(...e),["prevent"]))},[t("div",F,[L(t("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":a[0]||(a[0]=e=>s.search=e),placeholder:"masukkan kata kunci dan enter..."},null,512),[[S,s.search]]),O])],32)])])])]),t("div",E,[t("div",R,[t("div",Y,[t("div",z,[t("div",G,[t("table",J,[Q,W,t("tbody",null,[(l(!0),r(b,null,A(o.lessons.data,(e,m)=>(l(),r("tr",{key:m},[t("td",X,p(++m+(o.lessons.current_page-1)*o.lessons.per_page),1),t("td",null,p(e.title),1),t("td",Z,[n(h,{href:`/admin/lessons/${e.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:c(()=>[$]),_:2},1032,["href"]),t("button",{onClick:u(nt=>s.destroy(e.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},et,8,tt)])]))),128))])])]),n(w,{links:o.lessons.links,align:"end"},null,8,["links"])])])])])])],64)}const _t=N(P,[["render",at]]);export{_t as default};
