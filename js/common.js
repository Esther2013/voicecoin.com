/// <reference path="jquery-1.11.1.min.js" />

$(function () {
	$(".lanBox p").click(function() {
		$(".lanlist").prepend("<li>" + $(this).html() + "</li>");
		$(this).hide();
		$(".lanlist").toggle();
	});
	$(".lanBox p").mouseover(function () {
	    $(".lanlist").prepend("<li>" + $(this).html() + "</li>");
	    $(this).hide();
	    $(".lanlist").toggle();
	});
	$(".lanlist").mouseleave(function () {
	    $(".lanBox p").html($(".lanlist li").eq(0).html());
	    $(".lanlist li").eq(0).remove();
	    $(".lanBox p").show();
	    $(".lanlist").toggle();
	});
	$(".lanlist").on("click", "li", function() {
		$(".lanBox p").html($(this).html());
		$(".lanlist").hide();
		$(this).remove();
		$(".lanBox p").show();
	});
	$(".menuBox p").click(function() {
		$(".menuList").toggle();
	});
	$(".btn-collapse-container").click(function () {
	    $(".btn-collapse").toggleClass("btn-collapse--active");
	    $(".siteheader").toggleClass("site-header-mobile");
	});
	$(".aqBox h3").click(function () {
		$(this).toggleClass("open_h");
	    $(this).find("i").toggleClass("open_icon");
	    $(this).next(".qes").toggle(100);
	});
	$(".sitenav a").click(function () {
	    $(".sitenav a").removeClass("aon");
	    $(this).addClass("aon");
	    var id = $(this).attr("data");
	    var step = (id == "home") ? 0 : 72;
	    $('html, body').animate({ scrollTop: $("[name='" + id + "']").offset().top - step }, 200);
	    $(".btn-collapse").toggleClass("btn-collapse--active");
	    $(".siteheader").toggleClass("site-header-mobile");
	});
	$(".topIcon").click(function () {
	    $(".sitenav a").removeClass("aon");
	    $("[data='topHome']").addClass("aon");
	    $('html, body').animate({ scrollTop: $("[name='topHome']").offset().top }, 200);
	});
});