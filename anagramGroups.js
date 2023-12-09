const { groupByAnagramSignature } = require('./utils');

/**
 * Finds groups of anagrams in a list of words.
 * @param {Array<string>} words - The array of words to find anagrams in.
 * @returns {Array<Array<string>>} - An array of arrays, where each sub-array contains words that are anagrams of each other.
 */
function findAnagramGroups(words) {
  // Group words by their anagram signature
  const groups = groupByAnagramSignature(words);
  // Extract the groups into an array of arrays
  return Object.values(groups);
}

module.exports = findAnagramGroups;
