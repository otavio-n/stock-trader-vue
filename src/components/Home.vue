<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">
      Trade and Consult your Stocks
    </h1>
    <v-sheet :elevation="6" class="pa-2 blue darken-2">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline font-weight-light">
        You can Save & Load your Data
      </span>
    </v-sheet>
    <v-sheet :elevation="6" class="pa-2 success mt-3">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline font-weight-light">
        Click on 'Close Day' to start a new day
      </span>
    </v-sheet>

    <v-divider class="my-4"></v-divider>
    <p class="display-1 font-weight-light"><strong>Balance:</strong> {{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style>