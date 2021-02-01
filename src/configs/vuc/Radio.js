import { getSizeEditor } from '../utils';

export default {
  id: 'Radio',
  name: '单选框',
  eventTypes: [],
  type: ['input', 'radio'],
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
  },

  vucEditorOption: {
    onBeforeSelectNode: false,
  },

  vucProxyOption: {
    textProxy: false,
  },
};
