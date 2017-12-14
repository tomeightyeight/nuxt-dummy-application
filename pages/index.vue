<template>
  <section>{{ filename }}</section>
</template>

<script>
'use strict'

export default {
  name: 'index-view',

  data () {
    return {
      filename: 'index.vue'
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>