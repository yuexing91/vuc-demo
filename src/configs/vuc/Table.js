export default {
  id: 'Table',
  name: '表格',
  eventTypes: [],
  type: ['table'],
  slots: [
    {
      slot: 'header',
      name: '表头',
      selector: '.ivu-card>.ivu-card-body',
    },
    {
      slot: 'footer',
      name: '页脚',
      selector: '.ivu-card>.ivu-card-head',
    },
    {
      slot: 'contextMenu',
      name: '右键菜单',
      selector: '.ivu-card>.ivu-card-extra',
    },
  ],
  props: {
    columns: {
      label: '表格列',
      editors: 'icon',
      help: '表格列的配置描述',
    },
    data: {
      label: '数据',
      editors: 'text',
      help: '显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例特定样式。',
    },
  },
};
