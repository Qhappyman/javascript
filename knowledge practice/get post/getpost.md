## get post

1. get post都是基于TCP/IP，本质上没有区别，只是http制定了一些规则来运输数据

2. get发送一个TCP数据包，post发送俩个（因浏览器而异）

   - get:一次性发送httpheader与data
   - post：先发送header，等服务器响应100continue然后发送data，响应200ok
   - 理论上来说，post的包更具有保障性，不会出现太多的网络丢包

3. get从服务器获取数据，post向服务器发送数据

4. get的请求数据放到url部分，且不能超出限制（可能是2个字节），否则无效，post数据放在http消息主体中，且数据量较大

5. get数据可以保存在浏览器记录里，而post不会

6. get数据可被缓存，post数据可通过手动设置进行缓存

7. GET只允许 ASCII 字符。POST没有限制。也允许二进制数据 

8. get后退/刷新没什么影响，post则重新发送数据，比较麻烦

9. get书签可被收藏，post不可以，感觉并没有什么用

   综合以上的部分点，可以看出post还是要比get安全一点，毕竟人家不是裸奔，所以私密数据交换时候应该用post

   

   