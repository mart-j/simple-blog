import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Comments.module.scss';
import Button from '../button/Button';
import firebase from '../../utils/firebase';
import Input from '../input/Input';

interface Props {
  articleId: string;
}

const Comments: FC<Props> = ({ articleId }) => {
  const [comments, setComments] = useState<{ id: number; comment: string }[]>();
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
      commentsRef.push({ comment: pushComment, id: Number(articleId) });
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
    <>
     
      
      <div>Comments:</div>
      <Input inputElement={inputElement} changeHandler={changeHandler} />
      <Button onClickHandler={addComment}>Add comment</Button>
      {comments &&
        filteredComments?.map((item, i) => {
          return (
            <>
              <div key={item.toString()}>{item.comment}</div>
              <Button onClickHandler={() => deleteComment(i)}>delete</Button>
            </>
          );
        })}
    </>
  );
};
export default Comments;
