const db = {
  user: [
    { id: 1, name: "John" },
    { id: 2, name: "Dulce" },
    { id: 3, name: "Mathew" },
    { id: 4, name: "Ana" },
  ],
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  let col = await list(table);
  return col.filter((item) => item.id === parseInt(id))[0] || null;
}

async function upsert(table, data) {
  db[table].push(data);
  return db[table];
}

async function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
