<template>
  <section class="mixersPage pageTransition">
    <IconBanner></IconBanner>

    <div class="container">
      <div class="mixersInner">
        <div class="iconWrapper">
          <img src="../assets/IconFive.svg" alt="">
        </div>
        <h2>Mix it up</h2>
        <p>Pick some mixers for your drink</p>
        <div class="mainContent">
          <span class="tag">Select up to two of the following</span>
          <div class="itemContainer">
            <label v-for="(mixer, index) in mixerOptions" :key="index" :for="'mixer-' + mixer">
              <input
                :id="'mixer-' + mixer"
                type="checkbox"
                v-model="selectedMixers"
                :value="mixer"
                :disabled="selectedMixers.length >= 2 && !selectedMixers.includes(mixer)"
              />
              <span>
                {{ mixer }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="buttonWrapper">
      <button class="fullwidthButton" @click="continueToSyrupsPage" :disabled="selectedMixers.length == 0">
        Continue
      </button>
    </div>
  </section>
</template>

<script>
import selections from '../selections';
import IconBanner from './IconBanner.vue';

export default {
  components: { IconBanner },

  name: 'MixersPage',

  setup() {
    return { selections };
  },

  data() {
    return {
      mixerOptions: ['coffee', 'cola', 'cranberry juice', 'ginger beer', 'lemonade', 'orange juice', 'pineapple juice', 'soda water', 'tonic water'],
      selectedMixers: [],
    };
  },

  methods: {
    continueToSyrupsPage() {
      selections.mixers = this.selectedMixers;
      this.$router.push({ name: 'SyrupsPage' });
    },

    limitSelections() {
      // Ensure only one checkbox is selected
      if (this.selectedMixers.length > 2) {
        this.selectedMixers.pop();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/mixersPage.scss';
</style>
