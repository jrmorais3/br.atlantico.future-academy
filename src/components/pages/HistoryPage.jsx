import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Card, Comment, Tab, List } from "semantic-ui-react";
import Moment from "react-moment";
import axios from "axios";
import NavBar from "../misc/Navigation";

class HistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
      comments: [],
      loading: true,
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.username);
    console.log("YOO", this.state.comments);
    axios
      .get(`/backend/users/${this.props.match.params.username}`)
      .then((res) => {
        console.log("response is :", res);
        console.log([
          "threeads : ",
          res.data.map((d) => {
            return d.type === "Thread" ? d : null;
          }),
        ]);
        this.setState({
          threads: [
            res.data.filter((d) => {
              return d.type === "Thread" ? d : null;
            }),
          ],
          comments: [
            res.data.filter((d) => {
              return d.type === "Comments" ? d : null;
            }),
          ],
          loading: false,
        });
      });
    console.log("YOO after", this.state.comments);
  }

  render() {
    console.log("Thak gya hoon", this.state.comments);
    let commentTab = this.state.comments.map((comment) => {
      return (
          comment.map((c)=>{
            return(<Comment key={c.id}>
            <Comment.Content>
                <Comment.Author as="a">{c.author}</Comment.Author>
                <Comment.Metadata>
                <Moment fromNow>{c.created}</Moment>
                </Comment.Metadata>
                <Comment.Text>{c.body}</Comment.Text>
                <Comment.Actions></Comment.Actions>
            </Comment.Content>
            </Comment>);
          })
        
      );
    });
    let threadsTab = this.state.threads.map((thread) => {
      console.log("I am thread : ", thread);
      return (
          thread.map((t)=>{
              return (<List.Item as={Link} to={`/thread/${t.id}`} key={t.id}>
              <List.Content>
                <List.Header as="a">{t.title}</List.Header>
                <List.Description>
                  <span>submitted by {t.author} </span>
                  <Moment fromNow>{t.created}</Moment>
                </List.Description>
              </List.Content>
            </List.Item>);
          })
      );
    });
    console.log("threadsTab ", threadsTab);

    let panes = [
      {
        menuItem: "Threads",
        render: () => (
          <Tab.Pane attached={false}>
            <List>{threadsTab}</List>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Comments",
        render: () => (
          <Tab.Pane attached={false}>
            <Comment.Group>{commentTab}</Comment.Group>
          </Tab.Pane>
        ),
      },
    ];
    return (
      <div>
        <NavBar />
        <Segment loading={this.state.loading} style={{ background: "#ED4832" }}>
          <h3>{`${this.props.match.params.username}'s history`}</h3>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Segment>
      </div>
    );
  }
}

export default HistoryPage;
