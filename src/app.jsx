var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./comment-box');

ReactDOM.render(<CommentBox pollInterval={500}/>, document.querySelector('.content'));
