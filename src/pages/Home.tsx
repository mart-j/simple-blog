import React, { FC } from 'react';

type Posts = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type Props = {
  posts: Posts[];
  readMoreButtonHandler: (id: number) => void;
};
const Home: FC<Props> = ({ readMoreButtonHandler, posts }) => {
  return (
    <section>
      <h1>Sākums</h1>

      {posts &&
        posts?.map(({ id, title }) => {
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
