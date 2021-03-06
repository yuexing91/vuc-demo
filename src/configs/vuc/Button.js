import { createItems, getSizeEditor } from '../utils';

export default {
  id: ['i-button', 'Button'],
  name: '按钮',
  eventTypes: [{
    id: 'click',
    name: '点击',
  }],
  slots: [{
    slot: 'default',
    name: '按钮内容',
  }],
  type: ['button'],

  props: {
    type: {
      label: '按钮类型',
      editors: {
        type: 'select',
        props: {
          items: createItems(`default,primary,dashed,text,info,success,warning,error`, ','),
        },
      },
    },
    ghost: {
      label: '幽灵按钮',
      editors: 'boolean',
      help: '幽灵属性，使按钮背景透明',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
    shape: {
      label: '按钮形状',
      editors: {
        type: 'select',
        props: {
          items: createItems(`circle,:default`, ','),
        },
      },
    },
    long: {
      label: '长按钮',
      editors: 'boolean',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    loading: {
      label: '加载中',
      editors: 'boolean',
    },
    icon: {
      label: '图标',
      editors: 'icon',
    },
  },

  onDragover() {
    return false;
  },

  vucProxyOption: {
    textProxy: false,
  },

};

