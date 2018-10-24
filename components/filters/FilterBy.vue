<template>
  <div class="FilterPanel">
    <div class="FilterPanel__header">
      Filter by:
    </div>
    <div class="FilterPanel__body">
      <div class="FilterPanel__input grid-1">
        <label for="life-style" class="col">Life style</label>
        <DropDown :options="arrayOfObjects" :selected="lifeStyles" v-on:updateOption="onLifeStylesSelected" class="col" />
      </div>

      <div class="FilterPanel__input">
        <SalarySlider/>
      </div>
      <div class="FilterPanel__input">
        <div class="grid-spaceBetween">
          <div class="col">
            <label for="banks-list">Banks list</label>
          </div>
          <div class="col">
            <button class="Btn--clear pull-right">Clear</button>
          </div>
        </div>

        <div class="FilterPanel__input">
          <div class="FilterBanks grid-4">
            <div class="col">
              <label class="FilterBanks__btn btn text-hide FilterBanks__btn--all" :class="{active: allBanks}">
                <input type="checkbox" v-model="allBanks" @click="isCheckedAll">
              </label>
            </div>
            <div class="col" v-for="(val, index) in banksList" :key="index">
              <label class="FilterBanks__btn btn text-hide" :class="[{active: val}, `FilterBanks__btn--${index}`]">
                <input type="checkbox" :value="index" v-model="filterByFormValues.bankSelected" @click="updateChecked(index)">
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SalarySlider from '~/components/filters/SalarySlider'
  import DropDown from '~/components/DropDown'

  export default {
    name: 'FilterBy',
    components: {
      DropDown,
      SalarySlider
    },
    props: ['filterByFormValues'],
    data () {
      return {
        arrayOfObjects: [
          {
            value: 'firstJobber',
            text: 'First Jobber',
            iconClass: 'rcompare-firstjobber',
          },
          {
            value: 'installments',
            text: 'Installments',
            iconClass: 'rcompare-clock-minimal',
          },
          {
            value: 'heavyShopper',
            text: 'Heavy Shopper',
            iconClass: 'rcompare-shopping-bag',
          },
          {
            value: 'foodLover',
            text: 'Food lover',
            iconClass: 'rcompare-spoon-fork',
          },
          {
            value: 'traveller',
            text: 'Traveller',
            iconClass: 'rcompare-plane-oblique',
          },
          {
            value: 'executive',
            text: 'Executive',
            iconClass: 'rcompare-executive',
          }
        ],
        lifeStyles: 'heavyShopper',
        banksList: {
          scb: this.filterByFormValues.bankSelected.includes('scb'),
          tmb: this.filterByFormValues.bankSelected.includes('tmb'),
          gsb: this.filterByFormValues.bankSelected.includes('gsb'),
          kbank: this.filterByFormValues.bankSelected.includes('kbank'),
          krungsri: this.filterByFormValues.bankSelected.includes('krungsri'),
          thanachart: this.filterByFormValues.bankSelected.includes('thanachart'),
          krungthai: this.filterByFormValues.bankSelected.includes('krungthai'),
        },
        allBanks: true,
      }
    },
    methods: {
      updateChecked: function (val) {
        this.banksList[val] = !this.banksList[val];

        for (let prop in this.banksList) {
          if (this.banksList[prop]) {
            this.allBanks = false;
            break;
          } else {
            this.allBanks = true;
          }
        }
      },
      isCheckedAll: function () {
        this.filterByFormValues.bankSelected = [];

        this.banksList = {
          scb: false,
          tmb: false,
          gsb: false,
          kbank: false,
          krungsri: false,
          thanachart: false,
          krungthai: false,
        }
      },
      onLifeStylesSelected: function (value) {
        this.lifeStyles = value;
      },
    },
    mounted: function () {
      this.allBanks = !this.filterByFormValues.bankSelected.length;
    }
  }
</script>

<style lang="scss" scoped>
  .FilterPanel {
    &__input {
      padding: 15px 0;
    }
  }

  .FilterBanks {
    padding: 10px 0;

    &__btn {
      outline: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      border-radius: 50%;
      margin: auto;
      width: 50px;
      height: 50px;
      background-size: contain;

      &:active,
      &.active {
        box-shadow: none;
        outline: none;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
        background-size: contain;

        &::before {
          font-family: 'rabbit-comparison-font';
          font-size: 14px;
          content: '\e905';
        }
      }

      input {
        display: none;
      }

      &--all {
        background-color: #f5f5f5;
      }
      &--scb {
        background-color: #513282;
      }
      &--tmb {
        background-color: #11519b;
      }
      &--thanachart {
        background-color: #f37d31;
      }
      &--kbank {
        background-color: #33a851;
      }
      &--krungsri {
        background-color: #fec343;
      }
      &--krungthai {
        background-color: #69bbe1;
      }
      &--gsb {
        background-color: #ea0a8c;
      }
    }
  }
</style>
