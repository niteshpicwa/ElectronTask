import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../Redux/RootReducer";
import thunk from 'redux-thunk';
const logger = store => {//TODO: Is it useful? How to use?
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
};

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    // whitelist: ['LoginReducer']
    // blacklist: ['utilityLayout', 'serverStatus']
};
const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
export const persistor = persistStore(store);
