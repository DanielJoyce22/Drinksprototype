<template>
  <!-- <div>
    <h2>Here is your prompt {{ selections.firstName }}</h2>
    <p>
      Create a cocktail name, ingredient list, recipe, glass type,
       and serving suggestion using at least the following ingredients:
        {{ selections.drinkBases }}, {{ selections.mixers }}, {{ selections.syrups }}.
         The drink should be {{ selections.flavour }} and have a {{ selections.occasion }} vibe.
          Any measurements should be in metric.
           The syrups aliases will all be 'Mathieu Teisseire {XYZ} Syrup.
           Ensure the ingredients is a bullet list, and the recipe is a numbered list
    </p>
  </div> -->

  <section class="finalPage pageTransition">
    <IconBanner></IconBanner>
    <div class="container">
      <div class="finalPageInner">
        <div class="topWrapper">
          <div class="iconWrapper">
            <img src="../assets/IconEight.svg" alt="">
          </div>
          <h2>Ta Da!</h2>
          <p class="intro">Here's your magical mix, {{ selections.firstName }}</p>
        </div>

        <div class="contentWrapper">
          <div class="imageWrapper mobile">
            <picture>
              <source srcset="https://picsum.photos/id/326/680/400" media="(min-width: 450px)" />
              <source srcset="https://picsum.photos/id/326/390/390" media="(min-width: 0px)" />
              <img src="https://picsum.photos/id/326/680/475" alt="" />
            </picture>
          </div>

          <div class="contentItem">
            <div class="ingredients">
              <h3>Ingredients</h3>
              <ul>
                <li>100g <strong>Strawberries</strong></li>
                <li>25ml/1fl oz <strong>Gin</strong></li>
                <li>25ml/1fl oz <strong>Vodka</strong></li>
                <li>15ml/1/2fl 0z <strong>Lemon juice</strong></li>
                <li>50ml/2fl oz <strong>Soda water</strong></li>
                <li><strong>Basil leaf</strong> optional</li>
              </ul>
            </div>

            <div class="recipes">
              <h3>Recipe</h3>
              <ol>
                <li>
                  <img src="../assets/IconOneSmall.svg" alt="">
                  <p>In a cocktail shaker, muddle the fresh strawberries until they release their juices and become slightly mashed.</p>
                </li>
                <li>
                  <img src="../assets/IconTwoSmall.svg" alt="">
                  <p>Add gin, vodka, Mathieu Teisseire Basil Syrup, and fresh lemon juice to the cocktail shaker.</p>
                </li>
                 <li>
                  <img src="../assets/IconThreeSmall.svg" alt="">
                  <p> Fill the shaker with ice cubes and shake vigorously for about 10-15 seconds to chill and mix the ingredients.</p>
                </li>
                 <li>
                  <img src="../assets/IconFourSmall.svg" alt="">
                  <p>Strain the mixture into a highball glass filled with fresh ice cubes.</p>
                </li>
                 <li>
                  <img src="../assets/IconFiveSmall.svg" alt="">
                  <p>Top it off with a splash of club soda for some fizziness.</p>
                </li>
                 <li>
                  <img src="../assets/IconSixSmall.svg" alt="">
                  <p>Garnish with a fresh strawberry or a basil leaf for an elegant touch</p>
                </li>
              </ol>
            </div>
          </div>

          <div class="contentItem">
            <div class="imageWrapper desktop">
              <picture>
                <source srcset="https://picsum.photos/id/326/530/515" media="(min-width: 1050px)" />
                <source srcset="https://picsum.photos/id/326/410/440" media="(min-width: 768px)" />
                <img src="https://picsum.photos/id/326/530/515" alt="" />
              </picture>
            </div>

            <div class="servingWrapper">
              <h4>Serving suggestion</h4>
              <p>This fruity and refreshing Basil Berry Fizz is best enjoyed on a warm summer day. Serve it at your next backyard gathering or a rooftop party.</p>
              <p>The combination of fresh strawberries, basil syrup, and citrus flavours from the lemon juice creates a delightful balance with the gin and vodka.</p>
              <p>The highball glass allows for easy sipping while showcasing the vibrant colours of the drink. Cheers!</p>
            </div>

            <div class="shareWrapper">
              <h4>Share</h4>
              <ul>
                <li><a href="">X</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Threads</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Copy URL</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="buttonsWrapper">
    <button class="fullwidthButton">Remix</button>
   <router-link to="/collections">
        <button class="fullwidthButton">See other mixes</button>
      </router-link>
  </div>
  </section>
</template>

<script>
import selections from '../selections';
import IconBanner from './IconBanner.vue';

export default {
  components: { IconBanner },
  name: 'FinalPage',
  setup() {
    return { selections };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/finalPage.scss';
</style>
