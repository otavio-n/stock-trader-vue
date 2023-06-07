<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-4 white--text">
      <v-card-title class="title">
        <strong>
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Qty: {{ stock.quantity }})</small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          label="Value"
          type="number"
          min="0"
          v-model.number="quantity"
          :error="surpassTotalQty || !Number.isInteger(quantity)"
        ></v-text-field>
        <v-btn
          class="blue darken-4 white--text"
          :disabled="
            surpassTotalQty || quantity <= 0 || !Number.isInteger(quantity)
          "
          @click="sellStock"
        >
          {{ surpassTotalQty ? "Exceeded" : "Sell" }}
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },

  computed: {
    surpassTotalQty() {
      return this.quantity > this.stock.quantity;
    },
  },

  methods: {
    ...mapActions({ sellStockAction: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.sellStockAction(order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>