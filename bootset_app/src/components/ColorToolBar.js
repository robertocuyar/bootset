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
                       <Col>
                   <label>Nav Bar Color Change</label>
                   <input type="text" onChange={(e)=> this.props.inputNavColor(e.target.value)}/>
                       </Col>
                       <Col>
                   <label>Jumbotron Color Change</label>
                   <input type="text" onChange={(e)=> this.props.inputJumboColor(e.target.value)}/>
                       </Col>

                   </Row>
                   <Row>
                       <Col>
                           <label>Form Color Change</label>
                           <input type="text" onChange={(e)=> this.props.inputFormColor(e.target.value)}/>
                       </Col>
                       <Col>
                   <label>List Color Change</label>
                   <input type="text" onChange={(e) => this.props.inputListColor(e.target.value)}/>
                       </Col>
                   </Row>
                   <Row>
                       <Col>
                           <label>Body Color Change</label>
                           <input type="text" onChange={(e) => this.props.inputBodyColor(e.target.value)}/>
                       </Col>
                   </Row>
               </Container>
           )

   }
   render(){
       return(
           <Container fluid className={"d-flex justify-content-center nav_main"}>
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
        changeList: state.selectedListChange

    }
};


export default connect(mapStateToProps, { inputNavColor, inputJumboColor, inputFormColor, inputListColor, inputBodyColor}) (ColorToolBar);