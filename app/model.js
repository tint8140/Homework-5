var userInfo = {};

// will be a array because will hold several things
var cart = [];

var bookList = [
  {
    // bookTitle: "Finding Me",
    // bookAuthor: "Nathalie",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "finding me.jpg",
    price: "27.99",
  },
  {
    // bookTitle: "You Rock",
    // bookAuthor: "Natty",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "mlk-biography.jpg",
    price: "19.99",
  },
  {
    // bookTitle: "We Rock",
    // bookAuthor: "Nat",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "elenor-roosevelt-biography.jpg",
    price: "17.99",
  },
];

export function changePage(pageID, callback) {
  if (pageID == "" || pageID == "home") {
    $.get(`pages/home.html`, function (data) {
      //   console.log("data " + data);
      $("#app").html(data);
      callback();
    });
  } else if (pageID == "books") {
    $.get(`pages/${pageID}.html`, function (data) {
      //   console.log("data " + data);
      $("#app").html(data);
      $.each(bookList, function (idx, book) {
        $(".allBooks").append(`<div class="book">
        <div class="bookImage">
          <img src="images/${book.bookImg}" alt="" />
        </div>
        <div class="bookInfo">
        <p> ${book.bookDescription}</p>
          <p>Price: ${book.price}</p>
          <button id="${idx}">Buy</button>
        </div>
      </div>`);
      });
      callback();
    });
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      $.each(cart, function (idx, cartItem) {
        console.log(bookList[cartItem]);
        let book = bookList[cartItem];

        $(".items").append(`<div class="book">
        <div class="bookImage">
          <img src="images/${book.bookImg}" alt="" />
        </div>
        <div class="bookInfo">
          <h4>${book.bookTitle}</h4>
          <p>Author: ${book.bookAuthor}</p>
          <p>Price: ${book.price}</p>
          <p>Qty: 1</p>
        </div>
      </div>`);
      });
    });
  }
}

export function setUserInfo(userObject) {
  userInfo = userObject;
  console.log(userInfo);
}

export function addToCart(bookIdx) {
  cart.push(bookIdx);
  $("#cartCount").html(cart.length.toString());
}
