var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./comment-box');

var data = [
  {author: "Pete Hunter", text: "This is one comment"},
  {author: "Jordan Walker", text: "This is *another* comment"}
];

ReactDOM.render(<CommentBox data={data} />, document.querySelector('.content'));
