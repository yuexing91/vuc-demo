import iview from 'view-design';
import { createItems, getSizeEditor } from '../utils';

iview.Input.mixins = iview.Input.mixins || [];

function mounted() {
  this.$options.mounted[this.$options.mounted.length - 1].call(this);
}

iview.Input.mixins.push({
  watch: {
    prefix: mounted,
    suffix: mounted,
  },
});

export default {
  id: 'i-input',
  name: '输入框',
  eventTypes: [],
  type: ['input'],
  props: {
    type: {
      label: '类型',
      editors: {
        type: 'select',
        props: {
          items: createItems(`text,password,textarea,url,email,date,number,tel`),
        },
      },
      help: `输入框类型，可选值为 <code>text</code> <code>password</code>
            <code>textarea</code> <code>url</code> <code>email</code>
            <code>date</code> <code>number</code> <code>tel</code>`,
    },
    value: {
      label: '值',
      editors: 'text',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
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
      advanced: true,
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
      advanced: true,
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
    /*elementId:{
      label: 'id',
    },
    spellcheck:{
      label: 'spellcheck',
    },
    wrap:{
      label: 'wrap',
    }*/
  },
};
