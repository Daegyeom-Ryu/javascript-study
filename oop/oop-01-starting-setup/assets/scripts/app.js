class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}
class ElementAttributes {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}
class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }
  render() {}
  createElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}
class ShoppingCart extends Component {
  items = [];
  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }
  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, currItem) => prevValue + currItem.price,
      0
    );
    return sum;
  }
  constructor(renderHookId) {
    super(renderHookId, false);
    this.orderProducts = () => {
      console.log('ordering');
      console.log(this.items);
    };
    this.render();
  }
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
    // this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount}</h2>`;
  }
  // orderProducts() {
  //   console.log('ordering...');
  //   console.log(this.items);
  // }

  render() {
    const cartEl = this.createElement('section', 'cart');
    cartEl.innerHTML = `
      <h2>\$${0}</h2>
      <button>Order Now!</button>`;
    const orderBtn = cartEl.querySelector('button');
    // orderBtn.addEventListener('click', this.orderProducts.bind(this));
    // orderBtn.addEventListener('click', () => this.orderProducts());
    orderBtn.addEventListener('click', this.orderProducts);
    this.totalOutput = cartEl.querySelector('h2');
  }
}
class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }
  addToCart() {
    console.log('adding product to cart');
    // eventListener에서 addToCart를 호출하는 주체는 button;
    // 해결책은 eventListener에서 this(ProductItem의 인스턴스)를 넘기면 된다.
    App.addProductToCart(this.product);
  }
  render() {
    const prodEl = this.createElement('li', 'product-item');
    prodEl.innerHTML = `<div>
            <img src= "${this.product.imageUrl}" alt = "${this.product.title}">
            <div class = "product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>`;
    const addCartBtn = prodEl.querySelector('button');
    addCartBtn.addEventListener('click', this.addToCart.bind(this));
  }
}
class ProductList extends Component {
  // #은 private을 의미, 해당 클래스 내에서만 사용할 수 있다.
  #products = []; // field는 생성자 함수 호출 후 property가 된다.
  constructor(renderHookId) {
    super(renderHookId, false); // super()는 먼저 호출되어야 한다.(rule)
    this.render();
    this.#fetchProducts();
  }
  #fetchProducts() {
    this.#products = [
      new Product('A Pillow', 'image URL of Pillow', 19.99, 'Soft Pillow!'),
      new Product('A Carpet', 'image URL of Carpet', 89.99, 'Carpet!'),
    ];
    this.renderProducts();
  }
  renderProducts() {
    for (const prod of this.#products) {
      new ProductItem(prod, 'prod-list');
    }
  }
  render() {
    this.createElement('ul', 'product-list', [
      new ElementAttributes('id', 'prod-list'),
    ]);
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
  }
}
class Shop {
  constructor() {
    this.render();
  }
  render() {
    // this.hookId = renderHook;

    // const cart = new ShoppingCart();
    this.cart = new ShoppingCart('app');
    // this.cart.render();
    new ProductList('app');
    // const prodListEl = productList.render();
    // productList.render();
    // renderHook.append(prodListEl);

    // renderHook.append(prodListEl);
  }
}
class App {
  static cart; // 필수는 아니지만 가독성 향상
  static init() {
    // new keyword는 객체 생성이 완료되었는지 확인한다.
    // 부모 class의 생성자 함수는 생성 중인 하위 class의 객체(this)를 참조한다.
    const shop = new Shop();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();
