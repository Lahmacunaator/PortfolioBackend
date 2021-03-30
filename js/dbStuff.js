const Database = require("@replit/database")
const db = new Database();
function getDb()
{
  return db;
}

function createDbEntry(key, value)
{
  db.set(key, value).then(() => {
  console.log("database entry created" + key + " " + value)});
}

function getDbEntry(key)
{
  var value = db.get(key).then(value => console.log(value));
  return value;
}

function listAllDbKeys()
{
  db.list().then(keys => {});
}

module.exports = { getDb, createDbEntry, getDbEntry, listAllDbKeys}