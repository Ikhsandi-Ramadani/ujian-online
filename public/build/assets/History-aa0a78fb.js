import{L as s}from"./Teacher-9e1d0d0a.js";import{H as l,v as e}from"./app-af81db02.js";import{_ as a}from"./_plugin-vue_export-helper-c27b6911.js";const d={layout:s,components:{Head:l},props:{errors:Object,history:Array,student:Object}},c=e.createElementVNode("title",null,"History Ujian - Aplikasi Ujian Online",-1),i={class:"container-fluid mb-5 mt-5"},m={class:"row"},_={class:"col-12"},u={class:"card border-0 shadow"},E={class:"card-body"},h={class:"table-responsive"},N={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},p=e.createElementVNode("thead",{class:"thead-dark"},[e.createElementVNode("tr",{class:"border-0"},[e.createElementVNode("th",{class:"border-0 rounded-start"},"Ujian"),e.createElementVNode("th",{class:"border-0"},"Sesi"),e.createElementVNode("th",{class:"border-0 rounded-end"},"Nilai")])],-1),V=e.createElementVNode("div",{class:"mt-2"},null,-1);function b(y,v,t,f,k,g){const n=e.resolveComponent("Head");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(n,null,{default:e.withCtx(()=>[c]),_:1}),e.createElementVNode("div",i,[e.createElementVNode("div",m,[e.createElementVNode("div",_,[e.createElementVNode("div",u,[e.createElementVNode("div",E,[e.createElementVNode("h5",null,"History Ujian "+e.toDisplayString(t.student.name)+" ("+e.toDisplayString(t.student.nim)+")",1),e.createElementVNode("div",h,[e.createElementVNode("table",N,[p,V,e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.history,(o,r)=>(e.openBlock(),e.createElementBlock("tr",{key:r},[e.createElementVNode("td",null,e.toDisplayString(o.exam.title),1),e.createElementVNode("td",null,e.toDisplayString(o.exam_session.title),1),e.createElementVNode("td",null,e.toDisplayString(o.grade),1)]))),128))])])])])])])])])],64)}const B=a(d,[["render",b]]);export{B as default};
