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
