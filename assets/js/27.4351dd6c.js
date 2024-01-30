(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{388:function(t,r,o){t.exports=o.p+"assets/img/image-20231209175409046.9fdad9a5.png"},389:function(t,r,o){t.exports=o.p+"assets/img/image-20231209175317698.865d5181.png"},390:function(t,r,o){t.exports=o.p+"assets/img/image-20231209180310121.ec2862af.png"},391:function(t,r,o){t.exports=o.p+"assets/img/image-20231209181559550.3b0dee39.png"},420:function(t,r,o){"use strict";o.r(r);var a=o(14),v=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"差错控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#差错控制"}},[t._v("#")]),t._v(" 差错控制")]),t._v(" "),r("p",[t._v("实际的通信链路都不是理想的，比特在传输过程中可能会产生差错：1 可能会变成 0，而 0 也可能变成 1，这称为"),r("font",{attrs:{color:"#EA0000"}},[t._v("比特差错")]),t._v("。")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(388),alt:"image-20231209175409046"}})]),t._v(" "),r("ul",[r("li",[t._v("在一段时间内，传输错误的比特占所传输比特总数的比率称为**"),r("font",{attrs:{color:"#8600FF"}},[t._v("误码率 BER")]),t._v("**（Bit Error Rate）")],1),t._v(" "),r("li",[t._v("使用**"),r("font",{attrs:{color:"#8600FF"}},[t._v("差错检测码")]),t._v("**来检测数据在传输过程中是否产生了比特差错，是数据链路层所要解决的重要问题之一。")],1)]),t._v(" "),r("p",[t._v("各协议中帧尾的**"),r("font",{attrs:{color:"#EA0000"}},[t._v("FCS")]),t._v("**，就是"),r("font",{attrs:{color:"#8600FF"}},[t._v("差错检测码")])],1),t._v(" "),r("p",[r("img",{attrs:{src:o(389),alt:"image-20231209175317698"}})]),t._v(" "),r("h3",{attrs:{id:"差错检测方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#差错检测方法"}},[t._v("#")]),t._v(" 差错检测方法")]),t._v(" "),r("h5",{attrs:{id:"奇偶校验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#奇偶校验"}},[t._v("#")]),t._v(" 奇偶校验")]),t._v(" "),r("ul",[r("li",[t._v("在待发送的数据后面"),r("font",{attrs:{color:"#EA0000"}},[t._v("添加 1 位奇偶校验位")]),t._v("，使整个数据（包括所添加的校验位在内）中"),r("font",{attrs:{color:"#EA0000"}},[t._v("”1“的个数")]),t._v("为奇数和偶数")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:o(390),alt:"image-20231209180310121"}})]),t._v(" "),r("ul",[r("li",[t._v("如果有"),r("font",{attrs:{color:"#EA0000"}},[t._v("奇数")]),t._v("个位发生误码，则奇偶性发生变化，可以检测到误码")],1),t._v(" "),r("li",[t._v("如果有"),r("font",{attrs:{color:"#EA0000"}},[t._v("偶数")]),t._v("个位发生误码，则奇偶性无变化，不能检测到误码（"),r("font",{attrs:{color:"#EA0000"}},[r("strong",[t._v("漏检")])]),t._v("）")],1)]),t._v(" "),r("p",[t._v("由于奇偶校验的漏检率比较高，因此计算机网络的数据链路层，一般不会采用这种检测方法")]),t._v(" "),r("h5",{attrs:{id:"循环冗余校验-crc-cyclic-redundancy-check"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#循环冗余校验-crc-cyclic-redundancy-check"}},[t._v("#")]),t._v(" 循环冗余校验 CRC（Cyclic Redundancy Check）")]),t._v(" "),r("p",[t._v("检错能力强，漏检率极低")]),t._v(" "),r("ul",[r("li",[t._v("收发双方约定好一个"),r("font",{attrs:{color:"#EA0000"}},[r("strong",[t._v("生成多项式")])]),t._v(" G(x)")],1),t._v(" "),r("li",[t._v("发送方基于待发送的数据和生成多项式计算出差错检测码（"),r("font",{attrs:{color:"#EA0000"}},[t._v("冗余码")]),t._v("），将其添加到待传输数据的后面一起传输")],1),t._v(" "),r("li",[t._v("接收方通过生成多项式来计算收到的数据是否产生了误码")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(391),alt:"image-20231209181559550"}})]),t._v(" "),r("h4",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),r("ul",[r("li",[r("font",{attrs:{color:"#EA0000"}},[t._v("检错码")]),t._v("只能检测出帧在传输过程中出现了差错，但并不能定位错误，因此"),r("font",{attrs:{color:"#EA0000"}},[t._v("无法纠正错误")])],1),t._v(" "),r("li",[t._v("要想矫正传输中的差错，可以使用冗余信息更多的"),r("font",{attrs:{color:"#EA0000"}},[t._v("纠错码")]),t._v("进行"),r("font",{attrs:{color:"#EA0000"}},[t._v("前向纠错")]),t._v("，但纠错的"),r("font",{staticStyle:{"background-color":"#ff0"}},[t._v("开销较大")]),t._v("，在计算机网络中较少使用")],1),t._v(" "),r("li",[r("font",{attrs:{color:"#8600FF"}},[t._v("循环冗余校验 CRC")]),t._v("有很好的检错能力（漏检率极低），虽然计算比较复杂，但非常"),r("font",{staticStyle:{"background-color":"#ff0"}},[t._v("易于用硬件实现")]),t._v("，因此被"),r("font",{attrs:{color:"#EA0000"}},[t._v("广泛应用")]),t._v("于数据链路层。")],1),t._v(" "),r("li",[t._v("在计算机网络中通常采用我们后续课程中要讨论的"),r("font",{attrs:{color:"#EA0000"}},[t._v("检错重传方式")]),t._v("来纠正传输中的差错，或者"),r("font",{attrs:{color:"#EA0000"}},[t._v("仅仅是丢弃检测到差错的帧")]),t._v("，这取决于数据链路层向其上层提供的是可靠传输服务还是不可靠传输服务。")],1)])])}),[],!1,null,null,null);r.default=v.exports}}]);