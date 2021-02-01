import iview from 'view-design';

function mounted() {
  this.$options.mounted[this.$options.mounted.length - 1].call(this);
}

iview.Card.mixins.push({
  updated: mounted,
});

export default {
  id: 'Card',
  name: '卡片',
  eventTypes: [],
  type: ['panel', 'card'],
  slots: [
    {
      slot: 'default',
      name: '卡片内容',
      selector: '.ivu-card>.ivu-card-body',
    },
    {
      slot: 'title',
      name: '卡片标题',
      selector: '.ivu-card>.ivu-card-head',
    },
    {
      slot: 'extra',
      name: '额外内容',
      selector: '.ivu-card>.ivu-card-extra',
    },
  ],
  props: {
    title: {
      label: '标题',
      editors: 'text',
      help: '标题',
    },
    icon: {
      label: '图标',
      editors: 'icon',
      help: '标题前的图标',
    },
    padding: {
      label: '间距',
      editors: 'number',
      help: '卡片内部间距，单位 px',
    },
    bordered: {
      label: '边框',
      editors: 'boolean',
      help: '是否显示边框，建议在灰色背景下使用',
    },
    disHover: {
      label: '悬停阴影',
      editors: 'boolean',
      help: '禁用鼠标悬停显示阴影',
    },
    shadow: {
      label: '卡片阴影',
      editors: 'boolean',
      help: '卡片阴影，建议在灰色背景下使用',
    },
  },
};
