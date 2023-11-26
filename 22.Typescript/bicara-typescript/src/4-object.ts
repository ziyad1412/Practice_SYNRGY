/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

// type inference
let product = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  note: "",
};

// inline interface
let product1: {
  id: string;
  productName: string;
  price: number;
  note: string;
};
product1 = {
  id: "ID-2",
  productName: "Macbook Air",
  price: 2000,
  note: "",
};

interface Product {
  id: string;
  productName: string;
  price: number;
  note: string;
}

let product2 : Product;
product2 = {
  id: "ID-3",
  productName: "Macbook Air",
  price: 2000,
  note: "",
};

/**
 * 2. Nested Object
 */

interface Item {
  id: string;
  productName: string;
  price: number;
  productDetail: ItemDetail;
}
interface ItemDetail {
  year: number;
  storage: number;
}

let product3: Item;
product3 = {
  id: "ID-5",
  productName: "Macbook",
  price: 2000,
  productDetail: {
    year: 2020,
    storage: 512,
  },
};


/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

interface Address {
  street: string;
  city: string;
}

interface User {
  id: string;
  name: string;
  address: Address[];
}

let user2: User;

user2 = {
  id: "U-1",
  name: "Adi dodi",
  address: [
    {
      street: "Jln. Setapak No.2",
      city: "Jakarta",
    },
    {
      street: "Jln. Lebar sekali no 10",
      city: "Medan",
    },
  ],
};


/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

interface ItemCart {
  id: string;
  name: string;
  qty: number;
}

interface Cart {
  idCart: string;
  dateOrdered: string;
  items: {
    [idProduct: string]: ItemCart;
  };
}

let cart: Cart;
cart = {
  idCart: "C1",
  dateOrdered: "2020-05-20",
  items: {
    p1: {
      id: "P-1",
      name: "Mechanical Keyboard",
      qty: 2,
    },
    p2: {
      id: "P-2",
      name: "USB Hub",
      qty: 1,
    },
  },
};

/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/
let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
};

let { firstName, lastName }: { firstName: string; lastName: string } = fullName;

