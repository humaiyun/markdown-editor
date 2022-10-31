import styled from "styled-components";

const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 15px;
    border-right: 2px solid rgba(15, 15, 15, 0.5);
    font-family: "Lato", sans-serif;

`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1rem;
    padding: 8px 0;
    border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    font-size: 17px;
    background-color: #9ab2f5;
`;

export { Container, Title, TextArea }