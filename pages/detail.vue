<template>
  <div class="container container--creditcard">
    <div class="grid-noGutter">
      <div class="col-4_xs-12_sm-12_md-12">

        <nuxt-link class="btn btn-default btn-more" to="/" role="button">Back</nuxt-link>
        <Filters/>
      </div>
      <div class="col-8_xs-12_sm-12_md-12">
        <Card :card="card"/>

        <div class="col-xs-12 credit-card-details">
          <div class="summary-cc">
            <h2>Summary</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda cum error excepturi libero magnam quaerat quod reiciendis repellendus vero? Beatae dolor illo maxime quis sed, sunt veniam veritatis vitae?
            </p>
          </div>
          <div class="benefits-cc">
            <h2>Benefits</h2>
            <div v-for="i in 5" class="benefits-list">
              <h5>Cash Back</h5>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              </ul>
            </div>
          </div>
          <div class="qualification-fees">
            <h2>Qualification & Fees</h2>
            <div class="fees">
              <h5>Fees</h5>
              <div v-for="i in 3" class="list-item">
                <span class="item-key">consectetur adipisicing elit.</span>
                <span class="item-value">1,500$</span>
              </div>
            </div>
            <div class="qualification">
              <h5>Qualification</h5>
              <div v-for="i in 3" class="list-item">
                <span class="item-key">consectetur adipisicing elit.</span>
                <span class="item-value">1,500$</span>
              </div>
            </div>
          </div>
          <div class="benefits-summary">
            <h2>Benefits Summary</h2>
            <div v-for="i in 4" :class="`category-${i}`">
              <h5>Category {{ i }}</h5>
              <div v-for="j in 3" class="list-item">
                <span class="item-key">consectetur adipisicing elit.</span>
                <i class="glyphicon glyphicon-ok-circle item-value"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Filters from '../components/filters/Main'
  import Card from '../components/Card'

  export default {
    components: {
      Filters,
      Card,
    },

    data() {
      return {
        card : {id: 1, name: 'CITI cashback'},
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container--creditcard {
    padding-top: 30px;
  }
  .credit-card-details {
    h2 {
      text-align: center;
    }
    .qualification-fees,
    .benefits-summary {
      .list-item {
        display: flex;
        justify-content: space-between;
        > .item-key {
          color: #696969;
        }
        > .item-value {
          font-size: 20px;
          color: #0066cc;
          font-weight: bold;
        }
      }
    }
  }
</style>
