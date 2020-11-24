import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle /> <Time />
        <Message />
        <div className="button">
          <CommentButton />
          <RetweetButton />
          <LikeButton />
          <ShareButton />
        </div>
      </div>
      
    </div>
  );
}

function Avatar() {
  return (
    <img
    src='https://gravatar.com/avatar/nothing'
      alt='avatar'
      className='avatar'
    />
  );
}

function Message() {
  return (
    <div
    className='message'>
      This is less than 140 characters.
    </div>

  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Luke_Brannigan</span>
      <span className="handle">@mindivy</span>
    </span>

  );
}

const Time = () => <span className="time">3h ago</span>;
const CommentButton = () => <i className="far fa-comment" />
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />
const LikeButton = () => <i className="fa fa-heart like-button" />
const ShareButton = () => <i className="fas fa-external-link-alt" />

ReactDOM.render(<Tweet />, document.querySelector('#root'));

/*
Arrow Functions:
Shorthand functions that automatically bind to the surrounding context

function LikeButton() {
  return (
    <i className="fa fa-heart like-button" />
  );
}
|||| can be refactored into an anonymous function and stored in a variable 
VVVV

const LikeButton = function() {
  return(
    <i className="fa fa-heart like-button" />
  );
}

|||| can be simplified by removing braces and return
VVVV

const LikeButton = () => (
  <i className="fa fa-heart like-button" />
  )
*/