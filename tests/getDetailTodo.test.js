const app = require("../index");
const request = require("supertest");

test("Get Detail Todo By Id ", (done) => {
  request(app)
    .get("/todos/10")
    .expect("Content-Type", /json/)
    .expect(201)
    .then((response) => {
      expect(response.body.message).toBe("Todo data successfully retrieved!");
      done();
    })
    .catch(done);
});
