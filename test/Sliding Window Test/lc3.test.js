const LongestSubstring = require('../../_Algo/slidingwindow/lc3/lc3');
  
  test('edgecase1', () => {
    const edgecase1 = LongestSubstring.lengthOfLongestSubstring("abcabcbb");

    expect(edgecase1).toEqual(3);

  });

  test('edgecase1_2', () => {
    const edgecase1_2 = LongestSubstring.lengthOfLongestSubstring2("abcabcbb");

    expect(edgecase1_2).toEqual(3);

  });
  
  test('edgecase2', () => {
    const edgecase2 = LongestSubstring.lengthOfLongestSubstring("bbbbb");

    expect(edgecase2).toEqual(1);
  });

  test('edgecase2_2', () => {
    const edgecase2_2 = LongestSubstring.lengthOfLongestSubstring2("bbbbb");

    expect(edgecase2_2).toEqual(1);

  });

  test('edgecase3', () => {
    const edgecase3 = LongestSubstring.lengthOfLongestSubstring("pwwkew");

    expect(edgecase3).toEqual(3);
  });

  test('edgecase3_2', () => {
    const edgecase3_2 = LongestSubstring.lengthOfLongestSubstring2("pwwkew");

    expect(edgecase3_2).toEqual(3);

  });

  test('edgecase4', () => {
    const edgecase4 = LongestSubstring.lengthOfLongestSubstring("");

    expect(edgecase4).toEqual(0);
  });

  test('edgecase4_2', () => {
    const edgecase4_2 = LongestSubstring.lengthOfLongestSubstring2("");

    expect(edgecase4_2).toEqual(0);
  });
 


