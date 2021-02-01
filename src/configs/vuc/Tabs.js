import { createItems } from '../utils';
export default {
  id: 'Tabs',
  name: '标签页',
  eventTypes: [],
  type: [''],
  slots: [
    {
      slot: 'default',
      name: '内容',
      selector: '.ivu-card>.ivu-card-body',
    },
    {
      slot: 'extra',
      name: '额外内容',
      selector: '.ivu-card>.ivu-card-extra',
    },
  ],
  props: {
    value: {
      label: '默认选中',
      editors: 'text',
      help: '当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据',
    },
    type: {
      label: '类型',
      editors: {
        type: 'select',
        props: {
          items: createItems('line、card', '、'),
        },
      },
      help: '页签的基本样式，可选值为 line 和 card',
    },
    size: {
      label: '尺寸',
      editors: {
        type: 'select',
        props: {
          items: createItems('default、small', '、'),
        },
      },
      help: '尺寸，可选值为 default 和 small，仅在 type="line" 时有效',
    },
    closable: {
      label: '可关闭',
      editors: 'boolean',
      help: '是否可以关闭页签，仅在 type="card" 时有效',
    },
    animated: {
      label: '动画',
      editors: 'boolean',
      help: '是否使用 CSS3 动画',
    },
    captureFocus: {
      label: '自动获取焦点',
      editors: 'boolean',
      help: 'Tabs 内的表单类组件是否自动获得焦点',
    },
    beforeRemove: {
      label: '关闭前',
      editors: 'text',
      help: '关闭前的函数，返回 Promise 可阻止标签关闭',
    },
  },
};
