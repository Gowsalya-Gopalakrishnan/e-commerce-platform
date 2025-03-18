import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import { reducerFn } from './reducers/reducer'
import {thunk} from 'redux-thunk'

const rootReducer=combineReducers({
    reducer:reducerFn
})

export const store = createStore(rootReducer,applyMiddleware(thunk))