import * as React from 'react';
import { useEffect, useState } from 'react';
import SkeletonElement from '../skeletons/SkeletonElement';

const Article = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setArticles(data);
    }, 1000);
  });

  return (
    <div className="article">
      <h3>Article</h3>
      <SkeletonElement type="title" />
      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles && <div>Loading...</div>}
    </div>
  );
};

export default Article;
