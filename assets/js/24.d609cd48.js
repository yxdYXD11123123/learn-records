(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{437:function(t,v,_){t.exports=_.p+"assets/img/image-20240214173300909.8eaf4fd9.png"},438:function(t,v,_){t.exports=_.p+"assets/img/image-20240214175047273.b6db4128.png"},439:function(t,v,_){t.exports=_.p+"assets/img/image-20240214175947971.ead18b1e.png"},440:function(t,v,_){t.exports=_.p+"assets/img/image-20240214180721936.b7fc0efc.png"},441:function(t,v,_){t.exports=_.p+"assets/img/image-20240214180916688.ecd0f5e1.png"},442:function(t,v,_){t.exports=_.p+"assets/img/image-20240214191753438.e78bd16f.png"},443:function(t,v,_){t.exports=_.p+"assets/img/image-20240214192011107.ef50192e.png"},444:function(t,v,_){t.exports=_.p+"assets/img/image-20240214192224617.89b8d123.png"},445:function(t,v,_){t.exports=_.p+"assets/img/image-20240214192535989.48526276.png"},576:function(t,v,_){"use strict";_.r(v);var a=_(14),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"以太网交换机自学习和转发帧的流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以太网交换机自学习和转发帧的流程"}},[t._v("#")]),t._v(" 以太网交换机自学习和转发帧的流程")]),t._v(" "),v("ul",[v("li",[t._v("以太网交换机工作在"),v("font",{attrs:{color:"#8600FF"}},[t._v("数据链路层")]),t._v("（也包括物理层，还有包括网络层的）")],1),t._v(" "),v("li",[t._v("以太网交换机收到帧后，在"),v("strong",[t._v("帧交换表")]),t._v("中"),v("font",{attrs:{color:"#EA0000"}},[t._v("查找帧的目的MAC地址所对应的接口号")]),t._v("，然后通过该接口转发帧")],1),t._v(" "),v("li",[t._v("以太网交换机是一种即插即用的设备，刚上电启动时其内部的帧交换表是"),v("strong",[t._v("空的")]),t._v("，随着网络中各主机间的通信，以太网交换机通过"),v("strong",[t._v("自学习算法")]),t._v("自动逐渐建立起帧交换表")])]),t._v(" "),v("h2",{attrs:{id:"交换机以太网转发帧流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交换机以太网转发帧流程"}},[t._v("#")]),t._v(" 交换机以太网转发帧流程")]),t._v(" "),v("p",[v("img",{attrs:{src:_(437),alt:"image-20240214173300909"}})]),t._v(" "),v("p",[t._v("如图所示，相互连接的两台以太网交换机，各自连接了三台主机，构成了一个交换式以太网。")]),t._v(" "),v("p",[v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("假设各主机知道网络中其他各主机的MAC地址（无需首先通过ARP来获取目的主机的MAC地址）")])],1),t._v(" "),v("h3",{attrs:{id:"主机a-主机b"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主机a-主机b"}},[t._v("#")]),t._v(" 主机A => 主机B")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("假设主机A给主机B发送帧")])]),t._v(" "),v("li",[v("p",[t._v("该帧从交换机1的接口1进入交换机1")])]),t._v(" "),v("li",[v("p",[t._v("交换机1首先进行"),v("font",{attrs:{color:"#EA0000"}},[v("strong",[t._v("登记")])]),t._v("的工作")],1),t._v(" "),v("ul",[v("li",[v("p",[t._v("将该帧的源MAC地址A，记录到自己的帧交换表中")])]),t._v(" "),v("li",[v("p",[t._v("将该帧进入自己的接口的接口号1，相应地记录到帧交换表中")]),t._v(" "),v("p",[v("img",{attrs:{src:_(438),alt:"image-20240214175047273"}})])])])]),t._v(" "),v("li",[v("p",[t._v("（上述登记工作就称为交换机的自学习）")])]),t._v(" "),v("li",[v("p",[t._v("之后，交换机1对该帧进行转发，该帧的目的MAC地址是B，在帧交换表中查找MAC地址B，找不到")])]),t._v(" "),v("li",[v("p",[t._v("对该帧进行"),v("font",{attrs:{color:"#EA0000"}},[v("strong",[t._v("盲目地转发")])]),t._v("（盲目泛洪，也称为"),v("strong",[t._v("泛洪")]),t._v("）")],1),t._v(" "),v("ul",[v("li",[t._v("也就是从除该帧进入交换机接口外的"),v("font",{attrs:{color:"#EA0000"}},[t._v("其他所有接口转发该帧")])],1)])]),t._v(" "),v("li",[v("p",[t._v("主机B的网卡收到该帧后，根据帧的目的MAC地址B，就知道这是发送给自己的帧，于是接收该帧")])]),t._v(" "),v("li",[v("p",[t._v("主机C的网卡收到该帧后，发现MAC地址不匹配，丢弃该帧")]),t._v(" "),v("p",[v("img",{attrs:{src:_(439),alt:"image-20240214175947971"}})])]),t._v(" "),v("li",[v("p",[t._v("该帧从交换机2的接口2进入交换机2")])]),t._v(" "),v("li",[v("p",[t._v("交换机2首先进行"),v("strong",[t._v("登记")]),t._v("的工作")]),t._v(" "),v("ul",[v("li",[t._v("将该帧的源MAC地址A，记录到自己的帧交换表中")]),t._v(" "),v("li",[t._v("将该帧进入自己的接口的接口号2，相应地也记录到帧交换表中")])])]),t._v(" "),v("li",[v("p",[t._v("交换机2对该帧进行转发，该帧的目的MAC地址是B")])]),t._v(" "),v("li",[v("p",[t._v("在帧交换表中查找MAC地址B，找不到，对该帧进行盲目地转发")]),t._v(" "),v("p",[v("img",{attrs:{src:_(440),alt:"image-20240214180721936"}})])]),t._v(" "),v("li",[v("p",[t._v("主机D、E、F 都会收到该帧，根据帧的目的MAC地址B，发现MAC地址不匹配，丢弃该帧")]),t._v(" "),v("p",[v("img",{attrs:{src:_(441),alt:"image-20240214180916688"}})])])]),t._v(" "),v("h3",{attrs:{id:"主机b-主机a"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主机b-主机a"}},[t._v("#")]),t._v(" 主机B => 主机A")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("主机B给主机A发送帧")])]),t._v(" "),v("li",[v("p",[t._v("该帧从交换机1的接口3进入交换机1")])]),t._v(" "),v("li",[v("p",[t._v("交换机1首先进行登记的工作")]),t._v(" "),v("ul",[v("li",[t._v("将该帧的源MAC地址B，记录到自己的帧交换表中")]),t._v(" "),v("li",[t._v("将该帧进入自己的接口的接口号3，相应地也记录到帧交换表中")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(442),alt:"image-20240214191753438"}})])]),t._v(" "),v("li",[v("p",[t._v("交换机1对该帧进行转发，该帧的目的MAC地址是A，在帧交换表中查找MAC地址A，可以找到")])]),t._v(" "),v("li",[v("p",[t._v("于是，按照MAC地址A所对应的接口号1，从接口1转发该帧（这是明确的转发）")]),t._v(" "),v("p",[v("img",{attrs:{src:_(443),alt:"image-20240214192011107"}})])]),t._v(" "),v("li",[v("p",[t._v("主机A的网卡，收到该帧后，发现MAC地址匹配，接收该帧，交给上层处理")]),t._v(" "),v("p",[v("img",{attrs:{src:_(444),alt:"image-20240214192224617"}})])]),t._v(" "),v("li",[v("p",[t._v("其他主机和交换机不会收到该帧")])])]),t._v(" "),v("h3",{attrs:{id:"主机e-主机a"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主机e-主机a"}},[t._v("#")]),t._v(" 主机E => 主机A")]),t._v(" "),v("p",[v("img",{attrs:{src:_(445),alt:"image-20240214192535989"}})]),t._v(" "),v("ul",[v("li",[t._v("主机E给主机A发送帧")]),t._v(" "),v("li",[t._v("该帧从接口3进入交换机2")]),t._v(" "),v("li",[t._v("交换机2首先进行登记的工作")]),t._v(" "),v("li",[t._v("交换机2对该帧进行转发，先在交换表中查MAC地址为A的，可以找到")]),t._v(" "),v("li",[t._v("通过接口2进行转发")]),t._v(" "),v("li",[t._v("该帧通过交换机1接口4进入，先进行登记")]),t._v(" "),v("li",[t._v("交换机1查表MAC地址为A的，可以找到")]),t._v(" "),v("li",[t._v("通过接口1进行转发")]),t._v(" "),v("li",[t._v("主机A的网卡收到该帧后，MAC地址匹配，接受该帧，交给上层处理")])]),t._v(" "),v("h2",{attrs:{id:"自学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自学习"}},[t._v("#")]),t._v(" 自学习")]),t._v(" "),v("p",[t._v("随着网络中的各主机都发送了帧后，网络中的各交换机就可以"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("学习到各主机的MAC地址，以及它们与自己各接口的对应关系")])],1),t._v(" "),v("h3",{attrs:{id:"注意"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("帧交换表中的每条记录都"),v("font",{attrs:{color:"#EA0000"}},[t._v("有自己的有效时间，到期自动删除")])],1),t._v(" "),v("p",[t._v("因为"),v("font",{attrs:{color:"#EA0000"}},[t._v("MAC地址与交换机的对应关系并不是永久性的")]),t._v("（例如：交换机某接口所连接的主机更换成了另一台主机；主机中的网卡坏了，更换了新的网卡）")],1)])])])}),[],!1,null,null,null);v.default=s.exports}}]);