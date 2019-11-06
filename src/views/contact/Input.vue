<template>
  <div>
    <div>
      <p>
        お急ぎの場合はお電話でお問い合わせください。お急ぎの場合はお電話でお問い合わせください。
      </p>
      <p>00-0000-0000</p>
      <p>平日10:00~19:00</p>
    </div>
    <div>
      <form>
        <div>
          <select name="お問い合わせ種別" v-model="form.type">
            <option selected disabled>選択してください</option>
            <option value="お仕事の相談">お仕事の相談</option>
            <option value="採用">採用</option>
            <option value="その他">その他</option>
          </select>
        </div>
        <div>
          <p>お名前</p>
          <input
            type="text"
            placeholder="お名前を入力してください"
            v-model="form.name"
          />
        </div>
        <div>
          <p>会社名</p>
          <input
            type="text"
            placeholder="御社名を入力してください"
            v-model="form.company"
          />
        </div>
        <div>
          <p>メールアドレス</p>
          <input
            type="text"
            placeholder="メールアドレス"
            v-model="form.email"
          />
        </div>
        <div>
          <p>お問い合わせ内容</p>
          <textarea
            type="text"
            placeholder="お問い合わせ内容を入力してください"
            v-model="form.note"
          ></textarea>
        </div>
        <div>
          <p>プライバシーポリシー</p>
          <input type="checkbox" name="privacypolicy" v-model="policy" />
        </div>
        <div>
          <input
            type="submit"
            value="SEND MESSAGE"
            v-on:click.prevent="confirmation"
            v-bind:disabled="isOK"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      form: {
        type: null,
        name: null,
        company: null,
        note: null
      },
      policy: false
    };
  },
  computed: {
    isOK() {
      return !this.policy;
    }
  },
  methods: {
    confirmation() {
      this.$emit("confirmationTrigger", this.form);
    }
  }
};
</script>

<style scoped></style>
