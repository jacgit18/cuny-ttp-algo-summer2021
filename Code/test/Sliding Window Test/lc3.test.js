const LongestSubstring = require('../../_Algo/slidingwindow/lc3/lc3');
  
  test('Two Pointers', () => {
    const edgecase1 = LongestSubstring.twoPointerLongestSubstring("abcabcbb");
    const edgecase2 = LongestSubstring.twoPointerLongestSubstring("bbbbb");
    const edgecase3 = LongestSubstring.twoPointerLongestSubstring("pwwkew");
    const edgecase4 = LongestSubstring.twoPointerLongestSubstring("");

    expect(edgecase1).toEqual(3);
    expect(edgecase2).toEqual(1);
    expect(edgecase3).toEqual(3);
    expect(edgecase4).toEqual(0);

    


  });

  test('Sliding Windows', () => {
    const edgecase1 = LongestSubstring.slidingWindowLongestSubstring("abcabcbb");
    const edgecase2 = LongestSubstring.slidingWindowLongestSubstring("bbbbb");
    const edgecase3 = LongestSubstring.slidingWindowLongestSubstring("pwwkew");
    const edgecase4 = LongestSubstring.slidingWindowLongestSubstring("");

    expect(edgecase1).toEqual(3);
    expect(edgecase2).toEqual(1);
    expect(edgecase3).toEqual(3);
    expect(edgecase4).toEqual(0);



  });

  // test('edgecase1_2', () => {
  //   const edgecase1_2 = LongestSubstring.slidingWindowLongestSubstring("abcabcbb");

  //   expect(edgecase1_2).toEqual(3);

  // });
  
  // test('edgecase2', () => {
  //   const edgecase2 = LongestSubstring.twoPointerLongestSubstring("bbbbb");

  //   expect(edgecase2).toEqual(1);
  // });

  // test('edgecase2_2', () => {
  //   const edgecase2_2 = LongestSubstring.slidingWindowLongestSubstring("bbbbb");

  //   expect(edgecase2_2).toEqual(1);

  // });

  // test('edgecase3', () => {
  //   const edgecase3 = LongestSubstring.twoPointerLongestSubstring("pwwkew");

  //   expect(edgecase3).toEqual(3);
  // });

  // test('edgecase3_2', () => {
  //   const edgecase3_2 = LongestSubstring.slidingWindowLongestSubstring("pwwkew");

  //   expect(edgecase3_2).toEqual(3);

  // });

  // test('edgecase4', () => {
  //   const edgecase4 = LongestSubstring.twoPointerLongestSubstring("");

  //   expect(edgecase4).toEqual(0);
  // });

  // test('edgecase4_2', () => {
  //   const edgecase4_2 = LongestSubstring.slidingWindowLongestSubstring("");

  //   expect(edgecase4_2).toEqual(0);
  // });
 


