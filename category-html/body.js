var buttons = document.querySelectorAll(".tab-container button");
buttons.forEach(function(button) {
	button.addEventListener('click', function (e) { handleClick(e) })
})
function handleClick(event) {
	var contentID = event.target.getAttribute('data-toggle');
	var contentBlocks = document.querySelectorAll('.tab-parent .content > div');
	
	contentBlocks.forEach(function(b) {
		try{
			b.classList.remove('active')
		} catch (e) {}
		
		if(b.id == contentID) {
			b.classList.toggle('active')
		}
		
	})
}