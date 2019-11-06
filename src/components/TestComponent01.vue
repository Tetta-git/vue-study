<template>
  <div>
    <h2>第2回目のコンポーネント</h2>
    <p>{{ title }}</p>
    <button @click="testmethod">アラート</button>
    <button @click="changeTitle">土日</button>
    <li v-for="item in list" v-bind:key="item.id">
      {{ item.name }} {{ item.desc }}
    </li>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Test01",
  data() {
    return {
      title: "仕事",
      list: [
        { id: 1, name: "題名1", desc: "説明文" },
        { id: 2, name: "題名2", desc: "説明文" },
        { id: 3, name: "題名3", desc: "説明文" }
      ]
    };
  },
  methods: {
    testmethod() {
      alert("a");
    },
    changeTitle() {
      this.title = "休日";
    }
  }
};
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>
