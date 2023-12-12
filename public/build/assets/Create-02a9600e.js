import{L as i}from"./Teacher-c6e45dcc.js";import{H as m,L as _,v as e,d as h}from"./app-f0142ba0.js";import{S as u}from"./sweetalert2.all-93086de7.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const E={layout:i,components:{Head:m,Link:_},props:{errors:Object,exam:Object,exam_session:Object,students:Array},setup(l){const t=e.reactive({exam_id:l.exam.id,student_id:[],allSelected:!1});return{form:t,selectAll:()=>{t.allSelected?t.student_id=l.students.map(d=>d.id):t.student_id=[]},submit:()=>{h.Inertia.post(`/teacher/exam_sessions/${l.exam_session.id}/enrolle/store`,{exam_id:t.exam_id,student_id:t.student_id},{onSuccess:()=>{u.fire({title:"Success!",text:"Enrolle Siswa Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},N=e.createElementVNode("title",null,"Enrolle Siswa - Aplikasi Ujian Online",-1),V={class:"container-fluid mb-5 mt-5"},f={class:"row"},p={class:"col-md-12"},x=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),k=e.createTextVNode(" Kembali"),v={class:"card border-0 shadow"},w={class:"card-body"},y=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-user-plus"}),e.createTextVNode(" Enrolle Siswa")],-1),S=e.createElementVNode("hr",null,null,-1),g={class:"table-responsive mb-4"},B={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},C={class:"thead-dark"},D={class:"border-0"},L={class:"border-0 rounded-start",style:{width:"5%"}},A=e.createElementVNode("th",{class:"border-0"},"Nim",-1),j=e.createElementVNode("th",{class:"border-0"},"Nama Mahasiswa",-1),H=e.createElementVNode("th",{class:"border-0"},"Jenis Kelamin",-1),M=e.createElementVNode("div",{class:"mt-3"},null,-1),O=["id","value","checked"],T={class:"text-center"},U={class:"text-center"},F={key:0,class:"alert alert-danger mt-2"},K=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),I=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function J(l,t,n,s,d,R){const a=e.resolveComponent("Head"),r=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(a,null,{default:e.withCtx(()=>[N]),_:1}),e.createElementVNode("div",V,[e.createElementVNode("div",f,[e.createElementVNode("div",p,[e.createVNode(r,{href:`/teacher/exam_sessions/${n.exam_session.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[x,k]),_:1},8,["href"]),e.createElementVNode("div",v,[e.createElementVNode("div",w,[y,S,e.createElementVNode("form",{onSubmit:t[3]||(t[3]=e.withModifiers((...o)=>s.submit&&s.submit(...o),["prevent"]))},[e.createElementVNode("div",g,[e.createElementVNode("table",B,[e.createElementVNode("thead",C,[e.createElementVNode("tr",D,[e.createElementVNode("th",L,[e.withDirectives(e.createElementVNode("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=o=>s.form.allSelected=o),onChange:t[1]||(t[1]=(...o)=>s.selectAll&&s.selectAll(...o))},null,544),[[e.vModelCheckbox,s.form.allSelected]])]),A,j,H])]),M,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.students,o=>(e.openBlock(),e.createElementBlock("tr",{key:o.id},[e.createElementVNode("td",null,[e.withDirectives(e.createElementVNode("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=c=>s.form.student_id=c),id:o.id,value:o.id,number:"",checked:s.form.allSelected},null,8,O),[[e.vModelCheckbox,s.form.student_id]])]),e.createElementVNode("td",T,e.toDisplayString(o.nim),1),e.createElementVNode("td",null,e.toDisplayString(o.name),1),e.createElementVNode("td",U,e.toDisplayString(o.gender),1)]))),128))])]),n.errors.student_id?(e.openBlock(),e.createElementBlock("div",F,e.toDisplayString(n.errors.student_id),1)):e.createCommentVNode("",!0)]),K,I],32)])])])])])],64)}const Q=b(E,[["render",J]]);export{Q as default};
