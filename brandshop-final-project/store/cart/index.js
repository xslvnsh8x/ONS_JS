export const state = () => {
  return {
    items: {}
  }
}

export const getters = {
  counter (state) {
    const { items } = state

    return Object.keys(items).length
  }
}

export const mutations = {
  addItem (state, item) {
    state.items = {
      ...state.items,
      [item.id]: item
    }
    if (state.items[item.id].quantity === 0) {
      state.items[item.id].quantity += 1
    }
  },
  deleteItem (state, item) {
    state.items = {
      ...state.items
    }
    state.items[item.id].quantity = 0
    delete state.items[item.id]
  },
  increaseItem (state, item) {
    state.items = {
      ...state.items
    }
    state.items[item.id].quantity += 1
  },
  decreaseItem (state, item) {
    state.items = {
      ...state.items
    }
    if (state.items[item.id].quantity > 1) {
      state.items[item.id].quantity -= 1
    } else {
      state.items[item.id].quantity = 0
      delete state.items[item.id]
    }
  },
  clearCart (state) {
    state.items = {
      ...state.items
    }
    const cartItems = Object.values(state.items)
    // eslint-disable-next-line no-return-assign
    cartItems.forEach(item => item.quantity = 0)
    state.items = {}
  }
}

export const ACTION_TYPES = {
  ADD_ITEM: 'ADD_ITEM',
  DEL_ITEM: 'DEL_ITEM',
  INCREASE_ITEM: 'INC_ITEM',
  DECREASE_ITEM: 'DEC_ITEM',
  CLEAR_CART: 'CLR_CART'
}

export const actions = {
  [ACTION_TYPES.ADD_ITEM] ({ commit }, item) {
    commit('addItem', item)
  },
  [ACTION_TYPES.DEL_ITEM] ({ commit }, item) {
    commit('deleteItem', item)
  },
  [ACTION_TYPES.INCREASE_ITEM] ({ commit }, item) {
    commit('increaseItem', item)
  },
  [ACTION_TYPES.DECREASE_ITEM] ({ commit }, item) {
    commit('decreaseItem', item)
  },
  [ACTION_TYPES.CLEAR_CART] ({ commit }) {
    commit('clearCart')
  }
}
