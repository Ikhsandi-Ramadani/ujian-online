import{L as r}from"./Admin-a5a24896.js";import{H as i,L as c,v as e,d as m}from"./app-c0cf9767.js";import{S as _}from"./sweetalert2.all-07a6e669.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const h={layout:r,components:{Head:i,Link:c},props:{errors:Object,student:Object},setup(a){const t=e.reactive({nim:a.student.nim,name:a.student.name,gender:a.student.gender,password:"",password_confirmation:"",status:a.student.status});return{form:t,submit:()=>{m.Inertia.put(`/admin/students/${a.student.id}`,{nim:t.nim,name:t.name,gender:t.gender,password:t.password,password_confirmation:t.password_confirmation,status:t.status},{onSuccess:()=>{_.fire({title:"Success!",text:"Mahasiswa Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},V=e.createElementVNode("title",null,"Edit Mahasiswa - Aplikasi Ujian Online",-1),f={class:"container-fluid mb-5 mt-5"},N={class:"row"},E={class:"col-md-12"},v=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),b=e.createTextVNode(" Kembali"),w={class:"card border-0 shadow"},p={class:"card-body"},k=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-user"}),e.createTextVNode(" Edit Mahasiswa")],-1),y=e.createElementVNode("hr",null,null,-1),g={class:"row"},M={class:"col-md-4"},x={class:"mb-4"},D=e.createElementVNode("label",null,"Nim",-1),B={key:0,class:"alert alert-danger mt-2"},L={class:"col-md-4"},S={class:"mb-4"},C=e.createElementVNode("label",null,"Nama Lengkap",-1),U={key:0,class:"alert alert-danger mt-2"},R={class:"col-md-4"},P={class:"mb-4"},T=e.createElementVNode("label",null,"Jenis Kelamin",-1),j=e.createElementVNode("option",{value:"L"},"Laki - Laki",-1),K=e.createElementVNode("option",{value:"P"},"Perempuan",-1),H=[j,K],O={key:0,class:"alert alert-danger mt-2"},A={class:"row"},F={class:"col-md-4"},I={class:"mb-4"},J=e.createElementVNode("label",null,"Password",-1),q={key:0,class:"alert alert-danger mt-2"},z={class:"col-md-4"},G={class:"mb-4"},Q=e.createElementVNode("label",null,"Konfirmasi Password",-1),W={class:"col-md-4"},X={class:"mb-4"},Y=e.createElementVNode("label",null,"Konfirmasi",-1),Z=e.createElementVNode("br",null,null,-1),$={class:"form-check form-check-inline"},ee=e.createElementVNode("label",{class:"form-check-label",for:"inlineRadio1"},"Disetujui",-1),te={class:"form-check form-check-inline"},oe=e.createElementVNode("label",{class:"form-check-label",for:"inlineRadio2"},"Ditolak",-1),se=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),ne=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function ae(a,t,n,o,le,de){const l=e.resolveComponent("Head"),d=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(l,null,{default:e.withCtx(()=>[V]),_:1}),e.createElementVNode("div",f,[e.createElementVNode("div",N,[e.createElementVNode("div",E,[e.createVNode(d,{href:"/admin/students",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[v,b]),_:1}),e.createElementVNode("div",w,[e.createElementVNode("div",p,[k,y,e.createElementVNode("form",{onSubmit:t[7]||(t[7]=e.withModifiers((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e.createElementVNode("div",g,[e.createElementVNode("div",M,[e.createElementVNode("div",x,[D,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nim Mahasiswa","onUpdate:modelValue":t[0]||(t[0]=s=>o.form.nim=s)},null,512),[[e.vModelText,o.form.nim]]),n.errors.nim?(e.openBlock(),e.createElementBlock("div",B,e.toDisplayString(n.errors.nim),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",L,[e.createElementVNode("div",S,[C,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Mahasiswa","onUpdate:modelValue":t[1]||(t[1]=s=>o.form.name=s)},null,512),[[e.vModelText,o.form.name]]),n.errors.name?(e.openBlock(),e.createElementBlock("div",U,e.toDisplayString(n.errors.name),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",R,[e.createElementVNode("div",P,[T,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=s=>o.form.gender=s)},H,512),[[e.vModelSelect,o.form.gender]]),n.errors.gender?(e.openBlock(),e.createElementBlock("div",O,e.toDisplayString(n.errors.gender),1)):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",A,[e.createElementVNode("div",F,[e.createElementVNode("div",I,[J,e.withDirectives(e.createElementVNode("input",{type:"password",class:"form-control",placeholder:"Masukkan Password","onUpdate:modelValue":t[3]||(t[3]=s=>o.form.password=s)},null,512),[[e.vModelText,o.form.password]]),n.errors.password?(e.openBlock(),e.createElementBlock("div",q,e.toDisplayString(n.errors.password),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",z,[e.createElementVNode("div",G,[Q,e.withDirectives(e.createElementVNode("input",{type:"password",class:"form-control",placeholder:"Masukkan Konfirmasi Password","onUpdate:modelValue":t[4]||(t[4]=s=>o.form.password_confirmation=s)},null,512),[[e.vModelText,o.form.password_confirmation]])])]),e.createElementVNode("div",W,[e.createElementVNode("div",X,[Y,Z,e.createElementVNode("div",$,[e.withDirectives(e.createElementVNode("input",{class:"form-check-input",type:"radio","onUpdate:modelValue":t[5]||(t[5]=s=>o.form.status=s),id:"inlineRadio1",value:"approve"},null,512),[[e.vModelRadio,o.form.status]]),ee]),e.createElementVNode("div",te,[e.withDirectives(e.createElementVNode("input",{class:"form-check-input",type:"radio","onUpdate:modelValue":t[6]||(t[6]=s=>o.form.status=s),id:"inlineRadio2",value:"rejected"},null,512),[[e.vModelRadio,o.form.status]]),oe])])])]),se,ne],32)])])])])])],64)}const _e=u(h,[["render",ae]]);export{_e as default};
