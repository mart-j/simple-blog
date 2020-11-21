import { useState, useEffect } from 'react';
import axios from 'axios';

type Posts = {
  body: string;
  id: number;
  comment: string;
  userId: number;
  title: string;
};

const POSTS = () => {
  const [posts, setPosts] = useState<Posts[]>();

  //   useEffect(() => {
  //     if (posts) {
  //       const newPosts = [...posts!];

  //       while (newPosts.length > 0) {
  //         const chunk = newPosts.splice(0, 20);

  //         console.log(chunk);
  //       }
  //     }
  //   }, [posts]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => setPosts(data));
  }, []);

  return posts;
};

export default POSTS;
