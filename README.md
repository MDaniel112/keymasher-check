# Keymasher Check

Checks for common "keymashed" strings such as "qwe", "asdft", "aaaaaa", etc. This is a simple package that uses a regex to check whether or not a string is or not "keymashed"

## Installation

```bash
npm install keymasher-check
```

## Usage

```javascript
import { checkMash } from 'keymasher-check';

checkMash("asdfasdf"); // true
checkMash("This is not a random string"); // false
```

## License

[MIT](https://choosealicense.com/licenses/mit/)