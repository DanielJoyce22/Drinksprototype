<template>
  <section class="drinkBasePage pageTransition">
    <IconBanner></IconBanner>

    <div class="container">
      <div class="drinkBaseInner">
        <div class="iconWrapper">
          <img src="../assets/IconFour.svg" alt="">
        </div>

        <h2>Tipple time</h2>
        <p>Pick a base for your drink</p>

        <div class="mainContent">
          <span class="tag">Select up to two of the following</span>
          <div class="itemContainer">
            <label v-for="(base, index) in drinkBaseOptions" :key="index" :for="'drink-base-' + base">
              <input
                :id="'drink-base-' + base"
                type="checkbox"
                v-model="selectedDrinkBases"
                :value="base"
                :disabled="isMocktailSelected || (selectedDrinkBases.length >= 2 && !selectedDrinkBases.includes(base))"
              />
              <span>{{ base }}</span>
            </label>
          </div>

          <label for="mocktail" class="fullwidthCheckbox">
            <input id="mocktail" type="checkbox" v-model="isMocktailSelected" value="mocktail" />
            <span>Make Mine a Mocktail</span>
          </label>
        </div>
      </div>
    </div>

    <div class="buttonWrapper">
      <button class="fullwidthButton" @click="continueToMixersPage" :disabled="isContinueButtonDisabled">
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

  name: 'DrinkBasePage',

  setup() {
    return { selections };
  },

  data() {
    return {
      drinkBaseOptions: ['brandy', 'gin', 'rum', 'tequila', 'vodka', 'whisky'],
      selectedDrinkBases: [],
      isMocktailSelected: false,
    };
  },

  computed: {
    isContinueButtonDisabled() {
      return !this.isMocktailSelected && this.selectedDrinkBases.length === 0;
    },
  },

  methods: {
    continueToMixersPage() {
      if (this.isMocktailSelected === true) {
        selections.drinkBases = ['mocktail'];
      } else {
        selections.drinkBases = this.selectedDrinkBases;
      }
      this.$router.push({ name: 'MixersPage' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/drinkBasePage.scss';
</style>
