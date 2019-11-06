<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/step01">Step01</router-link> |
      <router-link to="/test01">Test01</router-link> |
      <router-link to="/rensyu03">Rensyu03</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <transition name="pageTransition" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.pageTransition-enter,
.pageTransition-leave-to {
  //transform: translateY(0px);
  opacity: 0;
}
.pageTransition-enter-active,
.pageTransition-leave-active {
  transition: all 0.5s ease;
}
/*.pageTransition-enter-to,
.pageTransition-leave {
  transform: translateY(-20px);
  opacity: 0;
}*/
</style>
