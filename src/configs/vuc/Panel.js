export default {
  id: 'Panel',
  name: '面板',
  eventTypes: [],
  type: [''],
  slots: [
    {
      slot: 'default',
      name: '标题',
    },
    {
      slot: 'content',
      name: '内容',
    },
  ],
  props: {
    name: {
      label: '名称',
      editors: 'text',
      help: '当前面板的 name，与 Collapse的value对应，不填为索引值',
    },
    hideArrow: {
      label: '隐藏箭头',
      editors: 'boolean',
      help: '是否隐藏箭头',
    },
  },
};
