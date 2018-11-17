- TodoMVC需要实现的功能需求。
  + 新增数据
        在输入框填写新增的值，按Enter键保存。
  + 删除数据
        点击删除“按钮x”删除选择数据
        点击右下角“clear complete”清空已complete的数据
     + 修改数据
        双击某行数据时切换到输入框状态并且自动获得焦点。
        按“Enter”键或光标离开可以修改数据。
        思路:
        1. 在data出声明一个editingItem 代表修改中item项
        2. 双击label文本时 将双击那个元素的item 给 editingItem 然后再li处样式 editing类出来的条件就是点击的这个元素和 editingItem的值是否相同 相同就应用上 editing样式 即可修改
        3. 按下enter 或失去文本框焦点就 把editingItem给还原为null 为下次修改做准备
   3.1.4 浏览数据

 当list有值时，可以正常显示数据。
 左下角“item left”根据当前item数自动变化。
 点击下方的“all”“active”“complete”可以过滤list，并且a标签高亮自动能切换。
 勾选item可以切换“active”和“complete”样式。
 当item全选时，新增数据框左侧的“小箭头”高亮。
 点击新增数据框左侧的“小箭头”，可以全选或全不选item。
 进入首页时，新增输入框自动获得焦点。



原文：https://blog.csdn.net/weixin_39865737/article/details/80222625 
