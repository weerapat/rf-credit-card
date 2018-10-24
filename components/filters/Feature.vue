<template>
  <div class="panel panel-info no-border">
    <div class="panel-heading no-radius no-border">
      <span>Feature:</span>
      <button class="pull-right">Clear</button>
    </div>
    <div class="panel-body no-radius">
      <div class="row">
        <div class="col-xs-12 features-checkbox">
          <label v-for="(label, key) in featureCheckboxes" :key="key">
            <span>{{ label }}</span>
            <input type="checkbox" :id="key" class="feature-choice" :value="key" @click="updateFeatures(key)">
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Feature',
    props: ['featureFormValue'],
    data() {
      return {
        featureCheckboxes: {
          rewardFeatures: 'Reward Features',
          lowForeignExchangeFees: 'Low foreign exchange fees',
          privilegeParking: 'Privilege parking',
          lifeInsurance: 'Life insurance',
          airportLoungeAccess: 'Airport lounge access',
          conciergeService: 'Concierge service',
          shoppingMallLounge: 'Shopping mall lounge',
          limousineService: 'Limousine service',
        }
      }
    },
    methods: {
      updateFeatures: function (val) {
        this.featureFormValue.push(val);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .features-checkbox {
    label {
      display: flex;
      justify-content: space-between;
    }

    input[type="checkbox"] {
      position: relative;
    }
  }
</style>
