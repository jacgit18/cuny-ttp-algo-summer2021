const MaximumSumOfSubarray = require('../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc53');
// import LongestSubstring from '../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc3';
// import { LongestSubstring } from '../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc3';
// import { MaximumSumOfSubarray } from '../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc53';
// import { max_subarray_size_k } from '../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc53';

  describe('Test suite maximum sum of any contiguous subarray of size ‘k’ ', () => {
  
    let maximumSumOfSubarray; // good practice tp avoid change in state
    beforeEach(() =>{ 
      maximumSumOfSubarray = MaximumSumOfSubarray;
    });

    test('Sliding Window', () => {
      const edgecase1 = maximumSumOfSubarray(3, [2, 1, 5, 1, 3, 2]);
      // const edgecase2 = LongestSubstring.twoPointerLongestSubstring("bbbbb");
      // const edgecase3 = LongestSubstring.twoPointerLongestSubstring("pwwkew");
      // const edgecase4 = LongestSubstring.twoPointerLongestSubstring("");
  
      expect(edgecase1).toBe(9);
      // expect(edgecase2).toBe(1);
      // expect(edgecase3).toEqual(3);
      // expect(edgecase4).toEqual(0);
    });
  


  });
 