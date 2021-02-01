import { createItems, getSizeEditor } from '../utils';
export default {
  id: 'Split',
  name: '面板分割',
  eventTypes: [],
  type: [''],
  slots: [
    {
      slot: 'default',
      name: '内容',
    },
  ],
  props: {
    value: {
      label: '位置',
      editors: 'number',
      help: '面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定',
    }
    ,
    mode: {
      label: '类型',
      editors: {
        type: 'select',
        props: {
          items: createItems('horizontal、vertical', '、'),
        },
      },
      help: '类型，可选值为 horizontal 或 vertical',
    }
    ,
    min: {
      label: '最小阈值',
      editors: 'number',
      help: '最小阈值',
    }
    ,
    max: {
      label: '最大阈值',
      editors: 'number',
      help: '最大阈值',
    },
  },
};
