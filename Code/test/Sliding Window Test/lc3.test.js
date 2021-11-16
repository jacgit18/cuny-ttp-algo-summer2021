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
    // toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:


    


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

  // You can also group tests together using a describe block. When they are inside a describe
  //  block, the before and after blocks only apply to the tests within that describe block.
  describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
      return initializeFoodDatabase();
    });
  
    test('Vienna <3 veal', () => {
      expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });
  
    test('San Juan <3 plantains', () => {
      expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
  });


  // Note that the top-level beforeEach is executed before the beforeEach inside the describe block. 
  // It may help to illustrate the order of execution of all hooks.
  beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
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
 

  


