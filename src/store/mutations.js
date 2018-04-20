import Vue from 'vue'

import {
  RECEIVE_INDEX,
  RECEIVE_CAROUSEL
} from './mutation-types'

export default {
  [RECEIVE_INDEX](state,{index}){
    state.index = index
  },
  [RECEIVE_CAROUSEL](state,{carousel}){
    state.carousel = carousel
  }
}
