<template>
  <div class="btn-group" :class="{open: showMenu}">
    <button type="button"
            @click="toggleMenu()"
            class="btn btn-default btn-block dropdown-toggle grid-noGutter-spaceBetween-middle"
    >
      <span class="col text-left">
        <i :class="placeholderIcon" v-if="placeholderIcon"></i>
        {{ preSelectedOption }}
      </span>
      <i class="rcompare-caret"></i>
    </button>

    <ul class="dropdown-menu" v-if="showMenu">
      <li class="disabled">
        <a href="javascript:void(0)">{{ placeholderText }}</a>
      </li>
      <li v-for="option in options">
        <a href="javascript:void(0)" @click="updateOption(option.value)" :data-value="option.value">
          <i v-if="option.iconClass" :class="option.iconClass"></i>
          {{ option.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'DropDown',
    data() {
      return {
        selectedOption: '',
        showMenu: false,
        placeholderText: 'Please select an item',
        placeholderIcon: '',
      }
    },

    props: {
      options: {
        type: [Array, Object]
      },
      selected: '',
      placeholder: [String]
    },

    mounted() {
      this.selectedOption = this.selected;

      if (this.placeholder) {
        this.placeholderText = this.placeholder;
      }
    },

    methods: {
      updateOption(option) {
        this.selectedOption = option;
        this.showMenu = false;
        this.$emit('updateOption', this.selectedOption);
      },

      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
    },

    computed: {
      preSelectedOption: function () {
        if (this.selectedOption && this.options.find(x => x.value === this.selectedOption)) {
          let textShown = '';
          if (this.options.find(x => x.value === this.selectedOption).iconClass) {
            this.placeholderIcon = this.options.find(x => x.value === this.selectedOption).iconClass;
          }
          return textShown + this.options.find(x => x.value === this.selectedOption).text;
        } else {
          return this.placeholderText;
        }
      }
    }
  }
</script>

<style>
  .open>.dropdown-menu {
    position: static;
    float: none;
  }
</style>
