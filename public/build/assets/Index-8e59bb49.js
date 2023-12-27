import{L as r}from"./Student-2c523eb1.js";import{L as i,u as m,v as e}from"./app-c0cf9767.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const h={layout:r,components:{Link:i},props:{exam_groups:Array,auth:Object,student:Object,last_exam:Object,last_grade:Object,history:Array},setup(){const a=m({foto:null});function l(){a.post("/student/upload-photo"),$("#modal-foto").modal("close")}return{form:a,submit:l}}},u=e.createElementVNode("title",null,"Dashboard Mahasiswa - Aplikasi Ujian Online",-1),E={class:"container-fluid mb-5 mt-4"},N={class:"row"},b={class:"col-md-12"},V={class:"alert alert-success border-0 shadow"},k=e.createTextVNode(" Selamat Datang "),x={class:"row"},g={class:"col-6"},f={class:"card card-body border-0 shadow mb-4"},y=e.createElementVNode("h2",{class:"h5 mb-4 text-center"},"Biodata",-1),v={class:"row"},w={class:"col-6 text-center"},B=["src"],S={key:1,class:"rounded",width:"200",src:"/assets/images/user.jpg",alt:"change avatar"},D={class:"col-6"},C={style:{"line-height":"40px"}},j=e.createElementVNode("td",null,"NIM",-1),p=e.createElementVNode("td",null,"Nama",-1),L=e.createElementVNode("td",null,"Gender",-1),T={key:0},M={key:1},U={class:"col-md-6"},K={class:"card border-0 shadow"},O={key:0,class:"card-body"},F=e.createElementVNode("h5",{class:"text-center"},"Ujian Terakhir",-1),A=e.createElementVNode("hr",null,null,-1),H={class:"table-responsive"},I={class:"table table-centered mb-0 rounded"},G=e.createElementVNode("td",{class:"fw-bold"},"Nama Ujian",-1),P=e.createElementVNode("td",{class:"fw-bold"},"Dosen",-1),R=e.createElementVNode("td",{class:"fw-bold"},"Mata Kuliah",-1),W=e.createElementVNode("td",{class:"fw-bold"},"Sesi",-1),q=e.createElementVNode("td",{class:"fw-bold"},"Mulai",-1),z=e.createElementVNode("td",{class:"fw-bold"},"Selesai",-1),J=e.createElementVNode("td",{class:"fw-bold"},"KKM",-1),Q={key:0},X=e.createElementVNode("td",{class:"fw-bold"},"Nilai",-1),Y={key:0},Z={key:0},ee={key:0},te=e.createTextVNode("Kerjakan"),oe={key:1},ae=e.createTextVNode("Ulangi Kerjakan "),le={key:2},ne=e.createTextVNode("Lanjut Kerjakan"),se={key:1},de={key:0},ce=e.createElementVNode("button",{class:"btn btn-md btn-gray-700 border-0 shadow w-100 mt-2",disabled:""},"Belum Mulai",-1),re=[ce],ie={key:1},me=e.createElementVNode("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Waktu Terlewat",-1),_e=[me],he={key:1},ue=e.createElementVNode("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Sudah Dikerjakan",-1),Ee=[ue],Ne={class:"row mt-5"},be={class:"col-12"},Ve={class:"card border-0 shadow"},ke={class:"card-body"},xe=e.createElementVNode("h5",{class:"text-center"},"History Ujian",-1),ge={class:"table-responsive"},fe={key:0,class:"table table-bordered table-centered table-nowrap mb-0 rounded"},ye=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start"},"Ujian"),e.createElementVNode("th",{class:"border-0"},"Sesi"),e.createElementVNode("th",{class:"border-0"},"Nilai"),e.createElementVNode("th",{class:"border-0 rounded-end"},"Export")])],-1),ve=e.createElementVNode("div",{class:"mt-2"},null,-1),we=e.createElementVNode("i",{class:"fa fa-file"},null,-1),Be={class:"modal fade",id:"modal-foto",tabindex:"-1",role:"dialog","aria-labelledby":"modal-foto","aria-hidden":"true"},Se={class:"modal-dialog modal-dialog-centered",role:"document"},De={class:"modal-content"},Ce=e.createElementVNode("div",{class:"modal-header"},[e.createElementVNode("h2",{class:"h6 modal-title"},"Upload Foto"),e.createElementVNode("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),je={class:"modal-body"},pe=["value"],Le=e.createElementVNode("div",{class:"modal-footer"},[e.createElementVNode("button",{type:"submit",class:"btn btn-secondary"},"Submit"),e.createElementVNode("button",{type:"button",class:"btn btn-link text-gray ms-auto","data-bs-dismiss":"modal"},"Close")],-1);function Te(a,l,t,n,Me,Ue){const d=e.resolveComponent("Head"),s=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(d,null,{default:e.withCtx(()=>[u]),_:1}),e.createElementVNode("div",E,[e.createElementVNode("div",N,[e.createElementVNode("div",b,[e.createElementVNode("div",V,[k,e.createElementVNode("strong",null,e.toDisplayString(t.auth.student.name),1)])])]),e.createElementVNode("div",x,[e.createElementVNode("div",g,[e.createElementVNode("div",f,[y,e.createElementVNode("div",v,[e.createElementVNode("div",w,[t.student.foto?(e.openBlock(),e.createElementBlock("img",{key:0,class:"rounded",width:"150",src:`/foto/${t.student.foto}`,alt:"change avatar"},null,8,B)):(e.openBlock(),e.createElementBlock("img",S))]),e.createElementVNode("div",D,[e.createElementVNode("table",C,[e.createElementVNode("tr",null,[j,e.createElementVNode("td",null,": "+e.toDisplayString(t.student.nim),1)]),e.createElementVNode("tr",null,[p,e.createElementVNode("td",null,": "+e.toDisplayString(t.student.name),1)]),e.createElementVNode("tr",null,[L,t.student.gender=="L"?(e.openBlock(),e.createElementBlock("td",T,": Laki-laki")):(e.openBlock(),e.createElementBlock("td",M,": Perempuan"))])])])])])]),e.createElementVNode("div",U,[e.createElementVNode("div",K,[t.last_exam!=null&&t.last_grade!=null?(e.openBlock(),e.createElementBlock("div",O,[F,A,e.createElementVNode("div",H,[e.createElementVNode("table",I,[e.createElementVNode("thead",null,[e.createElementVNode("tr",null,[G,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam.title),1)]),e.createElementVNode("tr",null,[P,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam.teacher.name),1)]),e.createElementVNode("tr",null,[R,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam.lesson.title),1)]),e.createElementVNode("tr",null,[W,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam_session.title),1)]),e.createElementVNode("tr",null,[q,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam_session.start_time),1)]),e.createElementVNode("tr",null,[z,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam_session.end_time),1)]),e.createElementVNode("tr",null,[J,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam.kkm),1)]),t.last_grade.grade!=null?(e.openBlock(),e.createElementBlock("tr",Q,[X,e.createElementVNode("td",null,e.toDisplayString(t.last_grade.grade),1)])):e.createCommentVNode("",!0)])])]),t.last_grade.end_time==null?(e.openBlock(),e.createElementBlock("div",Y,[a.examTimeRangeChecker(t.last_exam.exam_session.start_time,t.last_exam.exam_session.end_time)?(e.openBlock(),e.createElementBlock("div",Z,[t.last_grade.start_time==null?(e.openBlock(),e.createElementBlock("div",ee,[e.createVNode(s,{href:`/student/exam-confirmation/${t.last_exam.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:e.withCtx(()=>[te]),_:1},8,["href"])])):t.last_exam.exam.kkm>t.last_grade.grade?(e.openBlock(),e.createElementBlock("div",oe,[e.createVNode(s,{href:`/student/exam-confirmation/${t.last_exam.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:e.withCtx(()=>[ae]),_:1},8,["href"])])):(e.openBlock(),e.createElementBlock("div",le,[e.createVNode(s,{href:`/student/exam/${t.last_exam.id}/1`,class:"btn btn-md btn-info border-0 shadow w-100 mt-2"},{default:e.withCtx(()=>[ne]),_:1},8,["href"])]))])):(e.openBlock(),e.createElementBlock("div",se,[a.examTimeStartChecker(t.last_exam.exam_session.start_time)?(e.openBlock(),e.createElementBlock("div",de,re)):e.createCommentVNode("",!0),a.examTimeEndChecker(t.last_exam.exam_session.end_time)?(e.openBlock(),e.createElementBlock("div",ie,_e)):e.createCommentVNode("",!0)]))])):(e.openBlock(),e.createElementBlock("div",he,Ee))])):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",Ne,[e.createElementVNode("div",be,[e.createElementVNode("div",Ve,[e.createElementVNode("div",ke,[xe,e.createElementVNode("div",ge,[t.last_exam!=null&&t.last_grade!=null?(e.openBlock(),e.createElementBlock("table",fe,[ye,ve,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.history,(o,c)=>(e.openBlock(),e.createElementBlock("tr",{key:c},[e.createElementVNode("td",null,e.toDisplayString(o.exam.title),1),e.createElementVNode("td",null,e.toDisplayString(o.exam_session.title),1),e.createElementVNode("td",null,e.toDisplayString(o.grade),1),e.createElementVNode("td",null,[e.createVNode(s,{href:`/student/export/${o.id}`,class:"btn btn-sm btn-primary border-0 shadow me-2",target:"_blank"},{default:e.withCtx(()=>[we]),_:2},1032,["href"])])]))),128))])])):e.createCommentVNode("",!0)])])])])])]),e.createElementVNode("div",Be,[e.createElementVNode("div",Se,[e.createElementVNode("div",De,[Ce,e.createElementVNode("form",{onSubmit:l[1]||(l[1]=e.withModifiers((...o)=>n.submit&&n.submit(...o),["prevent"]))},[e.createElementVNode("div",je,[e.createElementVNode("input",{type:"file",onInput:l[0]||(l[0]=o=>n.form.foto=o.target.files[0])},null,32),n.form.progress?(e.openBlock(),e.createElementBlock("progress",{key:0,value:n.form.progress.percentage,max:"100"},e.toDisplayString(n.form.progress.percentage)+"% ",9,pe)):e.createCommentVNode("",!0)]),Le],32)])])])],64)}const Ae=_(h,[["render",Te]]);export{Ae as default};
