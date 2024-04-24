// const request = require("supertest");
// const app = require('./index');

// describe("Test todo methods", () => {
//     it(`Returns all todos`, async => {
//         await request(app).get("/todo").expect(200).then((response) => {
//             expect(response.body.length).toBe(3);
//         });
//     });
//     it(`Returns a todo with id:${2}`, async => {
//         await request(app).get("/todo/2").expect(200).then((response) => {
//             expect(response.body.name).toBe("Get pizza for dinner");
//         });
//     });
// });

// describe("Test responses from querying an externals API", () => {
//     it(`Should retrieve a random Chuck Norris joke`, async => {
//         let jokeResp = await request(app).get("/joke");
//         let joke = JSON.parse(jokeResp.text);
//         expect(joke.value).toBeTruthy();
//         done();
//     });
//     it(`No 2 chuck Norris joke wil be the same`, async => {
//         let joke1 = await request(app).get("/joke");
//         let joke2 = await request(app).get("/joke");
//         let j1 = JSON.parse(joke1.text);
//         let j2 = JSON.parse(joke2.text);
//         expect((j1.value === j2.value)).toBeFalsy();
//     });
// });

const request = require("supertest");
const app = require('./index');

describe("Test todo methods", () => {
    it(`Returns all todos`, async () => {
        const response = await request(app).get("/todo").expect(200);
        expect(response.body.length).toBe(3);
    });

    it(`Returns a todo with id:${2}`, async () => {
        const response = await request(app).get("/todo/2").expect(200);
        expect(response.body.name).toBe("Get pizza for dinner");
    });
});

describe("Test responses from querying an externals API", () => {
    it(`Should retrieve a random Chuck Norris joke`, async () => {
        const jokeResp = await request(app).get("/joke");
        const joke = JSON.parse(jokeResp.text);
        expect(joke.value).toBeTruthy();
    });

    it(`No 2 chuck Norris joke will be the same`, async () => {
        const joke1 = await request(app).get("/joke");
        const joke2 = await request(app).get("/joke");
        const j1 = JSON.parse(joke1.text);
        const j2 = JSON.parse(joke2.text);
        expect(j1.value === j2.value).toBeFalsy();
    });
});
