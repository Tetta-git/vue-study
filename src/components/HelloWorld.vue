<template>
  <div class="hello">
    <h1>{{ msg | nya }}</h1>
    <!-- 直接数字書いてみる -->
    <P>{{ 123456789 | comma | nya }}</P>
    <!-- 変数で -->
    <p>{{ myNumber | comma | nya }}</p>
    <p>{{ error | errorCode("お名前") }}</p>
    <p>{{ "A_002" | errorCode("ねこ") | nya }}</p>
    <p>A_002っていれてみる</p>
    <p><input v-model="error" /></p>
    <p>{{ sample }}</p>
    <p>{{ sample2 }}</p>
    <p>{{ zeicomi }}円です。</p>
    <!-- <p>{{ mZeicomi() }}円です。</p> -->
    <p><button @click="syutoku">おす</button></p>
    <p class="json">
      {{ name
      }}<button @click="more" class="more" style="display: none;">
        もっと見る
      </button>
    </p>
    For a guide and recipes on how to configure / customize this project,<br />
    check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
      >vue-cli documentation</a
    >
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
          target="_blank"
          rel="noopener"
          >pwa</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
          target="_blank"
          rel="noopener"
          >unit-mocha</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      myNumber: 9876543,
      error: "A_001",
      sample: this.$filters.errorCode("A_002", "さんぷる"),
      sample2: this.$filters.nya("鳴き声は"),
      okane: 1000,
      tax: 1.08,
      data: null,
      name: null,
      json: null,
      count: 1
    };
  },
  computed: {
    zeicomi() {
      return this.okane * this.tax;
    }
  },
  methods: {
    // mZeicomi() {
    //   //return this.okane * this.tax;
    // },
    syutoku() {
      axios.get("/1.json", {}).then(responce => {
        console.dir(JSON.stringify(responce));
        //this.name += responce.data.name;
        this.json = responce.data;
        this.name = String(this.json.data[0].name);
      });
      document.getElementsByClassName("more")[0].style.display = "block";
    },
    more() {
      this.name += String(this.json.data[this.count].name);
      console.log(this.name);
      this.count += 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
