import { afterEach, beforeEach } from "@jest/globals";
import mongoose from "mongoose";
import request from "supertest";
import app from "../../app.js";

describe("GET /authors", () => {
    const uri =
        "mongodb+srv://root:root@cluster0.z7zvz.mongodb.net/books-db?retryWrites=true&w=majority";
    beforeEach(async () => {
        await mongoose.connect(uri);
    });
    afterEach((done) => {
        mongoose.disconnect(done);
    });
    it("should responds with status 200", (done) => {
        request(app).get("/api/authors/").expect("Content-type", /json/).expect(200, done);
    });
    it("should responds with status 200 with some data", (done) => {
        request(app)
            .get("/api/authors/")
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) => {
                res.body.data.length = 2;
                res.body.data[0].name = "toto";
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
    it("should responds status 404 when no authorId found", () => {
        let authorId = "1234";
        request(app).get(`/api/author/${authorId}`).expect(404);
    });
});
describe("POST /authors/create", () => {
    const uri =
        "mongodb+srv://root:root@cluster0.z7zvz.mongodb.net/books-db?retryWrites=true&w=majority";
    beforeEach(async () => {
        await mongoose.connect(uri);
    });
    afterEach((done) => {
        mongoose.disconnect(done);
    });
    it("should create a new author with status 201", (done) => {
        request(app)
            .post("/api/author/create")
            .expect("Content-Type", /json/)
            .send({
                name: "Cédric",
            })
            .expect(201, done);
    });
    it("shouldn't create a new author when no field is given", (done) => {
        request(app)
            .post("/api/author/create")
            .expect("Content-Type", /json/)
            .send({
                name: "",
            })
            .expect(400, done);
    });
});
