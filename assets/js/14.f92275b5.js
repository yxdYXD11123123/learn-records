(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{522:function(t,s,a){t.exports=a.p+"assets/img/image-20240301141231855.69cce265.png"},523:function(t,s,a){t.exports=a.p+"assets/img/image-20240301141954698.00b8f7aa.png"},524:function(t,s,a){t.exports=a.p+"assets/img/image-20240301142850417.1ce67652.png"},525:function(t,s,a){t.exports=a.p+"assets/img/image-20240301143600556.b2e85312.png"},526:function(t,s,a){t.exports=a.p+"assets/img/image-20240301143834665.2d268828.png"},527:function(t,s,a){t.exports=a.p+"assets/img/image-20240301144222506.5bdac9e3.png"},528:function(t,s,a){t.exports=a.p+"assets/img/image-20240301144429607.3ddd57f8.png"},529:function(t,s,a){t.exports=a.p+"assets/img/image-20240301145934198.f6301e81.png"},530:function(t,s,a){t.exports=a.p+"assets/img/image-20240301150217285.1bbf2f82.png"},531:function(t,s,a){t.exports=a.p+"assets/img/image-20240301150409389.60a391d7.png"},532:function(t,s,a){t.exports=a.p+"assets/img/image-20240301150919887.b290e93e.png"},533:function(t,s,a){t.exports=a.p+"assets/img/image-20240301151837080.7ff88c3a.png"},534:function(t,s,a){t.exports=a.p+"assets/img/image-20240301152811824.c6d78c9a.png"},535:function(t,s,a){t.exports=a.p+"assets/img/image-20240301152932253.c238e6b6.png"},657:function(t,s,a){"use strict";a.r(s);var v=a(14),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"静态路由配置及其可能产生的路由环路问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态路由配置及其可能产生的路由环路问题"}},[t._v("#")]),t._v(" 静态路由配置及其可能产生的路由环路问题")]),t._v(" "),s("ul",[s("li",[t._v("静态路由配置是指用户或网络管理员使用路由器的相关命令给路由器"),s("font",{attrs:{color:"#EA0000"}},[t._v("人工配置路由表")]),t._v(" "),s("ul",[s("li",[t._v("这种人工配置方式简单、开销小。但不"),s("font",{attrs:{color:"#EA0000"}},[t._v("能及时适应网络状态（流量、拓扑等）的变化")])],1),t._v(" "),s("li",[t._v("一般只在小规模网络中采用")])])],1),t._v(" "),s("li",[t._v("使用静态路由配置可能出现以下"),s("font",{attrs:{color:"#EA0000"}},[t._v("导致")]),t._v("产生"),s("font",{attrs:{color:"#8600FF"}},[t._v("路由环路")]),t._v("的错误\n"),s("ul",[s("li",[t._v("配置错误")]),t._v(" "),s("li",[t._v("聚合了不存在的网络")]),t._v(" "),s("li",[t._v("网络故障")])])],1)]),t._v(" "),s("h2",{attrs:{id:"静态路由配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态路由配置"}},[t._v("#")]),t._v(" 静态路由配置")]),t._v(" "),s("p",[s("img",{attrs:{src:a(522),alt:"image-20240301141231855"}})]),t._v(" "),s("p",[t._v("采用如图所示的网络拓扑和相应的IP地址配置")]),t._v(" "),s("p",[t._v("路由器R1通过接口0的IP地址和地址掩码，可自动得出接口0所在的网络，由于接口0与该网络直连，所以下一跳不是路由器地址，而是通过接口0转发IP数据报给该网络中的某个主机，这属于"),s("strong",[t._v("直接交付")]),t._v("，这条"),s("font",{attrs:{color:"#EA0000"}},[t._v("自动得出的路由条目")]),t._v("类型就属于"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("直连类型")])]),t._v("。接口1同理。")],1),t._v(" "),s("p",[s("img",{attrs:{src:a(523),alt:"image-20240301141954698"}})]),t._v(" "),s("p",[t._v("当R1想要转发IP数据报给192.168.2.0/24时，我们可以使用路由器的相关配置命令，给R1添加一条到达该目的网络的路由条目：目的网络为192.168.2.0/24，下一跳为路由器R2的接口0地址。这就是一条"),s("font",{attrs:{color:"#EA0000"}},[t._v("人工配置")]),t._v("的达到目的网络的"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("静态路由")])])],1),t._v(" "),s("p",[s("img",{attrs:{src:a(524),alt:"image-20240301142850417"}})]),t._v(" "),s("h3",{attrs:{id:"默认路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认路由"}},[t._v("#")]),t._v(" 默认路由")]),t._v(" "),s("p",[t._v("如果R1想给因特网中"),s("strong",[t._v("某个网络中的某个主机")]),t._v("转发IP数据报，从图中可以看出下一跳应该转发给R2的接口0，但是由于因特网中包含了众多网络，如果给R1添加针对这些网络的每一条路由条目，肯定是不现实的。")]),t._v(" "),s("p",[t._v("对于具有相同下一跳的不同目的网络的路由条目，可以用一条"),s("strong",[t._v("默认路由条目")]),t._v("来代替：")]),t._v(" "),s("p",[s("font",{attrs:{color:"#EA0000"}},[t._v("默认路由的目的网络地址为0.0.0.0，地址掩码为0.0.0.0，其CIDR形式为0.0.0.0/0")])],1),t._v(" "),s("p",[t._v("对于本例，默认路由的下一跳是路由器R2接口的地址，类型也是"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("静态")])])],1),t._v(" "),s("p",[s("img",{attrs:{src:a(525),alt:"image-20240301143600556"}})]),t._v(" "),s("h3",{attrs:{id:"特定主机路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特定主机路由"}},[t._v("#")]),t._v(" 特定主机路由")]),t._v(" "),s("p",[s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("特定主机路由")])]),t._v("一般用于网络管理人员对网络对的管理和测试，也可以用于解决一些安全问题，也属于"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("静态类型")])])],1),t._v(" "),s("p",[s("img",{attrs:{src:a(526),alt:"image-20240301143834665"}})]),t._v(" "),s("p",[t._v("可以看出，"),s("font",{staticStyle:{"background-color":"#ff0"}},[t._v("特定主机路由的前缀最长，路由最具体，默认路由前缀最短，路由最模糊")]),t._v("。当路由器查表转发IP数据报时，若有多条路由可选，匹配最长前缀的那一条路由条目进行转发（"),s("font",{attrs:{color:"#EA0000"}},[t._v("“最长前缀匹配”原则")]),t._v("）")],1),t._v(" "),s("h2",{attrs:{id:"路由环路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由环路"}},[t._v("#")]),t._v(" 路由环路")]),t._v(" "),s("h3",{attrs:{id:"静态路由配置错误导致路由环路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态路由配置错误导致路由环路"}},[t._v("#")]),t._v(" 静态路由配置错误导致路由环路")]),t._v(" "),s("p",[s("img",{attrs:{src:a(527),alt:"image-20240301144222506"}})]),t._v(" "),s("p",[t._v("如果在R2路由表中，192.168.1.0/24配置的"),s("font",{attrs:{color:"#EA0000"}},[t._v("下一跳错误")])],1),t._v(" "),s("p",[s("img",{attrs:{src:a(528),alt:"image-20240301144429607"}})]),t._v(" "),s("p",[t._v("就会导致R2、R3之间产生"),s("strong",[t._v("路由环路")])]),t._v(" "),s("p",[t._v("为了"),s("font",{attrs:{color:"#EA0000"}},[t._v("防止IP数据报在路由环路中永久兜圈")]),t._v("，在IP数据报首部设有"),s("font",{attrs:{color:"#8600FF"}},[t._v("生存时间TTL字段")]),t._v("。")],1),t._v(" "),s("p",[t._v("IP数据报进入路由器后，TTL字段的值减1.若"),s("font",{attrs:{color:"#EA0000"}},[t._v("TTL的值不等于0，则被路由器转发，否则被丢弃")])],1),t._v(" "),s("h3",{attrs:{id:"聚合了不存在的网络而导致路由环路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚合了不存在的网络而导致路由环路"}},[t._v("#")]),t._v(" 聚合了不存在的网络而导致路由环路")]),t._v(" "),s("p",[s("img",{attrs:{src:a(529),alt:"image-20240301145934198"}})]),t._v(" "),s("p",[t._v("在上图网络中，R2路由器的路由表中存在一条"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("聚合路由")])]),t._v("（通过网络地址的共同前缀得出）")],1),t._v(" "),s("p",[t._v("当R2路由器要给网络192.168.2.0/24转发IP数据报时，可以正常转发：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(530),alt:"image-20240301150217285"}})]),t._v(" "),s("p",[t._v("但是仔细分析下聚合路由的细节，里面"),s("font",{attrs:{color:"#EA0000"}},[t._v("有两个地址（192.168.0.0/24和192.168.3.0/24）其实不存在该网络中")]),t._v("，如果要给192.168.3.0/24网络转发IP数据报时，就会产生"),s("strong",[t._v("路由环路")]),t._v("问题")],1),t._v(" "),s("p",[s("img",{attrs:{src:a(531),alt:"image-20240301150409389"}})]),t._v(" "),s("p",[t._v("对于该"),s("strong",[t._v("环路问题")]),t._v("，我们可以在R2的路由表中添加"),s("strong",[t._v("针对所聚合的、不存在的网络")]),t._v("的"),s("font",{attrs:{color:"#8600FF"}},[s("strong",[t._v("黑洞路由")])]),t._v("。")],1),t._v(" "),s("p",[t._v("黑洞路由的下一跳为"),s("code",[t._v("null0")]),t._v("，这是路由器内部的"),s("strong",[t._v("虚拟接口")]),t._v("，IP数据报进入黑洞路由，就"),s("font",{attrs:{color:"#EA0000"}},[t._v("相当于路由器丢弃了该IP数据报")]),t._v("，就可以避免路由环路。")],1),t._v(" "),s("p",[s("img",{attrs:{src:a(532),alt:"image-20240301150919887"}})]),t._v(" "),s("h3",{attrs:{id:"网络故障而导致路由环路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络故障而导致路由环路"}},[t._v("#")]),t._v(" 网络故障而导致路由环路")]),t._v(" "),s("p",[s("img",{attrs:{src:a(533),alt:"image-20240301151837080"}})]),t._v(" "),s("p",[t._v("在上图网络中，如果R1路由器检测到192.168.1.0/24网络出现故障，会自动删除该条路由条目，当其他路由器要通过R1路由器给192.168.1.0/24网络转发数据报时，就会产生路由环路")]),t._v(" "),s("p",[s("img",{attrs:{src:a(534),alt:"image-20240301152811824"}})]),t._v(" "),s("p",[t._v("该问题也可通过人工配置黑洞路由解决")]),t._v(" "),s("p",[s("img",{attrs:{src:a(535),alt:"image-20240301152932253"}})]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("路由条目的类型：")]),t._v(" "),s("ul",[s("li",[t._v("直连网络")]),t._v(" "),s("li",[t._v("静态路由")]),t._v(" "),s("li",[t._v("动态路由")])]),t._v(" "),s("p",[t._v("特殊的静态路由条目：")]),t._v(" "),s("ul",[s("li",[t._v("默认路由")]),t._v(" "),s("li",[t._v("特定主机路由")]),t._v(" "),s("li",[t._v("黑洞路由")])])])}),[],!1,null,null,null);s.default=_.exports}}]);