import "../../Posts.css";

const Post =({post:{title, body, imgUrl, author}, index}) =>{
    // console.log(`${title}, ${body}, ${imgUrl}, ${author}`);
    return(
        <div className="post-content">
            <h1 className="post-head">{title}</h1>
            <img className="post-img" src={imgUrl} alt="post"></img>
            <p>{body}</p>
            <div className="info">
                <h4>Written by: {author}</h4>
            </div>
        </div>
    )
};

export default Post;