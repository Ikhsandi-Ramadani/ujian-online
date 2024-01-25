import{L as y}from"./Teacher-443ba9fc.js";import{H as S,L as p,e as k,r as _,o as n,c as i,a as m,w as b,b as e,t as a,f as g,g as h,z as u,F as f,l as j,h as C,i as L,j as r}from"./app-d0c346f8.js";import{S as N}from"./sweetalert2.all-331f1a32.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const V={layout:y,components:{Head:S,Link:p},props:{errors:Object,exam:Object,exam_session:Object,students:Array},setup(d){const t=k({exam_id:d.exam.id,student_id:[],allSelected:!1});return{form:t,selectAll:()=>{t.allSelected?t.student_id=d.students.map(c=>c.id):t.student_id=[]},submit:()=>{L.Inertia.post(`/teacher/exam_sessions/${d.exam_session.id}/enrolle/store`,{exam_id:t.exam_id,student_id:t.student_id},{onSuccess:()=>{N.fire({title:"Success!",text:"Enrolle Siswa Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},B=e("title",null,"Enrolle Siswa - Aplikasi Ujian Online",-1),M={class:"container-fluid mb-5 mt-5"},U={class:"row"},D={class:"col-md-12"},E=e("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),H=r(" Kembali"),O={class:"card border-0 shadow mb-4"},K={class:"card-body"},F=e("h5",null,[e("i",{class:"fa fa-stopwatch"}),r(" Detail Sesi Ujian")],-1),T=e("hr",null,null,-1),z={class:"row"},I={class:"col-6"},J={class:"table-responsive"},R={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},q=e("td",{style:{width:"30%"},class:"fw-bold"},"Nama Ujian",-1),G=e("td",{class:"fw-bold"},"Mata Kuliah",-1),P=e("td",{class:"fw-bold"},"Sesi",-1),Q={class:"col-6"},W={class:"table-responsive"},X={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},Y=e("td",{class:"fw-bold"},"Mulai",-1),Z=e("td",{class:"fw-bold"},"Selesai",-1),$={class:"card border-0 shadow"},ee={class:"card-body"},te=e("h5",null,[e("i",{class:"fa fa-user-plus"}),r(" Enrolle Siswa")],-1),se=e("hr",null,null,-1),oe={class:"table-responsive mb-4"},le={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},ae={class:"thead-dark"},de={class:"border-0"},ne={class:"border-0 rounded-start",style:{width:"5%"}},ie=e("th",{class:"border-0"},"Nim",-1),re=e("th",{class:"border-0"},"Nama Mahasiswa",-1),ce=e("th",{class:"border-0"},"Jenis Kelamin",-1),_e=e("div",{class:"mt-3"},null,-1),me=["id","value","checked"],be={class:"text-center"},he={class:"text-center"},ue={key:0,class:"alert alert-danger mt-2"},fe=e("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),we=e("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function xe(d,t,l,o,c,ve){const w=_("Head"),x=_("Link");return n(),i(f,null,[m(w,null,{default:b(()=>[B]),_:1}),e("div",M,[e("div",U,[e("div",D,[m(x,{href:"/teacher/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:b(()=>[E,H]),_:1}),e("div",O,[e("div",K,[F,T,e("div",z,[e("div",I,[e("div",J,[e("table",R,[e("tbody",null,[e("tr",null,[q,e("td",null,a(l.exam_session.exam.title),1)]),e("tr",null,[G,e("td",null,a(l.exam_session.exam.lesson.title),1)]),e("tr",null,[P,e("td",null,a(l.exam_session.title),1)])])])])]),e("div",Q,[e("div",W,[e("table",X,[e("tbody",null,[e("tr",null,[Y,e("td",null,a(l.exam_session.start_time),1)]),e("tr",null,[Z,e("td",null,a(l.exam_session.end_time),1)])])])])])])])]),e("div",$,[e("div",ee,[te,se,e("form",{onSubmit:t[3]||(t[3]=g((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",oe,[e("table",le,[e("thead",ae,[e("tr",de,[e("th",ne,[h(e("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=s=>o.form.allSelected=s),onChange:t[1]||(t[1]=(...s)=>o.selectAll&&o.selectAll(...s))},null,544),[[u,o.form.allSelected]])]),ie,re,ce])]),_e,e("tbody",null,[(n(!0),i(f,null,j(l.students,s=>(n(),i("tr",{key:s.id},[e("td",null,[h(e("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=v=>o.form.student_id=v),id:s.id,value:s.id,number:"",checked:o.form.allSelected},null,8,me),[[u,o.form.student_id]])]),e("td",be,a(s.nim),1),e("td",null,a(s.name),1),e("td",he,a(s.gender),1)]))),128))])]),l.errors.student_id?(n(),i("div",ue,a(l.errors.student_id),1)):C("",!0)]),fe,we],32)])])])])])],64)}const ge=A(V,[["render",xe]]);export{ge as default};
