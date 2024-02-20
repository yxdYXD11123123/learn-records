(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{430:function(t,s,v){t.exports=v.p+"assets/img/image-20240213160416436.97b6c12a.png"},431:function(t,s,v){t.exports=v.p+"assets/img/image-20240213170839463.336a0ff2.png"},432:function(t,s,v){t.exports=v.p+"assets/img/image-20240213174531555.4e0bcf93.png"},433:function(t,s,v){t.exports=v.p+"assets/img/image-20240213174550727.ee63de0f.png"},434:function(t,s,v){t.exports=v.p+"assets/img/image-20240213175157942.a6921102.png"},435:function(t,s,v){t.exports=v.p+"assets/img/image-20240213175451527.90c9d42d.png"},436:function(t,s,v){t.exports=v.p+"assets/img/image-20240214004843107.b1a153c9.png"},437:function(t,s,v){t.exports=v.p+"assets/img/image-20240214005233693.84d67410.png"},438:function(t,s,v){t.exports=v.p+"assets/img/image-20240214005729138.561cbe44.png"},439:function(t,s,v){t.exports=v.p+"assets/img/image-20240214005702637.62663aca.png"},440:function(t,s,v){t.exports=v.p+"assets/img/image-20240214010029666.2a0779f5.png"},441:function(t,s,v){t.exports=v.p+"assets/img/image-20240214010101351.5aa9a1ac.png"},442:function(t,s,v){t.exports=v.p+"assets/img/image-20240214010530864.a16ad57c.png"},443:function(t,s,v){t.exports=v.p+"assets/img/image-20240214010604434.28326e82.png"},554:function(t,s,v){"use strict";v.r(s);var _=v(14),a=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"集线器与交换机的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集线器与交换机的区别"}},[t._v("#")]),t._v(" 集线器与交换机的区别")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("早期的总线型以太网")])]),t._v(" "),s("p",[t._v("之前课程中经常用来举例的总线型以太网，最初使用粗同轴电缆作为传输媒体，后来演进为价格相对便宜的"),s("strong",[t._v("细同轴电缆")]),t._v("，当初认为这种连接方法既简单又可靠，因为在那个时代普遍认为有源器件不可靠，而无源的电缆线才是最可靠的。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(430),alt:"image-20240213160416436"}})]),t._v(" "),s("p",[t._v("然后，这种使用"),s("font",{attrs:{color:"#8600FF"}},[t._v("无源电缆")]),t._v("和"),s("font",{attrs:{color:"#8600FF"}},[t._v("大量机械接头")]),t._v("的总线型以太网，并不像人们想象得那么可靠")],1)]),t._v(" "),s("li",[s("p",[s("strong",[t._v("使用双绞线和集线器HUB的星型以太网")])]),t._v(" "),s("p",[t._v("后来，以太网发展出了一种使用"),s("strong",[t._v("大规模集成电路")]),t._v("，可靠性非常高的设备，叫做"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("集线器")])]),t._v("，并且使用更便宜、更灵活的"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("双绞线")])]),t._v("作为传输媒体，如下图所示：")],1),t._v(" "),s("p",[s("img",{attrs:{src:v(431),alt:"image-20240213170839463"}})]),t._v(" "),s("p",[t._v("主机中的以太网卡，以及集线器的各接口使用"),s("strong",[t._v("RJ-45插座")]),t._v("，它们之间使用双绞线电缆进行连接，在双绞线电缆的两端时"),s("strong",[t._v("RJ-45插头")]),t._v("（俗称“水晶头”）。")]),t._v(" "),s("p",[t._v("实践证明，这种方式比无源电缆和大量机械接头可靠的多，并且价格便宜，使用方便。因此，粗缆和细缆以太网早已成为历史。")]),t._v(" "),s("ul",[s("li",[t._v("使"),s("font",{attrs:{color:"#EA0000"}},[t._v("用集线器的以太网在逻辑上仍是一个总线网")]),t._v("，各站共享总线资源，"),s("font",{attrs:{color:"#EA0000"}},[t._v("使用的还是CSMA/CD协议")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#EA0000"}},[t._v("集线器只工作在物理层")]),t._v("，它的每个接口仅简单地转发比特，不进行碰撞检测（由各站的网卡检测）")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#EA0000"}},[t._v("集线器一般都有少量的容错能力和网络管理功能")]),t._v("。例如，若网络中某个网卡出了故障，不停的发送帧。此时，集线器可以检测到这个问题，在内部断开与出故障网卡的连线，使整个以太网仍然能正常工作。")],1)])])]),t._v(" "),s("h2",{attrs:{id:"使用集线器hub在物理层扩展以太网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用集线器hub在物理层扩展以太网"}},[t._v("#")]),t._v(" 使用集线器HUB在物理层扩展以太网")]),t._v(" "),s("p",[t._v("举例说明：假设某学院下设三个系部，每个系部都有一个使用集线器作为互连设备的以太网，这三个以太网相互独立，各自共享自己的总线资源，是三个独立的"),s("strong",[t._v("碰撞域")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(432),alt:"image-20240213174531555"}})]),t._v(" "),s("p",[t._v("为了使各系中的以太网能够相互通信，可再使用一个集线器将它们互连起来，这样，原来三个独立的以太网，就互连成为了一个更大的以太网，原来三个独立的碰撞域，就合并成了一个"),s("strong",[t._v("更大的碰撞域")]),t._v("（换句话说，形成了一个更大的总线型以太网）")]),t._v(" "),s("p",[s("img",{attrs:{src:v(433),alt:"image-20240213174550727"}})]),t._v(" "),s("h2",{attrs:{id:"以太网交换机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以太网交换机"}},[t._v("#")]),t._v(" 以太网交换机")]),t._v(" "),s("p",[t._v("在集线器之后，发展出了更先进的网络互连设备，也就是"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("以太网交换机")])])],1),t._v(" "),s("h3",{attrs:{id:"集线器与交换机区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集线器与交换机区别"}},[t._v("#")]),t._v(" 集线器与交换机区别")]),t._v(" "),s("p",[s("img",{attrs:{src:v(434),alt:"image-20240213175157942"}})]),t._v(" "),s("ul",[s("li",[t._v("使用集线器互联而成的共享总线式以太网上的某个主机，要给另一个主机发送单播帧，该单播帧会通过共享总线"),s("font",{attrs:{color:"#EA0000"}},[t._v("传输到总线上的其他各个主机")])],1),t._v(" "),s("li",[t._v("使用交换机互连而成的交换式以太网上的某个主机，要给另一个主机发送单播帧，该单播帧进入交换机后，"),s("font",{attrs:{color:"#EA0000"}},[t._v("交换机会将该单播帧转发给目的主机")]),t._v("，而不是网络中的其他各个主机")],1)]),t._v(" "),s("p",[t._v("很显然，交换机具有明显优势")]),t._v(" "),s("h3",{attrs:{id:"交换机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交换机"}},[t._v("#")]),t._v(" 交换机")]),t._v(" "),s("p",[s("img",{attrs:{src:v(435),alt:"image-20240213175451527"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("以太网交换机通常都有"),s("font",{attrs:{color:"#EA0000"}},[t._v("多个接口")]),t._v("，每个接口都可以直接与一台主机或另一个以太网交换机相连，一般都工作在"),s("font",{attrs:{color:"#EA0000"}},[t._v("全双工方式")])],1)]),t._v(" "),s("li",[s("p",[t._v("以太网交换机具有并行性，能"),s("font",{attrs:{color:"#EA0000"}},[t._v("同时连通多对接口")]),t._v("，使多对主机能同时通信，"),s("font",{attrs:{color:"#EA0000"}},[t._v("无碰撞（不使用CSMA/CD协议）")])],1)]),t._v(" "),s("li",[s("p",[t._v("以太网交换机工作"),s("font",{attrs:{color:"#EA0000"}},[t._v("在数据链路层（也包括物理层）")]),t._v("，它收到帧后，在"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("帧交换表")])]),t._v("中"),s("font",{attrs:{color:"#EA0000"}},[t._v("查找帧的目的MAC地址所对应的"),s("strong",[t._v("接口号")])]),t._v("，然后通过该接口转发帧")],1)]),t._v(" "),s("li",[s("p",[t._v("以太网交换机是一种即插即用设备，其内部的"),s("strong",[t._v("帧交换表")]),t._v("是通过"),s("font",{attrs:{color:"#EA0000"}},[t._v("自学习算法")]),t._v("自动地逐渐建立起来的")],1)]),t._v(" "),s("li",[s("p",[t._v("帧的两种转发方式：")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#EA0000"}},[s("strong",[t._v("存储转发")])]),t._v("：将帧存储起来，依次转发")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#EA0000"}},[s("strong",[t._v("直通交换")])]),t._v("：采用基于硬件的交叉矩阵（交换时延非常小，但不检查帧是否差错）")],1)])])]),t._v(" "),s("h3",{attrs:{id:"对比集线器与交换机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比集线器与交换机"}},[t._v("#")]),t._v(" 对比集线器与交换机")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对比发送单播帧的情况")]),t._v(" "),s("p",[s("img",{attrs:{src:v(436),alt:"image-20240214004843107"}})])]),t._v(" "),s("li",[s("p",[t._v("对比广播帧的情况：")]),t._v(" "),s("ul",[s("li",[t._v("交换机：收到广播帧后，检测到帧的目的MAC地址是广播地址，于是从"),s("strong",[t._v("除该帧进入交换机接口外的其他各接口")]),t._v("转发该帧")])]),t._v(" "),s("p",[s("img",{attrs:{src:v(437),alt:"image-20240214005233693"}})])]),t._v(" "),s("li",[s("p",[t._v("对比网络中的多台主机，同时给另一台主机发送单播帧的情况")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("集线器：会"),s("font",{attrs:{color:"#EA0000"}},[t._v("产生碰撞")]),t._v("，遭遇碰撞的帧会传播到总线上的各主机")],1),t._v(" "),s("p",[s("img",{attrs:{src:v(438),alt:"image-20240214005729138"}})])]),t._v(" "),s("li",[s("p",[t._v("交换机：交换机收到多个帧时，会将它们"),s("font",{attrs:{color:"#EA0000"}},[t._v("缓存起来")]),t._v("，然后"),s("font",{attrs:{color:"#EA0000"}},[t._v("逐个转发给目的主机")]),t._v("，不会产生碰撞")],1),t._v(" "),s("p",[s("img",{attrs:{src:v(439),alt:"image-20240214005702637"}})])])])]),t._v(" "),s("li",[s("p",[t._v("对比使用集线器扩展以太网 和 使用交换机扩展以太网")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("发送单播帧")]),t._v(" "),s("p",[s("img",{attrs:{src:v(440),alt:"image-20240214010029666"}})])]),t._v(" "),s("li",[s("p",[t._v("发送广播帧：")]),t._v(" "),s("p",[s("img",{attrs:{src:v(441),alt:"image-20240214010101351"}})]),t._v(" "),s("p",[t._v("从效果上看是一样的，可见，"),s("font",{staticStyle:{"background-color":"#ff0"}},[t._v("不管使用集线器还是交换机来扩展以太网，扩展后的以太网中的各主机都属于同一个广播域")]),t._v("。")],1),t._v(" "),s("p",[t._v("但是，在集线器上扩展以太网，在逻辑上仍然是共享总线的，会"),s("font",{attrs:{color:"#EA0000"}},[t._v("形成更大的碰撞域")]),t._v("（参与竞争总线的主机比扩展前的更多了）；但是交换机就不会有这个问题。如下图所示：")],1),t._v(" "),s("p",[s("img",{attrs:{src:v(442),alt:"image-20240214010530864"}})]),t._v(" "),s("p",[t._v("由此可见，交换机在扩展以太网时，不仅可以扩大广播域，还可以"),s("font",{attrs:{color:"#EA0000"}},[t._v("隔离碰撞域")]),t._v("（集线器不行）")],1),t._v(" "),s("p",[s("img",{attrs:{src:v(443),alt:"image-20240214010604434"}})])])])])]),t._v(" "),s("p",[t._v("目前市场上，集线器已经被淘汰，很少见到集线器了。")])])}),[],!1,null,null,null);s.default=a.exports}}]);