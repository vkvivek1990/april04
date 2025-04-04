import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Icon from "@material-ui/core/Icon";
import { isEqual } from "lodash";
import "./style.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class AlertDialogSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.opendialog,
    };
  }

  handleClose = () => {
    this.props.handleClose();
  };

  handlePrevious = () => {
    this.props.handlePrevious();
  };

  handleApply = () => {
    this.props.handleApply();
  };

  componentWillReceiveProps(nextprops) {
    if (!isEqual(this.state.open, nextprops.open)) {
      this.setState({ open: nextprops.open });
    }
  }

  render() {
    const Newcomp = this.props.dialogbody;
    return (
      <div>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          className={this.props.class ? this.props.class : ""}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {this.props.iconname && (
              <Icon className="alert-dialog-title-icon">
                {this.props.iconname}
              </Icon>
            )}
            {this.props.dialogtitle}
            <span className="close_pop_holder">
              <Icon className="close_pop_icn" onClick={this.handleClose}>
                close
              </Icon>
            </span>
          </DialogTitle>
          <DialogContent>
            <section>
              {Newcomp !== undefined && Newcomp !== null && (
                <Newcomp {...this.props} />
              )}
              {Newcomp === undefined && <h2>No Data Found</h2>}
            </section>
          </DialogContent>
          <DialogActions>
            {this.props.applybtn && (
              <Button
                onClick={this.handleApply}
                color="primary"
                disabled={
                  this.props.applydisable ? this.props.applydisable : false
                }
              >
                {this.props.applybtn}
              </Button>
            )}
            {this.props.cancelbtn && (
              <Button
                onClick={this.handleClose}
                color="secondary"
                disabled={
                  this.props.canceldisable ? this.props.canceldisable : false
                }
              >
                {this.props.cancelbtn}
              </Button>
            )}
            {this.props.prevbtn && (
              <Button
                onClick={this.handlePrevious}
                color="secondary"
                disabled={
                  this.props.prevdisable ? this.props.prevdisable : false
                }
              >
                {this.props.prevbtn}
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
