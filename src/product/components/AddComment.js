import React, { useState, useEffect } from 'react';
let randomUser1=Math.floor(Math.random() * (41 - 0 + 1) + 0);
let randomUser2=Math.floor(Math.random() * (41 - 0 + 1) + 0);
const AddComment = ({ reviews }) => {
    return <div class="ui comments">
        <h3 class="ui dividing header">Reviews</h3>
        <div class="comment">
            <a class="avatar">
                <img src={`${reviews[randomUser1].store}`} />
            </a>
            <div class="content">
                <a class="author">{`${reviews[randomUser1].author}`}</a>
                <div class="metadata">
                    <span class="date">{`${reviews[randomUser1].created}`}</span>
                </div>
                <div class="text">
                    <p>{`${reviews[randomUser1].text}`}</p>
                </div>
            </div>
        </div>
        <div class="comment">
            <a class="avatar">
                <img src={`${reviews[randomUser2].store}`} />
            </a>
            <div class="content">
                <a class="author">{`${reviews[randomUser2].author}`}</a>
                <div class="metadata">
                    <span class="date">{`${reviews[randomUser2].created}`}</span>
                    <div class="text">
                        <p>{`${reviews[randomUser2].text}`}</p>
                    </div>
                </div>
            </div>
            <form class="ui reply form">
                <div class="field">
                    <textarea></textarea>
                </div>
                <div class="ui blue labeled submit icon button">
                    <i class="icon edit"></i> Add Reply
                          </div>
            </form>
        </div>
    </div>
}
export default AddComment;

