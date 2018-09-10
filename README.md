# This Library Filters Objects

[![Build Status](https://travis-ci.org/Stefanough/filter-objects.svg?branch=master)](https://travis-ci.org/Stefanough/filter-objects)
[![Coverage Status](https://coveralls.io/repos/github/Stefanough/filter-objects/badge.svg?branch=master)](https://coveralls.io/github/Stefanough/filter-objects?branch=master)

## Installation

`$ npm i object-filter-library`

## Usage

Filter an array of objects with either an array of objects or a filter template object. Works great for filtering JSON received from an API.

The filter currently has two methods `filter.byArray()` takes an array of objects you would like to filter and an array of objects to filter against. `filter.byObject()` takes an array of objects and a single object to filter against.

```JavaScript
const filter = require('filter-object-library');

const snakes = [
  {
    id: 0,
    ownerId: 23,
    color: 'orange',
    type: 'wiggling
  },
  {
    id: 1,
    ownerId: 23,
    color: 'yellow',
    type: 'slithering'
  },
  {
    id: 2,
    ownerId: 23,
    color: 'blue',
    type: 'wiggling'
  }
]

filter.byObject(snakes, {type: 'wiggling'});
// -> first and last snake

filter.byArray(snakes, [{id: 0}, {id: 2}]);
// -> first and last snake
```

You can give the filter template object a property with an array to select multiple optional values.

> Select *orange* or *blue* snakes.

```JavaScript
filter.byObject(snakes, { color: ['orange', 'blue'] });
// -> first and last snake
```

Filter by Array and pass in an array objects with multiple properties to get exact matches on combinations of properties.

```JavaScript
filter.byArray(snakes, [{id: 0, ownerId: 23}, {id: 2, ownerId: 23}]);
// -> first and last snake
```

It even handles complex filters

> Select Ford trucks that are silver or red from the years 1990, 1991 or 1992

```JavaScript
const filterObject = {
  make: 'Ford',
  color: ['silver', 'red'],
  year: [1990, 1991, 1992],
  type: 'truck'  
};

filter.byObject(vehicles, filterObject);
```

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/Stefanough/filter-objects/issues/new).
