/**
 * 号码脱敏
 * 
 * formatNumber(number, after, before, replace);
 * 
 * number: 要脱敏的号码
 * after: 后面保留的位数
 * before: 前面保留的位数(非必传, 不传则仅保留后面位数)
 * replace: 中间替换的字符串(非必传, 不传则仅保留后面位数)
 * 
 * 使用示例: formatNumber('86-18920199681', 4, 3, '****');
 *          结果为: 86-189****9681
 * 
 *          formatNumber('18920199681', 4, 3, '****');
 *          结果为: 189****9681
 * 
 *          formatNumber('18920199681', 4, 3);
 *          结果为: 189****9681
 * 
 *          formatNumber('18920199681', 4);
 *          结果为: 9681
 * 
 *          formatNumber('18920199681');
 *          结果为: 1892****9681
 * 
 */

export function formatNumber(number, after, before, replace) {
  // 号码长度最少为8位
  let limitLength = 8;

  if (!number) {
    console.error('请为formatNumber()传入参数');
    return false;
  }

  if (String(number).length < limitLength) {
    console.error('formatNumber()中第一个参数长度不足');
    return false;
  }

  if (typeof (number) !== 'string' && String(number).indexOf('-') !== -1) {
    console.error('formatNumber()中第一个参数类型有误！');
    return false;
  }

  let newNumber = String(number);

  // 只有一个参数的情况下默认保留前四位，后四位，中间用四颗星代替
  if (!after) {
    return `${newNumber.substr(0, 4)}****${newNumber.substr(-4)}`;
  }

  // 区号不做脱敏
  if (number.indexOf('-') > 0) {
    let areaNo = number.split('-')[0];
    newNumber = number.split('-')[1];

    if (!replace) {
      if (!before) {
        return newNumber.substr(newNumber.length - after);
      }

      return `${areaNo}-${newNumber.substr(0, before)}****${newNumber.substr(-after)}`;
    }

    if (parseInt(newNumber)) {
      return `${areaNo}-${newNumber.substr(0, before)}${replace}${newNumber.substr(-after)}`;
    }
  }

  if (!replace) {
    if (!before) {
      return newNumber.substr(newNumber.length - after);
    }

    return `${newNumber.substr(0, before)}****${newNumber.substr(-after)}`;
  }

  if (parseInt(number)) {
    return `${newNumber.substr(0, before)}${replace}${newNumber.substr(-after)}`;
  }
}


/**
 * 去掉字符串前后空格
 * 
 * val: 传入一个字符串
 * type: 如果type为'toUpper',则去掉字符串前后空格并转为大写
 */

export function formatTrim(val, type) {
  if (type === 'toUpper') {
    return val.replace(/(^\s*)|(\s*$)/g, '').toUpperCase();
  }

  return val.replace(/(^\s*)|(\s*$)/g, '');
}
