import React from "react";
import styled from "styled-components/macro";

const BooksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Book = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 5em;
  padding: 25px;
  border: 1px solid rgba(15, 15, 15, 0.2);
  margin-right: 25px;
  border-radius: 4px;
`;

const BookTitle = styled.div`
  font-size: 20px;
  margin-bottom: 1em;
  color: #3d3d3d;
  font-weight: 700;
`;

const AuthorName = styled.div`
  font-size: 17px;
`;

const NumPages = styled.div`
  color: rgba(15, 15, 15, 0.5);
  font-size: 14px;
`;

export function Books(props) {
  const { books } = props;

  return (
    <BooksContainer>
      {books.map((book, idx) => {
        return (
          <Book key={`${book.name}-${idx}`}>
            <BookTitle>{book.name}</BookTitle>
            <AuthorName>{book.author}</AuthorName>
            <NumPages>{book.NumPages}</NumPages>
          </Book>
        );
      })}
    </BooksContainer>
  );
}
