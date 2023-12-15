import{L as T}from"./Teacher-e5123484.js";import{P as H}from"./Pagination-c01cecaf.js";import{H as y,L as M,k as S,r as d,o as _,c as h,a,w as i,b as t,f,g as q,v as B,t as p,F as w,l as C,i as k,p as l,j as v}from"./app-a09bc75d.js";import{S as g}from"./sweetalert2.all-65cebffe.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const j={layout:T,components:{Head:y,Link:M,Pagination:H},props:{errors:Object,questions:Object,question_group:Object},setup(){const r=S(new URL(document.location).searchParams.get("q"));return{search:r,handleSearch:()=>{k.Inertia.get(`/teacher/question_groups/${question_group.id}/question_banks`,{q:r.value})},destroy:(o,u)=>{g.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(b=>{b.isConfirmed&&(k.Inertia.delete(`/teacher/question_groups/${o}/question_banks/${u}`),g.fire({title:"Deleted!",text:"Soal Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},P=t("title",null,"Bank Soal - Aplikasi Ujian Online",-1),D={class:"container-fluid mb-5 mt-5"},N={class:"row"},O={class:"col-md-8"},V={class:"row"},I={class:"col-md-5 col-12 mb-2"},U={class:"row"},F={class:"col-md-6 col-12 mb-2"},z=t("i",{class:"fa fa-plus-circle"},null,-1),E=v(" Tambah"),K={class:"col-md-6 col-12 mb-2"},R=t("i",{class:"fa fa-long-arrow-alt-left"},null,-1),Y=v(" Kembali"),G={class:"col-md-7 col-12 mb-2"},J={class:"input-group"},Q=t("span",{class:"input-group-text border-0 shadow"},[t("i",{class:"fa fa-search"})],-1),W={class:"row"},X={class:"col-md-12"},Z={class:"card border-0 shadow"},$={class:"card-body"},tt=t("hr",null,null,-1),st={class:"table-responsive mt-3"},et={class:"table table-bordered table-centered mb-0 rounded"},ot=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start"},"No."),t("th",{class:"border-0"},"Soal"),t("th",{class:"border-0"},"Level Soal"),t("th",{class:"border-0 rounded-end"},"Aksi")])],-1),nt=t("div",{class:"mt-2"},null,-1),at={class:"fw-bold text-center"},lt={class:"text-wrap"},it=["innerHTML"],rt=t("hr",null,null,-1),ct={type:"A"},dt=["innerHTML"],_t=["innerHTML"],ht=["innerHTML"],ut=["innerHTML"],bt=["innerHTML"],mt=["innerHTML"],ft={class:"text-center"},pt=t("i",{class:"fa fa-pencil-alt"},null,-1),wt=["onClick"],kt=t("i",{class:"fa fa-trash"},null,-1),gt=[kt];function vt(r,n,e,o,u,b){const L=d("Head"),c=d("Link"),x=d("Pagination");return _(),h(w,null,[a(L,null,{default:i(()=>[P]),_:1}),t("div",D,[t("div",N,[t("div",O,[t("div",V,[t("div",I,[t("div",U,[t("div",F,[a(c,{href:`/teacher/question_groups/${e.question_group.id}/question_banks/create`,class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:i(()=>[z,E]),_:1},8,["href"])]),t("div",K,[a(c,{href:"/teacher/question_groups",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:i(()=>[R,Y]),_:1})])])]),t("div",G,[t("form",{onSubmit:n[1]||(n[1]=f((...s)=>o.handleSearch&&o.handleSearch(...s),["prevent"]))},[t("div",J,[q(t("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":n[0]||(n[0]=s=>o.search=s),placeholder:"masukkan kata kunci dan enter..."},null,512),[[B,o.search]]),Q])],32)])])])]),t("div",W,[t("div",X,[t("div",Z,[t("div",$,[t("h5",null,"Soal "+p(e.question_group.name),1),tt,t("div",st,[t("table",et,[ot,nt,t("tbody",null,[(_(!0),h(w,null,C(e.questions.data,(s,m)=>(_(),h("tr",{key:m},[t("td",at,p(++m+(e.questions.current_page-1)*e.questions.per_page),1),t("td",lt,[t("div",{class:"fw-bold",innerHTML:s.question},null,8,it),rt,t("ol",ct,[t("li",{innerHTML:s.option_1,class:l({"text-success fw-bold":s.answer=="1"})},null,10,dt),t("li",{innerHTML:s.option_2,class:l({"text-success fw-bold":s.answer=="2"})},null,10,_t),t("li",{innerHTML:s.option_3,class:l({"text-success fw-bold":s.answer=="3"})},null,10,ht),t("li",{innerHTML:s.option_4,class:l({"text-success fw-bold":s.answer=="4"})},null,10,ut),t("li",{innerHTML:s.option_5,class:l({"text-success fw-bold":s.answer=="5"})},null,10,bt)])]),t("td",{class:"text-center fw-bold",innerHTML:s.level},null,8,mt),t("td",ft,[a(c,{href:`/teacher/question_groups/${e.question_group.id}/question_banks/${s.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:i(()=>[pt]),_:2},1032,["href"]),t("button",{onClick:f(Lt=>o.destroy(e.question_group.id,s.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},gt,8,wt)])]))),128))])])]),a(x,{links:e.questions.links,align:"end"},null,8,["links"])])])])])])],64)}const St=A(j,[["render",vt]]);export{St as default};
