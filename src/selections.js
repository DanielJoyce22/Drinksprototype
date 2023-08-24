// src/selections.js
import { ref } from 'vue';

const selections = {
  firstName: ref(''),
  occasion: ref([]),
  flavour: ref(''),
  drinkBases: ref([]),
  mixers: ref([]),
  syrups: ref([]),
};

export default selections;
