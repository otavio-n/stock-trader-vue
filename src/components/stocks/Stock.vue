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
        <v-text-field
          label="Value"
          type="number"
          min="0"
          v-model.number="quantity"
        ></v-text-field>
        <v-btn
          class="green darken-4 white--text"
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          @click="buyStock"
          >Buy</v-btn
        >
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      // eslint-disable-next-line
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>