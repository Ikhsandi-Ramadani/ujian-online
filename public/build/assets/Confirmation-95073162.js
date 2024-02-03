import{L as r}from"./Student-45623854.js";import{H as u,L as m,r as c,o as a,c as n,a as d,w as l,b as t,t as s,F as h,j as o}from"./app-924facc6.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const f={layout:r,components:{Head:u,Link:m},props:{exam_group:Object,grade:Object}},x=t("title",null,"Konfirmasi Ujian - Aplikasi Ujian Online",-1),g={class:"row my-5"},w={class:"col-md-6"},k={class:"card border-0 shadow"},v={class:"card-body"},p=t("h5",null,[t("i",{class:"fa fa-file"}),o(" Deskripsi Ujian")],-1),y=t("hr",null,null,-1),j=["innerHTML"],L={class:"col-md-6"},H={class:"card border-0 shadow"},M={class:"card-body"},N=t("h5",null,[t("i",{class:"fa fa-list-ul"}),o(" Detail Peserta")],-1),U=t("hr",null,null,-1),D={class:"table-responsive"},B={class:"table table-centered table-nowrap mb-0 rounded"},C=t("td",{class:"fw-bold"},"Nim",-1),K=t("td",{class:"fw-bold"},"Nama Lengkap",-1),O=t("td",{class:"fw-bold"},"Ujian",-1),S=t("td",{class:"fw-bold"},"Mata Kuliah",-1),T=t("td",{class:"fw-bold"},"Durasi",-1),V={key:0},F=o("Mulai"),A={key:1},E=o("Ulangi Kerjakan "),P={key:2},q=t("button",{class:"btn btn-md btn-primary border-0 shadow w-100 mt-2",disabled:""},"Sudah Mengerjakan",-1),z=[q];function G(I,J,e,Q,R,W){const _=c("Head"),i=c("Link");return a(),n(h,null,[d(_,null,{default:l(()=>[x]),_:1}),t("div",g,[t("div",w,[t("div",k,[t("div",v,[p,y,t("div",{innerHTML:e.exam_group.exam.description},null,8,j)])])]),t("div",L,[t("div",H,[t("div",M,[N,U,t("div",D,[t("table",B,[t("thead",null,[t("tr",null,[C,t("td",null,s(e.exam_group.student.nim),1)]),t("tr",null,[K,t("td",null,s(e.exam_group.student.name),1)]),t("tr",null,[O,t("td",null,s(e.exam_group.exam.title),1)]),t("tr",null,[S,t("td",null,s(e.exam_group.exam.lesson.title),1)]),t("tr",null,[T,t("td",null,s(e.exam_group.exam.duration)+" Menit",1)])])])]),e.grade.end_time==null?(a(),n("div",V,[d(i,{href:`/student/exam-start/${e.exam_group.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:l(()=>[F]),_:1},8,["href"])])):e.exam_group.exam.kkm>e.grade.grade?(a(),n("div",A,[d(i,{href:`/student/exam-start/${e.exam_group.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:l(()=>[E]),_:1},8,["href"])])):(a(),n("div",P,z))])])])])],64)}const $=b(f,[["render",G]]);export{$ as default};
