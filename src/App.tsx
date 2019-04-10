import React, { useState, useEffect, useRef } from 'react';

import './components/books/books.css';
import './App.css';
import SearchBooks from './components/books/searchBooks';
import { useBookNameFetch } from './services';
import { key } from './constants';
import { RouteComponentProps } from 'react-router';

const App: React.FC<RouteComponentProps> = ({ history }) => {
  let textInput = useRef<HTMLInputElement>(null);

  const [url, setUrl] = useState(`/search.xml?key=${key}&q=${'Game'}`);
  const [books, setBooks] = useState<any>([]);

  useEffect(() => {
    const node = textInput.current;
    node ? node.focus() : '';
    let fetchBooks = async () => {
      const result = await useBookNameFetch(url);
      setBooks(result);
    };

    fetchBooks();
  }, [url]);

  const onSearchBooks = (text: string) => {
    const url = `/search.xml?key=${key}&q=${text}`;
    setUrl(url);
  };

  const listPlaceHolder = () => {
    return (
      <div style={{ width: '100%', textAlign: 'center', marginTop: '4rem', fontSize: '2rem' }}>
        <span style={{ color: '#fff' }} data-testid="imageListBeforeId">
          Your books will be shown here
        </span>
      </div>
    );
  };

  const naviagateToBookDetails = (id: number) => {
    history.push({
      pathname: '/book-details',
      state: {
        bookId: `${id}`,
      },
    });
  };

  return (
    <div className="App">
      <SearchBooks onSubmit={onSearchBooks} ref={textInput} />
      {books.length ? (
        <div className="gallery-wrapper">
          <div className="gallery" data-testId="imageListAfterId">
            {books.length
              ? books.map((item: any, i: number) => (
                  <img
                    key={item.id._text + i.toString()}
                    src={item.best_book.image_url._text}
                    className="gallery__img"
                    onClick={() => naviagateToBookDetails(item.best_book.id._text)}
                  />
                ))
              : ''}
          </div>
        </div>
      ) : (
        listPlaceHolder()
      )}
    </div>
  );
};

export default App;
