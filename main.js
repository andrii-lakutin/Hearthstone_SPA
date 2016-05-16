"use strict";

// Main App
var StartContent = React.createClass({
  render: function() {
    return (
      <div className="MainDiv">
        <Header />
        <StartContentContainer />
      </div>
    );
  }
});

// Components

// Head Pictures............................................................

var Header = React.createClass({
  render: function() {
    return (
    <div className="Head">
      <div className="Header">
        <video autoPlay="autoplay" loop="loop" src="img/video.webm"></video> 
      </div>
      <ParallaxBox />
    </div>  
    );
  }
});

var ParallaxBox = React.createClass({
  render: function() {
    return (
      <div className="ParallaxBox">
         <LogoParallax />
         <CardsParallax />
         <LoginButton />
        </div>
    );
  }
});

var CardsParallax = React.createClass({
  render: function() {
    return (
      <div className="cardsContainer">
        <div className="cardForParallax1"></div>
        <div className="cardForParallax2"></div>
        <div className="cardForParallax3"></div>
      </div>
    );
  }
});

var LogoParallax = React.createClass({
  render: function() {
    return (
      <div className="logo"></div>
    );
  }
});

var LoginButton = React.createClass({
  render: function() {
    return (
      <div className="login">

        <p className="newHere">New Here?</p>

    <input id="inputLogin" className="inputLogin" type="text" />
    <div id="wordLogin" className="wordLogin">Login</div>
    <div id="buttonForLogin" className="buttonForLogin">></div>

    <input id="inputPassword" className="inputPassword" type="password" />
    <div id="wordPassword" className="wordPassword">Password</div>
    <div id="buttonForPassword" className="buttonForPassword">></div>
    
      </div>
    );
  }
});

//NavBar(OOP Example)................................................... 

function navBar(){
  this.navItems = [
            {text : "News", href : "#News"},
            {text : "Slider", href : "#Slider"},
            {text : "Comments", href : "#Comments"},
            {text : "Card", href : "#CardDescription"}, 
            {text : "DeckBuild", href : "#DeckBuild"}, 
            {text : "Contacts", href : "#Contacts"}
            ];
  var navComponents = [];
  var self = this;
  var result;

  function CreateArray(){
  var navComponent = self.navItems.map(function(component) {
    navComponents.push(<a href={component.href}><li>{component.text}</li></a>); 
    });
  };

  this.CreateElements = function(){
    CreateArray();          
    return navComponents;
  };

};

// How to use: 
// 1.CreateMenu by "var menu = new navBar";
// 2.EditArray as you like. Example: "menu.navItems.push({text : "NewItem", href="#Anchor"})";
// 3.Generate your menu like this: "var liItems = menu.CreateElements()";
// 4.Use your prepared menu!

var menu = new navBar;
var liItems = menu.CreateElements();

var NavBar = React.createClass({
  render: function() {
    return (
      <div>
      <ul className="navigation">
          {liItems}
      </ul>
        <a href="#Top"><div id="goToTop" className="goToTop"><i className="fa fa-arrow-up fa-2x"></i></div></a>
      </div>
    );
  }
});


//......Start Content Container........................................................

var StartContentContainer = React.createClass({

  render: function() {
    return (
    <div className="StartContent">
        <NavBar />
      <div className="FewWords">
      <h1>
         HearthStone
            <br />
       Heroes of Warcraft
      </h1>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eius nam facere enim, voluptas incidunt officiis molestiae, nostrum dolor? Fugit esse voluptates tempora cupiditate officia voluptas iste maxime assumenda nihil.</p>
      <hr />
    </div>
    <img className="cardsPreview" src="img/cards3.png" alt="Cards Preview Picture" />
    </div>
    );
  }
});

//DOM RENDER

ReactDOM.render( 
  <StartContent />,
  document.getElementById('StartContent')
);

//............News....................................................................

function MakeNews(heading,text,idForBg){ 
	 	return (
		 	<div id={idForBg} className="newsImages">
				<div className={"description " + idForBg }>
					<h3>{heading}</h3>
					<p>{text}</p>
				</div>
			</div>
	 	);
};

