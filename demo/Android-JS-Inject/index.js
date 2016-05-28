$(function() {
	function loadText2Dom(url, selector) {
		$.get(url, function(text) {
			$(selector).text(text);
		}, "text");
	}
	
	loadText2Dom("code/Js1.java","#Js1");
	loadText2Dom("code/FunctionActivity.java","#FunctionActivity");
	loadText2Dom("code/testSelf.html","#testSelf");
	loadText2Dom("code/testAuto.html","#testAuto");
	Prism.highlightAll(true, function(){
		console.log("highligth ok");
	});
});