(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{299:function(t,v,_){t.exports=_.p+"assets/img/image-20231021183105796.144e958b.png"},300:function(t,v,_){t.exports=_.p+"assets/img/image-20231021183334004.5e4824b7.png"},301:function(t,v,_){t.exports=_.p+"assets/img/image-20231021184204857.2d73a606.png"},302:function(t,v,_){t.exports=_.p+"assets/img/image-20231021185317336.4eab5174.png"},303:function(t,v,_){t.exports=_.p+"assets/img/image-20231028140526008.08f1cc0f.png"},431:function(t,v,_){"use strict";_.r(v);var o=_(14),a=Object(o.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"交换方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交换方式"}},[t._v("#")]),t._v(" 交换方式")]),t._v(" "),v("h3",{attrs:{id:"电路交换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#电路交换"}},[t._v("#")]),t._v(" 电路交换")]),t._v(" "),v("p",[t._v("电话问世后，人们发现，如果想要让所有电话都连接起来是不可能的，如下图：")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(299),alt:"image-20231021183105796"}}),t._v(" "),v("p",[t._v("于是，人们发明了**"),v("font",{attrs:{color:"#8600FF"}},[t._v("电话交换机")]),t._v("**：用一个电话交换机把所有电话连接起来。")],1),t._v(" "),v("img",{staticStyle:{zoom:"70%"},attrs:{src:_(300),alt:"image-20231021183334004"}}),t._v(" "),v("ul",[v("li",[v("p",[t._v("电话交换机接通电话的方式称为"),v("strong",[t._v("电路交换")])])]),t._v(" "),v("li",[v("p",[t._v("从通信资源的分配角度来看，"),v("strong",[t._v("交换")]),t._v("（Switching）就是按照某种方式动态地分配传输线路的资源")]),t._v(" "),v("p",[t._v("看一个电路交换的示意图：")]),t._v(" "),v("img",{attrs:{src:_(301),alt:"image-20231021184204857"}})]),t._v(" "),v("li",[v("p",[t._v("电路交换的三个步骤：")]),t._v(" "),v("ul",[v("li",[t._v("建立连接（分配通信资源）")]),t._v(" "),v("li",[t._v("通话（一直占用通信资源）")]),t._v(" "),v("li",[t._v("释放连接（归还通信资源）")])])])]),t._v(" "),v("p",[t._v("那么，如果使用"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("电路交换来传输计算机数据")]),t._v("，是否可行？")],1),t._v(" "),v("ul",[v("li",[t._v("虽然可以实现传输数据，但是线路的传输效率会很低，因为"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("计算机数据是突发式地出现在传输线路上的，会造成所占用的通信资源暂时未被利用")]),t._v("。因此计算机数据通常采用"),v("font",{attrs:{color:"#EA0000"}},[t._v("分组交换")]),t._v("而不是电路交换。")],1)]),t._v(" "),v("h3",{attrs:{id:"分组交换-packet-switching"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分组交换-packet-switching"}},[t._v("#")]),t._v(" 分组交换（packet Switching）")]),t._v(" "),v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(302),alt:"image-20231021185317336"}}),t._v(" "),v("p",[t._v("假设"),v("strong",[t._v("H6 主机")]),t._v("要给"),v("strong",[t._v("H2 主机")]),t._v("用户发送一个消息：")]),t._v(" "),v("ul",[v("li",[t._v("首先，主机 H6 将消息"),v("font",{attrs:{color:"#EA0000"}},[t._v("打包")]),t._v("为一个"),v("font",{attrs:{color:"#8600FF"}},[t._v("报文")])],1),t._v(" "),v("li",[t._v("将报文划分成一个个更小的等长的"),v("font",{attrs:{color:"#8600FF"}},[t._v("数据段")])],1),t._v(" "),v("li",[t._v("在每个数据段前面加上一些由"),v("strong",[t._v("必要的控制信息")]),t._v("组成的"),v("font",{attrs:{color:"#8600FF"}},[t._v("首部")]),t._v("，就构成了一个个"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("分组")]),t._v("（也可简称为"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("“包”")]),t._v("，首部也可称为“包头”）")],1),t._v(" "),v("li",[t._v("将分组们发给"),v("font",{attrs:{color:"#8600FF"}},[t._v("分组交换器")]),t._v("（路由器）")],1),t._v(" "),v("li",[t._v("分组交换机收到一个分组后：\n"),v("ul",[v("li",[t._v("先将分组"),v("strong",[t._v("暂时存储")]),t._v("下来，")]),t._v(" "),v("li",[t._v("再"),v("strong",[t._v("检查分组首部")])]),t._v(" "),v("li",[t._v("按照首部中的"),v("font",{attrs:{color:"#8600FF"}},[t._v("目的地地址")]),t._v("进行"),v("font",{attrs:{color:"#EA0000"}},[t._v("查表转发")])],1),t._v(" "),v("li",[t._v("找到合适的"),v("font",{attrs:{color:"#8600FF"}},[t._v("转发接口")])],1),t._v(" "),v("li",[t._v("通过该接口将分组"),v("font",{attrs:{color:"#EA0000"}},[t._v("转发给下一个分组交换机")])],1)])]),t._v(" "),v("li",[t._v("最终到达主机 H2")]),t._v(" "),v("li",[t._v("主机 H2 收到分组后，去掉所有分组的首部，将各数据段组合"),v("font",{attrs:{color:"#EA0000"}},[t._v("还原")]),t._v("出"),v("font",{attrs:{color:"#8600FF"}},[t._v("原始报文")])],1)]),t._v(" "),v("p",[t._v("在上述分组交换过程中，")]),t._v(" "),v("ul",[v("li",[t._v("发送方任务："),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("构造分组、发送分组")])],1),t._v(" "),v("li",[t._v("分组交换机（路由器）任务："),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("缓存分组、转发分组")]),t._v("（存储转发）")],1),t._v(" "),v("li",[t._v("接收方任务："),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("接收分组、还原报文")])],1)]),t._v(" "),v("h3",{attrs:{id:"报文交换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报文交换"}},[t._v("#")]),t._v(" 报文交换")]),t._v(" "),v("p",[t._v("报文交换与分组交换类似，也是通过"),v("font",{attrs:{color:"#8600FF"}},[t._v("报文交换机")]),t._v("完成"),v("font",{attrs:{color:"#EA0000"}},[t._v("存储转发")]),t._v("，只是报文交换的报文，"),v("font",{attrs:{color:"#EA0000"}},[t._v("没有大小限制")]),t._v("（因此需要报文交换机有较大的存储能力）")],1),t._v(" "),v("p",[t._v("主要是用于早期的电报通信，现在基本被分组交换所取代。")]),t._v(" "),v("h3",{attrs:{id:"对比-电路交换、报文交换、分组交换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对比-电路交换、报文交换、分组交换"}},[t._v("#")]),t._v(" 对比：电路交换、报文交换、分组交换")]),t._v(" "),v("img",{attrs:{src:_(303),alt:"image-20231028140526008"}}),t._v(" "),v("h4",{attrs:{id:"电路交换优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#电路交换优缺点"}},[t._v("#")]),t._v(" 电路交换优缺点：")]),t._v(" "),v("ul",[v("li",[t._v("优点：\n"),v("ol",[v("li",[t._v("通信时延小")]),t._v(" "),v("li",[t._v("有序传播")]),t._v(" "),v("li",[t._v("没有冲突（有专用通道）")]),t._v(" "),v("li",[t._v("适用范围广")]),t._v(" "),v("li",[t._v("实时性强")]),t._v(" "),v("li",[t._v("控制简单")])])]),t._v(" "),v("li",[t._v("缺点：\n"),v("ol",[v("li",[t._v("建立连接时间长")]),t._v(" "),v("li",[t._v("线路独占，使用效率极低")]),t._v(" "),v("li",[t._v("灵活性差")]),t._v(" "),v("li",[t._v("难以规格化、规范化")])])])]),t._v(" "),v("h4",{attrs:{id:"报文交换优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报文交换优缺点"}},[t._v("#")]),t._v(" 报文交换优缺点：")]),t._v(" "),v("ul",[v("li",[t._v("优点：\n"),v("ol",[v("li",[t._v("无需建立连接")]),t._v(" "),v("li",[t._v("动态分配线路")]),t._v(" "),v("li",[t._v("提高线路可靠性")]),t._v(" "),v("li",[t._v("提高线路利用率")]),t._v(" "),v("li",[t._v("提供多目标服务")])])]),t._v(" "),v("li",[t._v("缺点：\n"),v("ol",[v("li",[t._v("引起了转发时延（报文在结点交换机上要经过存储转发的过程）")]),t._v(" "),v("li",[t._v("需要较大的存储缓存空间（报文不限制大小）")]),t._v(" "),v("li",[t._v("需要传输"),v("font",{attrs:{color:"#8600FF"}},[t._v("额外的信息量")]),t._v("（例如：目标地址、发送地址等控制信息）")],1)])])]),t._v(" "),v("h4",{attrs:{id:"分组交换优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分组交换优缺点"}},[t._v("#")]),t._v(" 分组交换优缺点：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("优点：")]),t._v(" "),v("ol",[v("li",[t._v("无需建立连接")]),t._v(" "),v("li",[t._v("线路利用率高")]),t._v(" "),v("li",[v("font",{attrs:{color:"#EA0000"}},[t._v("简化了存储管理")])],1),t._v(" "),v("li",[v("font",{attrs:{color:"#EA0000"}},[t._v("加速传输")]),t._v("（每个分组是独立转发的，在一定程度上是并行发送的）")],1),t._v(" "),v("li",[t._v("减少出错概率和重发数据量（分组小块传输，失败概率小）")])])]),t._v(" "),v("li",[v("p",[t._v("缺点：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("引起了转发时延")])]),t._v(" "),v("li",[v("p",[t._v("需要传输额外的信息量（每个分组块都要带上完整的控制信息）")])]),t._v(" "),v("li",[v("p",[t._v("对于数据包服务，存在"),v("font",{staticStyle:{"background-color":"#ff0"}},[t._v("失序、丢失或重复分组")]),t._v("的问题；")],1),t._v(" "),v("p",[t._v("对于虚电路服务，存在呼叫建立、数据传输和虚电路释放三个过程")])])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);