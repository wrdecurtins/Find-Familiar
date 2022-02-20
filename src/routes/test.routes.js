import tests from '@/controllers/test.controller.js';
import express from 'express';
export default (app) => {

  var router = express.Router();

  // Create a new Test
  router.post('/', tests.create);

  //Retrieve all Test
  router.get('/', tests.findAll);

  //Retrieve all published Tests
  router.get('/published', tests.findAllPublished);

  //Retrieve a single Test with id
  router.get('/:id', tests.findOne);

  //Update a Test with id
  router.put('/:id', tests.update);

  //Delete a Test with id
  router.delete('/:id', tests.delete);

  //Delete all Tests
  router.delete('/', tests.deleteAll);

  // console.log(tests.create);
  app.use('/test', router);
};
