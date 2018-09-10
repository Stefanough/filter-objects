const { expect } = require('chai');
const { byArray, byObject } = require('../');
const { messages, users } = require('./fixtures/data');

describe('the object filter', () => {
  it('filters an Array when given a queryOptions Array', () => {
    // example queryOptions[{ userId: 23 }, { userId: 42 }]
    const result = JSON.stringify(byArray(messages.data, messages.input.array));
    expect(result).to.equal(JSON.stringify(messages.output.array));
  });
});
