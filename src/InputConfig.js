export default {
  id: 'i-input',
  name: '输入框',
  eventTypes: [],
  type: ['input'],
  props: {
    value: {
      label: '值',
      editors: 'text',
    },
    placeholder: {
      label: '占位文本	',
      editors: 'text',
    },
    clearable: {
      label: '清空按钮',
      editors: 'boolean',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    readonly: {
      label: '只读',
      editors: 'boolean',
    },
    maxlength: {
      label: '最大输入长度',
      editors: 'number',
    },
    icon: {
      label: '图标',
      editors: 'icon',
    },
    prefix: {
      label: '头部图标',
      editors: 'icon',
    },
    suffix: {
      label: '尾部图标',
      editors: 'icon',
      advanced: true,
    },
    search: {
      label: '搜索型输入框',
      editors: 'boolean',
    },
    enterButton: {
      label: '搜索按钮',
      editors: [{
        name: '是否启用',
        type: 'boolean',
      }, {
        name: '按钮文本',
        type: 'text',
      }],
      advanced: true,
    },
    rows: {
      label: '默认行数',
      editors: 'number?min=1&max=10',
      advanced: true,
    },
    autosize: {
      label: '自适应高度',
      editors: 'boolean',
      advanced: true,
    },
    number: {
      label: '转换成数字',
      editors: 'boolean',
      advanced: true,
    },
    autofocus: {
      label: '自动获取焦点',
      editors: 'boolean',
      advanced: true,
    },
    autocomplete: {
      label: '自动完成',
      editors: {
        type: 'boolean?trueValue=on&falseValue=off',
        dynamic: false,
      },
      advanced: true,
    },
  },
};
