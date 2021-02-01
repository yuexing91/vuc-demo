export default {
  id: 'Collapse',
  name: '折叠面板',
  eventTypes: [],
  type: [''],
  slots: [{
    slot: 'default',
    name: '内容',
  }],
  props: {
    value: {
      label: '激活面板',
      editors: 'text',
      help: '当前激活的面板的名称',
    },
    accordion: {
      label: '手风琴',
      editors: 'boolean',
      help: '是否开启手风琴模式，开启后每次至多展开一个面板',
    },
    simple: {
      label: '简洁模式',
      editors: 'boolean',
      help: '是否开启简洁模式',
    },
  },
};
