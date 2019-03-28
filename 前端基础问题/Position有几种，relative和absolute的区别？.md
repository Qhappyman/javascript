#### Position有几种，relative和absolute的区别？

Position有absolute（绝对定位），relative（相对定位），fixed（固定定位），static（静态定位，默认值），inherit（继承父元素）

relative相对于元素本身的位置进行定位，通过设置top，bottom等属性，而且元素不会脱离文档流，保留原有的位置。

absolute相对于包含块进行定位，也就是第一个position不是static的祖先元素，所以我们一般会制定一个元素作为包含块，设为absolute或relative。absolute定位的元素脱离文档流，所以元素原有的位置是空的。而且无论元素本身是块级元素还是行内元素，经过定位之后都是块级元素。

fixed就是单纯以窗口定位，且脱离文档流，生成一个新的块级元素，不管原来是块级还是行内，fixed定位后的元素不随窗口移动而改变位置

#### 包含块

1. 在HTML中，包含块分为根包含块和其他元素包含块。根元素的包含块叫做初始包含块，具体创建由客户端决定，初始根元素为html，但是有些浏览器为body，在大多数浏览器中，初始包含块是一个视窗大小的矩形。
2. 当定位为fixed时，则包含块由view（视口）创建；（根据window）
3. 当定位值为relative、static、或者没有设定定位，则包含块由最近的父元素或者祖先元素的内容边界构成；
4. 当定位position为absolute，则包含块由最近的relative、absolute、fixed创建的内边距区的边缘，如果没有定位的祖先元素，则包含块为初始包含块(view)，也就是客户端窗口；

