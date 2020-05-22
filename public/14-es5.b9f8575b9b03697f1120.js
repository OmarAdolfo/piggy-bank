function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var r=i[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{rtqj:function(e,i,t){"use strict";t.r(i);var r=t("PCNd"),n=t("tyNb"),o=t("3Pt+"),a=t("fXoL"),c=t("OS4P"),s=t("7zfz"),d=t("eHJY"),b=t("arFO"),l=t("ofXK"),f=t("rEr+"),u=t("jIHw");function p(e,i){if(1&e&&(a.Tb(0,"th",20),a.Gc(1),a.Ob(2,"p-sortIcon",21),a.Sb()),2&e){var t=i.$implicit;a.jc("pSortableColumn",t.field),a.Bb(1),a.Ic(" ",t.header," "),a.Bb(1),a.jc("field",t.field)}}function m(e,i){if(1&e&&(a.Tb(0,"tr"),a.Ec(1,p,3,3,"th",19),a.Sb()),2&e){var t=i.$implicit;a.Bb(1),a.jc("ngForOf",t)}}function v(e,i){if(1&e){var t=a.Ub();a.Tb(0,"tr",22),a.Tb(1,"td"),a.Gc(2),a.Sb(),a.Tb(3,"td"),a.Gc(4),a.ec(5,"date"),a.Sb(),a.Tb(6,"td"),a.Gc(7),a.Sb(),a.Tb(8,"td"),a.Tb(9,"button",23),a.bc("click",(function(){a.wc(t);var e=i.$implicit;return a.dc().onRowSelect(e.id)})),a.Tb(10,"span"),a.Ob(11,"i",24),a.Sb(),a.Sb(),a.Tb(12,"button",23),a.bc("click",(function(){a.wc(t);var e=i.$implicit;return a.dc().confirm(e.id)})),a.Tb(13,"span"),a.Ob(14,"i",25),a.Sb(),a.Sb(),a.Sb(),a.Sb()}if(2&e){var r=i.$implicit;a.jc("pSelectableRow",r),a.Bb(2),a.Ic(" ",r.nombre," "),a.Bb(2),a.Ic(" ",a.fc(5,4,r.fecha_fin,"dd/MM/yyyy")," "),a.Bb(3),a.Ic(" ",r.id_tipo_ganancia.valor," ")}}function h(e,i){if(1&e){var t=a.Ub();a.Tb(0,"div",26),a.Tb(1,"button",27),a.bc("click",(function(){return a.wc(t),a.dc().add()})),a.Sb(),a.Sb()}}var g,S,y=function(e,i){return{"fa-search":e,"fa-spinner fa-spin":i}},T=((g=function(){function e(i,t,r,n,o,a){_classCallCheck(this,e),this.profitService=i,this.formBuilder=t,this.messageService=r,this.confirmationService=n,this.router=o,this.typeProfitService=a,this.typesProfit=[],this.cols=[{field:"nombre",header:"Nombre"},{field:"fecha_fin",header:"Fecha de fin"},{field:"tipoGanancia",header:"Tipo Ganancia"},{field:"",header:"Opciones"}]}return _createClass(e,[{key:"ngOnInit",value:function(){this.buildForm(),this.getTypesProfit()}},{key:"getTypesProfit",value:function(){var e=this;this.typeProfitService.findAll().subscribe((function(i){e.typesProfit=i.data}))}},{key:"buildForm",value:function(){this.form=this.formBuilder.group({nombre:new o.c(""),id_tipo_ganancia:new o.c("")})}},{key:"add",value:function(){this.router.navigate(["/home/profits/new"])}},{key:"search",value:function(e,i,t){var r=this;Promise.resolve().then((function(){return r.loading=!0})),this.profitService.get(this.form.value,e,i,t).subscribe((function(e){r.profits=e.data.data,r.totalRecords=e.data.total,r.loading=!1}),(function(){r.loading=!1}))}},{key:"customSort",value:function(e){this.search(e.sortField,e.sortOrder,e.first/e.rows+1)}},{key:"confirm",value:function(e){var i=this;this.confirmationService.confirm({message:"\xbfEst\xe1s seguro de que deseas borrar?",header:"Confirmaci\xf3n",icon:"pi pi-exclamation-triangle",accept:function(){i.delete(e)}})}},{key:"delete",value:function(e){var i=this;this.profitService.delete(e).subscribe((function(t){i.profits=i.profits.filter((function(i){return i.id!==e})),i.messageService.add({severity:"success",summary:"\xc9xito",detail:t.message})}),(function(e){i.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}},{key:"onRowSelect",value:function(e){this.router.navigate(["/home/profits/"+e])}}]),e}()).\u0275fac=function(e){return new(e||g)(a.Nb(c.a),a.Nb(o.b),a.Nb(s.d),a.Nb(s.a),a.Nb(n.b),a.Nb(d.a))},g.\u0275cmp=a.Hb({type:g,selectors:[["app-profit"]],decls:38,vars:15,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],[1,"card","mt-3"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[3,"formGroup"],[1,"col-12","col-md-6","form-group"],["for","nombre"],["type","text","id","nombre","formControlName","nombre",1,"form-control","form-control-user"],["formControlName","id_tipo_ganancia","placeholder","Seleccione tipo de ganancia","optionLabel","valor",3,"options","showClear"],[1,"row","mt-1"],[1,"col-12","text-right","mt-2"],["type","button",1,"btn","btn-primary","mr-1",3,"disabled","click"],["aria-hidden","true",1,"fas",3,"ngClass"],[3,"columns","value","paginator","rows","responsive","lazy","totalRecords","onLazyLoad"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[3,"pSelectableRow"],["type","button",1,"btn","btn-secondary","mr-1",3,"click"],["aria-hidden","true",1,"fas","fa-edit"],["aria-hidden","true",1,"fas","fa-trash"],[2,"text-align","left"],["type","button","pButton","","icon","pi pi-plus","label","A\xf1adir",3,"click"]],template:function(e,i){1&e&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"h1"),a.Gc(4,"Ganancias"),a.Sb(),a.Sb(),a.Sb(),a.Ob(5,"hr"),a.Tb(6,"div",3),a.Tb(7,"div",4),a.Gc(8," Buscador de ganancias "),a.Sb(),a.Tb(9,"div",5),a.Tb(10,"div",1),a.Tb(11,"div",2),a.Tb(12,"form",6),a.Tb(13,"div",1),a.Tb(14,"div",7),a.Tb(15,"label",8),a.Gc(16,"Nombre"),a.Sb(),a.Ob(17,"input",9),a.Sb(),a.Tb(18,"div",7),a.Tb(19,"label",8),a.Gc(20,"Tipo de ganancia"),a.Sb(),a.Ob(21,"p-dropdown",10),a.Sb(),a.Sb(),a.Tb(22,"div",11),a.Tb(23,"div",12),a.Tb(24,"button",13),a.bc("click",(function(){return i.search()})),a.Ob(25,"i",14),a.Tb(26,"span"),a.Gc(27," Buscar"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(28,"div",3),a.Tb(29,"div",4),a.Gc(30," Listado de ganancias "),a.Sb(),a.Tb(31,"div",5),a.Tb(32,"div",1),a.Tb(33,"div",2),a.Tb(34,"p-table",15),a.bc("onLazyLoad",(function(e){return i.customSort(e)})),a.Ec(35,m,2,1,"ng-template",16),a.Ec(36,v,15,7,"ng-template",17),a.Ec(37,h,2,0,"ng-template",18),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&e&&(a.Bb(12),a.jc("formGroup",i.form),a.Bb(9),a.jc("options",i.typesProfit)("showClear",!0),a.Bb(3),a.jc("disabled",i.loading),a.Bb(1),a.jc("ngClass",a.nc(12,y,!i.loading,i.loading)),a.Bb(9),a.jc("columns",i.cols)("value",i.profits)("paginator",!0)("rows",10)("responsive",!0)("lazy",!0)("totalRecords",i.totalRecords))},directives:[o.o,o.i,o.e,o.a,o.h,o.d,b.a,l.i,f.d,s.e,l.j,f.c,f.b,f.a,u.a],pipes:[l.d],styles:[""]}),g),w=function e(){_classCallCheck(this,e)},k=t("wMtC"),j=t("AytR"),B=t("tk/3"),C=((S=function(){function e(i){_classCallCheck(this,e),this.http=i,this.url=j.a.url+"ingresos"}return _createClass(e,[{key:"find",value:function(e){return this.http.get(this.url+"/"+e)}},{key:"add",value:function(e){return this.http.post(this.url,e)}},{key:"update",value:function(e){return this.http.put(this.url+"/"+e.id,e)}},{key:"delete",value:function(e){return this.http.delete(this.url+"/"+e)}}]),e}()).\u0275fac=function(e){return new(e||S)(a.Xb(B.b))},S.\u0275prov=a.Jb({token:S,factory:S.\u0275fac,providedIn:"root"}),S),_=t("xlun");function G(e,i){1&e&&(a.Tb(0,"div",1),a.Ob(1,"img",10),a.Sb())}function I(e,i){1&e&&(a.Tb(0,"div"),a.Gc(1," El nombre es obligatorio "),a.Sb())}function E(e,i){1&e&&(a.Tb(0,"div"),a.Gc(1," El nombre no puede ser vac\xedo "),a.Sb())}function O(e,i){if(1&e&&(a.Tb(0,"div",27),a.Ec(1,I,2,0,"div",28),a.Ec(2,E,2,0,"div",28),a.Sb()),2&e){var t=a.dc(2);a.Bb(1),a.jc("ngIf",t.form.controls.nombre.errors.required),a.Bb(1),a.jc("ngIf",t.form.controls.nombre.errors.whitespace)}}function N(e,i){if(1&e&&(a.Tb(0,"span"),a.Gc(1),a.Sb()),2&e){var t=i.$implicit;a.Bb(1),a.Hc(t.label)}}function P(e,i){if(1&e&&(a.Tb(0,"span",29),a.Gc(1),a.Sb()),2&e){var t=i.$implicit;a.kc("pTooltip",t.value.descripcion),a.Bb(1),a.Hc(t.label)}}function x(e,i){1&e&&(a.Tb(0,"div"),a.Gc(1," El tipo de ganancia es obligatorio "),a.Sb())}function R(e,i){if(1&e&&(a.Tb(0,"div",27),a.Ec(1,x,2,0,"div",28),a.Sb()),2&e){var t=a.dc(2);a.Bb(1),a.jc("ngIf",t.form.controls.id_tipo_ganancia.errors.required)}}var F=function(e,i){return{"fa-save":e,"fa-spinner fa-spin":i}};function M(e,i){if(1&e){var t=a.Ub();a.Tb(0,"div",11),a.Tb(1,"div",12),a.Gc(2," Dise\xf1ador ganancia "),a.Sb(),a.Tb(3,"div",13),a.Tb(4,"div",1),a.Tb(5,"div",2),a.Tb(6,"form",14),a.Tb(7,"div",1),a.Tb(8,"div",15),a.Tb(9,"label",16),a.Gc(10,"Nombre"),a.Sb(),a.Ob(11,"input",17),a.Ec(12,O,3,2,"div",18),a.Sb(),a.Tb(13,"div",15),a.Tb(14,"label",19),a.Gc(15,"Tipo de ganancia"),a.Sb(),a.Tb(16,"p-dropdown",20),a.bc("onChange",(function(e){return a.wc(t),a.dc().changeTypeProfit(e)})),a.Ec(17,N,2,1,"ng-template",21),a.Ec(18,P,2,2,"ng-template",22),a.Sb(),a.Ec(19,R,2,1,"div",18),a.Sb(),a.Sb(),a.Tb(20,"div",23),a.Tb(21,"div",24),a.Tb(22,"button",25),a.bc("click",(function(){return a.wc(t),a.dc().save()})),a.Tb(23,"span"),a.Ob(24,"i",26),a.Gc(25," Guardar "),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()}if(2&e){var r=a.dc();a.Bb(6),a.jc("formGroup",r.form),a.Bb(6),a.jc("ngIf",r.form.controls.nombre.invalid&&(r.form.controls.nombre.dirty||r.form.controls.nombre.touched)),a.Bb(4),a.jc("options",r.typesProfit)("showClear",!0),a.Bb(3),a.jc("ngIf",r.form.controls.id_tipo_ganancia.invalid&&(r.form.controls.id_tipo_ganancia.dirty||r.form.controls.id_tipo_ganancia.touched)),a.Bb(3),a.jc("disabled",r.form.pristine||r.form.invalid||r.loading),a.Bb(2),a.jc("ngClass",a.nc(7,F,!r.loading,r.loading))}}function L(e,i){if(1&e&&(a.Tb(0,"th",36),a.Gc(1),a.Ob(2,"p-sortIcon",37),a.Sb()),2&e){var t=i.$implicit;a.jc("pSortableColumn",t.field),a.Bb(1),a.Ic(" ",t.header," "),a.Bb(1),a.jc("field",t.field)}}function q(e,i){if(1&e&&(a.Tb(0,"tr"),a.Ec(1,L,3,3,"th",35),a.Sb()),2&e){var t=i.$implicit;a.Bb(1),a.jc("ngForOf",t)}}function $(e,i){if(1&e){var t=a.Ub();a.Tb(0,"button",8),a.bc("click",(function(){a.wc(t);var e=a.dc().$implicit;return a.dc(2).onRowSelect(e.id)})),a.Tb(1,"span"),a.Ob(2,"i",40),a.Sb(),a.Sb()}}function z(e,i){if(1&e){var t=a.Ub();a.Tb(0,"button",8),a.bc("click",(function(){a.wc(t);var e=a.dc().$implicit;return a.dc(2).confirm(e.id)})),a.Tb(1,"span"),a.Ob(2,"i",41),a.Sb(),a.Sb()}}function D(e,i){if(1&e&&(a.Tb(0,"tr",38),a.Tb(1,"td"),a.Gc(2),a.Sb(),a.Tb(3,"td"),a.Gc(4),a.ec(5,"date"),a.Sb(),a.Tb(6,"td"),a.Ec(7,$,3,0,"button",39),a.Ec(8,z,3,0,"button",39),a.Sb(),a.Sb()),2&e){var t=i.$implicit,r=a.dc(2);a.jc("pSelectableRow",t),a.Bb(2),a.Ic(" ",t.cantidad," "),a.Bb(2),a.Ic(" ",a.fc(5,5,t.fecha,"dd/MM/yyyy")," "),a.Bb(3),a.jc("ngIf",!r.isMonthly),a.Bb(1),a.jc("ngIf",!r.isMonthly)}}function H(e,i){if(1&e){var t=a.Ub();a.Tb(0,"div",44),a.Tb(1,"button",45),a.bc("click",(function(){return a.wc(t),a.dc(3).add()})),a.Sb(),a.Sb()}}function X(e,i){1&e&&(a.Tb(0,"div",46),a.Gc(1," Los ingresos mensuales se gestionan en la pantalla de Plantillas "),a.Sb())}function U(e,i){if(1&e&&(a.Ec(0,H,2,0,"div",42),a.Ec(1,X,2,0,"div",43)),2&e){var t=a.dc(2);a.jc("ngIf",!t.isMonthly),a.Bb(1),a.jc("ngIf",t.isMonthly)}}function A(e,i){if(1&e&&(a.Tb(0,"div",30),a.Tb(1,"div",12),a.Gc(2," Listado de ingresos "),a.Sb(),a.Tb(3,"div",13),a.Tb(4,"div",1),a.Tb(5,"div",2),a.Tb(6,"p-table",31),a.Ec(7,q,2,1,"ng-template",32),a.Ec(8,D,9,8,"ng-template",33),a.Ec(9,U,2,2,"ng-template",34),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&e){var t=a.dc();a.Bb(6),a.jc("columns",t.cols)("value",t.profit.ingresos)("paginator",!0)("rows",5)("responsive",!0)("lazy",!0)}}var J,K=((J=function(){function e(i,t,r,n,o,a,c,s,d){_classCallCheck(this,e),this.formBuilder=i,this.profitService=t,this.activatedRoute=r,this.typeProfitService=n,this.location=o,this.messageService=a,this.confirmationService=c,this.router=s,this.revenueService=d,this.typesProfit=[],this.cols=[{field:"cantidad",header:"Cantidad"},{field:"fecha",header:"Fecha"},{field:"",header:"Opciones"}]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.newProfit="new"===this.activatedRoute.snapshot.params.id,this.newProfit?(this.profit=new w,this.buildForm()):(Promise.resolve().then((function(){return e.loading=!0})),this.profitService.find(this.activatedRoute.snapshot.params.id).subscribe((function(i){e.profit=i.data,e.isMonthly=e.profit.id_tipo_ganancia.valor.includes("Mensuales"),e.loading=!1,e.buildForm()}),(function(i){e.loading=!1,e.messageService.add({severity:"error",summary:"Error",detail:i.error.message})}))),this.getTypesProfit()}},{key:"getTypesProfit",value:function(){var e=this;this.typeProfitService.findAll().subscribe((function(i){e.typesProfit=i.data}))}},{key:"buildForm",value:function(){this.form=this.formBuilder.group({nombre:new o.c(this.profit.nombre,[o.n.required,k.a]),id_tipo_ganancia:new o.c({value:this.profit.id_tipo_ganancia?this.profit.id_tipo_ganancia:"",disabled:!!this.profit.id_tipo_ganancia},o.n.required)})}},{key:"save",value:function(){var e=this;if(Promise.resolve().then((function(){return e.loading=!0})),this.profit.id){var i=Object.assign(this.profit,this.form.value);this.profitService.update(i,this.profit.id).subscribe((function(i){e.messageService.add({severity:"success",summary:"\xc9xito",detail:i.message}),e.profit=i.data,e.loading=!1}),(function(i){e.loading=!1,e.messageService.add({severity:"error",summary:"Error",detail:i.error.message})}))}else{var t=Object.assign({},this.form.value);this.profitService.add(t).subscribe((function(i){e.messageService.add({severity:"success",summary:"\xc9xito",detail:i.message}),e.profit=i.data,e.isMonthly=e.profit.id_tipo_ganancia.valor.includes("Mensuales"),e.loading=!1,e.form.get("id_tipo_ganancia").disable(),e.location.replaceState("/home/profits/"+e.profit.id)}),(function(i){e.loading=!1,e.messageService.add({severity:"error",summary:"Error",detail:i.error.message})}))}}},{key:"back",value:function(){this.location.back()}},{key:"confirm",value:function(e){var i=this;this.confirmationService.confirm({message:"\xbfEst\xe1s seguro de que deseas borrar?",header:"Confirmaci\xf3n",icon:"pi pi-exclamation-triangle",accept:function(){i.delete(e)}})}},{key:"delete",value:function(e){var i=this;this.revenueService.delete(e).subscribe((function(t){i.profit.ingresos=i.profit.ingresos.filter((function(i){return i.id!==e})),i.messageService.add({severity:"success",summary:"\xc9xito",detail:t.message})}),(function(e){i.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}},{key:"add",value:function(){this.router.navigate(["/home/profits/"+this.profit.id+"/revenue/new"])}},{key:"onRowSelect",value:function(e){this.router.navigate(["/home/profits/"+this.profit.id+"/revenue/"+e])}},{key:"changeTypeProfit",value:function(e){this.profit.id||(this.isMonthly=e.value.valor.includes("Mensuales"))}}]),e}()).\u0275fac=function(e){return new(e||J)(a.Nb(o.b),a.Nb(c.a),a.Nb(n.a),a.Nb(d.a),a.Nb(l.g),a.Nb(s.d),a.Nb(s.a),a.Nb(n.b),a.Nb(C))},J.\u0275cmp=a.Hb({type:J,selectors:[["app-profit-detail"]],decls:15,vars:3,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],["class","row",4,"ngIf"],["class","card",4,"ngIf"],["class","card mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-12","text-right"],["type","button",1,"btn","btn-secondary","mr-1",3,"click"],["aria-hidden","true",1,"fas","fa-arrow-left"],["src","assets/notfound.png","alt","No existen resultados",1,"d-block","mx-auto","img-not-found"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[3,"formGroup"],[1,"col-12","col-md-6","form-group"],["for","nombre"],["type","text","id","nombre","formControlName","nombre",1,"form-control","form-control-user"],["class","alert alert-danger mt-1",4,"ngIf"],["for","id_tipo_ganancia"],["formControlName","id_tipo_ganancia","placeholder","Seleccione tipo de ganancia","optionLabel","valor",3,"options","showClear","onChange"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"row","mt-1"],[1,"col-12","text-right","mt-2"],["type","button",1,"btn","btn-primary","mr-1",3,"disabled","click"],["aria-hidden","true",1,"fas",3,"ngClass"],[1,"alert","alert-danger","mt-1"],[4,"ngIf"],["tooltipPosition","top",3,"pTooltip"],[1,"card","mt-3"],[3,"columns","value","paginator","rows","responsive","lazy"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[3,"pSelectableRow"],["type","button","class","btn btn-secondary mr-1",3,"click",4,"ngIf"],["aria-hidden","true",1,"fas","fa-edit"],["aria-hidden","true",1,"fas","fa-trash"],["style","text-align:left",4,"ngIf"],["class","text-center",4,"ngIf"],[2,"text-align","left"],["type","button","pButton","","icon","pi pi-plus","label","A\xf1adir",3,"click"],[1,"text-center"]],template:function(e,i){1&e&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"h1"),a.Gc(4,"Detalle ganancia"),a.Sb(),a.Sb(),a.Sb(),a.Ob(5,"hr"),a.Ec(6,G,2,0,"div",3),a.Ec(7,M,26,10,"div",4),a.Ec(8,A,10,6,"div",5),a.Tb(9,"div",6),a.Tb(10,"div",7),a.Tb(11,"button",8),a.bc("click",(function(){return i.back()})),a.Tb(12,"span"),a.Ob(13,"i",9),a.Gc(14," Volver"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&e&&(a.Bb(6),a.jc("ngIf",!i.profit&&!i.loading),a.Bb(1),a.jc("ngIf",i.profit),a.Bb(1),a.jc("ngIf",i.profit&&i.profit.id))},directives:[l.k,o.o,o.i,o.e,o.a,o.h,o.d,b.a,s.e,l.i,_.a,f.d,l.j,f.c,f.b,f.a,u.a],pipes:[l.d],styles:[""]}),J),V=t("mgSE"),W=t("Gxio"),Y=t("kAuD"),Q=t("eO1q");function Z(e,i){1&e&&(a.Tb(0,"div",1),a.Ob(1,"img",9),a.Sb())}function ee(e,i){1&e&&(a.Tb(0,"div"),a.Gc(1," La cantidad es obligatoria "),a.Sb())}function ie(e,i){if(1&e&&(a.Tb(0,"div",24),a.Ec(1,ee,2,0,"div",25),a.Sb()),2&e){var t=a.dc(2);a.Bb(1),a.jc("ngIf",t.form.controls.cantidad.errors.required)}}function te(e,i){1&e&&(a.Tb(0,"div"),a.Gc(1," La fecha es obligatoria "),a.Sb())}function re(e,i){if(1&e&&(a.Tb(0,"div",24),a.Ec(1,te,2,0,"div",25),a.Sb()),2&e){var t=a.dc(2);a.Bb(1),a.jc("ngIf",t.form.controls.fecha.errors.required)}}var ne=function(e,i){return{"fa-save":e,"fa-spinner fa-spin":i}};function oe(e,i){if(1&e){var t=a.Ub();a.Tb(0,"div",10),a.Tb(1,"div",11),a.Gc(2," Dise\xf1ador ingreso "),a.Sb(),a.Tb(3,"div",12),a.Tb(4,"div",1),a.Tb(5,"div",2),a.Tb(6,"form",13),a.Tb(7,"div",1),a.Tb(8,"div",14),a.Tb(9,"label",15),a.Gc(10,"Cantidad"),a.Sb(),a.Ob(11,"input",16),a.Ec(12,ie,2,1,"div",17),a.Sb(),a.Tb(13,"div",14),a.Tb(14,"label",18),a.Gc(15,"Fecha del ingreso"),a.Sb(),a.Ob(16,"p-calendar",19),a.Ec(17,re,2,1,"div",17),a.Sb(),a.Sb(),a.Tb(18,"div",20),a.Tb(19,"div",21),a.Tb(20,"button",22),a.bc("click",(function(){return a.wc(t),a.dc().save()})),a.Tb(21,"span"),a.Ob(22,"i",23),a.Gc(23," Guardar "),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()}if(2&e){var r=a.dc();a.Bb(6),a.jc("formGroup",r.form),a.Bb(6),a.jc("ngIf",r.form.controls.cantidad.invalid&&(r.form.controls.cantidad.dirty||r.form.controls.cantidad.touched)),a.Bb(4),a.jc("locale",r.es)("dataType","string"),a.Bb(1),a.jc("ngIf",r.form.controls.fecha.invalid&&(r.form.controls.fecha.dirty||r.form.controls.fecha.touched)),a.Bb(3),a.jc("disabled",r.form.pristine||r.form.invalid||r.loading),a.Bb(2),a.jc("ngClass",a.nc(7,ne,!r.loading,r.loading))}}var ae,ce,se=function(){return{marginTop:"80px"}},de=[{path:"",component:T},{path:":id",component:K},{path:":id/revenue/:idrevenue",component:(ae=function(){function e(i,t,r,n,o){_classCallCheck(this,e),this.location=i,this.revenueService=t,this.activatedRoute=r,this.formBuilder=n,this.messageService=o,this.es={firstDayOfWeek:1,dayNames:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],dayNamesShort:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],dayNamesMin:["D","L","M","X","J","V","S"],monthNames:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],monthNamesShort:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],today:"Hoy",clear:"Borrar"}}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.newRevenue="new"===this.activatedRoute.snapshot.params.idrevenue,this.newRevenue?(this.revenue=new V.a,this.buildForm()):(Promise.resolve().then((function(){return e.loading=!0})),this.revenueService.find(this.activatedRoute.snapshot.params.idrevenue).subscribe((function(i){e.revenue=i.data,e.loading=!1,e.buildForm()}),(function(i){e.loading=!1,e.messageService.add({severity:"error",summary:"Error",detail:i.error.message})})))}},{key:"buildForm",value:function(){this.form=this.formBuilder.group({cantidad:new o.c(this.revenue.cantidad,o.n.required),fecha:new o.c(this.revenue.fecha,o.n.required)})}},{key:"back",value:function(){this.location.back()}},{key:"save",value:function(){var e=this;if(Promise.resolve().then((function(){return e.loading=!0})),this.newRevenue){var i=Object.assign({},this.form.value);i.ganancia_id=this.activatedRoute.snapshot.params.id,this.revenueService.add(i).subscribe((function(){e.loading=!1,e.back()}),(function(i){e.loading=!1,e.messageService.add({severity:"error",summary:"Error",detail:i.error.message})}))}else{var t=Object.assign(this.revenue,this.form.value);this.revenueService.update(t).subscribe((function(){e.loading=!1,e.back()}),(function(i){e.loading=!1,e.messageService.add({severity:"error",summary:"Error",detail:i.error.message})}))}}}]),e}(),ae.\u0275fac=function(e){return new(e||ae)(a.Nb(l.g),a.Nb(C),a.Nb(n.a),a.Nb(o.b),a.Nb(s.d))},ae.\u0275cmp=a.Hb({type:ae,selectors:[["app-revenue-detail"]],decls:15,vars:5,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],["class","row",4,"ngIf"],["class","card",4,"ngIf"],[1,"row","mt-3"],[1,"col-12","text-right"],["type","button",1,"btn","btn-secondary","mr-1",3,"click"],["aria-hidden","true",1,"fas","fa-arrow-left"],["src","assets/notfound.png","alt","No existen resultados",1,"d-block","mx-auto","img-not-found"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[3,"formGroup"],[1,"col-12","col-md-6","form-group"],["for","cantidad"],["type","textbox","formControlName","cantidad","placeholder","XX.XX","appTwoDigitDecimaNumber","",1,"form-control","form-control-user"],["class","alert alert-danger mt-1",4,"ngIf"],["for","fecha"],["formControlName","fecha","dateFormat","yy-mm-dd",3,"locale","dataType"],[1,"row","mt-1"],[1,"col-12","text-right","mt-2"],["type","button",1,"btn","btn-primary","mr-1",3,"disabled","click"],["aria-hidden","true",1,"fas",3,"ngClass"],[1,"alert","alert-danger","mt-1"],[4,"ngIf"]],template:function(e,i){1&e&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"h1"),a.Gc(4,"Detalle ingreso"),a.Sb(),a.Sb(),a.Sb(),a.Ob(5,"hr"),a.Ec(6,Z,2,0,"div",3),a.Ec(7,oe,24,10,"div",4),a.Tb(8,"div",5),a.Tb(9,"div",6),a.Tb(10,"button",7),a.bc("click",(function(){return i.back()})),a.Tb(11,"span"),a.Ob(12,"i",8),a.Gc(13," Volver"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Ob(14,"p-toast")),2&e&&(a.Bb(6),a.jc("ngIf",!i.revenue&&!i.loading),a.Bb(1),a.jc("ngIf",i.revenue),a.Bb(7),a.Cc(a.lc(4,se)))},directives:[l.k,W.a,o.o,o.i,o.e,o.a,o.h,o.d,Y.a,Q.a,l.i],styles:[""]}),ae)}],be=((ce=function e(){_classCallCheck(this,e)}).\u0275mod=a.Lb({type:ce}),ce.\u0275inj=a.Kb({factory:function(e){return new(e||ce)},imports:[[n.e.forChild(de)],n.e]}),ce);t.d(i,"ProfitModule",(function(){return fe}));var le,fe=((le=function e(){_classCallCheck(this,e)}).\u0275mod=a.Lb({type:le}),le.\u0275inj=a.Kb({factory:function(e){return new(e||le)},imports:[[r.a,be]]}),le)}}]);