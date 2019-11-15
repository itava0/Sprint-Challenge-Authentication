const db = require("../database/dbConfig");

module.exports = {
  add,
  findBy
}


 function add(user) {
  return (
    db("users")
      .insert(user, "id")
      .then(ids => {
        const id = ids[0];
        return db("users")
          .where({ id })
          .first();
      })
  );
}

