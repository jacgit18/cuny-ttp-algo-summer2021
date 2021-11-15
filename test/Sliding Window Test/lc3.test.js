const lengthOfLongestSubstring = require('../../_Algo/slidingwindow/lc3/lc3');
  
  test('edgecase1', () => {
    const edgecase1 = lengthOfLongestSubstring("abcabcbb");

    expect(edgecase1).toEqual(3);

  });
  
  test('edgecase2', () => {
    const edgecase2 = lengthOfLongestSubstring("bbbbb");

    expect(edgecase2).toEqual(1);
  });

  test('edgecase3', () => {
    const edgecase3 = lengthOfLongestSubstring("pwwkew");

    expect(edgecase3).toEqual(3);
  });


  test('edgecase4', () => {
    const edgecase4 = lengthOfLongestSubstring("");

    expect(edgecase4).toEqual(0);
  });
 


