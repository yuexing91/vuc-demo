import { createItems } from '../utils';

export default {
  id: 'Row',
  name: '栅格行',
  eventTypes: [],
  type: ['row'],
  slots: [
    {
      slot: 'default',
      name: '内容',
    },
  ],
  props: {
    gutter: {
      label: '间距',
      editors: 'number',
      help: '栅格间距，单位 px，左右平分',
    },
    type: {
      label: '布局模式',
      editors: {
        type: 'select',
        props: {
          items: createItems(`circle、:default`, '、'),
        },
      },
      help: '布局模式，可选值为flex或不选，在现代浏览器下有效',
    },
    align: {
      label: '垂直对齐',
      editors: {
        type: 'select',
        props: {
          items: createItems(`:default、top、middle、bottom`, '、'),
        },
      },
      help: 'flex 布局下的垂直对齐方式，可选值为top、middle、bottom',
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
  //可以放置什么东西
  onDragover(dropData, targetNode, pos) {
    return dropData.node.tag === 'i-col';
  },
};
