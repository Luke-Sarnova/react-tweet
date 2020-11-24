import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment'

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/> <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="button">
          <LikeButton count={tweet.likes}/>
          <RetweetButton count={tweet.retweets} />
          <ShareButton />
          <CommentButton />
        </div>
      </div>
      
    </div>
  );
}

var testTweet = {
  message: "Cats cats cats",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "BobBobson"
  },
  likes: 2,
  retweets: 5,
  timestamp: "2020-11-23 21:23:37"
}

function Avatar({hash}) {
  var url = `https://gravatar.com/avatar/${hash}`
  return (
    <img
    src={url}
      alt='avatar'
      className='avatar'
    />
  );
}

function Message({text}) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function NameWithHandle({author}) {
  const {name, handle} = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>

  );
}

//moment.js --npm add moment
const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
};
const CommentButton = () => <i className="far fa-comment" />

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return "";
  }
}

const RetweetButton = ({count}) => (
    <span className="retweet-button" >
     <i className="fa fa-retweet" />
     {getRetweetCount}
    </span>
  
); 
const LikeButton = ({count}) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {
      count > 0 &&
        <span className="like-count">
          {count}
        </span>
    }
  </span>
);

const ShareButton = () => (
  <span className="more-options-button" >
    <i className="fas fa-external-link-alt" />
  </span>
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));

