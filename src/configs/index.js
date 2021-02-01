const vucConfigs = require.context(
  // 其组件目录的相对路径
  './vuc',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/,
);

const comboConfigs = require.context(
  // 其组件目录的相对路径
  './combo',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/,
);

function getConfigs(configs) {
  return configs.keys().map(fileName => {
    return configs(fileName).default;
  });
}

import icons from './Icon';

export default {
  install(Designer) {
    getConfigs(vucConfigs).map(Designer.setVucConfig);
    getConfigs(comboConfigs).map(Designer.registerComboTemplate);
    Designer.setConfig('iconEditor', {
      className: 'ivu-icon',
      icons,
    });
  },
};
