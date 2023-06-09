import React from 'react';
import { Markdown } from './Markdown';
import { PostData } from '../loader';
import { PostMeta } from './PostMeta';

export const StaticPost: React.FunctionComponent<{ post: PostData }> = ({
    post,
}) => {
    const { title, subtitle } = post;
    return (
        <div className="blog-post">
            <PostMeta post={post} />

            <div className="static-post-title">
                {title && <h1>{title}</h1>}
                {subtitle && <h2>{subtitle}</h2>}
            </div>

            <div className="blog-post-content">
                <Markdown source={post.content} />
            </div>
        </div>
    );
};
