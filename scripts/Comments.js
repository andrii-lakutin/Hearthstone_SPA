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