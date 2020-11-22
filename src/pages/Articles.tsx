import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import POSTS from '../assets/POSTS';
import Comments from '../comonents/comments/Comments';
import Button from '../comonents/button/Button';

const Articles = () => {
  const { articleId } = useParams<{ articleId: string }>();

  // Navigate back to home
  const history = useHistory();
  const backButtonHandler = () => {
    history.push('/simple-blog');
  };

  // Find post that belongs to ArticleId
  const article = POSTS()?.find((post) => {
    return String(post.id) === articleId;
  });

  return (
    <section>
      <h1>
        {article?.id} {article?.title}
      </h1>
      <p>{article?.body}</p>
      <Button onClickHandler={backButtonHandler}>Go Back</Button>
      <Comments articleId={articleId} />
    </section>
  );
};
export default Articles;
