const db = require("../data/dbConfig");

const { add } = require("./studentsModel.js");

describe("students model", function() {
  describe("add()", function() {
    beforeEach(async () => {
      await db("students").truncate();
    });

    it("should add a student", async function() {
      await add({ name: "tom" });

      const students = await db("students");
      expect(students).toHaveLength(1);
    });

    it("should add the provided student", async function() {
      await add({ name: "tom" });
      await add({ name: "Jerry" });

      const students = await db("students");

      expect(students).toHaveLength(2);
      expect(students[0].name).toBe("tom");
      expect(students[1].name).toBe("Jerry");
    });

  });
});
