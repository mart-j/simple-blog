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
    <section style={{ maxWidth: '800px', margin: 'auto' }}>
      <h1>
        {article?.id} {article?.title}
      </h1>
      <p>{article?.body}</p>

      <Comments articleId={articleId} />
      <Button onClickHandler={backButtonHandler}>Back to home</Button>
    </section>
  );
};
export default Articles;
