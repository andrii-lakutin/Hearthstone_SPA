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