import{L as _}from"./Teacher-bb170698.js";import{P as m}from"./Pagination-5d0457a5.js";import{H as u,L as b,v as e,d as h}from"./app-d95ad38a.js";import{S as a}from"./sweetalert2.all-21a841c1.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const V={layout:_,components:{Head:u,Link:b,Pagination:m},props:{errors:Object,exam_session:Object,exam:Object},setup(){return{destroy:(o,n)=>{a.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&(h.Inertia.delete(`/teacher/exam_sessions/${o}/enrolle/${n}/destroy`),a.fire({title:"Deleted!",text:"Siswa Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},E=e.createElementVNode("title",null,"Detail Sesi Ujian - Aplikasi Ujian Online",-1),f={class:"container-fluid mb-5 mt-5"},p={class:"row"},w={class:"col-md-12"},x=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),k=e.createTextVNode(" Kembali"),v={class:"card border-0 shadow mb-4"},y={class:"card-body"},g=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-stopwatch"}),e.createTextVNode(" Detail Sesi Ujian")],-1),L=e.createElementVNode("hr",null,null,-1),S={class:"row"},T={class:"col-6"},H={class:"table-responsive"},C={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},M=e.createElementVNode("td",{style:{width:"30%"},class:"fw-bold"},"Nama Ujian",-1),B=e.createElementVNode("td",{class:"fw-bold"},"Mata Kuliah",-1),D=e.createElementVNode("td",{class:"fw-bold"},"Sesi",-1),j={class:"col-6"},q={class:"table-responsive"},z={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},A=e.createElementVNode("td",{class:"fw-bold"},"Mulai",-1),U=e.createElementVNode("td",{class:"fw-bold"},"Selesai",-1),O={class:"card border-0 shadow"},P={class:"card-body"},K=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-question-circle"}),e.createTextVNode(" Soal Ujian")],-1),F=e.createElementVNode("hr",null,null,-1),I={class:"table-responsive mt-3"},Y={class:"table table-bordered table-centered mb-0 rounded"},G=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start"},"No."),e.createElementVNode("th",{class:"border-0"},"Soal"),e.createElementVNode("th",{class:"border-0"},"Level Soal"),e.createElementVNode("th",{class:"border-0"},"Kelompok Soal")])],-1),J=e.createElementVNode("div",{class:"mt-2"},null,-1),Q={class:"fw-bold text-center"},R={class:"text-wrap"},W=["innerHTML"],X=e.createElementVNode("hr",null,null,-1),Z={type:"A"},$=["innerHTML"],ee=["innerHTML"],te=["innerHTML"],ne=["innerHTML"],oe=["innerHTML"],se={class:"text-center fw-bold"},le={class:"text-center fw-bold"};function ae(d,o,n,s,de,ce){const c=e.resolveComponent("Head"),r=e.resolveComponent("Link"),i=e.resolveComponent("Pagination");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(c,null,{default:e.withCtx(()=>[E]),_:1}),e.createElementVNode("div",f,[e.createElementVNode("div",p,[e.createElementVNode("div",w,[e.createVNode(r,{href:"/teacher/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[x,k]),_:1}),e.createElementVNode("div",v,[e.createElementVNode("div",y,[g,L,e.createElementVNode("div",S,[e.createElementVNode("div",T,[e.createElementVNode("div",H,[e.createElementVNode("table",C,[e.createElementVNode("tbody",null,[e.createElementVNode("tr",null,[M,e.createElementVNode("td",null,e.toDisplayString(n.exam_session.exam.title),1)]),e.createElementVNode("tr",null,[B,e.createElementVNode("td",null,e.toDisplayString(n.exam_session.exam.lesson.title),1)]),e.createElementVNode("tr",null,[D,e.createElementVNode("td",null,e.toDisplayString(n.exam_session.title),1)])])])])]),e.createElementVNode("div",j,[e.createElementVNode("div",q,[e.createElementVNode("table",z,[e.createElementVNode("tbody",null,[e.createElementVNode("tr",null,[A,e.createElementVNode("td",null,e.toDisplayString(n.exam_session.start_time),1)]),e.createElementVNode("tr",null,[U,e.createElementVNode("td",null,e.toDisplayString(n.exam_session.end_time),1)])])])])])])])]),e.createElementVNode("div",O,[e.createElementVNode("div",P,[K,F,e.createElementVNode("div",I,[e.createElementVNode("table",Y,[G,J,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.exam.questions.data,(t,l)=>(e.openBlock(),e.createElementBlock("tr",{key:l},[e.createElementVNode("td",Q,e.toDisplayString(++l+(n.exam.questions.current_page-1)*n.exam.questions.per_page),1),e.createElementVNode("td",R,[e.createElementVNode("div",{class:"fw-bold",innerHTML:t.question_bank.question},null,8,W),X,e.createElementVNode("ol",Z,[e.createElementVNode("li",{innerHTML:t.question_bank.option_1,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="1"})},null,10,$),e.createElementVNode("li",{innerHTML:t.question_bank.option_2,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="2"})},null,10,ee),e.createElementVNode("li",{innerHTML:t.question_bank.option_3,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="3"})},null,10,te),e.createElementVNode("li",{innerHTML:t.question_bank.option_4,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="4"})},null,10,ne),e.createElementVNode("li",{innerHTML:t.question_bank.option_5,class:e.normalizeClass({"text-success fw-bold":t.question_bank.answer=="5"})},null,10,oe)])]),e.createElementVNode("td",se,e.toDisplayString(t.question_bank.level),1),e.createElementVNode("td",le,e.toDisplayString(t.question_bank.question_group.name),1)]))),128))])])]),e.createVNode(i,{links:n.exam.questions.links,align:"end"},null,8,["links"])])])])])])],64)}const be=N(V,[["render",ae]]);export{be as default};
