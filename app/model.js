var userInfo = {};

// will be a array because will hold several things
var cart = [];

var bookList = [
  {
    bookTitle: "Twilight Box Set",
    bookAuthor: "Stephanie Meyer",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "twilight-box-set.jpg",
    price: "$99.99",
  },
  {
    bookTitle: "Harry Potter Box Set",
    bookAuthor: "J. K. Rowling",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "hp-box-set.jpg",
    price: "$100",
  },
  {
    bookTitle: "A Song of Ice and Fire Box Set",
    bookAuthor: "George R.R. Martin",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "got-box-set.jpg",
    price: "$100",
  },

  {
    bookTitle: "Finding Me",
    bookAuthor: "Viola Davis",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "finding me.jpg",
    price: "$27.99",
  },
  {
    bookTitle: "The Autobiography of Martin Luther King, Jr.",
    bookAuthor: "Clayborne Carson",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "mlk-biography.jpg",
    price: "$19.99",
  },
  {
    bookTitle: "The Autobiography of Eleanor Roosevelt",
    bookAuthor: "Eleanor Roosevelt",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "elenor-roosevelt-biography.jpg",
    price: "$17.99",
  },

  {
    bookTitle: "Misery",
    bookAuthor: "Stephen King",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "misery.jpg",
    price: "$19.99",
  },
  {
    bookTitle: "Frankenstein",
    bookAuthor: "Mary Shelley",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "frankenstein.jpg",
    price: "$15.99",
  },
  {
    bookTitle: "Phantoms",
    bookAuthor: "Dean Koontz",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "phantoms.jpg",
    price: "$19.99",
  },

  {
    bookTitle: "The Complete Tales of Winnie the Pooh",
    bookAuthor: "A. A. Milne",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "winnie the pooh.jpg",
    price: "$19.99",
  },
  {
    bookTitle: "The Cat in the Hat",
    bookAuthor: "Dr.Seuss",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "cat and the hat.jpg",
    price: "$15.99",
  },
  {
    bookTitle: "Fun Facts About Space",
    bookAuthor: "Baby Professor",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    bookImg: "fun facts about space.jpg",
    price: "$7.99",
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