var content1 = {
	heading : "News1",
	text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus eaque ipsam beatae, itaque nam non eum voluptates dignissimos, sunt doloremque laborum aut.",
	idForBg : "NewsBg1"
},

content2 = {
	heading : "News2",
	text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus eaque ipsam beatae, itaque nam non eum voluptates dignissimos, sunt doloremque laborum aut.",
	idForBg : "NewsBg2"
},

content3 = {
	heading : "News3",
	text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus eaque ipsam beatae, itaque nam non eum voluptates dignissimos, sunt doloremque laborum aut.",
	idForBg : "NewsBg3"
},

content4 = {
	heading : "News4",
	text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus eaque ipsam beatae, itaque nam non eum voluptates dignissimos, sunt doloremque laborum aut.",
	idForBg : "NewsBg4"
},

content5 = {
	heading : "News5",
	text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus eaque ipsam beatae, itaque nam non eum voluptates dignissimos, sunt doloremque laborum aut.",
	idForBg : "NewsBg5"
},

content6 = {
	heading : "News6",
	text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus eaque ipsam beatae, itaque nam non eum voluptates dignissimos, sunt doloremque laborum aut.",
	idForBg : "NewsBg6"
};

var article_1 = MakeNews(content1.heading,content1.text,content1.idForBg),
article_2 = MakeNews(content2.heading,content2.text,content2.idForBg),
article_3 = MakeNews(content3.heading,content3.text,content3.idForBg),
article_4 = MakeNews(content4.heading,content4.text,content4.idForBg),
article_5 = MakeNews(content5.heading,content5.text,content5.idForBg),
article_6 = MakeNews(content6.heading,content6.text,content6.idForBg);

var News = React.createClass({

  componentDidMount : function() {

  	var articles = document.querySelectorAll('.newsImages');

  	for (var i = 0; i<articles.length; i++){
  		articles[i].classList.add('dn');
  	}

  	setInterval (function(){
  		// for (var i = 0; i<articles.length; i++){
  		// articles[i].classList.remove('dn');
  		// }
	    articles[0].classList.add('newsCard1anim');
		articles[1].classList.add('newsCard2anim');
		articles[2].classList.add('newsCard3anim');
		articles[3].classList.add('newsCard4anim');
		articles[4].classList.add('newsCard5anim');
		articles[5].classList.add('newsCard6anim');
    }, 500);		
  },

  render: function() {
    return (
    <div className="newsContainer">
    	<div className="NamedRows">&nbsp;&nbsp;News</div>
    	<div className="row">
    	<div className="cell">{article_1}</div>
    	<div className="cell">{article_2}</div>
    	<div className="cell">{article_3}</div>
    	</div>
    	<div className="row">
    	<div className="cell">{article_4}</div>
    	<div className="cell">{article_5}</div>
    	<div className="cell">{article_6}</div>
    	</div>
    </div>
    );
  }
});
// ...........Slider..................................................................


var Slider = React.createClass({

    componentDidMount : function(){
		setInterval(function Rotate() {
			var slide1 = document.getElementById('slide1'),
				slide2 = document.getElementById('slide2'),
				slide3 = document.getElementById('slide3'),
				slide4 = document.getElementById('slide4');

			if (slide1.checked == true) {
				slide2.checked = true;
				slide1.checked = false;
			} else if (slide2.checked == true) {
				slide3.checked = true;
				slide2.checked = false;
			} else if (slide3.checked == true) {
				slide3.checked = false;
				slide4.checked=true;
			} else if (slide4.checked == true) {
				slide4.checked = false;
				slide1.checked=true;
			}
		}, 2000);
    },

  render: function() {
    return (
    <div className="sliderContainer">
   		<div className="NamedRows">&nbsp;&nbsp;Slider</div>
	    <div className="slider">

			<input type="radio" id="slide1" name="slide" defaultChecked />
			<input type="radio" id="slide2" name="slide" />
			<input type="radio" id="slide3" name="slide" />
			<input type="radio" id="slide4" name="slide" />

		    <ul>
		        <li></li>
		        <li></li>
		        <li></li>
		        <li></li>
		    </ul>
	    </div>
    </div>
    );
  }
});
// ...........Comments....................................................................

