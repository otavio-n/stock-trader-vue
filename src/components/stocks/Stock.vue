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
          :error="insufficientFunds"
        ></v-text-field>
        <v-btn
          class="green darken-4 white--text"
          :disabled="
            insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)
          "
          @click="buyStock"
          >{{ insufficientFunds ? "Insufficient" : "Buy" }}
        </v-btn>
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

  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },

  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>