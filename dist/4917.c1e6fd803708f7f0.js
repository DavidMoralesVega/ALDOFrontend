"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4917],{4917:(A,c,n)=>{n.r(c),n.d(c,{RequestReportOralModule:()=>O});var u=n(6895),d=n(6582),e=n(4650),R=n(6143),p=n(4333);function m(t,s){if(1&t&&(e.TgZ(0,"div",11),e._UZ(1,"img",12),e.TgZ(2,"div",13)(3,"h5",14),e._uU(4),e.qZA(),e.TgZ(5,"p",15),e._uU(6),e.qZA(),e.TgZ(7,"p",15),e._uU(8),e.qZA(),e.TgZ(9,"span"),e._uU(10),e.ALo(11,"date"),e.qZA()()()),2&t){const r=s.$implicit;e.xp6(4),e.Oqu(r.reqR_num),e.xp6(2),e.hij("Peticionario: ",r.reqR_petitioner,""),e.xp6(2),e.hij("Remitente: ",r.reqR_addressee,""),e.xp6(2),e.Oqu(e.xi3(11,4,r.reqR_create,"medium"))}}const f=function(t){return{itemsPerPage:10,currentPage:t}},g=[{path:"",component:(()=>{class t{constructor(r){this.requestReportsFacade=r,this.subscriptors=[],this.dataRequestReOral=[],this.pagination={limit:1e4,offset:0,filter:"ALL"},this.findAllResponse$=this.requestReportsFacade.findAllResponse$,this.findAllIsLoading$=this.requestReportsFacade.findAllIsLoading$}ngOnInit(){this.requestReportsFacade.findAll(this.pagination)}ngAfterViewInit(){this.findAll()}findAll(){this.subscriptors.push(this.findAllResponse$.subscribe({next:r=>{this.dataRequestReOral=r?.data.filter(o=>{if("P\xfablico"===o.reqR_Visibility&&!0===o.reqR_state)return o})}}))}buscarConvocatoria(r){this.findAll();let o=[];r=r.toLowerCase();for(let a=0;a<this.dataRequestReOral.length;a++){let l=this.dataRequestReOral[a];l.reqR_abstract.toLowerCase().indexOf(r)>=0&&o.push(l)}return this.dataRequestReOral=o,o}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(R.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["z-commission"]],decls:14,vars:6,consts:[[1,"container","my-5","py-5"],[1,"form-inline","my-2","my-lg-0"],["type","text","placeholder","Buscar por titulo",1,"form-control","mr-sm-2",3,"keyup"],["buscarTexto",""],["type","button",1,"btn","btn-outline-primary","my-2","my-sm-0",3,"click"],[1,"mb-10"],[1,"fw-bold","mb-5","text-center"],[1,"row"],["class","card col-lg-6 col-md-12 mb-4",4,"ngFor","ngForOf"],[1,"h-100","d-flex","justify-content-center","align-items-center"],["previousLabel","Anterior","nextLabel","Siguiente",3,"pageChange"],[1,"card","col-lg-6","col-md-12","mb-4"],["src","assets/brand/back.jpg","alt","Fissure in Sandstone",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(r,o){if(1&r){const a=e.EpF();e.TgZ(0,"div",0)(1,"form",1)(2,"input",2,3),e.NdJ("keyup",function(){e.CHM(a);const i=e.MAs(3);return e.KtG(o.buscarConvocatoria(i.value))}),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){e.CHM(a);const i=e.MAs(3);return e.KtG(o.buscarConvocatoria(i.value))}),e._uU(5," Buscar "),e.qZA()(),e.TgZ(6,"section",5)(7,"h2",6),e._uU(8,"Informes Orales"),e.qZA(),e.TgZ(9,"div",7),e.YNc(10,m,12,7,"div",8),e.ALo(11,"paginate"),e.qZA()(),e.TgZ(12,"div",9)(13,"pagination-controls",10),e.NdJ("pageChange",function(i){return o.page=i}),e.qZA()()()}2&r&&(e.xp6(10),e.Q6J("ngForOf",e.xi3(11,1,o.dataRequestReOral,e.VKq(4,f,o.page))))},dependencies:[u.sg,p.LS,u.uU,p._s]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(g),d.Bz]}),t})();var h=n(9040);let O=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[R.J],imports:[u.ez,q,h.RequestReportsModule,p.JX]}),t})()}}]);