import{L as _}from"./Teacher-c6e45dcc.js";import{P as u}from"./Pagination-997e30fd.js";import{H as p,L as b,v as e,d as c}from"./app-f0142ba0.js";import{S as i}from"./sweetalert2.all-93086de7.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const N={layout:_,components:{Head:p,Link:b,Pagination:u},props:{question_groups:Object},setup(){const s=e.ref(new URL(document.location).searchParams.get("q"));return{search:s,handleSearch:()=>{c.Inertia.get("/teacher/question_groups",{q:s.value})},destroy:o=>{i.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(l=>{l.isConfirmed&&(c.Inertia.delete(`/teacher/question_groups/${o}`),i.fire({title:"Deleted!",text:"Mata Kuliah Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},V=e.createElementVNode("title",null,"Kelompok Soal - Aplikasi Ujian Online",-1),E={class:"container-fluid mb-5 mt-5"},k={class:"row"},w={class:"col-md-8"},g={class:"row"},v={class:"col-md-3 col-12 mb-2"},y=e.createElementVNode("i",{class:"fa fa-plus-circle"},null,-1),x=e.createTextVNode(" Tambah"),C={class:"col-md-9 col-12 mb-2"},S={class:"input-group"},B=e.createElementVNode("span",{class:"input-group-text border-0 shadow"},[e.createElementVNode("i",{class:"fa fa-search"})],-1),q={class:"row mt-1"},L={class:"col-md-12"},D={class:"card border-0 shadow"},A={class:"card-body"},P={class:"table-responsive"},T={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},H=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),e.createElementVNode("th",{class:"border-0"},"Nama Kelompok Soal"),e.createElementVNode("th",{class:"border-0"},"Jumlah Soal"),e.createElementVNode("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),M=e.createElementVNode("div",{class:"mt-2"},null,-1),I={class:"fw-bold text-center"},K={class:"text-center"},U=e.createElementVNode("i",{class:"fa fa-plus-circle"},null,-1),j=e.createElementVNode("i",{class:"fa fa-pencil-alt"},null,-1),F=["onClick"],O=e.createElementVNode("i",{class:"fa fa-trash"},null,-1),J=[O];function R(s,n,a,o,l,Y){const m=e.resolveComponent("Head"),r=e.resolveComponent("Link"),h=e.resolveComponent("Pagination");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(m,null,{default:e.withCtx(()=>[V]),_:1}),e.createElementVNode("div",E,[e.createElementVNode("div",k,[e.createElementVNode("div",w,[e.createElementVNode("div",g,[e.createElementVNode("div",v,[e.createVNode(r,{href:"/teacher/question_groups/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:e.withCtx(()=>[y,x]),_:1})]),e.createElementVNode("div",C,[e.createElementVNode("form",{onSubmit:n[1]||(n[1]=e.withModifiers((...t)=>o.handleSearch&&o.handleSearch(...t),["prevent"]))},[e.createElementVNode("div",S,[e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":n[0]||(n[0]=t=>o.search=t),placeholder:"masukkan kata kunci dan enter..."},null,512),[[e.vModelText,o.search]]),B])],32)])])])]),e.createElementVNode("div",q,[e.createElementVNode("div",L,[e.createElementVNode("div",D,[e.createElementVNode("div",A,[e.createElementVNode("div",P,[e.createElementVNode("table",T,[H,M,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.question_groups.data,(t,d)=>(e.openBlock(),e.createElementBlock("tr",{key:d},[e.createElementVNode("td",I,e.toDisplayString(++d+(a.question_groups.current_page-1)*a.question_groups.per_page),1),e.createElementVNode("td",null,e.toDisplayString(t.name),1),e.createElementVNode("td",null,e.toDisplayString(t.question_bank.length),1),e.createElementVNode("td",K,[e.createVNode(r,{href:`/teacher/question_groups/${t.id}/question_banks`,class:"btn btn-sm btn-primary border-0 shadow me-2",type:"button"},{default:e.withCtx(()=>[U]),_:2},1032,["href"]),e.createVNode(r,{href:`/teacher/question_groups/${t.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:e.withCtx(()=>[j]),_:2},1032,["href"]),e.createElementVNode("button",{onClick:e.withModifiers(z=>o.destroy(t.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},J,8,F)])]))),128))])])]),e.createVNode(h,{links:a.question_groups.links,align:"end"},null,8,["links"])])])])])])],64)}const $=f(N,[["render",R]]);export{$ as default};
