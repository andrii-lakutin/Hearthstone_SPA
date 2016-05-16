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