// This module runs in GitHub Action `github-script`
// see https://github.com/actions/github-script#run-a-separate-file-with-an-async-function
module.exports = async ({ github, context }, secret) => {
  const { payload } = context;
  console.log(process.env, 'is env');
};
