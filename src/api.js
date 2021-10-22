import axios from "axios";

export default {
  user: {
    login: (credentials) =>
      axios.post("backend/login", { credentials }).then((res) => {
        console.log("Hey", res.data.user);
        return res.data.user;
      }),

    signup: (user) =>
      axios.post("backend/signup", { user }).then((res) => {
        console.log("Test", res.data.user);
        return res.data.user;
      }),
  },
  thread: {
    createThread: (details) =>
      axios
        .post("backend/newthread", { details })
        .then((res) => res.data.thread),
    editThread: (details) =>
      axios
        .put("/backend/editthread", { details })
        .then((res) => res.data.thread),
    deleteThread: (threadId) =>
      axios
        .delete(`/backend/deletethread/${threadId}`)
        .then((res) => res.data.message),
  },
  comment: {
    createComment: (details) =>
      axios
        .post("/backend/newcomment", { details })
        .then((res) => res.data.comment),
    editComment: (details) =>
      axios
        .put("/backend/editcomment", { details })
        .then((res) => res.data.comment),
    deleteComment: (commentId) =>
      axios
        .delete(`/backend/deletecomment/${commentId}`)
        .then((res) => res.data.message),
  },
};
