const app = require("../index");
const request = require("supertest");

test("List All Todos ", (done) => {
  request(app)
    .get("/todos")
    .expect("Content-Type", /json/)
    .expect(201)
    .then((response) => {
      expect(response.body.message).toBe("All todos retrieved successfully!");
      done();
    })
    .catch(done);
});
