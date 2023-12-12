import{L as c}from"./Teacher-8876a5f0.js";import{H as m,L as _,v as e,d as u}from"./app-5cdaf58f.js";import{S as h}from"./sweetalert2.all-f691c165.js";import{E as V}from"./Editor-df28f026.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const E={layout:c,components:{Head:m,Link:_,Editor:V},props:{errors:Object,lessons:Array,classrooms:Array},setup(){const l=e.reactive({title:"",lesson_id:"",duration:"",description:"",random_question:"",random_answer:"",show_answer:"",kkm:""});return{form:l,submit:()=>{u.Inertia.post("/teacher/exams",{title:l.title,lesson_id:l.lesson_id,duration:l.duration,description:l.description,random_question:l.random_question,random_answer:l.random_answer,show_answer:l.show_answer,kkm:l.kkm},{onSuccess:()=>{h.fire({title:"Success!",text:"Ujian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},k=e.createElementVNode("title",null,"Tambah Ujian - Aplikasi Ujian Online",-1),v={class:"container-fluid mb-5 mt-5"},b={class:"row"},f={class:"col-md-12"},w=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),y=e.createTextVNode(" Kembali"),p={class:"card border-0 shadow"},g={class:"card-body"},B=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-edit"}),e.createTextVNode(" Tambah Ujian")],-1),D=e.createElementVNode("hr",null,null,-1),S={class:"row"},M={class:"col-md-6"},x={class:"mb-4"},C=e.createElementVNode("label",null,"Nama Ujian",-1),U={key:0,class:"alert alert-danger mt-2"},j={class:"col-md-6"},K={class:"mb-4"},q=e.createElementVNode("label",null,"Mata Kuliah",-1),T=["value"],L={key:0,class:"alert alert-danger mt-2"},Y={class:"mb-4"},A=e.createElementVNode("label",null,"Deskripsi",-1),H={key:0,class:"alert alert-danger mt-2"},z={class:"row"},F={class:"col-md-4"},O={class:"mb-4"},I=e.createElementVNode("label",null,"Acak Soal",-1),J=e.createElementVNode("option",{value:"Y"},"Y",-1),R=e.createElementVNode("option",{value:"N"},"N",-1),G=[J,R],P={key:0,class:"alert alert-danger mt-2"},Q={class:"col-md-4"},W={class:"mb-4"},X=e.createElementVNode("label",null,"Acak Jawaban",-1),Z=e.createElementVNode("option",{value:"Y"},"Y",-1),$=e.createElementVNode("option",{value:"N"},"N",-1),ee=[Z,$],te={key:0,class:"alert alert-danger mt-2"},oe={class:"col-md-4"},ne={class:"mb-4"},se=e.createElementVNode("label",null,"Tampilkan Hasil",-1),le=e.createElementVNode("option",{value:"Y"},"Y",-1),re=e.createElementVNode("option",{value:"N"},"N",-1),ae=[le,re],ie={key:0,class:"alert alert-danger mt-2"},de={class:"row"},ce={class:"col-md-6"},me={class:"mb-4"},_e=e.createElementVNode("label",null,"Kriteria Ketuntasan Minimal (KKM)",-1),ue={key:0,class:"alert alert-danger mt-2"},he={class:"col-md-6"},Ve={class:"mb-4"},Ne=e.createElementVNode("label",null,"Durasi (Menit)",-1),Ee={key:0,class:"alert alert-danger mt-2"},ke=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),ve=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function be(l,o,s,n,fe,we){const r=e.resolveComponent("Head"),a=e.resolveComponent("Link"),i=e.resolveComponent("Editor");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(r,null,{default:e.withCtx(()=>[k]),_:1}),e.createElementVNode("div",v,[e.createElementVNode("div",b,[e.createElementVNode("div",f,[e.createVNode(a,{href:"/teacher/exams",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[w,y]),_:1}),e.createElementVNode("div",p,[e.createElementVNode("div",g,[B,D,e.createElementVNode("form",{onSubmit:o[8]||(o[8]=e.withModifiers((...t)=>n.submit&&n.submit(...t),["prevent"]))},[e.createElementVNode("div",S,[e.createElementVNode("div",M,[e.createElementVNode("div",x,[C,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Ujian","onUpdate:modelValue":o[0]||(o[0]=t=>n.form.title=t)},null,512),[[e.vModelText,n.form.title]]),s.errors.title?(e.openBlock(),e.createElementBlock("div",U,e.toDisplayString(s.errors.title),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",j,[e.createElementVNode("div",K,[q,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":o[1]||(o[1]=t=>n.form.lesson_id=t)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.lessons,(t,d)=>(e.openBlock(),e.createElementBlock("option",{key:d,value:t.id},e.toDisplayString(t.title),9,T))),128))],512),[[e.vModelSelect,n.form.lesson_id]]),s.errors.lesson_id?(e.openBlock(),e.createElementBlock("div",L,e.toDisplayString(s.errors.lesson_id),1)):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",Y,[A,e.createVNode(i,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:n.form.description,"onUpdate:modelValue":o[2]||(o[2]=t=>n.form.description=t),init:{menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"]),s.errors.description?(e.openBlock(),e.createElementBlock("div",H,e.toDisplayString(s.errors.description),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",z,[e.createElementVNode("div",F,[e.createElementVNode("div",O,[I,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":o[3]||(o[3]=t=>n.form.random_question=t)},G,512),[[e.vModelSelect,n.form.random_question]]),s.errors.random_question?(e.openBlock(),e.createElementBlock("div",P,e.toDisplayString(s.errors.random_question),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",Q,[e.createElementVNode("div",W,[X,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":o[4]||(o[4]=t=>n.form.random_answer=t)},ee,512),[[e.vModelSelect,n.form.random_answer]]),s.errors.random_answer?(e.openBlock(),e.createElementBlock("div",te,e.toDisplayString(s.errors.random_answer),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",oe,[e.createElementVNode("div",ne,[se,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":o[5]||(o[5]=t=>n.form.show_answer=t)},ae,512),[[e.vModelSelect,n.form.show_answer]]),s.errors.show_answer?(e.openBlock(),e.createElementBlock("div",ie,e.toDisplayString(s.errors.show_answer),1)):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",de,[e.createElementVNode("div",ce,[e.createElementVNode("div",me,[_e,e.withDirectives(e.createElementVNode("input",{type:"number",min:"1",class:"form-control",placeholder:"Kriteria Ketuntasan Minimal (KKM)","onUpdate:modelValue":o[6]||(o[6]=t=>n.form.kkm=t)},null,512),[[e.vModelText,n.form.kkm]]),s.errors.kkm?(e.openBlock(),e.createElementBlock("div",ue,e.toDisplayString(s.errors.kkm),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",he,[e.createElementVNode("div",Ve,[Ne,e.withDirectives(e.createElementVNode("input",{type:"number",min:"1",class:"form-control",placeholder:"Masukkan Durasi Ujian (Menit)","onUpdate:modelValue":o[7]||(o[7]=t=>n.form.duration=t)},null,512),[[e.vModelText,n.form.duration]]),s.errors.duration?(e.openBlock(),e.createElementBlock("div",Ee,e.toDisplayString(s.errors.duration),1)):e.createCommentVNode("",!0)])])]),ke,ve],32)])])])])])],64)}const Se=N(E,[["render",be]]);export{Se as default};