var Comments = React.createClass({
  
  getInitialState : function(){
    return {
      comments: {}
    }
  },

  addComment : function(commentData){

  var DataInSeconds = (new Date()).getTime();     //В переменной дата в секундах с 1970, используется для создания уникального ключа сообщению
                                                  //чтобы они не перезаписывали друг друга, а добавлялись.
    
    this.state.comments['comment-id' + DataInSeconds] = commentData; 

    // В comments попадает что-то типа: "comment-id1462281825085": {
  //                    "commentName": "вывфыыфв",
  //                    "commentBody": "фывфыв"
  //                  }

    this.setState({
    comments: this.state.comments                  //Обновляем состояние
    });
  },

   renderComment: function(key) {
    return (
      <li className="">
        <NewComment key={key} index={key} details={this.state.comments[key]} />
      </li>
    )
  },

  render: function() {
    return (
    <div className="commentsContainer">
    <div className="NamedRows"><p>&nbsp;&nbsp;Comments</p></div>
      <CommentForm addComment={this.addComment}/>
      <ul>
     {Object.keys(this.state.comments).map(this.renderComment)}  {/*.keys чтоб работать как с массивом, map - перебираем массив через функцию.*/}
      </ul>
    </div>
    );
  }
});

var CommentForm = React.createClass({
  
  processComment: function(event) {
    event.preventDefault();
      
    // 1.Take data from the form
  var commentData = {
    commentName: this.refs.name.value,
    commentBody: this.refs.desc.value
  }

  // 2.Take data up to parent function
  this.props.addComment(commentData);

  //3.Reset the form
  this.refs.commentForm.reset();
  },

  render : function() {
    return (
    <div className="CommentsForm">
        <h4>Add a Comment</h4>
        <form ref="commentForm" onSubmit={this.processComment}>
          <input type="text" ref="name" placeholder="Your Name" required/>
          <textarea ref="desc" placeholder="Add your comment here" required/>
          <button id="submit" type="submit">Add Comment</button>
        </form>
    </div>
    )
  }
});

var NewComment = React.createClass({
  render: function() {
    return (
    <div className="CommentWrap">
       <div className="Author">
       <img src="img/Avatar.png"/>
       <h4>{this.props.details.commentName}</h4>
     </div>
     <div className="commentText">
          <p>{this.props.details.commentBody}</p>
       </div>
    </div>
    );
  }
});
// ...........Card Description........................................................



var CardDescription = React.createClass({

  componentDidMount: function(){
	var clickableElement = document.querySelector('.imageContainer');

    clickableElement.addEventListener('click', function(){
    var shadowAnimation1 = document.querySelector('.shadowAnimation'),
        shadowAnimation2 = document.querySelector('.shadowAnimation2');
    
    shadowAnimation1.classList.toggle('animation');
    shadowAnimation2.classList.toggle('animation2');

    setTimeout( function(){
	
	    if (!document.querySelector('.shade').classList.contains('displayBlock')){
		  var tips = document.querySelectorAll('.tips');
			for (var i=0; i<tips.length; i++){
               tips[i].classList.add('displayBlock');
            }
		  document.querySelector('.shade').classList.add('displayBlock');
	    }

	},4000); 
	
		if (document.querySelector('.shade').classList.contains('displayBlock')){
		   var tips = document.querySelectorAll('.tips');
			for (var i=0; i<tips.length; i++){
               tips[i].classList.remove('displayBlock');
            }
		 document.querySelector('.shade').classList.remove('displayBlock');
	    }
    });

  },

  render: function() {
    return (
    <div className="cardDescriptionContainer">
    <div className="NamedRows"><p>&nbsp;&nbsp;Card</p></div>
    <div className="mainCard">
		<div className="shadowAnimation"></div>
		<div className="shadowAnimation2"></div>
		<div className="imageContainer"></div>
		<div className="shade"></div>
		<div className="tips tooltip1">Mana Cost</div>
		<div className="tips tooltip2">Name</div>
		<div className="tips tooltip3">Rarity</div>
		<div className="tips tooltip4">Special Effect</div>
		<div className="tips tooltip5">Description</div>
		<div className="tips tooltip6">Attack</div>
		<div className="tips tooltip7">Health</div>
	</div>
    </div>
    );
  }
});
// ...........Deck Build..............................................................


