module.exports = app => {
    const tests = require("@/controllers/test.controller.js");

    // var router = require("express").Router();

    // Create a new Test
    app.post("/", tests.create);

    //Retrieve all Test
    app.get("/", tests.findAll);

    //Retrieve all published Tests
    app.get("/published", tests.findAllPublished);

    //Retrieve a single Test with id
    app.get("/:id", tests.findOne);

    //Update a Test with id
    app.put("/:id", tests.update);

    //Delete a Test with id
    app.delete("/:id", tests.delete);

    //Delete all Tests
    app.delete("/", tests.deleteAll);


    // console.log(tests.create);
    // app.use("api/test", router);
}