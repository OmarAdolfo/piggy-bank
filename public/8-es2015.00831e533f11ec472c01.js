(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6dU7":function(e,t,n){"use strict";n.r(t);var i=n("PCNd"),a=n("tyNb"),r=n("itXk"),o=n("fXoL"),s=n("AytR"),c=n("tk/3");let b=(()=>{class e{constructor(e){this.http=e,this.url=s.a.url+"ahorros"}getSavings(){return this.http.get(this.url+"/cuenta-ahorro")}getAnnualReminders(){return this.http.get(this.url+"/recordatorios-anuales")}}return e.\u0275fac=function(t){return new(t||e)(o.Xb(c.b))},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=n("0MV2"),l=n("qan5"),u=n("ofXK");function v(e,t){1&e&&(o.Tb(0,"div",2),o.Tb(1,"div",21),o.Gc(2," \xa1Comienza a a\xf1adir tus gastos y ganancias! "),o.Sb(),o.Sb())}function g(e,t){if(1&e){const e=o.Ub();o.Tb(0,"div",23),o.Gc(1," El pago con nombre "),o.Tb(2,"a",24),o.bc("click",(function(){o.wc(e);const n=t.$implicit;return o.dc(2).editTemplate(n.plantilla_id.id)})),o.Tb(3,"strong"),o.Gc(4),o.Sb(),o.Sb(),o.Gc(5),o.Sb()}if(2&e){const e=t.$implicit,n=o.dc(2);o.Bb(4),o.Hc(e.gasto_id.nombre),o.Bb(1),o.Jc(" del mes de ",n.getMonth(e.plantilla_id.mes)," de ",e.plantilla_id.anno," a\xfan no se ha pagado ")}}function m(e,t){if(1&e&&(o.Tb(0,"div"),o.Ec(1,g,6,3,"div",22),o.Sb()),2&e){const e=o.dc();o.Bb(1),o.jc("ngForOf",e.unpaid)}}function h(e,t){1&e&&o.Gc(0," No existen recordatorios ")}function p(e,t){if(1&e&&(o.Tb(0,"div",23),o.Ob(1,"span",25),o.Sb()),2&e){const e=t.$implicit;o.Bb(1),o.jc("innerHTML",e,o.xc)}}function S(e,t){if(1&e&&(o.Tb(0,"div"),o.Ec(1,p,2,1,"div",22),o.Sb()),2&e){const e=o.dc();o.Bb(1),o.jc("ngForOf",e.annualReminders)}}function f(e,t){1&e&&o.Gc(0," No existen recordatorios ")}const T=function(e){return{width:e}},w=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.router=e,this.savingService=t,this.templateService=n,this.monthService=i,this.unpaid=[],this.annualReminders=[]}ngOnInit(){Promise.resolve().then(()=>this.loading=!0),Object(r.a)(this.getSavings(),this.getAnnualReminders(),this.getTemplateActual()).subscribe(([e,t,n])=>{this.savings=e.data,this.expenses=n.cuentaGastos,this.percentage=n.porcentajePagados,this.unpaid=n.noPagados;const i=t.data;for(let a of i){let e=new Date(a.fecha);this.annualReminders.push("El pago con nombre <strong>"+a.nombre+"</strong> fue realizado el mes de "+this.getMonth(e.getMonth()+1)+" del a\xf1o "+e.getFullYear())}this.loading=!1},e=>{this.loading=!1})}getSavings(){return this.savingService.getSavings()}getTemplateActual(){return this.templateService.getTemplateActual()}getAnnualReminders(){return this.savingService.getAnnualReminders()}editTemplate(e){this.router.navigate(["/home/templates/"+e])}getMonth(e){return this.monthService.getMonth(e)}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(a.b),o.Nb(b),o.Nb(d.a),o.Nb(l.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-dashboard"]],decls:57,vars:11,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],["class","col-12",4,"ngIf"],[1,"col-12","col-md-6","col-xl-4","mt-3","mt-xl-0"],[1,"card","card-data","h-100","py-2"],[1,"card-body"],[1,"row","no-gutters","align-items-center"],[1,"col","mr-2"],[1,"text-xs","font-weight-bold","text-primary","text-uppercase","mb-1"],[1,"col-auto"],[1,"h5","mb-0","font-weight-bold","text-gray-800"],[1,"mt-2","progress"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",3,"ngStyle"],[1,"row","mt-5"],[1,"col-12","col-md-6"],[1,"card"],[1,"card-header","bg-primary","text-white"],[4,"ngIf","ngIfElse"],["noAnnualReminders",""],[1,"col-12","col-md-6","mt-4","mt-md-0"],["role","alert",1,"alert","alert-info","text-dark","text-center"],["class","alert alert-secondary text-dark","role","alert",4,"ngFor","ngForOf"],["role","alert",1,"alert","alert-secondary","text-dark"],[3,"click"],[3,"innerHTML"]],template:function(e,t){if(1&e&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"h1"),o.Gc(4,"Escritorio"),o.Sb(),o.Sb(),o.Sb(),o.Ob(5,"hr"),o.Tb(6,"div",1),o.Ec(7,v,3,0,"div",3),o.Sb(),o.Tb(8,"div",1),o.Tb(9,"div",4),o.Tb(10,"div",5),o.Tb(11,"div",6),o.Tb(12,"div",7),o.Tb(13,"div",8),o.Tb(14,"div",9),o.Gc(15,"Disponible Mensual"),o.Sb(),o.Sb(),o.Tb(16,"div",10),o.Tb(17,"div",11),o.Gc(18),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Tb(19,"div",4),o.Tb(20,"div",5),o.Tb(21,"div",6),o.Tb(22,"div",7),o.Tb(23,"div",8),o.Tb(24,"div",9),o.Gc(25,"Ahorros"),o.Sb(),o.Sb(),o.Tb(26,"div",10),o.Tb(27,"div",11),o.Gc(28),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Tb(29,"div",4),o.Tb(30,"div",5),o.Tb(31,"div",6),o.Tb(32,"div",7),o.Tb(33,"div",8),o.Tb(34,"div",9),o.Gc(35,"Total de gastos pagados "),o.Sb(),o.Tb(36,"div",11),o.Gc(37),o.Sb(),o.Tb(38,"div",12),o.Ob(39,"div",13),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Tb(40,"div",14),o.Tb(41,"div",15),o.Tb(42,"div",16),o.Tb(43,"div",17),o.Gc(44," Recordatorios Mensuales "),o.Sb(),o.Tb(45,"div",6),o.Ec(46,m,2,1,"div",18),o.Ec(47,h,1,0,"ng-template",null,19,o.Fc),o.Sb(),o.Sb(),o.Sb(),o.Tb(49,"div",20),o.Tb(50,"div",16),o.Tb(51,"div",17),o.Gc(52," Recordatorios Anuales "),o.Sb(),o.Tb(53,"div",6),o.Ec(54,S,2,1,"div",18),o.Ec(55,f,1,0,"ng-template",null,19,o.Fc),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&e){const e=o.uc(48);o.Bb(7),o.jc("ngIf",!t.loading&&0===t.expenses&&0===t.savings),o.Bb(11),o.Ic("",t.expenses," \u20ac"),o.Bb(10),o.Ic("",t.savings," \u20ac"),o.Bb(9),o.Ic("",t.percentage,"%"),o.Bb(2),o.jc("ngStyle",o.mc(9,T,t.percentage+"%")),o.Bb(7),o.jc("ngIf",t.unpaid.length>0)("ngIfElse",e),o.Bb(8),o.jc("ngIf",t.annualReminders.length>0)("ngIfElse",e)}},directives:[u.k,u.l,u.j],styles:["a[_ngcontent-%COMP%]{cursor:pointer}.card-data[_ngcontent-%COMP%]{border-left:6px solid #f9aa33}"]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[a.e.forChild(w)],a.e]}),e})();n.d(t,"DashboardModule",(function(){return x}));let x=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[i.a,y]]}),e})()},qan5:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL");let a=(()=>{class e{constructor(){this.months=[{name:"Enero",value:1},{name:"Febrero",value:2},{name:"Marzo",value:3},{name:"Abril",value:4},{name:"Mayo",value:5},{name:"Junio",value:6},{name:"Julio",value:7},{name:"Agosto",value:8},{name:"Septiembre",value:9},{name:"Octubre",value:10},{name:"Noviembre",value:11},{name:"Diciembre",value:12}]}getMonth(e){return this.months.find(t=>t.value===e).name}getMonths(){return this.months}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);