// Modules
import React from 'react';

// css
import { Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export class ContainerHomePage extends React.Component {
  render() {
    // Parameters for the container
    const {
      colSize,
      backgroundColor,
      padding,
      textColor,
      text,
      children
    } = this.props;
    return (
      <Col style={{"backgroundColor": backgroundColor, "padding": padding, "textAlign": "center", "color": textColor}} xs={colSize}>
        {text}
        {children}
      </Col>
    )
  }
}
