<template>
  <div class="FilterPanel">
    <div class="FilterPanel__header">
     Sort by
    </div>
    <div class="FilterPanel__body">
      <DropDown :options="arrayOfObjects" :selected="categories" v-on:updateOption="onCategorySelected" class="FilterPanel__dropdown"/>
      <div class="FilterYearlyFee grid-spaceBetween-middle">
        <div class="FilterYearlyFee__label col">Without yearly fee</div>
        <div class="col">
          <label class="FilterYearlyFee__switch pull-right">
            <input type="checkbox" v-model="sortByFormValues.yearlyFee" />
            <span class="FilterYearlyFee__slider"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DropDown from '../DropDown';

  export default {
    name: 'SortBy',
    components: {DropDown},
    props: ['sortByFormValues'],
    data() {
      return {
        arrayOfObjects: [
          {
            value: 'rabbitRecommended',
            text: 'Rabbit recommended',
          },
          {
            value: 'airMiles',
            text: 'Air Miles',
          },
          {
            value: 'interestRate',
            text: 'Interest rate',
          },
          {
            value: 'cashBack',
            text: 'Cash back',
          },
          {
            value: 'points',
            text: 'Points',
          },
          {
            value: 'zeroPercent',
            text: '0% purchase',
          },
        ],
        categories: 'zeroPercent',
      }
    },
    methods: {
      onCategorySelected: function (value) {
        this.categories = value;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .FilterPanel__dropdown {
    width: 100%;
    padding: 15px 0;
  }

  .FilterYearlyFee {
    padding: 15px 0;
    &__switch {
      display: inline-block;
      height: 25px;
      position: relative;
      width: 50px;
      margin-bottom: 0;

      input {
        display: none;
      }
    }

    &__slider {
      background-color: #ccc;
      cursor: pointer;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      transition: .4s;
      border-radius: 34px;

      &::before {
        background-color: #ffffff;
        bottom: 2px;
        content: "";
        height: 21px;
        left: 2px;
        position: absolute;
        transition: .4s;
        width: 21px;
        border-radius: 50%;
      }
    }

    input:checked + .FilterYearlyFee__slider {
      background-color: #0066cc;
      &:before {
        transform: translateX(25px);
      }
    }
  }
</style>
