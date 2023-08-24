<template>
  <div id="app" class="wrapper">

    <router-view v-slot="{ Component }">
      <Transition name="route" mode="out-in">
       <component :is="Component">

       </component>
      </Transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '@/scss/styles.scss';
</style>
