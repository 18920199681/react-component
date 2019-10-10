
/**
 * label: 第一行
 * subTitle: 第二行
 * headerIcon: 缩略图
 * 
 * rightEle: 列表右侧内容，值为'check'时为多选框图标，否则为用户自定义内容
 *      check: 多选框未选中状态图标
 *      checked: 多选框已选中状态图标
 * 
 * onChange: 获取选中栏的信息，参数自定义
 * 
 */


import React, { Component } from 'react';


export default class ListItem extends Component {

  static defaultProps = {
    prefixCls: 'list-item',
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
    const { prefixCls, rightEle, eyeOpenIcon } = this.props;

    return (
      <div>
        {rightEle === 'check' && <img className={`${prefixCls}-item-eye-open-status`} src={eyeOpenIcon} alt='eye-open' />}
        {rightEle !== 'check' && rightEle}
      </div>
    )
  }

  render() {
    const { prefixCls, onChange } = this.props;

    return (
      <div className={`${prefixCls}-item`} onClick={() => onChange()}>
        {this.renderItemBox()}
        {this.renderRightEle()}
      </div>
    )
  }
}
