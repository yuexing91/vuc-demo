export default {
  id: 'Icon',
  name: '图标',
  eventTypes: [],
  type: ['Icon'],
  props: {
    type: {
      label: '类型',
      editors: 'icon',
    },
    size: {
      label: '大小',
      editors: 'number',
      help: '图标的大小，单位是 px',
    },
    color: {
      label: '颜色',
      editors: 'color',
    },
    custom: {
      label: '自定义图标',
      editors: 'text',
    },
  },
};
