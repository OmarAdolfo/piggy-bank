function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{vnru:function(t,e,n){"use strict";n.r(e);var i,a=n("PCNd"),r=n("tyNb"),o=n("3Pt+"),c=n("fXoL"),s=n("AytR"),d=n("tk/3"),b=((i=function(){function t(e){_classCallCheck(this,t),this.http=e,this.url=s.a.url+"meta-ahorros",this.urlYearlySaving=s.a.url+"ahorros-anuales"}return _createClass(t,[{key:"get",value:function(t,e,n,i){var a=[],r="";return t.anno&&a.push("anno="+t.anno),e&&(a.push("sortable="+e),n&&a.push(1===n?"orderBy=asc":"orderBy=desc")),i&&a.push("page="+i),a.length>0&&(r="?"+a.join("&")),this.http.get(this.url+r)}},{key:"find",value:function(t){return this.http.get(this.url+"/"+t)}},{key:"add",value:function(t){return this.http.post(this.url,t)}},{key:"update",value:function(t,e){return this.http.put(this.url+"/"+e,t)}},{key:"delete",value:function(t){return this.http.delete(this.url+"/"+t)}},{key:"getYearlySaving",value:function(){return this.http.get(this.urlYearlySaving)}}]),t}()).\u0275fac=function(t){return new(t||i)(c.Xb(d.b))},i.\u0275prov=c.Jb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),u=n("7zfz"),l=n("ofXK"),f=n("rEr+"),v=n("jIHw");function m(t,e){if(1&t&&(c.Tb(0,"th",19),c.Gc(1),c.Ob(2,"p-sortIcon",20),c.Sb()),2&t){var n=e.$implicit;c.jc("pSortableColumn",n.field),c.Bb(1),c.Ic(" ",n.header," "),c.Bb(1),c.jc("field",n.field)}}function g(t,e){if(1&t&&(c.Tb(0,"tr"),c.Ec(1,m,3,3,"th",18),c.Sb()),2&t){var n=e.$implicit;c.Bb(1),c.jc("ngForOf",n)}}function h(t,e){1&t&&(c.Tb(0,"span"),c.Gc(1,"SUPERADO"),c.Sb()),2&t&&c.Db("customer-badge status-qualified")}function p(t,e){1&t&&(c.Tb(0,"span"),c.Gc(1,"NO SUPERADO"),c.Sb()),2&t&&c.Db("customer-badge status-unqualified")}function S(t,e){if(1&t){var n=c.Ub();c.Tb(0,"tr",21),c.Tb(1,"td"),c.Gc(2),c.Sb(),c.Tb(3,"td"),c.Gc(4),c.Sb(),c.Tb(5,"td"),c.Gc(6),c.Sb(),c.Tb(7,"td"),c.Ec(8,h,2,2,"span",22),c.Ec(9,p,2,2,"span",22),c.Sb(),c.Tb(10,"td"),c.Tb(11,"button",23),c.bc("click",(function(){c.wc(n);var t=e.$implicit;return c.dc().onRowSelect(t.id)})),c.Tb(12,"span"),c.Ob(13,"i",24),c.Sb(),c.Sb(),c.Tb(14,"button",23),c.bc("click",(function(){c.wc(n);var t=e.$implicit;return c.dc().confirm(t.id)})),c.Tb(15,"span"),c.Ob(16,"i",25),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&t){var i=e.$implicit,a=c.dc();c.jc("pSelectableRow",i),c.Bb(2),c.Ic(" ",i.anno," "),c.Bb(2),c.Ic(" ",i.cantidad," "),c.Bb(2),c.Ic(" ",a.getSavings(i.anno)," "),c.Bb(2),c.jc("ngIf",a.getStatus(i.cantidad,i.anno)),c.Bb(1),c.jc("ngIf",!a.getStatus(i.cantidad,i.anno))}}function y(t,e){if(1&t){var n=c.Ub();c.Tb(0,"div",26),c.Tb(1,"button",27),c.bc("click",(function(){return c.wc(n),c.dc().add()})),c.Sb(),c.Sb()}}var T,k=function(t,e){return{"fa-search":t,"fa-spinner fa-spin":e}},w=((T=function(){function t(e,n,i,a,r){_classCallCheck(this,t),this.metaSavingService=e,this.formBuilder=n,this.messageService=i,this.confirmationService=a,this.router=r,this.cols=[{field:"anno",header:"A\xf1o"},{field:"cantidad",header:"Objetivo"},{field:"",header:"Ahorrado"},{field:"",header:"Estado"},{field:"",header:"Opciones"}],this.statuses=[{label:"No superado",value:"no-superado"},{label:"Superado",value:"superado"}]}return _createClass(t,[{key:"ngOnInit",value:function(){this.getYearlySaving(),this.buildForm()}},{key:"getYearlySaving",value:function(){var t=this;this.metaSavingService.getYearlySaving().subscribe((function(e){t.pagos=e.pagos,t.ingresos=e.ingresos}))}},{key:"getSavings",value:function(t){var e=this.pagos.find((function(e){return e.anno===t})),n=this.ingresos.find((function(e){return e.anno===t})),i=e?this.pagos.find((function(e){return e.anno===t})).total:0;return(n?this.ingresos.find((function(e){return e.anno===t})).total:0)-i}},{key:"getStatus",value:function(t,e){var n=this.pagos.find((function(t){return t.anno===e})),i=this.ingresos.find((function(t){return t.anno===e})),a=n?this.pagos.find((function(t){return t.anno===e})).total:0;return t<=(i?this.ingresos.find((function(t){return t.anno===e})).total:0)-a}},{key:"buildForm",value:function(){this.form=this.formBuilder.group({anno:new o.c("")})}},{key:"add",value:function(){this.router.navigate(["/home/objectives/new"])}},{key:"search",value:function(t,e,n){var i=this;Promise.resolve().then((function(){return i.loading=!0})),this.metaSavingService.get(this.form.value,t,e,n).subscribe((function(t){i.metasSaving=t.data.data,i.totalRecords=t.data.total,i.loading=!1}),(function(){i.loading=!1}))}},{key:"customSort",value:function(t){this.search(t.sortField,t.sortOrder,t.first/t.rows+1)}},{key:"confirm",value:function(t){var e=this;this.confirmationService.confirm({message:"\xbfEst\xe1s seguro de que deseas borrar?",header:"Confirmaci\xf3n",icon:"pi pi-exclamation-triangle",accept:function(){e.delete(t)}})}},{key:"delete",value:function(t){var e=this;this.metaSavingService.delete(t).subscribe((function(n){e.metasSaving=e.metasSaving.filter((function(e){return e.id!==t})),e.messageService.add({severity:"success",summary:"\xc9xito",detail:n.message})}),(function(t){e.messageService.add({severity:"error",summary:"Error",detail:t.error.message})}))}},{key:"onRowSelect",value:function(t){this.router.navigate(["/home/objectives/"+t])}}]),t}()).\u0275fac=function(t){return new(t||T)(c.Nb(b),c.Nb(o.b),c.Nb(u.d),c.Nb(u.a),c.Nb(r.b))},T.\u0275cmp=c.Hb({type:T,selectors:[["app-meta-saving"]],decls:34,vars:13,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],[1,"card","mt-3"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[3,"formGroup"],[1,"col-12","col-md-6","form-group"],["for","anno"],["type","text","id","anno","formControlName","anno",1,"form-control","form-control-user"],[1,"row","mt-1"],[1,"col-12","text-right","mt-2"],["type","button",1,"btn","btn-primary","mr-1",3,"disabled","click"],["aria-hidden","true",1,"fas",3,"ngClass"],[3,"columns","value","paginator","rows","responsive","lazy","totalRecords","onLazyLoad"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[3,"pSelectableRow"],[3,"class",4,"ngIf"],["type","button",1,"btn","btn-secondary","mr-1",3,"click"],["aria-hidden","true",1,"fas","fa-edit"],["aria-hidden","true",1,"fas","fa-trash"],[2,"text-align","left"],["type","button","pButton","","icon","pi pi-plus","label","A\xf1adir",3,"click"]],template:function(t,e){1&t&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"h1"),c.Gc(4,"Objetivos"),c.Sb(),c.Sb(),c.Sb(),c.Ob(5,"hr"),c.Tb(6,"div",3),c.Tb(7,"div",4),c.Gc(8," Buscador de objetivos "),c.Sb(),c.Tb(9,"div",5),c.Tb(10,"div",1),c.Tb(11,"div",2),c.Tb(12,"form",6),c.Tb(13,"div",1),c.Tb(14,"div",7),c.Tb(15,"label",8),c.Gc(16,"A\xf1o"),c.Sb(),c.Ob(17,"input",9),c.Sb(),c.Sb(),c.Tb(18,"div",10),c.Tb(19,"div",11),c.Tb(20,"button",12),c.bc("click",(function(){return e.search()})),c.Ob(21,"i",13),c.Tb(22,"span"),c.Gc(23," Buscar"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(24,"div",3),c.Tb(25,"div",4),c.Gc(26," Listado de objetivos "),c.Sb(),c.Tb(27,"div",5),c.Tb(28,"div",1),c.Tb(29,"div",2),c.Tb(30,"p-table",14),c.bc("onLazyLoad",(function(t){return e.customSort(t)})),c.Ec(31,g,2,1,"ng-template",15),c.Ec(32,S,17,6,"ng-template",16),c.Ec(33,y,2,0,"ng-template",17),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Bb(12),c.jc("formGroup",e.form),c.Bb(8),c.jc("disabled",e.loading),c.Bb(1),c.jc("ngClass",c.nc(10,k,!e.loading,e.loading)),c.Bb(9),c.jc("columns",e.cols)("value",e.metasSaving)("paginator",!0)("rows",10)("responsive",!0)("lazy",!0)("totalRecords",e.totalRecords))},directives:[o.o,o.i,o.e,o.a,o.h,o.d,l.i,f.d,u.e,l.j,f.c,f.b,f.a,l.k,v.a],styles:[".customer-badge[_ngcontent-%COMP%]{border-radius:2px;padding:.25em .5em;text-transform:uppercase;font-weight:700;font-size:12px;letter-spacing:.3px}.customer-badge.status-qualified[_ngcontent-%COMP%]{background-color:#c8e6c9;color:#256029}.customer-badge.status-unqualified[_ngcontent-%COMP%]{background-color:#ffcdd2;color:#c63737}"]}),T),C=function t(){_classCallCheck(this,t)},j=n("Gxio"),B=n("kAuD");function O(t,e){1&t&&(c.Tb(0,"div",1),c.Ob(1,"img",9),c.Sb())}function G(t,e){1&t&&(c.Tb(0,"div"),c.Gc(1," El a\xf1o es obligatorio "),c.Sb())}function E(t,e){1&t&&(c.Tb(0,"div"),c.Gc(1," El a\xf1o debe estar formado por cuatro n\xfameros "),c.Sb())}function I(t,e){if(1&t&&(c.Tb(0,"div",24),c.Ec(1,G,2,0,"div",25),c.Ec(2,E,2,0,"div",25),c.Sb()),2&t){var n=c.dc(2);c.Bb(1),c.jc("ngIf",n.form.controls.anno.errors.required),c.Bb(1),c.jc("ngIf",n.form.controls.anno.errors.pattern)}}function x(t,e){1&t&&(c.Tb(0,"div"),c.Gc(1," La cantidad es obligatoria "),c.Sb())}function N(t,e){if(1&t&&(c.Tb(0,"div",24),c.Ec(1,x,2,0,"div",25),c.Sb()),2&t){var n=c.dc(2);c.Bb(1),c.jc("ngIf",n.form.controls.cantidad.errors.required)}}var _=function(t,e){return{"fa-save":t,"fa-spinner fa-spin":e}};function R(t,e){if(1&t){var n=c.Ub();c.Tb(0,"div",10),c.Tb(1,"div",11),c.Gc(2," Dise\xf1ador objetivo "),c.Sb(),c.Tb(3,"div",12),c.Tb(4,"div",1),c.Tb(5,"div",2),c.Tb(6,"form",13),c.Tb(7,"div",1),c.Tb(8,"div",14),c.Tb(9,"label",15),c.Gc(10,"A\xf1o"),c.Sb(),c.Ob(11,"input",16),c.Ec(12,I,3,2,"div",17),c.Sb(),c.Tb(13,"div",14),c.Tb(14,"label",18),c.Gc(15,"Cantidad"),c.Sb(),c.Ob(16,"input",19),c.Ec(17,N,2,1,"div",17),c.Sb(),c.Sb(),c.Tb(18,"div",20),c.Tb(19,"div",21),c.Tb(20,"button",22),c.bc("click",(function(){return c.wc(n),c.dc().save()})),c.Tb(21,"span"),c.Ob(22,"i",23),c.Gc(23," Guardar "),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&t){var i=c.dc();c.Bb(6),c.jc("formGroup",i.form),c.Bb(6),c.jc("ngIf",i.form.controls.anno.invalid&&(i.form.controls.anno.dirty||i.form.controls.anno.touched)),c.Bb(5),c.jc("ngIf",i.form.controls.cantidad.invalid&&(i.form.controls.cantidad.dirty||i.form.controls.cantidad.touched)),c.Bb(3),c.jc("disabled",i.form.pristine||i.form.invalid||i.loading),c.Bb(2),c.jc("ngClass",c.nc(5,_,!i.loading,i.loading))}}var P,q,A=function(){return{marginTop:"80px"}},D=[{path:"",component:w},{path:":id",component:(P=function(){function t(e,n,i,a,r){_classCallCheck(this,t),this.formBuilder=e,this.metasavingService=n,this.activatedRoute=i,this.location=a,this.messageService=r,this.annoRegex=/^(\d{4})$/}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.newMetaSaving="new"===this.activatedRoute.snapshot.params.id,this.newMetaSaving?(this.metaSaving=new C,this.buildForm()):(Promise.resolve().then((function(){return t.loading=!0})),this.metasavingService.find(this.activatedRoute.snapshot.params.id).subscribe((function(e){t.metaSaving=e.data,t.loading=!1,t.buildForm()}),(function(e){t.loading=!1,t.messageService.add({severity:"error",summary:"Error",detail:e.error.message})})))}},{key:"buildForm",value:function(){this.form=this.formBuilder.group({anno:new o.c(this.metaSaving.anno,[o.n.required,o.n.pattern(this.annoRegex)]),cantidad:new o.c(this.metaSaving.cantidad,[o.n.required])})}},{key:"save",value:function(){var t=this;if(Promise.resolve().then((function(){return t.loading=!0})),this.metaSaving.id){var e=Object.assign(this.metaSaving,this.form.value);this.metasavingService.update(e,this.metaSaving.id).subscribe((function(e){t.loading=!1,t.back()}),(function(e){t.loading=!1,t.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}else{var n=Object.assign({},this.form.value);this.metasavingService.add(n).subscribe((function(e){t.loading=!1,t.back()}),(function(e){t.loading=!1,t.messageService.add({severity:"error",summary:"Error",detail:e.error.message})}))}}},{key:"back",value:function(){this.location.back()}}]),t}(),P.\u0275fac=function(t){return new(t||P)(c.Nb(o.b),c.Nb(b),c.Nb(r.a),c.Nb(l.g),c.Nb(u.d))},P.\u0275cmp=c.Hb({type:P,selectors:[["app-meta-saving-detail"]],decls:15,vars:5,consts:[[1,"wrapper"],[1,"row"],[1,"col-12"],["class","row",4,"ngIf"],["class","card",4,"ngIf"],[1,"row","mt-3"],[1,"col-12","text-right"],["type","button",1,"btn","btn-secondary","mr-1",3,"click"],["aria-hidden","true",1,"fas","fa-arrow-left"],["src","./assets/notfound.png","alt","No existen resultados",1,"d-block","mx-auto","img-not-found"],[1,"card"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[3,"formGroup"],[1,"col-12","col-md-6","form-group"],["for","anno"],["type","number","id","anno","formControlName","anno",1,"form-control","form-control-user"],["class","alert alert-danger mt-1",4,"ngIf"],["for","cantidad"],["type","textbox","formControlName","cantidad","placeholder","XX.XX","appTwoDigitDecimaNumber","",1,"form-control","form-control-user"],[1,"row","mt-1"],[1,"col-12","text-right","mt-2"],["type","button",1,"btn","btn-primary","mr-1",3,"disabled","click"],["aria-hidden","true",1,"fas",3,"ngClass"],[1,"alert","alert-danger","mt-1"],[4,"ngIf"]],template:function(t,e){1&t&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"h1"),c.Gc(4,"Detalle meta de ahorro"),c.Sb(),c.Sb(),c.Sb(),c.Ob(5,"hr"),c.Ec(6,O,2,0,"div",3),c.Ec(7,R,24,8,"div",4),c.Tb(8,"div",5),c.Tb(9,"div",6),c.Tb(10,"button",7),c.bc("click",(function(){return e.back()})),c.Tb(11,"span"),c.Ob(12,"i",8),c.Gc(13," Volver"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Ob(14,"p-toast")),2&t&&(c.Bb(6),c.jc("ngIf",!e.metaSaving&&!e.loading),c.Bb(1),c.jc("ngIf",e.metaSaving),c.Bb(7),c.Cc(c.lc(4,A)))},directives:[l.k,j.a,o.o,o.i,o.e,o.k,o.a,o.h,o.d,B.a,l.i],styles:[""]}),P)}],F=((q=function t(){_classCallCheck(this,t)}).\u0275mod=c.Lb({type:q}),q.\u0275inj=c.Kb({factory:function(t){return new(t||q)},imports:[[r.e.forChild(D)],r.e]}),q);n.d(e,"MetaSavingModule",(function(){return z}));var L,z=((L=function t(){_classCallCheck(this,t)}).\u0275mod=c.Lb({type:L}),L.\u0275inj=c.Kb({factory:function(t){return new(t||L)},imports:[[a.a,F]]}),L)}}]);