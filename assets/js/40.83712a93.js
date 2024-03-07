(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{366:function(t,v,_){t.exports=_.p+"assets/img/image-20231217172911772.87deb70e.png"},367:function(t,v,_){t.exports=_.p+"assets/img/image-20231217174254153.a44deaf1.png"},368:function(t,v,_){t.exports=_.p+"assets/img/image-20231217183103751.d95f0b7c.png"},369:function(t,v,_){t.exports=_.p+"assets/img/image-20231217185537922.6d3f238d.png"},370:function(t,v,_){t.exports=_.p+"assets/img/image-20240131143105082.15f60179.png"},371:function(t,v,_){t.exports=_.p+"assets/img/image-20240131143652182.197f8f92.png"},636:function(t,v,_){"use strict";_.r(v);var o=_(14),r=Object(o.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"可靠传输的实现机制-停止-等待协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可靠传输的实现机制-停止-等待协议"}},[t._v("#")]),t._v(" 可靠传输的实现机制：停止-等待协议")]),t._v(" "),v("p",[t._v("三种可靠传输的实现机制："),v("font",{attrs:{color:"#8600FF"}},[t._v("停止-等待协议 SW")]),t._v("、"),v("font",{attrs:{color:"#8600FF"}},[t._v("回退 N 帧协议 GBN")]),t._v("、"),v("font",{attrs:{color:"#8600FF"}},[t._v("选择重传协议 SR")])],1),t._v(" "),v("ul",[v("li",[t._v("这三种可靠传输实现机制的基本原理并"),v("font",{attrs:{color:"#EA0000"}},[t._v("不仅限于数据链路层")]),t._v("，可以应用到计算机网络体系结构的各层协议中")],1),t._v(" "),v("li",[t._v("不要把思维局限在数据链路层，而应该放眼于整个网络体系结构")])]),t._v(" "),v("h3",{attrs:{id:"停止-等待协议-stop-and-wait"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止-等待协议-stop-and-wait"}},[t._v("#")]),t._v(" 停止-等待协议（Stop-and-Wait）")]),t._v(" "),v("img",{attrs:{src:_(366),alt:"image-20231217172911772"}}),t._v(" "),v("ul",[v("li",[t._v("收发双方基于互联网进行通信")]),t._v(" "),v("li",[t._v("纵坐标为时间")]),t._v(" "),v("li",[t._v("发送方发送数据分组，接收方收到后对其进行"),v("font",{attrs:{color:"#EA0000"}},[t._v("差错检测")])],1),t._v(" "),v("li",[t._v("若"),v("font",{attrs:{color:"#EA0000"}},[t._v("没有误码")]),t._v("，则接收该数据分组，并给发送方发送"),v("font",{attrs:{color:"#8600FF"}},[t._v("确认分组")]),t._v("，简称"),v("font",{attrs:{color:"#8600FF"}},[t._v("ACK")])],1),t._v(" "),v("li",[t._v("发送方收到对所发送数据分组的确认分组后，才能"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("发送下一个数据分组")])],1),t._v(" "),v("li",[t._v("若数据分组"),v("font",{attrs:{color:"#EA0000"}},[t._v("出现误码")]),t._v("，接收方收到后进行差错检测，发现了误码，则"),v("font",{attrs:{color:"#EA0000"}},[t._v("丢弃该数据分组")])],1),t._v(" "),v("li",[t._v("并给发送方发送"),v("font",{attrs:{color:"#8600FF"}},[t._v("否认分组")]),t._v("，简称"),v("font",{attrs:{color:"#8600FF"}},[t._v("NAK")])],1),t._v(" "),v("li",[t._v("发送方收到否认分组后，知道之前发送的数据分组出现差错被丢弃，立刻"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("重传该数据分组")])],1),t._v(" "),v("li",[t._v("因此，发送方每发送完一个数据分组后，并不能立刻将该数据分组从缓存中删除\n"),v("ul",[v("li",[v("font",{attrs:{color:"#EA0000"}},[t._v("只有在收到该数据分组的确认分组后，才能从缓存中删除")])],1),t._v(" "),v("li",[t._v("因此发送方每发送一个分组后，都要停止发送下一个分组，等待"),v("font",{attrs:{color:"#8600FF"}},[t._v("ACK 或 NAK")])],1)])])]),t._v(" "),v("img",{attrs:{src:_(367),alt:"image-20231217174254153"}}),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("如果接收方收不到数据分组，就不会发送"),v("font",{attrs:{color:"#8600FF"}},[t._v("ACK")]),t._v("或"),v("font",{attrs:{color:"#8600FF"}},[t._v("NAK")]),t._v("，发送方就会"),v("font",{attrs:{color:"#EA0000"}},[t._v("一直处于等待")]),t._v("接收方"),v("font",{attrs:{color:"#8600FF"}},[t._v("ACK 或 NAK")]),t._v("的状态")],1),t._v(" "),v("li",[t._v("为解决该问题，可以在发送方发送完一个数据分组时，启动一个"),v("font",{attrs:{color:"#EA0000"}},[t._v("超时定时器")])],1),t._v(" "),v("li",[t._v("若到了超时定时器所设置的重传时间而发送方仍然收不到接收方的任何 ACK 或 NAK，则重传原来的数据分组，这就叫做"),v("font",{attrs:{color:"#8600FF"}},[t._v("超时重传")]),t._v("。")],1),t._v(" "),v("li",[t._v("一般可将重传时间选为略大于“从发送方到接收方的平均往返时间”")])])]),t._v(" "),v("img",{attrs:{src:_(368),alt:"image-20231217183103751"}}),t._v(" "),v("p",[t._v("既然发送方的数据分组可能丢失，那么接收方的确认/否认分组也有可能丢失")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("发送方发送数据分组")])]),t._v(" "),v("li",[v("p",[t._v("接收方发送确认分组，但该确认分组在传输过程中丢失了")])]),t._v(" "),v("li",[v("p",[t._v("这就会造成：发送方对之前所发送的数据分组的超时重传")])]),t._v(" "),v("li",[v("p",[t._v("重传的数据分组也正确到达了接收方")]),t._v(" "),v("ul",[v("li",[t._v("问题来了："),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("接收方如何判断这是一个重复分组？")])],1)]),t._v(" "),v("blockquote",[v("p",[t._v("为了避免分组重复这种传输错误，必须给每个分组带上"),v("font",{attrs:{color:"#EA0000"}},[t._v("序号")]),t._v("。")],1),t._v(" "),v("p",[t._v("对于停止-等待协议，由于每发送一个数据分组就停止等待，只要保证每发送一个新的数据分组，其发送序号与上次发送的数据分组的序号不同就可以了，因此，只用"),v("font",{attrs:{color:"#EA0000"}},[t._v("一个比特来编号")]),t._v("就够了")],1)])]),t._v(" "),v("li",[v("p",[t._v("根据"),v("font",{attrs:{color:"#8600FF"}},[t._v("数据分组的序号")]),t._v("，接收方就可以判断出这是一个重复的分组，丢弃该重复的数据分组，并给发送方返回 ACK")],1)]),t._v(" "),v("li",[v("p",[t._v("发送方收到针对 0 号数据分组的确认分组，就可以发送下一个数据分组了，其序号为 1")])]),t._v(" "),v("li",[v("p",[t._v("接收方正确收到数据分组后，给发送方")])])]),t._v(" "),v("img",{attrs:{src:_(369),alt:"image-20231217185537922"}}),t._v(" "),v("h3",{attrs:{id:"注意"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),v("ul",[v("li",[t._v("接收端检测到数据分组有误码时，将其丢弃并等待发送方的超时重传，但对于误码率较高的点对点链路，为使发送方"),v("font",{attrs:{color:"#EA0000"}},[t._v("尽早重传")]),t._v("，也可给发送方"),v("font",{attrs:{color:"#EA0000"}},[t._v("发送NAK分组")])],1),t._v(" "),v("li",[t._v("为了让接收方能够判断所收到的"),v("font",{attrs:{color:"#8600FF"}},[t._v("数据分组")]),v("font",{attrs:{color:"#EA0000"}},[t._v("是否是重复的")]),t._v("，需要给数据分组编号，由于停止-等待协议的"),v("font",{attrs:{color:"#EA0000"}},[t._v("停等特性")]),t._v("，"),v("font",{attrs:{color:"#EA0000"}},[t._v("只需一个比特")]),t._v("就够了，即"),v("font",{attrs:{color:"#EA0000"}},[t._v("编号0和1")])],1),t._v(" "),v("li",[t._v("为了让发送方能够判断所收到的"),v("font",{attrs:{color:"#EA0000"}},[t._v("ACK分组是否是重复")]),t._v("的，需要"),v("font",{attrs:{color:"#EA0000"}},[t._v("给ACK分组编号")]),t._v("，所用比特数量与数据分组编号所用比特数量一样，数据链路层一般不会出现ACK分组迟到的情况，因此"),v("strong",[t._v("在数据链路层实现停止-等待协议可以不用给ACK分组编号")])],1),t._v(" "),v("li",[t._v("超时计时器设置的"),v("font",{attrs:{color:"#8600FF"}},[t._v("重传时间")]),t._v("应仔细选择，一般可将重传时间选为"),v("font",{attrs:{color:"#EA0000"}},[t._v("略大于“从发送方到接收方的平均往返时间”")]),t._v(" "),v("ul",[v("li",[t._v("在数据链路层点对点的往返时间比较确定，重传时间比较好设定")]),t._v(" "),v("li",[t._v("然而在运输层，由于端到端的往返时间非常不确定，设置合适的重传时间有时并不容易")])])],1)]),t._v(" "),v("h3",{attrs:{id:"信道利用率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信道利用率"}},[t._v("#")]),t._v(" 信道利用率")]),t._v(" "),v("p",[v("img",{attrs:{src:_(370),alt:"image-20240131143105082"}})]),t._v(" "),v("p",[t._v("T"),v("sub",[t._v("D")]),t._v("：发送方发送数据分组所耗费的发送时延")]),t._v(" "),v("p",[t._v("RTT：收发双方的往返时间RTT")]),t._v(" "),v("p",[t._v("T"),v("sub",[t._v("A")]),t._v("：接收方发送确认分组所耗费的发送时延")]),t._v(" "),v("p",[t._v("假设信道长度为2000km，数据分组长度为1500B，发送速率为10Mbit/s")]),t._v(" "),v("p",[v("img",{attrs:{src:_(371),alt:"image-20240131143652182"}})]),t._v(" "),v("p",[t._v("通过公式可以计算出信道利用率约为"),v("font",{attrs:{color:"#8600FF"}},[t._v("5.66%")])],1),t._v(" "),v("p",[t._v("若提高发送速率为100Mb/s，信道利用率约为0.6%")]),t._v(" "),v("ul",[v("li",[v("font",{attrs:{color:"#EA0000"}},[t._v("当往返时延RTT远大于数据帧发送时延T"),v("sub",[t._v("D")]),t._v("时（例如使用卫星链路），信道利用率非常低")])],1),t._v(" "),v("li",[t._v("若出现重传，则对于传送有用的数据信息来说，信道利用率还要降低")]),t._v(" "),v("li",[t._v("为了克服停止-等待协议信道利用率很低的缺点，就产生了另外两种协议，即"),v("font",{attrs:{color:"#8600FF"}},[t._v("后退N帧协议GBN")]),t._v("和"),v("font",{attrs:{color:"#8600FF"}},[t._v("选择重传协议SR")]),t._v("。")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);