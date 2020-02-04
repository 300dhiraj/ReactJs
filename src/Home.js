import React from "react";
import Person from "./Person";
import axios from "axios";

import { connect } from "react-redux";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

class Home extends React.Component {
  state = {
    persone: []
  };

  deleteItem = index => {
    let persone = [...this.props.persone];
    persone.splice(index, 1);
    this.props.delete(persone);
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        this.props.fetch(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.persone.map((item, index) => {
              return (
                <Person
                  index={index}
                  item={item}
                  deleteItem={this.deleteItem}
                  key={index}
                ></Person>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persone: state.records || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: payload => {
      dispatch(actionFetch(payload));
    },
    delete: payload => {
      dispatch(actionDelete(payload));
    }
  };
};

const actionFetch = payload => {
  console.log("actionFetch");
  return { type: "FETCH", payload };
};

const actionDelete = payload => {
  console.log("actionDelete");
  return { type: "DELETE", payload };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
