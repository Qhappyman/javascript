#### display的几个属性及其区别？

display的属性很多，具体见[display](http://www.w3school.com.cn/jsref/prop_style_display.asp)

最常用的方法弄呢，block，none，inline，inline-block

none：此元素不会被显示 

inline：默认。此元素会被显示为内联元素，元素前后没有换行符。设置width,height,margin-top,margin- bottom,padding-top,padding-bottom无效； 内联元素不能设置宽高，但这也不是绝对的。html标签中有部分标签，例如：<span/>、<a>、<em>、<img>、<input>、<label>等等都是内联元素，默认display属性均为inline，但是<img>、<input>标签的元素却可以设置宽高！因为它有内在尺寸，所以具有width和height，可以设定。

block： 此元素将显示为块级元素，此元素前后会带有换行符。 块状元素可以设置宽高。 html标签中有部分标签，例如：<div>、<p>、<ol>等等，其display属性默认为block 

inline-block:行内块元素，结合了inline、block的特点，此元素前后没有换行符，可以设置宽高 .

#### display:none与visibility:hidden的区别?

display与visiblilty都是设置元素的显式方法，使用display: none;的元素在隐藏后不会占用原来的页面空间。 其他元素可以占用用这个位置。

使用visibility：hidden的元素隐藏后占用原来的空间，只是对用户来说是透明的，会影响其他元素的位置。

使用visibility属性设置元素的隐藏属性，并不能减少打开网页的速度，因为这个元素总是会随着页面一起下载。而通过display属性设置的却不一样，该元素相当于在页面中不存在，因此能够**缩短**页面加载时间。 

