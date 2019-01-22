import React, { Component } from 'react';
//import './App.css';
import PostData from '../data/projects.json'
import './Post.css'
import calculator from '../reactCalculator.jpg'

class Post extends Component {
    //<li key={i}><a href={"http://"+url}>{url}</a></li>
    render() {
        return (
            <div className="Postit">
                <h2>It was the best of times to program and it was the worst of times to program.</h2>
                <h1>A tale of two JavaScript Frameworks</h1>
                <div className='my-grid' >
                    {PostData.map((postDetail, index) => {
                        return (
                            <div className='details' key={index}>
                                <h1>{postDetail.title}</h1>
                                <img src={calculator} alt="calculator" />
                                <p>{postDetail.text}</p>
                                <p>{postDetail.tech}</p>
                                <a href={postDetail.link} target="_blank" class="myButton">See Calculator</a>
                                <a href={postDetail.src} target="_blank" class="myButton">See Code</a>
                            </div>
                        )
                    })}
                </div>
                <p className='better'>WHICH ONE IS BETTER?</p>
            </div>
        );
    }
}

export default Post;