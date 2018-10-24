<template>
  <div class="Filters">
    <div class="Filters__header sticky-block">
      Filters
      <i class="glyphicon glyphicon-remove pull-right visible-xs-block visible-sm-block"></i>
    </div>
    <div class="Filters__body">
      <FilterBy :filterByFormValues="filterValues.filterBy" />
      <SortBy :sortByFormValues="filterValues.sortBy" />
      <Feature :featureFormValue="filterValues.features" />
    </div>
  </div>
</template>

<script>
  import FilterBy from './FilterBy';
  import SortBy from './SortBy';
  import Feature from './Feature';

  export default {
    name: 'Filters',
    components: {
      Feature,
      SortBy,
      FilterBy
    },
    data() {
      return {
        filterValues: {
          filterBy: {
            lifeStyle: 'heavyShopper',
            monthSalary: 15000,
            bankSelected: [],
          },
          sortBy: {
            categorySort: 'rabbitRecommended',
            yearlyFee: false,
          },
          features: [],
        }
      }
    },
  }
</script>

<style lang="scss">
  .Filters__header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #0066cc;
    padding: 10px 15px;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }

  .FilterPanel {
    &__header {
      padding: 10px 15px;
      background-color: #dbecfd;
      color: #0066cc;
      font-weight: bold;
    }
    &__body {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .Btn {
    &--clear {
      border: 1px solid #0066cc;
      border-radius: 2px;
      padding: 1px 12px;
      color: #0066cc;
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    .Filters {
      &__header {
        position: relative;
      }

      &__body {
        box-shadow: none;
        border: 1px solid #e6e6e6;
        border-top: none;
      }
    }
  }
</style>
