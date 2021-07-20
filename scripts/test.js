
// This module runs in GitHub Action `github-script`
// see https://github.com/actions/github-script#run-a-separate-file-with-an-async-function
module.exports = async ({ github, context }) => {
  console.log(JSON.stringify(github, null, 2))
  console.log(JSON.stringify(context, null, 2))
  console.log(context.run_id)
};

// draft, submitted, pr, prfailed, planned, planfailed, approved, applied, applyfailed
// client: draft, submitted, in review, technical issue