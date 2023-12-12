import{L as x}from"./Student-ac337344.js";import{L as g,r as m,o as s,c as o,a,w as d,b as e,F as u,l as p,t as n,h as _,j as i}from"./app-d582b5b9.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const f={layout:x,components:{Link:g},props:{exam_groups:Array,auth:Object}},w=e("title",null,"Ujian Mahasiswa - Aplikasi Ujian Online",-1),v={class:"container-fluid mb-5 mt-5"},y={key:0,class:"row"},j={class:"card border-0 shadow"},L={class:"card-body"},C=e("hr",null,null,-1),K={class:"table-responsive"},S={class:"table table-centered table-nowrap mb-0 rounded"},T=e("td",{class:"fw-bold"},"Dosen",-1),M=e("td",{class:"fw-bold"},"Mata Kuliah",-1),N=e("td",{class:"fw-bold"},"Sesi",-1),$=e("td",{class:"fw-bold"},"Mulai",-1),B=e("td",{class:"fw-bold"},"Selesai",-1),V=e("td",{class:"fw-bold"},"KKM",-1),D={key:0},U=e("td",{class:"fw-bold"},"Nilai",-1),A={key:0},E={key:0},F={key:0},H=i("Kerjakan"),O={key:1},I=i("Lanjut Kerjakan"),R={key:1},W={key:0},q=e("button",{class:"btn btn-md btn-gray-700 border-0 shadow w-100 mt-2",disabled:""},"Belum Mulai",-1),z=[q],G={key:1},J=e("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Waktu Terlewat",-1),P=[J],Q={key:1},X=i("Ulangi Kerjakan "),Y={key:2},Z=e("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Sudah Dikerjakan",-1),ee=[Z],te={key:1,class:"row"},se=e("div",{class:"col-md-12"},[e("div",{class:"alert alert-danger border-0 shadow"},[e("i",{class:"fa fa-info-circle"}),i(" Tidak ada ujian yang tersedia ")])],-1),oe=[se];function ne(r,ae,c,de,ie,re){const h=m("Head"),l=m("Link");return s(),o(u,null,[a(h,null,{default:d(()=>[w]),_:1}),e("div",v,[c.exam_groups.length>0?(s(),o("div",y,[(s(!0),o(u,null,p(c.exam_groups,(t,b)=>(s(),o("div",{class:"col-md-6",key:b},[e("div",j,[e("div",L,[e("h5",null,n(t.exam_group.exam.title),1),C,e("div",K,[e("table",S,[e("thead",null,[e("tr",null,[T,e("td",null,n(t.exam_group.exam.teacher.name),1)]),e("tr",null,[M,e("td",null,n(t.exam_group.exam.lesson.title),1)]),e("tr",null,[N,e("td",null,n(t.exam_group.exam_session.title),1)]),e("tr",null,[$,e("td",null,n(t.exam_group.exam_session.start_time),1)]),e("tr",null,[B,e("td",null,n(t.exam_group.exam_session.end_time),1)]),e("tr",null,[V,e("td",null,n(t.exam_group.exam.kkm),1)]),t.grade.grade!=null?(s(),o("tr",D,[U,e("td",null,n(t.grade.grade),1)])):_("",!0)])])]),t.grade.end_time==null?(s(),o("div",A,[r.examTimeRangeChecker(t.exam_group.exam_session.start_time,t.exam_group.exam_session.end_time)?(s(),o("div",E,[t.grade.start_time==null?(s(),o("div",F,[a(l,{href:`/student/exam-confirmation/${t.exam_group.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:d(()=>[H]),_:2},1032,["href"])])):(s(),o("div",O,[a(l,{href:`/student/exam/${t.exam_group.id}/1`,class:"btn btn-md btn-info border-0 shadow w-100 mt-2"},{default:d(()=>[I]),_:2},1032,["href"])]))])):(s(),o("div",R,[r.examTimeStartChecker(t.exam_group.exam_session.start_time)?(s(),o("div",W,z)):_("",!0),r.examTimeEndChecker(t.exam_group.exam_session.end_time)?(s(),o("div",G,P)):_("",!0)]))])):t.exam_group.exam.kkm>t.grade.grade?(s(),o("div",Q,[a(l,{href:`/student/exam-confirmation/${t.exam_group.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:d(()=>[X]),_:2},1032,["href"])])):(s(),o("div",Y,ee))])])]))),128))])):(s(),o("div",te,oe))])],64)}const me=k(f,[["render",ne]]);export{me as default};
