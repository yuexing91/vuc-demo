import { createItems, getSizeEditor } from '../utils';

export default {
  id: 'RadioGroup',
  name: '单选框组',
  eventTypes: [],
  type: ['input', 'radio-group'],
  props: {
    value: {
      label: '默认值',
      editors: 'text',
    },
    type: {
      label: '按钮样式',
      editors: {
        type: 'select',
        props: {
          items: createItems(`button,:default`, ','),
        },
      },
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
    vertical: {
      label: '垂直排列',
      editors: 'boolean',
    },
  },

  optionEditor: {
    tag: 'Radio',
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

    extraAttrs(vucNode, contenxt) {

    },
  },

};
