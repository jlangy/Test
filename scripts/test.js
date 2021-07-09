// This module runs in GitHub Action `github-script`
// see https://github.com/actions/github-script#run-a-separate-file-with-an-async-function
module.exports = async ({ github, context }) => {
  const { payload } = context;
  console.log(payload);

  const owner = repository.owner.login;
  const repo = repository.name;

};
