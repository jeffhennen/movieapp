import React, { useState } from 'react';
import Modal from 'react-modal';
import ReviewList from './reviewList';
import Review from './Review';
import Stars from './Stars';

const customStyles = {
  content: {
    backgroundColor: 'lightgrey',
    border: 'solid 1px',
    maxHeight: '100vh',
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto'
  }
};

export default function ReviewForm({ id, movie }) {
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(ReviewList.filter((review) => review.movie_id === id));
  const filteredReviews = reviews.filter((review) => review.movie_id === id);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    setName('');
    setReview('');
    setRating(0);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleReviewChange(event) {
    setReview(event.target.value);
  }

  function handleRatingChange(newRating) {
    setRating(newRating);
  }

  function handleSaveReview(event) {
    event.preventDefault();
    if (rating === 0) {
      alert('Please provide a rating for the review.');
      return;
    }

    if (name === '') {
      alert('Please enter your name.');
      return;
    }

    if (review === '') {
      alert('Please enter your review.');
      return;
    }

    const newReview = {
      id: reviews.length + 1,
      movie_id: id,
      user: name,
      review: review,
      stars: rating
    };

    setReviews([...reviews, newReview]);

    setName('');
    setReview('');
    setRating(0);

  }

  return (
    <div className=''>
      <button className='btn btn-primary col-12' onClick={openModal}>Reviews</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Reviews Modal"
      >
        <h3 ref={(_subtitle) => (subtitle = _subtitle)}>Reviews for "{movie.title}"</h3>
        {filteredReviews.map((review) => (
          <Review
            key={review.id}
            id={id}
            user={review.user}
            review={review.review}
            stars={review.stars}
          />
        ))}

        <form onSubmit={handleSaveReview}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name@example.com"
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave your review here"
              id="review"
              value={review}
              onChange={handleReviewChange}
            ></textarea>
            <label htmlFor="review">Review</label>
          </div>
          <div className="form-floating mb-3">
            <p className='mb-0'>Rating</p>
            <Stars rating={rating} readOnly={false} onChange={handleRatingChange} />
          </div>
          <div className='pt-1 row '>
            <button onClick={closeModal} className='col me-2 ms-2 btn btn-dark'>Close</button>
            <button type="submit" className='col ms-2 me-2 btn btn-dark'>Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
