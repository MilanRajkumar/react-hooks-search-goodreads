import { searchBooks } from '../services/index';
export const getBookByName = name => {
  if (name === 'Game') {
    return searchBooks;
  } else {
    return {};
  }
};
