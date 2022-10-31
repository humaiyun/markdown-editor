import styled from "styled-components";

const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 15px;
    font-family: "Lato", sans-serif;
    
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1em;
    padding: 8px 0;
    border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const OutputArea = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 17px;
    background-color: #9ab2f5;
`;

export { Container, Title, OutputArea }
