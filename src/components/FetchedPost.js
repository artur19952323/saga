import React from "react";
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/action";
import {Loader} from "./loader";

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loader = useSelector(state=>state.app.loading)
    if(loader){
       return <Loader/>
    }
    if (!posts.length) {
        return <button onClick={() =>
            dispatch(fetchPosts() )}
                       className="btn btn-primary">Download</button>
    }
    return posts?.map(post => <Post post={post} key={post.id}/>)
}