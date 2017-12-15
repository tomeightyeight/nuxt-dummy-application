<template lang="html">
  <div class="loading-page" v-if="loading" v-loading="loading">
    <!-- Loading -->
  </div>
</template>

<script>
'use strict'

export default {
  data () {
    return {
      loading: false
    }
  },

  methods: {
    start () {
      this.loading = true
    },

    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
