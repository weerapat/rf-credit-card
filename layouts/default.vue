<template>
  <div>    
    <rabbit-main-nav/>
    <nuxt/>
    <rabbit-finance-footer/>
  </div>
</template>

<script>
  import RabbitMainNav from '../components/RabbitMainNav'
  import RabbitFinanceFooter from '../components/RabbitFinanceFooter'

  export default {
    components: {
      RabbitMainNav,
      RabbitFinanceFooter,
    },
  }
</script>

