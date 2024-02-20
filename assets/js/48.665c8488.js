(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{381:function(t,v,_){t.exports=_.p+"assets/img/image-20231209155019546.7f48f8f6.png"},382:function(t,v,_){t.exports=_.p+"assets/img/image-20231209160643305.7757e183.png"},545:function(t,v,_){"use strict";_.r(v);var o=_(14),r=Object(o.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"数据链路层概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层概述"}},[t._v("#")]),t._v(" 数据链路层概述")]),t._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"#EA0000"}},[t._v("链路")]),t._v("（Link）就是从一个结点到相邻结点的一段物理线路，而中间没有任何其他的交换结点")],1),t._v(" "),v("li",[v("font",{attrs:{color:"#EA0000"}},[t._v("数据链路")]),t._v("（Data Link）是指 把实现"),v("font",{attrs:{color:"#EA0000"}},[t._v("通信协议")]),t._v("的硬件和软件加到链路上，就构成了数据链路。")],1),t._v(" "),v("li",[t._v("在数据链路层上传输的数据包，又称为"),v("font",{attrs:{color:"#EA0000"}},[t._v("”帧“")]),t._v("，也就是说：数据链路层"),v("font",{attrs:{color:"#EA0000"}},[t._v("以帧为单位")]),t._v("传输和处理数据")],1)]),t._v(" "),v("h4",{attrs:{id:"数据链路层的三个重要问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层的三个重要问题"}},[t._v("#")]),t._v(" 数据链路层的三个重要问题")]),t._v(" "),v("h5",{attrs:{id:"点对点信道的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#点对点信道的问题"}},[t._v("#")]),t._v(" 点对点信道的问题：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("封装成帧："),v("strong",[t._v("数据链路层")]),t._v("给"),v("strong",[t._v("网络层")]),t._v("交付的"),v("font",{attrs:{color:"#8600FF"}},[t._v("协议数据单元")]),v("font",{attrs:{color:"#EA0000"}},[t._v(" 添加 帧头和帧尾")])],1),t._v(" "),v("p",[t._v("添加帧头和帧尾的目的：以帧为单元 传送数据，实现数据链路层本身的功能")]),t._v(" "),v("p",[v("img",{attrs:{src:_(381),alt:"image-20231209155019546"}})])]),t._v(" "),v("li",[v("p",[t._v("差错检测")]),t._v(" "),v("p",[t._v("帧在传输过程中遭遇干扰后，可能会出现"),v("font",{attrs:{color:"#EA0000"}},[t._v("误码")]),t._v("（比特 0 变成比特 1）")],1),t._v(" "),v("p",[t._v("接收方主机就需要通过"),v("font",{attrs:{color:"#EA0000"}},[t._v("检错码")]),t._v("来发现")],1),t._v(" "),v("p",[t._v("发送方在发送帧之前，基于待发送的数据和检错算法计算出检错码，并将其"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("封装在帧尾")]),t._v("（"),v("font",{attrs:{color:"#8600FF"}},[t._v("FCS 帧检验序列")]),t._v("）")],1),t._v(" "),v("p",[t._v("接收方接收到帧之后，通过检错码和检错算法，就可以判断传输数据中是否有误码")])]),t._v(" "),v("li",[v("p",[t._v("可靠传输")]),t._v(" "),v("p",[t._v("接收方在检测到有误码时，是不会接收该帧的，会将其丢弃。")]),t._v(" "),v("p",[t._v("如果数据链路层向其上层提供的是"),v("font",{attrs:{color:"#8600FF"}},[t._v("不可靠服务")]),t._v("，丢弃就丢弃了；")],1),t._v(" "),v("p",[t._v("如果提供的是"),v("font",{attrs:{color:"#8600FF"}},[t._v("可靠服务")]),t._v("，那么就还需要其他措施，来"),v("font",{attrs:{color:"#EA0000"}},[t._v("确保接收方主机还可以重新收到被丢弃的这个帧")]),t._v("的正确副本")],1),t._v(" "),v("p",[t._v("误码是不能避免的，但若能实现"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("发送方发送什么，接收方就能收到什么，就称为可靠传输")]),t._v("。")],1)])]),t._v(" "),v("h5",{attrs:{id:"广播信道的数据链路层-还有其他需要解决的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#广播信道的数据链路层-还有其他需要解决的问题"}},[t._v("#")]),t._v(" 广播信道的数据链路层 ，还有其他需要解决的问题：")]),t._v(" "),v("p",[v("img",{attrs:{src:_(382),alt:"image-20231209160643305"}})]),t._v(" "),v("ul",[v("li",[t._v("编址问题（发给谁，帧头加地址）")]),t._v(" "),v("li",[t._v("当总线上多台主机同时使用总线来传输帧时，传输信号 就会产生碰撞")])])])}),[],!1,null,null,null);v.default=r.exports}}]);