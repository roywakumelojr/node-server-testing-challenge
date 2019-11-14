const db = require("../data/dbConfig.js");

const { insert } = require("./studentsModel.js");

describe("students model", function() {
  describe("insert()", function() {
    beforeEach(async () => {
      await db("students").truncate();
    });

    it("should insert a student", async function() {
      await insert({ name: "jerry" });

      const students = await db("students");
      expect(students).toHaveLength(1);
    });

    it("should insert the provided student", async function() {
      await insert({ name: "jerry" });
      await insert({ name: "tom" });

      const students = await db("students");

      expect(students).toHaveLength(2);
      expect(students[0].name).toBe("jerry");
      expect(students[1].name).toBe("tom");r
    });

    it("should return the inserted student", async function() {
      let student = await insert({ name: "jerry" });
      expect(student.name).toBe("jerry");
      expect(student.id).toBeDefined();

      student = await insert({ name: "tom" });
      expect(student.name).toBe("tom");
      expect(student.id).toBeDefined();
    });
  });
});
