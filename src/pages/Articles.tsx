import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import POSTS from '../assets/POSTS';
import Comments from '../comonents/comments/Comments';
import Button from '../comonents/button/Button';
import Section from '../comonents/section/Section';

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
    <Section>
      <h1>{article?.title}</h1>
      <p>{article?.body}</p>
      <Comments articleId={articleId} />
      <Button onClickHandler={backButtonHandler}>Back to home</Button>
    </Section>
  );
};
export default Articles;
