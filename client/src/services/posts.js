import axios from 'axios';
import backendUrl from '../backendUrl';
import { token } from './auth';

const baseUrl = `${backendUrl}/api/posts`;

const setConfig = () => {
  return {
    headers: { 'x-auth-token': token },
  };
};

const getNewPosts = async () => {
  const response = await axios.get(`${baseUrl}/new`);
  return response.data;
};

const addNew = async (postObj) => {
  const response = await axios.post(`${baseUrl}`, postObj, setConfig());
  return response.data;
};

const editPost = async (id, postObj) => {
  const response = await axios.patch(`${baseUrl}/${id}`, postObj, setConfig());
  return response.data;
};

const getPostComments = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}/comments`);
  return response.data;
};

const upvotePost = async (id) => {
  const response = await axios.post(
    `${baseUrl}/${id}/upvote`,
    null,
    setConfig()
  );
  return response.data;
};

const downvotePost = async (id) => {
  const response = await axios.post(
    `${baseUrl}/${id}/downvote`,
    null,
    setConfig()
  );
  return response.data;
};

const deletePost = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, setConfig());
  return response.data;
};

const upvoteComment = async (postId, commentId) => {
  const response = await axios.post(
    `${baseUrl}/${postId}/comment/${commentId}/upvote`,
    null,
    setConfig()
  );
  return response.data;
};

const downvoteComment = async (postId, commentId) => {
  const response = await axios.post(
    `${baseUrl}/${postId}/comment/${commentId}/downvote`,
    null,
    setConfig()
  );
  return response.data;
};

const upvoteReply = async (postId, commentId, replyId) => {
  const response = await axios.post(
    `${baseUrl}/${postId}/comment/${commentId}/reply/${replyId}/upvote`,
    null,
    setConfig()
  );
  return response.data;
};

const downvoteReply = async (postId, commentId, replyId) => {
  const response = await axios.post(
    `${baseUrl}/${postId}/comment/${commentId}/reply/${replyId}/downvote`,
    null,
    setConfig()
  );
  return response.data;
};

export default {
  getNewPosts,
  addNew,
  editPost,
  getPostComments,
  upvotePost,
  downvotePost,
  deletePost,
  upvoteComment,
  downvoteComment,
  upvoteReply,
  downvoteReply,
};
