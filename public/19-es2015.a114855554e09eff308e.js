(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1v3h":function(t,i,e){"use strict";e.r(i);var r=e("PCNd"),o=e("tyNb"),c=e("3Pt+"),n=e("fXoL"),s=e("eHJY"),a=e("7zfz"),d=e("TTF2"),b=e("ofXK"),l=e("rEr+"),f=e("jIHw");function p(t,i){if(1&t&&(n.Tb(0,"th",20),n.Gc(1),n.Ob(2,"p-sortIcon",21),n.Sb()),2&t){const t=i.$implicit;n.jc("pSortableColumn",t.field),n.Bb(1),n.Ic(" ",t.header," "),n.Bb(1),n.jc("field",t.field)}}function u(t,i){if(1&t&&(n.Tb(0,"tr"),n.Ec(1,p,3,3,"th",19),n.Sb()),2&t){const t=i.$implicit;n.Bb(1),n.jc("ngForOf",t)}}function m(t,i){if(1&t){const t=n.Ub();n.Tb(0,"button",24),n.bc("click",(function(){n.wc(t);const i=n.dc().$implicit;return n.dc().onRowSelect(i.id)})),n.Tb(1,"span"),n.Ob(2,"i",25),n.Sb(),n.Sb()}}function v(t,i){if(1&t){const t=n.Ub();n.Tb(0,"button",24),n.bc("click",(function(){n.wc(t);const i=n.dc().$implicit;return n.dc().confirm(i.id)})),n.Tb(1,"span"),n.Ob(2,"i",26),n.Sb(),n.Sb()}}function h(t,i){if(1&t&&(n.Tb(0,"tr",22),n.Tb(1,"td"),n.Gc(2),n.Sb(),n.Tb(3,"td"),n.Gc(4),n.Sb(),n.Tb(5,"td"),n.Gc(6),n.ec(7,"date"),n.Sb(),n.Tb(8,"td"),n.Gc(9),n.ec(10,"date"),n.Sb(),n.Tb(11,"td"),n.Ec(12,m,3,0,"button",23),n.Ec(13,v,3,0,"button",23),n.Sb(),n.Sb()),2&t){const t=i.$implicit,e=n.dc();n.jc("pSelectableRow",t),n.Bb(2),n.Ic(" ",t.valor," "),n.Bb(2),n.Ic(" ",t.descripcion," "),n.Bb(2),n.Ic(" ",n.fc(7,7,t.created_at,"dd/MM/yyyy")," "),n.Bb(3),n.Ic(" ",n.fc(10,10,t.updated_at,"dd/MM/yyyy")," "),n.Bb(3),n.jc("ngIf",e.checkProperty(t.id_usuario)),n.Bb(1),n.jc("ngIf",e.checkProperty(t.id_usuario))}}function g(t,i){if(1&t){const t=n.Ub();n.Tb(0,"div",27),n.Tb(1,"button",28),n.bc("click",(function(){return n.wc(t),n.dc().add()})),n.Sb(),n.Sb()}}const S=function(t,i){return{"fa-search":t,"fa-spinner fa-spin":i}};let y=(()=>{class t{constructor(t,i,e,r,o,c){this.typeProfitService=t,this.formBuilder=i,this.messageService=e,this.router=r,this.confirmationService=o,this.authenticationService=c,this.cols=[{field:"valor",header:"Valor"},{field:"descripcion",header:"Descripci\xf3n"},{field:"created_at",header:"Fecha de creaci\xf3n"},{field:"updated_at",header:"Fecha de actualizaci\xf3n"},{field:"",header:"Opciones"}]}ngOnInit(){this.buildForm()}buildForm(){this.form=this.formBuilder.group({valor:new c.c("",c.n.required),descripcion:new c.c("")})}add(){this.router.navigate(["/home/type-profit/new"])}search(t,i,e){Promise.resolve().then(()=>this.loading=!0),this.typeProfitService.get(this.form.value,t,i,e).subscribe(t=>{this.typesProfit=t.data.data,this.totalRecords=t.data.total,this.loading=!1},()=>{this.loading=!1})}customSort(t){this.search(t.sortField,t.sortOrder,t.first/t.rows+1)}confirm(t){this.confirmationService.confirm({message:"\xbfEst\xe1s seguro de que deseas borrar?",header:"Confirmaci\xf3n",icon:"pi pi-exclamation-triangle",accept:()=>{this.delete(t)}})}delete(t){this.typeProfitService.delete(t).subscribe(i=>{this.typesProfit=this.typesProfit.filter(i=>i.id!==t),this.messageService.add({severity:"success",summary:"\xc9xito",detail:i.message})},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})})}onRowSelect(t){this.router.navigate(["/home/type-profit/"+t])}checkProperty(t){return t===parseInt(this.authenticationService.getSub())}}return t.\u0275fac=function(i){return new(i||t)(n.Nb(s.a),n.Nb(c.b),n.Nb(a.d),n.Nb(o.b),n.Nb(a.a),n.Nb(d.a))},t.\u0275cmp=n.Hb({type:t,selectors:[["app-type-profit"]],decls:37,vars:13,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],[1,"card","mt-3"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[3,"formGroup"],[1,"col-12","col-md-6","form-group"],["for","valor"],["type","valor","id","valor","formControlName","valor",1,"form-control","form-control-user"],["for","descripcion"],["type","descripcion","id","descripcion","formControlName","descripcion",1,"form-control","form-control-user"],[1,"col-12","text-right","mt-2"],["type","button",1,"btn","btn-primary","mr-1",3,"disabled","click"],["aria-hidden","true",1,"fas",3,"ngClass"],[3,"columns","value","paginator","rows","responsive","lazy","totalRecords","onLazyLoad"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[3,"pSelectableRow"],["type","button","class","btn btn-secondary mr-1",3,"click",4,"ngIf"],["type","button",1,"btn","btn-secondary","mr-1",3,"click"],["aria-hidden","true",1,"fas","fa-edit"],["aria-hidden","true",1,"fas","fa-trash"],[2,"text-align","left"],["type","button","pButton","","icon","pi pi-plus","label","A\xf1adir",3,"click"]],template:function(t,i){1&t&&(n.Tb(0,"div",0),n.Tb(1,"div",1),n.Tb(2,"div",2),n.Tb(3,"h1"),n.Gc(4,"Tipos de ganancias"),n.Sb(),n.Sb(),n.Sb(),n.Ob(5,"hr"),n.Tb(6,"div",3),n.Tb(7,"div",4),n.Gc(8," Buscador de tipos de ganancias "),n.Sb(),n.Tb(9,"div",5),n.Tb(10,"div",1),n.Tb(11,"div",2),n.Tb(12,"form",6),n.Tb(13,"div",1),n.Tb(14,"div",7),n.Tb(15,"label",8),n.Gc(16,"Valor"),n.Sb(),n.Ob(17,"input",9),n.Sb(),n.Tb(18,"div",7),n.Tb(19,"label",10),n.Gc(20,"Descripci\xf3n"),n.Sb(),n.Ob(21,"input",11),n.Sb(),n.Tb(22,"div",12),n.Tb(23,"button",13),n.bc("click",(function(){return i.search()})),n.Ob(24,"i",14),n.Tb(25,"span"),n.Gc(26," Buscar"),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Tb(27,"div",3),n.Tb(28,"div",4),n.Gc(29," Listado de tipos de ganancias "),n.Sb(),n.Tb(30,"div",5),n.Tb(31,"div",1),n.Tb(32,"div",2),n.Tb(33,"p-table",15),n.bc("onLazyLoad",(function(t){return i.customSort(t)})),n.Ec(34,u,2,1,"ng-template",16),n.Ec(35,h,14,13,"ng-template",17),n.Ec(36,g,2,0,"ng-template",18),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb()),2&t&&(n.Bb(12),n.jc("formGroup",i.form),n.Bb(11),n.jc("disabled",i.loading),n.Bb(1),n.jc("ngClass",n.nc(10,S,!i.loading,i.loading)),n.Bb(9),n.jc("columns",i.cols)("value",i.typesProfit)("paginator",!0)("rows",10)("responsive",!0)("lazy",!0)("totalRecords",i.totalRecords))},directives:[c.o,c.i,c.e,c.a,c.h,c.d,b.i,l.d,a.e,b.j,l.c,l.b,l.a,b.k,f.a],pipes:[b.d],styles:[""]}),t})();class T{}var w=e("wMtC"),B=e("Gxio");function P(t,i){1&t&&(n.Tb(0,"div",1),n.Ob(1,"img",9),n.Sb())}function j(t,i){1&t&&(n.Tb(0,"div"),n.Gc(1," El valor es obligatorio "),n.Sb())}function G(t,i){1&t&&(n.Tb(0,"div"),n.Gc(1," El valor no puede ser vac\xedo "),n.Sb())}function I(t,i){if(1&t&&(n.Tb(0,"div",24),n.Ec(1,j,2,0,"div",23),n.Ec(2,G,2,0,"div",23),n.Sb()),2&t){const t=n.dc(2);n.Bb(1),n.jc("ngIf",t.form.controls.valor.errors.required),n.Bb(1),n.jc("ngIf",t.form.controls.valor.errors.whitespace)}}function k(t,i){1&t&&(n.Tb(0,"div"),n.Gc(1," La descripci\xf3n es obligatoria "),n.Sb())}function E(t,i){1&t&&(n.Tb(0,"div"),n.Gc(1," La descripci\xf3n no puede ser vac\xeda "),n.Sb())}function O(t,i){if(1&t&&(n.Tb(0,"div",24),n.Ec(1,k,2,0,"div",23),n.Ec(2,E,2,0,"div",23),n.Sb()),2&t){const t=n.dc(2);n.Bb(1),n.jc("ngIf",t.form.controls.descripcion.errors.required),n.Bb(1),n.jc("ngIf",t.form.controls.descripcion.errors.whitespace)}}const N=function(t,i){return{"fa-save":t,"fa-spinner fa-spin":i}};function C(t,i){if(1&t&&(n.Tb(0,"span"),n.Ob(1,"i",25),n.Gc(2," Guardar"),n.Sb()),2&t){const t=n.dc(2);n.Bb(1),n.jc("ngClass",n.nc(1,N,!t.loading,t.loading))}}const x=function(t,i){return{"fa-edit":t,"fa-spinner fa-spin":i}};function F(t,i){if(1&t&&(n.Tb(0,"span"),n.Ob(1,"i",25),n.Gc(2," Editar"),n.Sb()),2&t){const t=n.dc(2);n.Bb(1),n.jc("ngClass",n.nc(1,x,!t.loading,t.loading))}}function R(t,i){if(1&t){const t=n.Ub();n.Tb(0,"div",10),n.Tb(1,"div",11),n.Gc(2," Dise\xf1ador tipo de gasto "),n.Sb(),n.Tb(3,"div",12),n.Tb(4,"div",1),n.Tb(5,"div",2),n.Tb(6,"form",13),n.Tb(7,"div",1),n.Tb(8,"div",14),n.Tb(9,"label",15),n.Gc(10,"Valor"),n.Sb(),n.Ob(11,"input",16),n.Ec(12,I,3,2,"div",17),n.Sb(),n.Tb(13,"div",14),n.Tb(14,"label",18),n.Gc(15,"Descripci\xf3n"),n.Sb(),n.Ob(16,"input",19),n.Ec(17,O,3,2,"div",17),n.Sb(),n.Sb(),n.Tb(18,"div",20),n.Tb(19,"div",21),n.Tb(20,"button",22),n.bc("click",(function(){return n.wc(t),n.dc().save()})),n.Ec(21,C,3,4,"span",23),n.Ec(22,F,3,4,"span",23),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb()}if(2&t){const t=n.dc();n.Bb(6),n.jc("formGroup",t.form),n.Bb(6),n.jc("ngIf",t.form.controls.valor.invalid&&(t.form.controls.valor.dirty||t.form.controls.valor.touched)),n.Bb(5),n.jc("ngIf",t.form.controls.descripcion.invalid&&(t.form.controls.descripcion.dirty||t.form.controls.descripcion.touched)),n.Bb(3),n.jc("disabled",t.form.pristine||t.form.invalid||t.loading),n.Bb(1),n.jc("ngIf",t.newTypeProfit),n.Bb(1),n.jc("ngIf",!t.newTypeProfit)}}const L=function(){return{marginTop:"80px"}},z=[{path:"",component:y},{path:":id",component:(()=>{class t{constructor(t,i,e,r,o){this.typeProfitService=t,this.activatedRoute=i,this.formBuilder=e,this.location=r,this.messageService=o}ngOnInit(){this.newTypeProfit="new"===this.activatedRoute.snapshot.params.id,this.newTypeProfit?(this.typeProfit=new T,this.buildForm()):(Promise.resolve().then(()=>this.loading=!0),this.typeProfitService.find(this.activatedRoute.snapshot.params.id).subscribe(t=>{this.typeProfit=t.data,this.loading=!1,this.buildForm()},t=>{this.loading=!1,this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})}))}buildForm(){this.form=this.formBuilder.group({valor:new c.c(this.typeProfit.valor,[c.n.required,w.a]),descripcion:new c.c(this.typeProfit.descripcion,[c.n.required,w.a])})}save(){if(Promise.resolve().then(()=>this.loading=!0),this.typeProfit.id)this.typeProfit.valor=this.form.get("valor").value,this.typeProfit.descripcion=this.form.get("descripcion").value,this.typeProfitService.update(this.typeProfit).subscribe(t=>{this.messageService.add({severity:"success",summary:"\xc9xito",detail:t.message}),this.loading=!1,this.back()},t=>{this.loading=!1,this.messageService.add({severity:"error",summary:"Error",detail:t.error.message})});else{const t=Object.assign({},this.form.value);this.typeProfitService.add(t).subscribe(t=>{this.messageService.add({severity:"success",summary:"\xc9xito",detail:t.message}),this.loading=!1,this.back()},t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.error.message}),this.loading=!1})}}back(){this.location.back()}}return t.\u0275fac=function(i){return new(i||t)(n.Nb(s.a),n.Nb(o.a),n.Nb(c.b),n.Nb(b.g),n.Nb(a.d))},t.\u0275cmp=n.Hb({type:t,selectors:[["app-type-profit-detail"]],decls:15,vars:5,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],["class","row",4,"ngIf"],["class","card",4,"ngIf"],[1,"row","mt-3"],[1,"col-12","text-right"],["type","button",1,"btn","btn-secondary","mr-1",3,"click"],["aria-hidden","true",1,"fas","fa-arrow-left"],["src","assets/notfound.png","alt","No existen resultados",1,"d-block","mx-auto","img-not-found"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[3,"formGroup"],[1,"col-12","col-md-6","form-group"],["for","valor"],["type","text","id","valor","formControlName","valor",1,"form-control","form-control-user"],["class","alert alert-danger mt-1",4,"ngIf"],["for","descripcion"],["type","text","id","descripcion","formControlName","descripcion",1,"form-control","form-control-user"],[1,"row","mt-1"],[1,"col-12","text-right","mt-2"],["type","button",1,"btn","btn-primary","mr-1",3,"disabled","click"],[4,"ngIf"],[1,"alert","alert-danger","mt-1"],["aria-hidden","true",1,"fas",3,"ngClass"]],template:function(t,i){1&t&&(n.Tb(0,"div",0),n.Tb(1,"div",1),n.Tb(2,"div",2),n.Tb(3,"h1"),n.Gc(4,"Detalle usuario"),n.Sb(),n.Sb(),n.Sb(),n.Ob(5,"hr"),n.Ec(6,P,2,0,"div",3),n.Ec(7,R,23,6,"div",4),n.Tb(8,"div",5),n.Tb(9,"div",6),n.Tb(10,"button",7),n.bc("click",(function(){return i.back()})),n.Tb(11,"span"),n.Ob(12,"i",8),n.Gc(13," Volver"),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Ob(14,"p-toast")),2&t&&(n.Bb(6),n.jc("ngIf",!i.typeProfit&&!i.loading),n.Bb(1),n.jc("ngIf",i.typeProfit),n.Bb(7),n.Cc(n.lc(4,L)))},directives:[b.k,B.a,c.o,c.i,c.e,c.a,c.h,c.d,b.i],styles:[""]}),t})()}];let q=(()=>{class t{}return t.\u0275mod=n.Lb({type:t}),t.\u0275inj=n.Kb({factory:function(i){return new(i||t)},imports:[[o.e.forChild(z)],o.e]}),t})();e.d(i,"TypeProfitModule",(function(){return M}));let M=(()=>{class t{}return t.\u0275mod=n.Lb({type:t}),t.\u0275inj=n.Kb({factory:function(i){return new(i||t)},imports:[[r.a,q]]}),t})()}}]);