"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9040],{7782:(Q,v,i)=>{i.d(v,{M:()=>u});var o=i(4650),d=i(3208),R=i(7392);let u=(()=>{class E{constructor(l){this.matSnackBarService=l,this.onUpload=new o.vpe,this.imagePreview="assets/brand/placeholder-avatar.webp",this.imageName="Archivo no seleccionado",this.isValidImage=!1}ngOnInit(){}onFileChange(l){if(l.target.files&&l.target.files[0]){const h=l.target.files[0],q=h.size,x=2097152;if(this.isImage=["image/jpeg","image/png","application/pdf"].includes(h.type),this.isImage)if(q>x)this.matSnackBarService.open("warning","La imagen no puede ser mayor a 2 MB"),this.isValidImage=!1,this.imageName="Archivo no seleccionado";else{const Z=new FileReader;Z.onload=U=>this.imagePreview=U.target.result,Z.readAsDataURL(h),this.imageName=h.name,this.isValidImage=!0}else this.matSnackBarService.open("warning","Selecciona una imagen para subirla"),this.isValidImage=!1,this.imageName="Archivo no seleccionado";this.onUpload.emit({file:h,isValidImage:this.isValidImage})}}}return E.\u0275fac=function(l){return new(l||E)(o.Y36(d.s))},E.\u0275cmp=o.Xpm({type:E,selectors:[["z-upload-input-type-document"]],outputs:{onUpload:"onUpload"},decls:11,vars:1,consts:[[1,"z-container-image-upload"],[1,"upload-input-container"],[1,"input-container"],["type","file","accept","application/pdf",3,"change"],["type","button",1,"z-btn","btn-upload"],["fontIcon","picture_as_pdf"]],template:function(l,h){1&l&&(o.TgZ(0,"div",0)(1,"div")(2,"h6")(3,"small"),o._uU(4),o.qZA()()(),o.TgZ(5,"div",1)(6,"div",2)(7,"input",3),o.NdJ("change",function(C){return h.onFileChange(C)}),o.qZA()(),o.TgZ(8,"button",4),o._UZ(9,"mat-icon",5),o._uU(10," A\xf1adir documento *.pdf "),o.qZA()()()),2&l&&(o.xp6(4),o.Oqu(h.imageName))},dependencies:[R.Hw]}),E})()},6143:(Q,v,i)=>{i.d(v,{J:()=>w});var o=i(9653),d=i(237);const u=(0,o.ZF)(d.C.requestReports),E=(0,o.P1)(u,p=>p.create.createRequestReportsDto),s=(0,o.P1)(u,p=>p.create.exception),l=(0,o.P1)(u,p=>p.create.isLoading),h=(0,o.P1)(u,p=>p.create.response),e=(0,o.P1)(u,p=>p.findAll.pagination),C=(0,o.P1)(u,p=>p.findAll.exception),q=(0,o.P1)(u,p=>p.findAll.isLoading),x=(0,o.P1)(u,p=>p.findAll.response),Z=(0,o.P1)(u,p=>p.findOne.id),U=(0,o.P1)(u,p=>p.findOne.exception),m=(0,o.P1)(u,p=>p.findOne.isLoading),y=(0,o.P1)(u,p=>p.findOne.response),F=(0,o.P1)(u,p=>p.update.updateRequestReportsDto),P=(0,o.P1)(u,p=>p.update.id),Y=(0,o.P1)(u,p=>p.update.exception),J=(0,o.P1)(u,p=>p.update.isLoading),$=(0,o.P1)(u,p=>p.update.response);var b=i(2569),S=i(4650);let w=(()=>{class p{constructor(A){this.store=A,this.createDto$=this.store.select(E),this.createException$=this.store.select(s),this.createIsLoading$=this.store.select(l),this.createResponse$=this.store.select(h),this.findAllPagination$=this.store.select(e),this.findAllException$=this.store.select(C),this.findAllIsLoading$=this.store.select(q),this.findAllResponse$=this.store.select(x),this.findOneId$=this.store.select(Z),this.findOneException$=this.store.select(U),this.findOneIsLoading$=this.store.select(m),this.findOneResponse$=this.store.select(y),this.updateDto$=this.store.select(F),this.updateId$=this.store.select(P),this.updateException$=this.store.select(Y),this.updateIsLoading$=this.store.select(J),this.updateResponse$=this.store.select($)}create(A){this.store.dispatch((0,b.Gl)({payload:A}))}findAll(A){this.store.dispatch((0,b.A4)({payload:A}))}findOne(A){this.store.dispatch((0,b.gb)({payload:A}))}update(A,M){this.store.dispatch((0,b.VT)({id:A,payload:M}))}}return p.\u0275fac=function(A){return new(A||p)(S.LFG(o.yh))},p.\u0275prov=S.Yz7({token:p,factory:p.\u0275fac}),p})()},9040:(Q,v,i)=>{i.r(v),i.d(v,{RequestReportsModule:()=>gt});var o=i(6895),d=i(6582),R=i(7155),u=i(8739),E=i(6308),s=i(4006),l=i(5412),h=i(3829),e=i(4650),C=i(6143),q=i(9549),x=i(4144),Z=i(7392),U=i(4859),m=i(1948);function y(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo es requerida. "),e.qZA())}function F(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA())}function P(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,y,3,0,"span",12),e.YNc(2,F,3,0,"span",12),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_num.errors?null:r.reqR_num.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.reqR_num.errors?null:r.reqR_num.errors.maxlength)}}function Y(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo es requerida. "),e.qZA())}function J(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA())}function $(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo solo debe de tener cadenas de texto. "),e.qZA())}function b(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,Y,3,0,"span",12),e.YNc(2,J,3,0,"span",12),e.YNc(3,$,3,0,"span",12),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_petitioner.errors?null:r.reqR_petitioner.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.reqR_petitioner.errors?null:r.reqR_petitioner.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==r.reqR_petitioner.errors?null:r.reqR_petitioner.errors.pattern)}}function S(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo es requerida. "),e.qZA())}function w(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA())}function p(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo solo debe de tener cadenas de texto. "),e.qZA())}function z(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,S,3,0,"span",12),e.YNc(2,w,3,0,"span",12),e.YNc(3,p,3,0,"span",12),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_addressee.errors?null:r.reqR_addressee.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.reqR_addressee.errors?null:r.reqR_addressee.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==r.reqR_addressee.errors?null:r.reqR_addressee.errors.pattern)}}function A(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo es requerida. "),e.qZA())}function M(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA())}function ee(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo solo debe de tener cadenas de texto. "),e.qZA())}function te(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,A,3,0,"span",12),e.YNc(2,M,3,0,"span",12),e.YNc(3,ee,3,0,"span",12),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_abstract.errors?null:r.reqR_abstract.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.reqR_abstract.errors?null:r.reqR_abstract.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==r.reqR_abstract.errors?null:r.reqR_abstract.errors.pattern)}}function re(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",25),e._uU(2," El campo es requerida. "),e.qZA())}function ne(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,re,3,0,"span",12),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_management.errors?null:r.reqR_management.errors.required)}}function oe(t,n){1&t&&(e.TgZ(0,"button",26),e._uU(1,"Guardar"),e.qZA())}function ae(t,n){1&t&&(e.TgZ(0,"button",27),e._uU(1,"Guardando..."),e.qZA())}let se=(()=>{class t{constructor(r,a){this.RequestReportsAdapter=r,this.requestReportsFacade=a,this.errorMatcher=new h.U,this.formUpdate=new s.cw({}),this.updateIsLoading$=a.updateIsLoading$}ngOnInit(){this.initFormUpdate()}initFormUpdate(){this.formUpdate=new s.cw({reqR_num:new s.NI(this.RequestReportsAdapter.reqR_num,[s.kI.required]),reqR_petitioner:new s.NI(this.RequestReportsAdapter.reqR_petitioner,[s.kI.required]),reqR_addressee:new s.NI(this.RequestReportsAdapter.reqR_addressee,[s.kI.required]),reqR_abstract:new s.NI(this.RequestReportsAdapter.reqR_abstract,[s.kI.required]),reqR_Visibility:new s.NI(this.RequestReportsAdapter.reqR_Visibility,[s.kI.required]),reqR_management:new s.NI(this.RequestReportsAdapter.reqR_management,[s.kI.required])})}get reqR_num(){return this.formUpdate.get("reqR_num")}get reqR_petitioner(){return this.formUpdate.get("reqR_petitioner")}get reqR_addressee(){return this.formUpdate.get("reqR_addressee")}get reqR_abstract(){return this.formUpdate.get("reqR_abstract")}get reqR_Visibility(){return this.formUpdate.get("reqR_Visibility")}get reqR_management(){return this.formUpdate.get("reqR_management")}update(){if(this.formUpdate.invalid)return;const r={reqR_num:this.reqR_num.value,reqR_petitioner:this.reqR_petitioner.value,reqR_addressee:this.reqR_addressee.value,reqR_abstract:this.reqR_abstract.value,reqR_Visibility:this.reqR_Visibility.value,reqR_management:this.reqR_management.value.toString()};this.requestReportsFacade.update(this.RequestReportsAdapter.reqR_id,r)}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(l.WI),e.Y36(C.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["z-request-reports-update"]],decls:66,vars:16,consts:[[1,"dialogContainer"],[1,"dialogContainer__header"],["mat-dialog-title",""],["mat-icon-button","","mat-dialog-close",""],[1,"material-symbols-outlined"],["novalidate","novalidate","autocomplete","off",3,"formGroup","ngSubmit"],["mat-dialog-content",""],[1,"row"],["appearance","outline",1,"col-lg-12"],["matInput","","maxlength","100","formControlName","reqR_num","placeholder","Numero Reporte"],["align","start"],["align","end"],[4,"ngIf"],["matInput","","maxlength","100","formControlName","reqR_petitioner","placeholder","El remitente"],["matInput","","maxlength","100","formControlName","reqR_addressee","placeholder","El destinatario"],["matInput","","maxlength","100","formControlName","reqR_abstract","placeholder","Numero Reporte"],[1,"z-container-raddio-button"],[1,"z-label"],["formControlName","reqR_Visibility",1,"z-radio-group"],["value","P\xfablico",1,"z-radio-button"],["value","Privado",1,"z-radio-button"],["matInput","","type","number","formControlName","reqR_management","placeholder","Gestion"],["mat-button","","mat-dialog-close",""],["mat-button","",4,"ngIf"],["mat-button","","disabled","",4,"ngIf"],[1,"fas","fa-exclamation-circle","mr-1"],["mat-button",""],["mat-button","","disabled",""]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"Actualizar Peticion e Informe"),e.qZA(),e.TgZ(4,"button",3)(5,"mat-icon",4),e._uU(6,"close"),e.qZA()()(),e.TgZ(7,"form",5),e.NdJ("ngSubmit",function(){return a.update()}),e.TgZ(8,"div",6)(9,"div",7)(10,"mat-form-field",8)(11,"mat-label"),e._uU(12,"Numero Reporte"),e.qZA(),e._UZ(13,"input",9),e.TgZ(14,"mat-hint",10),e._uU(15,"El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA(),e.TgZ(16,"mat-hint",11),e._uU(17),e.qZA(),e.YNc(18,P,3,2,"mat-error",12),e.qZA(),e.TgZ(19,"mat-form-field",8)(20,"mat-label"),e._uU(21,"Remitente"),e.qZA(),e._UZ(22,"input",13),e.TgZ(23,"mat-hint",10),e._uU(24,"El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA(),e.TgZ(25,"mat-hint",11),e._uU(26),e.qZA(),e.YNc(27,b,4,3,"mat-error",12),e.qZA(),e.TgZ(28,"mat-form-field",8)(29,"mat-label"),e._uU(30,"El destinatario"),e.qZA(),e._UZ(31,"input",14),e.TgZ(32,"mat-hint",10),e._uU(33,"El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA(),e.TgZ(34,"mat-hint",11),e._uU(35),e.qZA(),e.YNc(36,z,4,3,"mat-error",12),e.qZA(),e.TgZ(37,"mat-form-field",8)(38,"mat-label"),e._uU(39,"Descripcion"),e.qZA(),e._UZ(40,"input",15),e.TgZ(41,"mat-hint",10),e._uU(42,"El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA(),e.TgZ(43,"mat-hint",11),e._uU(44),e.qZA(),e.YNc(45,te,4,3,"mat-error",12),e.qZA(),e.TgZ(46,"div",16)(47,"label",17),e._uU(48,"Seleccionar la visibilidad"),e.qZA(),e.TgZ(49,"mat-radio-group",18)(50,"mat-radio-button",19),e._uU(51," P\xfablico "),e.qZA(),e.TgZ(52,"mat-radio-button",20),e._uU(53," Privado "),e.qZA()()(),e.TgZ(54,"mat-form-field",8)(55,"mat-label"),e._uU(56,"Gestion"),e.qZA(),e._UZ(57,"input",21),e.YNc(58,ne,2,1,"mat-error",12),e.qZA()()(),e.TgZ(59,"mat-dialog-actions",11)(60,"button",22),e._uU(61,"Cancelar"),e.qZA(),e.YNc(62,oe,2,0,"button",23),e.ALo(63,"async"),e.YNc(64,ae,2,0,"button",24),e.ALo(65,"async"),e.qZA()()()),2&r&&(e.xp6(7),e.Q6J("formGroup",a.formUpdate),e.xp6(10),e.hij("",a.reqR_num.value.length," / 100"),e.xp6(1),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_num,null)),e.xp6(8),e.hij("",a.reqR_petitioner.value.length," / 100"),e.xp6(1),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_petitioner,null)),e.xp6(8),e.hij("",a.reqR_addressee.value.length," / 100"),e.xp6(1),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_addressee,null)),e.xp6(8),e.hij("",a.reqR_abstract.value.length," / 100"),e.xp6(1),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_abstract,null)),e.xp6(13),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_management,null)),e.xp6(4),e.Q6J("ngIf",!e.lcZ(63,12,a.updateIsLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(65,14,a.updateIsLoading$)))},dependencies:[o.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.nD,s.sg,s.u,l.ZT,l.uh,l.xY,l.H8,q.TO,q.KE,q.bx,q.hX,x.Nt,Z.Hw,U.lW,m.VQ,m.U0,o.Ov]}),t})();var ie=i(7782);function pe(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo es requerida. "),e.qZA())}function le(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA())}function ue(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,pe,3,0,"span",13),e.YNc(2,le,3,0,"span",13),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_num.errors?null:r.reqR_num.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.reqR_num.errors?null:r.reqR_num.errors.maxlength)}}function ce(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo es requerida. "),e.qZA())}function de(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA())}function me(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo solo debe de tener cadenas de texto. "),e.qZA())}function _e(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,ce,3,0,"span",13),e.YNc(2,de,3,0,"span",13),e.YNc(3,me,3,0,"span",13),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_petitioner.errors?null:r.reqR_petitioner.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.reqR_petitioner.errors?null:r.reqR_petitioner.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==r.reqR_petitioner.errors?null:r.reqR_petitioner.errors.pattern)}}function Re(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo es requerida. "),e.qZA())}function qe(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA())}function fe(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo solo debe de tener cadenas de texto. "),e.qZA())}function ge(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,Re,3,0,"span",13),e.YNc(2,qe,3,0,"span",13),e.YNc(3,fe,3,0,"span",13),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_addressee.errors?null:r.reqR_addressee.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.reqR_addressee.errors?null:r.reqR_addressee.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==r.reqR_addressee.errors?null:r.reqR_addressee.errors.pattern)}}function he(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo es requerida. "),e.qZA())}function Te(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA())}function Ee(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo solo debe de tener cadenas de texto. "),e.qZA())}function Ze(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,he,3,0,"span",13),e.YNc(2,Te,3,0,"span",13),e.YNc(3,Ee,3,0,"span",13),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_abstract.errors?null:r.reqR_abstract.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.reqR_abstract.errors?null:r.reqR_abstract.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==r.reqR_abstract.errors?null:r.reqR_abstract.errors.pattern)}}function Ue(t,n){1&t&&(e.TgZ(0,"span"),e._UZ(1,"i",26),e._uU(2," El campo es requerida. "),e.qZA())}function Ae(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,Ue,3,0,"span",13),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",null==r.reqR_management.errors?null:r.reqR_management.errors.required)}}function Ce(t,n){1&t&&(e.TgZ(0,"button",27),e._uU(1,"Guardar"),e.qZA())}function xe(t,n){1&t&&(e.TgZ(0,"button",28),e._uU(1,"Guardando..."),e.qZA())}let Ie=(()=>{class t{constructor(r){this.requestReportsFacade=r,this.errorMatcher=new h.U,this.formCreate=new s.cw({}),this.isValidImage=!1,this.createIsLoading$=r.createIsLoading$}ngOnInit(){this.initFormCreate()}initFormCreate(){this.formCreate=new s.cw({reqR_num:new s.NI("",[s.kI.required]),reqR_petitioner:new s.NI("",[s.kI.required,s.kI.pattern("[a-zA-Z ]{1,100}")]),reqR_addressee:new s.NI("",[s.kI.required,s.kI.pattern("[a-zA-Z ]{1,100}")]),reqR_abstract:new s.NI("",[s.kI.required,s.kI.pattern("[a-zA-Z0-9 ]{1,}")]),reqR_Visibility:new s.NI("",[s.kI.required]),reqR_management:new s.NI("",[s.kI.required])})}get reqR_num(){return this.formCreate.get("reqR_num")}get reqR_petitioner(){return this.formCreate.get("reqR_petitioner")}get reqR_addressee(){return this.formCreate.get("reqR_addressee")}get reqR_abstract(){return this.formCreate.get("reqR_abstract")}get reqR_Visibility(){return this.formCreate.get("reqR_Visibility")}get reqR_management(){return this.formCreate.get("reqR_management")}create(){if(console.log(this.formCreate),this.formCreate.invalid)return;let r=new FormData;r.append("reqR_num",this.reqR_num.value),r.append("reqR_petitioner",this.reqR_petitioner.value),r.append("reqR_addressee",this.reqR_addressee.value),r.append("reqR_abstract",this.reqR_abstract.value),r.append("reqR_Visibility",this.reqR_Visibility.value),r.append("reqR_management",this.reqR_management.value),r.append("reqRFile",this.file),this.requestReportsFacade.create(r)}handleUpload(r){this.isValidImage=r.isValid,this.file=r.file}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(C.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["z-request-reports-create"]],decls:67,vars:16,consts:[[1,"dialogContainer"],[1,"dialogContainer__header"],["mat-dialog-title",""],["mat-icon-button","","mat-dialog-close",""],[1,"material-symbols-outlined"],["novalidate","novalidate","autocomplete","off",3,"formGroup","ngSubmit"],["mat-dialog-content",""],[1,"row"],[3,"onUpload"],["appearance","outline",1,"col-lg-12"],["matInput","","maxlength","100","formControlName","reqR_num","placeholder","Numero Reporte"],["align","start"],["align","end"],[4,"ngIf"],["matInput","","maxlength","100","formControlName","reqR_petitioner","placeholder","El remitente"],["matInput","","maxlength","100","formControlName","reqR_addressee","placeholder","El destinatario"],["matInput","","maxlength","100","formControlName","reqR_abstract","placeholder","Numero Reporte"],[1,"z-container-raddio-button"],[1,"z-label"],["formControlName","reqR_Visibility",1,"z-radio-group"],["value","P\xfablico",1,"z-radio-button"],["value","Privado",1,"z-radio-button"],["matInput","","type","number","formControlName","reqR_management","placeholder","Gestion"],["mat-button","","mat-dialog-close",""],["mat-button","",4,"ngIf"],["mat-button","","disabled","",4,"ngIf"],[1,"fas","fa-exclamation-circle","mr-1"],["mat-button",""],["mat-button","","disabled",""]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"Crear Request Reports"),e.qZA(),e.TgZ(4,"button",3)(5,"mat-icon",4),e._uU(6,"close"),e.qZA()()(),e.TgZ(7,"form",5),e.NdJ("ngSubmit",function(){return a.create()}),e.TgZ(8,"div",6)(9,"div",7)(10,"z-upload-input-type-document",8),e.NdJ("onUpload",function(_){return a.handleUpload(_)}),e.qZA(),e.TgZ(11,"mat-form-field",9)(12,"mat-label"),e._uU(13,"Numero Reporte"),e.qZA(),e._UZ(14,"input",10),e.TgZ(15,"mat-hint",11),e._uU(16,"El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA(),e.TgZ(17,"mat-hint",12),e._uU(18),e.qZA(),e.YNc(19,ue,3,2,"mat-error",13),e.qZA(),e.TgZ(20,"mat-form-field",9)(21,"mat-label"),e._uU(22,"Remitente"),e.qZA(),e._UZ(23,"input",14),e.TgZ(24,"mat-hint",11),e._uU(25,"El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA(),e.TgZ(26,"mat-hint",12),e._uU(27),e.qZA(),e.YNc(28,_e,4,3,"mat-error",13),e.qZA(),e.TgZ(29,"mat-form-field",9)(30,"mat-label"),e._uU(31,"El destinatario"),e.qZA(),e._UZ(32,"input",15),e.TgZ(33,"mat-hint",11),e._uU(34,"El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA(),e.TgZ(35,"mat-hint",12),e._uU(36),e.qZA(),e.YNc(37,ge,4,3,"mat-error",13),e.qZA(),e.TgZ(38,"mat-form-field",9)(39,"mat-label"),e._uU(40,"Descripcion"),e.qZA(),e._UZ(41,"input",16),e.TgZ(42,"mat-hint",11),e._uU(43,"El campo debe tener como m\xe1ximo 100 caracteres. "),e.qZA(),e.TgZ(44,"mat-hint",12),e._uU(45),e.qZA(),e.YNc(46,Ze,4,3,"mat-error",13),e.qZA(),e.TgZ(47,"div",17)(48,"label",18),e._uU(49,"Seleccionar la visibilidad"),e.qZA(),e.TgZ(50,"mat-radio-group",19)(51,"mat-radio-button",20),e._uU(52," P\xfablico "),e.qZA(),e.TgZ(53,"mat-radio-button",21),e._uU(54," Privado "),e.qZA()()(),e.TgZ(55,"mat-form-field",9)(56,"mat-label"),e._uU(57,"Gestion"),e.qZA(),e._UZ(58,"input",22),e.YNc(59,Ae,2,1,"mat-error",13),e.qZA()()(),e.TgZ(60,"mat-dialog-actions",12)(61,"button",23),e._uU(62,"Cancelar"),e.qZA(),e.YNc(63,Ce,2,0,"button",24),e.ALo(64,"async"),e.YNc(65,xe,2,0,"button",25),e.ALo(66,"async"),e.qZA()()()),2&r&&(e.xp6(7),e.Q6J("formGroup",a.formCreate),e.xp6(11),e.hij("",a.reqR_num.value.length," / 100"),e.xp6(1),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_num,null)),e.xp6(8),e.hij("",a.reqR_petitioner.value.length," / 100"),e.xp6(1),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_petitioner,null)),e.xp6(8),e.hij("",a.reqR_addressee.value.length," / 100"),e.xp6(1),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_addressee,null)),e.xp6(8),e.hij("",a.reqR_abstract.value.length," / 100"),e.xp6(1),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_abstract,null)),e.xp6(13),e.Q6J("ngIf",a.errorMatcher.isErrorState(a.reqR_management,null)),e.xp6(4),e.Q6J("ngIf",!e.lcZ(64,12,a.createIsLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(66,14,a.createIsLoading$)))},dependencies:[o.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.nD,s.sg,s.u,l.ZT,l.uh,l.xY,l.H8,q.TO,q.KE,q.bx,q.hX,x.Nt,Z.Hw,U.lW,ie.M,m.VQ,m.U0,o.Ov]}),t})();var V=i(1572),B=i(266),ve=i(6303);function be(t,n){1&t&&(e.TgZ(0,"div",15)(1,"div",16),e._UZ(2,"mat-spinner"),e.qZA()())}function Ne(t,n){1&t&&(e.TgZ(0,"th",35),e._uU(1,"No"),e.qZA())}function Se(t,n){if(1&t&&(e.TgZ(0,"td",36),e._uU(1),e.qZA()),2&t){const r=n.index;e.xp6(1),e.Oqu(r+1)}}function De(t,n){1&t&&(e.TgZ(0,"th",37),e._uU(1,"Num"),e.qZA())}function Le(t,n){if(1&t&&(e.TgZ(0,"td",36),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.reqR_num)}}function Oe(t,n){1&t&&(e.TgZ(0,"th",37),e._uU(1,"Remitente"),e.qZA())}function Qe(t,n){if(1&t&&(e.TgZ(0,"td",36),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.reqR_petitioner)}}function ye(t,n){1&t&&(e.TgZ(0,"th",37),e._uU(1,"Destinatario"),e.qZA())}function Fe(t,n){if(1&t&&(e.TgZ(0,"td",36),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.reqR_addressee)}}function Pe(t,n){1&t&&(e.TgZ(0,"th",37),e._uU(1,"Descripcion"),e.qZA())}function Ye(t,n){if(1&t&&(e.TgZ(0,"td",36),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.reqR_abstract)}}function Je(t,n){1&t&&(e.TgZ(0,"th",37),e._uU(1,"Gestion"),e.qZA())}function $e(t,n){if(1&t&&(e.TgZ(0,"td",36),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.reqR_management)}}function we(t,n){1&t&&(e.TgZ(0,"th",37),e._uU(1,"Visibilidad"),e.qZA())}function ze(t,n){if(1&t&&(e.TgZ(0,"td",36),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.reqR_Visibility)}}function Me(t,n){1&t&&(e.TgZ(0,"th",37),e._uU(1,"Usuario"),e.qZA())}function Ve(t,n){if(1&t&&(e.TgZ(0,"td",36),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(r.user.FullName)}}function Be(t,n){1&t&&(e.TgZ(0,"th",37),e._uU(1,"Fecha de creaci\xf3n"),e.qZA())}function Ge(t,n){if(1&t&&(e.TgZ(0,"td",36),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const r=n.$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,r.reqR_create,"medium"))}}function He(t,n){1&t&&(e.TgZ(0,"th",37),e._uU(1,"Estado"),e.qZA())}function Ke(t,n){1&t&&e._UZ(0,"div",40)}function ke(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"span",41),e.NdJ("click",function(){e.CHM(r);const g=e.oxw().$implicit,_=e.oxw(2);return e.KtG(_.changeState(g))}),e._UZ(1,"mat-icon",42),e._uU(2),e.qZA()}if(2&t){const r=e.oxw().$implicit;e.Q6J("ngClass",r.reqR_state?"z-badge-success":"z-badge-danger"),e.xp6(2),e.hij(" ",r.reqR_state?"Activo":"Inactivo"," ")}}function We(t,n){if(1&t&&(e.TgZ(0,"td",36),e.YNc(1,Ke,1,0,"div",38),e.ALo(2,"async"),e.YNc(3,ke,3,2,"span",39),e.ALo(4,"async"),e.qZA()),2&t){const r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.lcZ(2,2,r.updateIsLoading$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(4,4,r.updateIsLoading$))}}function je(t,n){1&t&&(e.TgZ(0,"th",35),e._uU(1,"Acciones"),e.qZA())}function Xe(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"td",36)(1,"button",43),e.NdJ("click",function(){const _=e.CHM(r).$implicit,f=e.oxw(2);return e.KtG(f.openRequestReportUpdate(_))}),e._UZ(2,"mat-icon",44),e.qZA(),e.TgZ(3,"a",45),e.ALo(4,"staticFile"),e._UZ(5,"mat-icon",46),e.qZA()()}if(2&t){const r=n.$implicit;e.xp6(3),e.s9C("href",e.lcZ(4,1,r.reqRFile),e.LSH)}}function et(t,n){1&t&&e._UZ(0,"tr",47)}function tt(t,n){1&t&&e._UZ(0,"tr",48)}function rt(t,n){if(1&t&&(e.TgZ(0,"div",17)(1,"table",18),e.ynx(2,19),e.YNc(3,Ne,2,0,"th",20),e.YNc(4,Se,2,1,"td",21),e.BQk(),e.ynx(5,22),e.YNc(6,De,2,0,"th",23),e.YNc(7,Le,2,1,"td",21),e.BQk(),e.ynx(8,24),e.YNc(9,Oe,2,0,"th",23),e.YNc(10,Qe,2,1,"td",21),e.BQk(),e.ynx(11,25),e.YNc(12,ye,2,0,"th",23),e.YNc(13,Fe,2,1,"td",21),e.BQk(),e.ynx(14,26),e.YNc(15,Pe,2,0,"th",23),e.YNc(16,Ye,2,1,"td",21),e.BQk(),e.ynx(17,27),e.YNc(18,Je,2,0,"th",23),e.YNc(19,$e,2,1,"td",21),e.BQk(),e.ynx(20,28),e.YNc(21,we,2,0,"th",23),e.YNc(22,ze,2,1,"td",21),e.BQk(),e.ynx(23,29),e.YNc(24,Me,2,0,"th",23),e.YNc(25,Ve,2,1,"td",21),e.BQk(),e.ynx(26,30),e.YNc(27,Be,2,0,"th",23),e.YNc(28,Ge,3,4,"td",21),e.BQk(),e.ynx(29,31),e.YNc(30,He,2,0,"th",23),e.YNc(31,We,5,6,"td",21),e.BQk(),e.ynx(32,32),e.YNc(33,je,2,0,"th",20),e.YNc(34,Xe,6,3,"td",21),e.BQk(),e.YNc(35,et,1,0,"tr",33),e.YNc(36,tt,1,0,"tr",34),e.qZA()()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("dataSource",r.dataSource),e.xp6(34),e.Q6J("matHeaderRowDef",r.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",r.displayedColumns)}}const nt=function(){return[5,10,25,100]},ot=[{path:"",component:(()=>{class t{constructor(r,a){this.requestReportsFacade=r,this.matDialog=a,this.subscriptors=[],this.displayedColumns=["reqR_id","reqR_num","reqR_petitioner","reqR_addressee","reqR_abstract","reqR_management","reqR_Visibility","reqR_create","IdUser","reqR_state","z-actions"],this.pagination={limit:1e5,offset:0,filter:"ALL"},this.findAllResponse$=this.requestReportsFacade.findAllResponse$,this.findAllIsLoading$=this.requestReportsFacade.findAllIsLoading$,this.updateIsLoading$=this.requestReportsFacade.updateIsLoading$}ngOnInit(){this.requestReportsFacade.findAll(this.pagination)}ngAfterViewInit(){this.findAll()}findAll(){this.subscriptors.push(this.findAllResponse$.subscribe({next:r=>{console.log(r),setTimeout(()=>{this.dataSource=new R.by(r?.data),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort},10)}}))}applyFilter(r){this.dataSource.filter=r.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}changeState(r){this.requestReportsFacade.update(r.reqR_id,{reqR_state:!r.reqR_state}),setTimeout(()=>{this.requestReportsFacade.findAll(this.pagination),this.findAll()},100)}openRequestReportCreate(){this.matDialog.open(Ie,{width:"500px",maxWidth:"80%",maxHeight:"100%"}).afterClosed().subscribe(()=>this.requestReportsFacade.findAll(this.pagination))}openRequestReportUpdate(r){this.matDialog.open(se,{width:"500px",maxWidth:"80%",maxHeight:"100%",data:r}).afterClosed().subscribe(()=>this.requestReportsFacade.findAll(this.pagination))}ngOnDestroy(){this.subscriptors.forEach(r=>r.unsubscribe()),this.subscriptors=[]}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(C.J),e.Y36(l.uw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["z-request-reports"]],viewQuery:function(r,a){if(1&r&&(e.Gf(u.NW,5),e.Gf(E.YE,5)),2&r){let g;e.iGM(g=e.CRH())&&(a.paginator=g.first),e.iGM(g=e.CRH())&&(a.sort=g.first)}},decls:22,vars:9,consts:[[1,"z-breadcrumb"],[1,"row"],[1,"col-12"],[1,"col-8"],[1,"z-search"],["matInput","","placeholder","Buscar...",3,"keyup"],["mat-icon-button",""],["matPrefix",""],[1,"col-4","d-flex","justify-content-end","align-items-center"],["type","button",1,"z-btn","mb-3",3,"click"],["fontIcon","add"],[1,"z-container"],["class","z-container-loading",4,"ngIf"],["class","z-table-container",4,"ngIf"],[3,"pageSizeOptions","pageSize"],[1,"z-container-loading"],[1,"z-loading-shade"],[1,"z-table-container"],["mat-table","","matSort","",1,"z-table",3,"dataSource"],["matColumnDef","reqR_id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","reqR_num"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","reqR_petitioner"],["matColumnDef","reqR_addressee"],["matColumnDef","reqR_abstract"],["matColumnDef","reqR_management"],["matColumnDef","reqR_Visibility"],["matColumnDef","IdUser"],["matColumnDef","reqR_create"],["matColumnDef","reqR_state"],["matColumnDef","z-actions","stickyEnd",""],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],["class","spinner-border","role","status",4,"ngIf"],["class","z-badge",3,"ngClass","click",4,"ngIf"],["role","status",1,"spinner-border"],[1,"z-badge",3,"ngClass","click"],["fontIcon","check"],["matTooltip","Editar","mat-icon-button","","matTooltipClass","z-tooltip",1,"z-btn-action",3,"click"],["fontIcon","edit",1,"material-symbols-outlined"],["target","_blank","matTooltip","Visualizar","mat-icon-button","","matTooltipClass","z-tooltip",1,"z-btn-action",3,"href"],["fontIcon","visibility",1,"material-symbols-outlined"],["mat-header-row",""],["mat-row",""]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),e._uU(4,"Administrar petici\xf3n de informe oral"),e.qZA()()()(),e.TgZ(5,"div",1)(6,"div",3)(7,"div",4)(8,"input",5),e.NdJ("keyup",function(_){return a.applyFilter(_)}),e.qZA(),e.TgZ(9,"button",6)(10,"mat-icon",7),e._uU(11,"search"),e.qZA()()()(),e.TgZ(12,"div",8)(13,"button",9),e.NdJ("click",function(){return a.openRequestReportCreate()}),e._UZ(14,"mat-icon",10),e._uU(15," Crear "),e.qZA()()(),e.TgZ(16,"div",11),e.YNc(17,be,3,0,"div",12),e.ALo(18,"async"),e.YNc(19,rt,37,3,"div",13),e.ALo(20,"async"),e._UZ(21,"mat-paginator",14),e.qZA()),2&r&&(e.xp6(17),e.Q6J("ngIf",e.lcZ(18,4,a.findAllIsLoading$)),e.xp6(2),e.Q6J("ngIf",null!==e.lcZ(20,6,a.findAllResponse$)),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(8,nt))("pageSize",12))},dependencies:[o.mk,o.O5,q.qo,x.Nt,Z.Hw,V.Ou,U.lW,U.zs,B.gM,E.YE,E.nU,R.BZ,R.fO,R.as,R.w1,R.Dz,R.nj,R.ge,R.ev,R.XQ,R.Gk,u.NW,o.Ov,o.uU,ve.q]}),t})()}];let at=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(ot),d.Bz]}),t})();var T=i(9653),I=i(493),st=i(7009),it=i(7331),N=i(4026),c=i(2569);const lt=(0,T.Lq)({findAll:{response:null,exception:null,isLoading:!1,pagination:null},create:{createRequestReportsDto:null,exception:null,isLoading:!1,response:null},findOne:{exception:null,isLoading:!1,response:null,id:null},update:{updateRequestReportsDto:null,exception:null,id:void 0,isLoading:!1,response:null}},(0,T.on)(c.Gl,(t,{payload:n})=>({...t,create:{createRequestReportsDto:n,exception:null,isLoading:!0,response:null}})),(0,T.on)(c.Sw,(t,{payload:n})=>({...t,create:{createRequestReportsDto:null,exception:null,isLoading:!1,response:n}})),(0,T.on)(c._f,(t,{payload:n})=>({...t,create:{createRequestReportsDto:null,exception:n,isLoading:!1,response:null}})),(0,T.on)(c.A4,(t,{payload:n})=>({...t,findAll:{response:null,exception:null,isLoading:!0,pagination:n}})),(0,T.on)(c.kw,(t,{payload:n})=>({...t,findAll:{response:n,exception:null,isLoading:!1,pagination:null}})),(0,T.on)(c.V$,(t,{payload:n})=>({...t,findAll:{response:null,exception:n,isLoading:!1,pagination:null}})),(0,T.on)(c.gb,(t,{payload:n})=>({...t,findOne:{exception:null,isLoading:!0,response:null,id:n}})),(0,T.on)(c.TW,(t,{payload:n})=>({...t,findOne:{exception:null,isLoading:!1,response:n,id:null}})),(0,T.on)(c._K,(t,{payload:n})=>({...t,findOne:{exception:n,isLoading:!1,response:null,id:null}})),(0,T.on)(c.VT,(t,{payload:n,id:r})=>({...t,update:{updateRequestReportsDto:n,exception:null,id:r,isLoading:!0,response:null}})),(0,T.on)(c.Lh,(t,{payload:n})=>({...t,update:{updateRequestReportsDto:null,exception:null,id:void 0,isLoading:!1,response:n}})),(0,T.on)(c.Wg,(t,{payload:n})=>({...t,update:{updateRequestReportsDto:null,exception:n,id:void 0,isLoading:!1,response:null}})));function ut(t,n){return lt(t,n)}var G=i(3900),D=i(4004),L=i(262),H=i(5577),O=i(9646),ct=i(9019),dt=i(529);let K=(()=>{class t{constructor(r){this.httpClient=r,this.ZPRequestReports=ct.N.zephyrus.requestReports}create(r){return this.httpClient.post(this.ZPRequestReports,r)}findAll(r){const{limit:a,offset:g,filter:_}=r;return this.httpClient.get(`${this.ZPRequestReports}?limit=${a}&offset=${g}&filter=${_}`)}findOne(r){return this.httpClient.get(`${this.ZPRequestReports}/${r}`)}update(r,a){return this.httpClient.patch(`${this.ZPRequestReports}/${r}`,a)}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(dt.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var k=i(3208);let mt=(()=>{class t{constructor(r,a,g){this.actions$=r,this.requestReportsService=a,this.matSnackBarService=g,this.create$=(0,I.GW)(()=>this.actions$.pipe((0,I.l4)(c.Gl),(0,G.w)(_=>this.requestReportsService.create(_.payload).pipe((0,D.U)(f=>(this.matSnackBarService.open("success",N.MB.success),c.Sw({payload:f}))),(0,L.K)(f=>(this.matSnackBarService.open("error",N.MB.error),(0,O.of)(c._f({payload:f})))))))),this.findAll$=(0,I.GW)(()=>this.actions$.pipe((0,I.l4)(c.A4),(0,H.z)(_=>this.requestReportsService.findAll(_.payload).pipe((0,D.U)(f=>c.kw({payload:f})),(0,L.K)(f=>(0,O.of)(c.V$({payload:f}))))))),this.findOne$=(0,I.GW)(()=>this.actions$.pipe((0,I.l4)(c.gb),(0,H.z)(_=>this.requestReportsService.findOne(_.payload).pipe((0,D.U)(f=>c.TW({payload:f})),(0,L.K)(f=>(0,O.of)(c._K({payload:f}))))))),this.update$=(0,I.GW)(()=>this.actions$.pipe((0,I.l4)(c.VT),(0,G.w)(_=>this.requestReportsService.update(_.id||"",_.payload).pipe((0,D.U)(f=>(this.matSnackBarService.open("success",N.MB.success),c.Lh({payload:f}))),(0,L.K)(f=>(this.matSnackBarService.open("error",N.MB.error),(0,O.of)(c.Wg({payload:f}))))))))}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(I.eX),e.LFG(K),e.LFG(k.s))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var W=i(4385),j=i(9602),X=i(3238),_t=i(9552);let Rt=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,s.UX,l.Is,q.lN,x.c,Z.Ps,U.ot,W.LD,j.FA,X.XK,_t.b,m.Fk]}),t})(),qt=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,s.UX,l.Is,q.lN,x.c,Z.Ps,U.ot,W.LD,j.FA,X.XK,m.Fk]}),t})();var ft=i(9318);let gt=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[K,k.s,C.J],imports:[o.ez,at,T.Aw.forFeature(N.CN.requestReports,ut),I.sQ.forFeature([mt]),st.ZX,s.UX,x.c,Z.Ps,V.Cq,it.Hi,U.ot,B.AV,E.JX,R.p0,u.TU,l.Is,Rt,qt,ft.J,T.Aw,I.sQ]}),t})()},2569:(Q,v,i)=>{i.d(v,{A4:()=>s,Gl:()=>R,Lh:()=>Z,Sw:()=>u,TW:()=>C,V$:()=>h,VT:()=>x,Wg:()=>U,_K:()=>q,_f:()=>E,gb:()=>e,kw:()=>l});var o=i(9653),d=(()=>{return(m=d||(d={})).REQUESTREPORTS_CREATE_REQUESTED="[RequestReports] CREATE Requested",m.REQUESTREPORTS_CREATE_LOADED="[RequestReports] CREATE Loaded",m.REQUESTREPORTS_CREATE_FAILED="[RequestReports] CREATE Failed",m.REQUESTREPORTS_FIND_ALL_REQUESTED="[RequestReports] FIND ALL Requested",m.REQUESTREPORTS_FIND_ALL_LOADED="[RequestReports] FIND ALL Loaded",m.REQUESTREPORTS_FIND_ALL_FAILED="[RequestReports] FIND ALL Failed",m.REQUESTREPORTS_FIND_ONE_REQUESTED="[RequestReports] FIND ONE Requested",m.REQUESTREPORTS_FIND_ONE_LOADED="[RequestReports] FIND ONE Loaded",m.REQUESTREPORTS_FIND_ONE_FAILED="[RequestReports] FIND ONE Failed",m.REQUESTREPORTS_UPDATE_REQUESTED="[RequestReports] UPDATE Requested",m.REQUESTREPORTS_UPDATE_LOADED="[RequestReports] UPDATE Loaded",m.REQUESTREPORTS_UPDATE_FAILED="[RequestReports] UPDATE Failed",d;var m})();const R=(0,o.PH)(d.REQUESTREPORTS_CREATE_REQUESTED,(0,o.Ky)()),u=(0,o.PH)(d.REQUESTREPORTS_CREATE_LOADED,(0,o.Ky)()),E=(0,o.PH)(d.REQUESTREPORTS_CREATE_FAILED,(0,o.Ky)()),s=(0,o.PH)(d.REQUESTREPORTS_FIND_ALL_REQUESTED,(0,o.Ky)()),l=(0,o.PH)(d.REQUESTREPORTS_FIND_ALL_LOADED,(0,o.Ky)()),h=(0,o.PH)(d.REQUESTREPORTS_FIND_ALL_FAILED,(0,o.Ky)()),e=(0,o.PH)(d.REQUESTREPORTS_FIND_ONE_REQUESTED,(0,o.Ky)()),C=(0,o.PH)(d.REQUESTREPORTS_FIND_ONE_LOADED,(0,o.Ky)()),q=(0,o.PH)(d.REQUESTREPORTS_FIND_ONE_FAILED,(0,o.Ky)()),x=(0,o.PH)(d.REQUESTREPORTS_UPDATE_REQUESTED,(0,o.Ky)()),Z=(0,o.PH)(d.REQUESTREPORTS_UPDATE_LOADED,(0,o.Ky)()),U=(0,o.PH)(d.REQUESTREPORTS_UPDATE_FAILED,(0,o.Ky)())}}]);