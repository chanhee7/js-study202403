
// export default 로 보내줘서 { Product } 에서 {} 생략 가능
import Product from "./components/Product.js";

// 상품 데이터
const p1 = new Product('에어팟', 200000, '노래들어요', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg')
const p2 = new Product('족발', 40000, '쩝쩝', 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp');

// 서버에서 전송된 JSON
const productList = {
  products: [
    p1,
    p2,
    new Product('요구르트', 500, '요구르트으', 'https://img-cf.kurly.com/shop/data/goods/1630556476801z0.jpg'),
  ],

  render: function() {
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li태그를 생성
    this.products.forEach((prod) => {
      const $prodLi = document.createElement('li');
      $prodLi.classList.add('product-item');
      $prodLi.innerHTML = `
      <div>
          <img src="${prod.image}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>${prod.price}원</h3>
            <p>${prod.desc}</p>
            <button>담기</button>
          </div>
        </div>
      `;

      $prodList.appendChild($prodLi);
    });

    // div#app에 ul 추가
    document.getElementById('app').appendChild($prodList);
  },
};

productList.render();