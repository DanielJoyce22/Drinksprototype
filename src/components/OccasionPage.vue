<template>
  <section class="occasionPage pageTransition">
    <IconBanner></IconBanner>

    <div class="container">
      <div class="occasionInner">
        <div class="iconWrapper">
          <img src="../assets/IconTwo.svg" alt="">
        </div>

        <h2>Hey {{ selections.firstName }}, what's the vibe?</h2>
        <p>Pick a season, occasion, or just a vibe for your drink.</p>

        <div class="mainContent">
          <span class="tag">Select one of the following</span>
          <div class="itemContainer">
            <label v-for="(option, index) in occasionOptions" :key="index" :for="'occasion-' + option">
              <input :id="'occasion-' + option" type="checkbox" v-model="selectedOccasions"
                :value="option" @change="limitSelections"
                :disabled="selectedOccasions.length >= 1 && !selectedOccasions.includes(option)"
              />
              <span>
                {{ option }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="buttonWrapper">
      <button class="fullwidthButton" @click="continueToFlavourPage" :disabled="selectedOccasions.length == 0">
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

  name: 'OccasionPage',

  setup() {
    return { selections };
  },

  data() {
    return {
      occasionOptions: [
        'spring', 'summer', 'autumn', 'winter', 'fun', 'spooky',
        'wedding', 'beach party', 'hen do', 'stag do',
      ],
      selectedOccasions: [],
    };
  },

  methods: {
    continueToFlavourPage() {
      selections.occasion = this.selectedOccasions;
      this.$router.push({ name: 'FlavourPage' });
    },

    limitSelections() {
      // Ensure only one checkbox is selected
      if (this.selectedOccasions.length > 1) {
        this.selectedOccasions.pop();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/occasionPage.scss';
</style>
