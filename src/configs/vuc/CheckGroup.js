import { createItems, getSizeEditor } from '../utils';

export default {
  id: 'CheckboxGroup',
  name: '下拉框组',
  eventTypes: [],
  type: ['input', 'checkbox-group'],
  props: {
    value: {
      label: '默认值',
      editors: 'text',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
  },

  optionEditor: {
    tag: 'Checkbox',
    getData(node) {
      return {
        value: node.getAttr('label'),
        label: node.getText(),
      };
    },
    setData(node, data) {
      node.setAttr('label', data.value);
      node.replaceText(data.label);
    },
  },

  vucProxyOption: {
    onBeforeRender(vucNode, context) {
      vucNode.dfs(node => {
        context.cancelOutline(node);
      });
    },
  },

};
