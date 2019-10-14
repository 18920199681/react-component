
### 一些比较实用的工具及组件，纯属个人娱乐

## <ListItem {...params} />

  label: 第一行
  subTitle: 第二行
  headerIcon: 缩略图
  
  rightEle: 列表右侧内容，值为'check'时为多选框图标，否则为用户自定义内容
      check: 多选框未选中状态图标
      checked: 多选框已选中状态图标
  
  onChange: 获取选中栏的信息，参数自定义
 

## <Picker {...params} />

  hasTask: 是否显示蒙层，默认为true
  onTaskHide: 点击蒙层是否关闭，默认为true
  title: 标题
  visible: 显示隐藏
  cancelText: 取消按钮文本
  okText: 确认按钮文本
  onCancel: 点击取消按钮
  onOk: 点击确认按钮,包含两个参数：
      item: 已选中列表项信息；
      index: 下标
  
  list: 列表
      label: 第一行
      subTitle: 第二行
      headerIcon: 缩略图
  
  rightEle: 列表右侧内容，值为'check'时为多选框图标，否则为用户自定义内容
      check: 多选框未选中状态图标
      checked: 多选框已选中状态图标
  
  onChange: 选中列表项,包含两个参数：
      item: 已选中列表项信息；
      index: 下标
  
  item: 当前选中列表项的信息
  index: 当前选中的下标
  
  addBox: 添加列表项预留位


## 号码脱敏 formatNumber(number, after, before, replace);
  
  number: 要脱敏的号码
  after: 后面保留的位数
  before: 前面保留的位数(非必传, 不传则仅保留后面位数)
  replace: 中间替换的字符串(非必传, 不传则仅保留后面位数)
  
  使用示例: formatNumber('86-18920199681', 4, 3, '****');
           结果为: 86-189****9681
  
           formatNumber('18920199681', 4, 3, '****');
           结果为: 189****9681
  
           formatNumber('18920199681', 4, 3);
           结果为: 189****9681
  
           formatNumber('18920199681', 4);
           结果为: 9681
  
           formatNumber('18920199681');
           结果为: 1892****9681
  

## 去掉字符串前后空格 formatTrim(val, type)

  去掉字符串前后空格
  
  val: 传入一个字符串
  type: 如果type为'toUpper',则去掉字符串前后空格并转为大写

