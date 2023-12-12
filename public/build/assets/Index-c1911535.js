import{L as r}from"./Student-20962f08.js";import{L as i,u as m,v as e}from"./app-5cdaf58f.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const h={layout:r,components:{Link:i},props:{exam_groups:Array,auth:Object,student:Object,last_exam:Object,last_grade:Object,history:Array},setup(){const o=m({foto:null});function l(){o.post("/student/upload-photo"),$("#modal-foto").modal("close")}return{form:o,submit:l}}},u=e.createElementVNode("title",null,"Dashboard Mahasiswa - Aplikasi Ujian Online",-1),E={class:"container-fluid mb-5 mt-4"},b={class:"row"},N={class:"col-md-12"},V={class:"alert alert-success border-0 shadow"},k=e.createTextVNode(" Selamat Datang "),g={class:"row"},x={class:"col-6"},y={class:"card card-body border-0 shadow mb-4"},f=e.createElementVNode("h2",{class:"h5 mb-4 text-center"},"Biodata",-1),v={class:"row"},B={class:"col-6 text-center"},w=["src"],S={key:1,class:"rounded",width:"200",src:"/assets/images/user.jpg",alt:"change avatar"},D=e.createElementVNode("button",{type:"button",class:"btn btn-block btn-primary my-3","data-bs-toggle":"modal","data-bs-target":"#modal-foto"},"Change Photo",-1),C={class:"col-6"},j={style:{"line-height":"40px"}},p=e.createElementVNode("td",null,"NIM",-1),L=e.createElementVNode("td",null,"Nama",-1),T=e.createElementVNode("td",null,"Gender",-1),M={key:0},U={key:1},K={class:"col-md-6"},O={class:"card border-0 shadow"},F={key:0,class:"card-body"},A=e.createElementVNode("h5",{class:"text-center"},"Ujian Terakhir",-1),H=e.createElementVNode("hr",null,null,-1),I={class:"table-responsive"},P={class:"table table-centered table-nowrap mb-0 rounded"},G=e.createElementVNode("td",{class:"fw-bold"},"Nama Ujian",-1),R=e.createElementVNode("td",{class:"fw-bold"},"Dosen",-1),W=e.createElementVNode("td",{class:"fw-bold"},"Mata Kuliah",-1),q=e.createElementVNode("td",{class:"fw-bold"},"Sesi",-1),z=e.createElementVNode("td",{class:"fw-bold"},"Mulai",-1),J=e.createElementVNode("td",{class:"fw-bold"},"Selesai",-1),Q=e.createElementVNode("td",{class:"fw-bold"},"KKM",-1),X={key:0},Y=e.createElementVNode("td",{class:"fw-bold"},"Nilai",-1),Z={key:0},ee={key:0},te={key:0},oe=e.createTextVNode("Kerjakan"),ae={key:1},le=e.createTextVNode("Lanjut Kerjakan"),ne={key:1},se={key:0},de=e.createElementVNode("button",{class:"btn btn-md btn-gray-700 border-0 shadow w-100 mt-2",disabled:""},"Belum Mulai",-1),ce=[de],re={key:1},ie=e.createElementVNode("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Waktu Terlewat",-1),me=[ie],_e={key:1},he=e.createTextVNode("Ulangi Kerjakan "),ue={key:2},Ee=e.createElementVNode("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Sudah Dikerjakan",-1),be=[Ee],Ne={class:"row mt-5"},Ve={class:"col-12"},ke={class:"card border-0 shadow"},ge={class:"card-body"},xe=e.createElementVNode("h5",{class:"text-center"},"History Ujian",-1),ye={class:"table-responsive"},fe={key:0,class:"table table-bordered table-centered table-nowrap mb-0 rounded"},ve=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start"},"Ujian"),e.createElementVNode("th",{class:"border-0"},"Sesi"),e.createElementVNode("th",{class:"border-0 rounded-end"},"Nilai")])],-1),Be=e.createElementVNode("div",{class:"mt-2"},null,-1),we={class:"modal fade",id:"modal-foto",tabindex:"-1",role:"dialog","aria-labelledby":"modal-foto","aria-hidden":"true"},Se={class:"modal-dialog modal-dialog-centered",role:"document"},De={class:"modal-content"},Ce=e.createElementVNode("div",{class:"modal-header"},[e.createElementVNode("h2",{class:"h6 modal-title"},"Upload Foto"),e.createElementVNode("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),je={class:"modal-body"},pe=["value"],Le=e.createElementVNode("div",{class:"modal-footer"},[e.createElementVNode("button",{type:"submit",class:"btn btn-secondary"},"Submit"),e.createElementVNode("button",{type:"button",class:"btn btn-link text-gray ms-auto","data-bs-dismiss":"modal"},"Close")],-1);function Te(o,l,t,n,Me,Ue){const d=e.resolveComponent("Head"),s=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(d,null,{default:e.withCtx(()=>[u]),_:1}),e.createElementVNode("div",E,[e.createElementVNode("div",b,[e.createElementVNode("div",N,[e.createElementVNode("div",V,[k,e.createElementVNode("strong",null,e.toDisplayString(t.auth.student.name),1)])])]),e.createElementVNode("div",g,[e.createElementVNode("div",x,[e.createElementVNode("div",y,[f,e.createElementVNode("div",v,[e.createElementVNode("div",B,[t.student.foto?(e.openBlock(),e.createElementBlock("img",{key:0,class:"rounded",width:"150",src:`/foto/${t.student.foto}`,alt:"change avatar"},null,8,w)):(e.openBlock(),e.createElementBlock("img",S)),D]),e.createElementVNode("div",C,[e.createElementVNode("table",j,[e.createElementVNode("tr",null,[p,e.createElementVNode("td",null,": "+e.toDisplayString(t.student.nim),1)]),e.createElementVNode("tr",null,[L,e.createElementVNode("td",null,": "+e.toDisplayString(t.student.name),1)]),e.createElementVNode("tr",null,[T,t.student.gender==o.L?(e.openBlock(),e.createElementBlock("td",M,": Laki-laki")):(e.openBlock(),e.createElementBlock("td",U,": Perempuan"))])])])])])]),e.createElementVNode("div",K,[e.createElementVNode("div",O,[t.last_exam!=null&&t.last_grade!=null?(e.openBlock(),e.createElementBlock("div",F,[A,H,e.createElementVNode("div",I,[e.createElementVNode("table",P,[e.createElementVNode("thead",null,[e.createElementVNode("tr",null,[G,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam.title),1)]),e.createElementVNode("tr",null,[R,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam.teacher.name),1)]),e.createElementVNode("tr",null,[W,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam.lesson.title),1)]),e.createElementVNode("tr",null,[q,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam_session.title),1)]),e.createElementVNode("tr",null,[z,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam_session.start_time),1)]),e.createElementVNode("tr",null,[J,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam_session.end_time),1)]),e.createElementVNode("tr",null,[Q,e.createElementVNode("td",null,e.toDisplayString(t.last_exam.exam.kkm),1)]),t.last_grade.grade!=null?(e.openBlock(),e.createElementBlock("tr",X,[Y,e.createElementVNode("td",null,e.toDisplayString(t.last_grade.grade),1)])):e.createCommentVNode("",!0)])])]),t.last_grade.end_time==null?(e.openBlock(),e.createElementBlock("div",Z,[o.examTimeRangeChecker(t.last_exam.exam_session.start_time,t.last_exam.exam_session.end_time)?(e.openBlock(),e.createElementBlock("div",ee,[t.last_grade.start_time==null?(e.openBlock(),e.createElementBlock("div",te,[e.createVNode(s,{href:`/student/exam-confirmation/${t.last_exam.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:e.withCtx(()=>[oe]),_:1},8,["href"])])):(e.openBlock(),e.createElementBlock("div",ae,[e.createVNode(s,{href:`/student/exam/${t.last_exam.id}/1`,class:"btn btn-md btn-info border-0 shadow w-100 mt-2"},{default:e.withCtx(()=>[le]),_:1},8,["href"])]))])):(e.openBlock(),e.createElementBlock("div",ne,[o.examTimeStartChecker(t.last_exam.exam_session.start_time)?(e.openBlock(),e.createElementBlock("div",se,ce)):e.createCommentVNode("",!0),o.examTimeEndChecker(t.last_exam.exam_session.end_time)?(e.openBlock(),e.createElementBlock("div",re,me)):e.createCommentVNode("",!0)]))])):t.last_exam.exam.kkm>t.last_grade.grade?(e.openBlock(),e.createElementBlock("div",_e,[e.createVNode(s,{href:`/student/exam-confirmation/${t.last_exam.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:e.withCtx(()=>[he]),_:1},8,["href"])])):(e.openBlock(),e.createElementBlock("div",ue,be))])):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",Ne,[e.createElementVNode("div",Ve,[e.createElementVNode("div",ke,[e.createElementVNode("div",ge,[xe,e.createElementVNode("div",ye,[t.last_exam!=null&&t.last_grade!=null?(e.openBlock(),e.createElementBlock("table",fe,[ve,Be,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.history,(a,c)=>(e.openBlock(),e.createElementBlock("tr",{key:c},[e.createElementVNode("td",null,e.toDisplayString(a.exam.title),1),e.createElementVNode("td",null,e.toDisplayString(a.exam_session.title),1),e.createElementVNode("td",null,e.toDisplayString(a.grade),1)]))),128))])])):e.createCommentVNode("",!0)])])])])])]),e.createElementVNode("div",we,[e.createElementVNode("div",Se,[e.createElementVNode("div",De,[Ce,e.createElementVNode("form",{onSubmit:l[1]||(l[1]=e.withModifiers((...a)=>n.submit&&n.submit(...a),["prevent"]))},[e.createElementVNode("div",je,[e.createElementVNode("input",{type:"file",onInput:l[0]||(l[0]=a=>n.form.foto=a.target.files[0])},null,32),n.form.progress?(e.openBlock(),e.createElementBlock("progress",{key:0,value:n.form.progress.percentage,max:"100"},e.toDisplayString(n.form.progress.percentage)+"% ",9,pe)):e.createCommentVNode("",!0)]),Le],32)])])])],64)}const Ae=_(h,[["render",Te]]);export{Ae as default};
