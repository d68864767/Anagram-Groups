# Anagram Groups

Anagram Groups is a utility designed to find groups of anagrams in a list of words. In the land of Stringdon, words have power, and anagrams share the same mystical energy. This tool helps the citizens of Stringdon to group words that are anagrams of each other.

## Getting Started

To use this utility, you need to have Node.js installed on your system. Once you have Node.js set up, you can clone this repository and install the dependencies.

### Prerequisites

- Node.js

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/anagram-groups.git
cd anagram-groups
```

Then, install the necessary packages using npm:

```bash
npm install
```

## Running the tests

This project uses Jest for testing. To run the tests, execute the following command:

```bash
npm test
```

## Usage

To find anagram groups, you need to require the `findAnagramGroups` function from the `anagramGroups.js` file and call it with an array of words as the argument.

```javascript
const findAnagramGroups = require('./anagramGroups');

const words = ["cat", "dog", "tac", "god", "good", "act"];
const anagramGroups = findAnagramGroups(words);

console.log(anagramGroups);
// Output: [["cat", "tac", "act"], ["dog", "god"], ["good"]]
```

## Function Description

The `findAnagramGroups` function takes the following parameter:

- `words`: an array of strings, where each string is a word.

It returns an array of arrays, where each sub-array contains all the words from the input that are anagrams of each other. Words are returned in the order they appeared in the input.

## Constraints

- The function must not use more than O(n) space, where n is the total number of characters in all words.
- The function must complete in less than O(n log n) time.

## Authors

- Your Name

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to the citizens of Stringdon for inspiring this project.
