(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Sidq:function(e,r,o){"use strict";o.r(r);var t=o("PCNd"),i=o("tyNb"),s=o("3Pt+"),n=o("Y5fV"),c=o("fXoL"),a=o("AytR"),l=o("tk/3");let b=(()=>{class e{constructor(e){this.http=e,this.url=a.a.url+"usuarios"}get(e,r,o,t){let i=[],s="";return e.nombre&&i.push("nombre="+e.nombre),e.apellidos&&i.push("apellidos="+e.apellidos),e.email&&i.push("email="+e.email),e.rol&&i.push("rol="+e.rol),r&&(i.push("sortable="+r),o&&i.push(1===o?"orderBy=asc":"orderBy=desc")),t&&i.push("page="+t),i.length>0&&(s="?"+i.join("&")),this.http.get(this.url+s)}add(e){return this.http.post(this.url,e)}update(e){return this.http.put(this.url+"/"+e.id,e)}delete(e){return this.http.delete(this.url+"/"+e)}find(e){return this.http.get(this.url+"/"+e)}}return e.\u0275fac=function(r){return new(r||e)(c.Yb(l.b))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=o("7zfz"),u=o("5o1E"),m=o("ofXK"),f=o("rEr+"),p=o("jIHw");function h(e,r){if(1&e&&c.Pb(0,"p-sortIcon",24),2&e){const e=c.ec().$implicit;c.kc("field",e.field)}}function v(e,r){if(1&e&&(c.Ub(0,"th",22),c.Hc(1),c.Fc(2,h,1,1,"p-sortIcon",23),c.Tb()),2&e){const e=r.$implicit;c.kc("pSortableColumn",e.field),c.Cb(1),c.Jc(" ",e.header," "),c.Cb(1),c.kc("ngIf",e.sortOrder)}}function g(e,r){if(1&e&&(c.Ub(0,"tr"),c.Fc(1,v,3,3,"th",21),c.Tb()),2&e){const e=r.$implicit;c.Cb(1),c.kc("ngForOf",e)}}function U(e,r){if(1&e){const e=c.Vb();c.Ub(0,"tr",25),c.Ub(1,"td"),c.Ub(2,"span",26),c.Hc(3,"Nombre"),c.Tb(),c.Hc(4),c.Tb(),c.Ub(5,"td"),c.Ub(6,"span",26),c.Hc(7,"Apellidos"),c.Tb(),c.Hc(8),c.Tb(),c.Ub(9,"td"),c.Ub(10,"span",26),c.Hc(11,"Correo electr\xf3nico"),c.Tb(),c.Hc(12),c.Tb(),c.Ub(13,"td"),c.Ub(14,"span",26),c.Hc(15,"Rol"),c.Tb(),c.Hc(16),c.Tb(),c.Ub(17,"td"),c.Ub(18,"button",27),c.cc("click",(function(){c.xc(e);const o=r.$implicit;return c.ec().onRowSelect(o.id)})),c.Ub(19,"span"),c.Pb(20,"i",28),c.Tb(),c.Tb(),c.Ub(21,"button",27),c.cc("click",(function(){c.xc(e);const o=r.$implicit;return c.ec().confirm(o.id)})),c.Ub(22,"span"),c.Pb(23,"i",29),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){const e=r.$implicit;c.kc("pSelectableRow",e),c.Cb(4),c.Jc(" ",e.nombre," "),c.Cb(4),c.Jc(" ",e.apellidos," "),c.Cb(4),c.Jc(" ",e.email," "),c.Cb(4),c.Jc(" ",e.rol," ")}}function T(e,r){if(1&e){const e=c.Vb();c.Ub(0,"div",30),c.Ub(1,"button",31),c.cc("click",(function(){return c.xc(e),c.ec().add()})),c.Tb(),c.Tb()}}const C=function(e,r){return{"fa-search":e,"fa-spinner fa-spin":r}};let y=(()=>{class e{constructor(e,r,o,t,i){this.userService=e,this.formBuilder=r,this.messageService=o,this.confirmationService=t,this.router=i,this.cols=[{field:"nombre",header:"Nombre",sortOrder:!0},{field:"apellidos",header:"Apellidos",sortOrder:!0},{field:"email",header:"Correo electr\xf3nico",sortOrder:!0},{field:"rol",header:"Rol",sortOrder:!0},{field:"",header:"Opciones",sortOrder:!1}],this.roles=[{label:n.a.Admin,value:n.a.Admin.toString()},{label:n.a.User,value:n.a.User.toString()}]}ngOnInit(){this.buildForm()}buildForm(){this.form=this.formBuilder.group({nombre:new s.c(""),apellidos:new s.c(""),email:new s.c(""),rol:new s.c("")})}add(){this.router.navigate(["/home/users/new"])}search(e,r,o){Promise.resolve().then(()=>this.loading=!0),this.userService.get(this.form.value,e,r,o).subscribe(e=>{this.users=e.data.data,this.totalRecords=e.data.total,this.loading=!1},()=>{this.loading=!1})}customSort(e){this.search(e.sortField,e.sortOrder,e.first/e.rows+1)}confirm(e){this.confirmationService.confirm({message:"\xbfEst\xe1s seguro de que deseas borrar?",header:"Confirmaci\xf3n",icon:"pi pi-exclamation-triangle",accept:()=>{this.delete(e)}})}delete(e){this.userService.delete(e).subscribe(r=>{this.users=this.users.filter(r=>r.id!==e),this.messageService.add({severity:"success",summary:"\xc9xito",detail:r.message})},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})}onRowSelect(e){this.router.navigate(["/home/users/"+e])}}return e.\u0275fac=function(r){return new(r||e)(c.Ob(b),c.Ob(s.b),c.Ob(d.d),c.Ob(d.a),c.Ob(i.b))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-user"]],decls:48,vars:14,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],[1,"card","mt-3"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[3,"formGroup"],[1,"col-12","col-md-6","form-group"],["for","nombre"],["type","text","id","nombre","formControlName","nombre",1,"form-control","form-control-user"],["type","text","id","apellidos","formControlName","apellidos",1,"form-control","form-control-user"],[1,"row","mt-1"],["type","text","id","email","formControlName","email",1,"form-control","form-control-user"],["id","rol","formControlName","rol",3,"options"],[1,"col-12","text-right","mt-2"],["type","button",1,"btn","btn-primary","mr-1",3,"disabled","click"],["aria-hidden","true",1,"fas",3,"ngClass"],["selectionMode","single",3,"columns","value","paginator","rows","responsive","lazy","totalRecords","onLazyLoad"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field",4,"ngIf"],[3,"field"],[3,"pSelectableRow"],[1,"ui-column-title"],["type","button",1,"btn","btn-secondary","mr-1",3,"click"],["aria-hidden","true",1,"fas","fa-edit"],["aria-hidden","true",1,"fas","fa-trash"],[2,"text-align","left"],["type","button","pButton","","icon","pi pi-plus","label","A\xf1adir",3,"click"]],template:function(e,r){1&e&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Ub(3,"h1"),c.Hc(4,"Usuarios"),c.Tb(),c.Tb(),c.Tb(),c.Pb(5,"hr"),c.Ub(6,"div",3),c.Ub(7,"div",4),c.Hc(8," Buscador de usuarios "),c.Tb(),c.Ub(9,"div",5),c.Ub(10,"div",1),c.Ub(11,"div",2),c.Ub(12,"form",6),c.Ub(13,"div",1),c.Ub(14,"div",7),c.Ub(15,"label",8),c.Hc(16,"Nombre"),c.Tb(),c.Pb(17,"input",9),c.Tb(),c.Ub(18,"div",7),c.Ub(19,"label",8),c.Hc(20,"Apellidos"),c.Tb(),c.Pb(21,"input",10),c.Tb(),c.Tb(),c.Ub(22,"div",11),c.Ub(23,"div",7),c.Ub(24,"label",8),c.Hc(25,"Correo electr\xf3nico"),c.Tb(),c.Pb(26,"input",12),c.Tb(),c.Ub(27,"div",7),c.Ub(28,"label",8),c.Hc(29,"Rol"),c.Tb(),c.Ub(30,"div"),c.Pb(31,"p-selectButton",13),c.Tb(),c.Tb(),c.Tb(),c.Ub(32,"div",11),c.Ub(33,"div",14),c.Ub(34,"button",15),c.cc("click",(function(){return r.search()})),c.Pb(35,"i",16),c.Ub(36,"span"),c.Hc(37," Buscar"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(38,"div",3),c.Ub(39,"div",4),c.Hc(40," Listado de usuarios "),c.Tb(),c.Ub(41,"div",5),c.Ub(42,"div",1),c.Ub(43,"div",2),c.Ub(44,"p-table",17),c.cc("onLazyLoad",(function(e){return r.customSort(e)})),c.Fc(45,g,2,1,"ng-template",18),c.Fc(46,U,24,5,"ng-template",19),c.Fc(47,T,2,0,"ng-template",20),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&e&&(c.Cb(12),c.kc("formGroup",r.form),c.Cb(19),c.kc("options",r.roles),c.Cb(3),c.kc("disabled",r.loading),c.Cb(1),c.kc("ngClass",c.oc(11,C,!r.loading,r.loading)),c.Cb(9),c.kc("columns",r.cols)("value",r.users)("paginator",!0)("rows",10)("responsive",!0)("lazy",!0)("totalRecords",r.totalRecords))},directives:[s.o,s.i,s.e,s.a,s.h,s.d,u.a,m.i,f.d,d.e,m.j,f.c,m.k,f.b,f.a,p.a],styles:[""]}),e})();class k{}var w=o("wMtC"),H=o("Gxio");function S(e,r){1&e&&(c.Ub(0,"div",1),c.Pb(1,"img",9),c.Tb())}function F(e,r){1&e&&(c.Ub(0,"div"),c.Hc(1," El nombre es obligatorio "),c.Tb())}function I(e,r){1&e&&(c.Ub(0,"div"),c.Hc(1," El nombre no puede ser vac\xedo "),c.Tb())}function x(e,r){if(1&e&&(c.Ub(0,"div",28),c.Fc(1,F,2,0,"div",27),c.Fc(2,I,2,0,"div",27),c.Tb()),2&e){const e=c.ec(2);c.Cb(1),c.kc("ngIf",e.form.controls.nombre.errors.required),c.Cb(1),c.kc("ngIf",e.form.controls.nombre.errors.whitespace)}}function P(e,r){1&e&&(c.Ub(0,"div"),c.Hc(1," Los apellidos son obligatorios "),c.Tb())}function O(e,r){1&e&&(c.Ub(0,"div"),c.Hc(1," Los apellidos no pueden ser vac\xedos "),c.Tb())}function R(e,r){if(1&e&&(c.Ub(0,"div",28),c.Fc(1,P,2,0,"div",27),c.Fc(2,O,2,0,"div",27),c.Tb()),2&e){const e=c.ec(2);c.Cb(1),c.kc("ngIf",e.form.controls.apellidos.errors.required),c.Cb(1),c.kc("ngIf",e.form.controls.nombre.errors.whitespace)}}function N(e,r){1&e&&(c.Ub(0,"div"),c.Hc(1," El rol es obligatorio "),c.Tb())}function E(e,r){if(1&e&&(c.Ub(0,"div",28),c.Fc(1,N,2,0,"div",27),c.Tb()),2&e){const e=c.ec(2);c.Cb(1),c.kc("ngIf",e.form.controls.rol.errors.required)}}function B(e,r){1&e&&(c.Ub(0,"div"),c.Hc(1," El correo electr\xf3nico es obligatorio "),c.Tb())}function q(e,r){1&e&&(c.Ub(0,"div"),c.Hc(1," El correo electr\xf3nico no tiene un formato correcto "),c.Tb())}function A(e,r){if(1&e&&(c.Ub(0,"div",28),c.Fc(1,B,2,0,"div",27),c.Fc(2,q,2,0,"div",27),c.Tb()),2&e){const e=c.ec(2);c.Cb(1),c.kc("ngIf",e.form.controls.email.errors.required),c.Cb(1),c.kc("ngIf",e.form.controls.email.errors.email)}}const L=function(e,r){return{"fa-save":e,"fa-spinner fa-spin":r}};function J(e,r){if(1&e&&(c.Ub(0,"span"),c.Pb(1,"i",29),c.Hc(2," Guardar"),c.Tb()),2&e){const e=c.ec(2);c.Cb(1),c.kc("ngClass",c.oc(1,L,!e.loading,e.loading))}}const j=function(e,r){return{"fa-edit":e,"fa-spinner fa-spin":r}};function z(e,r){if(1&e&&(c.Ub(0,"span"),c.Pb(1,"i",29),c.Hc(2," Editar"),c.Tb()),2&e){const e=c.ec(2);c.Cb(1),c.kc("ngClass",c.oc(1,j,!e.loading,e.loading))}}function G(e,r){if(1&e){const e=c.Vb();c.Ub(0,"div",10),c.Ub(1,"div",11),c.Hc(2," Dise\xf1ador usuario "),c.Tb(),c.Ub(3,"div",12),c.Ub(4,"div",1),c.Ub(5,"div",2),c.Ub(6,"form",13),c.Ub(7,"div",1),c.Ub(8,"div",14),c.Ub(9,"label",15),c.Hc(10,"Nombre"),c.Tb(),c.Pb(11,"input",16),c.Fc(12,x,3,2,"div",17),c.Tb(),c.Ub(13,"div",14),c.Ub(14,"label",18),c.Hc(15,"Apellidos"),c.Tb(),c.Pb(16,"input",19),c.Fc(17,R,3,2,"div",17),c.Tb(),c.Ub(18,"div",14),c.Ub(19,"label",20),c.Hc(20,"Rol"),c.Tb(),c.Ub(21,"div"),c.Pb(22,"p-selectButton",21),c.Fc(23,E,2,1,"div",17),c.Tb(),c.Tb(),c.Ub(24,"div",14),c.Ub(25,"label",22),c.Hc(26,"Correo electr\xf3nico"),c.Tb(),c.Pb(27,"input",23),c.Fc(28,A,3,2,"div",17),c.Tb(),c.Tb(),c.Ub(29,"div",24),c.Ub(30,"div",25),c.Ub(31,"button",26),c.cc("click",(function(){return c.xc(e),c.ec().save()})),c.Fc(32,J,3,4,"span",27),c.Fc(33,z,3,4,"span",27),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){const e=c.ec();c.Cb(6),c.kc("formGroup",e.form),c.Cb(6),c.kc("ngIf",e.form.controls.nombre.invalid&&(e.form.controls.nombre.dirty||e.form.controls.nombre.touched)),c.Cb(5),c.kc("ngIf",e.form.controls.apellidos.invalid&&(e.form.controls.apellidos.dirty||e.form.controls.apellidos.touched)),c.Cb(5),c.kc("options",e.roles),c.Cb(1),c.kc("ngIf",e.form.controls.rol.invalid&&(e.form.controls.rol.dirty||e.form.controls.rol.touched)),c.Cb(5),c.kc("ngIf",e.form.controls.email.invalid&&(e.form.controls.email.dirty||e.form.controls.email.touched)),c.Cb(3),c.kc("disabled",e.form.pristine||e.form.invalid||e.loading),c.Cb(1),c.kc("ngIf",e.newUser),c.Cb(1),c.kc("ngIf",!e.newUser)}}const $=function(){return{marginTop:"80px"}},M=[{path:"",component:y},{path:":id",component:(()=>{class e{constructor(e,r,o,t,i){this.formBuilder=e,this.userService=r,this.messageService=o,this.activatedRoute=t,this.location=i,this.roles=[{label:n.a.Admin,value:n.a.Admin.toString()},{label:n.a.User,value:n.a.User.toString()}]}ngOnInit(){this.newUser="new"===this.activatedRoute.snapshot.params.id,this.newUser?(this.user=new k,this.buildForm()):(Promise.resolve().then(()=>this.loading=!0),this.userService.find(this.activatedRoute.snapshot.params.id).subscribe(e=>{this.user=e.data,this.loading=!1,this.buildForm()},e=>{this.loading=!1,this.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}buildForm(){this.form=this.formBuilder.group({nombre:new s.c(this.user.nombre,[s.n.required,w.a]),apellidos:new s.c(this.user.apellidos,[s.n.required,w.a]),email:new s.c(this.user.email,[s.n.required,s.n.email]),rol:new s.c(this.user.rol,s.n.required)})}save(){if(Promise.resolve().then(()=>this.loading=!0),this.user.id)this.user.nombre=this.form.get("nombre").value,this.user.apellidos=this.form.get("apellidos").value,this.user.email=this.form.get("email").value,this.user.rol=this.form.get("rol").value,this.userService.update(this.user).subscribe(e=>{this.messageService.add({severity:"success",summary:"\xc9xito",detail:e.message}),this.loading=!1,this.back()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message}),this.loading=!1});else{const e=Object.assign({},this.form.value);this.userService.add(e).subscribe(e=>{this.messageService.add({severity:"success",summary:"\xc9xito",detail:e.message}),this.loading=!1,this.back()},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.error.message}),this.loading=!1})}}back(){this.location.back()}}return e.\u0275fac=function(r){return new(r||e)(c.Ob(s.b),c.Ob(b),c.Ob(d.d),c.Ob(i.a),c.Ob(m.g))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-user-detail"]],decls:15,vars:5,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],["class","row",4,"ngIf"],["class","card",4,"ngIf"],[1,"row","mt-3"],[1,"col-12","text-right"],["type","button",1,"btn","btn-secondary","mr-1",3,"click"],["aria-hidden","true",1,"fas","fa-arrow-left"],["src","./assets/notfound.png","alt","No existen resultados",1,"d-block","mx-auto","img-not-found"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[3,"formGroup"],[1,"col-12","col-md-6","form-group"],["for","nombre"],["type","text","id","nombre","formControlName","nombre",1,"form-control","form-control-user"],["class","alert alert-danger mt-1",4,"ngIf"],["for","apellidos"],["type","text","id","apellidos","formControlName","apellidos",1,"form-control","form-control-user"],["for","rol"],["formControlName","rol",3,"options"],["for","email"],["type","text","id","email","formControlName","email",1,"form-control","form-control-user"],[1,"row","mt-1"],[1,"col-12","text-right","mt-2"],["type","button",1,"btn","btn-primary","mr-1",3,"disabled","click"],[4,"ngIf"],[1,"alert","alert-danger","mt-1"],["aria-hidden","true",1,"fas",3,"ngClass"]],template:function(e,r){1&e&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Ub(3,"h1"),c.Hc(4,"Detalle usuario"),c.Tb(),c.Tb(),c.Tb(),c.Pb(5,"hr"),c.Fc(6,S,2,0,"div",3),c.Fc(7,G,34,9,"div",4),c.Ub(8,"div",5),c.Ub(9,"div",6),c.Ub(10,"button",7),c.cc("click",(function(){return r.back()})),c.Ub(11,"span"),c.Pb(12,"i",8),c.Hc(13," Volver"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Pb(14,"p-toast")),2&e&&(c.Cb(6),c.kc("ngIf",!r.user&&!r.loading),c.Cb(1),c.kc("ngIf",r.user),c.Cb(7),c.Dc(c.mc(4,$)))},directives:[m.k,H.a,s.o,s.i,s.e,s.a,s.h,s.d,u.a,m.i],styles:[""]}),e})()}];let V=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(r){return new(r||e)},imports:[[i.e.forChild(M)],i.e]}),e})();o.d(r,"UserModule",(function(){return D}));let D=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(r){return new(r||e)},imports:[[t.a,V]]}),e})()}}]);