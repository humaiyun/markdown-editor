import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const EditorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export { AppContainer, Title, EditorContainer }