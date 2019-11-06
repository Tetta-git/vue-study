<template>
  <div>
    <span v-if="!success" style="color: red">にゅうりょくしてください</span>
    <br />
    <input v-model.trim="message" type="text" />
    <br />
    {{ message }}<br />
    <input
      v-validate="'required'"
      name="myinput"
      type="text"
      data-vv-as="タイトル"
    /><br />
    <span>{{ errors.first("myinput") }}</span
    ><br />
    <input
      type="checkbox"
      name="bool"
      v-validate="'required:invalidateFalse'"
    /><br />
    <span v-if="errors.has('bool')">{{ errors.first("bool") }}</span
    ><br />
  </div>
</template>

<script>
// @ is an alias to /src
import VeeValidate, { Validator } from "vee-validate";

export default {
  name: "Validate",
  data() {
    return {
      message: ""
    };
  },
  computed: {
    success() {
      return !!this.message;
    }
  },
  method: {}
};
</script>
