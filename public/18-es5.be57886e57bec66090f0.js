function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var o=[],r=!0,n=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);r=!0);}catch(c){n=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{XWaT:function(e,t,o){"use strict";o.r(t);var r=o("PCNd"),n=o("I5S5"),i=o("tyNb"),a=o("3Pt+"),s=function e(){_classCallCheck(this,e)},c=o("fXoL"),l=o("0MV2"),d=o("7zfz"),b=o("qan5"),u=o("LuMj"),m=o("ofXK"),p=o("arFO");function f(e,t){1&e&&(c.Ub(0,"div"),c.Hc(1," El a\xf1o es obligatorio "),c.Tb())}function v(e,t){1&e&&(c.Ub(0,"div"),c.Hc(1," El a\xf1o debe estar formado por cuatro n\xfameros "),c.Tb())}function g(e,t){if(1&e&&(c.Ub(0,"div",24),c.Fc(1,f,2,0,"div",25),c.Fc(2,v,2,0,"div",25),c.Tb()),2&e){var o=c.ec(2);c.Cb(1),c.kc("ngIf",o.addForm.controls.anno.errors.required),c.Cb(1),c.kc("ngIf",o.addForm.controls.anno.errors.pattern)}}function h(e,t){1&e&&(c.Ub(0,"div"),c.Hc(1," El mes es obligatorio "),c.Tb())}function T(e,t){if(1&e&&(c.Ub(0,"div",24),c.Fc(1,h,2,0,"div",25),c.Tb()),2&e){var o=c.ec(2);c.Cb(1),c.kc("ngIf",o.addForm.controls.mes.errors.required)}}var y=function(e,t){return{"fa-plus":e,"fa-spinner fa-spin":t}};function U(e,t){if(1&e){var o=c.Vb();c.Ub(0,"form",14),c.Ub(1,"div",3),c.Ub(2,"div",15),c.Ub(3,"label",16),c.Hc(4,"A\xf1o"),c.Tb(),c.Pb(5,"input",17),c.Fc(6,g,3,2,"div",18),c.Tb(),c.Ub(7,"div",15),c.Ub(8,"label",19),c.Hc(9,"Mes"),c.Tb(),c.Pb(10,"p-dropdown",20),c.Fc(11,T,2,1,"div",18),c.Tb(),c.Tb(),c.Ub(12,"div",1),c.Ub(13,"div",21),c.Ub(14,"button",22),c.cc("click",(function(){return c.xc(o),c.ec().addTemplate()})),c.Pb(15,"i",23),c.Ub(16,"span"),c.Hc(17," A\xf1adir"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=c.ec();c.kc("formGroup",r.addForm),c.Cb(6),c.kc("ngIf",r.addForm.controls.anno.invalid&&(r.addForm.controls.anno.dirty||r.addForm.controls.anno.touched)),c.Cb(4),c.kc("options",r.months)("showClear",!0),c.Cb(1),c.kc("ngIf",r.addForm.controls.mes.invalid&&(r.addForm.controls.mes.dirty||r.addForm.controls.mes.touched)),c.Cb(3),c.kc("disabled",r.addForm.pristine||r.addForm.invalid||r.loading),c.Cb(1),c.kc("ngClass",c.oc(7,y,!r.loading,r.loading))}}function k(e,t){1&e&&(c.Ub(0,"div"),c.Hc(1," El a\xf1o es obligatorio "),c.Tb())}function C(e,t){1&e&&(c.Ub(0,"div"),c.Hc(1," El a\xf1o debe estar formado por cuatro n\xfameros "),c.Tb())}function x(e,t){if(1&e&&(c.Ub(0,"div",24),c.Fc(1,k,2,0,"div",25),c.Fc(2,C,2,0,"div",25),c.Tb()),2&e){var o=c.ec(2);c.Cb(1),c.kc("ngIf",o.cloneForm.controls.anno.errors.required),c.Cb(1),c.kc("ngIf",o.cloneForm.controls.anno.errors.pattern)}}function F(e,t){1&e&&(c.Ub(0,"div"),c.Hc(1," El mes es obligatorio "),c.Tb())}function w(e,t){if(1&e&&(c.Ub(0,"div",24),c.Fc(1,F,2,0,"div",25),c.Tb()),2&e){var o=c.ec(2);c.Cb(1),c.kc("ngIf",o.cloneForm.controls.mes.errors.required)}}function P(e,t){1&e&&(c.Ub(0,"div"),c.Hc(1," El a\xf1o es obligatorio "),c.Tb())}function S(e,t){1&e&&(c.Ub(0,"div"),c.Hc(1," El a\xf1o debe estar formado por cuatro n\xfameros "),c.Tb())}function M(e,t){if(1&e&&(c.Ub(0,"div",24),c.Fc(1,P,2,0,"div",25),c.Fc(2,S,2,0,"div",25),c.Tb()),2&e){var o=c.ec(2);c.Cb(1),c.kc("ngIf",o.cloneForm.controls.newAnno.errors.required),c.Cb(1),c.kc("ngIf",o.cloneForm.controls.newAnno.errors.pattern)}}function I(e,t){1&e&&(c.Ub(0,"div"),c.Hc(1," El mes es obligatorio "),c.Tb())}function H(e,t){if(1&e&&(c.Ub(0,"div",24),c.Fc(1,I,2,0,"div",25),c.Tb()),2&e){var o=c.ec(2);c.Cb(1),c.kc("ngIf",o.cloneForm.controls.newMes.errors.required)}}var E=function(e,t){return{"fa-edit":e,"fa-spinner fa-spin":t}};function _(e,t){if(1&e){var o=c.Vb();c.Ub(0,"form",14),c.Ub(1,"div",3),c.Ub(2,"div",15),c.Ub(3,"label",16),c.Hc(4,"A\xf1o"),c.Tb(),c.Pb(5,"input",17),c.Fc(6,x,3,2,"div",18),c.Tb(),c.Ub(7,"div",15),c.Ub(8,"label",19),c.Hc(9,"Mes"),c.Tb(),c.Pb(10,"p-dropdown",20),c.Fc(11,w,2,1,"div",18),c.Tb(),c.Tb(),c.Ub(12,"div",3),c.Ub(13,"div",15),c.Ub(14,"label",16),c.Hc(15,"Nuevo a\xf1o"),c.Tb(),c.Pb(16,"input",26),c.Fc(17,M,3,2,"div",18),c.Tb(),c.Ub(18,"div",15),c.Ub(19,"label",19),c.Hc(20,"Nuevo mes"),c.Tb(),c.Pb(21,"p-dropdown",27),c.Fc(22,H,2,1,"div",18),c.Tb(),c.Tb(),c.Ub(23,"div",1),c.Ub(24,"div",21),c.Ub(25,"button",22),c.cc("click",(function(){return c.xc(o),c.ec().clone()})),c.Pb(26,"i",23),c.Ub(27,"span"),c.Hc(28," Copiar"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=c.ec();c.kc("formGroup",r.cloneForm),c.Cb(6),c.kc("ngIf",r.cloneForm.controls.anno.invalid&&(r.cloneForm.controls.anno.dirty||r.cloneForm.controls.anno.touched)),c.Cb(4),c.kc("options",r.months)("showClear",!0),c.Cb(1),c.kc("ngIf",r.cloneForm.controls.mes.invalid&&(r.cloneForm.controls.mes.dirty||r.cloneForm.controls.mes.touched)),c.Cb(6),c.kc("ngIf",r.cloneForm.controls.newAnno.invalid&&(r.cloneForm.controls.newAnno.dirty||r.cloneForm.controls.newAnno.touched)),c.Cb(4),c.kc("options",r.months)("showClear",!0),c.Cb(1),c.kc("ngIf",r.cloneForm.controls.newMes.invalid&&(r.cloneForm.controls.newMes.dirty||r.cloneForm.controls.newMes.touched)),c.Cb(3),c.kc("disabled",r.cloneForm.pristine||r.cloneForm.invalid||r.loading),c.Cb(1),c.kc("ngClass",c.oc(11,E,!r.loading,r.loading))}}function A(e,t){if(1&e){var o=c.Vb();c.Ub(0,"div",32),c.Ub(1,"div",33),c.Ub(2,"div",6),c.Ub(3,"div",1),c.Ub(4,"div",2),c.Hc(5),c.Tb(),c.Ub(6,"div",21),c.Ub(7,"button",34),c.cc("click",(function(){c.xc(o);var e=t.$implicit;return c.ec(2).editTemplate(e.id)})),c.Pb(8,"i",35),c.Tb(),c.Ub(9,"button",36),c.cc("click",(function(){c.xc(o);var e=t.$implicit;return c.ec(2).confirm(e.id)})),c.Pb(10,"i",37),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=t.$implicit,n=c.ec(2);c.Cb(5),c.Jc(" ",n.getMonth(r.mes)," ")}}function O(e,t){if(1&e){var o=c.Vb();c.Ub(0,"div"),c.Ub(1,"div",3),c.Ub(2,"div",28),c.Ub(3,"label",29),c.Hc(4,"Seleccione un a\xf1o:"),c.Tb(),c.Ub(5,"p-dropdown",30),c.cc("ngModelChange",(function(e){return c.xc(o),c.ec().selectedYear=e}))("onChange",(function(e){return c.xc(o),c.ec().selectYear(e)})),c.Tb(),c.Tb(),c.Tb(),c.Ub(6,"div",3),c.Fc(7,A,11,1,"div",31),c.Tb(),c.Tb()}if(2&e){var r=c.ec();c.Cb(5),c.kc("ngModel",r.selectedYear)("options",r.years),c.Cb(2),c.kc("ngForOf",r.templates)}}function R(e,t){1&e&&(c.Ub(0,"div",1),c.Ub(1,"div",39),c.Pb(2,"img",40),c.Tb(),c.Tb())}function N(e,t){if(1&e&&c.Fc(0,R,3,0,"div",38),2&e){var o=c.ec();c.kc("ngIf",!o.loading)}}var j,G=((j=function(){function e(t,o,r,n,i,a){_classCallCheck(this,e),this.router=t,this.templateService=o,this.formBuilder=r,this.messageService=n,this.confirmationService=i,this.monthService=a,this.annoRegex=/^(\d{4})$/,this.optionCreation="A\xf1adir plantilla",this.months=this.monthService.getMonths()}return _createClass(e,[{key:"ngOnInit",value:function(){this.getTemplates(),this.buildForm()}},{key:"buildForm",value:function(){this.addForm=this.formBuilder.group({anno:new a.c("",[a.n.required,a.n.pattern(this.annoRegex)]),mes:new a.c("",a.n.required)}),this.cloneForm=this.formBuilder.group({anno:new a.c("",[a.n.required,a.n.pattern(this.annoRegex)]),mes:new a.c("",a.n.required),newAnno:new a.c("",[a.n.required,a.n.pattern(this.annoRegex)]),newMes:new a.c("",a.n.required)})}},{key:"getTemplates",value:function(){var e=this;Promise.resolve().then((function(){return e.loading=!0})),this.templateService.get().subscribe((function(t){e.templatesTotal=t.data,e.years=t.years,e.loading=!1,e.years&&e.years.length>0&&e.calculateTemplates(e.years[0])}),(function(){e.loading=!1}))}},{key:"getMonth",value:function(e){return this.monthService.getMonths().find((function(t){return t.value===e})).name}},{key:"selectYear",value:function(e){this.calculateTemplates()}},{key:"editTemplate",value:function(e){this.router.navigate(["/home/templates/"+e])}},{key:"addTemplate",value:function(){var e=this,t=new s;t.anno=this.addForm.get("anno").value,t.mes=this.addForm.get("mes").value.value,Promise.resolve().then((function(){return e.loading=!0})),this.templateService.add(t).subscribe((function(t){var o=_toConsumableArray(e.templatesTotal);o.push(t.data),e.templatesTotal=o,e.years=t.years,e.years&&e.years.length>0&&e.calculateTemplates(e.years[0]),e.loading=!1,e.messageService.add({severity:"success",summary:"\xc9xito",detail:t.message})}),(function(t){e.loading=!1,e.messageService.add({severity:"error",summary:"Error",detail:t.error.message})}))}},{key:"clone",value:function(){var e=this;Promise.resolve().then((function(){return e.loading=!0}));var t={anno:this.cloneForm.get("anno").value,mes:this.cloneForm.get("mes").value.value,newAnno:this.cloneForm.get("newAnno").value,newMes:this.cloneForm.get("newMes").value.value};this.templateService.clone(t).subscribe((function(t){var o=_toConsumableArray(e.templatesTotal);o.push(t.data),e.templatesTotal=o,e.years=t.years,e.calculateTemplates(),e.loading=!1,e.messageService.add({severity:"success",summary:"\xc9xito",detail:t.message})}),(function(t){e.loading=!1,e.messageService.add({severity:"error",summary:"Error",detail:t.error.message})}))}},{key:"calculateTemplates",value:function(e){var t=this;this.selectedYear=e||this.selectedYear,this.templates=this.templatesTotal.filter((function(e){return e.anno===t.selectedYear.anno})).sort((function(e,t){return e.mes>t.mes?1:-1}))}},{key:"confirm",value:function(e){var t=this;this.confirmationService.confirm({message:"\xbfEst\xe1s seguro de que deseas borrar?",header:"Confirmaci\xf3n",icon:"pi pi-exclamation-triangle",accept:function(){t.delete(e)}})}},{key:"delete",value:function(e){var t=this;this.templateService.delete(e).subscribe((function(o){t.templatesTotal=t.templatesTotal.filter((function(t){return t.id!==e})),t.templates=t.templates.filter((function(t){return t.id!==e})),t.messageService.add({severity:"success",summary:"\xc9xito",detail:o.message}),t.years=o.years,t.years&&t.years.length>0&&t.calculateTemplates(t.years[0])}),(function(e){t.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}}]),e}()).\u0275fac=function(e){return new(e||j)(c.Ob(i.b),c.Ob(l.a),c.Ob(a.b),c.Ob(d.d),c.Ob(d.a),c.Ob(b.a))},j.\u0275cmp=c.Ib({type:j,selectors:[["app-templates"]],decls:30,vars:6,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],[1,"row","mt-3"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[1,"ui-g",2,"width","250px","margin-bottom","10px"],[1,"ui-g-12"],["name","group1","value","A\xf1adir plantilla","label","A\xf1adir plantilla","inputId","opt1",3,"ngModel","ngModelChange"],["name","group1","value","Copiar plantilla","label","Copiar plantilla","inputId","opt2",3,"ngModel","ngModelChange"],[3,"formGroup",4,"ngIf"],[4,"ngIf","ngIfElse"],["noTemplates",""],[3,"formGroup"],[1,"col-12","col-md-4","form-group"],["for","anno"],["type","number","id","anno","formControlName","anno",1,"form-control","form-control-user"],["class","alert alert-danger mt-1",4,"ngIf"],["for","mes"],["formControlName","mes","placeholder","Seleccione un mes","optionLabel","name",3,"options","showClear"],[1,"col-12","text-right"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["aria-hidden","true",1,"fas",3,"ngClass"],[1,"alert","alert-danger","mt-1"],[4,"ngIf"],["type","number","id","anno","formControlName","newAnno",1,"form-control","form-control-user"],["formControlName","newMes","placeholder","Seleccione un mes","optionLabel","name",3,"options","showClear"],[1,"col-12","col-md-3","form-group"],["for","exampleInputEmail1"],["optionLabel","anno","placeholder","Seleccione un a\xf1o",3,"ngModel","options","ngModelChange","onChange"],["class","col-12 col-md-4 col-xl-3 mt-3",4,"ngFor","ngForOf"],[1,"col-12","col-md-4","col-xl-3","mt-3"],[1,"card","bg-secondary","border","border-dark"],["type","button",1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"fas","fa-edit"],["type","button",1,"ml-1","btn","btn-primary",3,"click"],["aria-hidden","true",1,"fas","fa-trash"],["class","row",4,"ngIf"],[1,"col-12","col-lg-4","offset-lg-4","form-group"],["src","./assets/notfound.png","alt","No existen resultados",1,"d-block","mx-auto","img-not-found"]],template:function(e,t){if(1&e&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Ub(3,"h1"),c.Hc(4,"Plantillas"),c.Tb(),c.Tb(),c.Tb(),c.Pb(5,"hr"),c.Ub(6,"div",3),c.Ub(7,"div",2),c.Ub(8,"div",4),c.Ub(9,"div",5),c.Hc(10," Creador de plantillas "),c.Tb(),c.Ub(11,"div",6),c.Ub(12,"div",1),c.Ub(13,"div",2),c.Ub(14,"div",7),c.Ub(15,"div",8),c.Ub(16,"p-radioButton",9),c.cc("ngModelChange",(function(e){return t.optionCreation=e})),c.Tb(),c.Tb(),c.Ub(17,"div",8),c.Ub(18,"p-radioButton",10),c.cc("ngModelChange",(function(e){return t.optionCreation=e})),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Fc(19,U,18,10,"form",11),c.Fc(20,_,29,14,"form",11),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(21,"div",3),c.Ub(22,"div",2),c.Ub(23,"div",4),c.Ub(24,"div",5),c.Hc(25," Listado de plantillas "),c.Tb(),c.Ub(26,"div",6),c.Fc(27,O,8,3,"div",12),c.Fc(28,N,1,1,"ng-template",null,13,c.Gc),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&e){var o=c.vc(29);c.Cb(16),c.kc("ngModel",t.optionCreation),c.Cb(2),c.kc("ngModel",t.optionCreation),c.Cb(1),c.kc("ngIf","A\xf1adir plantilla"===t.optionCreation),c.Cb(1),c.kc("ngIf","Copiar plantilla"===t.optionCreation),c.Cb(7),c.kc("ngIf",(null==t.templatesTotal?null:t.templatesTotal.length)>0)("ngIfElse",o)}},directives:[u.a,a.h,a.j,m.k,a.o,a.i,a.e,a.k,a.a,a.d,p.a,m.i,m.j],styles:[""]}),j),q=o("QVck"),$=o("mgSE"),L=o("itXk"),J=o("PTGG"),V=o("OS4P"),D=o("3iQZ"),X=o("/RsI"),Y=o("kAuD"),z=o("Ji6n");function B(e,t){if(1&e&&(c.Ub(0,"h1"),c.Hc(1),c.Tb()),2&e){var o=c.ec();c.Cb(1),c.Kc("Plantilla ",o.getMonth(o.template.mes)," ",o.template.anno,"")}}function W(e,t){1&e&&(c.Ub(0,"h1"),c.Hc(1,"Plantilla"),c.Tb())}function Z(e,t){1&e&&(c.Ub(0,"div",1),c.Pb(1,"img",12),c.Tb())}var K=function(){return["/home/expenses/new"]};function Q(e,t){1&e&&(c.Ub(0,"div",25),c.Hc(1," Si desea a\xf1adir un nuevo gasto acceda "),c.Ub(2,"a",26),c.Hc(3,"gastos"),c.Tb(),c.Tb()),2&e&&(c.Cb(2),c.kc("routerLink",c.mc(1,K)))}var ee=function(){return["/home/profits/new"]};function te(e,t){1&e&&(c.Ub(0,"div",25),c.Hc(1," Si desea a\xf1adir una nueva ganancia acceda "),c.Ub(2,"a",26),c.Hc(3,"ganancias"),c.Tb(),c.Tb()),2&e&&(c.Cb(2),c.kc("routerLink",c.mc(1,ee)))}function oe(e,t){if(1&e){var o=c.Vb();c.Ub(0,"div",13),c.Ub(1,"div",14),c.Hc(2," Gestor de recursos "),c.Tb(),c.Ub(3,"div",15),c.Ub(4,"div",16),c.Ub(5,"div",17),c.Ub(6,"label",18),c.Hc(7,"Tipo de recurso"),c.Tb(),c.Ub(8,"p-dropdown",19),c.cc("onChange",(function(e){return c.xc(o),c.ec().selectResource(e)})),c.Tb(),c.Tb(),c.Ub(9,"div",17),c.Ub(10,"label",18),c.Hc(11,"Recurso"),c.Tb(),c.Ub(12,"p-dropdown",20),c.cc("ngModelChange",(function(e){return c.xc(o),c.ec().selectedResource=e})),c.Tb(),c.Tb(),c.Fc(13,Q,4,2,"div",21),c.Fc(14,te,4,2,"div",21),c.Tb(),c.Ub(15,"div",1),c.Ub(16,"div",22),c.Ub(17,"button",23),c.cc("click",(function(){return c.xc(o),c.ec().addResouce()})),c.Pb(18,"i",24),c.Ub(19,"span"),c.Hc(20," A\xf1adir recurso"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=c.ec();c.Cb(8),c.kc("options",r.types),c.Cb(4),c.kc("options",r.resources)("ngModel",r.selectedResource),c.Cb(1),c.kc("ngIf",!r.isProfit),c.Cb(1),c.kc("ngIf",r.isProfit),c.Cb(3),c.kc("disabled",!r.selectedResource||""===r.selectedResource)}}function re(e,t){if(1&e){var o=c.Vb();c.Ub(0,"div",39),c.Ub(1,"div",40),c.Hc(2),c.Tb(),c.Ub(3,"div",41),c.Ub(4,"input",42),c.cc("input",(function(){return c.xc(o),c.ec(2).calculate()}))("ngModelChange",(function(e){return c.xc(o),t.$implicit.cantidad=e})),c.Tb(),c.Tb(),c.Ub(5,"div",43),c.Ub(6,"button",44),c.cc("click",(function(){c.xc(o);var e=t.$implicit;return c.ec(2).deleteRevenue(e.id)})),c.Pb(7,"i",45),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=t.$implicit;c.Cb(2),c.Jc(" ",r.ganancia_id.nombre," "),c.Cb(2),c.kc("ngModel",r.cantidad)}}function ne(e,t){if(1&e){var o=c.Vb();c.Ub(0,"div",39),c.Ub(1,"div",40),c.Hc(2),c.Tb(),c.Ub(3,"div",41),c.Ub(4,"input",42),c.cc("input",(function(){return c.xc(o),c.ec(3).calculate()}))("ngModelChange",(function(e){return c.xc(o),c.ec().$implicit.cantidad=e})),c.Tb(),c.Tb(),c.Ub(5,"div",47),c.Ub(6,"p-checkbox",48),c.cc("ngModelChange",(function(e){return c.xc(o),c.ec().$implicit.pagado=e})),c.Tb(),c.Tb(),c.Ub(7,"div",49),c.Ub(8,"button",44),c.cc("click",(function(){c.xc(o);var e=c.ec().$implicit;return c.ec(2).deletePayment(e.id)})),c.Pb(9,"i",45),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=c.ec().$implicit;c.Cb(2),c.Jc(" ",r.gasto_id.nombre," "),c.Cb(2),c.kc("ngModel",r.cantidad),c.Cb(2),c.kc("ngModel",r.pagado)}}function ie(e,t){if(1&e&&(c.Ub(0,"div"),c.Fc(1,ne,10,3,"div",46),c.Tb()),2&e){var o=t.$implicit;c.Cb(1),c.kc("ngIf","Mensuales Primarios"===o.gasto_id.id_tipo_gasto.valor)}}function ae(e,t){if(1&e){var o=c.Vb();c.Ub(0,"div",39),c.Ub(1,"div",40),c.Hc(2),c.Tb(),c.Ub(3,"div",41),c.Ub(4,"input",42),c.cc("input",(function(){return c.xc(o),c.ec(3).calculate()}))("ngModelChange",(function(e){return c.xc(o),c.ec().$implicit.cantidad=e})),c.Tb(),c.Tb(),c.Ub(5,"div",47),c.Ub(6,"p-checkbox",48),c.cc("ngModelChange",(function(e){return c.xc(o),c.ec().$implicit.pagado=e})),c.Tb(),c.Tb(),c.Ub(7,"div",50),c.Ub(8,"button",44),c.cc("click",(function(){c.xc(o);var e=c.ec().$implicit;return c.ec(2).deletePayment(e.id)})),c.Pb(9,"i",45),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=c.ec().$implicit;c.Cb(2),c.Jc(" ",r.gasto_id.nombre," "),c.Cb(2),c.kc("ngModel",r.cantidad),c.Cb(2),c.kc("ngModel",r.pagado)}}function se(e,t){if(1&e&&(c.Ub(0,"div"),c.Fc(1,ae,10,3,"div",46),c.Tb()),2&e){var o=t.$implicit;c.Cb(1),c.kc("ngIf","Mensuales Secundarios"===o.gasto_id.id_tipo_gasto.valor)}}function ce(e,t){if(1&e){var o=c.Vb();c.Ub(0,"div",27),c.Ub(1,"div",14),c.Hc(2," Plantilla "),c.Tb(),c.Ub(3,"div",15),c.Ub(4,"div",1),c.Ub(5,"div",2),c.Hc(6," La plantilla se gestiona de forma autom\xe1tica a trav\xe9s del m\xe9todo 50/30/20 "),c.Ub(7,"a",28),c.cc("click",(function(){return c.xc(o),c.ec().openInfo()})),c.Pb(8,"i",29),c.Tb(),c.Hc(9,". "),c.Tb(),c.Tb(),c.Ub(10,"div",30),c.Ub(11,"div",31),c.Hc(12," Nombre "),c.Tb(),c.Ub(13,"div",31),c.Hc(14," Valor "),c.Tb(),c.Ub(15,"div",31),c.Hc(16," Opciones "),c.Tb(),c.Tb(),c.Ub(17,"div",32),c.Ub(18,"div",33),c.Hc(19," Ingresos "),c.Tb(),c.Ub(20,"div",33),c.Hc(21),c.Tb(),c.Pb(22,"div",34),c.Tb(),c.Fc(23,re,8,2,"div",35),c.Ub(24,"div",36),c.Ub(25,"div",33),c.Hc(26," Disponible Gastos primarios "),c.Tb(),c.Ub(27,"div",33),c.Hc(28),c.Tb(),c.Pb(29,"div",34),c.Tb(),c.Fc(30,ie,2,1,"div",37),c.Ub(31,"div",36),c.Ub(32,"div",33),c.Hc(33," Disponible Gastos secundarios "),c.Tb(),c.Ub(34,"div",33),c.Hc(35),c.Tb(),c.Pb(36,"div",34),c.Tb(),c.Fc(37,se,2,1,"div",37),c.Ub(38,"div",36),c.Ub(39,"div",33),c.Hc(40," Ahorros esperados "),c.Tb(),c.Ub(41,"div",33),c.Hc(42),c.Tb(),c.Pb(43,"div",34),c.Tb(),c.Ub(44,"div",36),c.Ub(45,"div",33),c.Hc(46," Ahorros reales "),c.Tb(),c.Ub(47,"div",33),c.Hc(48),c.Tb(),c.Pb(49,"div",34),c.Tb(),c.Ub(50,"div",8),c.Ub(51,"div",2),c.Ub(52,"button",9),c.cc("click",(function(){return c.xc(o),c.ec().save()})),c.Pb(53,"i",38),c.Ub(54,"span"),c.Hc(55," Guardar"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=c.ec();c.Cb(21),c.Jc(" ",r.revenues," "),c.Cb(2),c.kc("ngForOf",r.template.ingresos),c.Cb(5),c.Jc(" ",r.primaryExpenses," "),c.Cb(2),c.kc("ngForOf",r.template.pagos),c.Cb(5),c.Jc(" ",r.secondaryExpenses," "),c.Cb(2),c.kc("ngForOf",r.template.pagos),c.Cb(5),c.Jc(" ",r.promiseSavings," "),c.Cb(6),c.Jc(" ",r.realSavings," ")}}var le=function(e,t){return{"alert-success":e,"alert-danger":t}};function de(e,t){if(1&e&&(c.Ub(0,"div",56),c.Hc(1),c.Tb()),2&e){var o=t.$implicit;c.kc("ngClass",c.oc(2,le,o.status,!o.status)),c.Cb(1),c.Jc(" ",o.message," ")}}function be(e,t){if(1&e&&(c.Ub(0,"div"),c.Fc(1,de,2,5,"div",55),c.Tb()),2&e){var o=c.ec(2);c.Cb(1),c.kc("ngForOf",o.tips)}}function ue(e,t){1&e&&(c.Ub(0,"div",57),c.Hc(1," Debes a\xf1adir ingresos o gastos para recibir tips. "),c.Tb())}function me(e,t){if(1&e&&(c.Ub(0,"div",56),c.Hc(1),c.Tb()),2&e){var o=t.$implicit;c.kc("ngClass",c.oc(2,le,o.status,!o.status)),c.Cb(1),c.Jc(" ",o.message," ")}}function pe(e,t){if(1&e&&(c.Ub(0,"div"),c.Fc(1,me,2,5,"div",55),c.Tb()),2&e){var o=c.ec(2);c.Cb(1),c.kc("ngForOf",o.goodPracticesUsed)}}function fe(e,t){1&e&&(c.Ub(0,"div",57),c.Hc(1," No existen buenas pr\xe1cticas que aplicar "),c.Tb())}function ve(e,t){if(1&e&&(c.Ub(0,"div",16),c.Ub(1,"div",51),c.Ub(2,"div",13),c.Ub(3,"div",14),c.Hc(4," Tips "),c.Tb(),c.Ub(5,"div",15),c.Fc(6,be,2,1,"div",52),c.Fc(7,ue,2,0,"ng-template",null,53,c.Gc),c.Tb(),c.Tb(),c.Tb(),c.Ub(9,"div",51),c.Ub(10,"div",13),c.Ub(11,"div",14),c.Hc(12," Buenas pr\xe1cticas "),c.Tb(),c.Ub(13,"div",15),c.Fc(14,pe,2,1,"div",52),c.Fc(15,fe,2,0,"ng-template",null,54,c.Gc),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&e){var o=c.vc(8),r=c.vc(16),n=c.ec();c.Cb(6),c.kc("ngIf",(null==n.tips?null:n.tips.length)>0)("ngIfElse",o),c.Cb(8),c.kc("ngIf",(null==n.goodPracticesUsed?null:n.goodPracticesUsed.length)>0)("ngIfElse",r)}}var ge,he,Te=function(){return{width:"75vw"}},ye=[{path:"",component:G},{path:":id",component:(ge=function(){function e(t,o,r,n,i,a,s,c){_classCallCheck(this,e),this.activatedRoute=t,this.location=o,this.templateService=r,this.monthService=n,this.expenseService=i,this.profitService=a,this.messageService=s,this.goodPracticeService=c,this.isProfit=!0,this.revenues=0,this.primaryExpenses=0,this.secondaryExpenses=0,this.promiseSavings=0,this.realSavings=0,this.goodPractices=[],this.goodPracticesUsed=[],this.tips=[],this.display=!1,this.types=[{name:"Ingresos",code:"ingresos"},{name:"Gastos primarios",code:"gastos-primarios"},{name:"Gastos secundarios",code:"gastos-secundarios"}]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;Promise.resolve().then((function(){return e.loading=!0})),Object(L.a)(this.getPrimaryMonthlyExpenses(),this.getSecondaryMonthlyExpenses(),this.getMonthlyProfits(),this.getGoodPractices(),this.getTemplate()).subscribe((function(t){var o=_slicedToArray(t,5),r=o[0],n=o[1],i=o[2],a=o[3],s=o[4];e.primaryMonthlyExpenses=r.data,e.secondaryMonthlyExpenses=n.data,e.monthlyProfits=i.data,e.resources=e.monthlyProfits,e.goodPractices=a.data,e.template=s.data,e.loading=!1,e.calculate()}),(function(t){e.loading=!1,e.messageService.add({severity:"error",summary:"Error",detail:t.error.message})}))}},{key:"getTemplate",value:function(){return this.templateService.find(this.activatedRoute.snapshot.params.id)}},{key:"getPrimaryMonthlyExpenses",value:function(){return this.expenseService.findAllPrimaryMonthlyExpenses(this.activatedRoute.snapshot.params.id)}},{key:"getSecondaryMonthlyExpenses",value:function(){return this.expenseService.findAllSecondaryMonthlyExpenses(this.activatedRoute.snapshot.params.id)}},{key:"getMonthlyProfits",value:function(){return this.profitService.findAllMonthlyProfits()}},{key:"getGoodPractices",value:function(){return this.goodPracticeService.findAll()}},{key:"selectResource",value:function(e){"ingresos"==e.value.code?(this.resources=this.monthlyProfits,this.isProfit=!0):"gastos-primarios"==e.value.code?(this.resources=this.primaryMonthlyExpenses,this.isProfit=!1):"gastos-secundarios"==e.value.code&&(this.resources=this.secondaryMonthlyExpenses,this.isProfit=!1),this.selectedResource=null}},{key:"back",value:function(){this.location.back()}},{key:"getMonth",value:function(e){return this.monthService.getMonth(e)}},{key:"addResouce",value:function(){var e=this;if(this.selectedResource.id_tipo_ganancia)if(this.template.ingresos.filter((function(t){return t.id===e.selectedResource.id})).length>0)this.messageService.add({severity:"error",summary:"Error",detail:"La ganancia ya est\xe1 a\xf1adida en la plantilla"});else{var t=new $.a;t.ganancia_id=this.selectedResource,t.cantidad=0,t.plantilla_id=this.template.id,t.id=this.selectedResource.id,this.template.ingresos.push(t),this.messageService.add({severity:"success",summary:"\xc9xito",detail:"Se ha a\xf1adido el ingreso. Recuerda introducir un valor"})}else if(this.template.pagos.filter((function(t){return t.id===e.selectedResource.id})).length>0)this.messageService.add({severity:"error",summary:"Error",detail:"El gasto ya est\xe1 a\xf1adido en la plantilla"});else{var o=new q.a;o.gasto_id=this.selectedResource,o.cantidad=0,o.pagado=0,o.plantilla_id=this.template.id,o.id=this.selectedResource.id,this.template.pagos.push(o),this.messageService.add({severity:"success",summary:"\xc9xito",detail:"Se ha a\xf1adido el pago. Recuerda introducir un valor"})}this.calculateTips()}},{key:"deletePayment",value:function(e){this.template.pagos=this.template.pagos.filter((function(t){return t.id!==e})),this.calculate()}},{key:"deleteRevenue",value:function(e){this.template.ingresos=this.template.ingresos.filter((function(t){return t.id!==e})),this.calculate()}},{key:"save",value:function(){var e=this;if(0===this.template.pagos.length&&0===this.template.ingresos.length)this.messageService.add({severity:"error",summary:"Error",detail:"Se debe a\xf1adir al menos un gasto o ingreso"});else{var t=this.template.pagos.find((function(e){return null==e.cantidad||0===e.cantidad})),o=this.template.ingresos.find((function(e){return null==e.cantidad||0===e.cantidad}));t||o?this.messageService.add({severity:"error",summary:"Error",detail:"El campo valor no puede estar vac\xedo o ser 0"}):this.templateService.update(this.template).subscribe((function(t){e.messageService.add({severity:"success",summary:"\xc9xito",detail:"Se ha actualizado la plantilla"})}),(function(t){e.messageService.add({severity:"error",summary:"Error",detail:"No se ha podido actualizar la plantilla"})}))}}},{key:"calculate",value:function(){this.calculateTemplate(),this.calculateGoodPractices(),this.calculateTips()}},{key:"calculateTemplate",value:function(){this.template.ingresos.forEach((function(e){return e.cantidad=+e.cantidad})),this.revenues=0===this.template.ingresos.length?0:this.template.ingresos.map((function(e){return e.cantidad})).reduce((function(e,t){return parseFloat(e.toString())+parseFloat(t.toString())})),this.template.pagos.forEach((function(e){return e.cantidad=+e.cantidad}));var e=this.template.pagos.filter((function(e){return"Mensuales Primarios"===e.gasto_id.id_tipo_gasto.valor})),t=0;e.length>0&&(t=e.map((function(e){return e.cantidad})).reduce((function(e,t){return parseFloat(e.toString())+parseFloat(t.toString())})));var o=this.template.pagos.filter((function(e){return"Mensuales Secundarios"===e.gasto_id.id_tipo_gasto.valor})),r=0;o.length>0&&(r=o.map((function(e){return e.cantidad})).reduce((function(e,t){return parseFloat(e.toString())+parseFloat(t.toString())}))),this.primaryExpenses=Number((.5*this.revenues-t).toFixed(2)),this.secondaryExpenses=Number((.3*this.revenues-r).toFixed(2)),this.promiseSavings=Number((.2*this.revenues).toFixed(2)),this.realSavings=Number((this.promiseSavings+this.primaryExpenses+this.secondaryExpenses).toFixed(2))}},{key:"calculateGoodPractices",value:function(){var e=this;if(this.template.pagos.length>0){this.goodPracticesUsed=[];var t=!0,o=!1,r=void 0;try{for(var n,i=function(){var t=n.value,o=e.template.pagos.find((function(e){return t.palabra_clave===e.gasto_id.nombre})),r=.01*t.porcentaje*e.revenues;o&&e.goodPracticesUsed.push(o.cantidad>r?{message:"Es recomendable no sobrepasar el "+t.porcentaje+"% de los ingresos en el gasto del "+t.palabra_clave,status:!1}:{message:"No sobrepasas el "+t.porcentaje+"% de los ingresos en el gasto del "+t.palabra_clave,status:!0})},a=this.goodPractices[Symbol.iterator]();!(t=(n=a.next()).done);t=!0)i()}catch(s){o=!0,r=s}finally{try{t||null==a.return||a.return()}finally{if(o)throw r}}}}},{key:"calculateTips",value:function(){this.tips=[],(this.template.ingresos.length>0||this.template.pagos.length>0)&&(0!==this.promiseSavings&&this.tips.push(this.promiseSavings<this.realSavings?{message:"Perfecto! Ahorras este mes m\xe1s de lo esperado",status:!0}:{message:"No es aconsejable ahorrar menos de lo esperado",status:!1}),this.tips.push(this.realSavings<=0?{message:"Este mes no es bueno dado que no has ahorrado",status:!1}:{message:"Felicidades! Has ahorrado este mes",status:!0}),this.tips.push(this.primaryExpenses<0?{message:"Este mes sobrepasas el dinero establecido para gastos primarios",status:!1}:{message:"Perfecto! No sobrepasas los gastos primarios",status:!0}),this.tips.push(this.secondaryExpenses<0?{message:"Este mes sobrepasas el dinero establecido para gastos secundarios",status:!1}:{message:"Perfecto! No sobrepasas los gastos secundarios",status:!0}))}},{key:"openInfo",value:function(){this.display=!0}}]),e}(),ge.\u0275fac=function(e){return new(e||ge)(c.Ob(i.a),c.Ob(m.g),c.Ob(l.a),c.Ob(b.a),c.Ob(J.a),c.Ob(V.a),c.Ob(d.d),c.Ob(D.a))},ge.\u0275cmp=c.Ib({type:ge,selectors:[["app-create-template"]],decls:26,vars:14,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],[4,"ngIf"],["class","row",4,"ngIf"],["class","card",4,"ngIf"],["class","card mt-3",4,"ngIf"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3","text-right"],["type","button",1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"fas","fa-arrow-left"],["header","M\xe9todo 50/30/20",3,"visible","modal","baseZIndex","draggable","resizable","visibleChange"],["src","./assets/notfound.png","alt","No existen resultados",1,"d-block","mx-auto","img-not-found"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[1,"row","mt-3"],[1,"form-group","col-12","col-md-6"],["for","exampleInputPassword1"],["optionLabel","name",3,"options","onChange"],["optionLabel","nombre","placeholder","Elige el recurso...",3,"options","ngModel","ngModelChange"],["class","form-group offset-md-6 col-12 col-md-3",4,"ngIf"],[1,"form-group","col-12","text-right"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["aria-hidden","true",1,"fas","fa-plus"],[1,"form-group","offset-md-6","col-12","col-md-3"],[3,"routerLink"],[1,"card","mt-3"],[3,"click"],[1,"fas","fa-question-circle"],[1,"row","mx-1","mt-3","d-none","d-md-flex"],[1,"col-12","col-md-4","p-2","text-center","border","border-dark"],[1,"row","mx-1","text-white","mt-3","mt-md-0"],[1,"fixed-row","col-12","col-md-4","p-2","text-center","border","border-dark"],[1,"fixed-row","col-12","col-md-4","p-2","text-center","border","border-dark","d-none","d-md-block"],["class","row mx-1",4,"ngFor","ngForOf"],[1,"row","mx-1","text-white"],[4,"ngFor","ngForOf"],["aria-hidden","true",1,"fas","fa-save"],[1,"row","mx-1"],[1,"resource-row","col-12","col-md-4","text-center","border","border-dark","d-flex","justify-content-center","align-items-center","py-2","py-md-0"],[1,"resource-row","col-12","col-md-4","text-center","border","border-dark","py-2","py-md-0"],["type","textbox","placeholder","XX.XX","appTwoDigitDecimaNumber","",1,"form-control","form-control-user",3,"ngModel","input","ngModelChange"],[1,"resource-row","col-12","col-md-4","text-center","border","border-dark","border-left-0","py-2","py-md-0"],["type","button",1,"btn","btn-primary","btn-sm","mt-1",3,"click"],["aria-hidden","true",1,"fas","fa-trash-alt"],["class","row mx-1",4,"ngIf"],[1,"resource-row","col-6","col-md-2","text-center","border","border-dark","border-right-0","d-flex","justify-content-center","align-items-center","py-2","py-md-0"],["name","groupname","binary","true","label","Pagado",3,"ngModel","ngModelChange"],[1,"resource-row","col-6","col-md-2","primary-expense-item","text-center","border","border-dark","border-left-0","py-2","py-md-0"],[1,"resource-row","col-6","col-md-2","text-center","border","border-dark","border-left-0"],[1,"col-12","col-md-6","mt-3","mt-md-0"],[4,"ngIf","ngIfElse"],["noTips",""],["noGoodPractice",""],["class","alert text-dark","role","alert",3,"ngClass",4,"ngFor","ngForOf"],["role","alert",1,"alert","text-dark",3,"ngClass"],["role","alert",1,"alert","alert-secondary"]],template:function(e,t){1&e&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Fc(3,B,2,2,"h1",3),c.Fc(4,W,2,0,"h1",3),c.Tb(),c.Tb(),c.Pb(5,"hr"),c.Fc(6,Z,2,0,"div",4),c.Fc(7,oe,21,6,"div",5),c.Fc(8,ce,56,8,"div",6),c.Fc(9,ve,17,4,"div",7),c.Ub(10,"div",8),c.Ub(11,"div",2),c.Ub(12,"button",9),c.cc("click",(function(){return t.back()})),c.Pb(13,"i",10),c.Ub(14,"span"),c.Hc(15," Volver"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(16,"p-dialog",11),c.cc("visibleChange",(function(e){return t.display=e})),c.Hc(17," Este m\xe9todo de ahorro consiste en: "),c.Ub(18,"ul"),c.Ub(19,"li"),c.Hc(20,"El 50% de los ingresos destinados para gastos primarios, es decir, aquellos primordiales todos los meses "),c.Tb(),c.Ub(21,"li"),c.Hc(22,"El 30% de los ingresos destinados para gastos secundarios, es decir, aquellos como caprichos o gastos del d\xeda a d\xeda"),c.Tb(),c.Ub(23,"li"),c.Hc(24,"El 20% de los ingresos destinados para ahorros"),c.Tb(),c.Tb(),c.Hc(25," De esta forma, la aplicaci\xf3n se encarga de gestionar tus ingresos y pagos de cada mes.\n"),c.Tb()),2&e&&(c.Cb(3),c.kc("ngIf",t.template),c.Cb(1),c.kc("ngIf",!t.template),c.Cb(2),c.kc("ngIf",!t.template&&!t.loading),c.Cb(1),c.kc("ngIf",t.template),c.Cb(1),c.kc("ngIf",t.template),c.Cb(1),c.kc("ngIf",t.template),c.Cb(7),c.Dc(c.mc(13,Te)),c.kc("visible",t.display)("modal",!0)("baseZIndex",1e4)("draggable",!1)("resizable",!1))},directives:[m.k,X.a,p.a,a.h,a.j,i.d,m.j,a.a,Y.a,z.a,m.i],styles:[".fixed-row[_ngcontent-%COMP%]{background-color:#46545c}.resource-row[_ngcontent-%COMP%]{background-color:#f0b153}input[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus{background:#f0b153;text-align:center;border:none!important;box-shadow:none}"]}),ge)}],Ue=((he=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:he}),he.\u0275inj=c.Lb({factory:function(e){return new(e||he)},imports:[[i.e.forChild(ye)],i.e]}),he);o.d(t,"TemplatesModule",(function(){return Ce}));var ke,Ce=((ke=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:ke}),ke.\u0275inj=c.Lb({factory:function(e){return new(e||ke)},imports:[[r.a,n.a,Ue]]}),ke)}}]);