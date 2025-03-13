import { useState } from 'react';
import { T, Link } from '@admiral-ds/react-ui';
import { MyForm } from './components/Myform';
import styled from 'styled-components';
import {Counter} from "./components/Counter";

const StyledButton = styled.button`
    background-color: palevioletred;
    color: white;
    padding: 10px;
    border-radius: 10px;
`;

const Divider = styled.div`
    width: 10px;
    height: 12px;
`;

export function App() {
    const [count, setCount] = useState(0);

    return (
        <div id="root">
            <div>
                <h2>Redux Toolkit and RTKQ</h2>
                <Counter />
                <hr />
            </div>
            <MyForm />
            <div>
                <a href="https://vitejs.dev">
                    <img className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev">
                    <img className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <StyledButton className="button" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </StyledButton>
                <T font="Subtitle/Subtitle 1" as="p">
                    Edit <code>src/App.tsx</code> and save to test HMR
                </T>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <Link
                appearance="primary"
                href="https://admiralds.github.io/react-ui"
                target="_blank"
                rel="noopener noreferrer"
            >
                Admiral Storybook
                <Divider />
            </Link>
        </div>
    );
}
