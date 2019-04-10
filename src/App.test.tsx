import React from 'react';
import { render, cleanup, waitForElement, fireEvent, act } from 'react-testing-library';
import 'jest-dom/extend-expect';
import SearchBox from './components/books/searchBooks';
import App from './App';
import axiosMock from './__mocks__/axiosMock';

afterEach(cleanup);
it('render search box', () => {
  const { asFragment } = render(<SearchBox onSubmit={() => {}} />);
  expect(asFragment).toMatchSnapshot();
});

it('render image list placeholder', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('imageListBeforeId')).toHaveTextContent('Your books will be shown here');
});

it('render image list', async () => {
  axiosMock.useBookNameFetch.mockResolvedValueOnce({
    books: [
      {
        id: {
          _type: 'integer',
          __text: '10523104',
        },
        books_count: {
          _type: 'integer',
          __text: '4',
        },
        ratings_count: {
          _type: 'integer',
          __text: '741',
        },
        text_reviews_count: {
          _type: 'integer',
          __text: '30',
        },
        original_publication_year: {
          _type: 'integer',
          __text: '2009',
        },
        original_publication_month: {
          _type: 'integer',
          __text: '12',
        },
        original_publication_day: {
          _type: 'integer',
          __text: '9',
        },
        average_rating: '3.95',
        best_book: {
          id: {
            _type: 'integer',
            __text: '7734468',
          },
          title: "Ender's Game: War of Gifts",
          author: {
            id: {
              _type: 'integer',
              __text: '236462',
            },
            name: 'Jake Black',
          },
          image_url:
            'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
          small_image_url:
            'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
          _type: 'Book',
        },
      },
    ],
  });
  const { getByTestId } = render(<App />);
  fireEvent.click(getByTestId('searchButtonId'));
  const imageList = await waitForElement(() => {
    getByTestId('imageListAfterId');
  });
  expect(axiosMock.useBookNameFetch).toHaveBeenCalledTimes(9);
  // expect(axiosMock.useBookNameFetch).toHaveBeenCalledWith(url);
});
