import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from '../../store/reducers/carrinho'
import favoritoReducer from '../../store/reducers/favoritar'

import api from '../../api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
