import React, { FC, useEffect, RefObject } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styles from './Articles.module.scss';

type Posts = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type Comment = {
  body: string;
  id: number;
};
type Props = {
  posts: Posts[];
  addComment: (index: number) => void;
  inputElement: RefObject<HTMLInputElement>;
  comments: Comment[];
};
const Articles: FC<Props> = ({ comments, posts, addComment, inputElement }) => {
  const { articleId } = useParams<{ articleId: string }>();

  const article = posts?.find((post) => {
    return String(post.id) === articleId;
  });
  const history = useHistory();
  const backButtonHandler = () => {
    history.push('/');
  };

  useEffect(() => {});

  return (
    <section>
      <h1 className={styles.heading}>
      {article?.id} {article?.title} 
      </h1>
      <p>{article?.body}</p>
      <button onClick={backButtonHandler}>Go Back</button>
      <br></br>
      <br></br>
      <input ref={inputElement} type="text" />
      <button onClick={() => addComment(Number(articleId) - 1)}>
        Add comment
      </button>
      <div>Comments:</div>
      {comments &&
        comments.map(
          (coment, index) =>
            coment.id === Number(articleId) - 1 && (
              <div key={index.toString()}>{coment.body}</div>
            ),
        )}
    </section>
  );
};
export default Articles;
