import React from 'react';
import PropTypes from 'prop-types';
import thumbnail from '../assets/thumbnail.svg'

const Post = ({ body = "", title = "" }) => {
    
    return (
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <img 
                className="card-img-right flex-auto d-none d-md-block" 
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]" 
                src={thumbnail}
                data-holder-rendered="true" 
                style={{width: "200px", height: "250px"}} />
            <div className="card-body d-flex flex-column align-items-start">
                <h3 className="mb-2">
                    <a className="text-dark" href="#">{title}</a>
                </h3>
                <p className="card-text mb-auto">{body}</p>
                <a href="#">Continue reading</a>
            </div>
        </div>
    );
};

Post.propTypes = {
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Post;