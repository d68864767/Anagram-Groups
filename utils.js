/**
 * Utility functions for the Anagram Groups project.
 */

/**
 * Generates a signature for a word by sorting its letters.
 * This signature can be used to identify anagrams.
 * @param {string} word - The word to generate a signature for.
 * @returns {string} - The sorted letter signature of the word.
 */
function generateWordSignature(word) {
  return word.split('').sort().join('');
}

/**
 * Groups words by their anagram signatures.
 * @param {Array<string>} words - The array of words to group.
 * @returns {Object} - An object where keys are signatures and values are arrays of words.
 */
function groupByAnagramSignature(words) {
  const groups = {};
  for (const word of words) {
    const signature = generateWordSignature(word);
    if (!groups[signature]) {
      groups[signature] = [];
    }
    groups[signature].push(word);
  }
  return groups;
}

module.exports = {
  generateWordSignature,
  groupByAnagramSignature
};
