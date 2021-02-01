import iview from 'view-design';

iview.Modal.mixins = iview.Modal.mixins || [];


iview.Modal.mixins.push({
  mounted(){
    this.resizeMask();
  },
  updated(){
    this.resizeMask();
  },
  methods: {
    resizeMask(){

      if (this.$el.dataset.astId) {
        let $mask = this.$el.querySelector('.ivu-modal-mask');
        let $wrap = this.$el.querySelector('.ivu-modal-wrap');

        let rect = document.querySelector('.vuc-ceditor').getBoundingClientRect();

        [$mask, $wrap].forEach($el => {
          if ($el) {
            Object.assign($el.style, {
              top: rect.top + 'px',
              left: rect.left + 'px',
              height: rect.height + 'px',
              width: rect.width + 'px',
              right: 'none',
              bottom: 'none',
              zIndex: 100,
            });
          }
        });
      }

    },
  },
});

export default {
  id: ['Modal'],
  name: '对话框',
  eventTypes: [],
  type: ['container'],
  slots: [{
    slot: 'default',
    name: '主体内容',
    selector: '.ivu-modal-body',
  }, {
    slot: 'header',
    name: '业头',
    selector: '.ivu-modal-header',
  }, {
    slot: 'footer',
    name: '页脚',
    selector: '.ivu-modal-footer',
  }, {
    slot: 'close',
    name: '关闭按钮',
    selector: '.ivu-modal-close',
  }],
  props: {
    value: {
      label: '显示',
      editors: 'boolean',
    },
    title: {
      label: '标题',
      editors: 'text',
    },
    width: {
      label: '宽度',
      editors: 'text',
    },
    draggable: {
      label: '拖拽',
      editors: 'boolean',
    },
    okText: {
      label: '确定文本',
      editors: 'text',
    },
    cancelText: {
      label: '取消文本',
      editors: 'text',
    },
    footerHide: {
      label: '隐藏页脚',
      editors: 'boolean',
    },
  },
};
