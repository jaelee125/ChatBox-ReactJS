var React = require('react');
var Comment = require('./comments');

module.exports = React.createClass({

  render: function() {

    var comments = this.props.data.map(function (comment) {
      return <Comment author={comment.author}>
        {comment.text}
      </Comment>
    });

    return <div className="commentList">
      {comments}
    </div>
  }
});
