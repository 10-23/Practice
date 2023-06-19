const goodsList = document.querySelector('.goodsList');
const goodsItem = document.querySelectorAll('.goodsItem');
const cartList = document.querySelector('.cartList');
const addBtn = document.querySelectorAll('.addBtn');
const cartItem = document.querySelectorAll('.cartItem');
const goodsDelete = document.querySelectorAll('.deleteBtn');

const addGoods = document.querySelector('.addGoods');
const addPrice = document.querySelector('.addPrice');
const addGoodsBtn = document.querySelector('.addGoodsBtn');

let objectArr = [];
goodsItem.forEach((item) => {
  const name = item.querySelector('.goodsName').innerText;
  const price = item.querySelector('.goodsPrice').innerText;
  object = {
    name: name,
    price: price,
  };
  objectArr.push(object);
});
let index = objectArr.length;

let addGoodsFunc = () => {
  addGoodsBtn.addEventListener('click', (item) => {
    let list = document.createElement('li');
    let name = document.createElement('p');
    let price = document.createElement('p');
    let btn = document.createElement('button');
    let delGoodsBtn = document.createElement('button');

    list.className = 'goodsItem';
    name.className = 'goodsName';
    price.className = 'goodsPrice';
    btn.className = 'addBtn';
    delGoodsBtn.textContent = 'X';
    goodsList.appendChild(list);
    list.appendChild(name);
    name.innerText = addGoods.value;
    list.appendChild(price);
    price.textContent = `${addPrice.value}원`;
    list.appendChild(btn);
    btn.textContent = '장바구니에 추가';
    list.appendChild(delGoodsBtn);

    objectArr.push({
      name: addGoods.value,
      price: `${addPrice.value}원`,
    });

    addCartHandle(btn, index++);

    delGoodsBtn.addEventListener('click', (event) => {
      goodsList.removeChild(event.currentTarget.parentNode);
    });
  });
};

let addCart = () => {
  list = document.createElement('li');

  addBtn.forEach((item, index) => {
    addCartHandle(item, index);
  });
};

let addCartHandle = (item, index) => {
  item.addEventListener('click', () => {
    //add item
    list = document.createElement('li');
    let name = document.createElement('p');
    let price = document.createElement('p');
    let deleteBtn = document.createElement('button');
    cartList.appendChild(list);
    list.className = 'cartItem';
    name.innerText = objectArr[index].name;
    price.innerText = objectArr[index].price;
    deleteBtn.innerText = 'X';
    deleteBtn.className = 'deleteBtn';
    list.appendChild(name);
    list.appendChild(price);
    list.appendChild(deleteBtn);

    //delete item
    deleteBtn.addEventListener('click', (event) => {
      cartList.removeChild(event.currentTarget.parentNode);
    });
  });
};
addCart();
addGoodsFunc();
