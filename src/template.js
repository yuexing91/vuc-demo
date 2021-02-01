export let vueContent = `
<template>
  <div style="height: 100%">
    <Card dis-hover :bordered="false" style="margin-bottom: 30px;">
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
    </Card>
  </div>
</template>
<script>
   export default {
      data() {
        return {
          formData:{
          },
        };
      },
      computed: {
      },
      methods: {
      },
    };
</script>`;
