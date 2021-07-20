const fs = require('fs');
const _ = require('lodash');
const generateClients = require('./generate-clients');
const axios = require('axios');
const API_URL = 'https://gcp9dahm4c.execute-api.ca-central-1.amazonaws.com/test/actions?status=create';
const axiosConfig = { headers: { Authorization: process.env.GH_SECRET } };

// This module runs in GitHub Action `github-script`
// see https://github.com/actions/github-script#run-a-separate-file-with-an-async-function
module.exports = async ({ github, context }) => {
  console.log(JSON.stringify(github, null, 2))
  console.log(JSON.stringify(context, null, 2))
};

// draft, submitted, pr, prfailed, planned, planfailed, approved, applied, applyfailed
// client: draft, submitted, in review, technical issue