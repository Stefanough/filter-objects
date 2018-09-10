const { expect } = require('chai');
const { byArray, byObject } = require('../');
const { messages, users } = require('./fixtures/data');

describe('the object filter', () => {
  it('filters an Array when given a queryOptions Array', () => {
    // example queryOptions[{ userId: 23 }, { userId: 42 }]
    const result = JSON.stringify(byArray(messages.data, messages.input.array));
    expect(result).to.equal(JSON.stringify(messages.output.array));
  });

  it('filters an Array when given an queryOptions object', () => {
    // example queryOptions { questionId: 84 }
    const result = JSON.stringify(byObject(messages.data, messages.input.object));
    expect(result).to.equal(JSON.stringify(messages.output.object));
  });

  it('filters an Array when given a queryOptions object with multiple different filters', () => {
    // { age: 25-29, sex: M }
    const result = JSON.stringify(byObject(users.data, { age: '25-29', sex: 'M' }));
    expect(result).to.equal(JSON.stringify(users.multipleDifferentFilters.output));
  });

  it('filters an Array when given a queryOptions object with multiple overlapping filters', () => {
    // example queryOptions { age: [ '25-29', '50-59' ] }
    const result = JSON.stringify(byObject(users.data, users.input.object));
    expect(result).to.equal(JSON.stringify(users.output.object));
  });

  it('filters an Array when given a queryOptions object with multiple overlapping and different filters', () => {
    // { age: '25-29', age: '50-59', income: '40,000-50,000', income: '<20,000', sex: 'F' }
    const result = JSON.stringify(byObject(users.data, users.multiOverlappingDiff.input));
    expect(result).to.equal(JSON.stringify(users.multiOverlappingDiff.output));
  });
});
