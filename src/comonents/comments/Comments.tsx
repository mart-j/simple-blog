/* eslint-disable @typescript-eslint/indent */
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Comments.module.scss';
import Button from '../button/Button';
import firebase from '../../utils/firebase';
import Input from '../input/Input';

interface Props {
  articleId: string;
}

const Comments: FC<Props> = ({ articleId }) => {
  const [comments, setComments] = useState<
    { id: number; comment: string; name: string }[]
  >();
  const [commentKeys, setCommentKeys] = useState<string[]>();
  const [pushComment, setPushComment] = useState('');
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getCommentsFromDatabase();
  }, []);

  const changeHandler = () => {
    setPushComment(inputElement.current!.value);
  };

  const getCommentsFromDatabase = () => {
    const commentsRef = firebase.database().ref('Comments');
    commentsRef.on('value', (snapshot) => {
      if (snapshot.val()) {
        setComments(Object.values(snapshot.val()));
        setCommentKeys(Object.keys(snapshot.val()));
      } else {
        setComments([]);
      }
    });
  };

  // Check if comment belongs to article id
  const filteredComments = comments?.filter((coment) => {
    return coment.id === Number(articleId);
  });

  // Adding comments to database
  const addComment = () => {
    console.log(inputElement.current!.value);
    if (inputElement.current!.value) {
      const commentsRef = firebase.database().ref('Comments');
      commentsRef.push({
        comment: pushComment,
        id: Number(articleId),
        name: 'Anonymus',
      });
      inputElement.current!.value = '';
    }
  };

  const deleteComment = (index: number) => {
    const commentRef = firebase
      .database()
      .ref('Comments')
      .child(commentKeys![index]);
    commentRef.remove();
  };

  return (
    <div className={styles.container}>
      <h2>Comments:</h2>

      {comments &&
        filteredComments?.map((item, i) => {
          return (
            <div className={styles.commentContainer} key={item.toString()}>
              <div className={styles.commentBody}>{item.comment}</div>
              <div className={styles.commentFooter}>
                <div className={styles.commentName}>
                  <i>{item.name}</i>
                </div>
                <Button onClickHandler={() => deleteComment(i)}>delete</Button>
              </div>
            </div>
          );
        })}
      <div className={styles.addCommentWrapper}>
        <Input inputElement={inputElement} changeHandler={changeHandler} />
        <Button onClickHandler={addComment}>Add comment</Button>
      </div>
    </div>
  );
};
export default Comments;
