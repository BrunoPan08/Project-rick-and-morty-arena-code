import './App.scss';
import React, { useState, useEffect } from "react";
import Filter from "./components/filter/Filter";
import Cards from "./components/cards/Cards";
import Pages from "./components/pages/Pages";
import Search from "./components/search/Search";
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, useLazyQuery, useQuery} from '@apollo/client';
import {GET_CHARACTER_QUERY} from './graphql/Queries'

function App() {
  let [numberPage, setNumberPage] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  // const { loading, error, data } = useQuery(GET_CHARACTER_QUERY)
  let {info, results } = fetchedData;

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://rickandmortyapi.com/graphql"
  })



  let api = `https://rickandmortyapi.com/api/character/?page=${numberPage}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <BrowserRouter className="App">
      <ApolloProvider client={client}>
        <div className="containerNavbar">
          <div className="navbar">
            <div className="containerFluid">
              <a className="alignTitle">
                <h3>Rick and Morty</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="containerSearch">
          <Search setNumberPage={setNumberPage} setSearch={setSearch} />
        </div>
        <div className="containerFilter">
          <Filter
            setStatus={setStatus}
            setNumberPage={setNumberPage}
            setGender={setGender}
            setSpecies={setSpecies}
          />
        </div>
        <div className="container">
          <div className="row">
            <Cards page="/" results={results}/>
          </div>
        </div>
        <div>
          <Pages numberPage={numberPage} setNumberPage={setNumberPage} />
        </div>
        </ApolloProvider>  
    </BrowserRouter>
  );
}

export default App;
