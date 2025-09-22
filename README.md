# Helper-utils-ts

The `Helper-utils-ts` package is a collection of small, reusable functions designed to help with common programming tasks. These functions are likely not large, complex features, but rather a set of "utility" functions that make a developer's life easier by abstracting away repetitive code. Examples could include functions for strings validation, handling null and undefined conditional checks.

# Installation using Node v24.8.0

```
npm install -g helper-utils-ts // to install globally
npm install helper-utils-ts // to install for specific root folder
```

# Usage in Node.js

```
import { isUndefined } from 'helper-utils-ts';
// declare value without any declarations
let test;

console.log('checking if value is undefined ', isUndefined(test)) // outputs true as boolean.

```

## Support Functions

* isNull // confirms null values presence
* isUndefined // confirms undefined value presence
* isEmpty // confirms empty string value or stringified null or stringified undefined value presence.

Refer the [package source](https://github.com/srinidhi-anand/helper-ts/tree/master) for more details.
