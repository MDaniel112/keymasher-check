# Keymasher Check

A simple package that checks for common "keymashed" strings such as "qwe", "asdft", "aaaaaa", and so on, using a simple score system.

## Installation

```bash
npm install keymasher-check
```

## Usage

```javascript
import { checkMash } from 'keymasher-check';

console.log(checkMash("asdfasdf"));     // { isKeymash: true, confidence: 0.9 }
console.log(checkMash("hello world"));  // { isKeymash: false, confidence: 0 }
console.log(checkMash("qweqwe"));       // { isKeymash: true, confidence: 0.8 }
console.log(checkMash("aaaaaaaa"));     // { isKeymash: true, confidence: 1 }
console.log(checkMash("kfdlksjfdlk"));  // { isKeymash: true, confidence: ~0.6 }
console.log(checkMash("user feedback")); // { isKeymash: false, confidence: 0.1 }
```

## License

[ISC](https://choosealicense.com/licenses/isc/)