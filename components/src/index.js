import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard test="bla">
            <CommentDetails 
                avatarImage={faker.image.avatar()} 
                author="Oz" 
                publishedTime="Today at 4:45PM" 
                comment="first comment"
                />
                </ApprovalCard>
                <ApprovalCard>
            <CommentDetails avatarImage={faker.image.avatar()} author="Dana" publishedTime="Today at 3:13PM" comment="second comment" />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetails avatarImage={faker.image.avatar()} author="Lior" publishedTime="Today at 6:21PM" comment="third comment" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))