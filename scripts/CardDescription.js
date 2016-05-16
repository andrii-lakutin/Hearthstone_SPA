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