import{L as i}from"./Admin-2daf03a2.js";import{H as c,r as _,o as a,c as n,a as u,w as h,b as t,t as s,F as r,l as m}from"./app-65f4fb22.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const p={layout:i,components:{Head:c},props:{errors:Object,history:Array,student:Object}},y=t("title",null,"History Ujian - Aplikasi Ujian Online",-1),f={class:"container-fluid mb-5 mt-5"},v={class:"row"},H={class:"col-12"},j={class:"card border-0 shadow"},x={class:"card-body"},k={class:"table-responsive"},w={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},U=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start"},"Ujian"),t("th",{class:"border-0"},"Sesi"),t("th",{class:"border-0 rounded-end"},"Nilai")])],-1),g=t("div",{class:"mt-2"},null,-1);function A(B,L,e,N,O,C){const d=_("Head");return a(),n(r,null,[u(d,null,{default:h(()=>[y]),_:1}),t("div",f,[t("div",v,[t("div",H,[t("div",j,[t("div",x,[t("h5",null,"History Ujian "+s(e.student.name)+" ("+s(e.student.nim)+")",1),t("div",k,[t("table",w,[U,g,t("tbody",null,[(a(!0),n(r,null,m(e.history,(o,l)=>(a(),n("tr",{key:l},[t("td",null,s(o.exam.title),1),t("td",null,s(o.exam_session.title),1),t("td",null,s(o.grade),1)]))),128))])])])])])])])])],64)}const D=b(p,[["render",A]]);export{D as default};
