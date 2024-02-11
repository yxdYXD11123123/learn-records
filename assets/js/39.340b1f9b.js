(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{376:function(t,v,_){t.exports=_.p+"assets/img/image-20231216192255695.3cee73ff.png"},456:function(t,v,_){"use strict";_.r(v);var o=_(14),r=Object(o.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"可靠传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可靠传输"}},[t._v("#")]),t._v(" 可靠传输")]),t._v(" "),v("h3",{attrs:{id:"基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),v("ul",[v("li",[t._v("使用 "),v("font",{attrs:{color:"#EA0000"}},[t._v("差错检测技术")]),t._v("（循环冗余校验 CRC），接收方的数据链路层就可检测出帧在传输过程中是否产生了误码")],1),t._v(" "),v("li",[t._v("数据链路层向上层提供的服务类型\n"),v("ul",[v("li",[t._v("不可靠传输服务："),v("font",{attrs:{color:"#EA0000"}},[t._v("仅仅丢弃有误码的帧")]),t._v("，其他什么也不做")],1),t._v(" "),v("li",[t._v("可靠传输服务：想办法实现"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("发送端发送什么，接收端就收到什么")])],1)])]),t._v(" "),v("li",[t._v("一般情况下，"),v("strong",[t._v("有线链路")]),t._v("的误码率比较低，为了"),v("font",{attrs:{color:"#EA0000"}},[t._v("减小开销")]),t._v("，并不要求数据链路层向上提供可靠传输服务。即使出现了误码，可靠传输的问题由其"),v("font",{attrs:{color:"#EA0000"}},[t._v("上层处理")])],1),t._v(" "),v("li",[v("strong",[t._v("无线链路")]),v("u",[t._v("易受干扰")]),t._v("，误码率较高，因此要求"),v("font",{attrs:{color:"#8600FF"}},[t._v("数据链路层")]),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("必须向上层提供可靠传输服务")]),t._v("。")],1)]),t._v(" "),v("h4",{attrs:{id:"注意"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意：")]),t._v(" "),v("ul",[v("li",[v("p",[v("font",{attrs:{color:"#EA0000"}},[t._v("比特差错")]),t._v("只是传输差错中的一种")],1)]),t._v(" "),v("li",[v("p",[t._v("从整个计算机网络体系结构来看，传输差错还包括"),v("font",{attrs:{color:"#EA0000"}},[t._v("分组丢失")]),t._v("、"),v("font",{attrs:{color:"#EA0000"}},[t._v("分组失序")]),t._v("以及"),v("font",{attrs:{color:"#EA0000"}},[t._v("分组重复")]),t._v("（这里将"),v("strong",[t._v("帧")]),t._v("称为"),v("strong",[t._v("分组")]),t._v("，意味着传输差错不仅仅局限于数据链路层的比特差错）")],1)]),t._v(" "),v("li",[v("p",[t._v("分组丢失、分组失序以及分组重复这些传输差错，一般不会出现在数据链路层，而会出现在其上层。")])]),t._v(" "),v("li",[v("p",[v("font",{attrs:{color:"#EA0000"}},[t._v("可靠传输服务并不仅局限于数据链路层")]),t._v("，其他各层均可选择实现可靠传输。"),v("img",{staticStyle:{zoom:"25%"},attrs:{src:_(376),alt:"image-20231216192255695"}})],1),t._v(" "),v("p",[t._v("例如：")]),t._v(" "),v("ul",[v("li",[t._v("在网络接口层\n"),v("ul",[v("li",[t._v("802.11 无线局域网要求数据链路层实现可靠传输")]),t._v(" "),v("li",[t._v("以太网不要求数据链路层实现可靠传输")])])]),t._v(" "),v("li",[t._v("在网际层\n"),v("ul",[v("li",[t._v("IP 协议 向上层提供的是不可靠传输服务")])])]),t._v(" "),v("li",[t._v("在运输层\n"),v("ul",[v("li",[t._v("TCP 向上提供可靠传输")]),t._v(" "),v("li",[t._v("UDP 向上提供不可靠传输")])])])])]),t._v(" "),v("li",[v("p",[t._v("可靠传输的实现比较复杂，开销也比较大，是否使用可靠传输取决于应用需求。")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);