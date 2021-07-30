
// This module runs in GitHub Action `github-script`
// see https://github.com/actions/github-script#run-a-separate-file-with-an-async-function
module.exports = async ({ github, context }) => {
  const result = await github.pulls.merge({
    owner: 'jlangy',
    repo: 'Test',
    pull_number: 19,
  });
  console.log(result)
};

// draft, submitted, pr, prfailed, planned, planfailed, approved, applied, applyfailed
// client: draft, submitted, in review, technical issue