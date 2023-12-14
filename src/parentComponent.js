import React, { useState } from 'react';
import Menu from './Menu';
import ListArticles from './ListArticles';

function ParentComponent() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>      <Menu setSearchResults={setSearchResults} />
      <ListArticles searchResults={searchResults} />
    </>
  );
}

export default ParentComponent;