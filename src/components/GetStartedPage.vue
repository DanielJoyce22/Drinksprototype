<template>
  <section class="getStartedPage pageTransition">
    <IconBanner></IconBanner>

    <div class="container">
      <div class="getStartedInner">
        <div class="iconWrapper">
          <img src="../assets/IconOne.svg" alt="">
        </div>

        <h2>Let's Get on a First Name Basis</h2>
        <p>What Should I Call You?</p>

        <div class="inputWrapper">
          <label for="firstName" aria-label="First name">
            <input v-model="firstName" id="firstName" type="text" />
          </label>
        </div>
      </div>
    </div>

    <div class="buttonWrapper">
      <button class="fullwidthButton" @click="continueToOccasionPage" :disabled="isContinueButtonDisabled">Continue</button>
    </div>
  </section>
</template>

<script>
import selections from '../selections';
import IconBanner from './IconBanner.vue';

export default {
  components: { IconBanner },

  name: 'GetStartedPage',
  data() {
    return {
      firstName: '',
    };
  },
  computed: {
    isContinueButtonDisabled() {
      return this.firstName.trim() === '';
    },
  },
  methods: {
    continueToOccasionPage() {
      selections.firstName = this.firstName;
      this.$router.push({ name: 'OccasionPage' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/getStartedPage.scss';
</style>
