/*Dev - Orion Ecommerce - almeidajunior @date Fri May 28 2021 10:10:46 GMT-0300 (GMT-03:00) */

"use strict";!function(){try{var s={init:function(){s.getOrderForm(),s.toggleCart(),s.updateCartItems(),s.updateLayoutByOrderForm(),s.addProductInCart()},cartData:{image:{default:/55-55/g,formated:"70-70"},buyButton:{findTrue:/true/g,putFalse:"false"}},getOrderForm:function(){vtexjs.checkout.getOrderForm().done(function(t){return t.items.length?(s.renderCartWhenEntryInPage(t.items),s.renderPriceInCart(t),s.renderQttInIconCart(t),void s.userLogged(t)):(console.log("Nenhum item no carrinho."),void $(".ajp-cart__products--list").height($(window).height()-229))})},renderCartWhenEntryInPage:function(t){var e=$(".ajp-cart__products--list"),r="",i=s.priceFormat(),o=s.icons();t.forEach(function(t,e,a){var n=t.imageUrl.replace(s.cartData.image.default,s.cartData.image.formated),t='\n                        <div class="cart-item" data-seller="'+t.seller+'">\n                            <div class="cart-item-image">\n                                <img src="'+n+'" />\n                            </div>\n                            <div class="cart-item-info">\n                                <div class="cart-item-info--name">\n                                    <span class="name">'+t.name+'</span>\n                                </div>\n                                <div class="cart-item-info--price--buttons">\n                                    <span class="price">R$ '+i(t.sellingPrice/100,2,",",".")+'</span>\n                                    <ul class="list-buttons-cart-item" data-of-index="'+e+'">\n                                        <li>\n                                            <a class="cart-btn-minus">\n                                                '+o.minus+'\n                                            </a>\n                                        </li>\n                                        <li class="item-total">\n                                            <a class="cart-btn-total" data-prod-qtt="'+t.quantity+'">\n                                                '+t.quantity+"\n                                            </a>\n                                            "+o.loader+'\n                                        <li>\n                                            <a class="cart-btn-more">\n                                                '+o.more+'\n                                            </a>\n                                        <li class="item-remove">\n                                            <a class="cart-btn-remove">\n                                                '+o.remove+"\n                                            </a>\n                                            "+o.loader+"\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    ";r+=t}),e.html(r),$(".ajp-cart__products--list").height($(window).height()-229)},renderPriceInCart:function(t){var e=$(".totalizers-items-number"),a=$(".totalizers-totals-number"),n=s.priceFormat();if(0==t.items.length||0==t.totalizers.length)return e.text("0"),void a.text("0,00");var r=t.items.length,i=0,i=1==t.totalizers.length?t.totalizers[0].value:t.totalizers[0].value+t.totalizers[1].value;e.text(""+r),a.text("R$ "+n(i/100,2,",","."))},updateCartItems:function(){var t=".cart-btn-remove",e=".cart-btns-update";$(document).on("click",e,function(){var t=$(this),e=t.parent().parent(),a=e.attr("data-of-index"),n=e.find("a[data-prod-qtt]"),r=n=n.attr("data-prod-qtt");if(e.find("a").addClass("cart-btn-loading"),e.find(".item-total").addClass("item-total-loading"),t.is(".cart-btn-minus")){if(1==e.find("a").text())return e.find("a").removeClass("cart-btn-loading"),void e.find(".item-total").removeClass("item-total-loading");n=parseInt(n)-1}else t.is(".cart-btn-more")&&(n=parseInt(n)+1);n={index:a,quantity:n};newQuantity=n.quantity,vtexjs.checkout.updateItems([n],null,!1).done(function(t){r==t.items[a].quantity?(t=t.items[a].name,alert("A quantidade desejada para o item "+t+" não está disponível")):e.find(".cart-btn-total").text(newQuantity),e.find("a").removeClass("cart-btn-loading"),e.find(".item-total").removeClass("item-total-loading")})}),$(document).on("click",t,function(){var t=$(this),e=t.parent().parent(),a=t.closest(".list-buttons-cart-item").attr("data-of-index");e.find(".item-remove").addClass("item-remove-loading");a=[{index:a,quantity:0}];vtexjs.checkout.removeItems(a).done(function(){t.closest(".cart-item").remove()})})},updateLayoutByOrderForm:function(){$(window).on("orderFormUpdated.vtex",function(t,e){s.renderPriceInCart(e),s.renderQttInIconCart(e),s.renderCartWhenEntryInPage(e.items),e.items.length?($(".ajp-cart__products--list").removeClass("list-empty"),$(".list-products-empty").remove()):s.renderEmptyCart()})},renderQttInIconCart:function(t){0!=t.items.length?(t=t.items.length,$(".header__minicart-total").text(t)):$(".header__minicart-total").text("0")},addProductInCart:function(){var e=$("#ajp-buybutton"),a=$(".sku-selector-container.sku-selector-container-0");e.on("click",function(){var t;$("input.sku-picked").length||!a.children().length?e.attr("this-sku-seller")?(t={id:$(".ajp-product__sellers--list form").attr("data-sku-id"),quantity:1,seller:$(this).attr("this-sku-seller")},vtexjs.checkout.addToCart([t],null,1).done(function(t){$(document.body).addClass("cart-on")})):alert("Escolha de qual shopping você quer receber ou retirar."):alert("Por favor selecione um modelo desejado.")})},renderEmptyCart:function(){var t=s.icons(),e=$(".ajp-cart__products--list");e.addClass("list-empty");t=$('<div class="list-products-empty">'+t.cart+"<span>Carrinho vazio</span></div>");e.html(t)},toggleCart:function(){$(".header__minicart-icon").off();var t=$("#ajp-cart-close"),e=$("#ajp-cart-continuebuy"),a=$(".header__minicart-icon");t.on("click",function(){$(document.body).removeClass("cart-on")}),a.on("click",function(){$(document.body).addClass("cart-on")}),e.on("click",function(){$(document.body).removeClass("cart-on")}),$(".ajp-cart--overlay").on("click",function(){$(document.body).removeClass("cart-on")})},icons:function(){return{minus:'<svg xmlns="http://www.w3.org/2000/svg" width="10" height="3" viewBox="0 0 16 3"><rect id="Retângulo_4101" data-name="Retângulo 4101" width="16" height="3" fill="#918785"/></svg>',more:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 16 16"><defs><clipPath id="clip-ico_carrinho__"><rect width="16" height="16"/></clipPath></defs><g id="ico_carrinho__" data-name="ico_carrinho_+" clip-path="url(#clip-ico_carrinho__)"><rect width="16" height="16" fill="rgba(243,243,243,0)"/><g id="Grupo_5306" data-name="Grupo 5306" transform="translate(14312 12792)"><g id="Grupo_5105" data-name="Grupo 5105" transform="translate(-14304.875 -12792)"><rect id="Retângulo_4052" data-name="Retângulo 4052" width="16" height="3" transform="translate(2.875 0) rotate(90)" fill="#918785"/></g><rect id="Retângulo_4054" data-name="Retângulo 4054" width="16" height="3" transform="translate(-14296 -12782) rotate(180)" fill="#918785"/></g></g></svg>',remove:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 26.741 26.08"><g id="Grupo_5303" data-name="Grupo 5303" transform="translate(0.5 0.5)" opacity="0.6"><path id="Caminho_7677" data-name="Caminho 7677" d="M665.748,124.792h-8.012v-1.916a1.933,1.933,0,0,0-1.916-1.916H650.6a1.933,1.933,0,0,0-1.916,1.916v1.916h-8.012a.348.348,0,1,0,0,.7h3.483v17.73a2.832,2.832,0,0,0,2.821,2.821h12.435a2.832,2.832,0,0,0,2.821-2.821v-17.73h3.483a.329.329,0,0,0,.348-.348C666.061,124.931,665.957,124.792,665.748,124.792Zm-16.371-1.916a1.234,1.234,0,0,1,1.219-1.219h5.225a1.234,1.234,0,0,1,1.219,1.219v1.916h-7.663Zm12.192,20.342a2.133,2.133,0,0,1-2.125,2.125h-12.47a2.133,2.133,0,0,1-2.125-2.125v-17.73h16.72Z" transform="translate(-640.32 -120.96)" fill="none" stroke="#e12b3a" stroke-width="1"/><path id="Caminho_7678" data-name="Caminho 7678" d="M951.708,354.239a.329.329,0,0,0-.348.348v10.8a.348.348,0,0,0,.7,0v-10.8A.329.329,0,0,0,951.708,354.239Z" transform="translate(-938.82 -344.834)" fill="none" stroke="#e12b3a" stroke-width="1"/><path id="Caminho_7679" data-name="Caminho 7679" d="M865.308,354.239a.329.329,0,0,0-.348.348v10.8a.348.348,0,0,0,.7,0v-10.8A.329.329,0,0,0,865.308,354.239Z" transform="translate(-855.904 -344.834)" fill="none" stroke="#e12b3a" stroke-width="1"/><path id="Caminho_7680" data-name="Caminho 7680" d="M1038.108,354.239a.329.329,0,0,0-.348.348v10.8a.348.348,0,0,0,.7,0v-10.8A.329.329,0,0,0,1038.108,354.239Z" transform="translate(-1021.737 -344.834)" fill="none" stroke="#e12b3a" stroke-width="1"/></g></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: transparent; shape-rendering: auto;" width="40px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="rotate(0 50 50)">\n                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(30 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(60 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(90 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(120 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(150 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(180 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(210 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(240 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(270 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"<animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(300 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(330 50 50)"><rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#a61f67"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate></rect></g></svg>',cart:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="80" height="80" x="0" y="0" viewBox="0 0 446.853 446.853" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="M444.274,93.36c-2.558-3.666-6.674-5.932-11.145-6.123L155.942,75.289c-7.953-0.348-14.599,5.792-14.939,13.708 c-0.338,7.913,5.792,14.599,13.707,14.939l258.421,11.14L362.32,273.61H136.205L95.354,51.179 c-0.898-4.875-4.245-8.942-8.861-10.753L19.586,14.141c-7.374-2.887-15.695,0.735-18.591,8.1c-2.891,7.369,0.73,15.695,8.1,18.591 l59.491,23.371l41.572,226.335c1.253,6.804,7.183,11.746,14.104,11.746h6.896l-15.747,43.74c-1.318,3.664-0.775,7.733,1.468,10.916 c2.24,3.184,5.883,5.078,9.772,5.078h11.045c-6.844,7.617-11.045,17.646-11.045,28.675c0,23.718,19.299,43.012,43.012,43.012 s43.012-19.294,43.012-43.012c0-11.028-4.201-21.058-11.044-28.675h93.777c-6.847,7.617-11.047,17.646-11.047,28.675 c0,23.718,19.294,43.012,43.012,43.012c23.719,0,43.012-19.294,43.012-43.012c0-11.028-4.2-21.058-11.042-28.675h13.432 c6.6,0,11.948-5.349,11.948-11.947c0-6.6-5.349-11.948-11.948-11.948H143.651l12.902-35.843h216.221 c6.235,0,11.752-4.028,13.651-9.96l59.739-186.387C447.536,101.679,446.832,97.028,444.274,93.36z M169.664,409.814 c-10.543,0-19.117-8.573-19.117-19.116s8.574-19.117,19.117-19.117s19.116,8.574,19.116,19.117S180.207,409.814,169.664,409.814z M327.373,409.814c-10.543,0-19.116-8.573-19.116-19.116s8.573-19.117,19.116-19.117s19.116,8.574,19.116,19.117 S337.916,409.814,327.373,409.814z" fill="#a61f67" data-original="#000000" style="" class=""/></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>'}},priceFormat:function(){return function(t,e,a,n){t=(t+"").replace(/[^0-9+\-Ee.]/g,""),t=isFinite(+t)?+t:0,n=void 0===n?",":n,a=void 0===a?".":a;var r="",r=function(t,e){var a=Math.pow(10,e);return""+(Math.round(t*a)/a).toFixed(e)};return 3<(r=((e=isFinite(+e)?Math.abs(e):0)?r(t,e):""+Math.round(t)).split("."))[0].length&&(r[0]=r[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,n)),(r[1]||"").length<e&&(r[1]=r[1]||"",r[1]+=Array(e-r[1].length+1).join("0")),r.join(a)}},userLogged:function(t){(t.loggedIn?$(".header__account-link--signout"):$(".header__account-link--signin")).removeClass("hidden")}};$(document).ready(s.init)}catch(t){console.log("Erro na instância do [Cart]: ",t)}}();