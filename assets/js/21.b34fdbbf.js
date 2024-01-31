(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{400:function(t,v,_){t.exports=_.p+"assets/img/image-20240131144554017.03147a72.png"},401:function(t,v,_){t.exports=_.p+"assets/img/image-20240131153103297.e45ea51b.png"},402:function(t,v,_){t.exports=_.p+"assets/img/image-20240131153207836.d1822efe.png"},403:function(t,v,_){t.exports=_.p+"assets/img/image-20240131153538804.cd1db4d9.png"},404:function(t,v,_){t.exports=_.p+"assets/img/image-20240131154539602.4fb05d59.png"},405:function(t,v,_){t.exports=_.p+"assets/img/image-20240131154954549.1d5f0239.png"},406:function(t,v,_){t.exports=_.p+"assets/img/image-20240131160139911.586f8395.png"},444:function(t,v,_){"use strict";_.r(v);var a=_(14),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"回退n帧协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回退n帧协议"}},[t._v("#")]),t._v(" 回退N帧协议")]),t._v(" "),v("p",[t._v("上节可以看出，停止等待协议（ARQ协议-自动重传协议）的信道利用率很低，但是如果采用流水线传输可大幅提高信道利用率")]),t._v(" "),v("p",[v("img",{attrs:{src:_(400),alt:"image-20240131144554017"}})]),t._v(" "),v("p",[t._v("回退N帧协议就是在流水线基础上，利用"),v("font",{attrs:{color:"#8600FF"}},[t._v("发送窗口")]),t._v("来限制发送方可"),v("font",{attrs:{color:"#EA0000"}},[t._v("连续发送数据分组")]),t._v("的个数")],1),t._v(" "),v("p",[v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("假设：采用3个比特给分组编序号，即序号0-7")])],1),t._v(" "),v("p",[v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("发送窗口的尺寸W~T~的取值：1< W~T~ <= 2^3^-1，本例取 W~T~ = 5")]),t._v("（取值为1时，相当于停止等待协议）")],1),t._v(" "),v("p",[v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("接收窗口的尺寸W~R~的取值：W~R~ = 1 ")])],1),t._v(" "),v("h2",{attrs:{id:"无差错情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#无差错情况"}},[t._v("#")]),t._v(" 无差错情况")]),t._v(" "),v("p",[v("img",{attrs:{src:_(401),alt:"image-20240131153103297"}})]),t._v(" "),v("ul",[v("li",[t._v("发送方将序号落在发送窗口内的0~4号数据分组，依次连续发送出去")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(402),alt:"image-20240131153207836"}})]),t._v(" "),v("ul",[v("li",[t._v("经过互联网的传输，正确到达了接收方，也就是没有出现乱序和误码")]),t._v(" "),v("li",[t._v("接收方按序接收分组，每接收一个，接收窗口向后滑动一个位置，并给发送方发送所接收分组的确认分组")]),t._v(" "),v("li",[t._v("0-4号确认分组，经过互联网的传输正确到达了发送方")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(403),alt:"image-20240131153538804"}})]),t._v(" "),v("ul",[v("li",[t._v("发送方每接收一个，发送窗口就向前滑动一个位置，这样就有新的序号落入了发送窗口")]),t._v(" "),v("li",[t._v("发送方可以将收到确认的数据分组从缓存中删除了")])]),t._v(" "),v("h3",{attrs:{id:"累积确认"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#累积确认"}},[t._v("#")]),t._v(" 累积确认")]),t._v(" "),v("p",[t._v("接收方不一定要对收到的数据分组逐个发送确认，而是可以在接收到几个分组后，对按序到达的最后一个分组发送确认："),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("ACK~n~ 表示序号为n及以前的所有数据分组都已正确接收")]),t._v("了")],1),t._v(" "),v("ul",[v("li",[v("p",[t._v("优点")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("即使确认分组出现丢失，发送方也可能不必重传")])]),t._v(" "),v("li",[v("p",[t._v("减少接收方的开销")])]),t._v(" "),v("li",[v("p",[t._v("减少对网络资源的占用")])])])]),t._v(" "),v("li",[v("p",[t._v("缺点")]),t._v(" "),v("ul",[v("li",[t._v("不能向发送方及时反映出错误信息")])])])]),t._v(" "),v("h2",{attrs:{id:"有差错情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有差错情况"}},[t._v("#")]),t._v(" 有差错情况")]),t._v(" "),v("p",[v("img",{attrs:{src:_(404),alt:"image-20240131154539602"}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("接收方通过检错码发现："),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("假设5号数据分组出现误码")])],1)]),t._v(" "),v("li",[v("p",[t._v("于是"),v("font",{attrs:{color:"#EA0000"}},[t._v("丢失该数据分组")]),t._v("，后续到达的数据分组序号与接收窗口的"),v("font",{attrs:{color:"#EA0000"}},[t._v("序号不匹配，也只能丢弃")])],1)]),t._v(" "),v("li",[v("p",[t._v("并"),v("font",{attrs:{color:"#EA0000"}},[t._v("对之前接收的最后一个分组进行确认")]),t._v("，也就是发送"),v("font",{attrs:{color:"#8600FF"}},[t._v("ACK~4~ ")])],1)])]),t._v(" "),v("p",[v("img",{attrs:{src:_(405),alt:"image-20240131154954549"}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("当发送方收到"),v("font",{attrs:{color:"#8600FF"}},[t._v("重复的ACK~4~")]),t._v("时， 就知道之前发送的数据分组出现了差错，于是可以不等超时计时器超时就"),v("font",{attrs:{color:"#EA0000"}},[t._v("立刻重传！")]),t._v("（至于收到几个重复确认就立刻重传，由具体实现决定）")],1)]),t._v(" "),v("li",[v("p",[t._v("假设收到4个重复的ACK~4~后，没有"),v("font",{attrs:{color:"#EA0000"}},[t._v("立刻重传")]),t._v("，而是等超时计时器超时重传，")],1)]),t._v(" "),v("li",[v("p",[t._v("发送方将发送窗口内已发送过的这些数据分组全部重传")])])]),t._v(" "),v("p",[t._v("在本例中，尽管序号6，7，0，1的数据分组正确到达接收方，但由于5号数据分组误码，发送方还要"),v("font",{attrs:{color:"#EA0000"}},[t._v("重发这些数据")]),t._v("，这就是所谓的"),v("font",{attrs:{color:"#8600FF"}},[t._v(" Go-back-N（回退N帧）")])],1),t._v(" "),v("p",[v("img",{attrs:{src:_(406),alt:"image-20240131160139911"}})]),t._v(" "),v("p",[t._v("从上面可以看出，当通信线路质量不是很好时，回退N帧协议的信道利用率并不比停止-等待协议高")]),t._v(" "),v("h3",{attrs:{id:"注意"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),v("ul",[v("li",[t._v("如果W~T~超过取值范围，例如W~T~=8，可能会造成"),v("font",{attrs:{color:"#EA0000"}},[t._v("接收方无法分辨 新、旧数据分组")]),t._v("，因此W~T~不能超过其上限")],1)]),t._v(" "),v("h2",{attrs:{id:"小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),v("ul",[v("li",[t._v("回退N帧协议在流水线传输的基础上，利用发送传窗口来限制发送方连续发送数据分组的数量，是一种"),v("font",{attrs:{color:"#8600FF"}},[t._v("连续ARQ协议")])],1),t._v(" "),v("li",[t._v("在协议的工作过程中发送窗口和接收窗口不断向前滑动，因此这类协议又称为"),v("font",{attrs:{color:"#8600FF"}},[v("strong",[t._v("窗口协议")])])],1),t._v(" "),v("li",[t._v("由于回退N帧协议的特性，当"),v("font",{attrs:{color:"#EA0000"}},[t._v("通信线路质量不好")]),t._v("时，其信道利用率并不比停止-等待协议高")],1)])])}),[],!1,null,null,null);v.default=s.exports}}]);