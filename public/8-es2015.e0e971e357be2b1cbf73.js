(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6dU7":function(e,t,n){"use strict";n.r(t);var i=n("PCNd"),a=n("tyNb"),r=n("itXk"),o=n("fXoL"),s=n("AytR"),c=n("tk/3");let b=(()=>{class e{constructor(e){this.http=e,this.url=s.a.url+"ahorros"}getSavings(){return this.http.get(this.url+"/cuenta-ahorro")}getAnnualReminders(){return this.http.get(this.url+"/recordatorios-anuales")}}return e.\u0275fac=function(t){return new(t||e)(o.Yb(c.b))},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=n("0MV2"),d=n("qan5"),u=n("ofXK");function v(e,t){1&e&&(o.Ub(0,"div",2),o.Ub(1,"div",21),o.Hc(2," \xa1Comienza a a\xf1adir tus gastos y ganancias! "),o.Tb(),o.Tb())}function g(e,t){if(1&e){const e=o.Vb();o.Ub(0,"div",23),o.Hc(1," El pago con nombre "),o.Ub(2,"a",24),o.cc("click",(function(){o.xc(e);const n=t.$implicit;return o.ec(2).editTemplate(n.plantilla_id.id)})),o.Ub(3,"strong"),o.Hc(4),o.Tb(),o.Tb(),o.Hc(5),o.Tb()}if(2&e){const e=t.$implicit,n=o.ec(2);o.Cb(4),o.Ic(e.gasto_id.nombre),o.Cb(1),o.Kc(" del mes de ",n.getMonth(e.plantilla_id.mes)," de ",e.plantilla_id.anno," a\xfan no se ha pagado ")}}function m(e,t){if(1&e&&(o.Ub(0,"div"),o.Fc(1,g,6,3,"div",22),o.Tb()),2&e){const e=o.ec();o.Cb(1),o.kc("ngForOf",e.unpaid)}}function h(e,t){1&e&&o.Hc(0," No existen recordatorios ")}function p(e,t){if(1&e&&(o.Ub(0,"div",23),o.Pb(1,"span",25),o.Tb()),2&e){const e=t.$implicit;o.Cb(1),o.kc("innerHTML",e,o.yc)}}function f(e,t){if(1&e&&(o.Ub(0,"div"),o.Fc(1,p,2,1,"div",22),o.Tb()),2&e){const e=o.ec();o.Cb(1),o.kc("ngForOf",e.annualReminders)}}function T(e,t){1&e&&o.Hc(0," No existen recordatorios ")}const U=function(e){return{width:e}},x=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.router=e,this.savingService=t,this.templateService=n,this.monthService=i,this.unpaid=[],this.annualReminders=[]}ngOnInit(){Promise.resolve().then(()=>this.loading=!0),Object(r.a)(this.getSavings(),this.getAnnualReminders(),this.getTemplateActual()).subscribe(([e,t,n])=>{this.savings=e.data,this.expenses=n.cuentaGastos,this.percentage=n.porcentajePagados,this.unpaid=n.noPagados;const i=t.data;for(let a of i){let e=new Date(a.fecha);this.annualReminders.push("El pago con nombre <strong>"+a.nombre+"</strong> fue realizado el mes de "+this.getMonth(e.getMonth()+1)+" del a\xf1o "+e.getFullYear())}this.loading=!1},e=>{this.loading=!1})}getSavings(){return this.savingService.getSavings()}getTemplateActual(){return this.templateService.getTemplateActual()}getAnnualReminders(){return this.savingService.getAnnualReminders()}editTemplate(e){this.router.navigate(["/home/templates/"+e])}getMonth(e){return this.monthService.getMonth(e)}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(a.b),o.Ob(b),o.Ob(l.a),o.Ob(d.a))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-dashboard"]],decls:57,vars:11,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],["class","col-12",4,"ngIf"],[1,"col-12","col-md-6","col-xl-4","mt-3","mt-xl-0"],[1,"card","card-data","h-100","py-2"],[1,"card-body"],[1,"row","no-gutters","align-items-center"],[1,"col","mr-2"],[1,"text-xs","font-weight-bold","text-primary","text-uppercase","mb-1"],[1,"col-auto"],[1,"h5","mb-0","font-weight-bold","text-gray-800"],[1,"mt-2","progress"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",3,"ngStyle"],[1,"row","mt-5"],[1,"col-12","col-xl-6"],[1,"card"],[1,"card-header","bg-primary","text-white"],[4,"ngIf","ngIfElse"],["noAnnualReminders",""],[1,"col-12","col-xl-6","mt-4","mt-xl-0"],["role","alert",1,"alert","alert-info","text-dark","text-center"],["class","alert alert-secondary text-dark","role","alert",4,"ngFor","ngForOf"],["role","alert",1,"alert","alert-secondary","text-dark"],[3,"click"],[3,"innerHTML"]],template:function(e,t){if(1&e&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"div",2),o.Ub(3,"h1"),o.Hc(4,"Escritorio"),o.Tb(),o.Tb(),o.Tb(),o.Pb(5,"hr"),o.Ub(6,"div",1),o.Fc(7,v,3,0,"div",3),o.Tb(),o.Ub(8,"div",1),o.Ub(9,"div",4),o.Ub(10,"div",5),o.Ub(11,"div",6),o.Ub(12,"div",7),o.Ub(13,"div",8),o.Ub(14,"div",9),o.Hc(15,"Disponible Mensual"),o.Tb(),o.Tb(),o.Ub(16,"div",10),o.Ub(17,"div",11),o.Hc(18),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(19,"div",4),o.Ub(20,"div",5),o.Ub(21,"div",6),o.Ub(22,"div",7),o.Ub(23,"div",8),o.Ub(24,"div",9),o.Hc(25,"Ahorros"),o.Tb(),o.Tb(),o.Ub(26,"div",10),o.Ub(27,"div",11),o.Hc(28),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(29,"div",4),o.Ub(30,"div",5),o.Ub(31,"div",6),o.Ub(32,"div",7),o.Ub(33,"div",8),o.Ub(34,"div",9),o.Hc(35,"Total de gastos pagados "),o.Tb(),o.Ub(36,"div",11),o.Hc(37),o.Tb(),o.Ub(38,"div",12),o.Pb(39,"div",13),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(40,"div",14),o.Ub(41,"div",15),o.Ub(42,"div",16),o.Ub(43,"div",17),o.Hc(44," Recordatorios Mensuales "),o.Tb(),o.Ub(45,"div",6),o.Fc(46,m,2,1,"div",18),o.Fc(47,h,1,0,"ng-template",null,19,o.Gc),o.Tb(),o.Tb(),o.Tb(),o.Ub(49,"div",20),o.Ub(50,"div",16),o.Ub(51,"div",17),o.Hc(52," Recordatorios Anuales "),o.Tb(),o.Ub(53,"div",6),o.Fc(54,f,2,1,"div",18),o.Fc(55,T,1,0,"ng-template",null,19,o.Gc),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e){const e=o.vc(48);o.Cb(7),o.kc("ngIf",!t.loading&&0===t.expenses&&0===t.savings),o.Cb(11),o.Jc("",t.expenses," \u20ac"),o.Cb(10),o.Jc("",t.savings," \u20ac"),o.Cb(9),o.Jc("",t.percentage,"%"),o.Cb(2),o.kc("ngStyle",o.nc(9,U,t.percentage+"%")),o.Cb(7),o.kc("ngIf",t.unpaid.length>0)("ngIfElse",e),o.Cb(8),o.kc("ngIf",t.annualReminders.length>0)("ngIfElse",e)}},directives:[u.k,u.l,u.j],styles:["a[_ngcontent-%COMP%]{cursor:pointer}.card-data[_ngcontent-%COMP%]{border-left:6px solid #f9aa33}"]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(t){return new(t||e)},imports:[[a.e.forChild(x)],a.e]}),e})();n.d(t,"DashboardModule",(function(){return w}));let w=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(t){return new(t||e)},imports:[[i.a,y]]}),e})()},qan5:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL");let a=(()=>{class e{constructor(){this.months=[{name:"Enero",value:1},{name:"Febrero",value:2},{name:"Marzo",value:3},{name:"Abril",value:4},{name:"Mayo",value:5},{name:"Junio",value:6},{name:"Julio",value:7},{name:"Agosto",value:8},{name:"Septiembre",value:9},{name:"Octubre",value:10},{name:"Noviembre",value:11},{name:"Diciembre",value:12}]}getMonth(e){return this.months.find(t=>t.value===e).name}getMonths(){return this.months}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);