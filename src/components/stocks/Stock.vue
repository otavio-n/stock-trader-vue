<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-4 white--text">
      <v-card-title class="title">
        <strong>
          {{ stock.name }} <small>(Price: {{ stock.price }})</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Value" type="number"></v-text-field>
        <v-btn class="green darken-4 white--text">Buy</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["stock"],
};
</script>

<style>

</style>