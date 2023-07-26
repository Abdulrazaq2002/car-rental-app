import React from "react";

function NewsPage() {
  const newsData = [
    {
      id: 1,
      title: "Breaking News",
      description: "This is a breaking news article.",
      author: "John Doe",
      date: "2023-06-28",
    },
    {
      id: 2,
      title: "Sports News",
      description: "Check out the latest sports updates.",
      author: "Jane Smith",
      date: "2023-06-27",
    },
    {
      id: 3,
      title: "Entertainment News",
      description: "Get the latest entertainment gossip.",
      author: "Mike Johnson",
      date: "2023-06-26",
    },
  ];

  return (
    <div>
      <h1>News Page</h1>
      {newsData.map((newsItem) => (
        <div key={newsItem.id}>
          <h2>{newsItem.title}</h2>
          <p>{newsItem.description}</p>
          <p>Author: {newsItem.author}</p>
          <p>Date: {newsItem.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default NewsPage;
