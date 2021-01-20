import React from 'react';
import { connect } from "react-redux";
import {inputNavColor, inputJumboColor, inputFormColor, inputListColor, inputBodyColor} from "../actions";
import InitialPage from "../references/InitialPage";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class ColorToolBar extends React.Component {
   toolBarDisplayRender () {
       if (this.props.changeNav === null && this.props.changeJumbo === null && this.props.changeForm === null && this.props.changeList === null) {
           return <InitialPage/>
       }
           return (
               <Container>
                   <Row>
                       <Col className={"my-2"}>
                   <label className={"mr-2 label-text"}>Nav Bar Color Change</label>
                   <input type="text" placeholder={this.props.navColor} onChange={(e)=> this.props.inputNavColor(e.target.value)}/>
                       </Col>
                       <Col className={"my-2"}>
                   <label className={"mr-2 label-text"}>Jumbotron Color Change</label>
                   <input type="text" onChange={(e)=> this.props.inputJumboColor(e.target.value)}/>
                       </Col>

                   </Row>
                   <Row>
                       <Col className={"my-2"}l>
                           <label className={"mr-2 label-text"}>Form Color Change</label>
                           <input type="text" onChange={(e)=> this.props.inputFormColor(e.target.value)}/>
                       </Col>
                       <Col className={"my-2"}>
                   <label className={"mr-2 label-text"}>List Color Change</label>
                   <input type="text" onChange={(e) => this.props.inputListColor(e.target.value)}/>
                       </Col>
                   </Row>
                   <Row>
                       <Col className={"my-2"}>
                           <label className={"mr-2 label-text"}>Body Color Change</label>
                           <input type="text" onChange={(e) => this.props.inputBodyColor(e.target.value)}/>
                       </Col>
                   </Row>
               </Container>
           )

   }
   render(){
       return(
           <Container fluid className={"d-flex justify-content-center nav_main py-2"}>
               {this.toolBarDisplayRender()}
           </Container>
       )
   }
}





const mapStateToProps = state => {
    return {
        changeNav: state.selectedNavChange,
        changeJumbo: state.selectedJumboChange,
        changeForm: state.selectedFormChange,
        changeList: state.selectedListChange,
        navColor: state.selectedNavColor

    }
};


export default connect(mapStateToProps, { inputNavColor, inputJumboColor, inputFormColor, inputListColor, inputBodyColor}) (ColorToolBar);