var DeckBuild = React.createClass({

  componentDidMount: function(){
	// HTML5 D&D

	var DraggableItemData;
    var dropzone = document.querySelector('.dropZone');
    dropzone.addEventListener('dragenter', handleDragEnter);
    dropzone.addEventListener('dragleave', handleDragLeave);
    dropzone.addEventListener('dragover', handleDragOver);
    dropzone.addEventListener('drop', handleDrop);


	function handleDrop(e) {

	  e.preventDefault();
	  self = this;

      var data = e.dataTransfer.getData('source');   //String (can't be appendChild)
      var dataElement = document.getElementById(data);
      
      var idNum = data.charAt(1);
	  dataElement.classList.add('cardmove' + idNum);

      dataElement.classList.add('cardmove');
      this.appendChild(dataElement);
	}

	function handleDragOver(e) {
	  e.preventDefault();                    // Necessary. Allows us to drop.
	}

  	function handleDragEnter(e) {
      this.classList.add('boxshadow');
    };

    function handleDragLeave(e) {
      this.classList.remove('boxshadow');
    };

	function handleDragStart(e) {
	  DraggableItemData = this;
		  // var num = DraggableItemData.id.charAt(1);
		  // var dragIcon = document.createElement('img');
		  // dragIcon.src = 'img/'+num+'m.png';
		  // dragIcon.width = 100;
		  // e.dataTransfer.setDragImage(dragIcon, -10, -10);
	  e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('source', DraggableItemData.id);
	};
    
	var items = document.querySelectorAll('.cardsDeckBuild');
	[].forEach.call(items, function(item) {
	  item.addEventListener('dragstart', handleDragStart);
	});

  },

  render: function() {
    return (
    <div className="DeckBuildContainer">
       <div className="NamedRows"><p>&nbsp;&nbsp;Deck Build</p></div>
       <div className="mainblockDeckBuild">

			<div id="c1" className="cardsDeckBuild cardDeckBuild1" draggable="true"></div>
			<div id="c2" className="cardsDeckBuild cardDeckBuild2" draggable="true"></div>
			<div id="c3" className="cardsDeckBuild cardDeckBuild3" draggable="true"></div>
			<div id="c4" className="cardsDeckBuild cardDeckBuild4" draggable="true"></div>
			<div id="c5" className="cardsDeckBuild cardDeckBuild5" draggable="true"></div>
			<div id="c6" className="cardsDeckBuild cardDeckBuild6" draggable="true"></div>
			<div id="c7" className="cardsDeckBuild cardDeckBuild7" draggable="true"></div>
			<div id="c8" className="cardsDeckBuild cardDeckBuild8" draggable="true"></div>

			<div id='dropzone' className="dropZone"></div>
	    </div>
    </div>
    );
  }
});
//...........Footer...................................................................

