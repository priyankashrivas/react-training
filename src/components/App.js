import React from 'react';
import { createList, deleteItem, editItem } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  state = {
    task: '', isEditing: false, newkey: ''
  }

  handleChange(e) {
    this.setState({
      task: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.task !== "") {
      this.props.createList(this.state.task);
      this.setState({ task: '' })
    }
    else {
      alert("add task");
    }
  }


  handleUpdate = (e) => {
    e.preventDefault();
    this.props.editItem(this.state.newkey, this.state.task);
    this.setState({ task: '', isEditing: false });

  }

  deletetask(id) {

    this.props.deleteItem(id);
  }

  edittask(id, task) {

    this.setState({ task: task, isEditing: true, newkey: id });
  }



  listView() {
    return (
      this.props.contacts.map((contact, id) => {
        return (
          <div className="row" key={id} >
            {contact}
            <div className="col-md-2" key={id} style={{ textAlign: 'center' }}>
              <button onClick={() => this.deletetask(id)} className="ui button primary">
                Remove
                </button>
              <button onClick={() => this.edittask(id, contact)} className="ui button negative">
                Edit
              </button>
            </div>
          </div>
        );
      })
    )

  }

  renderList() {
    //console.log()
    if (this.state.isEditing) {
      return (
        <div>
          <h1>TO Do List</h1>
          <hr />
          <div>
            <h3>Update Task</h3>
            <form onSubmit={this.handleUpdate} className="ui form">
              <input type="text" className="form-control  "
                onChange={this.handleChange}
                placeholder='enter the task'
                value={this.state.task} /><br />
              {/* <input type="submit" className="btn btn-success" value="Update" /> */}
              <button>Update</button>
            </form>
          </div>

        </div>
      )
    } else {
      return (
        <div className="container">
          <h1>TO Do List</h1>
          <hr />
          <div>
            <h3>Add Task</h3>
            <form onSubmit={this.handleSubmit} className="ui form">
              <input type="text" className="form-control"
                onChange={this.handleChange}
                placeholder='enter the task'
                value={this.state.task} /><br />
              <input type="submit" className="btn btn-success" value="Add" />
            </form>
          </div>

        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderList()}
        <div className="ui container">
          {this.listView()}
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createList: contact => dispatch(createList(contact)),
    deleteItem: index => dispatch(deleteItem(index)),
    editItem: (index, task) => dispatch(editItem(index, task)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);