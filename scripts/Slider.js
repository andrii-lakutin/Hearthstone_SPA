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