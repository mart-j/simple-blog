import React, { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import POSTS from '../assets/POSTS';
import firebase from '../utils/firebase';

const Articles = () => {
  const [comments, setComments] = useState<{ id: number; comment: string }[]>();
  const [commentKeys, setCommentKeys] = useState<string[]>();
  const [pushComment, setPushComment] = useState('');
  const { articleId } = useParams<{ articleId: string }>();
  const inputElement = useRef<HTMLInputElement>(null);

  // Navigate back to home
  const history = useHistory();
  const backButtonHandler = () => {
    history.push('/simple-blog');
  };

  const changeHandler = () => {
    setPushComment(inputElement.current!.value);
  };

  // Adding comments to database
  const addComment = (index: number) => {
    if (inputElement.current!.value) {
      const commentsRef = firebase.database().ref('Comments');
      commentsRef.push({ comment: pushComment, id: index });
      inputElement.current!.value = '';
    }
  };

  // Find post that belongs to ArticleId
  const article = POSTS()?.find((post) => {
    return String(post.id) === articleId;
  });

  // Find comment that belongs to post
  const filteredComments = comments?.filter((coment) => {
    return coment.id === Number(articleId);
  });

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

  useEffect(() => {
    getCommentsFromDatabase();
  }, []);

  const deleteComment = (index: number) => {
    const commentRef = firebase
      .database()
      .ref('Comments')
      .child(commentKeys![index]);
    commentRef.remove();
  };

  return (
    <section>
      <h1>
        {article?.id} {article?.title}
      </h1>
      <p>{article?.body}</p>
      <button onClick={backButtonHandler}>Go Back</button>
      <br></br>
      <br></br>
      <input onChange={changeHandler} ref={inputElement} type="text" />
      <button onClick={() => addComment(Number(article?.id))}>
        Add comment
      </button>
      <div>Comments:</div>
      {comments &&
        filteredComments?.map((item, i) => {
          return (
            <>
              <div key={item.toString()}>{item.comment}</div>
              <button onClick={() => deleteComment(i)}>delete</button>
            </>
          );
        })}
    </section>
  );
};
export default Articles;
