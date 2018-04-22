$(function() {
	$(".lanBox p").click(function() {
		$(".lanlist").prepend("<li>" + $(this).html() + "</li>");
		$(this).hide();
		$(".lanlist").toggle();
	});
	$(".lanlist").on("click", "li", function() {
		$(".lanBox p").html($(this).html());
		$(".lanlist").hide();
		$(this).remove();
		$(".lanBox p").show();
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
	$(".textBox .inputText").click(function () {
		checkEm();
		$(this).parent().find("span").addClass("spanTop");
		$(this).addClass("boderB");		
	});
	$(".menuBox p").click(function() {
		$(".menuList").toggle();
	});
	checkEm();
});

function checkEm(){
	$(".inputText").each(function(i) {
		var text = $(this).val();
		if(text == "") {
			$(this).parent().find("span").removeClass("spanTop");
			$(this).removeClass("boderB");
		}
		else{
		$(this).parent().find("span").addClass("spanTop");
		$(this).addClass("boderB");		
		}
	});
}
