const fs = require('fs');
const _ = require('lodash');
const generateClients = require('./generate-clients');
const axios = require('axios');
const API_URL = "https://gcp9dahm4c.execute-api.ca-central-1.amazonaws.com/test/actions/"

// This module runs in GitHub Action `github-script`
// see https://github.com/actions/github-script#run-a-separate-file-with-an-async-function
module.exports = async ({ github, context }) => {
  const { payload } = context;
  console.log(payload);

  const owner = repository.owner.login;
  const repo = repository.name;

};
