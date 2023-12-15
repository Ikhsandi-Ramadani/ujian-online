import{L as _}from"./Admin-33a2fba8.js";import{P as u}from"./Pagination-8bed4e6d.js";import{H as b,L as f,v as e,d as c}from"./app-af81db02.js";import{S as i}from"./sweetalert2.all-2c0059b4.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const N={layout:_,components:{Head:b,Link:f,Pagination:u},props:{lessons:Object},setup(){const s=e.ref(new URL(document.location).searchParams.get("q"));return{search:s,handleSearch:()=>{c.Inertia.get("/admin/lessons",{q:s.value})},destroy:t=>{i.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(l=>{l.isConfirmed&&(c.Inertia.delete(`/admin/lessons/${t}`),i.fire({title:"Deleted!",text:"Mata Kuliah Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},V=e.createElementVNode("title",null,"Mata Kuliah - Aplikasi Ujian Online",-1),E={class:"container-fluid mb-5 mt-5"},k={class:"row"},v={class:"col-md-8"},w={class:"row"},g={class:"col-md-3 col-12 mb-2"},y=e.createElementVNode("i",{class:"fa fa-plus-circle"},null,-1),x=e.createTextVNode(" Tambah"),C={class:"col-md-9 col-12 mb-2"},B={class:"input-group"},S=e.createElementVNode("span",{class:"input-group-text border-0 shadow"},[e.createElementVNode("i",{class:"fa fa-search"})],-1),L={class:"row mt-1"},A={class:"col-md-12"},M={class:"card border-0 shadow"},D={class:"card-body"},P={class:"table-responsive"},H={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},T=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),e.createElementVNode("th",{class:"border-0"},"Nama Mata Kuliah"),e.createElementVNode("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),I=e.createElementVNode("div",{class:"mt-2"},null,-1),K={class:"fw-bold text-center"},U={class:"text-center"},j=e.createElementVNode("i",{class:"fa fa-pencil-alt"},null,-1),q=["onClick"],F=e.createElementVNode("i",{class:"fa fa-trash"},null,-1),O=[F];function R(s,n,a,t,l,Y){const m=e.resolveComponent("Head"),d=e.resolveComponent("Link"),h=e.resolveComponent("Pagination");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(m,null,{default:e.withCtx(()=>[V]),_:1}),e.createElementVNode("div",E,[e.createElementVNode("div",k,[e.createElementVNode("div",v,[e.createElementVNode("div",w,[e.createElementVNode("div",g,[e.createVNode(d,{href:"/admin/lessons/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:e.withCtx(()=>[y,x]),_:1})]),e.createElementVNode("div",C,[e.createElementVNode("form",{onSubmit:n[1]||(n[1]=e.withModifiers((...o)=>t.handleSearch&&t.handleSearch(...o),["prevent"]))},[e.createElementVNode("div",B,[e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":n[0]||(n[0]=o=>t.search=o),placeholder:"masukkan kata kunci dan enter..."},null,512),[[e.vModelText,t.search]]),S])],32)])])])]),e.createElementVNode("div",L,[e.createElementVNode("div",A,[e.createElementVNode("div",M,[e.createElementVNode("div",D,[e.createElementVNode("div",P,[e.createElementVNode("table",H,[T,I,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.lessons.data,(o,r)=>(e.openBlock(),e.createElementBlock("tr",{key:r},[e.createElementVNode("td",K,e.toDisplayString(++r+(a.lessons.current_page-1)*a.lessons.per_page),1),e.createElementVNode("td",null,e.toDisplayString(o.title),1),e.createElementVNode("td",U,[e.createVNode(d,{href:`/admin/lessons/${o.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:e.withCtx(()=>[j]),_:2},1032,["href"]),e.createElementVNode("button",{onClick:e.withModifiers(z=>t.destroy(o.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},O,8,q)])]))),128))])])]),e.createVNode(h,{links:a.lessons.links,align:"end"},null,8,["links"])])])])])])],64)}const Z=p(N,[["render",R]]);export{Z as default};
