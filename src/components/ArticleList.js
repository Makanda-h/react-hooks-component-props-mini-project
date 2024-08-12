import Article from "./Article";
import blogData from "../data/blog";

function ArticleList({ articles = [] }) {
  return (
    <main>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
