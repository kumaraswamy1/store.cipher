import { cartReducer } from "./Cart-reducer";

describe("testing cart operations ", () => {
  test("should set intial data to cart when user logs in ", () => {
    const intialState = { cart: [] };

    const action = {
      type: "SET_CART",
      payload: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          author: "Elad Elrom",
          price: 2849,
          quantity: 1
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          author: "Antony Lewis",
          price: 440,
          quantity: 3
        }
      ]
    };
    let finalState = {
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          author: "Elad Elrom",
          price: 2849,
          quantity: 1
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          author: "Antony Lewis",
          price: 440,
          quantity: 3
        }
      ]
    };
    const state = cartReducer(intialState, action);

    expect(state).toEqual(finalState);
  });

  test("should add to item to cart", () => {
    let intialState = {
      cart: []
    };
    let action = {
      type: "ADD_TO_CART",
      payload: {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        quantity: 1
      }
    };
    let state = cartReducer(intialState, action);

    expect(state).toEqual({
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          price: 2849,
          quantity: 1
        }
      ]
    });
    action = {
      type: "ADD_TO_CART",
      payload: {
        _id: "62a2e8346e59bdfcf974cd51",
        name: "The Basics of Bitcoins and Blockchains",
        price: 440,
        quantity: 1
      }
    };
    state = cartReducer(state, action);

    expect(state).toEqual({
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          price: 2849,
          quantity: 1
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          price: 440,
          quantity: 1
        }
      ]
    });
  });

  test("should remove item from cart state ", () => {
    let intialState = {
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          price: 2849,
          quantity: 1
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          price: 440,
          quantity: 1
        }
      ]
    };

    let action = {
      type: "REMOVE_FROM_CART",
      payload: "62a2e8346e59bdfcf974cd50"
    };

    let FinalState = {
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          price: 440,
          quantity: 1
        }
      ]
    };

    let state = cartReducer(intialState, action);

    expect(state).toEqual(FinalState);
  });

  test("should increment the quantity", () => {
    const intialValue = {
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          price: 2849,
          quantity: 1
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          price: 440,
          quantity: 1
        }
      ]
    };

    let action = {
      type: "INCREMENT_QUANTITY",
      payload: {
        _id: "62a2e8346e59bdfcf974cd50",
        name: "The Blockchain Developer",
        price: 2849,
        quantity: 1
      }
    };

    let finalState = {
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          price: 2849,
          quantity: 2
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          price: 440,
          quantity: 1
        }
      ]
    };
    let state = cartReducer(intialValue, action);

    expect(state).toEqual(finalState);
  });

  test("should decrement the quantity", () => {
    let intialState = {
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          price: 2849,
          quantity: 2
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          price: 440,
          quantity: 3
        }
      ]
    };
    let action = {
      type: "DECREMENT_QUANTITY",
      payload: {
        _id: "62a2e8346e59bdfcf974cd51",
        name: "The Basics of Bitcoins and Blockchains",
        price: 440,
        quantity: 1
      }
    };
    let finalState = {
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          price: 2849,
          quantity: 2
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          price: 440,
          quantity: 2
        }
      ]
    };
    let state = cartReducer(intialState, action);

    expect(state).toEqual(finalState);
  });

  test("should move item from wishlist to cart state", () => {
    let intialState = {
      wishlist: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer"
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains"
        }
      ],
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          price: 2849,
          quantity: 2
        }
      ]
    };
    let action = {
      type: "MOVE_TO_CART",
      payload: {
        _id: "62a2e8346e59bdfcf974cd51",
        name: "The Basics of Bitcoins and Blockchains",
        price: 440,
        quantity: 1
      }
    };
    let finalState = {
      wishlist: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer"
        }
      ],
      cart: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer",
          price: 2849,
          quantity: 2
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains",
          price: 440,
          quantity: 1
        }
      ]
    };
    let state = cartReducer(intialState, action);

    expect(state).toEqual(finalState);
  });
});
describe("testing wishlist operations", () => {
  test("should set intial data to wishlist ", () => {
    let intialState = { wishlist: [] };
    let action = {
      type: "SET_WISHLIST",
      payload: [
        {
          _id: "123",
          name: "The Blockchain Developer"
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains"
        }
      ]
    };
    let finalState = {
      wishlist: [
        {
          _id: "123",
          name: "The Blockchain Developer"
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains"
        }
      ]
    };
    const state = cartReducer(intialState, action);

    expect(state).toEqual(finalState);
  });
  test("should add item to wishlist state", () => {
    let intialState = {
      wishlist: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer"
        }
      ]
    };
    let action = {
      type: "ADD_TO_WISHLIST",
      payload: {
        _id: "62a2e8346e59bdfcf974cd51",
        name: "The Basics of Bitcoins and Blockchains"
      }
    };
    let finalState = {
      wishlist: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer"
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains"
        }
      ]
    };

    let state = cartReducer(intialState, action);

    expect(state).toEqual(finalState);
  });

  test("should remove item from wishlist state", () => {
    let intialState = {
      wishlist: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer"
        },
        {
          _id: "62a2e8346e59bdfcf974cd51",
          name: "The Basics of Bitcoins and Blockchains"
        }
      ]
    };
    let action = {
      type: "REMOVE_FROM_WISHLIST",
      payload: {
        _id: "62a2e8346e59bdfcf974cd51",
        name: "The Basics of Bitcoins and Blockchains"
      }
    };
    let finalState = {
      wishlist: [
        {
          _id: "62a2e8346e59bdfcf974cd50",
          name: "The Blockchain Developer"
        }
      ]
    };

    let state = cartReducer(intialState, action);

    expect(state).toEqual(finalState);
  });
});
