const db = require("@/models");
const Test = db.Test;
const Op = db.Sequelize.Op;

//Create and Save a new Test
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    console.log(req.body);
    // create a test
    const test = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    Test.create(test)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Test."
            })
        });
};

//Retrieve all Tests from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Test.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving tests."
            })
        });
};

// Find a single test with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Test.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Test with id=" + id
            })
        });
};

// Update a test by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Test.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Test was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Test with id=${id}. `
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating test with id=" + id
            })
        });
};

// Delete a test with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Test.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "Test was deleted successfully"
            })
        } else {
            res.send({
                message: `Cannot delelte test with id=${id}.`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "could not delete Test with id=" + id
        })
    });
};

// Delete all tests from the database.
exports.deleteAll = (req, res) => {
    Test.destroy({
        where: {},
        trunicate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Tests were deleted successfully`})
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while removing all tests"
        })
    });
};

// Find all published tests
exports.findAllPublished = (req, res) => {
    Test.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tests"
            })
        });
};