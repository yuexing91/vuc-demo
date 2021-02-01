let template = `<form-item key="formItem">
      <type.input key="input" allowChildren="true"/>
    </form-item>`;

export default {
  id: 'FormItem',
  name: '表单项',
  template,
  configs() {
    return [
      {
        node: 'formItem',
        mode: 'prop',
        props: {
          name: 'prop',
          label: '字段名',
        },
        on: {
          'on-change'(combo, data, vucAst) {
            let input = combo.nodeMap.input;
            let model = input.closest('i-form').getDynamicAttr('model');
            let expr = '';
            if (data.value) {
              expr = [model, data.value].join('.');
            }
            input.setDirective({
              name: 'model',
              value: expr,
            });

            vucAst.addChildData(model, {
              id: data.value,
              name: '',
              code: 'null',
            });

          },
        },
      },
      {
        node: 'input',
        mode: 'prop',
        props: {
          name: 'size',
          label: '尺寸',
        },
      },
      {
        node: 'input',
        mode: 'optionEditor',
      },
    ];

  },
  valid(rootNode) {
    return rootNode.parent.tag !== 'i-col';
  },
  onDragover() {

  },
};

