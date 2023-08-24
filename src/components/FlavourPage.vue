<template>
  <section class="flavourPage pageTransition">
    <IconBanner></IconBanner>

    <div class="container">
      <div class="flavourInner">
        <div class="iconWrapper">
          <img src="../assets/IconThree.svg" alt="">
        </div>

        <h2>What's your flavour?</h2>
        <p>Pick the flavour profile for your drink</p>

        <div class="mainContent">
          <span class="tag">Select one of the following</span>
          <div class="itemContainer">
            <label v-for="(flavour, index) in flavourOptions" :key="index" :for="'flavour-' + flavour">
              <input
                :id="'flavour-' + flavour"
                type="checkbox"
                v-model="selectedFlavour"
                :value="flavour"
                @change="limitSelections"
                :disabled="selectedFlavour.length >= 1 && !selectedFlavour.includes(flavour)"
              />
              <span>
              {{ flavour }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="buttonWrapper">
      <button class="fullwidthButton" @click="continueToDrinkBasePage" :disabled="selectedFlavour.length == 0">
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

  name: 'FlavourPage',

  setup() {
    return { selections };
  },

  data() {
    return {
      flavourOptions: ['sweet', 'sour', 'bitter', 'fruity', 'herbal', 'spicy'],
      selectedFlavour: [],
    };
  },

  methods: {
    continueToDrinkBasePage() {
      selections.flavour = this.selectedFlavour;
      this.$router.push({ name: 'DrinkBasePage' });
    },

    limitSelections() {
      // Ensure only one checkbox is selected
      if (this.selectedFlavour.length > 1) {
        this.selectedFlavour.pop();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/flavourPage.scss';
</style>
