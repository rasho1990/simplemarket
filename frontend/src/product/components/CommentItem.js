import React from 'react';
import { Rating } from 'semantic-ui-react'
const CommentItem =({reviews})=>{
    return (reviews.map(item =><div className="comment">
    <a href="#author" className="avatar" >
        <img src={item.store}  alt={item.author}/>
    </a>
    <div className="content">
        <a  href="#author" className="author">{item.author}</a>
        <div className="metadata">
            <span className="date">{item.created}</span>
        </div>
        <div className="text">
            <p>{item.text}</p>
        </div>
        <Rating icon='star' disabled defaultRating={item.rating} maxRating={5} />
    </div>
</div>))
}
export default CommentItem;