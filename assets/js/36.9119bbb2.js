(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{321:function(v,_,t){v.exports=t.p+"assets/img/image-20231209142452237.200bc1ba.png"},322:function(v,_,t){v.exports=t.p+"assets/img/image-20231209145214847.9b38e97c.png"},450:function(v,_,t){"use strict";t.r(_);var o=t(14),r=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"信道的极限容量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#信道的极限容量"}},[v._v("#")]),v._v(" 信道的极限容量")]),v._v(" "),_("img",{staticStyle:{zoom:"67%"},attrs:{src:t(321),alt:"image-20231209142452237"}}),v._v(" "),_("p",[v._v("再通信质量差的信道，信号波形失去了码元之间的清晰界限，这种现象叫做"),_("font",{attrs:{color:"#8600FF"}},[v._v("码间串扰")])],1),v._v(" "),_("p",[v._v("产生失真的主要原因：")]),v._v(" "),_("ul",[_("li",[v._v("码元传输速率")]),v._v(" "),_("li",[v._v("信号传输距离")]),v._v(" "),_("li",[v._v("噪声干扰")]),v._v(" "),_("li",[v._v("传输媒体质量")])]),v._v(" "),_("p",[v._v("在 1924 年，内奎斯特就推导出了著名的"),_("font",{attrs:{color:"#8600FF"}},[v._v("奈氏准则")]),v._v("： 在假定的理想条件下，"),_("font",{attrs:{color:"#EA0000"}},[v._v("为了避免码间串扰，码元传输速率是有上限的")]),v._v("。")],1),v._v(" "),_("p",[v._v("理想低通信道的最高码元的传输速率：2W 码元/秒")]),v._v(" "),_("p",[v._v("理想带通信道的最高码元的传输速率：1W 码元/秒")]),v._v(" "),_("p",[v._v("W：信道带宽（单位为 Hz）")]),v._v(" "),_("ul",[_("li",[v._v("码元传输速率又称为波特率，调制速率、波形速率或符号速率，它与比特率有一定关系：\n"),_("ul",[_("li",[v._v("当一个码元只携带 1 比特的信息量时，则波特率（码元/秒）与比特率（比特/秒）在数值上是相等的")]),v._v(" "),_("li",[v._v("当一个码元携带 n 比特的信息量时，波特率转换成比特率时，数值要乘以 n")])])]),v._v(" "),_("li",[v._v("要提高信息传输速率（比特率），就必要设法使"),_("font",{attrs:{color:"#EA0000"}},[v._v("每一个码元能携带更多比特")]),v._v("的信息量，这就需要采用"),_("font",{attrs:{color:"#8600FF"}},[v._v("多元制")]),v._v("（混合调制，而非简单的二元调制）")],1),v._v(" "),_("li",[v._v("实际的信道所能传输的最高码元速率，要明显低于奈氏准则给出的这个上限数值。（因为奈氏是基于理想条件推导的，未考虑其他因素：传输距离、噪声干扰、传输媒体质量等）")])]),v._v(" "),_("p",[v._v("那么，是否只要采用更好的调制方法，让码元可以携带更多的比特，岂不是可以无限制地提高信息的传输速率？")]),v._v(" "),_("p",[v._v("答案是否定的，因为信道的"),_("font",{attrs:{color:"#8600FF"}},[v._v("极限信息传输速率")]),v._v("还要"),_("font",{attrs:{color:"#EA0000"}},[v._v("受限于")]),v._v("实际信号在信道中传输时的"),_("font",{attrs:{color:"#8600FF"}},[v._v("信噪比")])],1),v._v(" "),_("p",[v._v("1948 年，香农公式提出：带宽受限且有高斯白噪声干扰的信道的极限信息传输速率")]),v._v(" "),_("p",[_("img",{attrs:{src:t(322),alt:"image-20231209145214847"}})]),v._v(" "),_("p",[v._v("C：信道的极限信息传输速率（b/s）")]),v._v(" "),_("p",[v._v("W：信道带宽（Hz）")]),v._v(" "),_("p",[v._v("S：信道内所传信号的平均功率")]),v._v(" "),_("p",[v._v("N：信道内的高斯噪声功率")]),v._v(" "),_("p",[v._v("S/N：信噪比，使用分贝作为度量单位")]),v._v(" "),_("p",[v._v("从公式中可以看出：")]),v._v(" "),_("ul",[_("li",[v._v("信道带宽或信道中信噪比越大，信息的极限传输速录越高")]),v._v(" "),_("li",[v._v("在实际信道上能够达到的信息传输速率要比该公式的极限传输速率低不少，这是因为在实际信道中，信号还要受到其他一些损伤，如各种脉冲干扰，信号在传输中的衰减和失真等，这些因素在香农公式中并未考虑。")])]),v._v(" "),_("h5",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结：")]),v._v(" "),_("ul",[_("li",[v._v("在信道带宽一定的情况下，根据奈氏准则和香农公式，要"),_("font",{attrs:{color:"#EA0000"}},[v._v("提高信息的传输速率")]),v._v("就必须采用"),_("font",{attrs:{color:"#EA0000"}},[v._v("多元制")]),v._v("和努力"),_("font",{attrs:{color:"#EA0000"}},[v._v("提高信道中的信噪比")]),v._v("。")],1),v._v(" "),_("li",[v._v("自从香农公式发表后，各种新的"),_("font",{attrs:{color:"#8600FF"}},[v._v("信号处理")]),v._v("和"),_("font",{attrs:{color:"#8600FF"}},[v._v("调制方法")]),v._v("就不断出现，其目的都是为了尽可能地接近香农公式给出的传输速率极限。")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);