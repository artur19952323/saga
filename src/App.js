import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPost from "./components/FetchedPost";

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>
            <div className="row">
                <h2>Sync Posts</h2>
                <div className="col">
                    <Posts/>
                </div>
                <div className="col">
                    <h2>Async Posts</h2>
                    <FetchedPost/>
                </div>
            </div>
        </div>
    );
}

export default App;
