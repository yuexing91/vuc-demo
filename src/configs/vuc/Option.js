export default {
  id: ['Option', 'i-option'],
  name: '选项',
  eventTypes: [],
  props: {
    value: {
      label: '默认值',
      editors: 'text',
    },
  },

  vucProxyOption: {
    textProxy: false,
  },

  vucEditorOption: {
    onBeforeSelectNode: false,
  },

};
