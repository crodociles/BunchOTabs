$(document).ready(function(){
	$('body').on('click', 'button', function(){
		var links = localStorage.getItem('addressList');
		links = links.split(",");
		for (var i=0;i<links.length;i++) {
			console.log(links[i]);
			if(links[i].substring(0,5)!="http:"){
				console.log(links[i]);
				links[i] = "http://" + links[i]
			}
			chrome.tabs.create({url:links[i]});
		}
		return false;
	});
});