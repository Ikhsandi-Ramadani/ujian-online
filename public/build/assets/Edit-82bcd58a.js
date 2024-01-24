import{L as c}from"./Teacher-59746007.js";import{H as m,L as _,v as e,d as u}from"./app-46daefc6.js";import{S as V}from"./sweetalert2.all-488cddbb.js";import{E as h}from"./Editor-e869cd0f.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const E={layout:c,components:{Head:m,Link:_,Editor:h},props:{errors:Object,exam:Object,lessons:Array},setup(s){const t=e.reactive({title:s.exam.title,lesson_id:s.exam.lesson_id,duration:s.exam.duration,description:s.exam.description,random_question:s.exam.random_question,random_answer:s.exam.random_answer,show_answer:s.exam.show_answer,kkm:s.exam.kkm});return{form:t,submit:()=>{u.Inertia.put(`/teacher/exams/${s.exam.id}`,{title:t.title,lesson_id:t.lesson_id,duration:t.duration,description:t.description,random_question:t.random_question,random_answer:t.random_answer,show_answer:t.show_answer,kkm:t.kkm},{onSuccess:()=>{V.fire({title:"Success!",text:"Ujian Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},k=e.createElementVNode("title",null,"Edit Ujian - Aplikasi Ujian Online",-1),v={class:"container-fluid mb-5 mt-5"},b={class:"row"},f={class:"col-md-12"},w=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),y=e.createTextVNode(" Kembali"),g={class:"card border-0 shadow"},x={class:"card-body"},B=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-edit"}),e.createTextVNode(" Edit Ujian")],-1),p=e.createElementVNode("hr",null,null,-1),D={class:"row"},S={class:"col-md-6"},M={class:"mb-4"},U=e.createElementVNode("label",null,"Nama Ujian",-1),C={key:0,class:"alert alert-danger mt-2"},j={class:"col-md-6"},q={class:"mb-4"},K=e.createElementVNode("label",null,"Mata Kuliah",-1),L=["value"],T={key:0,class:"alert alert-danger mt-2"},Y={class:"mb-4"},H=e.createElementVNode("label",null,"Deskripsi",-1),A={key:0,class:"alert alert-danger mt-2"},O={class:"row"},z={class:"col-md-4"},F={class:"mb-4"},I=e.createElementVNode("label",null,"Acak Soal",-1),J=e.createElementVNode("option",{value:"Y"},"Y",-1),R=e.createElementVNode("option",{value:"N"},"N",-1),G=[J,R],P={key:0,class:"alert alert-danger mt-2"},Q={class:"col-md-4"},W={class:"mb-4"},X=e.createElementVNode("label",null,"Acak Jawaban",-1),Z=e.createElementVNode("option",{value:"Y"},"Y",-1),$=e.createElementVNode("option",{value:"N"},"N",-1),ee=[Z,$],te={key:0,class:"alert alert-danger mt-2"},oe={class:"col-md-4"},ne={class:"mb-4"},le=e.createElementVNode("label",null,"Tampilkan Hasil",-1),se=e.createElementVNode("option",{value:"Y"},"Y",-1),ae=e.createElementVNode("option",{value:"N"},"N",-1),re=[se,ae],ie={key:0,class:"alert alert-danger mt-2"},de={class:"row"},ce={class:"col-md-6"},me={class:"mb-4"},_e=e.createElementVNode("label",null,"Kriteria Ketuntasan Minimal (KKM)",-1),ue={key:0,class:"alert alert-danger mt-2"},Ve={class:"col-md-6"},he={class:"mb-4"},Ne=e.createElementVNode("label",null,"Durasi (Menit)",-1),Ee={key:0,class:"alert alert-danger mt-2"},ke=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),ve=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function be(s,t,n,l,fe,we){const a=e.resolveComponent("Head"),r=e.resolveComponent("Link"),i=e.resolveComponent("Editor");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(a,null,{default:e.withCtx(()=>[k]),_:1}),e.createElementVNode("div",v,[e.createElementVNode("div",b,[e.createElementVNode("div",f,[e.createVNode(r,{href:"/teacher/exams",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[w,y]),_:1}),e.createElementVNode("div",g,[e.createElementVNode("div",x,[B,p,e.createElementVNode("form",{onSubmit:t[8]||(t[8]=e.withModifiers((...o)=>l.submit&&l.submit(...o),["prevent"]))},[e.createElementVNode("div",D,[e.createElementVNode("div",S,[e.createElementVNode("div",M,[U,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Ujian","onUpdate:modelValue":t[0]||(t[0]=o=>l.form.title=o)},null,512),[[e.vModelText,l.form.title]]),n.errors.title?(e.openBlock(),e.createElementBlock("div",C,e.toDisplayString(n.errors.title),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",j,[e.createElementVNode("div",q,[K,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=o=>l.form.lesson_id=o)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.lessons,(o,d)=>(e.openBlock(),e.createElementBlock("option",{key:d,value:o.id},e.toDisplayString(o.title),9,L))),128))],512),[[e.vModelSelect,l.form.lesson_id]]),n.errors.lesson_id?(e.openBlock(),e.createElementBlock("div",T,e.toDisplayString(n.errors.lesson_id),1)):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",Y,[H,e.createVNode(i,{"api-key":"3rzgg05al8e3ia211iu5bqmf9jreab5zydjecd6iy6gqr3fk",modelValue:l.form.description,"onUpdate:modelValue":t[2]||(t[2]=o=>l.form.description=o),init:{menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"]),n.errors.description?(e.openBlock(),e.createElementBlock("div",A,e.toDisplayString(n.errors.description),1)):e.createCommentVNode("",!0)]),e.createElementVNode("div",O,[e.createElementVNode("div",z,[e.createElementVNode("div",F,[I,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":t[3]||(t[3]=o=>l.form.random_question=o)},G,512),[[e.vModelSelect,l.form.random_question]]),n.errors.random_question?(e.openBlock(),e.createElementBlock("div",P,e.toDisplayString(n.errors.random_question),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",Q,[e.createElementVNode("div",W,[X,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":t[4]||(t[4]=o=>l.form.random_answer=o)},ee,512),[[e.vModelSelect,l.form.random_answer]]),n.errors.random_answer?(e.openBlock(),e.createElementBlock("div",te,e.toDisplayString(n.errors.random_answer),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",oe,[e.createElementVNode("div",ne,[le,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":t[5]||(t[5]=o=>l.form.show_answer=o)},re,512),[[e.vModelSelect,l.form.show_answer]]),n.errors.show_answer?(e.openBlock(),e.createElementBlock("div",ie,e.toDisplayString(n.errors.show_answer),1)):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",de,[e.createElementVNode("div",ce,[e.createElementVNode("div",me,[_e,e.withDirectives(e.createElementVNode("input",{type:"number",min:"1",class:"form-control",placeholder:"Kriteria Ketuntasan Minimal (KKM)","onUpdate:modelValue":t[6]||(t[6]=o=>l.form.kkm=o)},null,512),[[e.vModelText,l.form.kkm]]),n.errors.kkm?(e.openBlock(),e.createElementBlock("div",ue,e.toDisplayString(n.errors.kkm),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",Ve,[e.createElementVNode("div",he,[Ne,e.withDirectives(e.createElementVNode("input",{type:"number",min:"1",class:"form-control",placeholder:"Masukkan Durasi Ujian (Menit)","onUpdate:modelValue":t[7]||(t[7]=o=>l.form.duration=o)},null,512),[[e.vModelText,l.form.duration]]),n.errors.duration?(e.openBlock(),e.createElementBlock("div",Ee,e.toDisplayString(n.errors.duration),1)):e.createCommentVNode("",!0)])])]),ke,ve],32)])])])])])],64)}const De=N(E,[["render",be]]);export{De as default};
