webpackJsonp([4],{368:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[],merchant:"",purse_type:"",form:"",dialog:"",check_all_status:!1,success_all_id:[],keyword:{page:1,export:0,user_id:"",realname:"",date:[],merchant_id:1},status:["申请中",'<span class="mdui-text-color-teal">提现成功</span>','<span class="mdui-text-color-deep-orange">提现失败</span>']}},methods:{success:function(t){var e=this;mdui.confirm("确认后将从用户对应钱包扣除相应金额，确认请点击【确定】按钮","已打款？",function(){e.$API.post("/withdraw/success",{id:[t],type:"wechat"}).then(function(){e.init()}).catch(function(t){})},function(){},{history:!1,confirmText:"确定",cancelText:"取消"})},fail:function(t){var e=this;mdui.prompt("标记为失败后，对应申请金额会原路返还给用户，知悉后请填写【失败原因】","填写失败原因",function(s){s&&e.$API.post("/withdraw/fail",{id:t,remarks:s,type:"wechat"}).then(function(){e.init()}).catch(function(t){})},function(){},{history:!1,confirmText:"确定",cancelText:"取消"})},check_all:function(){var t=this;if(t.check_all_status=!t.check_all_status,t.check_all_status){var e=[];$.each(t.list.data,function(t,s){e.push(s.id)}),t.success_all_id=$.unique(e)}else t.success_all_id=[]},success_all:function(){var t=this;mdui.confirm("确认后将从用户对应钱包扣除相应金额，确认请点击【确定】按钮","将进行批量打款成功操作",function(){var e=mdui.alert("请耐心等待批量作业完成，切勿关闭网页等操作","批量处理中...",function(){},{history:!1,confirmText:"",modal:!0,closeOnEsc:!1});t.$API.post("/withdraw/success",{id:t.success_all_id,type:"wechat"}).then(function(){t.init(),e.close()}).catch(function(){e.close()})},function(){},{history:!1,confirmText:"确定",cancelText:"取消"})},search:function(t){this.keyword.page=t,this.keyword.export=0,this.init()},exports:function(){this.keyword.export=1,this.init()},tab_change:function(t){return this.keyword.page=1,this.keyword.merchant_id=t,this.init(),!1},init:function(){var t=this;t.$API.get("/withdraw/wechat",t.keyword).then(function(e){t.list=e.list,t.merchant=e.merchant,t.purse_type=e.purse_type,t.keyword.export&&mdui.alert("可在左侧【导出任务】菜单查看任务状态并下载文件","已放入导出任务",function(){},{history:!1}),t.$nextTick(function(){$(".mdui-tab").mutation()})}).catch(function(t){})}},mounted:function(){this.init()}}},369:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"purse_user_type"},[s("div",{staticClass:"typo",on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(1)}}},[s("blockquote",{staticClass:"blockquote_normal"},[s("p",[t._v("\n\t\t\t\t用户ID："),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.user_id,expression:"keyword.user_id"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.user_id},on:{input:function(e){e.target.composing||t.$set(t.keyword,"user_id",e.target.value)}}})]),t._v(" "),s("p",[t._v("\n\t\t\t\t银行户名："),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword.realname,expression:"keyword.realname"}],staticClass:"mdui-textfield-input input_normal",attrs:{type:"text"},domProps:{value:t.keyword.realname},on:{input:function(e){e.target.composing||t.$set(t.keyword,"realname",e.target.value)}}})]),t._v(" "),s("p",[t._v("\n\t\t\t\t日期筛选："),s("date-picker",{model:{value:t.keyword.date,callback:function(e){t.$set(t.keyword,"date",e)},expression:"keyword.date"}})],1),t._v(" "),s("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(e){return t.search(1)}}},[s("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("search")]),t._v("搜索")]),t._v(" "),s("a",{staticClass:"mdui-btn mdui-ripple mdui-color-pink",on:{click:t.exports}},[s("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("file_upload")]),t._v("导出")])]),t._v(" "),s("blockquote",{staticClass:"blockquote_normal"},[s("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:t.success_all}},[s("i",{staticClass:"mdui-icon mdui-icon-left material-icons"},[t._v("check")]),t._v("批量同意")])])]),t._v(" "),s("div",{staticClass:"mdui-tab",attrs:{"mdui-tab":""}},t._l(t.merchant,function(e,i,a){return s("a",{class:{"mdui-btn":!0,"mdui-ripple":!0,"mdui-tab-active":0===a},attrs:{href:"#tab_"+a},domProps:{textContent:t._s(e)},on:{click:function(e){return t.tab_change(i)}}})}),0),t._v(" "),s("div",{staticClass:"mdui-table-fluid table-data-fluid"},[s("table",{staticClass:"mdui-table mdui-table-hoverable table-data"},[s("thead",[s("tr",[s("th",[s("label",{staticClass:"mdui-checkbox"},[s("input",{attrs:{type:"checkbox"}}),s("i",{staticClass:"mdui-checkbox-icon",on:{click:t.check_all}})])]),t._v(" "),s("th",[t._v("#")]),t._v(" "),s("th",[t._v("ID")]),t._v(" "),s("th",[t._v("用户ID")]),t._v(" "),s("th",[t._v("提现钱包")]),t._v(" "),s("th",[t._v("申请金额(分)")]),t._v(" "),s("th",[t._v("手续费(分)")]),t._v(" "),s("th",[t._v("打款金额(分)")]),t._v(" "),s("th",[t._v("真实姓名")]),t._v(" "),s("th",[t._v("微信账号")]),t._v(" "),s("th",[t._v("冻结ID")]),t._v(" "),s("th",[t._v("成功转账ID")]),t._v(" "),s("th",[t._v("申请状态")]),t._v(" "),s("th",[t._v("备注")]),t._v(" "),s("th",[t._v("创建时间")]),t._v(" "),s("th",[t._v("修改时间")]),t._v(" "),s("th",[t._v("操作")])])]),t._v(" "),s("tbody",t._l(t.list.data,function(e,i,a){return s("tr",[s("td",[s("label",{staticClass:"mdui-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.success_all_id,expression:"success_all_id"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.success_all_id)?t._i(t.success_all_id,e.id)>-1:t.success_all_id},on:{change:function(s){var i=t.success_all_id,a=s.target,n=!!a.checked;if(Array.isArray(i)){var c=e.id,o=t._i(i,c);a.checked?o<0&&(t.success_all_id=i.concat([c])):o>-1&&(t.success_all_id=i.slice(0,o).concat(i.slice(o+1)))}else t.success_all_id=n}}}),s("i",{staticClass:"mdui-checkbox-icon"})])]),t._v(" "),s("td",{domProps:{textContent:t._s("#"+(i+1))}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.id)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.user_id)}}),t._v(" "),s("td",{domProps:{textContent:t._s(t.purse_type[e.purse])}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.amount)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.fee)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.amount_actual)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.realname)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.account)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.freeze_id)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.transfer_id)}}),t._v(" "),s("td",{domProps:{innerHTML:t._s(t.status[e.status])}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.remarks)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.created_at)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.updated_at)}}),t._v(" "),s("td",[0==e.status?s("div",{staticClass:"mdui-btn-group"},[s("a",{staticClass:"mdui-btn mdui-ripple mdui-color-theme",on:{click:function(s){return t.success(e.id)}}},[t._v("打款成功")]),t._v(" "),s("a",{staticClass:"mdui-btn mdui-ripple mdui-color-deep-orange",on:{click:function(s){return t.fail(e.id)}}},[t._v("打款失败")])]):t._e()])])}),0)])]),t._v(" "),s("div",{staticClass:"mdui-color-white footer"},[s("pagination",{attrs:{pageInfo:{total:t.list.total,current:t.list.current_page,pagenum:t.list.per_page,page:t.list.last_page,pagegroup:9,skin:"#2196F3"}},on:{change:t.search}})],1)])},staticRenderFns:[]}},399:function(t,e,s){var i=s(1)(s(368),s(369),!1,null,null,null);t.exports=i.exports}});