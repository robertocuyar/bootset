import React from 'react';
import ToolBar from "./ToolBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DisplayPage from "./DisplayPage";
import ColorToolBar from "./ColorToolBar";


const MainContent = () => {
    return (
        <Container fluid className={""}>
            <Row>
                <ToolBar />
            </Row>
            <Row className={"d-flex justify-content-center"}>
                <ColorToolBar />
            </Row>
            <Row>
                <DisplayPage className={""}/>
            </Row>
        </Container>
    )
}

export default MainContent;