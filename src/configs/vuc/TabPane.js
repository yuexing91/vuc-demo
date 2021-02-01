export default {
  id: 'TabPane',
  name: '选项卡',
  eventTypes: [],
  type: [''],
  slots:  [
    {
      slot: 'default',
      name: '内容',
    },
  ],
  props: {
    name: {
      label: '名称',
      editors: 'text',
      help: '用于标识当前面板，对应 value，默认为其索引值',
    },
    label: {
      label: '卡头文字',
      editors: 'text',
      help: '选项卡头显示文字，支持 Render 函数。',
    },
    icon: {
      label: '图标',
      editors: 'icon',
      help: '选项卡图标',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
      help: '是否禁用该选项卡',
    },
    closable: {
      label: '可关闭',
      editors: 'boolean',
      help: '是否可以关闭页签，仅在 type="card" 时有效',
    },
    tab: {
      label: 'tab',
      editors: 'text',
      help: '当嵌套使用 Tabs，设置该属性指向对应 Tabs 的 name 字段',
    },
    index: {
      label: 'index',
      editors: 'number',
      help: '在 TabPane 使用 v-if 时，并不会按照预先的顺序渲染，这时可设置 index，并从小到大排序(需大于 0)',
    },
  },
};
