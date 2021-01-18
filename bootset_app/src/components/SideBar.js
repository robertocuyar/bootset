import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { selectTool } from '../actions';


class SideBar extends Component {
    render() {
        const sideBarItemDisplay = this.props.tools.map( tool => {
            return (
                <div key={tool.connect}>
                    <div onClick={()=>this.props.selectTool(tool)} className={"my-3 components"}>
                        <h4>{tool.piece}</h4>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <Row id={"components-title"} className={"my-2 d-flex justify-content-center"}>
                    <Col className={"d-flex justify-content-center"}>
                    <h3>Components</h3>
                    </Col>
                </Row>
            <Row className={"my-2"}>
                <Col>
                    {sideBarItemDisplay}
                </Col>
            </Row>
            </div>

        )
    }
};
const mapStateToProps = state => {
    return { tools: state.tools }
};

export default connect(mapStateToProps, { selectTool }) (SideBar);

