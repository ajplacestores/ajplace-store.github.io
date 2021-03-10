/**
 * Avanti Comunicação <contato@penseavanti.com.br>
 * almeidajunior
 * @date Wed Mar 10 2021 09:37:56 GMT-0300 (GMT-03:00)
 */

"use strict";!function(){try{var e={init:function(){e.getProductData()},productData:{id:$("#___rc-p-id").val(),items:null},imagesConfig:{image:{configMain:"530-625",configZoom:"1000-1000",configThumb:"100-100"},regexList:{main:/530-625/g,thumb:/100-100/g,size:/#width#-#height#/g,uncle:/~/g}},windowOnload:function(){},ajaxStop:function(){},getProductData:function(){$.ajax({type:"GET",url:"/api/catalog_system/pub/products/search/?fq=productId:"+e.productData.id,dataType:"json",contentType:"application/json",headers:{"Content-Type":"application/json",Accept:"application/vnd.vtex.ds.v10+json"}}).done(function(t){e.productData.items=t[0].items,$(".ajp-product__image--main").addClass("easyzoom easyzoom--overlay easyzoom--with-thumbnails is-ready"),e.buildThumbsImage(),e.applySlickThumbs(),991<$(window).width()&&e.applyEasyZoomFirstTime(),$(window).width()<=991&&e.fixersMobile()})},buildThumbsImage:function(){var t=$(".ajp-product__image--main"),g=$(".ajp-product__image--thumbs"),i=[],s="",n="";e.productData.items[0].images.forEach(function(t,g){0==g&&(n=(n=t.imageTag.replace(e.imagesConfig.regexList.size,e.imagesConfig.image.configMain)).replace(e.imagesConfig.regexList.uncle,""));t=t.imageTag.replace(e.imagesConfig.regexList.size,e.imagesConfig.image.configThumb).replace(e.imagesConfig.regexList.uncle,"");i.push(t)});for(var o=0;o<i.length;o++)s+='<li><a data-zoom="">'+i[o]+"</a></li>";t.html("<a>"+n+"</a>");var a=(a=t.find("img").attr("src")).replace(e.imagesConfig.regexList.main,"1000-1000");t.find("a").attr("href",a);a=$("<ul>"+s+"</ul>");a.find("> li").each(function(){var t=$(this),g=t.find("img").attr("src");t.find("a").attr("data-zoom",g)}),g.html(a)},applySlickThumbs:function(){var t,g=$(".ajp-product__image--thumbs > ul");g.children().length<5||(t=e.arrowsSlick(),g.slick({slidesToShow:4,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev">'+t.prev+"</button>",nextArrow:'<button type="button" class="slick-next">'+t.next+"</button>",arrows:!0,dots:!1,responsive:[{breakpoint:991,settings:{slidesToShow:4,slidesToScroll:1}}]}),g.each(function(){$(this).find(".slick-arrow").wrapAll('<div class="slick-nav" />')}),991<$(window).width()?(console.log("Desktop"),e.changeImageSlickAndMain()):$(window).width()<=991&&(console.log("Mobile"),e.changeImageSlickAndMainMobile()))},changeImageSlickAndMain:function(){$(".slick-initialized.slick-slider").on("beforeChange",function(t,g,i,s){var n=$(this).find(".slick-current").next(),o=(o=n.find("a").attr("data-zoom")).replace(e.imagesConfig.regexList.thumb,"1000-1000"),n=(n=n.find("a").attr("data-zoom")).replace(e.imagesConfig.regexList.thumb,"530-625");$(".ajp-product__image--main a").attr("href",o),$(".ajp-product__image--main img").attr("src",n),e.destroyAndInitEasyzoom()})},changeImageSlickAndMainMobile:function(){$(".slick-initialized.slick-slider").on("beforeChange",function(t,g,i,s){var n=(n=$(this).find(".slick-current").next().find("img").attr("src")).replace(e.imagesConfig.regexList.thumb,e.imagesConfig.image.configMain);$(".ajp-product__image--main img").attr("src",n)})},applyEasyZoomFirstTime:function(){$(".easyzoom").easyZoom().data("easyZoom")},destroyAndInitEasyzoom:function(){var t=$(".easyzoom").easyZoom().data("easyZoom");t.teardown(),t._init()},arrowsSlick:function(){return{prev:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="18" height="18" x="0" y="0" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712    L143.492,221.863z" fill="#000000" data-original="#000000" style=""/></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="18" height="18" x="0" y="0" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734    L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8    C342.889,227.058,342.889,216.255,336.226,209.591z" fill="#000000" data-original="#000000" style="" class=""/></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>'}},fixersMobile:function(){$(".ajp-product__image--main a").removeAttr("href")}};$(document).ready(e.init),$(document).ajaxStop(function(){e.ajaxStop()}),$(window).load(e.windowOnload)}catch(t){console.log("Erro na instancia [New Product]: ",t)}}();