const app = require("../index");
const request = require("supertest");

test("Post a Todo ", (done) => {
  request(app)
    .post("/todos")
    .send({ description: "Wash my car", detail: "Washing the car at 9.00 AM" })
    .expect("Content-Type", /json/)
    .expect(201)
    .then((response) => {
      expect(response.body.message).toBe("New todo added successfully!");
      done();
    })
    .catch(done);
});
