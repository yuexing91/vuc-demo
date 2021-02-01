import { createItems, getSizeEditor } from '../utils';

export default {
  id: ['Select', 'i-select'],
  name: '选择框',
  eventTypes: [],
  type: ['input', 'select'],
  props: {
    value: {
      label: '默认值',
      editors: 'text',
    },
    multiple: {
      label: '多选',
      editors: 'boolean',
    },
    filterable: {
      label: '搜索',
      editors: 'boolean',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
    placeholder: {
      label: '占位文本	',
      editors: 'text',
    },
    clearable: {
      label: '清空按钮',
      editors: 'boolean',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    readonly: {
      label: '只读',
      editors: 'boolean',
    },
    prefix: {
      label: '头部图标',
      editors: 'icon',
    },
  },

  optionEditor: {
    tag: 'i-option',
    getData(node) {
      return {
        value: node.getAttr('value'),
        label: node.getAttr('label') || node.getText(),
      };
    },
    setData(node, data) {
      node.setAttr('value', data.value);
      if (node.hasAttr('label')) {
        node.setAttr('label', data.label);
      }else{
        node.replaceText(data.label)
      }
    },
  },

};
