import { createItems, getSizeEditor } from '../utils';
export default {
  id: 'Split',
  name: '面板分割',
  eventTypes: [],
  type: [''],
  slots: [{
    slot: 'default',
    name: '内容',
  }],
  props: {
    type: {
      label: '类型',
      editors: {
        type: 'select',
        props: {
          items: createItems('horizontal、vertical', '、'),
        },
      },
      help: '水平还是垂直类型，可选值为 horizontal 或 vertical',
    },
    orientation: {
      label: '位置',
      editors: {
        type: 'select',
        props: {
          items: createItems('left、right、center', '、'),
        },
      },
      help: '分割线标题的位置，可选值为 left、right 或 center',
    },
    dashed: {
      label: '虚线',
      editors: 'boolean',
      help: '是否虚线',
    },
    size: {
      label: '尺寸',
      editors: {
        type: 'select',
        props: {
          items: createItems(' small 或 default', '、'),
        },
      },
      help: '尺寸，可选值为 small 或 default',
    },
  },
};
