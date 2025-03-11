
import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const App = () => {
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);
        })();// переделать на iife
    }, []);


    return (
        <div id='root'>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => count <= 0 ? setCount(0) : setCount(count - 1)}>-1</button>
            {posts.map(({title, body, id}: Post) => (
                <div key={id}>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
            ))}
        </div>
    );
};
