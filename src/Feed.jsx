/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import Post from "./Post";

const Feed = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};

export default Feed;
