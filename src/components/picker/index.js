
/**
 * hasTask: 是否显示蒙层，默认为true
 * onTaskHide: 点击蒙层是否关闭，默认为true
 * title: 标题
 * visible: 显示隐藏
 * cancelText: 取消按钮文本
 * okText: 确认按钮文本
 * onCancel: 点击取消按钮
 * onOk: 点击确认按钮,包含一个参数，传递已选中列表项信息
 * 
 * list: 列表
 *      label: 第一行
 *      subTitle: 第二行
 *      headerIcon: 缩略图
 * 
 * rightEle: 列表右侧内容，值为'check'时为多选框图标，否则为用户自定义内容
 *      check: 多选框未选中状态图标
 *      checked: 多选框已选中状态图标
 * 
 * onChange: 选中列表项,包含两个参数：
 *        item: 已选中列表项信息；
 *        index: 下标
 * 
 * addBox: 添加列表项预留位
 * 
 */


import React, { Component } from 'react';
import classnames from 'classnames';
import ListItem from '../../components/listItem';
import { checkIcon, checkedIcon } from '../../img/index';


export default class Picker extends Component {

  static defaultProps = {
    prefixCls: 'rlb-picker',
    title: '标题',
    cancelText: '取消',
    okText: '确定',
    hasTask: true,
    onTaskHide: true,
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      item: {},
      index: '',
    }
  }

  componentWillReceiveProps(props) {
    this.state = {
      visible: props.visible
    }
  }

  onCancel() {
    const { onCancel } = this.props;

    this.setState({
      visible: false
    })

    { onCancel && onCancel() }
  }

  onOk() {
    const { onOk } = this.props;

    this.setState({
      visible: false
    })

    { onOk && onOk() }
  }

  onTask(e) {
    if (!this.props.onTaskHide) {
      return false;
    }

    if (e.target && e.target.className.indexOf('task') > 0) {
      this.setState({
        visible: false
      })
    }
  }

  onChange(item, index) {
    console.log(item, index);

    this.setState({
      index
    });
  }

  renderTitle() {
    const { prefixCls, title, cancelText, okText } = this.props;

    return (
      <div className={`${prefixCls}-body-title`}>
        <span onClick={() => this.onCancel()}>{cancelText}</span>
        <span>{title}</span>
        <span onClick={() => this.onOk()}>{okText}</span>
      </div>
    );
  }

  renderItemBox(item) {
    return (
      <div className='item-box'>
        {item.headerIcon && <img src={item.headerIcon} alt='header' />}
        <p>
          <span>{item.label}</span>
          {
            item.subTitle &&
            <span className='sub-title'>{item.subTitle}</span>
          }
        </p>
      </div>
    );
  }

  renderList() {
    const { prefixCls, list, addBox, rightEle, check, checked } = this.props;

    return (
      <div className={`${prefixCls}-body-list`}>

        {
          list.map((item, index) => {

            let eyeOpenIcon = checkIcon;

            if (index === this.state.index) {
              eyeOpenIcon = checkedIcon;
            }

            if (check && checked) {
              eyeOpenIcon = check;

              if (index === this.state.index) {
                eyeOpenIcon = checked;
              }
            }

            const itemOpt = {
              ...item,
              index,
              rightEle,
              eyeOpenIcon,
              onChange: () => { this.onChange(item, index) },
            }

            return (
              <ListItem key={String(index)} {...itemOpt} />
            );
          })
        }

        {addBox && addBox}
      </div>
    );
  }

  render() {
    const { hasTask, prefixCls } = this.props;

    let classNames = classnames(`${prefixCls}-box`, {
      task: hasTask,
      visible: this.state.visible
    })

    return (
      <div className={classNames} onClick={(e) => this.onTask(e)}>
        <div className={`${prefixCls}-body`}>
          {this.renderTitle()}
          {this.renderList()}
        </div>
      </div>
    );
  }
}
