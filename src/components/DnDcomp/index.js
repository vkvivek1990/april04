import React, { Component } from "react";
import "./style.scss";
import Icon from "@material-ui/core/Icon";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AlertDialogSlide from "../../components/dialogbox";
import isEqual from "lodash.isequal";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const grid = 8;

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export default class Dndcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.data,
      selected: [],
      alldata: this.props.data,
      opendialog: false,
      dialogtitle: "",
      grpnameval: "",
    };
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: "items",
    droppable2: "selected",
  };

  getList = (id) => this.state[this.id2List[id]];

  componentWillReceiveProps(nextprops) {
    //debugger;
    if (!isEqual(nextprops.data, this.state.items)) {
      this.setState({ items: nextprops.data, alldata: nextprops.data });
    }
  }

  dndrest = () => {
    this.setState({ items: this.state.alldata, selected: [] });
  };

  onsubmit = () => {
    this.setState({ opendialog: true, dialogtitle: "Group Name" });
  };

  handlegrpname = (event) => {
    this.setState({ grpnameval: event.target.value });
  };

  getgroupname = () => {
    return (
      <>
        <div className="get_grp_hldr">
          <span className="grp_txt_title">Please Enter the Group Name:</span>
          <input
            className="grp_name"
            onChange={(e) => this.handlegrpname(e)}
            value={this.state.grpnameval}
          />
        </div>
      </>
    );
  };

  creategroup = () => {
    let members_list = [...this.state.selected];
    let grp_name = this.state.grpnameval;
    let formdata = new Object();
    let finalmemberslist = [];
    members_list.map((item) => {
      let newobj = {};
      newobj.id = item.orginalid;
      newobj.category = item.category;
      return finalmemberslist.push(newobj);
    });
    formdata["groupMembers"] = finalmemberslist;
    formdata["group_name"] = grp_name;
    this.props.handlegroupcraetion(formdata);
    this.onclose();
    this.setState({ selected: [] });
  };

  onclose = () => {
    this.setState({ opendialog: false, dialogtitle: "" });
  };

  onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <>
        <div className="Drag_n_drop_container">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="List_fields_load">
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} className="drag_list_holder">
                    {this.state.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="List_drop_fields">
              <Droppable droppableId="droppable2">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    className={
                      this.state.selected.length === 0
                        ? "No_drop drag_list_holder"
                        : "drag_list_holder"
                    }
                  >
                    {this.state.selected.length !== 0 &&
                      this.state.selected.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {this.state.selected.length === 0 && (
                      <span className="No_selec_flds">Drop Fields Here</span>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
          <div className="footer_btn_holder_dnd">
            <button
              className="dnd_reset_btn"
              onClick={this.dndrest}
              disabled={this.state.selected.length === 0 ? true : false}
            >
              <Icon className="dnd_reset_icon dnd_icn">restart_alt</Icon> Reset
            </button>
            <button
              className="dnd_submit_btn"
              onClick={this.onsubmit}
              disabled={this.state.selected.length === 0 ? true : false}
            >
              <Icon className="dnd_submit_icon dnd_icn">restart_alt</Icon>Create
              Group
            </button>
          </div>
        </div>
        <AlertDialogSlide
          open={this.state.opendialog}
          dialogtitle={this.state.dialogtitle}
          dialogbody={this.getgroupname}
          handleClose={this.onclose}
          class="loginclass"
          iconname="engineering"
          handleApply={this.creategroup}
          applydisable={false}
          canceldisable={false}
          applybtn={"Submit"}
          cancelbtn={"Cancel"}
        />
      </>
    );
  }
}
