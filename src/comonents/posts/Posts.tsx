import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Posts.module.scss';
import POSTS from '../../assets/POSTS';
import Button from '../button/Button';

const Posts = () => {
  const history = useHistory();

  const readMoreButtonHandler = (id: number) => {
    history.push(`/simple-blog/articles/${id}`);
  };
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Latest stories</h1>

      {POSTS()?.map(({ id, title, body }) => {
        return (
          <div key={id.toString()} className={styles.post}>
            <h2 className={styles.headingSecondary}>{title}</h2>
            <p className={styles.paragraph}>{body}</p>
            <div className={styles.buttonWrapper}>
              <Button onClickHandler={() => readMoreButtonHandler(id)}>
                View post
              </Button>
            </div>
            <br></br>
          </div>
        );
      })}
    </section>
  );
};
export default Posts;
