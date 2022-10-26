import { getSortedData, getFilteredData } from "./filterProducts";

describe("testing filter operations for the list of products", () => {
  test("should sort the products by price from high to low", () => {
    const sortBy = "HIGH_TO_LOW";
    const intialList = [
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        price: 2391
      },

      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        author: "Saifedean Ammous ",
        price: 2849
      }
    ];

    const finalState = [
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        author: "Saifedean Ammous ",
        price: 2849
      },
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",

        price: 2391
      },

      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        price: 350
      }
    ];
    const state = getSortedData(intialList, sortBy);
    expect(state).toEqual(finalState);
  });

  test("should sort the products by price from low to high", () => {
    const sortBy = "LOW_TO_HIGH";
    const intialList = [
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        price: 2391
      },

      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        author: "Elad Elrom"
      }
    ];

    const finalState = [
      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",

        price: 2391
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        author: "Elad Elrom"
      }
    ];

    const state = getSortedData(intialList, sortBy);

    expect(state).toEqual(finalState);
  });

  test("should return intial products without sorting the price", () => {
    const intialList = [
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        price: 2391
      },

      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        author: "Saifedean Ammous ",
        price: 2849
      }
    ];

    const finalState = [
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        price: 2391
      },

      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        author: "Saifedean Ammous ",
        price: 2849
      }
    ];

    const state = getSortedData(intialList);
    expect(state).toEqual(finalState);
  });

  test("should return products that are eligible for fast delivery", () => {
    const intialList = [
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        isFastDelivery: true,
        price: 2391
      },

      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        isFastDelivery: true,
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        author: "Elad Elrom",
        isFastDelivery: true
      },
      {
        _id: "62a2e8346e59bdfcf974cd5c",
        name: "Blockchain For Dummies, 2ed",
        author: "Tiana Laurence ",
        isFastDelivery: false,
        price: 699
      }
    ];

    const finalState = [
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        isFastDelivery: true,
        price: 2391
      },

      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        isFastDelivery: true,
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        author: "Elad Elrom",
        isFastDelivery: true
      }
    ];
    const state = getFilteredData(intialList, true, true, [], "");
    expect(state).toEqual(finalState);
  });

  test("should return products related to single category", () => {
    const intialList = [
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        category: "New Releases",
        price: 2391
      },

      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        category: "Best Sellers",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        author: "Elad Elrom",
        category: "Best Sellers"
      },
      {
        _id: "62a2e8346e59bdfcf974cd5c",
        name: "Blockchain For Dummies, 2ed",
        author: "Tiana Laurence ",
        category: "Best Sellers",
        price: 699
      },
      {
        _id: "62a2e8346e59bdfcf974cd55",
        name:
          "Blockchain Bubble or Revolution: The Future of Bitcoin, Blockchains, and Cryptocurrencies",
        author: " Aditya Agashe ",
        category: "Top Rated",
        price: 2208
      }
    ];

    const finalState = [
      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        category: "Best Sellers",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        author: "Elad Elrom",
        category: "Best Sellers"
      },
      {
        _id: "62a2e8346e59bdfcf974cd5c",
        name: "Blockchain For Dummies, 2ed",
        author: "Tiana Laurence ",
        category: "Best Sellers",
        price: 699
      }
    ];
    const state = getFilteredData(
      intialList,
      false,
      true,
      ["Best Sellers"],
      ""
    );

    expect(state).toEqual(finalState);
  });
  test("should return products related to multiple categories", () => {
    const intialList = [
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        category: "New Releases",
        price: 2391
      },

      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        category: "Best Sellers",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        author: "Elad Elrom",
        category: "Best Sellers"
      },
      {
        _id: "62a2e8346e59bdfcf974cd5c",
        name: "Blockchain For Dummies, 2ed",
        author: "Tiana Laurence ",
        category: "Best Sellers",
        price: 699
      },
      {
        _id: "62a2e8346e59bdfcf974cd55",
        name:
          "Blockchain Bubble or Revolution: The Future of Bitcoin, Blockchains, and Cryptocurrencies",
        author: " Aditya Agashe ",
        category: "Top Rated",
        price: 2208
      }
    ];

    const finalState = [
      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        category: "Best Sellers",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        author: "Elad Elrom",
        category: "Best Sellers"
      },
      {
        _id: "62a2e8346e59bdfcf974cd5c",
        name: "Blockchain For Dummies, 2ed",
        author: "Tiana Laurence ",
        category: "Best Sellers",
        price: 699
      },
      {
        _id: "62a2e8346e59bdfcf974cd55",
        name:
          "Blockchain Bubble or Revolution: The Future of Bitcoin, Blockchains, and Cryptocurrencies",
        author: " Aditya Agashe ",
        category: "Top Rated",
        price: 2208
      }
    ];
    const state = getFilteredData(
      intialList,
      false,
      true,
      ["Best Sellers", "Top Rated"],
      ""
    );
    expect(state).toEqual(finalState);
  });

  test("should return products matching the searched string value ", () => {
    const intialList = [
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        price: 2391
      },
      {
        _id: "62a2e8346e59bdfcf974cd4f",
        name: "Blockchain Revolution ",
        author: "Don and Alex Tapscott",
        price: 350
      },
      {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        author: "Elad Elrom"
      },
      {
        _id: "62a2e8346e59bdfcf974cd5c",
        name: "Blockchain For Dummies, 2ed",
        author: "Tiana Laurence ",
        price: 699
      },
      {
        _id: "62a2e8346e59bdfcf974cd55",
        name:
          "Blockchain Bubble or Revolution: The Future of Bitcoin, Blockchains, and Cryptocurrencies",
        author: " Aditya Agashe ",
        price: 2208
      }
    ];

    const state = getFilteredData(intialList, false, true, [], "bitcoin");

    expect(state).toEqual([
      {
        _id: "62a2e8346e59bdfcf974cd54",
        name:
          "The Bitcoin Standard: The Decentralized Alternative to Central Banking",
        author: "Saifedean Ammous ",
        price: 2391
      },
      {
        _id: "62a2e8346e59bdfcf974cd55",
        name:
          "Blockchain Bubble or Revolution: The Future of Bitcoin, Blockchains, and Cryptocurrencies",
        author: " Aditya Agashe ",
        price: 2208
      }
    ]);
  });
});
