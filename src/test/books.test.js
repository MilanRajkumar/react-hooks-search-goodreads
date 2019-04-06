import { searchBooks } from '../services/index';
import { getBookByName } from './index';

test('search book of name Game', () => {
  expect(getBookByName('Game')).toMatchObject(searchBooks);
});

test('search book of name Game with other name', () => {
  expect(getBookByName('xyz')).toMatchObject({});
});

test('', () => {
  expect(getBookByName('xyz')).toMatchObject({});
});
