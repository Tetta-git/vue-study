<template>
  <div class="home">
    <TestComponent01></TestComponent01>
  </div>
</template>

<script>
// @ is an alias to /src
import TestComponent01 from "@/components/TestComponent01.vue";

export default {
  name: "Test01",
  components: { TestComponent01 }
};
</script>
