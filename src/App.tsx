import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import styles from './App.module.scss';

import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';

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

const App = () => {
  const [posts, setPosts] = useState<Posts[]>();
  const [comments, setComments] = useState<Comment[]>();
  const history = useHistory();
  const inputElement = useRef<HTMLInputElement>(null);

  const addComment = (index: number) => {
    let newComment;
    if (comments) {
      newComment = [
        ...comments!,
        { body: inputElement.current?.value, id: index },
      ];
    } else {
      newComment = [{ body: inputElement.current?.value, id: index }];
    }
    // @ts-ignore
    setComments(newComment);
    inputElement.current!.value = '';
  };

  const readMoreButtonHandler = (id: number) => {
    history.push(`/articles/${id}`);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((postArray) => setPosts(postArray));
  }, []);

  useEffect(() => {
    // alert('Esi sveicināts manā blogā');
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home readMoreButtonHandler={readMoreButtonHandler} posts={posts!} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/articles/:articleId">
          <Articles
            comments={comments!}
            inputElement={inputElement}
            addComment={addComment}
            posts={posts!}
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
