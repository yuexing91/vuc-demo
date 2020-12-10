<template lang="html">
  <div style="height: 100%">
    <Designer ref="designer" style="height: calc(100% - 33px)" :options="options"
              :content="content"></Designer>
    <div style="text-align: center;border-top: 1px solid #dcdee2;">
      <i-button type="text" @click="importVue">导入</i-button>
      <i-button type="text" @click="exportVue">导出</i-button>
    </div>
  </div>
</template>
<style>

</style>
<script type="text/ecmascript-6">

  import FileSaver from 'file-saver';
  import beautify from 'js-beautify';

  import Vuc from 'vuc-designer';
  import 'vuc-designer/dist/styles/vuc.css';
  import 'view-design/dist/styles/iview.css';

  import InputConfig from './InputConfig';
  import ButtonConfig from './ButtonConfig';
  import { vueContent } from './template';

  Vuc.Designer.setVucConfig(ButtonConfig);
  Vuc.Designer.setVucConfig(InputConfig);

  let options = {
    components: [
      {
        title: '基础',
        children: [
          {
            id: 'text',
            title: '文本',
            template: '文本',
            isText: true,
          },
          {
            id: 'i-button',
            title: '按钮',
            template: '<i-button>按钮</i-button>',
          },
        ],
      },
    ],
  };

  export default {
    data() {
      return {
        options,
        content: vueContent,
      };
    },
    components: {
      Designer: Vuc.Designer,
    },
    methods: {
      importVue() {
        let designer = this.$refs.designer
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = function () {
          let reader = new FileReader();

          reader.onload = () => {
            designer.setVueContent(reader.result)
          };

          reader.readAsText(this.files[0]);

        };
        input.click();
      },
      exportVue() {
        let content = this.$refs.designer.getVueContent();
        content = beautify.html(content, {
          indent_size: 2,
          space_in_empty_paren: true,
          'indent_scripts': 'normal',
        });

        FileSaver.saveAs('data:text/plain;charset=utf-8,' + encodeURIComponent(content), 'main.vue');
      },
    },
  };
</script>
