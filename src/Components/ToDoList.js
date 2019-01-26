import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    const {items, clearList, handleDelete, handleEdit} = this.props;

    return (
          <ul className="list-group my-5">
              <h5 className="text-capitalize text-center">Task List</h5>

            {items.map(item => {
                  return (<ToDoItem key={item.id}
                                                    title={item.title}
                                                    handleDelete={ () => handleDelete(item.id)}
                                                    handleEdit={() => handleEdit(item.id)}
                                                    />
                      );
           }
         )}

              <button type="button"
                              className="btn btn-danger btn-block text-capitalize mt-5"
                              onClick={this.clearList}>
                              Clear All
              </button>

          </ul>

    );
  }
}

export default ToDoList;
