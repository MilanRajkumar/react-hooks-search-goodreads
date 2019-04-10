import React, { useState, Fragment } from 'react';
import './books.css';
const useBookValue = (initialValue: string) => {
  const [value, setBookValue] = useState(initialValue);
  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setBookValue(e.target.value),
  };
};

const searchBookInput = React.forwardRef(
  ({ onSubmit }: { onSubmit: (text: string) => void }, ref: React.Ref<HTMLInputElement>) => {
    const text = useBookValue('');
    return (
      <div className="input-form-wrapper">
        <fieldset>
          <input
            {...text}
            ref={ref}
            className="search-input--large"
            placeholder="Type your book of interest"
            data-testid="inputSearchId"
          />
          <button
            type="button"
            onClick={() => onSubmit(text.value)}
            className="search-btn--large"
            data-testid="searchButtonId"
          >
            Search
          </button>
        </fieldset>
      </div>
    );
  }
);

export default searchBookInput;
