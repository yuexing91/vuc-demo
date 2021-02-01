import { getSizeEditor } from '../utils';

export default {
  id: 'Checkbox',
  name: '复选框',
  eventTypes: [],
  type: ['input', 'checkbox'],
  props: {
    value: {
      label: '默认值',
      editors: 'text',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    trueValue: {
      label: '选中时的值',
      editors: 'text',
    },
    falseValue: {
      label: '未选中时的值',
      editors: 'text',
    },
  },

  vucEditorOption: {
    onBeforeSelectNode(vucNode) {
      return vucNode.parent.tag !== 'CheckboxGroup';
    },
  },

  vucProxyOption: {
    textProxy: false,
  },

};
