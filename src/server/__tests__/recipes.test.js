
/* eslint-env jest */

const dbHelper = require('../helpers/db');

const recipes = require('../controllers/recipes');

const { fake } = require('sinon');

const { NotFoundError } = require('restify-errors');

describe('getAllRecipes()', () => {
  let res = {}, next;

  beforeEach(async(done) => {
    await dbHelper.initialiseDB();
    res = {};
    res.status = jest.fn();
    res.send = jest.fn();
    res.status.mockReturnValue(res);
    next = jest.fn();
    done();
  });

  afterEach(async(done) => {
    await dbHelper.closeDB();
    done();
  });

  it('should fetch all recipes', async(done) => {
    // Call function
    await recipes.getAllRecipes({ params: { id: 1}}, res, () => {});
    // Expect response
    expect(res.send.mock.calls.length).toBe(1);
    // Expect recipe content
    expect(res.send).toBeCalledWith(
      expect.arrayContaining([expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        createdAt: expect.any(Date),
        summary: expect.any(String),
        steps: expect.arrayContaining([expect.any(String)]),
        ingredients: expect.arrayContaining([expect.objectContaining({
          amount: expect.any(String),
          item: expect.any(String),
        })]),
      })])
    );
    done();
  });

  it('should return no recipes', async(done) => {
    await recipes.getSingleRecipe({ params: { id: 23984529384729384}}, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(new NotFoundError('Recipe not found'));
    done();
  });
});


describe('getSingleRecipe()', () => {
  let res = {}, next;

  beforeEach(async(done) => {
    await dbHelper.initialiseDB();
    res = {};
    res.status = jest.fn();
    res.send = jest.fn();
    res.status.mockReturnValue(res);
    next = jest.fn();
    done();
  });

  afterEach(async(done) => {
    await dbHelper.closeDB();
    done();
  });

  it('should fetch a recipe', async(done) => {
    // Call function
    await recipes.getSingleRecipe({ params: { id: 1}}, res, () => {});
    // Expect response
    expect(res.send.mock.calls.length).toBe(1);
    // Expect recipe content
    expect(res.send).toBeCalledWith(
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        createdAt: expect.any(Date),
        summary: expect.any(String),
        steps: expect.arrayContaining([expect.any(String)]),
        ingredients: expect.arrayContaining([expect.objectContaining({
          amount: expect.any(String),
          item: expect.any(String),
        })]),
      })
    );
    done();
  });

  it('should return no recipe', async(done) => {
    await recipes.getSingleRecipe({ params: { id: 23984529384729384}}, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(new NotFoundError('Recipe not found'));
    done();
  });
});

