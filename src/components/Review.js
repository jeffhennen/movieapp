import Stars from './Stars';

export default function Review({ id, user, review, stars }) {
  return (
    <div id={`review-${id}`} className='border-top border-2 border-dark-subtle pt-2'>
      <h5>{user}</h5>
      <p className='fw-bold'>Review:</p>
      <p>{review}</p>
      <Stars rating={stars} readOnly={true} />
      <br/>
    </div>
  );
}
