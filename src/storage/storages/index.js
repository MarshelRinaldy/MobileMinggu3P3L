import AsyncStorage from '@react-native-async-storage/async-storage';

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "redux", // id untuk local storage
    storage: AsyncStorage, // local storage yang dipakai
    whitelist: ["dataLogin"], // list data yang perlu di simpan dan tidak terhapus
    blacklist: [], // list data yang tidak perlu disimpan(optional).
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // saving error
        console.log(`${e} + ERROR STORE DATA`);
    }
};

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.log(`${e} + ERROR READING VALUE`);
    }
};