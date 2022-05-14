(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{515:function(a,t,r){"use strict";r.r(t);var e=r(31),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"ida调试技巧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ida调试技巧"}},[a._v("#")]),a._v(" ida调试技巧")]),a._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#常规调试"}},[a._v("常规调试")]),r("ul",[r("li",[r("a",{attrs:{href:"#ida-server"}},[a._v("ida server")])]),r("li",[r("a",{attrs:{href:"#ida启动调试"}},[a._v("ida启动调试")])])])]),r("li",[r("a",{attrs:{href:"#特殊-gdb-server"}},[a._v("特殊：gdb server")]),r("ul",[r("li",[r("a",{attrs:{href:"#启动一个gdb-server"}},[a._v("启动一个gdb server")])]),r("li",[r("a",{attrs:{href:"#在ida中设置"}},[a._v("在ida中设置")])]),r("li",[r("a",{attrs:{href:"#断点的设置"}},[a._v("断点的设置")])]),r("li",[r("a",{attrs:{href:"#手动设置信息"}},[a._v("手动设置信息")])])])]),r("li",[r("a",{attrs:{href:"#调试技巧"}},[a._v("调试技巧")])]),r("li",[r("a",{attrs:{href:"#idapython-辅助调试"}},[a._v("idapython 辅助调试")])])])]),r("p"),a._v(" "),r("p",[a._v("参考："),r("a",{attrs:{href:"https://www.hex-rays.com/products/ida/debugger/#details",target:"_blank",rel:"noopener noreferrer"}},[a._v("ida调试器概述"),r("OutboundLink")],1)]),a._v(" "),r("h2",{attrs:{id:"常规调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常规调试"}},[a._v("#")]),a._v(" 常规调试")]),a._v(" "),r("p",[a._v("win或linux下x86的文件，一般使用ida远程动态调试，")]),a._v(" "),r("blockquote",[r("p",[a._v("其实ida支持本地调试，但是以前的ida7.0泄漏版本存在bug，这个功能会直接导致ida崩溃，新的7.5泄漏版本不清楚，而且我一直是在wine下运行，就一直使用远程调试。")])]),a._v(" "),r("h3",{attrs:{id:"ida-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ida-server"}},[a._v("#")]),a._v(" ida server")]),a._v(" "),r("p",[a._v("这里其实比较简单，首先保证获取远程机器的ip, 并且可以检查下是否可以ping通。")]),a._v(" "),r("blockquote",[r("p",[a._v("一般本地运行的可以127.0.0.1")]),a._v(" "),r("p",[a._v("远程ip： linux下使用"),r("code",[a._v("ifconfig")]),a._v("指令，win下使用"),r("code",[a._v("ipconfig")]),a._v("指令")])]),a._v(" "),r("p",[a._v("然后将对应的文件在对应机器运行即可，会自动监听默认端口，")]),a._v(" "),r("blockquote",[r("p",[a._v("ida目前支持的这种调试方式， 即在"),r("code",[a._v("$ida_dir/dbgsrv")]),a._v("目录下对应文件")]),a._v(" "),r("p",[a._v("Intel构架： windows linux macos， 32位 64位，")]),a._v(" "),r("p",[a._v("安卓： arm 32位/64位，intel 32/64,")]),a._v(" "),r("p",[a._v("armlinux: 32位，")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/04/05/rXAFiQxDgaleOU8.png",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"ida启动调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ida启动调试"}},[a._v("#")]),a._v(" ida启动调试")]),a._v(" "),r("p",[a._v("首先在下拉菜单选择remote ... debug，然后点击启动，设置ip和端口即可，")]),a._v(" "),r("blockquote",[r("p",[a._v("我这里是本地linux运行的server，于是是"),r("code",[a._v("127.0.0.1")]),a._v("，")])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/04/05/IOSAzpQ2YLh6o9i.png",alt:""}})]),a._v(" "),r("h2",{attrs:{id:"特殊-gdb-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特殊-gdb-server"}},[a._v("#")]),a._v(" 特殊：gdb server")]),a._v(" "),r("p",[a._v("ida可以使用gdb的server,")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/04/05/OxsNn2dTSHjmBkW.png",alt:""}})]),a._v(" "),r("p",[a._v("于是可以通过vmware进行linux或windows的内核调试，或通过qemu实现特殊构架的文件的调试，")]),a._v(" "),r("p",[a._v("这里展示一种通过qemu进行调试的方案：")]),a._v(" "),r("h3",{attrs:{id:"启动一个gdb-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动一个gdb-server"}},[a._v("#")]),a._v(" 启动一个gdb server")]),a._v(" "),r("p",[a._v("一般的文件可以通过"),r("code",[a._v("gdbserver")]),a._v("来启动，"),r("code",[a._v("qemu")]),a._v("通过"),r("code",[a._v("-g 端口")]),a._v("来开启一个gdbserver,")]),a._v(" "),r("p",[a._v("然后这时候其实可以使用gdb进行远程调试，但是这里我们使用ida,")]),a._v(" "),r("h3",{attrs:{id:"在ida中设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在ida中设置"}},[a._v("#")]),a._v(" 在ida中设置")]),a._v(" "),r("p",[a._v("首先选择"),r("code",[a._v("remote gdb debugger")]),a._v("，")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/04/05/PirkAqB6HcMERzY.png",alt:""}})]),a._v(" "),r("p",[a._v("然后启动对应的server, 点击运行或者快捷键f9, 设置ip和端口号进入调试状态，")]),a._v(" "),r("h3",{attrs:{id:"断点的设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#断点的设置"}},[a._v("#")]),a._v(" 断点的设置")]),a._v(" "),r("p",[a._v("这种运行方式，一般来说直接在文件下好断点以后，ida调试状态的地址和文件的地址不会进行映射，我们其实是无法下断点的，")]),a._v(" "),r("p",[a._v("但是这种调试状态下地址不会变， 我们找到调试状态下的main函数，然后下一次断点即可，")]),a._v(" "),r("p",[a._v("而且这种gdbserver, 一般开始运行以后，会直接在ld的入口部分停下，然后等待调试器连接，这是一种开始运行的调试，并不是附加调试，即，我们每次开始进入调试的时候其实是在ld文件开始运行的时候，于是慢慢找到main函数位置，然后就是普通的调试状态了，")]),a._v(" "),r("h3",{attrs:{id:"手动设置信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#手动设置信息"}},[a._v("#")]),a._v(" 手动设置信息")]),a._v(" "),r("p",[a._v("如果是非常规的cpu构架，载入文件的话ida会识别出来，并设置好debug状态的构架，")]),a._v(" "),r("p",[a._v("如果没有载入文件的话，则要进行手动设置，主要就是设置对应的cpu架构：")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/04/05/pezKVTsQwuvMaRJ.png",alt:""}})]),a._v(" "),r("p",[a._v("另一个点是ida本身对于调试时可访问的内存有一个默认范围，")]),a._v(" "),r("p",[a._v("使用"),r("a",{attrs:{href:"https://www.hex-rays.com/products/ida/support/idadoc/1697.shtml",target:"_blank",rel:"noopener noreferrer"}},[a._v("gdbserver的时候却不会在意到这个范围"),r("OutboundLink")],1),a._v("，可能存在程序在访问某个地址而ida调试器不能访问这个内存的问题， 这里可能需要手动调整这个访问内存的范围：")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2021/04/05/oBWYHVJv4tOMlI8.png",alt:""}})]),a._v(" "),r("h2",{attrs:{id:"调试技巧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#调试技巧"}},[a._v("#")]),a._v(" 调试技巧")]),a._v(" "),r("p",[a._v("ida调试器使用， f2：下断点，f7：单步步入， f8：单步步过，f9：执行/开始执行，")]),a._v(" "),r("p",[a._v("然后对于某些在main函数之前进行检查的反调试，可以使用attach来过掉，")]),a._v(" "),r("h2",{attrs:{id:"idapython-辅助调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#idapython-辅助调试"}},[a._v("#")]),a._v(" idapython 辅助调试")]),a._v(" "),r("p",[a._v("这一部分在idapython中写了。")])])}),[],!1,null,null,null);t.default=v.exports}}]);