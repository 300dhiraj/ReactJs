import React from "react";

export default class Persone extends React.Component {
  render() {
    return (
      <tr key={this.props.index}>
        <th scope="row">{this.props.index + 1}</th>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.body}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.props.deleteItem(this.props.index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
