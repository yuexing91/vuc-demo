export let vueContent = `
    <template>
      <div>
        <i-input v-model="age" style="width: 120px;"></i-input>
        <i-button @click="add">btn</i-button>
        <span>
          {{ age1 }}
        </span>
      </div>
    </template>
    <script>
       export default {
          data() {
            return {
              //年龄
              age: 10,
            };
          },
          computed: {
            age1() {
              return '年龄:' + this.age ;
            },
          },
          methods: {
            //增加
            add() {
              this.age++;
            },
          },
        };
    </script>`;
