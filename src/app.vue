<template lang="html">
  <div style="height: 100%">
    <Designer ref="designer"
              style="height: calc(100% - 33px)"
              :editorOptions="editorOptions"
              :content="content">

      <template #left>
        <ExplorerView id="d" title="组件" :components="components"></ExplorerView>
      </template>

      <template #right>
        <PanelView id="childPanelView" title="组件选项" :groups="groups1"></PanelView>
        <PanelView id="pagePanelView" title="页面选项" :groups="groups2"></PanelView>
      </template>

    </Designer>

    <div style="text-align: center;border-top: 1px solid #dcdee2;">
      <i-button type="text" @click="importVue">导入</i-button>
      <i-button type="text" @click="exportVue">导出</i-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import Vue from 'vue';
  import iView from 'view-design';
  import Vuc from 'vuc-designer';
  import 'view-design/dist/styles/iview.css';
  import 'vuc-designer/dist/styles/vuc.css';

  import FileSaver from 'file-saver';
  import { vueContent } from './template';

  import confgs from './configs';

  let Designer = Vuc.Designer;

  Designer.use(confgs);

  Vue.use(iView, {
    transfer: true,
  });

  let explorerComponents = [
    {
      id: '2',
      title: '基础表单',
      children: [
        {
          id: '2-1',
          title: '基础表单',
          node: `<Card dis-hover :bordered="false" style="margin-bottom: 30px;">
                    <Row>
                      <i-col :xs="{span:24,offset:0}" :xs="{span:20,offset:2}" :md="{span:16,offset:4}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}">
                        <i-form :model="formData" style="min-height: 100px" :label-width="100" label-position="right">
                          <form-item label="输入框">
                              <i-input></i-input>
                          </form-item>
                          <form-item>
                            <i-button>保存</i-button>
                          </form-item>
                        </i-form>
                      </i-col>
                    </Row>
                  </Card>`,
        },
        {
          id: '2-2',
          title: '输入框',
          node: `<form-item label="输入框">
                <i-input></i-input>
              </form-item>`,
        },
        {
          id: '2-3',
          title: '下拉框',
          node: `<form-item label="下拉框">
                <i-select>
                  <i-option value="1">选项1</i-option>
                  <i-option value="2">选项2</i-option>
                </i-select>
              </form-item>`,
        },
        {
          id: '2-4',
          title: '单选框',
          node: `<form-item label="单项框">
                <RadioGroup>
                    <Radio label="1">选项1</Radio>
                    <Radio label="2">选项2</Radio>
                </RadioGroup>
              </form-item>`,
        },
        {
          id: '2-5',
          title: '复选框',
          node: `<form-item label="复选框">
                <CheckboxGroup>
                    <Checkbox label="1">选项1</Checkbox>
                    <Checkbox label="2">选项2</Checkbox>
                </CheckboxGroup>
              </form-item>`,
        },
        {
          id: '2-6',
          title: '按钮',
          node: `<form-item>
              <i-button>按钮</i-button>
            </form-item>`,
        },
      ],
    },
    {
      id: '1',
      title: '高级表单',
      children: [
        {
          id: '1-0',
          title: '高级表单',
          node: `<i-form :model="formData" style="height: 100%" :label-width="100" label-position="right">
                    <Card title="基础信息" dis-hover :bordered="false" style="margin-bottom: 30px;">
                      <Row style="min-height: 20px;" :gutter="12" type="flex">
                        <i-col :span="12">
                          <form-item label="输入框">
                            <i-input></i-input>
                          </form-item>
                        </i-col>
                      </Row>
                    </Card>
                  </i-form>`,
        },
        {
          id: '1-1',
          title: '卡片',
          node: `<Card title="基础信息" dis-hover :bordered="false" style="margin-bottom: 30px;">
                      <Row :gutter="12" type="flex">
                        <i-col :span="12">
                          <form-item label="输入框">
                            <i-input></i-input>
                          </form-item>
                        </i-col>
                      </Row>
                    </Card>`,
        },
        {
          id: '1-2',
          title: '输入框',
          node: `<i-col :span="12">
                    <form-item label="输入框">
                      <i-input></i-input>
                    </form-item>
                  </i-col>`,
        },
        {
          id: '1-3',
          title: '下拉框',
          node: `<i-col :span="12">
                    <form-item label="下拉框">
                      <i-select>
                        <i-option value="1">选项1</i-option>
                        <i-option value="2">选项2</i-option>
                      </i-select>
                    </form-item>
                  </i-col>`,
        },
        {
          id: '1-4',
          title: '单选框',
          node: `<i-col :span="12">
                    <form-item label="单项框">
                      <RadioGroup>
                          <Radio label="1">选项1</Radio>
                          <Radio label="2">选项2</Radio>
                      </RadioGroup>
                    </form-item>
                  </i-col>`,
        },
        {
          id: '1-5',
          title: '复选框',
          node: `<i-col :span="12">
                    <form-item label="复选框">
                      <CheckboxGroup>
                          <Checkbox label="1">选项1</Checkbox>
                          <Checkbox label="2">选项2</Checkbox>
                      </CheckboxGroup>
                    </form-item>
                  </i-col>`,
        },
        {
          id: '1-6',
          title: '按钮',
          node: `<i-col :span="24">
                    <i-button>按钮</i-button>
                  </i-col>`,
        },
      ],
    },
  ];

  export default Vue.extend({
    data() {
      return {
        editorOptions: {
          wrapperStyle: {
            padding: '15px',
            background: '#f7f7f7',
          },
          beforeSelectNode(node) {
            return !node.isText();
          },
        },
        content: vueContent,
        components: explorerComponents,
        groups1: [
          {
            title: '组合选项',
            panels: ['ComboPanel'],
          },
          {
            title: '选项',
            panels: ['TextPanel', 'PropsPanel', 'OptionEditorPanel'],
          },
          {
            title: '事件',
            panels: ['EventPanel'],
          },
          {
            title: '指令',
            panels: ['DirectivePanel'],
          },
          {
            title: '样式',
            panels: ['StylePanel'],
          },
        ],
        groups2: [
          {
            title: 'data',
            panels: ['DataPanel'],
          },
          {
            title: 'computed',
            panels: ['ComputedPanel'],
          },
          {
            title: 'watch',
            panels: ['WatchPanel'],
          },
          {
            title: 'methods',
            panels: ['MethodPanel'],
          },
        ],

      };
    },
    components: Object.assign({ Designer }, Designer.getAllView()),
    methods: {
      importVue() {
        let designer = this.$refs.designer;
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = function () {
          let reader = new FileReader();

          reader.onload = () => {
            designer.setVueContent(reader.result);
          };

          reader.readAsText(this.files[0]);

        };
        input.click();
      },
      exportVue() {
        let content = this.$refs.designer.getVueContent();
        FileSaver.saveAs('data:text/plain;charset=utf-8,' + encodeURIComponent(content), 'main.vue');
      },
    },
  });
</script>
<style>
  body {
    overflow: hidden;
  }
</style>
