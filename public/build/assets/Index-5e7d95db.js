import{L as g}from"./Student-faca6c28.js";import{L as k,u as v,r as u,o as e,c as a,a as c,w as r,b as t,t as o,h as _,F as b,l as y,f as w,j as m}from"./app-3904d89a.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const L={layout:g,components:{Link:k},props:{exam_groups:Array,auth:Object,student:Object,last_exam:Object,last_grade:Object,history:Array},setup(){const l=v({foto:null});function n(){l.post("/student/upload-photo"),$("#modal-foto").modal("close")}return{form:l,submit:n}}},S=t("title",null,"Dashboard Mahasiswa - Aplikasi Ujian Online",-1),N={class:"container-fluid mb-5 mt-4"},C={class:"row"},M={class:"col-md-12"},U={class:"alert alert-success border-0 shadow"},K=m(" Selamat Datang "),T={class:"row"},B={class:"col-lg-6 col-sm-12"},D={class:"card card-body border-0 shadow mb-4"},O=t("h2",{class:"h5 mb-4 text-center"},"Biodata",-1),F={class:"row"},V={class:"col-6 text-center"},A=["src"],E={key:1,class:"rounded",width:"200",src:"/assets/images/user.jpg",alt:"change avatar"},H={class:"col-6"},I={style:{"line-height":"40px"}},G=t("td",null,"NIM",-1),P=t("td",null,"Nama",-1),R=t("td",null,"Gender",-1),W={key:0},q={key:1},z={class:"col-md-6"},J={class:"card border-0 shadow"},Q={key:0,class:"card-body"},X=t("h5",{class:"text-center"},"Ujian Terakhir",-1),Y=t("hr",null,null,-1),Z={class:"table-responsive"},p={class:"table table-centered mb-0 rounded"},tt=t("td",{class:"fw-bold"},"Nama Ujian",-1),st=t("td",{class:"fw-bold"},"Dosen",-1),et=t("td",{class:"fw-bold"},"Mata Kuliah",-1),at=t("td",{class:"fw-bold"},"Sesi",-1),ot=t("td",{class:"fw-bold"},"Mulai",-1),dt=t("td",{class:"fw-bold"},"Selesai",-1),lt=t("td",{class:"fw-bold"},"KKM",-1),nt={key:0},it=t("td",{class:"fw-bold"},"Nilai",-1),_t={key:0},ct={key:0},rt={key:0},mt=m("Kerjakan"),ht={key:1},ut=m("Ulangi Kerjakan "),bt={key:2},ft=m("Lanjut Kerjakan"),xt={key:1},gt={key:0},kt=t("button",{class:"btn btn-md btn-gray-700 border-0 shadow w-100 mt-2",disabled:""},"Belum Mulai",-1),vt=[kt],yt={key:1},wt=t("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Waktu Terlewat",-1),jt=[wt],Lt={key:1},St=t("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""},"Sudah Dikerjakan",-1),Nt=[St],Ct={class:"row mt-5"},Mt={class:"col-12"},Ut={class:"card border-0 shadow"},Kt={class:"card-body"},Tt=t("h5",{class:"text-center"},"History Ujian",-1),Bt={class:"table-responsive"},Dt={key:0,class:"table table-bordered table-centered table-nowrap mb-0 rounded"},Ot=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start"},"Ujian"),t("th",{class:"border-0"},"Sesi"),t("th",{class:"border-0"},"Nilai"),t("th",{class:"border-0 rounded-end"},"Export")])],-1),Ft=t("div",{class:"mt-2"},null,-1),Vt=["href"],At=t("i",{class:"fa fa-file"},null,-1),Et=[At],Ht={class:"modal fade",id:"modal-foto",tabindex:"-1",role:"dialog","aria-labelledby":"modal-foto","aria-hidden":"true"},It={class:"modal-dialog modal-dialog-centered",role:"document"},Gt={class:"modal-content"},Pt=t("div",{class:"modal-header"},[t("h2",{class:"h6 modal-title"},"Upload Foto"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Rt={class:"modal-body"},Wt=["value"],qt=t("div",{class:"modal-footer"},[t("button",{type:"submit",class:"btn btn-secondary"},"Submit"),t("button",{type:"button",class:"btn btn-link text-gray ms-auto","data-bs-dismiss":"modal"},"Close")],-1);function zt(l,n,s,i,Jt,Qt){const f=u("Head"),h=u("Link");return e(),a(b,null,[c(f,null,{default:r(()=>[S]),_:1}),t("div",N,[t("div",C,[t("div",M,[t("div",U,[K,t("strong",null,o(s.auth.student.name),1)])])]),t("div",T,[t("div",B,[t("div",D,[O,t("div",F,[t("div",V,[s.student.foto?(e(),a("img",{key:0,class:"rounded",width:"150",src:`/foto/${s.student.foto}`,alt:"change avatar"},null,8,A)):(e(),a("img",E))]),t("div",H,[t("table",I,[t("tr",null,[G,t("td",null,": "+o(s.student.nim),1)]),t("tr",null,[P,t("td",null,": "+o(s.student.name),1)]),t("tr",null,[R,s.student.gender=="L"?(e(),a("td",W,": Laki-laki")):(e(),a("td",q,": Perempuan"))])])])])])]),t("div",z,[t("div",J,[s.last_exam!=null&&s.last_grade!=null?(e(),a("div",Q,[X,Y,t("div",Z,[t("table",p,[t("thead",null,[t("tr",null,[tt,t("td",null,o(s.last_exam.exam.title),1)]),t("tr",null,[st,t("td",null,o(s.last_exam.exam.teacher.name),1)]),t("tr",null,[et,t("td",null,o(s.last_exam.exam.lesson.title),1)]),t("tr",null,[at,t("td",null,o(s.last_exam.exam_session.title),1)]),t("tr",null,[ot,t("td",null,o(s.last_exam.exam_session.start_time),1)]),t("tr",null,[dt,t("td",null,o(s.last_exam.exam_session.end_time),1)]),t("tr",null,[lt,t("td",null,o(s.last_exam.exam.kkm),1)]),s.last_grade.grade!=null?(e(),a("tr",nt,[it,t("td",null,o(s.last_grade.grade),1)])):_("",!0)])])]),s.last_grade.end_time==null?(e(),a("div",_t,[l.examTimeRangeChecker(s.last_exam.exam_session.start_time,s.last_exam.exam_session.end_time)?(e(),a("div",ct,[s.last_grade.start_time==null?(e(),a("div",rt,[c(h,{href:`/student/exam-confirmation/${s.last_exam.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:r(()=>[mt]),_:1},8,["href"])])):s.last_exam.exam.kkm>s.last_grade.grade?(e(),a("div",ht,[c(h,{href:`/student/exam-confirmation/${s.last_exam.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:r(()=>[ut]),_:1},8,["href"])])):(e(),a("div",bt,[c(h,{href:`/student/exam/${s.last_exam.id}/1`,class:"btn btn-md btn-info border-0 shadow w-100 mt-2"},{default:r(()=>[ft]),_:1},8,["href"])]))])):(e(),a("div",xt,[l.examTimeStartChecker(s.last_exam.exam_session.start_time)?(e(),a("div",gt,vt)):_("",!0),l.examTimeEndChecker(s.last_exam.exam_session.end_time)?(e(),a("div",yt,jt)):_("",!0)]))])):(e(),a("div",Lt,Nt))])):_("",!0)])])]),t("div",Ct,[t("div",Mt,[t("div",Ut,[t("div",Kt,[Tt,t("div",Bt,[s.last_exam!=null&&s.last_grade!=null?(e(),a("table",Dt,[Ot,Ft,t("tbody",null,[(e(!0),a(b,null,y(s.history,(d,x)=>(e(),a("tr",{key:x},[t("td",null,o(d.exam.title),1),t("td",null,o(d.exam_session.title),1),t("td",null,o(d.grade),1),t("td",null,[t("a",{href:`/student/export/${d.id}`,class:"btn btn-sm btn-primary border-0 shadow me-2",target:"_blank"},Et,8,Vt)])]))),128))])])):_("",!0)])])])])])]),t("div",Ht,[t("div",It,[t("div",Gt,[Pt,t("form",{onSubmit:n[1]||(n[1]=w((...d)=>i.submit&&i.submit(...d),["prevent"]))},[t("div",Rt,[t("input",{type:"file",onInput:n[0]||(n[0]=d=>i.form.foto=d.target.files[0])},null,32),i.form.progress?(e(),a("progress",{key:0,value:i.form.progress.percentage,max:"100"},o(i.form.progress.percentage)+"% ",9,Wt)):_("",!0)]),qt],32)])])])],64)}const pt=j(L,[["render",zt]]);export{pt as default};