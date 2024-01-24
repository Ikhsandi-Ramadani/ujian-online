import{L as d}from"./Admin-bb41839c.js";import{H as i,L as c,v as e,d as m}from"./app-46daefc6.js";import{S as _}from"./sweetalert2.all-488cddbb.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const h={layout:d,components:{Head:i,Link:c},props:{errors:Object},setup(){const r=e.reactive({nip:"",name:"",gender:"",password:"",password_confirmation:""});return{form:r,submit:()=>{m.Inertia.post("/admin/teachers",{nip:r.nip,name:r.name,gender:r.gender,password:r.password,password_confirmation:r.password_confirmation},{onSuccess:()=>{_.fire({title:"Success!",text:"Dosen Berhasil Disimpan.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},u=e.createElementVNode("title",null,"Tambah Dosen - Aplikasi Ujian Online",-1),V={class:"container-fluid mb-5 mt-5"},N={class:"row"},f={class:"col-md-12"},E=e.createElementVNode("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),b=e.createTextVNode(" Kembali"),v={class:"card border-0 shadow"},w={class:"card-body"},k=e.createElementVNode("h5",null,[e.createElementVNode("i",{class:"fa fa-user"}),e.createTextVNode(" Tambah Dosen")],-1),y=e.createElementVNode("hr",null,null,-1),g={class:"row"},x={class:"col-md-4"},D={class:"mb-4"},B=e.createElementVNode("label",null,"nip",-1),S={key:0,class:"alert alert-danger mt-2"},C={class:"col-md-4"},L={class:"mb-4"},M=e.createElementVNode("label",null,"Nama Lengkap",-1),T={key:0,class:"alert alert-danger mt-2"},P={class:"col-md-4"},U={class:"mb-4"},H=e.createElementVNode("label",null,"Jenis Kelamin",-1),K=e.createElementVNode("option",{value:"L"},"Laki - Laki",-1),j=e.createElementVNode("option",{value:"P"},"Perempuan",-1),A=[K,j],O={key:0,class:"alert alert-danger mt-2"},F={class:"row"},I={class:"col-md-6"},J={class:"mb-4"},R=e.createElementVNode("label",null,"Password",-1),q={key:0,class:"alert alert-danger mt-2"},z={class:"col-md-6"},G={class:"mb-4"},Q=e.createElementVNode("label",null,"Konfirmasi Password",-1),W=e.createElementVNode("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),X=e.createElementVNode("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function Y(r,t,n,o,Z,$){const a=e.resolveComponent("Head"),l=e.resolveComponent("Link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(a,null,{default:e.withCtx(()=>[u]),_:1}),e.createElementVNode("div",V,[e.createElementVNode("div",N,[e.createElementVNode("div",f,[e.createVNode(l,{href:"/admin/teachers",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:e.withCtx(()=>[E,b]),_:1}),e.createElementVNode("div",v,[e.createElementVNode("div",w,[k,y,e.createElementVNode("form",{onSubmit:t[5]||(t[5]=e.withModifiers((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e.createElementVNode("div",g,[e.createElementVNode("div",x,[e.createElementVNode("div",D,[B,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan nip Dosen","onUpdate:modelValue":t[0]||(t[0]=s=>o.form.nip=s)},null,512),[[e.vModelText,o.form.nip]]),n.errors.nip?(e.openBlock(),e.createElementBlock("div",S,e.toDisplayString(n.errors.nip),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",C,[e.createElementVNode("div",L,[M,e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Dosen","onUpdate:modelValue":t[1]||(t[1]=s=>o.form.name=s)},null,512),[[e.vModelText,o.form.name]]),n.errors.name?(e.openBlock(),e.createElementBlock("div",T,e.toDisplayString(n.errors.name),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",P,[e.createElementVNode("div",U,[H,e.withDirectives(e.createElementVNode("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=s=>o.form.gender=s)},A,512),[[e.vModelSelect,o.form.gender]]),n.errors.gender?(e.openBlock(),e.createElementBlock("div",O,e.toDisplayString(n.errors.gender),1)):e.createCommentVNode("",!0)])])]),e.createElementVNode("div",F,[e.createElementVNode("div",I,[e.createElementVNode("div",J,[R,e.withDirectives(e.createElementVNode("input",{type:"password",class:"form-control",placeholder:"Masukkan Password","onUpdate:modelValue":t[3]||(t[3]=s=>o.form.password=s)},null,512),[[e.vModelText,o.form.password]]),n.errors.password?(e.openBlock(),e.createElementBlock("div",q,e.toDisplayString(n.errors.password),1)):e.createCommentVNode("",!0)])]),e.createElementVNode("div",z,[e.createElementVNode("div",G,[Q,e.withDirectives(e.createElementVNode("input",{type:"password",class:"form-control",placeholder:"Masukkan Konfirmasi Password","onUpdate:modelValue":t[4]||(t[4]=s=>o.form.password_confirmation=s)},null,512),[[e.vModelText,o.form.password_confirmation]])])])]),W,X],32)])])])])])],64)}const ne=p(h,[["render",Y]]);export{ne as default};
