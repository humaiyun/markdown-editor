import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import editorContext from "../../context/EditorContext";
import remarkGfm from "remark-gfm";
import { Container, Title, OutputArea } from "./styles.js";


export const MarkdownOutput = (props) => {
    const { markdownText } = useContext(editorContext);

    return  (
        <Container>
            <Title>Converted Text</Title>
            <OutputArea>
                <ReactMarkdown 
                    children={markdownText} 
                    remarkPlugins=
                        {
                            [
                                [remarkGfm, {singleTilde: false}],
                                
                            ]
                        } 
                />
            </OutputArea>
        </Container>
    )
}

