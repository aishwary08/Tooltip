import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import './demo.css'

class ControlledTooltips extends React.Component {
  state = {
    open: false
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div className="outer">
        <Tooltip
          className="my-tooltip"
          id="tooltip-controlled"
          onClose={this.handleTooltipClose}
          onOpen={this.handleTooltipOpen}
          open={this.state.open}
          placement="top"
          title="Delete"
        >
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default ControlledTooltips;
