import{L as a}from"./Student-ea41708d.js";import{H as n,L as o,v as e}from"./app-9fc4214f.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const c={layout:a,components:{Head:n,Link:o},props:{exam_group:Object,grade:Object}},s=e.createElementVNode("title",null,"Hasil Ujian - Aplikasi Ujian Online",-1),r={class:"row justify-content-center my-5"},i={class:"col-md-8"},m={class:"card border-0 shadow"},_={class:"card-body"},u=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-check-circle"}),e.createTextVNode(" Ujian Selesai")],-1),N=e.createElementVNode("hr",null,null,-1),E={class:"table-responsive"},V={class:"table table-centered table-nowrap mb-0 rounded"},h=e.createElementVNode("td",{class:"fw-bold"},"Nim",-1),g=e.createElementVNode("td",{class:"fw-bold"},"Nama Lengkap",-1),f=e.createElementVNode("td",{class:"fw-bold"},"Ujian",-1),b=e.createElementVNode("td",{class:"fw-bold"},"Mata Kuliah",-1),p=e.createElementVNode("td",{class:"fw-bold"},"Dosen",-1),x=e.createElementVNode("td",{class:"fw-bold"},"Mulai Mengerjakan",-1),y=e.createElementVNode("td",{class:"fw-bold"},"Selesai Mengerjakan",-1),w={key:0},S=e.createElementVNode("td",{class:"fw-bold"},"Jumlah Benar",-1),k=e.createElementVNode("td",{class:"fw-bold"},"Nilai",-1);function D(j,v,t,B,H,L){const l=e.resolveComponent("Head");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(l,null,{default:e.withCtx(()=>[s]),_:1}),e.createElementVNode("div",r,[e.createElementVNode("div",i,[e.createElementVNode("div",m,[e.createElementVNode("div",_,[u,N,e.createElementVNode("div",E,[e.createElementVNode("table",V,[e.createElementVNode("thead",null,[e.createElementVNode("tr",null,[h,e.createElementVNode("td",null,e.toDisplayString(t.exam_group.student.nim),1)]),e.createElementVNode("tr",null,[g,e.createElementVNode("td",null,e.toDisplayString(t.exam_group.student.name),1)]),e.createElementVNode("tr",null,[f,e.createElementVNode("td",null,e.toDisplayString(t.exam_group.exam.title),1)]),e.createElementVNode("tr",null,[b,e.createElementVNode("td",null,e.toDisplayString(t.exam_group.exam.lesson.title),1)]),e.createElementVNode("tr",null,[p,e.createElementVNode("td",null,e.toDisplayString(t.exam_group.exam.teacher.name),1)]),e.createElementVNode("tr",null,[x,e.createElementVNode("td",null,e.toDisplayString(t.grade.start_time),1)]),e.createElementVNode("tr",null,[y,e.createElementVNode("td",null,e.toDisplayString(t.grade.end_time),1)])]),t.exam_group.exam.show_answer=="Y"?(e.openBlock(),e.createElementBlock("tbody",w,[e.createElementVNode("tr",null,[S,e.createElementVNode("td",null,e.toDisplayString(t.grade.total_correct),1)]),e.createElementVNode("tr",null,[k,e.createElementVNode("td",null,e.toDisplayString(t.grade.grade),1)])])):e.createCommentVNode("",!0)])])])])])])],64)}const O=d(c,[["render",D]]);export{O as default};
