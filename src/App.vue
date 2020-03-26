<template lang="pug">
  div
    #app
      HeaderComponent
      SidebarComponent
      main.main  
        router-view
</template>

<script>
import HeaderComponent from "ROOT/components/HeaderComponent";
import SidebarComponent from "ROOT/components/SidebarComponent";

export default {
  name: "app",
  components: {
    HeaderComponent,
    SidebarComponent
  }
};
</script>

<style lang="scss">
#app {
  display: block;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  & main {
    display: inline-block;
    position: relative;
    z-index: 1;
    &.main {
      width: 85%;
      left: 15%;
    }
    &.login {
      width: 100%;
    }
  }
}

@media (min-width: 992px) and (max-width: 1366px) {
  #app {
    & main {
      &.main {
        width: 83%;
        left: 17%;
      }
    }
  }
}
</style>
