import React from 'react';
import { connect } from 'react-redux';
import { updateQuote } from './quoteAction';

const Quotes = ({ props, addNewQuote }) => {
  const handleOnClick = () => {
    addNewQuote();
  }
  return (
    <div>
      <div id="quote-box">
        {props.quote}
        {props.author}

      </div>
      <button onClick={handleOnClick}>New Quote</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  props: state,
});

const mapDispatchToProps = (dispatch) => ({
  addNewQuote: (quote) => dispatch(updateQuote(quote)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);