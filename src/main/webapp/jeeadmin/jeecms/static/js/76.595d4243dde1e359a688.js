webpackJsonp([76],{DGD5:function(t,a,e){"use strict";function n(t){e("dMpC")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("2sCs"),i=e.n(s),l=e("5HJ5"),r={mixins:[l.a],data:function(){return{dateArr:"",params:{orderBy:1,pageSize:10,pageNo:1}}},methods:{getTableData:function(t){var a=this;i.a.post(this.$api.flowEnterpageList,this.params).then(function(t){a.tableData=JSON.parse(t.body.data)})}},created:function(){this.initTableData(this.$api.flowEnterpageList,this.params)}},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"cms-body cms-chart-box"},[e("div",{staticClass:"cms-list-header",staticStyle:{"padding-left":"0"}},[e("h5",{staticClass:"data-header-title"},[t._v("入口页面")]),t._v(" "),e("div",{staticClass:"flex-date"},[e("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[t._v("排列顺序：")]),t._v(" "),e("el-select",{on:{change:t.query},model:{value:t.params.orderBy,callback:function(a){t.$set(t.params,"orderBy",a)},expression:"params.orderBy"}},[e("el-option",{attrs:{label:"浏览降序",value:1}}),t._v(" "),e("el-option",{attrs:{label:"访客降序",value:2}}),t._v(" "),e("el-option",{attrs:{label:"停留时长降序",value:3}})],1)],1)]),t._v(" "),e("table",{staticClass:"data-table"},[t._m(0),t._v(" "),t._l(t.tableData,function(a,n){return e("tr",{key:n},[e("td",[t._v(t._s(a[0]))]),t._v(" "),e("td",[t._v(t._s(a[1]))]),t._v(" "),e("td",[t._v(t._s(a[2]))]),t._v(" "),e("td",[t._v(t._s(a[3]))])])})],2)])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("入口页面")]),t._v(" "),e("th",[t._v("浏览量(pv)")]),t._v(" "),e("th",[t._v("独立访客数(uv)")]),t._v(" "),e("th",[t._v("平均停留时长(秒)")])])}],d={render:o,staticRenderFns:c},v=d,p=e("Z0/y"),f=n,_=p(r,v,!1,f,"data-v-6f124c2b",null);a.default=_.exports},dMpC:function(t,a,e){var n=e("fAH0");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("FIqI")("313318f4",n,!0,{})},fAH0:function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,"\n.data-item[data-v-6f124c2b] {\n  float: left;\n  min-width: 170px;\n  margin-top: 30px;\n}\n.data-item .data-title[data-v-6f124c2b] {\n    font-size: 12px;\n    color: #878d99;\n    margin-bottom: 17px;\n}\n.data-item .data-num[data-v-6f124c2b] {\n    color: #353535;\n    font-size: 24px;\n}\n.chart-style[data-v-6f124c2b] {\n  width: 100%;\n  height: 380px;\n  border-bottom: 1px dashed #eee;\n  margin-bottom: 15px;\n}\n",""])}});