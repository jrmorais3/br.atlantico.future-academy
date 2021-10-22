import React, { Component } from "react";
import {
  Form,
  Button,
  Message,
  Comment,
  Divider,
  Icon,
  Label,
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InlineError from "../misc/InlineError";
import Moment from "react-moment";
import EditForm from "../forms/EditForm";
import { editThread, deleteThread } from "../../actions/thread";
import styles from "./ThreadDisplay.css";
import axios from "axios";

class ThreadDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      threadData: {},
      positive: false,
      negative: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.submit = this.submit.bind(this);
    this.renderThread = this.renderThread.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.delete = this.delete.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  componentDidMount() {
    console.log("Component did mount started ");
    axios.get(`/backend/thread/${this.props.threadid}`).then((res) => {
      console.log("Res is = ", res);
      this.setState({
        threadData: res.data[0],
        // If you have chnaged the database, uncomment these 2 and COMMENT the below hardcoded ones
        // positive:res.data.upvoted.indexOf(this.props.username) >= 0,
        // negative:res.data.downvoted.indexOf(this.props.username) >= 0,
        positive: false,
        negative: false,
      });
    });
    console.log("Component did mount ended");
  }
  // componentDidUpdate() {
  //   // console.log("Component Update did mount started ");
  //     // console.log("NextProps => ", nextProps.threadData);
  //     // console.log("ThisProps => ", this.props.threadData);
  //     axios.get(`/backend/thread/${this.props.threadid}`).then((res) => {
  //         this.setState({
  //           threadData: res.data[0],
  //           // If you have chnaged the database, uncomment these 2 and COMMENT the below hardcoded ones
  //           // positive:res.data.upvoted.indexOf(this.props.username) >= 0,
  //           // negative:res.data.downvoted.indexOf(this.props.username) >= 0,
  //           positive: false,
  //           negative: false,
  //         });
  //       }
  //   );
  //   // console.log("Component Update did mount ended");
  // }
  upvote = () => {
    let vote = 1;
    if (this.state.positive) {
      vote = -1;
    }
    axios
      .put(`/backend/threads/karma/${this.state.threadData._id}`, {
        vote: vote,
        user: this.props.username,
        type: "upvote",
      })
      .then((res) => {
        this.setState({
          threadData: res.data.thread,
          positive: !this.state.positive,
          negative: false,
        });
      });
  };
  downvote = () => {
    let vote = -1;
    if (this.state.negative) {
      vote = 1;
    }
    axios
      .put(`/backend/threads/karma/${this.state.threadData._id}`, {
        vote: vote,
        user: this.props.username,
        type: "downvote",
      })
      .then((res) => {
        this.setState({
          threadData: res.data.thread,
          positive: false,
          negative: !this.state.negative,
        });
      });
  };
  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
      //   threadData: res.data.thread
    });
  };
  delete = () => {
    return this.props
      .deleteThread(this.state.threadData.id)
      .then(() => this.props.history.push("/forum"));
  };
  submit = (data) => {
    data.title = this.state.threadData.title;
    data.author = this.state.threadData.author;
    data.threadId = this.state.threadData._id;
    console.log("Manjot", data);
    // this.setState({
    //   threadData: res.thread,
    //   editMode: false,
    // });
    this.setState({
          threadData: data,
          editMode: false,
        });
    return this.props.editThread(data)
    // .then((res) => {
    //   console.log("Edit Thread res is = : ", res);
    //   this.setState({
    //     threadData: res.thread,
    //     editMode: false,
    //   });
    // });
  };
  renderThread = () => {
    return (
      <div className="threadContainer" style={{ background: "#ED4832" }}>
        {" "}
        {/*053C5E */}
        <div className="leftDiv">
          <Button
            compact
            size="mini"
            positive={this.state.positive}
            onClick={this.upvote}
            icon
          >
            <Icon name="arrow up" />
          </Button>
          <Label>{this.state.threadData.karma}</Label>
          <Button
            compact
            size="mini"
            negative={this.state.negative}
            onClick={this.downvote}
            icon
          >
            <Icon name="arrow down" />
          </Button>
        </div>
        <div className="rightDiv" style={{ padding: "10px" }}>
          <h2>{this.state.threadData.title}</h2>
          <span>
            created by{" "}
            <Link
              style={{ color: "white" }}
              to={`/users/${this.state.threadData.author}`}
            >
              {this.state.threadData.author}
            </Link>{" "}
          </span>{" "}
          <Moment fromNow>{this.state.threadData.created}</Moment>
          <Divider horizontal></Divider>
          <Message className="messagebody">
            {this.state.threadData.body}
          </Message>
          {this.props.username === this.state.threadData.author && (
            <Button onClick={this.toggleEdit}>Edit</Button>
          )}
          {this.props.username === this.state.threadData.author && (
            <Button onClick={this.delete}>Delete</Button>
          )}
        </div>
      </div>
    );
  };
  renderEdit = () => {
    return (
      <div>
        <EditForm
          toggleEdit={this.toggleEdit}
          submit={this.submit}
          body={this.state.threadData.body}
          threadId={this.state.threadData.id}
        />
        {this.props.username === this.state.threadData.author && (
          <Button basic compact size="tiny" onClick={this.toggleEdit}>
            Cancel
          </Button>
        )}
      </div>
    );
  };

  render() {
    return (
      <div>{this.state.editMode ? this.renderEdit() : this.renderThread()}</div>
    );
  }
}
ThreadDisplay.propTypes = {
  username: PropTypes.string.isRequired,
  editThread: PropTypes.func.isRequired,
  deleteThread: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
function mapStateToProps(state) {
  return {
    username: state.user.username,
  };
}

export default withRouter(
  connect(mapStateToProps, { editThread, deleteThread })(ThreadDisplay)
);
