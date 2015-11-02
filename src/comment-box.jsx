var React = require('react');
var CommentList = require('./comment-list');
var CommentForm = require('./comment-form');
var Data = require('./data');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function(){
    this.setState({data: this.props.data});
  },

  handleCommentSubmit: function(comment) {
    Data.data.push({author: comment.author, text: comment.text});
 },

  render: function() {
    return <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={this.state.data} />
      <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
    </div>
  }
});
