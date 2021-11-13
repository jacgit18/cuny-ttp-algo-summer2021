const lengthOfLongestSubstring = require('../../_Algo/slidingwindow/lc3/lc3');
  
  test('edgecase1', () => {
    const edgecase1 = reverseString("abcabcbb");

    expect(edgecase1).toEqual(3);
  });
  
  test('edgecase2', () => {
    const edgecase2 = reverseString("bbbbb");

    expect(edgecase2).toEqual(1);
  });

  test('edgecase3', () => {
    const edgecase3 = reverseString("pwwkew");

    expect(edgecase3).toEqual(3);
  });


  test('edgecase4', () => {
    const edgecase4 = reverseString("");

    expect(edgecase4).toEqual(0);
  });
 


