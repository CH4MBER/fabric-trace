(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d05627e"],{"4e95":function(t,a,e){},6408:function(t,a,e){"use strict";e("4e95")},"89ff":function(t,a,e){"use strict";e.d(a,"e",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"d",(function(){return i})),e.d(a,"a",(function(){return o})),e.d(a,"b",(function(){return l}));var r=e("b775");function n(t){return Object(r["a"])({url:"/uplink",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function s(t){return Object(r["a"])({url:"/getFruitInfo",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function i(t){return Object(r["a"])({url:"/getFruitList",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function o(t){return Object(r["a"])({url:"/getAllFruitInfo",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function l(t){return Object(r["a"])({url:"/getFruitHistory",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}},c080:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"trace-container"},[e("el-input",{staticStyle:{width:"300px","margin-right":"15px"},attrs:{placeholder:"请输入溯源码查询"},model:{value:t.input,callback:function(a){t.input=a},expression:"input"}}),e("el-button",{attrs:{type:"primary",plain:""},on:{click:t.FruitInfo}},[t._v(" 查询 ")]),e("el-button",{attrs:{type:"success",plain:""},on:{click:t.AllFruitInfo}},[t._v(" 获取所有药品信息 ")]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tracedata}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e("div",[e("span",{staticClass:"trace-text",staticStyle:{color:"#67C23A"}},[t._v("药品信息")])]),e("el-form-item",{attrs:{label:"药品名称："}},[e("span",[t._v(t._s(a.row.farmer_input.fa_fruitName))])]),e("el-form-item",{attrs:{label:"产地："}},[e("span",[t._v(t._s(a.row.farmer_input.fa_origin))])]),e("el-form-item",{attrs:{label:"生产时间："}},[e("span",[t._v(t._s(a.row.farmer_input.fa_plantTime))])]),e("el-form-item",{attrs:{label:"出厂时间："}},[e("span",[t._v(t._s(a.row.farmer_input.fa_pickingTime))])]),e("el-form-item",{attrs:{label:"制药厂名称："}},[e("span",[t._v(t._s(a.row.farmer_input.fa_farmerName))])]),e("el-form-item",{attrs:{label:"区块链交易ID："}},[e("span",[t._v(t._s(a.row.farmer_input.fa_txid))])]),e("el-form-item",{attrs:{label:"区块链交易时间："}},[e("span",[t._v(t._s(a.row.farmer_input.fa_timestamp))])]),e("div",[e("span",{staticClass:"trace-text",staticStyle:{color:"#409EFF"}},[t._v("仓库信息")])]),e("el-form-item",{attrs:{label:"商品名称："}},[e("span",[t._v(t._s(a.row.factory_input.fac_productName))])]),e("el-form-item",{attrs:{label:"生产批次："}},[e("span",[t._v(t._s(a.row.factory_input.fac_productionbatch))])]),e("el-form-item",{attrs:{label:"生产时间："}},[e("span",[t._v(t._s(a.row.factory_input.fac_productionTime))])]),e("el-form-item",{attrs:{label:"仓库名称与厂址："}},[e("span",[t._v(t._s(a.row.factory_input.fac_factoryName))])]),e("el-form-item",{attrs:{label:"联系电话："}},[e("span",[t._v(t._s(a.row.factory_input.fac_contactNumber))])]),e("el-form-item",{attrs:{label:"区块链交易ID："}},[e("span",[t._v(t._s(a.row.factory_input.fac_txid))])]),e("el-form-item",{attrs:{label:"区块链交易时间："}},[e("span",[t._v(t._s(a.row.factory_input.fac_timestamp))])]),e("div",[e("span",{staticClass:"trace-text",staticStyle:{color:"#E6A23C"}},[t._v("物流轨迹信息")])]),e("el-form-item",{attrs:{label:"姓名："}},[e("span",[t._v(t._s(a.row.driver_input.dr_name))])]),e("el-form-item",{attrs:{label:"年龄："}},[e("span",[t._v(t._s(a.row.driver_input.dr_age))])]),e("el-form-item",{attrs:{label:"联系电话："}},[e("span",[t._v(t._s(a.row.driver_input.dr_phone))])]),e("el-form-item",{attrs:{label:"车牌号："}},[e("span",[t._v(t._s(a.row.driver_input.dr_carNumber))])]),e("el-form-item",{attrs:{label:"运输记录："}},[e("span",[t._v(t._s(a.row.driver_input.dr_transport))])]),e("el-form-item",{attrs:{label:"区块链交易ID："}},[e("span",[t._v(t._s(a.row.driver_input.dr_txid))])]),e("el-form-item",{attrs:{label:"区块链交易时间："}},[e("span",[t._v(t._s(a.row.driver_input.dr_timestamp))])]),e("div",[e("span",{staticClass:"trace-text",staticStyle:{color:"#909399"}},[t._v("药店信息")])]),e("el-form-item",{attrs:{label:"入库时间："}},[e("span",[t._v(t._s(a.row.shop_input.sh_storeTime))])]),e("el-form-item",{attrs:{label:"销售时间："}},[e("span",[t._v(t._s(a.row.shop_input.sh_sellTime))])]),e("el-form-item",{attrs:{label:"药店名称："}},[e("span",[t._v(t._s(a.row.shop_input.sh_shopName))])]),e("el-form-item",{attrs:{label:"药店位置："}},[e("span",[t._v(t._s(a.row.shop_input.sh_shopAddress))])]),e("el-form-item",{attrs:{label:"药店电话："}},[e("span",[t._v(t._s(a.row.shop_input.sh_shopPhone))])]),e("el-form-item",{attrs:{label:"区块链交易ID："}},[e("span",[t._v(t._s(a.row.shop_input.sh_txid))])]),e("el-form-item",{attrs:{label:"区块链交易时间："}},[e("span",[t._v(t._s(a.row.shop_input.sh_timestamp))])])],1)]}}])}),e("el-table-column",{attrs:{label:"溯源码",prop:"traceability_code"}}),e("el-table-column",{attrs:{label:"药品名称",prop:"farmer_input.fa_fruitName"}}),e("el-table-column",{attrs:{label:"农产品出厂时间",prop:"farmer_input.fa_pickingTime"}})],1)],1)},n=[],s=e("5530"),i=(e("b64b"),e("2f62")),o=e("89ff"),l={name:"Trace",data:function(){return{tracedata:[],loading:!1,input:""}},computed:Object(s["a"])({},Object(i["b"])(["name","userType"])),created:function(){var t=this;Object(o["d"])().then((function(a){t.tracedata=JSON.parse(a.data)}))},methods:{AllFruitInfo:function(){var t=this;Object(o["a"])().then((function(a){t.tracedata=JSON.parse(a.data)}))},FruitHistory:function(){Object(o["b"])().then((function(t){}))},FruitInfo:function(){var t=this,a=new FormData;a.append("traceability_code",this.input),Object(o["c"])(a).then((function(a){if(200===a.code)return t.tracedata=[],void(t.tracedata[0]=JSON.parse(a.data));t.$message.error(a.message)}))}}},p=l,_=(e("6408"),e("2877")),c=Object(_["a"])(p,r,n,!1,null,"2acb080a",null);a["default"]=c.exports}}]);