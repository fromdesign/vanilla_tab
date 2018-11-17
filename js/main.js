var navItems = document.querySelectorAll('.tab-nav li');
var navDeco = document.querySelector('.tab-nav span');
var tabPanel = document.querySelectorAll('.tab-panel');

for(var i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener('click', function (e) {
		navDeco.style.left = (120 * e.currentTarget.dataset.index) + 'px';
		document.querySelector('.active').classList.remove('active');
		document.querySelector('.current').classList.remove('current');
		tabPanel[e.currentTarget.dataset.index].classList.add('current');
		e.currentTarget.classList.add('active');
	});	
}

