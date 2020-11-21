import React from 'react';
import { useHistory } from 'react-router-dom';
import POSTS from '../assets/POSTS';


const Home = () => {
  const history = useHistory();
  const readMoreButtonHandler = (id: number) => {
    history.push(`/simple-blog/articles/${id}`);
  };

  return (
    <section>
      <h1>Sākums</h1>

      {POSTS &&
        POSTS()?.map(({ id, title }) => {
          return (
            <>
              <div key={id.toString()}>{title}</div>
              <br></br>
              <button onClick={() => readMoreButtonHandler(id)}>
                read more
              </button>
              <br></br>
            </>
          );
        })}
    </section>
  );
};
export default Home;
