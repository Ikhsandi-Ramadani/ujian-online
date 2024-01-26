import{L as _}from"./Admin-20264f6d.js";import{P as u}from"./Pagination-7d7235c7.js";import{H as N,L as b,v as e,d as l}from"./app-861b6280.js";import{S as i}from"./sweetalert2.all-33192287.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const p={layout:_,components:{Head:N,Link:b,Pagination:u},props:{teachers:Object},setup(){const a=e.ref(new URL(document.location).searchParams.get("q"));return{search:a,handleSearch:()=>{l.Inertia.get("/admin/teachers",{q:a.value})},destroy:o=>{i.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(r=>{r.isConfirmed&&(l.Inertia.delete(`/admin/teachers/${o}`),i.fire({title:"Deleted!",text:"Dosen Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},E=e.createElementVNode("title",null,"Dosen - Aplikasi Ujian Online",-1),f={class:"container-fluid mb-5 mt-5"},w={class:"row"},v={class:"col-md-8"},k={class:"row"},g={class:"col-md-5 col-12 mb-2"},x={class:"row"},y={class:"col-md-6 col-12 mb-2"},C=e.createElementVNode("i",{class:"fa fa-plus-circle"},null,-1),B=e.createTextVNode(" Tambah"),S={class:"col-md-6 col-12 mb-2"},D=e.createElementVNode("i",{class:"fa fa-file-excel"},null,-1),L=e.createTextVNode(" Import"),A={class:"col-md-7 col-12 mb-2"},P={class:"input-group"},T=e.createElementVNode("span",{class:"input-group-text border-0 shadow"},[e.createElementVNode("i",{class:"fa fa-search"})],-1),H={class:"row mt-1"},I={class:"col-md-12"},M={class:"card border-0 shadow"},U={class:"card-body"},j={class:"table-responsive"},q={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},F=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),e.createElementVNode("th",{class:"border-0"},"nip"),e.createElementVNode("th",{class:"border-0"},"Nama"),e.createElementVNode("th",{class:"border-0"},"Jenis Kelamin"),e.createElementVNode("th",{class:"border-0"},"Password"),e.createElementVNode("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),O=e.createElementVNode("div",{class:"mt-2"},null,-1),J={class:"fw-bold text-center"},K={class:"text-center"},R={class:"text-center"},Y=e.createElementVNode("i",{class:"fa fa-pencil-alt"},null,-1),z=["onClick"],G=e.createElementVNode("i",{class:"fa fa-trash"},null,-1),Q=[G];function W(a,n,s,o,r,X){const m=e.resolveComponent("Head"),d=e.resolveComponent("Link"),h=e.resolveComponent("Pagination");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(m,null,{default:e.withCtx(()=>[E]),_:1}),e.createElementVNode("div",f,[e.createElementVNode("div",w,[e.createElementVNode("div",v,[e.createElementVNode("div",k,[e.createElementVNode("div",g,[e.createElementVNode("div",x,[e.createElementVNode("div",y,[e.createVNode(d,{href:"/admin/teachers/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:e.withCtx(()=>[C,B]),_:1})]),e.createElementVNode("div",S,[e.createVNode(d,{href:"/admin/teachers/import",class:"btn btn-md btn-success border-0 shadow w-100 text-white",type:"button"},{default:e.withCtx(()=>[D,L]),_:1})])])]),e.createElementVNode("div",A,[e.createElementVNode("form",{onSubmit:n[1]||(n[1]=e.withModifiers((...t)=>o.handleSearch&&o.handleSearch(...t),["prevent"]))},[e.createElementVNode("div",P,[e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":n[0]||(n[0]=t=>o.search=t),placeholder:"masukkan kata kunci dan enter..."},null,512),[[e.vModelText,o.search]]),T])],32)])])])]),e.createElementVNode("div",H,[e.createElementVNode("div",I,[e.createElementVNode("div",M,[e.createElementVNode("div",U,[e.createElementVNode("div",j,[e.createElementVNode("table",q,[F,O,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.teachers.data,(t,c)=>(e.openBlock(),e.createElementBlock("tr",{key:c},[e.createElementVNode("td",J,e.toDisplayString(++c+(s.teachers.current_page-1)*s.teachers.per_page),1),e.createElementVNode("td",null,e.toDisplayString(t.nip),1),e.createElementVNode("td",null,e.toDisplayString(t.name),1),e.createElementVNode("td",K,e.toDisplayString(t.gender),1),e.createElementVNode("td",null,e.toDisplayString(t.password),1),e.createElementVNode("td",R,[e.createVNode(d,{href:`/admin/teachers/${t.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:e.withCtx(()=>[Y]),_:2},1032,["href"]),e.createElementVNode("button",{onClick:e.withModifiers(Z=>o.destroy(t.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},Q,8,z)])]))),128))])])]),e.createVNode(h,{links:s.teachers.links,align:"end"},null,8,["links"])])])])])])],64)}const se=V(p,[["render",W]]);export{se as default};
