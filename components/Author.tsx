import React from 'react';
import { format } from 'fecha';
import { PostData } from '../loader';
import Link from 'next/link';

export const FollowButton = () => {
  return (
    <Link href="/newsletter">
      <div className="follow-button">Follow</div>
    </Link>
  );
};

export const Author: React.FC<{ post: PostData }> = (props) => {
  return (
    <div className="author-container">
      <div className="author">
        {props.post.authorPhoto && (
          <img src={props.post.authorPhoto} className="author-image" />
        )}
        <AuthorLines post={props.post} />
      </div>
    </div>
  );
};

export const AuthorLines: React.FC<{ post: PostData }> = (props) => {
  return (
    <div>
      <p className="author-line">
        {props.post.author && <span>{props.post.author}</span>}

        {props.post.authorTwitter && (
          <span>
            {' '}
            <Link
              href={`https://twitter.com/${props.post.authorTwitter}`}
            >{`@${props.post.authorTwitter}`}</Link>{' '}
          </span>
        )}
      </p>
      <p className="author-line subtle">
        {props.post.datePublished
          ? format(new Date(props.post.datePublished), 'MMMM Do, YYYY')
          : ''}
      </p>
    </div>
  );
};
