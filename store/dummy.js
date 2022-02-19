const db = {
  user: [
    { id: 1, name: "John" },
    { id: 2, name: "Dulce" },
    { id: 3, name: "Mathew" },
    { id: 4, name: "Ana" },
  ],
};

function list(table) {
  return db[table];
}

function get(table, id) {
  let col = list(table);
  return col.filter((item) => item.id === id)[0] || null;
}

function upsert(table, data) {
  db[collection].push(data);
}

function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
