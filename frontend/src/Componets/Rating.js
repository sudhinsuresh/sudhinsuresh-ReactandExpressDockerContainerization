

function Rating(props){
    const {rating, numReviews} =props;
    return(
        <div className="rating">
            <span>
                <i className={rating>=1?'fas fa-start':rating>=0.5 ?'fas fa-start-half-alt':'fas fa-start'}></i>
            </span>
            <span>
                <i className={rating>=2?'fas fa-start':rating>=1.5 ?'fas fa-start-half-alt':'fas fa-start'}></i>
            </span>
            <span>
                <i className={rating>=3?'fas fa-start':rating>=2.5 ?'fas fa-start-half-alt':'fas fa-start'}></i>
            </span>
            <span>
                <i className={rating>=4?'fas fa-start':rating>=3.5 ?'fas fa-start-half-alt':'fas fa-start'}></i>
            </span>
            <span>
                <i className={rating>=5?'fas fa-start':rating>=4.5 ?'fas fa-start-half-alt':'fas fa-start'}></i>
            </span>
            <span>{numReviews} reviews</span>
           


        </div>
    )
}
export default Rating;