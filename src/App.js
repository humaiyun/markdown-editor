import React, { useState } from 'react';
import './App.css';
import { MarkdownInput } from './components/markdown/input/MarkdownInput.jsx';
import { MarkdownOutput } from './components/markdown/output/MarkdownOutput.jsx';
import EditorContext from './components/context/EditorContext.js';
import { AppContainer, Title, EditorContainer } from "./styles.js";

const App = () => {
    const [markdownText, setMarkdownText] = useState("");
    const contextValue = {
        markdownText,
        setMarkdownText
    };

    return (
        <EditorContext.Provider value={contextValue}>
            <AppContainer>
                <Title>Markdown Editor</Title>
                <EditorContainer>
                    <MarkdownInput />
                    <MarkdownOutput />
                </EditorContainer>
            </AppContainer>
        </EditorContext.Provider>
    );
}

export default App;
