<template>
  <picture>
    <source v-for="source in sources" :key="source.type"
      :type="source.type"
      :srcset="source.srcset"
    />
    <img :src="defaultSource.src" :alt="defaultSource.alt"/>
  </picture>
</template>

<script>
  export default {
    name: 'ImgResponsive',
    props: {
      defaultSource: {
        type: Object,
      },
      sources: {
        type: Array,
      }
    }
  }
</script>
