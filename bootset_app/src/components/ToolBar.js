import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { selectNavChange, selectJumboChange, selectFormChange, selectListChange } from "../actions";

import { connect } from "react-redux";

class ToolBar extends React.Component {

    toolBarDisplayRender() {
        if (this.props.tool === null) {
            return (
                <Container fluid className={"my-3"}>
                    <Row className={"d-flex justify-content-center"}>
                        <h2>Start Building A Quick Bootstrap Page!</h2>
                    </Row>
                    <Row className={"d-flex justify-content-center"}>
                        <p>Click On Any Component To Begin.</p>
                    </Row>
                </Container>

            );
        }
        const buttonDisplay = this.props.tool.structure.map(button => {
            if (button.id.includes('nav')) {
                return <button className={"mx-2 tool-button btn"} onClick={() => this.props.selectNavChange(button.id)}
                               key={button.id}>{button.text}</button>
            }
            if (button.id.includes('jumbo')){
                return <button className={"mx-2 tool-button btn"} onClick={() => this.props.selectJumboChange(button.id)}
                               key={button.id}>{button.text}</button>
            }
            if (button.id.includes('form')){
                return <button className={"mx-2 tool-button btn"} onClick={()=> this.props.selectFormChange(button.id)}
                               key={button.id}>{button.text}</button>
            }
            if (button.id.includes('list')){
                return <button className={"mx-2 tool-button btn"} onClick={()=> this.props.selectListChange(button.id)}
                               key={button.id}>{button.text}</button>
            } return null;
        })
            return (
                <Container fluid className={'my-3'}>
                    <div className={"d-flex justify-content-center"} key={this.props.tool.connect}>
                        {buttonDisplay}
                    </div>
                </Container>
            )

    }
    render() {

        return (
            <div className={"tool-bar-container container-fluid"}>
                    {this.toolBarDisplayRender()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tool: state.selectedTool
    }
};
export default connect(mapStateToProps, { selectNavChange, selectJumboChange, selectFormChange, selectListChange }) (ToolBar);