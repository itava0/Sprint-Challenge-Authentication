const db = require("../database/dbConfig");

const { add } = require("./users-model");

describe("users model", function() {
  describe("add()", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should insert a user", async function() {
      // insert a hobbit into the db
      await add([
        {
          username: "carlos23",
          password: "12345"
        }
      ]);

      // check if it was inserted into the db
      const user = await db("users");
      expect(user).toHaveLength(1);
    });
  });
});