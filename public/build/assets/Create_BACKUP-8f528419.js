import{L as M}from"./Teacher-98f109fe.js";import{H as T,L as q,e as A,r as f,o as n,c as a,a as v,w,b as e,f as p,g as c,m as x,F as h,l as y,t as i,h as _,z as g,i as L,j as m,p as d,d as C}from"./app-65f4fb22.js";import{S as U}from"./sweetalert2.all-1ba514aa.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const B={layout:M,components:{Head:T,Link:q},props:{errors:Object,exam:Object,questions:Array,question_groups:Array},setup(r){const o=A({exam_id:r.exam.id||new URL(document.location).searchParams.get("exam_id"),level:new URL(document.location).searchParams.get("level"),question_group_id:new URL(document.location).searchParams.get("question_group_id"),question_id:[],allSelected:!1});return{form:o,filter:()=>{L.Inertia.get(`/teacher/exams/${r.exam.id}/enrolle/create/filter`,{exam_id:o.exam_id,level:o.level,question_group_id:o.question_group_id})},selectAll:()=>{o.allSelected?o.question_id=r.questions.map(b=>b.id):o.question_id=[]},submit:()=>{L.Inertia.post(`/teacher/exams/${r.exam.id}/enrolle/store`,{exam_id:o.exam_id,question_id:o.question_id},{onSuccess:()=>{U.fire({title:"Success!",text:"Enrolle Soal Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},N=e("title",null,"Enrolle Soal - Aplikasi Ujian Online",-1),j={class:"container-fluid mb-5 mt-5"},E={class:"row"},F={class:"col-md-12"},K=e("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),P=m(" Kembali"),R={class:"card border-0 shadow mb-4"},D={class:"card-body"},O=e("h5",null,[e("i",{class:"fa fa-filter"}),m(" Filter Soal")],-1),z=e("hr",null,null,-1),I={class:"row"},G={class:"col-md-6"},J=e("label",{class:"control-label",for:"name"},"Kelompok Soal",-1),Q=["value"],W={key:0,class:"alert alert-danger mt-2"},X={class:"col-md-3"},Y=e("label",{class:"control-label",for:"name"},"Level Soal",-1),Z=C('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>',5),$=[Z],ee={key:0,class:"alert alert-danger mt-2"},te=e("div",{class:"col-md-3"},[e("label",{class:"form-label fw-bold text-white"},"*"),e("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow w-100"},[e("i",{class:"fa fa-filter"}),m(" Filter")])],-1),oe={class:"card border-0 shadow"},se={class:"card-body"},le=e("h5",null,[e("i",{class:"fa fa-user-plus"}),m(" Enrolle Soal")],-1),ne=e("hr",null,null,-1),ae={class:"table-responsive mb-4"},ie={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},re={class:"thead-dark"},de={class:"border-0"},ce={class:"border-0 rounded-start",style:{width:"5%"}},_e=e("th",{class:"border-0"},"Soal",-1),me=e("th",{class:"border-0"},"Kelompok Soal",-1),ue=e("th",{class:"border-0"},"Level Soal",-1),he=e("div",{class:"mt-3"},null,-1),be=["id","value","checked"],fe=["innerHTML"],ve=e("hr",null,null,-1),we={type:"A"},pe=["innerHTML"],xe=["innerHTML"],ye=["innerHTML"],ge=["innerHTML"],Le=["innerHTML"],Se={class:"text-center fw-bold"},ke={class:"text-center fw-bold"},He={key:0,class:"alert alert-danger mt-2"},Me=e("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),Te=e("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function qe(r,o,l,s,S,b){const k=f("Head"),H=f("Link");return n(),a(h,null,[v(k,null,{default:w(()=>[N]),_:1}),e("div",j,[e("div",E,[e("div",F,[v(H,{href:`/teacher/exams/${l.exam.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:w(()=>[K,P]),_:1},8,["href"]),e("div",R,[e("div",D,[O,z,e("form",{onSubmit:o[2]||(o[2]=p((...t)=>s.filter&&s.filter(...t),["prevent"]))},[e("div",I,[e("div",G,[J,c(e("select",{class:"form-select","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.question_group_id=t)},[(n(!0),a(h,null,y(l.question_groups,(t,u)=>(n(),a("option",{key:u,value:t.id},i(t.name),9,Q))),128))],512),[[x,s.form.question_group_id]]),l.errors.question_group_id?(n(),a("div",W,i(l.errors.question_group_id),1)):_("",!0)]),e("div",X,[Y,c(e("select",{class:"form-select","onUpdate:modelValue":o[1]||(o[1]=t=>s.form.level=t)},$,512),[[x,s.form.level]]),l.errors.level?(n(),a("div",ee,i(l.errors.level),1)):_("",!0)]),te])],32)])]),e("div",oe,[e("div",se,[le,ne,l.questions.length>0?(n(),a("form",{key:0,onSubmit:o[6]||(o[6]=p((...t)=>s.submit&&s.submit(...t),["prevent"]))},[e("div",ae,[e("table",ie,[e("thead",re,[e("tr",de,[e("th",ce,[c(e("input",{type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=t=>s.form.allSelected=t),onChange:o[4]||(o[4]=(...t)=>s.selectAll&&s.selectAll(...t))},null,544),[[g,s.form.allSelected]])]),_e,me,ue])]),he,e("tbody",null,[(n(!0),a(h,null,y(l.questions,t=>(n(),a("tr",{key:t.id},[e("td",null,[c(e("input",{type:"checkbox","onUpdate:modelValue":o[5]||(o[5]=u=>s.form.question_id=u),id:t.id,value:t.id,number:"",checked:s.form.allSelected},null,8,be),[[g,s.form.question_id]])]),e("td",null,[e("div",{class:"fw-bold",innerHTML:t.question},null,8,fe),ve,e("ol",we,[e("li",{innerHTML:t.option_1,class:d({"text-success fw-bold":t.answer=="1"})},null,10,pe),e("li",{innerHTML:t.option_2,class:d({"text-success fw-bold":t.answer=="2"})},null,10,xe),e("li",{innerHTML:t.option_3,class:d({"text-success fw-bold":t.answer=="3"})},null,10,ye),e("li",{innerHTML:t.option_4,class:d({"text-success fw-bold":t.answer=="4"})},null,10,ge),e("li",{innerHTML:t.option_5,class:d({"text-success fw-bold":t.answer=="5"})},null,10,Le)])]),e("td",Se,i(t.question_group.name),1),e("td",ke,i(t.level),1)]))),128))])]),l.errors.question_id?(n(),a("div",He,i(l.errors.question_id),1)):_("",!0)]),Me,Te],32)):_("",!0)])])])])])],64)}const Be=V(B,[["render",qe]]);export{Be as default};
