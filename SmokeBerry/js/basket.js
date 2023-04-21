"use string";

let basket__wrapper_none = document.querySelector(".basket__wrapper-none");
let basket_button = document.querySelector(".busket-button");
let basket__summ_number = document.querySelector(".basket__summ-number");

let exit_btn = document.querySelector(".exit-btn");
// Добавление всех товаров
let every_product = document.querySelectorAll('[data-product-id^="product"]');

// Выбираем кнопку из карточки товара

every_product.forEach(function (one_product) {
  let main__product_button = one_product.querySelector(".main__product-button");

  main__product_button.addEventListener("click", function () {
    basket__wrapper_none.style.display = "none";

    // создание основного див с элементами товара
    let basket__wrapper_shop = document.querySelector(".basket__wrapper-shop");
    if (
      !basket__wrapper_shop.querySelector(
        '[data-basket-id="' + one_product.dataset.productId + '"]'
      )
    ) {
      let basket__shop_info = document.createElement("div");
      basket__shop_info.className = "basket__shop-info";
      basket__wrapper_shop.appendChild(basket__shop_info);
      basket__shop_info.dataset.basketId = one_product.dataset.productId;

      //создание внутренних дивов с элементами товара
      let basket__shop_image = document.createElement("img");
      let basket__shop_name = document.createElement("div");
      let basket__shop_quantity = document.createElement("div");
      let basket__shop_price = document.createElement("div");
      let basket__shop_cross = document.createElement("img");

      basket__shop_image.className = "basket__shop-image";
      basket__shop_name.className = "basket__shop-name";
      basket__shop_quantity.className = "basket__shop-quantity";
      basket__shop_price.className = "basket__shop-price";
      basket__shop_cross.className = "basket__shop-cross";

      basket__shop_info.appendChild(basket__shop_image);
      basket__shop_info.appendChild(basket__shop_name);
      basket__shop_info.appendChild(basket__shop_quantity);
      basket__shop_info.appendChild(basket__shop_price);
      basket__shop_info.appendChild(basket__shop_cross);

      basket__shop_image.src = one_product.querySelector("img").src;
      basket__shop_name.textContent = one_product.querySelector(
        ".main__product-name"
      ).textContent;
      basket__shop_quantity.textContent = "1";
      basket__shop_price.textContent = one_product.querySelector(
        ".main__button-price"
      ).textContent;
      basket__shop_cross.src = exit_btn.src;

      // удаление из корзины
      basket__shop_cross.addEventListener("click", function () {
        if (basket__wrapper_shop.children.length > 0) {
          basket__shop_info.remove();
        }
        if (basket__wrapper_shop.children.length == 0) {
          basket__shop_info.remove();
          basket__wrapper_none.style.display = "block";
        }
        summ__basket();
      });
      basket_button.addEventListener("click", function () {
        basket__wrapper_shop.remove();
        basket__wrapper_none.style.display = "block";
        summ__basket();
      });
    } else {
      let basket__shop_info = basket__wrapper_shop.querySelector(
        '[data-basket-id="' + one_product.dataset.productId + '"]'
      );
      let basket__shop_quantity = basket__shop_info.querySelector(
        ".basket__shop-quantity"
      );
      basket__shop_quantity.textContent =
        Number(basket__shop_quantity.textContent) + 1;
    }
    summ__basket();
  });
});
function summ__basket() {
  let all_product_busket = document.querySelectorAll(
    '[data-basket-id^="product"]'
  );
  basket__summ_number.textContent = 0;
  all_product_busket.forEach(function (one_basket) {
    basket__summ_number.textContent =
      Number(basket__summ_number.textContent) +
      Number(
        one_basket
          .querySelector(".basket__shop-price")
          .textContent.replace(/[^\d;]/g, "")
      ) *
        Number(one_basket.querySelector(".basket__shop-quantity").textContent);
  });
}
