webpackJsonp([24],{358:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[],keyword:{page:1,name:"",date:[]},exports_status:["执行中",'<span class="mdui-text-color-theme">执行完成</span>','<span class="mdui-text-color-red">执行失败</span>'],interval:""}},methods:{download:function(t,e){return this.$API.post("/export/increment",{id:t}).then(function(){}).catch(function(t){}),location.href=e,!0},del:function(t){var e=this;e.$API.del("/export/index",{id:t}).then(function(t){mdui.alert("服务器文件已删除，外链失效","执行完成",function(){},{history:!1,confirmText:"完成"}),e.init()}).catch(function(t){})},search:function(t){this.keyword.page=t,this.init()},init:function(){var t=this;t.$API.get("/export/index",t.keyword).then(function(e){t.list=e}).catch(function(t){})}},mounted:function(){var t=this;t.init(),t.interval=setInterval(function(){t.init()},8e3)},beforeDestroy:function(){clearInterval(this.interval)}}},359:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"export"},[n("div",{staticClass:"typo",on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.search(1)}}},[n("blockquote",{staticClass:"blockquote_normal"},[t._v("\n\t\t\t* 记得及时删除不必要的导出文件，避免服务器磁盘占用。删除后外链下载失效。\n\t\t")]),t._v(" "),n("blockquote",{staticClass:"blockquote_normal"},[n("p",[t._v("\n\t\t\t\t操作名："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.name,expression:"keyword.name"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.name},on:{input:function(e){e.target.composing||t.$set(t.keyword,"name",e.target.value)}}})]),t._v(" "),n("p",[t._v("\n\t\t\t\t日期筛选："),n("vue-datepicker-local",{attrs:{clearable:""},model:{value:t.keyword.date,callback:function(e){t.$set(t.keyword,"date",e)},expression:"keyword.date"}})],1),t._v(" "),n("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(e){t.search(1)}}},[n("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("search")]),t._v("搜索")])])]),t._v(" "),n("div",{staticClass:"mdui-table-fluid"},[n("table",{staticClass:"mdui-table mdui-table-hoverable"},[t._m(0),t._v(" "),n("tbody",t._l(t.list.data,function(e,o,i){return n("tr",[n("td",{domProps:{textContent:t._s("#"+(o+1))}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.id)}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.file_path)}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.downloads)}}),t._v(" "),n("td",{domProps:{innerHTML:t._s(t.exports_status[e.status])}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.created_at)}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.complete_at)}}),t._v(" "),n("td",[n("div",{staticClass:"mdui-btn-group"},[1==e.status?n("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(n){t.download(e.id,e.file_path)}}},[t._v("下载")]):t._e(),t._v(" "),n("a",{staticClass:"mdui-btn mdui-ripple mdui-color-deep-orange",on:{click:function(n){t.del(e.id)}}},[t._v("删除")])])])])}),0)])]),t._v(" "),n("div",{staticClass:"mdui-color-white footer"},[n("pagination",{attrs:{pageInfo:{total:t.list.total,current:t.list.current_page,pagenum:t.list.per_page,page:t.list.last_page,pagegroup:9,skin:"#2196F3"}},on:{change:t.search}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("#")]),t._v(" "),n("th",[t._v("ID")]),t._v(" "),n("th",[t._v("任务名")]),t._v(" "),n("th",[t._v("文件路径")]),t._v(" "),n("th",[t._v("下载次数")]),t._v(" "),n("th",[t._v("状态")]),t._v(" "),n("th",[t._v("创建时间")]),t._v(" "),n("th",[t._v("完成时间")]),t._v(" "),n("th",[t._v("操作")])])])}]}},387:function(t,e,n){var o=n(1)(n(358),n(359),!1,null,null,null);t.exports=o.exports}});