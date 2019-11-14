const db = require("../data/dbConfig.js");

const { add } = require("./studentsModel.js");

describe("students model", function() {
  describe("add()", function() {
    beforeEach(async () => {
      await db("students").truncate();
    });

    it("should add a student", async function() {
      await add({ name: "jerry" });

      const students = await db("students");
      expect(students).toHaveLength(1);
    });

    it("should add the provided student", async function() {
      await add({ name: "jerry" });
      await add({ name: "tom" });

      const students = await db("students");

      expect(students).toHaveLength(2);
      expect(students[0].name).toBe("jerry");
      expect(students[1].name).toBe("tom");r
    });

    it("should return the added student", async function() {
      let student = await add({ name: "jerry" });
      expect(student.name).toBe("jerry");
      expect(student.id).toBeDefined();

      student = await add({ name: "tom" });
      expect(student.name).toBe("tom");
      expect(student.id).toBeDefined();
    });
  });
});
