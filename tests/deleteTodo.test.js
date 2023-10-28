const app = require("../index");
const request = require("supertest");

test("Delete a Todo ", (done) => {
  request(app)
    .delete("/todos/7")
    .expect("Content-Type", /json/)
    .expect(201)
    .then((response) => {
      expect(response.body.message).toBe("Todo has been deleted!");
      done();
    })
    .catch(done);
});
