import React, { useContext } from "react";
import editorContext from "../../context/EditorContext";
import { Container, Title, TextArea } from "./styles.js";

export const MarkdownInput = (props) => {

    const { setMarkdownText } = useContext(editorContext);

    const onInputChange = (e) => {
        const newValue = e.currentTarget.value;
        setMarkdownText(newValue);
    }

    return (
        <Container>
            <Title>Markdown Text</Title>
            <TextArea onChange={onInputChange} />   
        </Container>
    )
}

