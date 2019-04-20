import { openDB, deleteDB, wrap, unwrap } from 'idb';

const dbPromise = openDB('basil', 3, {
 upgrade(db) {
   db.createObjectStore('incomes');
   db.createObjectStore('expenses');
   db.createObjectStore('investments');
 }
});

const idbBasil = {
 async get(table, key) {
   return (await dbPromise).get(table, key);
 },
 async set(table,key, val) {
   return (await dbPromise).put(table, val, key);
 },
 async delete(table, key) {
   return (await dbPromise).delete(table, key);
 },
 async clear(table) {
   return (await dbPromise).clear(table);
 },
 async keys(table) {
   return (await dbPromise).getAllKeys(table);
 },
};

export default idbBasil
