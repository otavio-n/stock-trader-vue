<template>
  <v-toolbar dark app>
    <v-toolbar-title class="headline text-uppercase">
      <span> Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/portfolio">Portfolio</v-btn>
      <v-btn flat to="/stocks">Stocks</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Close day</v-btn>
      <v-menu>
        <v-btn flat slot="activator">Save & Load</v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Save Data</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title> Load Data</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey--text">
          Balance: {{ funds | currency }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },

  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    },
  },
};
</script>

<style>
</style>