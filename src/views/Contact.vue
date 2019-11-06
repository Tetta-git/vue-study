<template>
  <div>
    <h1>Contact</h1>
    <transition>
      <Input v-if="page === 1" v-on:confirmationTrigger="confirmation" />
      <Confirmation
        v-else-if="page === 2"
        v-bind:form="form"
        v-on:backTrigger="back"
        v-on:submitTrigger="submit"
      />
      <Complete v-else-if="page === 3" />
    </transition>
  </div>
</template>

<script>
import Input from "@/views/contact/Input";
import Confirmation from "@/views/contact/Confirmation";
import Complete from "@/views/contact/Complete";

export default {
  name: "Contact",
  components: { Complete, Confirmation, Input },
  comments: {
    Input,
    Confirmation,
    Complete
  },
  data() {
    return {
      page: 1,
      form: null
    };
  },
  methods: {
    confirmation(form) {
      this.form = form;
      this.page = 2;
    },
    back() {
      this.page = 1;
    },
    submit() {
      this.page = 3;
    }
  }
};
</script>

<style scoped>
.v-enter {
}
.v-enter-active, .
.v-leave {
}
</style>
