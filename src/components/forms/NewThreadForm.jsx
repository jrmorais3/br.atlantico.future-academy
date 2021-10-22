import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import {Redirect,Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import InlineError from "../misc/InlineError";

class NewThreadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "",
        body: "",
        author: this.props.username,
      },
      loading: false,
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };
  onSubmit = () => {
    const errors = {};
    if (!this.state.data.title) {
      errors.title = "title required";
    }
    this.setState({
      errors: errors,
    });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      console.log(this.state.data);
      this.props
        .submit(this.state.data)
        .then(() => this.props.toggleEdit())
        .catch((err) =>
          this.setState({
            errors: err,
            loading: false,
          })
        );
    }
    window.location.href="/forum";
    // console.log("TP", props.history)
    // this.props.history.push('/forum');
    // this.props.toggleEdit();
  };

  render() {
    return (
      <Form  loading={this.state.loading}>
        {this.state.errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{this.state.errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!this.state.errors.title}>
          <label>Title</label>
          <input
            type="title"
            id="title"
            name="title"
            value={this.state.data.title}
            onChange={this.onChange}
          />
          {this.state.errors.title && (
            <InlineError text={this.state.errors.title} />
          )}
        </Form.Field>
        <Form.Field>
          <label>Body</label>
          <textarea
            type="body"
            id="body"
            name="body"
            value={this.state.data.body}
            onChange={this.onChange}
          />
        </Form.Field>
        {/* <Button primary style={{ background: "#0E1B45" }}>
          Create
        </Button> */}
        <input type="submit" value="create" onClick={this.onSubmit}/>
      </Form>
    );
  }
}

NewThreadForm.propTypes = {
  username: PropTypes.string.isRequired,
};
function mapStateToProps(state) {
  return {
    username: state.user.username,
  };
}

export default connect(mapStateToProps)(NewThreadForm);
