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
    // const newItems = {
    //   ...state.items,
    //   [item.id]: item
    // }
    // state.items = newItems

    state.items = {
      ...state.items,
      [item.id]: item
    }
  },
  deleteItem (state, item) {
    // const newItems = {
    //   ...state.items
    // }
    // delete newItems[item.id]
    // state.items = newItems

    state.items = {
      ...state.items
    }
    delete state.items[item.id]
  }
}

export const ACTION_TYPES = {
  ADD_ITEM: 'ADD_ITEM',
  DEL_ITEM: 'DEL_ITEM',
  TEST: 'TEST'
}

export const actions = {
  [ACTION_TYPES.ADD_ITEM] ({ commit, dispatch }, item) {
    dispatch(ACTION_TYPES.TEST)
    commit('addItem', item)
  },
  [ACTION_TYPES.DEL_ITEM] ({ commit }, item) {
    commit('deleteItem', item)
  },
  [ACTION_TYPES.TEST] () {
    console.log('TEST ACTION')
  }
}
