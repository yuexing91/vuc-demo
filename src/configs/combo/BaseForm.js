let template = `
<Card key="card">
  <Row key="row">
    <i-col key="col">
      <i-form key="form" dragover="true"/>
    </i-col>
  </Row>
</Card>`;

export default {
  id: 'BaseForm',
  name: '基础表单',
  template,
  configs() {
    return [
      {
        node: 'form',
        mode: 'prop',
        props: {
          name: 'model',
          label: '数据对象',
        },
        on: {
          'on-change'(combo, data, vucAst) {

          },
        },
      },
    ];
  },
};

