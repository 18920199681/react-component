import React, { Component } from 'react';
import Picker from '../../components/picker';
import testList from '../../utils/testList';
import { selectIcon, selectedIcon } from '../../img/index';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  selectBtn() {
    this.setState({
      visible: true,
    })
  }

  onCancel() {
    console.log('cancel');
  }

  onOk() {
    console.log('ok');
  }

  // changeItem(e) {
  //   console.log('onChange', e);
  // }

  renderAddBox() {
    return (
      <div>添加银行卡</div>
    )
  }

  render() {
    const pickerOtp = {
      visible: this.state.visible,
      onCancel: (e) => this.onCancel(e),
      onOk: (e) => this.onOk(e),
      onChange: (e) => this.changeItem(e),
      list: testList,
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
