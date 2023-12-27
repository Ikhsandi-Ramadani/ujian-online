import{L as d}from"./Teacher-5971ad42.js";import{H as m,L as _,v as e,d as u}from"./app-37deda0f.js";import"./sweetalert2.all-13d6cd33.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const f={layout:d,components:{Head:m,Link:_},props:{errors:Object,exam:Object,questions:Array,question_groups:Array},setup(n){const t=e.reactive({exam_id:n.exam.id||new URL(document.location).searchParams.get("exam_id"),level:new URL(document.location).searchParams.get("level"),question_group_id:new URL(document.location).searchParams.get("question_group_id"),question_id:[],allSelected:!1,jumlah:""});return{form:t,generate:()=>{u.Inertia.get(`/teacher/exams/${n.exam.id}/enrolle/create/generate`,{exam_id:t.exam_id,level:t.level,question_group_id:t.question_group_id,jumlah:t.jumlah})},selectAll:()=>{t.allSelected?t.question_id=n.questions.map(r=>r.id):t.question_id=[]}}}},v=e.createElementVNode("title",null,"Enrolle Soal - Aplikasi Ujian Online",-1),V={class:"container-fluid mb-5 mt-5"},p={class:"row"},N={class:"col-md-12"},E=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),b=e.createTextVNode(" Kembali"),g={class:"card border-0 shadow mb-4"},k={class:"card-body"},x=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-filter"}),e.createTextVNode(" Generate Soal")],-1),w=e.createElementVNode("hr",null,null,-1),y={class:"row"},S={class:"col-md-5"},q=e.createElementVNode("label",{class:"control-label",for:"name"},"Kelompok Soal",-1),B=["value"],L={key:0,class:"alert alert-danger mt-2"},j={class:"col-md-2"},C=e.createElementVNode("label",{class:"control-label",for:"name"},"Level Soal",-1),D=e.createStaticVNode('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>',5),U=[D],A={key:0,class:"alert alert-danger mt-2"},T={class:"col-md-2"},H=e.createElementVNode("label",{class:"control-label",for:"name"},"Jumlah Soal",-1),M={key:0,class:"alert alert-danger mt-2"},O=e.createElementVNode("div",{class:"col-md-3"},[e.createElementVNode("label",{class:"form-label fw-bold text-white"},"*"),e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow w-100"},[e.createElementVNode("i",{class:"fa fa-filter"}),e.createTextVNode(" Generate")])],-1);function P(n,t,l,a,r,R){const s=e.resolveComponent("Head"),c=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(s,null,{default:e.withCtx(()=>[v]),_:1}),e.createElementVNode("div",V,[e.createElementVNode("div",p,[e.createElementVNode("div",N,[e.createVNode(c,{href:`/teacher/exams/${l.exam.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[E,b]),_:1},8,["href"]),e.createElementVNode("div",g,[e.createElementVNode("div",k,[x,w,e.createElementVNode("form",{onSubmit:t[3]||(t[3]=e.withModifiers((...o)=>a.generate&&a.generate(...o),["prevent"]))},[e.createElementVNode("div",y,[e.createElementVNode("div",S,[q,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":t[0]||(t[0]=o=>a.form.question_group_id=o)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.question_groups,(o,i)=>(e.openBlock(),e.createElementBlock("option",{key:i,value:o.id},e.toDisplayString(o.name),9,B))),128))],512),[[e.vModelSelect,a.form.question_group_id]]),l.errors.question_group_id?(e.openBlock(),e.createElementBlock("div",L,e.toDisplayString(l.errors.question_group_id),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",j,[C,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=o=>a.form.level=o)},U,512),[[e.vModelSelect,a.form.level]]),l.errors.level?(e.openBlock(),e.createElementBlock("div",A,e.toDisplayString(l.errors.level),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",T,[H,e.withDirectives(e.createElementVNode("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=o=>a.form.jumlah=o),class:"form-control"},null,512),[[e.vModelText,a.form.jumlah]]),l.errors.jumlah?(e.openBlock(),e.createElementBlock("div",M,e.toDisplayString(l.errors.jumlah),1)):e.createCommentVNode("",!0)]),O])],32)])])])])])],64)}const J=h(f,[["render",P]]);export{J as default};