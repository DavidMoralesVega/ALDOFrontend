"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7757],{7757:(v,d,i)=>{i.r(d),i.d(d,{ManageRecognitionModule:()=>A});var c=i(6895),u=i(6582),p=i(4026),n=i(4650),m=i(3390),l=i(4333);function f(t,a){if(1&t&&(n.TgZ(0,"div",16),n._UZ(1,"img",17),n.TgZ(2,"div",18)(3,"h5",19),n._uU(4),n.qZA(),n.TgZ(5,"p",20),n._uU(6),n.qZA(),n.TgZ(7,"span"),n._uU(8),n.ALo(9,"date"),n.qZA()()()),2&t){const e=a.$implicit;n.xp6(4),n.Oqu(e.RTitle),n.xp6(2),n.Oqu(e.RSummary),n.xp6(2),n.Oqu(n.xi3(9,3,e.RPublicationDate,"medium"))}}const h=function(t){return{itemsPerPage:10,currentPage:t}},R=[{path:"",component:(()=>{class t{constructor(e){this.recognitionFacade=e,this.ZListCardCommissions=p.tN,this.subscriptors=[],this.dataManageReg=[],this.pagination={limit:1e4,offset:0,filter:"ALL"},this.findAllResponse$=this.recognitionFacade.findAllResponse$,this.findAllIsLoading$=this.recognitionFacade.findAllIsLoading$}ngOnInit(){this.recognitionFacade.findAll(this.pagination)}ngAfterViewInit(){this.findAll()}findAll(){this.subscriptors.push(this.findAllResponse$.subscribe({next:e=>{this.dataManageReg=e?.data.filter(o=>{if("P\xfablico"===o.RVisibility&&!0===o.RState)return o})}}))}buscar(e){this.findAll();let o=[];e=e.toLowerCase();for(let s=0;s<this.dataManageReg.length;s++){let g=this.dataManageReg[s];g.RTitle.toLowerCase().indexOf(e)>=0&&o.push(g)}return this.dataManageReg=o,o}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(m.N))},t.\u0275cmp=n.Xpm({type:t,selectors:[["z-commission"]],decls:22,vars:6,consts:[["id","intro",1,"bg-image","shadow-1-strong",2,"background-image","url(https://mdbootstrap.com/img/new/slides/052.jpg)","height","400px"],[1,"mask","text-white",2,"background-color","rgba(0, 0, 0, 0.6)"],[1,"container","d-flex","align-items-center","justify-content-center","text-center","h-100"],[1,"text-white"],[1,"mb-3","mt-5","pt-4"],[1,"mb-4"],[1,"container","my-5","py-5"],[1,"form-inline","my-2","my-lg-0"],["type","text","placeholder","Buscar por titulo",1,"form-control","mr-sm-2",3,"keyup"],["buscarTexto",""],["type","button",1,"btn","btn-outline-primary","my-2","my-sm-0",3,"click"],[1,"mb-10"],[1,"fw-bold","mb-5","text-center"],[1,"row"],["class","card col-lg-6 col-md-12 mb-4",4,"ngFor","ngForOf"],["previousLabel","Anterior","nextLabel","Siguiente",3,"pageChange"],[1,"card","col-lg-6","col-md-12","mb-4"],["src","assets/brand/back.jpg","alt","Fissure in Sandstone",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(e,o){if(1&e){const s=n.EpF();n.TgZ(0,"header")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),n._uU(6,"Reconocimientos"),n.qZA(),n.TgZ(7,"h4",5),n._uU(8,"Asamblea Legislativa Departamental de Oruro"),n.qZA()()()()()(),n.TgZ(9,"div",6)(10,"form",7)(11,"input",8,9),n.NdJ("keyup",function(){n.CHM(s);const r=n.MAs(12);return n.KtG(o.buscar(r.value))}),n.qZA(),n.TgZ(13,"button",10),n.NdJ("click",function(){n.CHM(s);const r=n.MAs(12);return n.KtG(o.buscar(r.value))}),n._uU(14," Buscar "),n.qZA()(),n.TgZ(15,"section",11)(16,"h2",12),n._uU(17,"Reconocimientos"),n.qZA(),n.TgZ(18,"div",13),n.YNc(19,f,10,6,"div",14),n.ALo(20,"paginate"),n.qZA()(),n.TgZ(21,"pagination-controls",15),n.NdJ("pageChange",function(r){return o.page=r}),n.qZA()()}2&e&&(n.xp6(19),n.Q6J("ngForOf",n.xi3(20,1,o.dataManageReg,n.VKq(4,h,o.page))))},dependencies:[c.sg,l.LS,c.uU,l._s]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.Bz.forChild(R),u.Bz]}),t})();var b=i(7102);let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[m.N],imports:[c.ez,M,b.RecognitionModule,l.JX]}),t})()}}]);