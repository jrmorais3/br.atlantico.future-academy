import React, { Component } from "react";
import { Form, Button, Message, Segment, Comment } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InlineError from "../misc/InlineError";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: this.props.id,
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
    console.log("Hello i m from on Submit fcn");
    const errors = {};
    if (!this.state.data.body) {
      errors.body = "comment can't be empty";
    }
    this.setState({
      errors: errors,
    });
    console.log("DATA", this.state.data);
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .then(() => this.props.toggleComment())
        .catch((err) =>
          this.setState({
            errors: err,
            loading: false,
          })
        );
    }

    // this.props.toggleComment();
  };

  render() {
    return (
      this.props.visible && (
        <Segment>
          <Form onSubmit={this.onSubmit} loading={this.state.loading}>
            {this.state.errors.global && (
              <Message negative>
                <Message.Header>Something went wrong</Message.Header>
                <p>{this.state.errors.global}</p>
              </Message>
            )}
            <Form.Field error={!!this.state.errors.body}>
              <textarea
                type="body"
                id="body"
                name="body"
                value={this.state.data.body}
                onChange={this.onChange}
              />
              {this.state.errors.body && (
                <InlineError text={this.state.errors.body} />
              )}
            </Form.Field>
            {/* <Button size="tiny">Post</Button> */}
            <input type="submit" value="Post" />
          </Form>
        </Segment>
      )
    );
  }
}

CommentForm.propTypes = {
  username: PropTypes.string.isRequired,
};
function mapStateToProps(state) {
  return {
    username: state.user.username,
  };
}

export default connect(mapStateToProps)(CommentForm);
