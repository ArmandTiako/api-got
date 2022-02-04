import request from "supertest";
import app from "./app";

describe("test the root path", () => {
    it("should be status 200", (done) => {
        request(app)
            .get("/")
            .then((res) => {
                expect(res.statusCode).toBe(200);
                done();
            });
    });
});
