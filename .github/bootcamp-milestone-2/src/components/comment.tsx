import React from 'react';
import { IComment } from '@/database/blogSchema';

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date) {
  return new Date(time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function Comment({ comment }: CommentProps) {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;