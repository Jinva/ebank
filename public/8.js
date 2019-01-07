webpackJsonp([8],{364:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[],form:"",dialog:"",keyword:{page:1,key:"",value:"",date:[]}}},methods:{add:function(t){var e=this;e.dialog.open(),e.$API.get("/system/config/"+t).then(function(t){e.form=t}).catch(function(t){})},add_submit:function(){var t=this;t.$API.post("/system/config",t.form).then(function(){t.dialog.close(),t.init()}).catch(function(t){})},del:function(t){var e=this;mdui.confirm("删除后数据不可恢复，确认删除请点击【确定】按钮","确认?",function(){e.$API.del("/system/config",{id:t}).then(function(){e.init()}).catch(function(t){})},function(){},{history:!1,confirmText:"确定",cancelText:"取消"})},search:function(t){this.keyword.page=t,this.init()},rank:function(t,e){var i=this;i.tips("更新排序中..."),i.$API.post("/system/config_rank",{id:t,action:e}).then(function(t){i.init()}).catch(function(t){})},init:function(){var t=this;t.$API.get("/system/config",t.keyword).then(function(e){t.list=e.list}).catch(function(t){})}},mounted:function(){this.dialog=new mdui.Dialog(".dialog_add",{history:!1}),this.init()}}},365:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"purse_user"},[i("div",{staticClass:"typo",on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.search(1)}}},[i("blockquote",{staticClass:"blockquote_normal"},[i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(e){t.add(0)}}},[i("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("add")]),t._v("添加")])]),t._v(" "),i("div",{staticClass:"mdui-divider"}),t._v(" "),i("blockquote",{staticClass:"blockquote_normal"},[i("p",[t._v("\n\t\t\t\t键："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.key,expression:"keyword.key"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.key},on:{input:function(e){e.target.composing||t.$set(t.keyword,"key",e.target.value)}}})]),t._v(" "),i("p",[t._v("\n\t\t\t\t值："),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.value,expression:"keyword.value"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.value},on:{input:function(e){e.target.composing||t.$set(t.keyword,"value",e.target.value)}}})]),t._v(" "),i("p",[t._v("\n\t\t\t\t日期筛选："),i("vue-datepicker-local",{attrs:{clearable:""},model:{value:t.keyword.date,callback:function(e){t.$set(t.keyword,"date",e)},expression:"keyword.date"}})],1),t._v(" "),i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(e){t.search(1)}}},[i("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("search")]),t._v("搜索")])])]),t._v(" "),i("div",{staticClass:"mdui-table-fluid"},[i("table",{staticClass:"mdui-table mdui-table-hoverable"},[t._m(0),t._v(" "),i("tbody",t._l(t.list.data,function(e,a,s){return i("tr",[i("td",{domProps:{textContent:t._s("#"+(a+1))}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.key)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.value)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.tips)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.status?"启用":"禁用")}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.created_at)}}),t._v(" "),i("td",{domProps:{textContent:t._s(e.rank)}}),t._v(" "),i("td",[i("div",{staticClass:"mdui-btn-group"},[i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(i){t.add(e.id)}}},[t._v("修改")]),t._v(" "),i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-deep-orange",on:{click:function(i){t.del(e.id)}}},[t._v("删除")])])])])}),0)])]),t._v(" "),i("div",{staticClass:"mdui-dialog dialog_add"},[i("div",{staticClass:"mdui-dialog-title"},[t._v("\n\t\t\t系统配置新增/修改\n\t\t")]),t._v(" "),i("div",{staticClass:"mdui-dialog-content",on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.add_submit(e):null}}},[i("form",[i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-textfield"},[i("label",{staticClass:"mdui-textfield-label"},[t._v("配置键名")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.key,expression:"form.key"}],staticClass:"mdui-textfield-input",attrs:{type:"text"},domProps:{value:t.form.key},on:{input:function(e){e.target.composing||t.$set(t.form,"key",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-textfield"},[i("label",{staticClass:"mdui-textfield-label"},[t._v("配置值")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.value,expression:"form.value"}],staticClass:"mdui-textfield-input",attrs:{type:"text"},domProps:{value:t.form.value},on:{input:function(e){e.target.composing||t.$set(t.form,"value",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-textfield"},[i("label",{staticClass:"mdui-textfield-label"},[t._v("提示")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tips,expression:"form.tips"}],staticClass:"mdui-textfield-input",attrs:{type:"text"},domProps:{value:t.form.tips},on:{input:function(e){e.target.composing||t.$set(t.form,"tips",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("div",{staticClass:"mdui-textfield"},[i("label",{staticClass:"mdui-textfield-label"},[t._v("展示列表排序(小位数靠前)")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.rank,expression:"form.rank"}],staticClass:"mdui-textfield-input",attrs:{type:"text"},domProps:{value:t.form.rank},on:{input:function(e){e.target.composing||t.$set(t.form,"rank",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("label",{staticClass:"mdui-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],attrs:{type:"radio",name:"status",value:"1"},domProps:{checked:!!t.form.status,checked:t._q(t.form.status,"1")},on:{change:function(e){t.$set(t.form,"status","1")}}}),t._v(" "),i("i",{staticClass:"mdui-radio-icon"}),t._v("\n\t\t\t\t\t\t启用\n\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"mdui-container"},[i("label",{staticClass:"mdui-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],attrs:{type:"radio",name:"status",value:"0"},domProps:{checked:!t.form.status,checked:t._q(t.form.status,"0")},on:{change:function(e){t.$set(t.form,"status","0")}}}),t._v(" "),i("i",{staticClass:"mdui-radio-icon"}),t._v("\n\t\t\t\t\t\t禁用\n\t\t\t\t\t")])])])]),t._v(" "),i("div",{staticClass:"mdui-dialog-actions"},[i("a",{staticClass:"mdui-btn mdui-ripple",attrs:{"mdui-dialog-close":""}},[t._v("取消")]),t._v(" "),i("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:t.add_submit}},[t._v("提交")])])]),t._v(" "),i("div",{staticClass:"mdui-color-white footer"},[i("pagination",{attrs:{pageInfo:{total:t.list.total,current:t.list.current_page,pagenum:t.list.per_page,page:t.list.last_page,pagegroup:9,skin:"#2196F3"}},on:{change:t.search}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("#")]),t._v(" "),i("th",[t._v("键")]),t._v(" "),i("th",[t._v("值")]),t._v(" "),i("th",[t._v("提示")]),t._v(" "),i("th",[t._v("状态")]),t._v(" "),i("th",[t._v("创建时间")]),t._v(" "),i("th",[t._v("排序")]),t._v(" "),i("th",[t._v("操作")])])])}]}},390:function(t,e,i){var a=i(1)(i(364),i(365),!1,null,null,null);t.exports=a.exports}});