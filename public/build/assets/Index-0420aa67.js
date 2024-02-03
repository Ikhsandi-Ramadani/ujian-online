import{L as x}from"./Student-45623854.js";import{L as g,r as m,o as s,c as o,a,w as i,b as e,F as u,l as k,t as n,h as l,j as _}from"./app-924facc6.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const w={layout:x,components:{Link:g},props:{exam_groups:Array,auth:Object}},f=e("title",null,"Ujian Mahasiswa - Aplikasi Ujian Online",-1),v={class:"container-fluid mb-5 mt-5"},y={key:0,class:"row"},j={class:"card border-0 shadow"},L={class:"card-body"},T=e("hr",null,null,-1),C={class:"table-responsive"},K={class:"table table-centered table-nowrap mb-0 rounded"},S=e("td",{class:"fw-bold"},"Dosen",-1),M=e("td",{class:"fw-bold"},"Mata Kuliah",-1),N=e("td",{class:"fw-bold"},"Sesi",-1),$=e("td",{class:"fw-bold"},"Mulai",-1),B=e("td",{class:"fw-bold"},"Selesai",-1),V=e("td",{class:"fw-bold"},"KKM",-1),D={key:0},E=e("td",{class:"fw-bold"},"Nilai",-1),U={key:0},A={key:0},F={key:0},H=_("Kerjakan"),O={key:1},W=_("Lanjut Kerjakan"),I={key:1},R={key:0},q=e("button",{class:"btn btn-md btn-gray-700 border-0 shadow w-100 mt-2",disabled:""},"Belum Mulai",-1),z=[q],G={key:1},J=e("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Waktu Terlewat",-1),P=[J],Q={key:1},X={key:0},Y=e("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Waktu Terlewat",-1),Z=[Y],ee={key:1},te=_("Ulangi Kerjakan "),se={key:2},oe=e("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Sudah Dikerjakan",-1),ne=[oe],de={key:1,class:"row"},ae=e("div",{class:"col-md-12"},[e("div",{class:"alert alert-danger border-0 shadow"},[e("i",{class:"fa fa-info-circle"}),_(" Tidak ada ujian yang tersedia ")])],-1),ie=[ae];function _e(d,re,c,le,ce,me){const h=m("Head"),r=m("Link");return s(),o(u,null,[a(h,null,{default:i(()=>[f]),_:1}),e("div",v,[c.exam_groups.length>0?(s(),o("div",y,[(s(!0),o(u,null,k(c.exam_groups,(t,b)=>(s(),o("div",{class:"col-md-6 mb-4",key:b},[e("div",j,[e("div",L,[e("h5",null,n(t.exam_group.exam.title),1),T,e("div",C,[e("table",K,[e("thead",null,[e("tr",null,[S,e("td",null,n(t.exam_group.exam.teacher.name),1)]),e("tr",null,[M,e("td",null,n(t.exam_group.exam.lesson.title),1)]),e("tr",null,[N,e("td",null,n(t.exam_group.exam_session.title),1)]),e("tr",null,[$,e("td",null,n(t.exam_group.exam_session.start_time),1)]),e("tr",null,[B,e("td",null,n(t.exam_group.exam_session.end_time),1)]),e("tr",null,[V,e("td",null,n(t.exam_group.exam.kkm),1)]),t.grade.grade!=null?(s(),o("tr",D,[E,e("td",null,n(t.grade.grade),1)])):l("",!0)])])]),t.grade.end_time==null?(s(),o("div",U,[d.examTimeRangeChecker(t.exam_group.exam_session.start_time,t.exam_group.exam_session.end_time)?(s(),o("div",A,[t.grade.start_time==null?(s(),o("div",F,[a(r,{href:`/student/exam-confirmation/${t.exam_group.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:i(()=>[H]),_:2},1032,["href"])])):(s(),o("div",O,[a(r,{href:`/student/exam/${t.exam_group.id}/1`,class:"btn btn-md btn-info border-0 shadow w-100 mt-2"},{default:i(()=>[W]),_:2},1032,["href"])]))])):(s(),o("div",I,[d.examTimeStartChecker(t.exam_group.exam_session.start_time)?(s(),o("div",R,z)):l("",!0),d.examTimeEndChecker(t.exam_group.exam_session.end_time)?(s(),o("div",G,P)):l("",!0)]))])):t.exam_group.exam.kkm>t.grade.grade?(s(),o("div",Q,[d.examTimeEndChecker(t.exam_group.exam_session.end_time)?(s(),o("div",X,Z)):(s(),o("div",ee,[a(r,{href:`/student/exam-confirmation/${t.exam_group.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:i(()=>[te]),_:2},1032,["href"])]))])):(s(),o("div",se,ne))])])]))),128))])):(s(),o("div",de,ie))])],64)}const xe=p(w,[["render",_e]]);export{xe as default};
