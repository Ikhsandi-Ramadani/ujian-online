import{L as d}from"./Admin-ab89ff9d.js";import{H as c,L as i,v as e,d as m}from"./app-d95ad38a.js";import{S as _}from"./sweetalert2.all-21a841c1.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const u={layout:d,components:{Head:c,Link:i},props:{errors:Object,teacher:Object},setup(r){const t=e.reactive({nip:r.teacher.nip,name:r.teacher.name,gender:r.teacher.gender,password:"",password_confirmation:""});return{form:t,submit:()=>{m.Inertia.put(`/admin/teachers/${r.teacher.id}`,{nip:t.nip,name:t.name,gender:t.gender,password:t.password,password_confirmation:t.password_confirmation},{onSuccess:()=>{_.fire({title:"Success!",text:"Dosen Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},V=e.createElementVNode("title",null,"Edit Dosen - Aplikasi Ujian Online",-1),p={class:"container-fluid mb-5 mt-5"},N={class:"row"},f={class:"col-md-12"},E=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),v=e.createTextVNode(" Kembali"),b={class:"card border-0 shadow"},w={class:"card-body"},k=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-user"}),e.createTextVNode(" Edit Dosen")],-1),g=e.createElementVNode("hr",null,null,-1),y={class:"row"},x={class:"col-md-4"},D={class:"mb-4"},B=e.createElementVNode("label",null,"nip",-1),L={key:0,class:"alert alert-danger mt-2"},M={class:"col-md-4"},S={class:"mb-4"},C=e.createElementVNode("label",null,"Nama Lengkap",-1),U={key:0,class:"alert alert-danger mt-2"},P={class:"col-md-4"},T={class:"mb-4"},H=e.createElementVNode("label",null,"Jenis Kelamin",-1),K=e.createElementVNode("option",{value:"L"},"Laki - Laki",-1),j=e.createElementVNode("option",{value:"P"},"Perempuan",-1),O=[K,j],A={key:0,class:"alert alert-danger mt-2"},F={class:"row"},I={class:"col-md-6"},J={class:"mb-4"},R=e.createElementVNode("label",null,"Password",-1),q={key:0,class:"alert alert-danger mt-2"},z={class:"col-md-6"},G={class:"mb-4"},Q=e.createElementVNode("label",null,"Konfirmasi Password",-1),W=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),X=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function Y(r,t,s,o,Z,$){const a=e.resolveComponent("Head"),l=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(a,null,{default:e.withCtx(()=>[V]),_:1}),e.createElementVNode("div",p,[e.createElementVNode("div",N,[e.createElementVNode("div",f,[e.createVNode(l,{href:"/admin/teachers",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[E,v]),_:1}),e.createElementVNode("div",b,[e.createElementVNode("div",w,[k,g,e.createElementVNode("form",{onSubmit:t[5]||(t[5]=e.withModifiers((...n)=>o.submit&&o.submit(...n),["prevent"]))},[e.createElementVNode("div",y,[e.createElementVNode("div",x,[e.createElementVNode("div",D,[B,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan nip Dosen","onUpdate:modelValue":t[0]||(t[0]=n=>o.form.nip=n)},null,512),[[e.vModelText,o.form.nip]]),s.errors.nip?(e.openBlock(),e.createElementBlock("div",L,e.toDisplayString(s.errors.nip),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",M,[e.createElementVNode("div",S,[C,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Dosen","onUpdate:modelValue":t[1]||(t[1]=n=>o.form.name=n)},null,512),[[e.vModelText,o.form.name]]),s.errors.name?(e.openBlock(),e.createElementBlock("div",U,e.toDisplayString(s.errors.name),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",P,[e.createElementVNode("div",T,[H,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=n=>o.form.gender=n)},O,512),[[e.vModelSelect,o.form.gender]]),s.errors.gender?(e.openBlock(),e.createElementBlock("div",A,e.toDisplayString(s.errors.gender),1)):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",F,[e.createElementVNode("div",I,[e.createElementVNode("div",J,[R,e.withDirectives(e.createElementVNode("input",{type:"password",class:"form-control",placeholder:"Masukkan Password","onUpdate:modelValue":t[3]||(t[3]=n=>o.form.password=n)},null,512),[[e.vModelText,o.form.password]]),s.errors.password?(e.openBlock(),e.createElementBlock("div",q,e.toDisplayString(s.errors.password),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",z,[e.createElementVNode("div",G,[Q,e.withDirectives(e.createElementVNode("input",{type:"password",class:"form-control",placeholder:"Masukkan Konfirmasi Password","onUpdate:modelValue":t[4]||(t[4]=n=>o.form.password_confirmation=n)},null,512),[[e.vModelText,o.form.password_confirmation]])])])]),W,X],32)])])])])])],64)}const se=h(u,[["render",Y]]);export{se as default};
