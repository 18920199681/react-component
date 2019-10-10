
/**
 * label: 第一行
 * subTitle: 第二行
 * headerIcon: 缩略图
 * 
 * rightEle: 列表右侧内容，值为'check'时为多选框图标，否则为用户自定义内容
 *      check: 多选框未选中状态图标
 *      checked: 多选框已选中状态图标
 * 
 * onChange: 选中列表项,包含两个参数：
 *        item: 已选中列表项信息;
 *        index: 下标
 * 
 */


import React, { Component } from 'react';
import { checkIcon, checkedIcon } from '../../img/index';


export default class ListItem extends Component {

  static defaultProps = {
    prefixCls: 'list-item',
  }

  constructor(props) {
    super(props);
    this.state = {
      index: '' 
    }
  }

  onClick(item, index) {
    console.log(item, index);

    this.setState({
      index,
    })
  }

  renderItemBox() {
    const { prefixCls, label, subTitle, headerIcon } = this.props;

    return (
      <div className={`${prefixCls}-item-box`}>
        {headerIcon && <img src={headerIcon} alt='header' />}
        <p>
          <span>{label}</span>
          <span className={`${prefixCls}-item-sub-title`}>{subTitle}</span>
        </p>
      </div>
    );
  }

  renderRightEle() {
    const { prefixCls, rightEle, check, checked, index } = this.props;

    let eyeOpenStatus = checkIcon;

    if (index === this.state.index) {
      eyeOpenStatus = checkedIcon;
    }

    if (check && checked) {
      eyeOpenStatus = check;

      if (index === this.state.index) {
        eyeOpenStatus = checked
      }
    }

    return (
      <div>
        {rightEle === 'check' && <img className={`${prefixCls}-item-eye-open-status`} src={eyeOpenStatus} alt='eye-open' />}
        {rightEle !== 'check' && rightEle}
      </div>
    )
  }

  render() {
    const { prefixCls, label, subTitle, index } = this.props;

    let item = {
      label,
      subTitle
    }

    return (
      <div className={`${prefixCls}-item`} onClick={() => this.onClick(item, index)}>
        {this.renderItemBox()}
        {this.renderRightEle()}
      </div>
    )
  }
}
