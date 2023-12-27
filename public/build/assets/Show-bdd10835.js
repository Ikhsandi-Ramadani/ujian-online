import{L as m}from"./Teacher-df977335.js";import{P as _}from"./Pagination-c9ccca83.js";import{H as h,L as b,v as e,d as u}from"./app-c0cf9767.js";import{S as d}from"./sweetalert2.all-07a6e669.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const V={layout:m,components:{Head:h,Link:b,Pagination:_},props:{errors:Object,exam:Object},setup(){return{destroy:(a,n)=>{d.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(o=>{o.isConfirmed&&(u.Inertia.delete(`/teacher/exams/${a}/enrolle/${n}/destroy`),d.fire({title:"Deleted!",text:"Soal Ujian Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},E=e.createElementVNode("title",null,"Detail Ujian - Aplikasi Ujian Online",-1),f={class:"container-fluid mb-5 mt-5"},p={class:"row"},w={class:"col-md-12"},x=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),k=e.createTextVNode(" Kembali"),v={class:"card border-0 shadow mb-4"},y={class:"card-body"},g=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-edit"}),e.createTextVNode(" Detail Ujian")],-1),L=e.createElementVNode("hr",null,null,-1),T={class:"row"},C={class:"col-6"},S={class:"table-responsive"},H={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},M=e.createElementVNode("td",{style:{width:"30%"},class:"fw-bold"},"Nama Ujian",-1),B=e.createElementVNode("td",{class:"fw-bold"},"Mata Pelajaran",-1),D={class:"col-6"},j={class:"table-responsive"},q={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},A=e.createElementVNode("td",{class:"fw-bold"},"Jumlah Soal",-1),U=e.createElementVNode("td",{class:"fw-bold"},"Durasi (Menit)",-1),z={class:"card border-0 shadow"},P={class:"card-body"},O=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-question-circle"}),e.createTextVNode(" Soal Ujian")],-1),F=e.createElementVNode("hr",null,null,-1),K=e.createElementVNode("i",{class:"fa fa-plus-circle"},null,-1),I=e.createTextVNode(" Tambah Soal"),J={class:"table-responsive mt-3"},Y={class:"table table-bordered text-wrap table-centered mb-0 rounded"},G=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start"},"No."),e.createElementVNode("th",{class:"border-0"},"Soal"),e.createElementVNode("th",{class:"border-0"},"Level Soal"),e.createElementVNode("th",{class:"border-0"},"Kelompok Soal"),e.createElementVNode("th",{class:"border-0 rounded-end"},"Aksi")])],-1),Q=e.createElementVNode("div",{class:"mt-2"},null,-1),R={class:"fw-bold text-center"},W={class:"text-wrap"},X=["innerHTML"],Z=e.createElementVNode("hr",null,null,-1),$={type:"A"},ee=["innerHTML"],te=["innerHTML"],ne=["innerHTML"],oe=["innerHTML"],ae=["innerHTML"],le={class:"text-center fw-bold"},se={class:"text-center fw-bold"},de={class:"text-center"},re=["onClick"],ce=e.createElementVNode("i",{class:"fa fa-trash"},null,-1),ie=[ce];function me(r,a,n,o,_e,he){const c=e.resolveComponent("Head"),l=e.resolveComponent("Link"),i=e.resolveComponent("Pagination");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(c,null,{default:e.withCtx(()=>[E]),_:1}),e.createElementVNode("div",f,[e.createElementVNode("div",p,[e.createElementVNode("div",w,[e.createVNode(l,{href:"/teacher/exams",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[x,k]),_:1}),e.createElementVNode("div",v,[e.createElementVNode("div",y,[g,L,e.createElementVNode("div",T,[e.createElementVNode("div",C,[e.createElementVNode("div",S,[e.createElementVNode("table",H,[e.createElementVNode("tbody",null,[e.createElementVNode("tr",null,[M,e.createElementVNode("td",null,e.toDisplayString(n.exam.title),1)]),e.createElementVNode("tr",null,[B,e.createElementVNode("td",null,e.toDisplayString(n.exam.lesson.title),1)])])])])]),e.createElementVNode("div",D,[e.createElementVNode("div",j,[e.createElementVNode("table",q,[e.createElementVNode("tbody",null,[e.createElementVNode("tr",null,[A,e.createElementVNode("td",null,e.toDisplayString(n.exam.questions.total),1)]),e.createElementVNode("tr",null,[U,e.createElementVNode("td",null,e.toDisplayString(n.exam.duration)+" Menit",1)])])])])])])])]),e.createElementVNode("div",z,[e.createElementVNode("div",P,[O,F,e.createVNode(l,{href:`/teacher/exams/${n.exam.id}/enrolle/create`,class:"btn btn-md btn-primary border-0 shadow me-2",type:"button"},{default:e.withCtx(()=>[K,I]),_:1},8,["href"]),e.createElementVNode("div",J,[e.createElementVNode("table",Y,[G,Q,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.exam.questions.data,(t,s)=>(e.openBlock(),e.createElementBlock("tr",{key:s},[e.createElementVNode("td",R,e.toDisplayString(++s+(n.exam.questions.current_page-1)*n.exam.questions.per_page),1),e.createElementVNode("td",W,[e.createElementVNode("div",{class:"fw-bold",innerHTML:t.question_bank.question},null,8,X),Z,e.createElementVNode("ol",$,[e.createElementVNode("li",{innerHTML:t.question_bank.option_1,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="1"})},null,10,ee),e.createElementVNode("li",{innerHTML:t.question_bank.option_2,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="2"})},null,10,te),e.createElementVNode("li",{innerHTML:t.question_bank.option_3,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="3"})},null,10,ne),e.createElementVNode("li",{innerHTML:t.question_bank.option_4,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="4"})},null,10,oe),e.createElementVNode("li",{innerHTML:t.question_bank.option_5,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="5"})},null,10,ae)])]),e.createElementVNode("td",le,e.toDisplayString(t.question_bank.level),1),e.createElementVNode("td",se,e.toDisplayString(t.question_bank.question_group.name),1),e.createElementVNode("td",de,[e.createElementVNode("button",{onClick:e.withModifiers(be=>o.destroy(n.exam.id,t.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},ie,8,re)])]))),128))])])]),e.createVNode(i,{links:n.exam.questions.links,align:"end"},null,8,["links"])])])])])])],64)}const pe=N(V,[["render",me]]);export{pe as default};
