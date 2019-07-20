import React from "react";
import "./App.css";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import styled from "styled-components";
import { Books } from "./components/books";

const GET_BOOKS = gql`
  query getBooks {
    myBooks: books {
      name
      author
      numPages
    }
  }
`;

function App() {
  const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h3>Store Books</h3>
        <Query query={GET_BOOKS}>
          {props => {
            console.log("Props: ", props);
            const { error, loading, data } = props;
            if (error) return <div>Error: {error.message}</div>;
            if (loading) return <div>Loading...</div>;
            if (!data && !data.myBooks) return <div>No Books Found!</div>;
            return <Books books={data.myBooks} />;
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
}

export default App;
