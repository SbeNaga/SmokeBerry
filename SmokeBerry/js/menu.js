"use strict";

let main__pod_systemy = document.querySelector(".main__pod-systemy");
let main__electronnye_sigarety = document.querySelector(
  ".main__electronnye-sigarety"
);
let main__odnorazovye_sigarety = document.querySelector(
  ".main__odnorazovye-sigarety"
);
let main__zhidkosty = document.querySelector(".main__zhidkosty");
let main__katridgy = document.querySelector(".main__katridgy");
let main__isparitely = document.querySelector(".main__isparitely");

let main__catalog_pod_systemy = document.querySelector(
  ".main__catalog-pod-systemy"
);
let main__catalog_electronnye_sigarety = document.querySelector(
  ".main__catalog-electronnye-sigarety"
);
let main__catalog_odnorazovye_sigarety = document.querySelector(
  ".main__catalog-odnorazovye-sigarety"
);
let main__catalog_zhidkosty = document.querySelector(
  ".main__catalog-zhidkosty"
);
let main__catalog_katridgy = document.querySelector(".main__catalog-katridgy");
let main__catalog_isparitely = document.querySelector(
  ".main__catalog-isparitely"
);

main__electronnye_sigarety.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";

  main__catalog_electronnye_sigarety.style.display = "flex";
  main__catalog_pod_systemy.style.display = "none";
});
main__odnorazovye_sigarety.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "flex";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "none";
});
main__zhidkosty.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "flex";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "none";
});
main__katridgy.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "flex";
  main__catalog_isparitely.style.display = "none";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "none";
});
main__isparitely.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "flex";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "none";
});
main__pod_systemy.addEventListener("click", function () {
  main__catalog_odnorazovye_sigarety.style.display = "none";
  main__catalog_zhidkosty.style.display = "none";
  main__catalog_katridgy.style.display = "none";
  main__catalog_isparitely.style.display = "none";
  main__catalog_electronnye_sigarety.style.display = "none";
  main__catalog_pod_systemy.style.display = "flex";
});

// открытие корзины
let basket__conteiner = document.querySelector(".basket__conteiner");
let btn = document.querySelector(".header__image-basket");
let span = document.querySelector(".close");
btn.onclick = function () {
  basket__conteiner.style.display = "block";
};
span.onclick = function () {
  basket__conteiner.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == basket__conteiner) {
    basket__conteiner.style.display = "none";
  }
};

// окно авторизации
let header__image_authorization = document.querySelector(
  ".header__image-authorization"
);
document.querySelector("#con").hidden = true;
header__image_authorization.onclick = function () {
  document.querySelector("#con").hidden = false;
};
document.querySelector("#exit").onclick = function () {
  document.querySelector("#con").hidden = true;
};
document.querySelector("#toSignIn").onclick = function () {
  document.querySelector("#registration__form").style = "display : none;";
  document.querySelector("#signup__form").style = "display : flex;";
};
document.querySelector("#toRegistration").onclick = function () {
  document.querySelector("#signup__form").style = "display : none;";
  document.querySelector("#registration__form").style = "display : flex;";
};
