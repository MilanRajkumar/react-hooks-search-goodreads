import React, { useState, useEffect } from 'react';
import { key as goodreadsKey } from '../../constants';
import { useBookDetails } from '../../services';
import { RouteComponentProps } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BookDetails: React.FC<RouteComponentProps> = ({ location }) => {
  console.log(location.state.bookId);
  const url = `owned_books/show/${location.state.bookId}?key=${goodreadsKey}&format=xml`;
  console.log('url is:', url);
  const [bookDetails, setBooksDetails] = useState<any>([]);

  useEffect(() => {
    let fetchBookDetails = async () => {
      const result = await useBookDetails(url);
      setBooksDetails(result);
    };

    fetchBookDetails();
  }, [url]);
  const getStarRating = () => {
    return (
      <div className="rating-wrapper">
        <FontAwesomeIcon icon={faStar} color="#5ab8ca" />
        <FontAwesomeIcon icon={faStar} color="#5ab8ca" />
        <FontAwesomeIcon icon={faStar} color="#5ab8ca" />
        <FontAwesomeIcon icon={faStar} color="#5ab8ca" />
        <FontAwesomeIcon icon={faStar} color="#85817f" />
      </div>
    );
  };
  return (
    <div className="book-details--container">
      <div className="book-details--container__item1">
        <div className="item1">
          <img src={require('../../assets/sample_book.jpg')} />
          <p>{getStarRating()}</p>
        </div>
        <button className="search-btn--large">Want to read</button>
      </div>
      <div className="book-details--container__item2 card">
        <div>
          <h4 className="f2">Programming Challenges: The Programming Contest Training Manual</h4>
          <div>
            by <span>Stevan S. Sklena</span>
            <span>(Goodreads Author)</span>
            <div style={{ display: 'flex' }}>
              {getStarRating()}
              <span className="p1">Rating details</span>
              <span className="p1">100 ratings</span>
              <span className="p1">10 reviews</span>
            </div>
          </div>
          <section>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
            for use in a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.” The purpose of lorem ipsum is to create a natural looking block of text
            (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not
            without controversy, laying out pages with meaningless filler text can be very useful
            when the focus is meant to be on design, not content. The passage experienced a surge in
            popularity during the 1960s when Letraset used it on their dry-transfer sheets, and
            again during the 90s as desktop publishers bundled the text with their software. Today
            it's seen all around the web; on templates, websites, and stock designs. Use our
            generator to get your own, or read on for the authoritative history of lorem ipsum.
          </section>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;
