(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{540:function(s,t,a){"use strict";a.r(t);var n=a(31),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("@[toc]")]),s._v(" "),a("blockquote",[a("p",[s._v("一个   调了好久好久的虚拟机题目")]),s._v(" "),a("p",[s._v("原本比赛的时候是上午做了个pyc， 下午开始调vm， 调到结束也没弄出来个道道，tcl， 就开始等待大佬们的wp， 好几天过去， 似乎没有？？？")]),s._v(" "),a("p",[s._v("走投无路的菜鸡只好自己慢慢逆， 然后写下这个题目的wp。 欢迎围观")]),s._v(" "),a("p",[s._v("虎符ctf， vm题目， 个人觉得一个比较不错的虚拟机，指令好多，不太好调。")]),s._v(" "),a("p",[s._v("几个简单的虚拟机题目， "),a("a",{attrs:{href:"https://lingze.xyz/20/02/vm-reverse-easy/",target:"_blank",rel:"noopener noreferrer"}},[s._v("我的博客有一个整理"),a("OutboundLink")],1),s._v("， 对应的文件应该是在里面有，没有的话，博客主页转csdn里对应文章肯定有(这，是个历史遗留问题...)")])]),s._v(" "),a("p",[s._v("似乎也没怎么找到比较好的方法，对于虚拟机的题目，就看虚拟机指令然后去还原， 再逆吧，不过发现还是要注意下栈堆机器和寄存器机器是不一样，")]),s._v(" "),a("p",[s._v('这个题目给出的就是一个栈堆机器，所以里面有的处理栈的指令，用了python字节码去标注，(第一题："没想到吧！还是我。")，')]),s._v(" "),a("h1",{attrs:{id:"vm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm"}},[s._v("#")]),s._v(" vm")]),s._v(" "),a("p",[s._v("首先题目的main函数比较简单：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020042416295472.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("注意下打开文件是用的参数。即运行时要指定参数"),a("code",[s._v("./vm code")]),s._v(" ， ida调试要在"),a("code",[s._v("debugger -> process options -> parameters")]),s._v("写上参数"),a("code",[s._v("code")]),s._v(",")]),s._v(" "),a("p",[s._v("重点在于函数"),a("code",[s._v("vm(code)")]),s._v(":")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200424163009277.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("比较典型的一个"),a("code",[s._v("while(1)")]),s._v("和"),a("code",[s._v("switch(opcode)")]),s._v("的结构做的虚拟机，")]),s._v(" "),a("p",[s._v("然后运行的大体情况， 如下示：")]),s._v(" "),a("blockquote",[a("p",[s._v("对于详细的可以看附件中的"),a("code",[s._v("code.py")]),s._v("文件， 本文简单写下data架构体和opcode， 和一部分循环的结构。")])]),s._v(" "),a("h2",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[s._v("#")]),s._v(" data")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bss"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00000000006020")]),s._v("A0   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bss_data \nbss_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tDword vm_eip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tDword vm_sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tQword code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// *(bss_data+1)")]),s._v("\n\tQword vm_stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// *(bss_data+2)")]),s._v("\n\tQword vm_var_arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//*(bss_data+3)")]),s._v("\n\tQword vm_reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// *(bss_data+4)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("一个bss段的一个结构体， 主要我们运行的时候储存信息：")]),s._v(" "),a("p",[s._v("vm_eip一个数字， 代表偏移量，使用这个配合code地址检索到opcode，"),a("code",[s._v("opcode = *(&code + vm_eip)")]),s._v("，")]),s._v(" "),a("p",[s._v("vm_sp： 代表栈内数据数目，也配合栈地址形成指向栈顶的指针，")]),s._v(" "),a("p",[s._v("code： 这个就是储存code， 没啥要说的，")]),s._v(" "),a("p",[s._v("vm_stack： 这个是这个栈堆机器操作的栈，")]),s._v(" "),a("p",[s._v("vm_arr： 一片内存空间，主要用于储存三个数组， 一个预定义好了的arr1(在50-91)， 一个用户输入的arr2(在100-141)， 一个由arr2处理成的arr3(在0-41)，对arr的处理是重点")]),s._v(" "),a("p",[s._v("vm_block： 这个储存另一部分数据，主要是用于储存循环时的计数器，是一个python解释器中block_stack的地位，")]),s._v(" "),a("h2",{attrs:{id:"opcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opcode"}},[s._v("#")]),s._v(" opcode")]),s._v(" "),a("p",[s._v("记录下用到了的 一些指令， 格式， 简单的标记：")]),s._v(" "),a("ul",[a("li",[s._v("基础的对栈的操作")])]),s._v(" "),a("p",[s._v("opcode(0x1) ==> 0x1, ==>  "),a("code",[s._v("push input")]),s._v("， 接收一个用户输入字节并压入栈中，")]),s._v(" "),a("p",[s._v("opcode(0x4)  ==>  0x4, var, ==> "),a("code",[s._v("push var;")])]),s._v(" "),a("p",[s._v("opcode(0x7) ==> 0x7, index, ==> "),a("code",[s._v("push vm_arr[index]")]),s._v(",")]),s._v(" "),a("p",[s._v("opcode(0x5) ==> 0x5, index, ==> "),a("code",[s._v("push vm_block[index]")])]),s._v(" "),a("p",[s._v("opcode(0x12) ==> 0x12, ==> "),a("code",[s._v("vm_stack[vm_sp] = ~vm_stack[vm_sp]")]),s._v(" 对栈顶数值取反。")]),s._v(" "),a("p",[s._v("opcode(0x19) ==> 0x19, ==> "),a("code",[s._v("vm_stack[vm_sp-1] = vm_arr[vm_stack[vm_sp-1]]")]),s._v("，")]),s._v(" "),a("ul",[a("li",[s._v("运算,  这里标记使用了python字节码的标记，基本是弹出栈顶两个，运算后压栈，")])]),s._v(" "),a("p",[s._v("opcode(9)      ==>  9   ==> binary_add  加法 +")]),s._v(" "),a("p",[s._v("opcode(0xa) ==> 0xa ==> binary_subtract 减法 -")]),s._v(" "),a("p",[s._v("opcode(0xb) ==> 0xb  ==> binary_multiply乘法 ×")]),s._v(" "),a("p",[s._v("opcode(0xd) ==> 0xd ==> binary_modulo 取余 %")]),s._v(" "),a("p",[s._v("opcode(0xf)   ==> 0xf  ==> binary_and  按位与 &")]),s._v(" "),a("p",[s._v("opcode(0x10) ==> 0x10 ==> binary_or   按位或 |")]),s._v(" "),a("ul",[a("li",[s._v("判断和跳转：")])]),s._v(" "),a("p",[s._v("opcode(0x1d) ==> 0x1d, tar,  ==>"),a("code",[s._v("jump $+tar")]),s._v("， 直接跳转到参数指定的位置，但是要注意，有时候这个参数其实是负数， 回跳，形成一个循环结构。")]),s._v(" "),a("p",[s._v("剩下几个都是，判断栈顶两个值，决定是否跳转到参数指定的位置，")]),s._v(" "),a("p",[s._v("opcode(0x18) ==> 0x18, tar, ==> "),a("code",[s._v("if vm_stack[vm_sp] < vm_stack[vm_sp-1]: jump $+tar")]),s._v("，")]),s._v(" "),a("p",[s._v("opcode(0x16) ==> 0x16, tar, ==> "),a("code",[s._v("if vm_stack[vm_sp] > vm_stack[vm_sp-1]:\tjump $+tar")]),s._v("，")]),s._v(" "),a("p",[s._v("opcode(0x14) ==> 0x14, tar, ==> "),a("code",[s._v("if vm_stack[vm_sp] == vm_stack[vm_sp-1]:\tjump $+tar")]),s._v(",")]),s._v(" "),a("ul",[a("li",[s._v("对于数组的操作：( 这个可是重点)")])]),s._v(" "),a("p",[s._v("opcode(8) ==>  8, index,   ==> "),a("code",[s._v("vm_arr[index] = vm_stack[sp];")])]),s._v(" "),a("p",[s._v("opcode(0x1a) ==> 0x1a, ==> "),a("code",[s._v("vm_arr[vm_stack[vm_sp]] = vm_stack[vm_sp-1]")])]),s._v(" "),a("ul",[a("li",[s._v("对于block的操作， 和和循环相关:")])]),s._v(" "),a("p",[s._v("opcode(0x5) ==> 0x5, index, ==> "),a("code",[s._v("push vm_block[index]")])]),s._v(" "),a("p",[s._v("opcode(0x6) ==> 0x6, ==> "),a("code",[s._v("vm_block[var] = vm_stack[vm_sp]")])]),s._v(" "),a("p",[s._v("opcode(0x1c) ==> 0x1c, ==> "),a("code",[s._v("vm_block[vm_stack[vm_sp]] = vm_stack[vm_sp-1]")])]),s._v(" "),a("ul",[a("li",[s._v("io")])]),s._v(" "),a("p",[s._v("opcode(0x2) ==> 0x2, ==> "),a("code",[s._v("print vm_stack[vm_sp]")]),s._v("打印栈顶的数值对应字符。")]),s._v(" "),a("p",[s._v("opcode(0x1) ==> 0x1, ==>  "),a("code",[s._v("push input")]),s._v("， 接收一个用户输入字节并压入栈中，")]),s._v(" "),a("h2",{attrs:{id:"一些结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些结构"}},[s._v("#")]),s._v(" 一些结构")]),s._v(" "),a("p",[s._v("其中的语句构成一些结构，我们需要注意，")]),s._v(" "),a("ul",[a("li",[s._v("0x1/0x4  + 0x8")])]),s._v(" "),a("p",[s._v("压栈，然后将栈顶弹出到arr中，其实就相当于是向arr里面赋值，一开始大片的"),a("code",[s._v("0x4 -0x8")]),s._v(" 是赋值arr1, 接着就是"),a("code",[s._v("0x1-0x8")]),s._v("是设置好arr2,")]),s._v(" "),a("ul",[a("li",[s._v("0x4-0x6, 0x5-0x4-0x16:")])]),s._v(" "),a("p",[s._v("0x4-0x6是这是block的值，0x5-0x4-0x16是判断block里的值和0x4参数的大小， 出现过三次，都是循环的开头部分，")]),s._v(" "),a("ul",[a("li",[s._v("0x1D")])]),s._v(" "),a("p",[s._v("0x1d 后面的参数有负数的情况，其实就是相当于减法，回跳，一般配合前面这个0x5-0x4-0x16，形成一个循环结构，")]),s._v(" "),a("h1",{attrs:{id:"还原"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#还原"}},[s._v("#")]),s._v(" 还原")]),s._v(" "),a("p",[s._v("最后可以得到的还原出来大致是：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200424163026895.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dsel9sY180,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("该文件在附件中，在附件中有，")]),s._v(" "),a("blockquote",[a("p",[s._v("可以点下右侧那个箭头，展开代码块， 里面是比较详细的标注和对应的opcode，")])]),s._v(" "),a("h2",{attrs:{id:"逆向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逆向"}},[s._v("#")]),s._v(" 逆向")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("arr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("253")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("85")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("144")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("87")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("246")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("177")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("129")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("253")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("161")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("143")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("206")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("119")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("232")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("158")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("165")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("189")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("219")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("164")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\narr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("\narr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" arr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nflag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\tarr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" arr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x6b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" arr1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t\t\tarr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" j\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\tflag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("chr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("注：")]),s._v(" "),a("p",[s._v("那个 var * 0x6b 的位置可以print下， 爆破每个都是只爆破出来一个数，直接爆破即可。")]),s._v(" "),a("p",[s._v("设置了另一个arr的原因是，"),a("code",[s._v("arr1[i] - arr1[i-1]")]),s._v("， 减的时候"),a("code",[s._v("arr[i-1]")]),s._v("已经是"),a("code",[s._v("arr[i]*0x6b")]),s._v("处理了， 要逆得倒着写， 写了下没成功，弄起来感觉有点麻烦(其实是菜)，直接设置另一个就直接用就好了 (看起来就比较优雅)。")]),s._v(" "),a("p",[s._v("然后后面的那个异或是对于前面那个花里胡稍的操作， 其实就是个异或关系，即"),a("code",[s._v("a ^ b = (~a & b) | (a & ~b)")]),s._v("，")]),s._v(" "),a("p",[s._v("然后得到flag：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200424163044244.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("blockquote",[a("p",[s._v("最后")]),s._v(" "),a("p",[s._v("附件中是整个的压缩包，题目的bin和code文件，一个solver.py文件，code.py是代码还原的文件，里面注释还是比较多，")]),s._v(" "),a("p",[s._v("剩下还有一堆vm.*是...ida分析的文件，emmmm   manjaro-kde的wine跑ida， 因为qt的原因会在打包的时候ida卡死崩溃， 又一个历史遗留问题？ 还没找到啥办法，(好丢人)，\n"),a("a",{attrs:{href:"https://www.jianguoyun.com/p/DdNVcoMQx8KuCBjMr5ID",target:"_blank",rel:"noopener noreferrer"}},[s._v("附件"),a("OutboundLink")],1),s._v(" (访问密码：H4aGka)")])])])}),[],!1,null,null,null);t.default=r.exports}}]);