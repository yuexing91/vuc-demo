export default {
  id: ['i-form','Form'],
  name: '表单项',
  eventTypes: [],
  type: ['container', 'form'],
  slots: [{
    slot: 'default',
    name: '内容',
    rules: {
      type: /^(container)$/,
    },
  }],
  props: {
    model: {
      label: '数据对象',
    },
    inline: {
      label: '行内表单',
      editors: 'boolean',
    },
    labelPosition: {
      label: '标签位置',
      editors: {
        type: 'select',
        props: {
          items: [{
            value: 'left',
            label: '左方',
          }, {
            value: 'right',
            label: '右方',
          }, {
            value: 'top',
            label: '上方',
          }],
        },
      },
    },
    labelWidth: {
      label: '标签大小',
      editors: 'number',
    },
    rules:{
      label: '验证规则',
    },
    showMessage: {
      label: '显示校验信息',
      editors: 'text',
    },
  },
};
