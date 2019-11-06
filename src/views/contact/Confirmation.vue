<template>
  <div>
    <h2>確認</h2>
    <div>
      <dl>
        <dt>お問い合わせ種別</dt>
        <dd>{{ form.type }}</dd>
        <dt>お名前</dt>
        <dd>{{ form.name }}</dd>
        <dt>会社名</dt>
        <dd>{{ form.company }}</dd>
        <dt>メールアドレス</dt>
        <dd>{{ form.email }}</dd>
        <dt>お問い合わせ内容</dt>
        <dd>{{ form.note }}</dd>
      </dl>
    </div>
    <div>
      <input type="button" value="入力し直し" v-on:click.prevent="back" />
      <input type="submit" value="送信" v-on:click.prevent="submit" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: Object
  },
  name: "Confirmation",
  methods: {
    back() {
      this.$emit("backTrigger");
    },
    submit() {
      this.$emit("submitTrigger");
    }
  }
};
</script>

<style scoped></style>
