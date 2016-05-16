//............Scroll Event............................................................

var scrollTimeout;

window.addEventListener("scroll", function(){
	if (scrollTimeout) {
        // clear the timeout, if one is pending
        clearTimeout(scrollTimeout);
        scrollTimeout = null;
    }
    scrollTimeout = setTimeout(RenderByScroll, 300);
});

function RenderByScroll() {

	var contentStartContent = document.getElementById('StartContent'),
		contentNews = document.getElementById('News'), 
	    contentSlider = document.getElementById('Slider'),
	    contentComments = document.getElementById('Comments'),
	    contentCardDescription = document.getElementById('CardDescription'),
	    contentDeckBuild = document.getElementById('DeckBuild'),
	    contentFooter = document.getElementById('Footer');

	var checkNews = contentNews.innerHTML,
		checkSlider = contentSlider.innerHTML,
		checkComments = contentComments.innerHTML,
		checkCardDescription = contentCardDescription.innerHTML,
		checkDeckBuild = contentDeckBuild.innerHTML,
		checkFooter = contentFooter.innerHTML;    

	var Info = {
		StartContentHeight : contentStartContent.offsetHeight,
		DeviceHeight : document.documentElement.clientHeight,
		ScrolledFromTop : window.pageYOffset
	}

	//....Render new content

	if ((Info.StartContentHeight - Info.DeviceHeight - Info.ScrolledFromTop) < 300 && (checkNews == false)) {
		ReactDOM.render( <News />, document.getElementById('News'));
		Info.StartContentHeight += contentNews.offsetHeight;
	}
	if ((Info.StartContentHeight - Info.DeviceHeight - Info.ScrolledFromTop) < 300 && (checkSlider == false) && (checkNews)) {
		ReactDOM.render( <Slider />, document.getElementById('Slider'));
		Info.StartContentHeight += contentSlider.offsetHeight;
	}
	if ((Info.StartContentHeight - Info.DeviceHeight - Info.ScrolledFromTop) < 300 && (checkComments == false) && (checkNews) && (checkSlider)) {
		ReactDOM.render( <Comments />, document.getElementById('Comments'));
		Info.StartContentHeight += contentComments.offsetHeight;
	}
	if ((Info.StartContentHeight - Info.DeviceHeight - Info.ScrolledFromTop) < 300 && (checkCardDescription == false) && (checkNews) && (checkSlider) && (checkComments)) {
		ReactDOM.render( <CardDescription />, document.getElementById('CardDescription'));
		Info.StartContentHeight += contentCardDescription.offsetHeight;
	}
	if ((Info.StartContentHeight - Info.DeviceHeight - Info.ScrolledFromTop) < 300 && (checkDeckBuild == false) && (checkNews) && (checkSlider) && (checkComments) && (checkCardDescription)) {
		ReactDOM.render( <DeckBuild />, document.getElementById('DeckBuild'));
		Info.StartContentHeight += contentDeckBuild.offsetHeight;
	}
	if ((Info.StartContentHeight - Info.DeviceHeight - Info.ScrolledFromTop) < 300 && (checkFooter == false) && (checkNews) && (checkSlider) && (checkComments) && (checkCardDescription) && (checkDeckBuild)) {
		ReactDOM.render( <Footer />, document.getElementById('Footer'));
		Info.StartContentHeight += contentDeckBuild.offsetHeight;
	}

	// ....Navigation styles

	var navElement = document.querySelector('.navigation');
	var StartContent = document.querySelector('.StartContent');

	if (navElement.getBoundingClientRect().top <= 0) {
		// navElement.classList.add('navSlimed');                                                
		// var li = document.querySelectorAll('.navigation li');
		// for (var i=0; i<li.length; i++){
        //    li[i].classList.add('liSlimed');
        // }

		// Убрал прилипание менюшки, потому что изменен скролл для улучшения производительности.
		// Если нужно вернуть прилипание нужно: убать таймаут с эвентлистнера скролла, и раскомментить всё в блоке "....Navigation styles".

        document.querySelector('.goToTop').classList.add('goToTopJump');
	}

	if (StartContent.getBoundingClientRect().top >= 0) {
		// navElement.classList.remove('navSlimed');
		// var li = document.querySelectorAll('.navigation li');
		// for (var i=0; i<li.length; i++){
        //     li[i].classList.remove('liSlimed');
        // }
        document.querySelector('.goToTop').classList.remove('goToTopJump');
	}

};