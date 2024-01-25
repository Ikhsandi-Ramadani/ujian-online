import{L as w}from"./Admin-f52de7ce.js";import{H as v,L as k,e as g,r as _,o as r,c as d,a as u,w as h,b as s,f as y,g as i,v as l,t as c,h as m,m as L,F as x,i as V,j as f}from"./app-d0c346f8.js";import{S as D}from"./sweetalert2.all-331f1a32.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const S={layout:w,components:{Head:v,Link:k},props:{errors:Object,teacher:Object},setup(a){const o=g({nip:a.teacher.nip,name:a.teacher.name,gender:a.teacher.gender,password:"",password_confirmation:""});return{form:o,submit:()=>{V.Inertia.put(`/admin/teachers/${a.teacher.id}`,{nip:o.nip,name:o.name,gender:o.gender,password:o.password,password_confirmation:o.password_confirmation},{onSuccess:()=>{D.fire({title:"Success!",text:"Dosen Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},U=s("title",null,"Edit Dosen - Aplikasi Ujian Online",-1),N={class:"container-fluid mb-5 mt-5"},P={class:"row"},B={class:"col-md-12"},j=s("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),C=f(" Kembali"),E={class:"card border-0 shadow"},H={class:"card-body"},K=s("h5",null,[s("i",{class:"fa fa-user"}),f(" Edit Dosen")],-1),O=s("hr",null,null,-1),A={class:"row"},F={class:"col-md-4"},T={class:"mb-4"},I=s("label",null,"nip",-1),J={key:0,class:"alert alert-danger mt-2"},R={class:"col-md-4"},q={class:"mb-4"},z=s("label",null,"Nama Lengkap",-1),G={key:0,class:"alert alert-danger mt-2"},Q={class:"col-md-4"},W={class:"mb-4"},X=s("label",null,"Jenis Kelamin",-1),Y=s("option",{value:"L"},"Laki - Laki",-1),Z=s("option",{value:"P"},"Perempuan",-1),$=[Y,Z],ss={key:0,class:"alert alert-danger mt-2"},os={class:"row"},es={class:"col-md-6"},ts={class:"mb-4"},ns=s("label",null,"Password",-1),as={key:0,class:"alert alert-danger mt-2"},rs={class:"col-md-6"},ds={class:"mb-4"},is=s("label",null,"Konfirmasi Password",-1),ls=s("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),cs=s("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function ms(a,o,n,e,_s,us){const p=_("Head"),b=_("Link");return r(),d(x,null,[u(p,null,{default:h(()=>[U]),_:1}),s("div",N,[s("div",P,[s("div",B,[u(b,{href:"/admin/teachers",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:h(()=>[j,C]),_:1}),s("div",E,[s("div",H,[K,O,s("form",{onSubmit:o[5]||(o[5]=y((...t)=>e.submit&&e.submit(...t),["prevent"]))},[s("div",A,[s("div",F,[s("div",T,[I,i(s("input",{type:"text",class:"form-control",placeholder:"Masukkan nip Dosen","onUpdate:modelValue":o[0]||(o[0]=t=>e.form.nip=t)},null,512),[[l,e.form.nip]]),n.errors.nip?(r(),d("div",J,c(n.errors.nip),1)):m("",!0)])]),s("div",R,[s("div",q,[z,i(s("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Dosen","onUpdate:modelValue":o[1]||(o[1]=t=>e.form.name=t)},null,512),[[l,e.form.name]]),n.errors.name?(r(),d("div",G,c(n.errors.name),1)):m("",!0)])]),s("div",Q,[s("div",W,[X,i(s("select",{class:"form-select","onUpdate:modelValue":o[2]||(o[2]=t=>e.form.gender=t)},$,512),[[L,e.form.gender]]),n.errors.gender?(r(),d("div",ss,c(n.errors.gender),1)):m("",!0)])])]),s("div",os,[s("div",es,[s("div",ts,[ns,i(s("input",{type:"password",class:"form-control",placeholder:"Masukkan Password","onUpdate:modelValue":o[3]||(o[3]=t=>e.form.password=t)},null,512),[[l,e.form.password]]),n.errors.password?(r(),d("div",as,c(n.errors.password),1)):m("",!0)])]),s("div",rs,[s("div",ds,[is,i(s("input",{type:"password",class:"form-control",placeholder:"Masukkan Konfirmasi Password","onUpdate:modelValue":o[4]||(o[4]=t=>e.form.password_confirmation=t)},null,512),[[l,e.form.password_confirmation]])])])]),ls,cs],32)])])])])])],64)}const ws=M(S,[["render",ms]]);export{ws as default};