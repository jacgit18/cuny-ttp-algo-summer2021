module.exports = {
    brand: {
      families: [
          
        {
          id: "f1",
          name: "abc",
          parents: [
            { id: "p1", name: "ghi", children: [{ id: "c1", name: "mno" }] },
          ],
        },
        
        {
          id: "f2",
          name: "def",
          parents: [
            {
              id: "p2",
              name: "jkl",
              children: [
                { id: "c2", name: "pqr" },
                { id: "c3", name: "stu" },
                { id: "c4", name: "vwx" },
              ],
            },
          ],
        },

      ]
    }
  }
  