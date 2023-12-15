import{L as d}from"./Teacher-bb170698.js";import{H as c,L as i,v as e,d as m}from"./app-d95ad38a.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const N={layout:d,components:{Head:c,Link:i},props:{errors:Object,exams:Array,grades:Array},setup(){const r=e.reactive({exam_id:new URL(document.location).searchParams.get("exam_id")});return{form:r,filter:()=>{m.Inertia.get("/teacher/reports/filter",{exam_id:r.exam_id})}}}},h=e.createElementVNode("title",null,"Laporan Nilai Ujian - Aplikasi Ujian Online",-1),E={class:"container-fluid mb-5 mt-5"},V={class:"row"},b={class:"col-md-12"},u={class:"card border-0 shadow mb-4"},f={class:"card-body"},p=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-filter"}),e.createTextVNode(" Filter Nilai Ujian")],-1),x=e.createElementVNode("hr",null,null,-1),v={class:"row"},y={class:"col-md-9"},k=e.createElementVNode("label",{class:"control-label",for:"name"},"Ujian",-1),w=["value"],g={key:0,class:"alert alert-danger mt-2"},B=e.createElementVNode("div",{class:"col-md-3"},[e.createElementVNode("label",{class:"form-label fw-bold text-white"},"*"),e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow w-100"},[e.createElementVNode("i",{class:"fa fa-filter"}),e.createTextVNode(" Filter")])],-1),S={key:0,class:"card border-0 shadow"},D={class:"card-body"},L={class:"row"},j=e.createElementVNode("div",{class:"col-md-9 col-12"},[e.createElementVNode("h5",{class:"mt-2"},[e.createElementVNode("i",{class:"fa fa-chart-line"}),e.createTextVNode(" Laporan Nilai Ujian")])],-1),U={class:"col-md-3 col-12"},C=["href"],F=e.createElementVNode("i",{class:"fa fa-file-excel"},null,-1),T=e.createTextVNode(" DOWNLOAD EXCEL"),A=[F,T],H=e.createElementVNode("hr",null,null,-1),O={class:"table-responsive"},M={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},I=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),e.createElementVNode("th",{class:"border-0"},"Ujian"),e.createElementVNode("th",{class:"border-0"},"Sesi"),e.createElementVNode("th",{class:"border-0"},"Nama Siswa"),e.createElementVNode("th",{class:"border-0"},"Pelajaran"),e.createElementVNode("th",{class:"border-0"},"Nilai")])],-1),P=e.createElementVNode("div",{class:"mt-2"},null,-1),K={class:"fw-bold text-center"},R={class:"fw-bold text-center"};function W(r,o,l,a,X,q){const n=e.resolveComponent("Head");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(n,null,{default:e.withCtx(()=>[h]),_:1}),e.createElementVNode("div",E,[e.createElementVNode("div",V,[e.createElementVNode("div",b,[e.createElementVNode("div",u,[e.createElementVNode("div",f,[p,x,e.createElementVNode("form",{onSubmit:o[1]||(o[1]=e.withModifiers((...t)=>a.filter&&a.filter(...t),["prevent"]))},[e.createElementVNode("div",v,[e.createElementVNode("div",y,[k,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":o[0]||(o[0]=t=>a.form.exam_id=t)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.exams,(t,s)=>(e.openBlock(),e.createElementBlock("option",{key:s,value:t.id},e.toDisplayString(t.title)+" — Mata Kuliah : "+e.toDisplayString(t.lesson.title),9,w))),128))],512),[[e.vModelSelect,a.form.exam_id]]),l.errors.exam_id?(e.openBlock(),e.createElementBlock("div",g,e.toDisplayString(l.errors.exam_id),1)):e.createCommentVNode("",!0)]),B])],32)])]),l.grades.length>0?(e.openBlock(),e.createElementBlock("div",S,[e.createElementVNode("div",D,[e.createElementVNode("div",L,[j,e.createElementVNode("div",U,[e.createElementVNode("a",{href:`/teacher/reports/export?exam_id=${a.form.exam_id}`,target:"_blank",class:"btn btn-success btn-md border-0 shadow w-100 text-white"},A,8,C)])]),H,e.createElementVNode("div",O,[e.createElementVNode("table",M,[I,P,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.grades,(t,s)=>(e.openBlock(),e.createElementBlock("tr",{key:t.id},[e.createElementVNode("td",K,e.toDisplayString(s+1),1),e.createElementVNode("td",null,e.toDisplayString(t.exam.title),1),e.createElementVNode("td",null,e.toDisplayString(t.exam_session.title),1),e.createElementVNode("td",null,e.toDisplayString(t.student.name),1),e.createElementVNode("td",null,e.toDisplayString(t.exam.lesson.title),1),e.createElementVNode("td",R,e.toDisplayString(t.grade),1)]))),128))])])])])])):e.createCommentVNode("",!0)])])])],64)}const Q=_(N,[["render",W]]);export{Q as default};
