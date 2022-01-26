import { useContext, useState } from "react";
import SharedContext from "../../context/SharedContext";
import ReviewsBody from "./ReviewsBody";
const Reviews = () => {
    const {sharedData : {reviewsData}} = useContext(SharedContext);
    const [heading] = useState("What our customers are saying?")
    console.log("your data:", reviewsData)
    return (
        <div className="reviews">
            <div className="container">
                <h2 className="heading animation">
                    {heading}
                </h2>
                <div className="row mr-minus-15 ml-minus-15">
                    {reviewsData.length > 0 ? reviewsData.map((reviewData, index) => {
                        return(
                            <ReviewsBody key={index} review={reviewData} />
                        )
                    }) :""}
                </div>
            </div>
        </div>
    )
}
export default Reviews;