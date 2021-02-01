import { createItems } from '../utils';

export default {
  id: 'Dropdown',
  name: '下拉菜单',
  eventTypes: [],
  type: [''],
  slots: [{
    slot: 'default',
    name: '下拉主体',
  },
    {
      slot: 'list',
      name: '下拉框列表',
    }],
  props: {
    trigger: {
      label: '触发方式',
      editors: {
        type: 'select',
        props: {
          items: createItems(' hover:悬停、click:点击、contextMenu:右键、custom:自定义', '、'),
        },
      },
      help: '触发方式，可选值为 hover（悬停）click（点击）contextMenu（右键）custom（自定义），使用 custom 时，需配合 visible 一起使用',
    },
    visible: {
      label: '显示下拉框',
      editors: 'boolean',
      help: '手动控制下拉框的显示，在 trigger = custom 时使用',
    },
    placement: {
      label: '菜单位置',
      editors: {
        type: 'select',
        props: {
          items: createItems(':自动识别、top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end', '、'),
        },
      },
      help: '下拉菜单出现的位置，',
    },
//    transfer: {
//      label: 'transfer',
//      editors: 'boolean',
//      help: '是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果',
//    },
//    transferClassName: {
//      label: 'transferClassName',
//      editors: 'text',
//      help: '开启 transfer 时，给浮层添加额外的 class 名称',
//    },
    stopPropagation: {
      label: '阻止冒泡',
      editors: 'boolean',
      help: '是否开启 stop-propagation',
    },
  },
};
