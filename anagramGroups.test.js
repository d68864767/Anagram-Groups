const findAnagramGroups = require('./anagramGroups');

describe('findAnagramGroups', () => {
  test('should return an array of arrays with anagram groups', () => {
    const input = ["cat", "dog", "tac", "god", "good", "act"];
    const output = [["cat", "tac", "act"], ["dog", "god"], ["good"]];
    expect(findAnagramGroups(input)).toEqual(output);
  });

  test('should return empty array when input is empty', () => {
    const input = [];
    const output = [];
    expect(findAnagramGroups(input)).toEqual(output);
  });

  test('should handle single word input', () => {
    const input = ["hello"];
    const output = [["hello"]];
    expect(findAnagramGroups(input)).toEqual(output);
  });

  test('should handle no anagram case', () => {
    const input = ["hello", "world", "none"];
    const output = [["hello"], ["world"], ["none"]];
    expect(findAnagramGroups(input)).toEqual(output);
  });

  test('should handle all anagrams case', () => {
    const input = ["abc", "bca", "cab", "cba"];
    const output = [["abc", "bca", "cab", "cba"]];
    expect(findAnagramGroups(input)).toEqual(output);
  });

  test('should handle case with multiple anagram groups', () => {
    const input = ["listen", "silent", "enlist", "inlets", "google", "gogole", "cinema", "iceman"];
    const output = [["listen", "silent", "enlist", "inlets"], ["google", "gogole"], ["cinema", "iceman"]];
    expect(findAnagramGroups(input)).toEqual(output);
  });

  test('should handle case with words of different lengths', () => {
    const input = ["a", "ab", "ba", "abc", "bca", "cab", "cba"];
    const output = [["a"], ["ab", "ba"], ["abc", "bca", "cab", "cba"]];
    expect(findAnagramGroups(input)).toEqual(output);
  });

  test('should handle case with duplicate words', () => {
    const input = ["cat", "tac", "act", "cat"];
    const output = [["cat", "tac", "act", "cat"]];
    expect(findAnagramGroups(input)).toEqual(output);
  });
});
