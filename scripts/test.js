// This module runs in GitHub Action `github-script`
// see https://github.com/actions/github-script#run-a-separate-file-with-an-async-function
const axios = require('axios');
const axiosConfig = { headers: { Authorization: process.env.GH_SECRET } };
const url = "https://cttuyb3bsf.execute-api.ca-central-1.amazonaws.com/test/actions/";

module.exports = async ({ github, context }) => {
  const { payload } = context;
  console.log(process.env.GH_SECRET, 'is env');

  axios.put(API_URL, { prNumber: 1, prSuccess: true, id: 1 }, axiosConfig);

};
