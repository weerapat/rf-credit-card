<template>
  <div class="filter salary">
    <label>Month salary:</label>
    <p class="salary-text text-center">{{ salary }}</p>
    <no-ssr>
      <VueSlider v-model="salary"
         :dot-size="30"
         :min="5000"
         :max="100000"
         :interval="1000"
         :speed="0.3"
         :tooltip="false"
         :sliderStyle="{backgroundColor: '#3498db'}"
      ></VueSlider>
    </no-ssr>
  </div>
</template>

<script>
  const VueSlider = process.browser ? require('vue-slider-component') : '';

  export default {
    name: 'SalarySlider',
    components: {
      VueSlider
    },
    data() {
      return {
        salary: this.$store.state.filters.salary,
      }
    },
    watch: {
      salary(newVal) {
        this.$store.commit('filters/setSalary', newVal)
      }
    }
  }
</script>
