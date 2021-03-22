/**
 * Avanti Comunicação <contato@penseavanti.com.br>
 * almeidajunior
 * @date Mon Mar 22 2021 17:47:12 GMT-0300 (GMT-03:00)
 */

"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){try{var i={init:function(){i.getOrderForm(),i.toggleCart(),i.updateCartItems(),i.updatePriceInCart()},cartData:{image:{default:/55-55/g,formated:"70-70"}},getOrderForm:function(){vtexjs.checkout.getOrderForm().done(function(t){t.items.length?(i.renderItemsInCart(t.items),i.renderPriceInCart(t)):console.log("Nenhum item no carrinho.")})},renderItemsInCart:function(t){var n=$(".ajp-cart__products--list"),e="",o=i.priceFormat(),r=i.icons();t.forEach(function(t,n,a){t='\n                        <div class="cart-item">\n                            <div class="top">\n                                <div class="cart-item-image">\n                                    <img src="'+t.imageUrl.replace(i.cartData.image.default,i.cartData.image.formated)+'" />\n                                </div>\n                                <div class="cart-item-info">\n                                    <span class="name">'+t.name+'</span>\n                                    <span class="price">R$ '+o(t.price/100,2,",",".")+'</span>\n                                </div>\n                            </div>\n                            <div class="bottom">\n                                <ul class="list-buttons-cart-item" data-of-index="'+n+'">\n                                    <li>\n                                        <a class="cart-btn-minus">\n                                            '+r.minus+'\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a class="cart-btn-total">\n                                            '+t.quantity+'\n                                        </a>\n                                    <li>\n                                        <a class="cart-btn-more">\n                                            '+r.more+'\n                                        </a>\n                                    <li>\n                                        <a class="cart-btn-remove">\n                                            '+r.remove+"\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    ";e+=t}),n.append(e),$(".ajp-cart__products--list").height($(window).height()-247)},renderPriceInCart:function(t){var n=$(".totalizers-items-number"),a=$(".totalizers-totals-number"),e=i.priceFormat();if(0==t.items.length)return n.text("0"),void a.text("0,00");var o=t.items.length,t=t.totalizers[0].value;n.text(""+o),a.text("R$ "+e(t/100,2,",","."))},updateCartItems:function(){console.log("[eventsButtonsCart]");var t=".cart-btn-minus",n=".cart-btn-more",a=".cart-btn-remove";$(document).on("click",t,function(){var n=$(this).parent().parent(),a=n.attr("data-of-index"),e=0;n.find("a").addClass("cart-btn-loading"),vtexjs.checkout.getOrderForm().then(function(t){t=t.items[a];console.log(t),console.log(_typeof(t.quantity));t={index:a,quantity:parseInt(t.quantity)-parseInt(1)};return e=t.quantity,vtexjs.checkout.updateItems([t],null,!1)}).done(function(t){n.find(".cart-btn-total").text(e),n.find("a").removeClass("cart-btn-loading")})}),$(document).on("click",n,function(){var n=$(this).parent().parent(),a=n.attr("data-of-index"),e=0;n.find("a").addClass("cart-btn-loading"),vtexjs.checkout.getOrderForm().then(function(t){t=t.items[a];console.log(t),console.log(_typeof(t.quantity));t={index:a,quantity:parseInt(t.quantity)+parseInt(1)};return e=t.quantity,vtexjs.checkout.updateItems([t],null,!1)}).done(function(t){n.find(".cart-btn-total").text(e),n.find("a").removeClass("cart-btn-loading")})}),$(document).on("click",a,function(){var t=$(this);t.closest(".cart-item").remove();var a=t.closest(".list-buttons-cart-item").attr("data-of-index");vtexjs.checkout.getOrderForm().then(function(t){var n=[{index:a,quantity:0}];return vtexjs.checkout.removeItems(n)}).done(function(t){console.log("Removido!")})})},updatePriceInCart:function(){$(window).on("orderFormUpdated.vtex",function(t,n){i.renderPriceInCart(n)})},toggleCart:function(){$(".header__minicart-icon").off();var t=$("#ajp-cart-close"),n=$("#ajp-cart-continuebuy"),a=$(".header__minicart-icon");t.on("click",function(){$(document.body).removeClass("cart-on")}),a.on("click",function(){$(document.body).addClass("cart-on")}),n.on("click",function(){$(document.body).removeClass("cart-on")})},icons:function(){return{minus:'<svg xmlns="http://www.w3.org/2000/svg" width="10" height="3" viewBox="0 0 16 3"><rect id="Retângulo_4101" data-name="Retângulo 4101" width="16" height="3" fill="#918785"/></svg>',more:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 16 16"><defs><clipPath id="clip-ico_carrinho__"><rect width="16" height="16"/></clipPath></defs><g id="ico_carrinho__" data-name="ico_carrinho_+" clip-path="url(#clip-ico_carrinho__)"><rect width="16" height="16" fill="rgba(243,243,243,0)"/><g id="Grupo_5306" data-name="Grupo 5306" transform="translate(14312 12792)"><g id="Grupo_5105" data-name="Grupo 5105" transform="translate(-14304.875 -12792)"><rect id="Retângulo_4052" data-name="Retângulo 4052" width="16" height="3" transform="translate(2.875 0) rotate(90)" fill="#918785"/></g><rect id="Retângulo_4054" data-name="Retângulo 4054" width="16" height="3" transform="translate(-14296 -12782) rotate(180)" fill="#918785"/></g></g></svg>',remove:'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 26.741 26.08"><g id="Grupo_5303" data-name="Grupo 5303" transform="translate(0.5 0.5)" opacity="0.6"><path id="Caminho_7677" data-name="Caminho 7677" d="M665.748,124.792h-8.012v-1.916a1.933,1.933,0,0,0-1.916-1.916H650.6a1.933,1.933,0,0,0-1.916,1.916v1.916h-8.012a.348.348,0,1,0,0,.7h3.483v17.73a2.832,2.832,0,0,0,2.821,2.821h12.435a2.832,2.832,0,0,0,2.821-2.821v-17.73h3.483a.329.329,0,0,0,.348-.348C666.061,124.931,665.957,124.792,665.748,124.792Zm-16.371-1.916a1.234,1.234,0,0,1,1.219-1.219h5.225a1.234,1.234,0,0,1,1.219,1.219v1.916h-7.663Zm12.192,20.342a2.133,2.133,0,0,1-2.125,2.125h-12.47a2.133,2.133,0,0,1-2.125-2.125v-17.73h16.72Z" transform="translate(-640.32 -120.96)" fill="none" stroke="#e12b3a" stroke-width="1"/><path id="Caminho_7678" data-name="Caminho 7678" d="M951.708,354.239a.329.329,0,0,0-.348.348v10.8a.348.348,0,0,0,.7,0v-10.8A.329.329,0,0,0,951.708,354.239Z" transform="translate(-938.82 -344.834)" fill="none" stroke="#e12b3a" stroke-width="1"/><path id="Caminho_7679" data-name="Caminho 7679" d="M865.308,354.239a.329.329,0,0,0-.348.348v10.8a.348.348,0,0,0,.7,0v-10.8A.329.329,0,0,0,865.308,354.239Z" transform="translate(-855.904 -344.834)" fill="none" stroke="#e12b3a" stroke-width="1"/><path id="Caminho_7680" data-name="Caminho 7680" d="M1038.108,354.239a.329.329,0,0,0-.348.348v10.8a.348.348,0,0,0,.7,0v-10.8A.329.329,0,0,0,1038.108,354.239Z" transform="translate(-1021.737 -344.834)" fill="none" stroke="#e12b3a" stroke-width="1"/></g></svg>'}},priceFormat:function(){return function(t,n,a,e){t=(t+"").replace(/[^0-9+\-Ee.]/g,""),t=isFinite(+t)?+t:0,e=void 0===e?",":e,a=void 0===a?".":a;var o="",o=function(t,n){var a=Math.pow(10,n);return""+(Math.round(t*a)/a).toFixed(n)};return 3<(o=((n=isFinite(+n)?Math.abs(n):0)?o(t,n):""+Math.round(t)).split("."))[0].length&&(o[0]=o[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e)),(o[1]||"").length<n&&(o[1]=o[1]||"",o[1]+=Array(n-o[1].length+1).join("0")),o.join(a)}}};$(document).ready(i.init)}catch(t){console.log("Erro na instancia [Cart]: ",t)}}();