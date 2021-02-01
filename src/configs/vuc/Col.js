import { createItems } from '../utils';

export default {
  id: ['iCol', 'Col'],
  name: '栅格',
  eventTypes: [],
  type: ['col'],
  slots: [{
    slot: 'default',
    name: '内容',
  }],
  props: {
    span: {
      label: '栅格格数',
      editors: 'number',
      help: '栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none',
    },
    order: {
      label: '顺序',
      editors: 'number',
      help: '栅格的顺序，在flex布局模式下有效',
    },
    offset: {
      label: '间隔',
      editors: 'number',
      help: '栅格左侧的间隔格数',
    },
    push: {
      label: '向右移动',
      editors: 'number',
      help: '栅格向右移动格数',
    },
    pull: {
      label: '向左移动',
      editors: 'number',
      help: '栅格向左移动格数',
    },
    justify: {
      label: '水平排列',
      editors: {
        type: 'select',
        props: {
          items: createItems(`:default、start、end、center、space-around、space-between`, '、'),
        },
      },
      help: 'flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between',
    },
    className: {
      label: '自定义class',
      editors: 'text',
      help: '自定义的class名称',
    },
  },
  //可以放到什么地方
  onDrop(dropData, targetNode, pos) {
    let p = pos == 'inner' ? targetNode : targetNode.getParentNode();
    return p.camelizeTag === 'Row';
  },
};
