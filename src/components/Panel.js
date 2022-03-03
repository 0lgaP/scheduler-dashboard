import React, { Component } from "react";

class Panel extends Component {

  render() {
    const {label, value, onSelect} = this.props;
    return(
      <section
      classname="dashboard__panel" onClick={onSelect}
      >
        <h1 classname="dashboard__panel-header">{label}</h1>
        <p classname="dashboard_panel-value">{value}</p>
      </section>
    );
  }

}
export default Panel;