var Footer = React.createClass({
  render: function() {
    return (
    <div className="FooterContainer">
		<div id='Contacts' className="contacts">
			<ul className="footerList">
				<li className="footerLiMainWord">The<span> LINKS</span></li>
				<li className="footerLi">World</li>
				<li className="footerLi">Rewiews</li>
				<li className="footerLi">Tech</li>
				<li className="footerLi">Science</li>
				<li className="footerLi">Culture</li>
				<li className="footerLi">Design</li>
				<li className="footerLi">Business</li>
			</ul>
			<ul className="footerList">
				<li className="footerLiMainWord">The<span> SITE</span></li>
				<li className="footerLi">Site Status</li>
				<li className="footerLi">About</li>
				<li className="footerLi">Contact</li>
				<li className="footerLi">Forums</li>
				<li className="footerLi">Jobs</li>
			</ul>
			<ul className="footerList">
				<li className="footerLiMainWord">The<span> SOCIAL</span></li>
				<li className="footerLi"><a href="http://vk.com/andrey.lakutin" target="_blank"><i className="fa fa-vk"></i>&nbsp;&nbsp;Vkontakte</a></li>
				<li className="footerLi"><a href="https://www.facebook.com/andrey.lakutin" target="_blank"><i className="fa fa-facebook-official"></i>&nbsp;&nbsp;&nbsp;Facebook</a></li>
				<li className="footerLi"><a href="#" target="_blank"><i className="fa fa-twitch"></i>&nbsp;&nbsp;Twitch</a></li>
				<li className="footerLi"><a href="https://twitter.com/kulapipundrium?lang=en" target="_blank"><i className="fa fa-twitter"></i>&nbsp;&nbsp;Twitter</a></li>
				<li className="footerLi"><a href="#" target="_blank"><i className="fa fa-youtube"></i>&nbsp;&nbsp;YouTube</a></li>
				<li className="footerLi"><a href="#" target="_blank"><i className="fa fa-instagram"></i>&nbsp;&nbsp;Instagram</a></li>
			</ul>
			<div className="siteInfo">Andrey Lakutin. <span className="ukraine">Kiev, Ukraine</span>. 2016 <i className="fa fa-trademark"></i> <br /> +38(063)449-49-17</div>
			
		</div>
    </div>
    );
  }
});

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
//............Registration.................................................
 
var	login = document.querySelector('.login'),
	inputLogin  = document.getElementById('inputLogin'),
	inputPassword  = document.getElementById('inputPassword'),
	wordLogin  = document.getElementById('wordLogin'),
	wordPassword  = document.getElementById('wordPassword'),
	buttonForLogin  = document.getElementById('buttonForLogin'),
	buttonForPassword  = document.getElementById('buttonForPassword'),
	input1,
	input2,
	loginStorage = localStorage.getItem("Login"),
    passStorage = localStorage.getItem("Password");


login.addEventListener('click', function one(){
    login.classList.add('loginActivated');                                                     
    inputLogin.classList.add('db'); 
    wordLogin.classList.add('db');
    buttonForLogin.classList.add('db');
    setTimeout( function(){
    inputLogin.classList.add('inputLoginAppearance');  
       },500);      
    wordLogin.classList.add("wordLoginAnim");   
    login.removeEventListener('click', one);
});

buttonForLogin.addEventListener('click', function(){
	input1 = inputLogin.value;
	localStorage.setItem("Login", input1);
	inputLogin.classList.add('inputLoginSlideUp');
	setTimeout( function(){
         inputLogin.classList.add('borderDisapear');  
         inputLogin.classList.remove('db');
     },680);   
	wordLogin.classList.add('DisapearByOpacity');
	setTimeout( function(){
       inputPassword.classList.add('db');
       wordPassword.classList.add('db');
     },650);  
	inputPassword.classList.add('inputPasswordAnim');
	wordPassword.classList.add('wordPasswordAnim');
	buttonForLogin.classList.remove('db');
	buttonForPassword.classList.add('db');
	buttonForPassword.classList.add('buttonForPasswordAnim');
});

inputLogin.addEventListener('focus', function(){
	wordLogin.classList.add('FlyUp');
	inputLogin.classList.add('BecomeActive');
	buttonForLogin.classList.add('GrowUp');
	inputLogin.value = "" + loginStorage + "";
});

inputPassword.addEventListener('focus', function(){
	wordPassword.classList.add('FlyUp');
	inputPassword.classList.add('BecomeActive');
	buttonForPassword.classList.add('GrowUp');
	inputPassword.value = "" + passStorage + ""; 
});


buttonForPassword.addEventListener('click', function(){
	input2 = inputPassword.value;                      
    localStorage.setItem("Password", input2);
    buttonForPassword.classList.remove('db');
    inputPassword.classList.remove('db');
    wordPassword.classList.remove('db');
    login.classList.remove('loginActivated');
    login.innerHTML = ''+ input1 + ' here';

	var xmlhttp = new XMLHttpRequest();
	var url = "Autentification.json";

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	        myFunction(myArr);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(json) {
	    if (input1 == json.loginAsAdmin && input2 == json.password){
            alert('Hey Admin');
        };
	}
});