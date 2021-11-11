import React from 'react';
import { connect } from 'react-redux';
import { updateQuote } from './quoteAction';
import Button from '@mui/material/Button'

const Quotes = ({ quoteState, changeQuote }) => {
  const handleOnClick = () => {
    changeQuote();
    console.log(" in handleOnClick")
    console.log(changeQuote)
  }
  
  return (
    <div>
      <div id="quote-box">
        {quoteState.quote}
        {quoteState.author}

      </div>
      {/* <button onClick={handleOnClick}>New Quote</button> */}
      <Button variant="contained" onClick={handleOnClick}>New Quote</Button>
    </div>
  )

}


const mapStateToProps = (state) => ({
  quoteState: state,
});

const mapDispatchToProps = (dispatch) => {
  console.log("in map dispatch to props");
  return({ changeQuote: () => dispatch(updateQuote()),
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Quotes);