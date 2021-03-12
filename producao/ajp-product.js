/**
 * Avanti Comunicação <contato@penseavanti.com.br>
 * almeidajunior
 * @date Fri Mar 12 2021 12:20:18 GMT-0300 (GMT-03:00)
 */

"use strict";!function(){try{var i={init:function(){i.applyTextsMobile(),i.openShipping(),i.verifyIfProductAvaible(),i.getProductData(),i.getSkuInfos(),i.changeUrlCartBySeller(),i.toggleSellers()},productData:{id:$("#___rc-p-id").val(),items:null,sellers:null,thumbs:null},imagesConfig:{image:{configMain:"530-625",configZoom:"1000-1000",configThumb:"100-100"},regexList:{main:/530-625/g,thumb:/100-100/g,size:/#width#-#height#/g,uncle:/~/g}},windowOnload:function(){i.cepText()},ajaxStop:function(){},openShipping:function(){"function"==typeof window.ShippingValue&&window.ShippingValue()},verifyIfProductAvaible:function(){function e(t){t?$(document.body).addClass("ajp-prod-available").removeClass("ajp-prod-unavailable"):$(document.body).addClass("ajp-prod-unavailable").removeClass("ajp-prod-available")}$(document).on("skuSelected.vtex",function(t,s,g){e(g.available)}),e(skuJson.available),$(document.body).is(".ajp-prod-unavailable")&&($(".sku-notifyme-client-name").attr("placeholder","SEU NOME"),$(".sku-notifyme-client-email").attr("placeholder","SEU E-MAIL"),$(".sku-notifyme-button-ok").val("AVISE-ME QUANDO CHEGAR"))},cepText:function(){console.log($("#txtCep").length),$("#txtCep").attr("placeholder","Digite seu CEP")},getProductData:function(){$.ajax({type:"GET",url:"/api/catalog_system/pub/products/search/?fq=productId:"+i.productData.id,dataType:"json",contentType:"application/json",headers:{"Content-Type":"application/json",Accept:"application/vnd.vtex.ds.v10+json"}}).done(function(t){console.log(t[0]),i.productData.items=t[0].items,$(".ajp-product__image--main").addClass("easyzoom easyzoom--overlay easyzoom--with-thumbnails is-ready"),i.buildThumbsImage(),$(window).width()<=991&&i.fixersMobile()})},buildThumbsImage:function(){var t=$(".ajp-product__image--main"),g=($(".ajp-product__image--thumbs"),[]),s="",e="";i.productData.items[0].images.forEach(function(t,s){0==s&&(e=(e=t.imageTag.replace(i.imagesConfig.regexList.size,i.imagesConfig.image.configMain)).replace(i.imagesConfig.regexList.uncle,""));t=t.imageTag.replace(i.imagesConfig.regexList.size,i.imagesConfig.image.configThumb).replace(i.imagesConfig.regexList.uncle,"");g.push(t)});for(var n=0;n<g.length;n++)s+='<li><a data-zoom="">'+g[n]+"</a></li>";t.html("<a>"+e+"</a>");var a=(a=t.find("img").attr("src")).replace(i.imagesConfig.regexList.main,"1000-1000");t.find("a").attr("href",a);a=$("<ul>"+s+"</ul>");a.find("> li").each(function(){var t=$(this),s=t.find("img").attr("src");t.find("a").attr("data-zoom",s)}),i.productData.thumbs=a,991<$(window).width()?i.applySlickVerticalDesktop():$(window).width()<=991&&i.applySlickHorizontalMobile()},applySlickHorizontalMobile:function(){$(".ajp-product__image--thumbs").html("<ul>"+i.productData.thumbs[0].innerHTML+"</ul>");var t=$(".ajp-product__image--thumbs > ul");if(t.children().length<3)return $(".ajp-product__image--thumbs > ul").addClass("no-slick"),void i.applyClickChangeImages();var s=i.arrowsSlick();t.slick({slidesToShow:4,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev">'+s.prev+"</button>",nextArrow:'<button type="button" class="slick-next">'+s.next+"</button>",arrows:!0,dots:!1}),t.each(function(){$(this).find(".slick-arrow").wrapAll('<div class="slick-nav" />')}),i.changeImageSlickAndMainMobile()},applySlickVerticalDesktop:function(){var t=i.productData.thumbs,s=$(".ajp-product__imageaside--vertical");if(s.append("<ul>"+t[0].innerHTML+"</ul>"),s.find("> ul > li").length<5)return $(".ajp-product__imageaside--vertical > ul").addClass("no-slick"),void i.applyClickChangeImages();t=i.arrowsSlickVertical();s.find("> ul").slick({slidesToShow:1,slidesToScroll:1,dots:!1,vertical:!0,prevArrow:'<button type="button" class="slick-prev">'+t.up+"</button>",nextArrow:'<button type="button" class="slick-next">'+t.down+"</button>",arrows:!0}),i.applyEasyZoomFirstTime(),i.changeImageSlickVerticalAndMainImage()},changeImageSlickVerticalAndMainImage:function(){$(".ajp-product__imageaside--vertical .slick-initialized.slick-slider").on("beforeChange",function(t,s,g,e){var n=$(this).find(".slick-current").next(),a=(a=n.find("a").attr("data-zoom")).replace(i.imagesConfig.regexList.thumb,"1000-1000"),n=(n=n.find("a").attr("data-zoom")).replace(i.imagesConfig.regexList.thumb,"530-625");$(".ajp-product__image--main a").attr("href",a),$(".ajp-product__image--main img").attr("src",n),i.destroyAndInitEasyzoom()})},changeImageSlickAndMainMobile:function(){$(".ajp-product__image--thumbs .slick-initialized.slick-slider").on("beforeChange",function(t,s,g,e){var n=(n=$(this).find(".slick-current").next().find("img").attr("src")).replace(i.imagesConfig.regexList.thumb,i.imagesConfig.image.configMain);$(".ajp-product__image--main img").attr("src",n)})},applyEasyZoomFirstTime:function(){$(".easyzoom").easyZoom().data("easyZoom")},destroyAndInitEasyzoom:function(){var t=$(".easyzoom").easyZoom().data("easyZoom");t.teardown(),t._init()},arrowsSlick:function(){return{prev:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="18" height="18" x="0" y="0" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712    L143.492,221.863z" fill="#000000" data-original="#000000" style=""/></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="18" height="18" x="0" y="0" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734    L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8    C342.889,227.058,342.889,216.255,336.226,209.591z" fill="#000000" data-original="#000000" style="" class=""/></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>'}},arrowsSlickVertical:function(){return{up:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 240.835 240.835" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><path id="Expand_Less" d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155   c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155   L129.007,57.819z" fill="#ffffff" data-original="#000000" style=""/><g></g><g></g><g></g><g></g><g></g><g></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>',down:'<?xml version="1.0"?>\n                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 240.811 240.811" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path id="Expand_More" d="M220.088,57.667l-99.671,99.695L20.746,57.655c-4.752-4.752-12.439-4.752-17.191,0   c-4.74,4.752-4.74,12.451,0,17.203l108.261,108.297l0,0l0,0c4.74,4.752,12.439,4.752,17.179,0L237.256,74.859   c4.74-4.752,4.74-12.463,0-17.215C232.528,52.915,224.828,52.915,220.088,57.667z" fill="#ffffff" data-original="#000000" style=""/><g></g><g></g><g></g><g></g><g></g><g></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>'}},getSkuInfos:function(){var o=$(".ajp-product__sellers--list");1<skuJson.skus.length?(console.log("Mais de 1 SKU."),$(document).on("skuSelected.vtex",function(t,s,g){console.log("SkuTrocado"),console.log(g),$(".ajp-product__sellers--open").addClass("hide"),$(".ajp-product__sellers--close").removeClass("hide"),$(".ajp-product__sellers--menssage").hide("fast");var e=g,n=i.productData.items.filter(function(t){return t.itemId==g.sku})[0].sellers,a="";n.forEach(function(t){1!=t.sellerId&&(t='\n                                <div class="seller-box--item">\n                                    <div>\n                                        <span class="item-name">'+t.sellerName+' - </span>\n                                        <ul class="item-price">\n                                            <li class="first">Por: </li>\n                                            <li class="second">'+e.bestPriceFormated+'</li>\n                                        </ul>\n                                    </div>\n                                    <label class="container">\n                                        <input type="radio" value="'+t.addToCartLink+'" name="lojas">\n                                        <span class="checkmark"></span>\n                                    </label>\n                                </div>',a+=t,o.html("<form>"+a+"</form>"))})})):console.log("Apenas 1 SKU.")},changeUrlCartBySeller:function(){$(document).on("change",".ajp-product__sellers--list input",function(){var t=$(this);$(".buy-button.buy-button-ref").attr("href",t.val())})},toggleSellers:function(){var t=$(".ajp-product__sellers--menssage");$(".ajp-product__sellers--open").on("click",function(){0!=$(".ajp-product__sellers--list").children().length?($(".ajp-product__sellers--list").slideToggle("fast"),$(this).addClass("hide"),$(".ajp-product__sellers--close").removeClass("hide")):t.show("fast")}),$(".ajp-product__sellers--close").on("click",function(){0!=$(".ajp-product__sellers--list").children().length&&($(".ajp-product__sellers--list").slideToggle("fast"),$(this).addClass("hide"),$(".ajp-product__sellers--open").removeClass("hide"))})},applyClickChangeImages:function(){991<$(window).width()?$(document).on("click",".ajp-product__imageaside--vertical a",function(){var t=$(this).find("img").attr("src"),s=$(".ajp-product__image--main img"),t=t.replace(i.imagesConfig.regexList.thumb,i.imagesConfig.image.configMain);s.attr("src",t),i.destroyAndInitEasyzoom()}):$(window).width()<=991&&$(document).on("click",".ajp-product__image--thumbs a",function(){var t=$(this).find("img").attr("src"),s=$(".ajp-product__image--main img"),t=t.replace(i.imagesConfig.regexList.thumb,i.imagesConfig.image.configMain);s.attr("src",t)})},applyTextsMobile:function(){var t=$(".ajp-product__infosmobile"),s=$(".ajp-product__name div").text(),g=$(".ajp-product__brand a").clone();t.find(".mobile-brand").html(g),t.find(".mobile-name").html("<span>"+s+"</span>")},fixersMobile:function(){$(".ajp-product__image--main a").removeAttr("href")}};$(document).ready(i.init),$(document).ajaxStop(function(){i.ajaxStop()}),$(window).load(i.windowOnload)}catch(t){console.log("Erro na instancia [New Product]: ",t)}}();