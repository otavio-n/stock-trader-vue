export default {
  state: {
    funds: 10000,
    stocks: [],
  },

  mutations: {
    buyStock(state, stock) {
      const { stockId, quantity, stockPrice } = stock;
      const record = state.stocks.find((element) => element.id === stockId);
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity,
        });
      }
      state.funds -= quantity * stockPrice;
    },
    sellStock(state, stock) {
      const { stockId, quantity, stockPrice } = stock;
      const record = state.stocks.find((element) => element.id === stockId);
      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
      state.funds += quantity * stockPrice;
    },
    setPortfolio(state, stocks) {
      state.funds = stocks.funds && stocks.funds;
      state.stocks = stocks.stockPortfolio && stocks.stockPortfolio;
    },
  },

  actions: {
    sellStock({ commit }, order) {
      commit("sellStock", order);
    },
    setPortfolio({ commit }, stocks) {
      commit("setPortfolio", stocks);
    },
  },

  getters: {
    stockPortfolio(state, getters) {
      return state.stocks.map((stock) => {
        const record = getters.stocks.find(
          (element) => element.id === stock.id
        );
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price,
        };
      });
    },
    funds(state) {
      return state.funds;
    },
  },
};
