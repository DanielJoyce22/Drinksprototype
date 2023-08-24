<template>
  <section class="syrupsPage pageTransition">
    <IconBanner></IconBanner>
    <div class="container">
      <div class="syrupsInner">
        <div class="iconWrapper">
          <img src="../assets/IconSix.svg" alt="">
        </div>
        <h2>Syrup Selection</h2>
        <p>Pick a syrup for your drink</p>
        <div class="mainContent">
          <span class="tag">Select one of the following</span>
          <div class="itemContainer">
            <label
              v-for="(syrup, index) in syrupOptions"
              :key="index"
              :for="'syrup-' + syrup"
            >
              <input
                :id="'syrup-' + syrup"
                type="checkbox"
                v-model="selectedSyrups"
                :value="syrup"
                :disabled="selectedSyrups.length >= 1 && !selectedSyrups.includes(syrup)"
              />
              <span>
                {{ syrup }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="buttonWrapper">
         <button class="fullwidthButton" @click="startLoading" :disabled="isLoading || selectedSyrups.length === 0">
        Mix my drink
      </button>
    </div>
  <LoadingPage v-if="isLoading"/>
  </section>

</template>

<script>
import selections from '../selections';
import IconBanner from './IconBanner.vue';
import LoadingPage from './LoadingPage.vue';

export default {
  components: { IconBanner, LoadingPage },

  name: 'SyrupsPage',
  setup() {
    return { selections };
  },
  data() {
    return {
      syrupOptions: [
        'strawberry', 'passion fruit', 'pineapple', 'lemon', 'grenadine', 'mango',
        'cane sugar', 'salted caramel', 'vanilla', 'coconut', 'cherry', 'mint',
      ],
      selectedSyrups: [],
      isLoading: false,
    };
  },
  methods: {
    startLoading() {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        selections.syrups = this.selectedSyrups;
        this.$router.push({ name: 'FinalPage' });
      }, 10000);
    },
    continueToFinalPage() {
      selections.syrups = this.selectedSyrups;
      this.$router.push({ name: 'FinalPage' });
    },
    limitSelections() {
      // Ensure only one checkbox is selected
      if (this.selectedSyrups.length > 1) {
        this.selectedSyrups.pop();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/syrupsPage.scss';
</style>
