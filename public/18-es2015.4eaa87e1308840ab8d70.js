(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{XWaT:function(e,t,o){"use strict";o.r(t);var i=o("PCNd"),s=o("I5S5"),n=o("tyNb"),r=o("3Pt+");class a{}var c=o("fXoL"),d=o("0MV2"),l=o("7zfz"),b=o("qan5"),m=o("LuMj"),p=o("ofXK"),u=o("arFO");function g(e,t){1&e&&(c.Tb(0,"div"),c.Gc(1," El a\xf1o es obligatorio "),c.Sb())}function h(e,t){1&e&&(c.Tb(0,"div"),c.Gc(1," El a\xf1o debe estar formado por cuatro n\xfameros "),c.Sb())}function f(e,t){if(1&e&&(c.Tb(0,"div",24),c.Ec(1,g,2,0,"div",25),c.Ec(2,h,2,0,"div",25),c.Sb()),2&e){const e=c.dc(2);c.Bb(1),c.jc("ngIf",e.addForm.controls.anno.errors.required),c.Bb(1),c.jc("ngIf",e.addForm.controls.anno.errors.pattern)}}function v(e,t){1&e&&(c.Tb(0,"div"),c.Gc(1," El mes es obligatorio "),c.Sb())}function S(e,t){if(1&e&&(c.Tb(0,"div",24),c.Ec(1,v,2,0,"div",25),c.Sb()),2&e){const e=c.dc(2);c.Bb(1),c.jc("ngIf",e.addForm.controls.mes.errors.required)}}const T=function(e,t){return{"fa-plus":e,"fa-spinner fa-spin":t}};function y(e,t){if(1&e){const e=c.Ub();c.Tb(0,"form",14),c.Tb(1,"div",3),c.Tb(2,"div",15),c.Tb(3,"label",16),c.Gc(4,"A\xf1o"),c.Sb(),c.Ob(5,"input",17),c.Ec(6,f,3,2,"div",18),c.Sb(),c.Tb(7,"div",15),c.Tb(8,"label",19),c.Gc(9,"Mes"),c.Sb(),c.Ob(10,"p-dropdown",20),c.Ec(11,S,2,1,"div",18),c.Sb(),c.Tb(12,"div",21),c.Tb(13,"button",22),c.bc("click",(function(){return c.wc(e),c.dc().addTemplate()})),c.Ob(14,"i",23),c.Tb(15,"span"),c.Gc(16," A\xf1adir"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.dc();c.jc("formGroup",e.addForm),c.Bb(6),c.jc("ngIf",e.addForm.controls.anno.invalid&&(e.addForm.controls.anno.dirty||e.addForm.controls.anno.touched)),c.Bb(4),c.jc("options",e.months)("showClear",!0),c.Bb(1),c.jc("ngIf",e.addForm.controls.mes.invalid&&(e.addForm.controls.mes.dirty||e.addForm.controls.mes.touched)),c.Bb(2),c.jc("disabled",e.addForm.pristine||e.addForm.invalid||e.loading),c.Bb(1),c.jc("ngClass",c.nc(7,T,!e.loading,e.loading))}}function w(e,t){1&e&&(c.Tb(0,"div"),c.Gc(1," El a\xf1o es obligatorio "),c.Sb())}function E(e,t){1&e&&(c.Tb(0,"div"),c.Gc(1," El a\xf1o debe estar formado por cuatro n\xfameros "),c.Sb())}function x(e,t){if(1&e&&(c.Tb(0,"div",24),c.Ec(1,w,2,0,"div",25),c.Ec(2,E,2,0,"div",25),c.Sb()),2&e){const e=c.dc(2);c.Bb(1),c.jc("ngIf",e.cloneForm.controls.anno.errors.required),c.Bb(1),c.jc("ngIf",e.cloneForm.controls.anno.errors.pattern)}}function j(e,t){1&e&&(c.Tb(0,"div"),c.Gc(1," El mes es obligatorio "),c.Sb())}function B(e,t){if(1&e&&(c.Tb(0,"div",24),c.Ec(1,j,2,0,"div",25),c.Sb()),2&e){const e=c.dc(2);c.Bb(1),c.jc("ngIf",e.cloneForm.controls.mes.errors.required)}}function G(e,t){1&e&&(c.Tb(0,"div"),c.Gc(1," El a\xf1o es obligatorio "),c.Sb())}function M(e,t){if(1&e&&(c.Tb(0,"div",24),c.Ec(1,G,2,0,"div",25),c.Sb()),2&e){const e=c.dc(2);c.Bb(1),c.jc("ngIf",e.cloneForm.controls.newAnno.errors.required)}}function F(e,t){1&e&&(c.Tb(0,"div"),c.Gc(1," El mes es obligatorio "),c.Sb())}function I(e,t){if(1&e&&(c.Tb(0,"div",24),c.Ec(1,F,2,0,"div",25),c.Sb()),2&e){const e=c.dc(2);c.Bb(1),c.jc("ngIf",e.cloneForm.controls.newMes.errors.required)}}const P=function(e,t){return{"fa-edit":e,"fa-spinner fa-spin":t}};function C(e,t){if(1&e){const e=c.Ub();c.Tb(0,"form",14),c.Tb(1,"div",3),c.Tb(2,"div",15),c.Tb(3,"label",16),c.Gc(4,"A\xf1o"),c.Sb(),c.Ob(5,"input",17),c.Ec(6,x,3,2,"div",18),c.Sb(),c.Tb(7,"div",15),c.Tb(8,"label",19),c.Gc(9,"Mes"),c.Sb(),c.Ob(10,"p-dropdown",20),c.Ec(11,B,2,1,"div",18),c.Sb(),c.Sb(),c.Tb(12,"div",3),c.Tb(13,"div",15),c.Tb(14,"label",16),c.Gc(15,"Nuevo a\xf1o"),c.Sb(),c.Ob(16,"input",26),c.Ec(17,M,2,1,"div",18),c.Sb(),c.Tb(18,"div",15),c.Tb(19,"label",19),c.Gc(20,"Nuevo mes"),c.Sb(),c.Ob(21,"p-dropdown",27),c.Ec(22,I,2,1,"div",18),c.Sb(),c.Tb(23,"div",21),c.Tb(24,"button",28),c.bc("click",(function(){return c.wc(e),c.dc().clone()})),c.Ob(25,"i",23),c.Tb(26,"span"),c.Gc(27," Copiar"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.dc();c.jc("formGroup",e.cloneForm),c.Bb(6),c.jc("ngIf",e.cloneForm.controls.anno.invalid&&(e.cloneForm.controls.anno.dirty||e.cloneForm.controls.anno.touched)),c.Bb(4),c.jc("options",e.months)("showClear",!0),c.Bb(1),c.jc("ngIf",e.cloneForm.controls.mes.invalid&&(e.cloneForm.controls.mes.dirty||e.cloneForm.controls.mes.touched)),c.Bb(6),c.jc("ngIf",e.cloneForm.controls.newAnno.invalid&&(e.cloneForm.controls.newAnno.dirty||e.cloneForm.controls.newAnno.touched)),c.Bb(4),c.jc("options",e.months)("showClear",!0),c.Bb(1),c.jc("ngIf",e.cloneForm.controls.newMes.invalid&&(e.cloneForm.controls.newMes.dirty||e.cloneForm.controls.newMes.touched)),c.Bb(2),c.jc("disabled",e.cloneForm.pristine||e.cloneForm.invalid||e.loading),c.Bb(1),c.jc("ngClass",c.nc(11,P,!e.loading,e.loading))}}function k(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",33),c.Tb(1,"div",34),c.Tb(2,"div",6),c.Tb(3,"div",1),c.Tb(4,"div",2),c.Gc(5),c.Sb(),c.Tb(6,"div",35),c.Tb(7,"button",36),c.bc("click",(function(){c.wc(e);const o=t.$implicit;return c.dc(2).editTemplate(o.id)})),c.Ob(8,"i",37),c.Sb(),c.Tb(9,"button",38),c.bc("click",(function(){c.wc(e);const o=t.$implicit;return c.dc(2).confirm(o.id)})),c.Ob(10,"i",39),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=t.$implicit,o=c.dc(2);c.Bb(5),c.Ic(" ",o.getMonth(e.mes)," ")}}function O(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div"),c.Tb(1,"div",3),c.Tb(2,"div",29),c.Tb(3,"label",30),c.Gc(4,"Seleccione un a\xf1o:"),c.Sb(),c.Tb(5,"p-dropdown",31),c.bc("ngModelChange",(function(t){return c.wc(e),c.dc().selectedYear=t}))("onChange",(function(t){return c.wc(e),c.dc().selectYear(t)})),c.Sb(),c.Sb(),c.Sb(),c.Tb(6,"div",3),c.Ec(7,k,11,1,"div",32),c.Sb(),c.Sb()}if(2&e){const e=c.dc();c.Bb(5),c.jc("ngModel",e.selectedYear)("options",e.years),c.Bb(2),c.jc("ngForOf",e.templates)}}function N(e,t){1&e&&(c.Tb(0,"div",1),c.Tb(1,"div",41),c.Ob(2,"img",42),c.Sb(),c.Sb())}function _(e,t){if(1&e&&c.Ec(0,N,3,0,"div",40),2&e){const e=c.dc();c.jc("ngIf",!e.loading)}}let R=(()=>{class e{constructor(e,t,o,i,s,n){this.router=e,this.templateService=t,this.formBuilder=o,this.messageService=i,this.confirmationService=s,this.monthService=n,this.annoRegex=/^(\d{4})$/,this.optionCreation="A\xf1adir plantilla",this.months=this.monthService.getMonths()}ngOnInit(){this.getTemplates(),this.buildForm()}buildForm(){this.addForm=this.formBuilder.group({anno:new r.c("",[r.n.required,r.n.pattern(this.annoRegex)]),mes:new r.c("",r.n.required)}),this.cloneForm=this.formBuilder.group({anno:new r.c("",[r.n.required,r.n.pattern(this.annoRegex)]),mes:new r.c("",r.n.required),newAnno:new r.c("",[r.n.required,r.n.pattern(this.annoRegex)]),newMes:new r.c("",r.n.required)})}getTemplates(){Promise.resolve().then(()=>this.loading=!0),this.templateService.get().subscribe(e=>{this.templatesTotal=e.data,this.years=e.years,this.loading=!1,this.years&&this.years.length>0&&this.calculateTemplates(this.years[0])},()=>{this.loading=!1})}getMonth(e){return this.monthService.getMonths().find(t=>t.value===e).name}selectYear(e){this.calculateTemplates()}editTemplate(e){this.router.navigate(["/home/templates/"+e])}addTemplate(){const e=new a;e.anno=this.addForm.get("anno").value,e.mes=this.addForm.get("mes").value.value,Promise.resolve().then(()=>this.loading=!0),this.templateService.add(e).subscribe(e=>{let t=[...this.templatesTotal];t.push(e.data),this.templatesTotal=t,this.years=e.years,this.years&&this.years.length>0&&this.calculateTemplates(this.years[0]),this.loading=!1,this.messageService.add({severity:"success",summary:"\xc9xito",detail:e.message})},e=>{this.loading=!1,this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}clone(){Promise.resolve().then(()=>this.loading=!0);const e={anno:this.cloneForm.get("anno").value,mes:this.cloneForm.get("mes").value.value,newAnno:this.cloneForm.get("newAnno").value,newMes:this.cloneForm.get("newMes").value.value};this.templateService.clone(e).subscribe(e=>{let t=[...this.templatesTotal];t.push(e.data),this.templatesTotal=t,this.years=e.years,this.calculateTemplates(),this.loading=!1,this.messageService.add({severity:"success",summary:"\xc9xito",detail:e.message})},e=>{this.loading=!1,this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}calculateTemplates(e){this.selectedYear=e||this.selectedYear,this.templates=this.templatesTotal.filter(e=>e.anno===this.selectedYear.anno).sort((e,t)=>e.mes>t.mes?1:-1)}confirm(e){this.confirmationService.confirm({message:"\xbfEst\xe1s seguro de que deseas borrar?",header:"Confirmaci\xf3n",icon:"pi pi-exclamation-triangle",accept:()=>{this.delete(e)}})}delete(e){this.templateService.delete(e).subscribe(t=>{this.templatesTotal=this.templatesTotal.filter(t=>t.id!==e),this.templates=this.templates.filter(t=>t.id!==e),this.messageService.add({severity:"error",summary:"Error",detail:t.message}),this.years=t.years,this.years&&this.years.length>0&&this.calculateTemplates(this.years[0])})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(n.b),c.Nb(d.a),c.Nb(r.b),c.Nb(l.d),c.Nb(l.a),c.Nb(b.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-templates"]],decls:30,vars:6,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],[1,"row","mt-3"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[1,"ui-g",2,"width","250px","margin-bottom","10px"],[1,"ui-g-12"],["name","group1","value","A\xf1adir plantilla","label","A\xf1adir plantilla","inputId","opt1",3,"ngModel","ngModelChange"],["name","group1","value","Copiar plantilla","label","Copiar plantilla","inputId","opt2",3,"ngModel","ngModelChange"],[3,"formGroup",4,"ngIf"],[4,"ngIf","ngIfElse"],["noTemplates",""],[3,"formGroup"],[1,"col-12","col-md-4","form-group"],["for","anno"],["type","number","id","anno","formControlName","anno",1,"form-control","form-control-user"],["class","alert alert-danger mt-1",4,"ngIf"],["for","mes"],["formControlName","mes","placeholder","Seleccione un mes","optionLabel","name",3,"options","showClear"],[1,"col-12","col-md-4","form-group","text-right","d-flex","align-items-end"],["type","button",1,"btn","btn-primary","mr-4",3,"disabled","click"],["aria-hidden","true",1,"fas",3,"ngClass"],[1,"alert","alert-danger","mt-1"],[4,"ngIf"],["type","number","id","anno","formControlName","newAnno",1,"form-control","form-control-user"],["formControlName","newMes","placeholder","Seleccione un mes","optionLabel","name",3,"options","showClear"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"col-12","col-md-3","form-group"],["for","exampleInputEmail1"],["optionLabel","anno","placeholder","Seleccione un a\xf1o",3,"ngModel","options","ngModelChange","onChange"],["class","col-12 col-md-4 col-xl-3 mt-3",4,"ngFor","ngForOf"],[1,"col-12","col-md-4","col-xl-3","mt-3"],[1,"card","bg-secondary","border","border-dark"],[1,"col-12","text-right"],["type","button",1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"fas","fa-edit"],["type","button",1,"ml-1","btn","btn-primary",3,"click"],["aria-hidden","true",1,"fas","fa-trash"],["class","row",4,"ngIf"],[1,"col-4","offset-4","form-group"],["src","./assets/notfound.png","alt","No existen resultados",1,"d-block","mx-auto","img-not-found"]],template:function(e,t){if(1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"h1"),c.Gc(4,"Plantillas"),c.Sb(),c.Sb(),c.Sb(),c.Ob(5,"hr"),c.Tb(6,"div",3),c.Tb(7,"div",2),c.Tb(8,"div",4),c.Tb(9,"div",5),c.Gc(10," Creador de plantillas "),c.Sb(),c.Tb(11,"div",6),c.Tb(12,"div",1),c.Tb(13,"div",2),c.Tb(14,"div",7),c.Tb(15,"div",8),c.Tb(16,"p-radioButton",9),c.bc("ngModelChange",(function(e){return t.optionCreation=e})),c.Sb(),c.Sb(),c.Tb(17,"div",8),c.Tb(18,"p-radioButton",10),c.bc("ngModelChange",(function(e){return t.optionCreation=e})),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ec(19,y,17,10,"form",11),c.Ec(20,C,28,14,"form",11),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(21,"div",3),c.Tb(22,"div",2),c.Tb(23,"div",4),c.Tb(24,"div",5),c.Gc(25," Listado de plantillas "),c.Sb(),c.Tb(26,"div",6),c.Ec(27,O,8,3,"div",12),c.Ec(28,_,1,1,"ng-template",null,13,c.Fc),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e){const e=c.uc(29);c.Bb(16),c.jc("ngModel",t.optionCreation),c.Bb(2),c.jc("ngModel",t.optionCreation),c.Bb(1),c.jc("ngIf","A\xf1adir plantilla"===t.optionCreation),c.Bb(1),c.jc("ngIf","Copiar plantilla"===t.optionCreation),c.Bb(7),c.jc("ngIf",(null==t.templatesTotal?null:t.templatesTotal.length)>0)("ngIfElse",e)}},directives:[m.a,r.h,r.j,p.k,r.o,r.i,r.e,r.k,r.a,r.d,u.a,p.i,p.j],styles:[""]}),e})();var A=o("QVck"),$=o("mgSE"),q=o("itXk"),U=o("PTGG"),L=o("OS4P"),X=o("3iQZ"),Y=o("kAuD"),D=o("Ji6n"),z=o("xlun");function H(e,t){if(1&e&&(c.Tb(0,"h1"),c.Gc(1),c.Sb()),2&e){const e=c.dc();c.Bb(1),c.Jc("Plantilla ",e.getMonth(e.template.mes)," ",e.template.anno,"")}}function J(e,t){1&e&&(c.Tb(0,"h1"),c.Gc(1,"Plantilla"),c.Sb())}function V(e,t){1&e&&(c.Tb(0,"div",1),c.Ob(1,"img",11),c.Sb())}const K=function(){return["/home/expenses/new"]};function Q(e,t){1&e&&(c.Tb(0,"div",24),c.Gc(1," Si desea a\xf1adir un nuevo gasto acceda "),c.Tb(2,"a",25),c.Gc(3,"gastos"),c.Sb(),c.Sb()),2&e&&(c.Bb(2),c.jc("routerLink",c.lc(1,K)))}const W=function(){return["/home/profits/new"]};function Z(e,t){1&e&&(c.Tb(0,"div",24),c.Gc(1," Si desea a\xf1adir una nueva ganancia acceda "),c.Tb(2,"a",25),c.Gc(3,"ganancias"),c.Sb(),c.Sb()),2&e&&(c.Bb(2),c.jc("routerLink",c.lc(1,W)))}function ee(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",12),c.Tb(1,"div",13),c.Gc(2," Gestor de recursos "),c.Sb(),c.Tb(3,"div",14),c.Tb(4,"div",15),c.Tb(5,"div",16),c.Tb(6,"label",17),c.Gc(7,"Tipo de recurso"),c.Sb(),c.Tb(8,"p-dropdown",18),c.bc("onChange",(function(t){return c.wc(e),c.dc().selectResource(t)})),c.Sb(),c.Sb(),c.Tb(9,"div",16),c.Tb(10,"label",17),c.Gc(11,"Recurso"),c.Sb(),c.Tb(12,"p-dropdown",19),c.bc("ngModelChange",(function(t){return c.wc(e),c.dc().selectedResource=t})),c.Sb(),c.Sb(),c.Ec(13,Q,4,2,"div",20),c.Ec(14,Z,4,2,"div",20),c.Sb(),c.Tb(15,"div",1),c.Tb(16,"div",21),c.Tb(17,"button",22),c.bc("click",(function(){return c.wc(e),c.dc().addResouce()})),c.Ob(18,"i",23),c.Tb(19,"span"),c.Gc(20," A\xf1adir recurso"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.dc();c.Bb(8),c.jc("options",e.types),c.Bb(4),c.jc("options",e.resources)("ngModel",e.selectedResource),c.Bb(1),c.jc("ngIf",!e.isProfit),c.Bb(1),c.jc("ngIf",e.isProfit),c.Bb(3),c.jc("disabled",!e.selectedResource||""===e.selectedResource)}}function te(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",37),c.Tb(1,"div",38),c.Gc(2),c.Sb(),c.Tb(3,"div",39),c.Tb(4,"input",40),c.bc("input",(function(){return c.wc(e),c.dc(2).calculate()}))("ngModelChange",(function(o){return c.wc(e),t.$implicit.cantidad=o})),c.Sb(),c.Sb(),c.Tb(5,"div",41),c.Tb(6,"button",42),c.bc("click",(function(){c.wc(e);const o=t.$implicit;return c.dc(2).deleteRevenue(o.id)})),c.Ob(7,"i",43),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=t.$implicit;c.Bb(2),c.Ic(" ",e.ganancia_id.nombre," "),c.Bb(2),c.jc("ngModel",e.cantidad)}}function oe(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",37),c.Tb(1,"div",38),c.Gc(2),c.Sb(),c.Tb(3,"div",39),c.Tb(4,"input",40),c.bc("input",(function(){return c.wc(e),c.dc(3).calculate()}))("ngModelChange",(function(t){return c.wc(e),c.dc().$implicit.cantidad=t})),c.Sb(),c.Sb(),c.Tb(5,"div",45),c.Tb(6,"p-checkbox",46),c.bc("ngModelChange",(function(t){return c.wc(e),c.dc().$implicit.pagado=t})),c.Sb(),c.Sb(),c.Tb(7,"div",47),c.Tb(8,"button",42),c.bc("click",(function(){c.wc(e);const t=c.dc().$implicit;return c.dc(2).deletePayment(t.id)})),c.Ob(9,"i",43),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.dc().$implicit;c.Bb(2),c.Ic(" ",e.gasto_id.nombre," "),c.Bb(2),c.jc("ngModel",e.cantidad),c.Bb(2),c.jc("ngModel",e.pagado)}}function ie(e,t){if(1&e&&(c.Tb(0,"div"),c.Ec(1,oe,10,3,"div",44),c.Sb()),2&e){const e=t.$implicit;c.Bb(1),c.jc("ngIf","Mensuales Primarios"===e.gasto_id.id_tipo_gasto.valor)}}function se(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",37),c.Tb(1,"div",38),c.Gc(2),c.Sb(),c.Tb(3,"div",39),c.Tb(4,"input",40),c.bc("input",(function(){return c.wc(e),c.dc(3).calculate()}))("ngModelChange",(function(t){return c.wc(e),c.dc().$implicit.cantidad=t})),c.Sb(),c.Sb(),c.Tb(5,"div",45),c.Tb(6,"p-checkbox",46),c.bc("ngModelChange",(function(t){return c.wc(e),c.dc().$implicit.pagado=t})),c.Sb(),c.Sb(),c.Tb(7,"div",48),c.Tb(8,"button",42),c.bc("click",(function(){c.wc(e);const t=c.dc().$implicit;return c.dc(2).deletePayment(t.id)})),c.Ob(9,"i",43),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.dc().$implicit;c.Bb(2),c.Ic(" ",e.gasto_id.nombre," "),c.Bb(2),c.jc("ngModel",e.cantidad),c.Bb(2),c.jc("ngModel",e.pagado)}}function ne(e,t){if(1&e&&(c.Tb(0,"div"),c.Ec(1,se,10,3,"div",44),c.Sb()),2&e){const e=t.$implicit;c.Bb(1),c.jc("ngIf","Mensuales Secundarios"===e.gasto_id.id_tipo_gasto.valor)}}function re(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",26),c.Tb(1,"div",13),c.Gc(2," Plantilla "),c.Sb(),c.Tb(3,"div",14),c.Tb(4,"div",27),c.Tb(5,"div",28),c.Gc(6," Nombre "),c.Sb(),c.Tb(7,"div",29),c.Gc(8," Valor "),c.Sb(),c.Tb(9,"div",29),c.Gc(10," Opciones "),c.Sb(),c.Sb(),c.Tb(11,"div",30),c.Tb(12,"div",31),c.Gc(13," Ingresos "),c.Sb(),c.Tb(14,"div",32),c.Gc(15),c.Sb(),c.Ob(16,"div",33),c.Sb(),c.Ec(17,te,8,2,"div",34),c.Tb(18,"div",30),c.Tb(19,"div",31),c.Gc(20," Disponible Gastos primarios "),c.Sb(),c.Tb(21,"div",32),c.Gc(22),c.Sb(),c.Ob(23,"div",33),c.Sb(),c.Ec(24,ie,2,1,"div",35),c.Tb(25,"div",30),c.Tb(26,"div",31),c.Gc(27," Disponible Gastos secundarios "),c.Sb(),c.Tb(28,"div",32),c.Gc(29),c.Sb(),c.Ob(30,"div",33),c.Sb(),c.Ec(31,ne,2,1,"div",35),c.Tb(32,"div",30),c.Tb(33,"div",31),c.Gc(34," Ahorros esperados "),c.Sb(),c.Tb(35,"div",32),c.Gc(36),c.Sb(),c.Ob(37,"div",33),c.Sb(),c.Tb(38,"div",30),c.Tb(39,"div",31),c.Gc(40," Ahorros reales "),c.Sb(),c.Tb(41,"div",32),c.Gc(42),c.Sb(),c.Ob(43,"div",33),c.Sb(),c.Tb(44,"div",8),c.Tb(45,"div",2),c.Tb(46,"button",9),c.bc("click",(function(){return c.wc(e),c.dc().save()})),c.Ob(47,"i",36),c.Tb(48,"span"),c.Gc(49," Guardar"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&e){const e=c.dc();c.Bb(15),c.Ic(" ",e.revenues," "),c.Bb(2),c.jc("ngForOf",e.template.ingresos),c.Bb(5),c.Ic(" ",e.primaryExpenses," "),c.Bb(2),c.jc("ngForOf",e.template.pagos),c.Bb(5),c.Ic(" ",e.secondaryExpenses," "),c.Bb(2),c.jc("ngForOf",e.template.pagos),c.Bb(5),c.Ic(" ",e.promiseSavings," "),c.Bb(6),c.Ic(" ",e.realSavings," ")}}const ae=function(e,t){return{"alert-success":e,"alert-danger":t}};function ce(e,t){if(1&e&&(c.Tb(0,"div",54),c.Gc(1),c.Sb()),2&e){const e=t.$implicit;c.jc("ngClass",c.nc(2,ae,e.status,!e.status)),c.Bb(1),c.Ic(" ",e.message," ")}}function de(e,t){if(1&e&&(c.Tb(0,"div"),c.Ec(1,ce,2,5,"div",53),c.Sb()),2&e){const e=c.dc(2);c.Bb(1),c.jc("ngForOf",e.tips)}}function le(e,t){1&e&&(c.Tb(0,"div",55),c.Gc(1," No existen tips que aportar "),c.Sb())}function be(e,t){if(1&e&&(c.Tb(0,"div",54),c.Gc(1),c.Sb()),2&e){const e=t.$implicit;c.jc("ngClass",c.nc(2,ae,e.status,!e.status)),c.Bb(1),c.Ic(" ",e.message," ")}}function me(e,t){if(1&e&&(c.Tb(0,"div"),c.Ec(1,be,2,5,"div",53),c.Sb()),2&e){const e=c.dc(2);c.Bb(1),c.jc("ngForOf",e.goodPracticesUsed)}}function pe(e,t){1&e&&(c.Tb(0,"div",55),c.Gc(1," No existen buenas pr\xe1cticas que aplicar "),c.Sb())}function ue(e,t){if(1&e&&(c.Tb(0,"div",15),c.Tb(1,"div",49),c.Tb(2,"div",12),c.Tb(3,"div",13),c.Gc(4," Tips "),c.Sb(),c.Tb(5,"div",14),c.Ec(6,de,2,1,"div",50),c.Ec(7,le,2,0,"ng-template",null,51,c.Fc),c.Sb(),c.Sb(),c.Sb(),c.Tb(9,"div",49),c.Tb(10,"div",12),c.Tb(11,"div",13),c.Gc(12," Buenas pr\xe1cticas "),c.Sb(),c.Tb(13,"div",14),c.Ec(14,me,2,1,"div",50),c.Ec(15,pe,2,0,"ng-template",null,52,c.Fc),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e){const e=c.uc(8),t=c.uc(16),o=c.dc();c.Bb(6),c.jc("ngIf",(null==o.tips?null:o.tips.length)>0)("ngIfElse",e),c.Bb(8),c.jc("ngIf",(null==o.goodPracticesUsed?null:o.goodPracticesUsed.length)>0)("ngIfElse",t)}}const ge=[{path:"",component:R},{path:":id",component:(()=>{class e{constructor(e,t,o,i,s,n,r,a){this.activatedRoute=e,this.location=t,this.templateService=o,this.monthService=i,this.expenseService=s,this.profitService=n,this.messageService=r,this.goodPracticeService=a,this.isProfit=!0,this.revenues=0,this.primaryExpenses=0,this.secondaryExpenses=0,this.promiseSavings=0,this.realSavings=0,this.goodPractices=[],this.goodPracticesUsed=[],this.tips=[],this.types=[{name:"Ingresos",code:"ingresos"},{name:"Gastos primarios",code:"gastos-primarios"},{name:"Gastos secundarios",code:"gastos-secundarios"}]}ngOnInit(){Promise.resolve().then(()=>this.loading=!0),this.isNewTemplate="new"===this.activatedRoute.snapshot.params.id,Object(q.a)(this.getPrimaryMonthlyExpenses(),this.getSecondaryMonthlyExpenses(),this.getMonthlyProfits(),this.getGoodPractices(),this.getTemplate()).subscribe(([e,t,o,i,s])=>{this.primaryMonthlyExpenses=e.data,this.secondaryMonthlyExpenses=t.data,this.monthlyProfits=o.data,this.resources=this.monthlyProfits,this.goodPractices=i.data,this.template=s.data,this.loading=!1,this.calculate()},e=>{this.loading=!1,this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}getTemplate(){return this.templateService.find(this.activatedRoute.snapshot.params.id)}getPrimaryMonthlyExpenses(){return this.expenseService.findAllPrimaryMonthlyExpenses()}getSecondaryMonthlyExpenses(){return this.expenseService.findAllSecondaryMonthlyExpenses()}getMonthlyProfits(){return this.profitService.findAllMonthlyProfits()}getGoodPractices(){return this.goodPracticeService.findAll()}selectResource(e){"ingresos"==e.value.code?(this.resources=this.monthlyProfits,this.isProfit=!0):"gastos-primarios"==e.value.code?(this.resources=this.primaryMonthlyExpenses,this.isProfit=!1):"gastos-secundarios"==e.value.code&&(this.resources=this.secondaryMonthlyExpenses,this.isProfit=!1),this.selectedResource=null}back(){this.location.back()}getMonth(e){return this.monthService.getMonth(e)}addResouce(){if(this.selectedResource.id_tipo_ganancia)if(this.template.ingresos.filter(e=>e.id===this.selectedResource.id).length>0)this.messageService.add({severity:"error",summary:"Error",detail:"La ganancia ya est\xe1 a\xf1adida en la plantilla"});else{const e=new $.a;e.ganancia_id=this.selectedResource,e.cantidad=0,e.plantilla_id=this.template.id,e.id=this.selectedResource.id,this.template.ingresos.push(e)}else if(this.template.pagos.filter(e=>e.id===this.selectedResource.id).length>0)this.messageService.add({severity:"error",summary:"Error",detail:"El gasto ya est\xe1 a\xf1adido en la plantilla"});else{const e=new A.a;e.gasto_id=this.selectedResource,e.cantidad=0,e.pagado=0,e.plantilla_id=this.template.id,e.id=this.selectedResource.id,this.template.pagos.push(e)}}deletePayment(e){this.template.pagos=this.template.pagos.filter(t=>t.id!==e),this.calculate()}deleteRevenue(e){this.template.ingresos=this.template.ingresos.filter(t=>t.id!==e),this.calculate()}save(){if(0===this.template.pagos.length&&0===this.template.ingresos.length)this.messageService.add({severity:"error",summary:"Error",detail:"Se debe a\xf1adir al menos un gasto o ingreso"});else{const e=this.template.pagos.find(e=>null==e.cantidad||0===e.cantidad),t=this.template.ingresos.find(e=>null==e.cantidad||0===e.cantidad);e||t?this.messageService.add({severity:"error",summary:"Error",detail:"El campo valor no puede estar vac\xedo o ser 0"}):(this.template.pagos.forEach(e=>e.cantidad=+e.cantidad),this.template.ingresos.forEach(e=>e.cantidad=+e.cantidad),this.templateService.update(this.template).subscribe(e=>{this.messageService.add({severity:"success",summary:"\xc9xito",detail:"Se ha actualizado la plantilla"})},e=>{this.messageService.add({severity:"error",summary:"Error",detail:"No se ha podido actualizar la plantilla"})}))}}calculate(){this.calculateTemplate(),this.calculateGoodPractices(),this.calculateTips()}calculateTemplate(){this.revenues=this.template.ingresos.length>0?this.template.ingresos.map(e=>e.cantidad).reduce((e,t)=>e+t):0;const e=this.template.pagos.filter(e=>"Mensuales Primarios"===e.gasto_id.id_tipo_gasto.valor);let t=0;e.length>0&&(t=e.map(e=>e.cantidad).reduce((e,t)=>parseFloat(e.toString())+parseFloat(t.toString())));const o=this.template.pagos.filter(e=>"Mensuales Secundarios"===e.gasto_id.id_tipo_gasto.valor);let i=0;o.length>0&&(i=o.map(e=>e.cantidad).reduce((e,t)=>parseFloat(e.toString())+parseFloat(t.toString()))),this.primaryExpenses=Number((.5*this.revenues-t).toFixed(2)),this.secondaryExpenses=Number((.3*this.revenues-i).toFixed(2)),this.promiseSavings=Number((.2*this.revenues).toFixed(2)),this.realSavings=Number((this.promiseSavings+this.primaryExpenses+this.secondaryExpenses).toFixed(2))}calculateGoodPractices(){if(this.template.pagos.length>0){this.goodPracticesUsed=[];for(let e of this.goodPractices){const t=this.template.pagos.find(t=>e.palabra_clave===t.gasto_id.nombre),o=.01*e.porcentaje*this.revenues;t&&this.goodPracticesUsed.push(t.cantidad>o?{message:"Es recomendable no sobrepasar el "+e.porcentaje+"% de los ingresos en el gasto del "+e.palabra_clave,status:!1}:{message:"No sobrepasas el "+e.porcentaje+"% de los ingresos en el gasto del "+e.palabra_clave,status:!0})}}}calculateTips(){this.tips=[],0!==this.promiseSavings&&this.tips.push(this.promiseSavings<this.realSavings?{message:"Perfecto! Ahorras este mes m\xe1s de lo esperado",status:!0}:{message:"No es aconsejable ahorrar menos de lo esperado",status:!1}),this.tips.push(this.realSavings<=0?{message:"Este mes no es bueno dado que no has ahorrado",status:!1}:{message:"Felicidades! Has ahorrado este mes",status:!0}),this.tips.push(this.primaryExpenses<0?{message:"Este mes sobrepasas el dinero establecido para gastos primarios",status:!1}:{message:"Perfecto! No sobrepasas los gastos primarios",status:!0}),this.tips.push(this.secondaryExpenses<0?{message:"Este mes sobrepasas el dinero establecido para gastos secundarios",status:!1}:{message:"Perfecto! No sobrepasas los gastos secundarios",status:!0})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(n.a),c.Nb(p.g),c.Nb(d.a),c.Nb(b.a),c.Nb(U.a),c.Nb(L.a),c.Nb(l.d),c.Nb(X.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-create-template"]],decls:16,vars:6,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],[4,"ngIf"],["class","row",4,"ngIf"],["class","card",4,"ngIf"],["class","card mt-3",4,"ngIf"],["class","row mt-3",4,"ngIf"],[1,"row","mt-3","text-right"],["type","button",1,"btn","btn-primary",3,"click"],["aria-hidden","true",1,"fas","fa-arrow-left"],["src","./assets/notfound.png","alt","No existen resultados",1,"d-block","mx-auto","img-not-found"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[1,"row","mt-3"],[1,"form-group","col-12","col-md-6"],["for","exampleInputPassword1"],["optionLabel","name",3,"options","onChange"],["optionLabel","nombre","placeholder","Elige el recurso...",3,"options","ngModel","ngModelChange"],["class","form-group offset-md-6 col-12 col-md-3",4,"ngIf"],[1,"form-group","col-12","text-right"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["aria-hidden","true",1,"fas","fa-plus"],[1,"form-group","offset-md-6","col-12","col-md-3"],[3,"routerLink"],[1,"card","mt-3"],[1,"row","mx-1","mt-5","d-none","d-md-flex"],[1,"col-4","col-md-3","offset-md-2","p-2","text-center","border","border-dark"],[1,"col-4","col-md-2","p-2","text-center","border","border-dark"],[1,"row","mx-1","text-white"],[1,"fixed-row","col-12","col-md-3","offset-md-2","p-2","text-center","border","border-dark"],[1,"fixed-row","col-12","col-md-2","p-2","text-center","border","border-dark"],[1,"fixed-row","col-12","col-md-2","p-2","text-center","border","border-dark","d-none","d-md-block"],["class","row mx-1",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["aria-hidden","true",1,"fas","fa-save"],[1,"row","mx-1"],[1,"resource-row","col-12","col-md-3","offset-md-2","text-center","border","border-dark","d-flex","justify-content-center","align-items-center","py-2","py-md-0"],[1,"resource-row","col-12","col-md-2","text-center","border","border-dark","py-2","py-md-0"],["type","textbox","placeholder","XX.XX","appTwoDigitDecimaNumber","",1,"form-control","form-control-user",3,"ngModel","input","ngModelChange"],[1,"resource-row","col-12","col-md-2","text-center","border","border-dark","border-left-0","py-2","py-md-0"],["type","button",1,"btn","btn-primary","btn-sm","mt-1",3,"click"],["aria-hidden","true",1,"fas","fa-trash-alt"],["class","row mx-1",4,"ngIf"],[1,"resource-row","col-6","col-md-1","text-center","border","border-dark","border-right-0","d-flex","justify-content-center","align-items-center","py-2","py-md-0"],["pTooltip","\xbfHa sido pagado el gasto?","tooltipPosition","top","name","groupname","binary","true",3,"ngModel","ngModelChange"],[1,"resource-row","col-6","col-md-1","primary-expense-item","text-center","border","border-dark","border-left-0","py-2","py-md-0"],[1,"resource-row","col-6","col-md-1","text-center","border","border-dark","border-left-0"],[1,"col-12","col-md-6","mt-3","mt-md-0"],[4,"ngIf","ngIfElse"],["noTips",""],["noGoodPractice",""],["class","alert text-dark","role","alert",3,"ngClass",4,"ngFor","ngForOf"],["role","alert",1,"alert","text-dark",3,"ngClass"],["role","alert",1,"alert","alert-secondary"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Ec(3,H,2,2,"h1",3),c.Ec(4,J,2,0,"h1",3),c.Sb(),c.Sb(),c.Ob(5,"hr"),c.Ec(6,V,2,0,"div",4),c.Ec(7,ee,21,6,"div",5),c.Ec(8,re,50,8,"div",6),c.Ec(9,ue,17,4,"div",7),c.Tb(10,"div",8),c.Tb(11,"div",2),c.Tb(12,"button",9),c.bc("click",(function(){return t.back()})),c.Ob(13,"i",10),c.Tb(14,"span"),c.Gc(15," Volver"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.Bb(3),c.jc("ngIf",t.template),c.Bb(1),c.jc("ngIf",!t.template),c.Bb(2),c.jc("ngIf",!t.template&&!t.loading),c.Bb(1),c.jc("ngIf",t.template),c.Bb(1),c.jc("ngIf",t.template),c.Bb(1),c.jc("ngIf",t.template))},directives:[p.k,u.a,r.h,r.j,n.d,p.j,r.a,Y.a,D.a,z.a,p.i],styles:[".fixed-row[_ngcontent-%COMP%]{background-color:#46545c}.resource-row[_ngcontent-%COMP%]{background-color:#f0b153}input[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus{background:#f0b153;text-align:center;border:none!important;box-shadow:none}"]}),e})()}];let he=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(ge)],n.e]}),e})();o.d(t,"TemplatesModule",(function(){return fe}));let fe=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[i.a,s.a,he]]}),e})()}}]);