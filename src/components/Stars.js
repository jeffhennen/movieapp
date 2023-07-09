import React from 'react';
import StarRatings from 'react-star-ratings';

export default function Stars(props) {
  return (
    <div>
      <StarRatings
        rating={props.rating}
        starRatedColor="orange"
        starEmptyColor="gray"
        starDimension="20px"
        starSpacing="2px"
        numberOfStars={5}
        isHalf={true}
        isSelectable={props.readOnly} // Toggle isSelectable based on readOnly state
        changeRating={props.onChange}
        name="rating"
      />
    </div>
  );
}
