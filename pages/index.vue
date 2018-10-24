<template>
  <div class="container container--creditcard">
    <div class="grid-noGutter">
      <div class="col-4_xs-12_sm-12_md-12">
        <Filters/>
      </div>
      <div class="col-8_xs-12_sm-12_md-12">
        <div v-for="card in cards" :key="card.id">
          <Card :card="card" :show-more-detail="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Filters from '../components/filters/Main'
  import Card from '../components/card'

  export default {
    components: {
      Filters,
      Card,
    },

    data() {
      return {
        cards : [
          {id: 1, name: 'CITI cashback'},
          {id: 2, name: 'Citi credit card'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container--creditcard {
    padding-top: 30px;

    &>.grid-noGutter {
     margin: 0 -22px;
   }
  }
</style>
