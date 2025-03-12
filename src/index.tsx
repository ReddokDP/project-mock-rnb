import React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './App';

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

//
// render(
//     <div>
//         12341
//     </div>,
//     document.getElementById('root')
// )

//
// import { useState, useEffect } from "react";
//
// const url = "https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10";
//
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }
//
// export const App = () => {
//     const [posts, setPosts] = useState([]);
//
//     useEffect(() => {
//         (async () => {
//             const response = await fetch(url);
//             const data = await response.json();
//             setPosts(data);
//         })();// переделать на iife
//     }, []);
//
//     // useEffect(() => {
//     //   const asyncFetc = async () => {
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     setPosts(data);
//     //   };
//     //   asyncFetc() // переделать на iife
//     // }, []);
//
//     console.log(posts);
//
//     return (
//         <div>
//             {posts.map(({title, body, id}: Post) => (
//                 <div key={id}>
//                     <h1>{title}</h1>
//                     <p>{body}</p>
//                 </div>
//             ))}
//             <div>12312412512512</div>
//         </div>
//     );
// };
