#### CSS盒子模型是什么？有什么？

我们在css中常听说内边距，外边距，边框等概念，CSS盒模型都具备这些属性，顾名思义，盒模型和我们日常生活中的盒子一样，有自己的高度宽度，边框，大小等，还有盒子的样式等，是一个承载器物的工具。

CSS盒模型分为标准盒模型和怪异盒模型（IE专用）

先来看标准盒模型

![](C:\Users\hp\Pictures\截图\标准盒模型.jpg)

在标准盒模型中，width = content.width,也就是内容区的宽度，height = content.height.

![](C:\Users\hp\Pictures\截图\IE盒模型.jpg)

而在怪异盒模型中width = content.width + 2*padding.width + 2*border.width

同样的高度也是

在CSS3里面提出了设置俩种盒模型的方法box-sizing

```
/* 标准盒模型 /*
box-sizing:content-box;
/* 怪异盒模型/*
box-sizing:border-box;
```



