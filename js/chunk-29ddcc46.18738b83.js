(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29ddcc46"],{"0d3f":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-list"},t._l(t.todos,(function(e,n){return o("v-row",{key:n,staticClass:"list-item",attrs:{align:"center","no-gutters":""}},[o("div",{staticClass:"circle",class:{"green-border":e.complete},on:{click:function(o){return t.editTask(e)}}},[o("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.complete,expression:"todo.complete"}],attrs:{icon:"","x-small":"",color:"#66b79b"}},[o("v-icon",[t._v("mdi-check")])],1)],1),o("p",{class:{"text-complete":e.complete}},[t._v(" "+t._s(e.title)+" ")]),o("v-spacer"),o("v-btn",{attrs:{icon:""},on:{click:function(o){return t.deleteTodo(e)}}},[o("v-icon",[t._v("mdi-close")])],1)],1)})),1)},c=[],s={name:"TodoList",props:["todos"],data:function(){return{}},methods:{editTask:function(t){this.$emit("edit-task",t)},deleteTodo:function(t){this.$emit("delete-todo",t)}}},i=s,a=(o("7837"),o("2877")),r=o("6544"),l=o.n(r),d=o("8336"),u=o("132d"),f=o("0fd9"),p=o("2fa4"),v=Object(a["a"])(i,n,c,!1,null,"52a54cff",null);e["default"]=v.exports;l()(v,{VBtn:d["a"],VIcon:u["a"],VRow:f["a"],VSpacer:p["a"]})},7837:function(t,e,o){"use strict";var n=o("e1d9"),c=o.n(n);c.a},e1d9:function(t,e,o){}}]);
//# sourceMappingURL=chunk-29ddcc46.18738b83.js.map