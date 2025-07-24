# Keymasher Check

Checks for common "keymashed" strings such as "qwe", "asdft", "aaaaaa", etc. This is a simple package that uses a regex to check whether or not a string is or not "keymashed"

## Installation

```bash
npm install keymasher-check
```

## Usage

```javascript
import { checkMash } from 'keymasher-check';

console.log(analyzeKeymash("asdfasdf"));     // { isKeymash: true, confidence: 0.9 }
console.log(analyzeKeymash("hello world"));  // { isKeymash: false, confidence: 0 }
console.log(analyzeKeymash("qweqwe"));       // { isKeymash: true, confidence: 0.8 }
console.log(analyzeKeymash("aaaaaaaa"));     // { isKeymash: true, confidence: 1 }
console.log(analyzeKeymash("kfdlksjfdlk"));  // { isKeymash: true, confidence: ~0.6 }
console.log(analyzeKeymash("user feedback")); // { isKeymash: false, confidence: 0.1 }
```

## License

[ISC](https://choosealicense.com/licenses/isc/)