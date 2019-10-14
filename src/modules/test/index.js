import React, { Component } from 'react';
import Picker from '../../components/picker';
import testList from '../../utils/testList';
import { formatNumber } from '../../utils';
import { selectIcon, selectedIcon } from '../../img/index';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      item: {},
      index: ''
    }
  }

  selectBtn() {
    this.setState({
      visible: true
    });
  }

  onCancel() {
    console.log('cancel');
  }

  onOk(item, index) {
    console.log('ok', item, index);
  }

  changeItem(item, index) {
    this.setState({ item, index });

    // this.setState({
    //   visible: false
    // });
  }

  renderAddBox() {
    return (
      <div>添加银行卡</div>
    )
  }

  render() {
    const pickerOtp = {
      visible: this.state.visible,
      onCancel: (e) => this.onCancel(e),
      onOk: (item, index) => this.onOk(item, index),
      onChange: (item, index) => this.changeItem(item, index),
      list: testList,
      item: this.state.item,
      index: this.state.index,
      rightEle: 'check',
      check: selectIcon,
      checked: selectedIcon,
      addBox: this.renderAddBox(),
    }

    return (
      <div>
        <div className='select' onClick={() => this.selectBtn()}>请选择</div>

        <Picker {...pickerOtp} />
      </div>
    )
  }
}

export default Test;
