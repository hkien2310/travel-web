import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsStarFill, BsStar } from "react-icons/bs";
const ReviewsBody = ({ review }) => {
  const rating = (number) => {
    let container = [];
    for (let i = 0; i < 5; i++) {
      if (i < number) {
        container.push(
          <BsStarFill
            size={13}
            color="#df2189"
            className="reviews_body_content_rating_icon"
            key={i}
          />
        );
      } else {
        container.push(
          <BsStar
            size={13}
            color="#df2189"
            className="reviews_body_content_rating_icon"
            key={i}

          />
        );
      }
    }
    return container;
  };
  return (
    <div className="col-4 p15 animation">
      <div className="reviews_body">
        <div className="reviews_body_content">
          <div className="reviews_body_content_image">
            <LazyLoadImage src={review.image} />
          </div>
          <div className="reviews_body_content_info">
            <div className="reviews_body_content_info_name">{review.name}</div>
            <div className="review_body_content_info_rating">
              {rating(review.stars)}
            </div>
            <div className="review_body_content_info_comment">
              {review.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewsBody;
