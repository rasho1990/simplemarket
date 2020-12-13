import React, { useState } from 'react';
import ValidationError from '../../util/ValidationError'
import DateTimePicker from 'react-datetime-picker';
import { Button, Modal,Rating } from 'semantic-ui-react'
import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE, isValid
} from '../../util/validators.js';
import CommentItem from './CommentItem';
const AddComment = () => {
    const addTask = () => {
        setOpen(Math.random());
        setName('');
        setReview('');
        setGender('');
        onChange(null);
    }
    const [comments, setComments] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, onChange] = useState(null);
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [rate, setrate] = useState(3);
    const [gender, setGender] = useState('');
    const validationHandler = (val, numOfLetters) => {
        const validators = [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(numOfLetters)];
        return isValid(val, validators);
    }
    const  handleChangeOnRate=(e, { rating })=> {
        e.preventDefault();
        setrate(rating);
      }
    const saveReview = () => {
        const d = new Date(value)
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
        const hour = new Intl.DateTimeFormat('en', { hour: '2-digit' }).format(d)
        const min = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(d)
        setComments([...comments, {
            author: name,
            store: gender === '1' ? "https://res.cloudinary.com/dfdocrzsc/image/upload/v1607724138/Users/images/man5-512_ijsokk.png" : "https://res.cloudinary.com/dfdocrzsc/image/upload/v1607724073/Users/images/avatar-woman_dgqy4n.png",
            text: review,
            rating: rate,
            created: `${da}-${mo}-${ye} ,${hour} : ${min}`
        }])
        setOpen(false)
    }
    return <div className="ui comments">
        <h3 className="ui dividing header">Reviews</h3>
        {comments.length !== 0 && <CommentItem reviews={comments} />}
        <form className="ui reply form">
            <div className="ui blue labeled submit icon button" onClick={addTask}>
                <i className="icon edit"></i> Add Reply
                          </div>
        </form>
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Header>Add a new Task </Modal.Header>
            <Modal.Content >
                <div className="ui form error">
                    <div className="field">
                        <label>Type Your Name</label>
                        <input type="text" placeholder="Name" onChange={event => setName(event.target.value)} onBlur={validationHandler(name, 4)} />
                        {validationHandler(name, 4) === false && <ValidationError err="Please enter a valid name with 4 letters or more" />}
                        <label style={{ marginTop: "10px" }}>Gender</label>
                            <select className="ui search dropdown" onChange={event => setGender(event.target.value)}>
                                <option value="0" >Woman</option>
                                <option value="1">Man</option>
                            </select>
                            <label style={{ marginTop: "10px" }}>Your rating</label>
                            <Rating icon='star' defaultRating={3} maxRating={5} onRate={handleChangeOnRate} />
                        <label style={{ marginTop: "10px" }}>Type Your Review</label>
                        <textarea rows="2" placeholder="Review..." onChange={event => setReview(event.target.value)} onBlur={validationHandler(review, 20)}></textarea>
                        {validationHandler(review, 20) === false && <ValidationError err="Please enter a valid review with 20 letters or more" />}
                        <label style={{ marginTop: "10px" }}>Pick a time and date</label>
                    </div>
                </div>
                <DateTimePicker
                    onChange={onChange}
                    value={value}
                    required={true}
                />
                {value === null && <ValidationError err="Please enter a valid date" />}
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => {
                    setName('');
                    setReview('');
                    onChange(null);
                    setOpen(false)
                }
                }>
                    Cancel
        </Button>
                <Button
                    content="Save"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={saveReview}
                    positive
                    disabled={validationHandler(name, 4) === false || validationHandler(review, 20) === false || value === null}
                />
            </Modal.Actions>
        </Modal>
    </div>
}
export default AddComment;

