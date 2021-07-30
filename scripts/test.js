
// This module runs in GitHub Action `github-script`
// see https://github.com/actions/github-script#run-a-separate-file-with-an-async-function
module.exports = async ({ github, context }) => {
  // const result = await github.pulls.merge({
  //   owner: 'jlangy',
  //   repo: 'Test',
  //   pull_number: 19,
  // });
  // console.log(result)

  const {PR_BRANCH} = process.env;
  console.log(PR_BRANCH)
};

// draft, submitted, pr, prfailed, planned, planfailed, approved, applied, applyfailed
// client: draft, submitted, in review, technical issue

const x = {
  "action": "synchronize",
  "after": "c087f5ff76475ec94d6261d67597dc5a8f7043d5",
  "before": "b2e9e156a89cb5a63811533621eed4ff555d4fc6",
  "number": 20,
  "pull_request": {
    "_links": {
      "comments": {
        "href": "https://api.github.com/repos/jlangy/Test/issues/20/comments"
      },
      "commits": {
        "href": "https://api.github.com/repos/jlangy/Test/pulls/20/commits"
      },
      "html": {
        "href": "https://github.com/jlangy/Test/pull/20"
      },
      "issue": {
        "href": "https://api.github.com/repos/jlangy/Test/issues/20"
      },
      "review_comment": {
        "href": "https://api.github.com/repos/jlangy/Test/pulls/comments{/number}"
      },
      "review_comments": {
        "href": "https://api.github.com/repos/jlangy/Test/pulls/20/comments"
      },
      "self": {
        "href": "https://api.github.com/repos/jlangy/Test/pulls/20"
      },
      "statuses": {
        "href": "https://api.github.com/repos/jlangy/Test/statuses/c087f5ff76475ec94d6261d67597dc5a8f7043d5"
      }
    },
    "active_lock_reason": null,
    "additions": 32,
    "assignee": null,
    "assignees": [],
    "author_association": "OWNER",
    "auto_merge": null,
    "base": {
      "label": "jlangy:master",
      "ref": "master",
      "repo": {
        "allow_merge_commit": true,
        "allow_rebase_merge": true,
        "allow_squash_merge": true,
        "archive_url": "https://api.github.com/repos/jlangy/Test/{archive_format}{/ref}",
        "archived": false,
        "assignees_url": "https://api.github.com/repos/jlangy/Test/assignees{/user}",
        "blobs_url": "https://api.github.com/repos/jlangy/Test/git/blobs{/sha}",
        "branches_url": "https://api.github.com/repos/jlangy/Test/branches{/branch}",
        "clone_url": "https://github.com/jlangy/Test.git",
        "collaborators_url": "https://api.github.com/repos/jlangy/Test/collaborators{/collaborator}",
        "comments_url": "https://api.github.com/repos/jlangy/Test/comments{/number}",
        "commits_url": "https://api.github.com/repos/jlangy/Test/commits{/sha}",
        "compare_url": "https://api.github.com/repos/jlangy/Test/compare/{base}...{head}",
        "contents_url": "https://api.github.com/repos/jlangy/Test/contents/{+path}",
        "contributors_url": "https://api.github.com/repos/jlangy/Test/contributors",
        "created_at": "2018-08-11T19:55:24Z",
        "default_branch": "master",
        "delete_branch_on_merge": false,
        "deployments_url": "https://api.github.com/repos/jlangy/Test/deployments",
        "description": "Test repository",
        "disabled": false,
        "downloads_url": "https://api.github.com/repos/jlangy/Test/downloads",
        "events_url": "https://api.github.com/repos/jlangy/Test/events",
        "fork": false,
        "forks": 0,
        "forks_count": 0,
        "forks_url": "https://api.github.com/repos/jlangy/Test/forks",
        "full_name": "jlangy/Test",
        "git_commits_url": "https://api.github.com/repos/jlangy/Test/git/commits{/sha}",
        "git_refs_url": "https://api.github.com/repos/jlangy/Test/git/refs{/sha}",
        "git_tags_url": "https://api.github.com/repos/jlangy/Test/git/tags{/sha}",
        "git_url": "git://github.com/jlangy/Test.git",
        "has_downloads": true,
        "has_issues": true,
        "has_pages": false,
        "has_projects": true,
        "has_wiki": true,
        "homepage": null,
        "hooks_url": "https://api.github.com/repos/jlangy/Test/hooks",
        "html_url": "https://github.com/jlangy/Test",
        "id": 144414403,
        "issue_comment_url": "https://api.github.com/repos/jlangy/Test/issues/comments{/number}",
        "issue_events_url": "https://api.github.com/repos/jlangy/Test/issues/events{/number}",
        "issues_url": "https://api.github.com/repos/jlangy/Test/issues{/number}",
        "keys_url": "https://api.github.com/repos/jlangy/Test/keys{/key_id}",
        "labels_url": "https://api.github.com/repos/jlangy/Test/labels{/name}",
        "language": "JavaScript",
        "languages_url": "https://api.github.com/repos/jlangy/Test/languages",
        "license": null,
        "merges_url": "https://api.github.com/repos/jlangy/Test/merges",
        "milestones_url": "https://api.github.com/repos/jlangy/Test/milestones{/number}",
        "mirror_url": null,
        "name": "Test",
        "node_id": "MDEwOlJlcG9zaXRvcnkxNDQ0MTQ0MDM=",
        "notifications_url": "https://api.github.com/repos/jlangy/Test/notifications{?since,all,participating}",
        "open_issues": 1,
        "open_issues_count": 1,
        "owner": {
          "avatar_url": "https://avatars.githubusercontent.com/u/37274633?v=4",
          "events_url": "https://api.github.com/users/jlangy/events{/privacy}",
          "followers_url": "https://api.github.com/users/jlangy/followers",
          "following_url": "https://api.github.com/users/jlangy/following{/other_user}",
          "gists_url": "https://api.github.com/users/jlangy/gists{/gist_id}",
          "gravatar_id": "",
          "html_url": "https://github.com/jlangy",
          "id": 37274633,
          "login": "jlangy",
          "node_id": "MDQ6VXNlcjM3Mjc0NjMz",
          "organizations_url": "https://api.github.com/users/jlangy/orgs",
          "received_events_url": "https://api.github.com/users/jlangy/received_events",
          "repos_url": "https://api.github.com/users/jlangy/repos",
          "site_admin": false,
          "starred_url": "https://api.github.com/users/jlangy/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/jlangy/subscriptions",
          "type": "User",
          "url": "https://api.github.com/users/jlangy"
        },
        "private": false,
        "pulls_url": "https://api.github.com/repos/jlangy/Test/pulls{/number}",
        "pushed_at": "2021-07-30T20:50:31Z",
        "releases_url": "https://api.github.com/repos/jlangy/Test/releases{/id}",
        "size": 120,
        "ssh_url": "git@github.com:jlangy/Test.git",
        "stargazers_count": 0,
        "stargazers_url": "https://api.github.com/repos/jlangy/Test/stargazers",
        "statuses_url": "https://api.github.com/repos/jlangy/Test/statuses/{sha}",
        "subscribers_url": "https://api.github.com/repos/jlangy/Test/subscribers",
        "subscription_url": "https://api.github.com/repos/jlangy/Test/subscription",
        "svn_url": "https://github.com/jlangy/Test",
        "tags_url": "https://api.github.com/repos/jlangy/Test/tags",
        "teams_url": "https://api.github.com/repos/jlangy/Test/teams",
        "trees_url": "https://api.github.com/repos/jlangy/Test/git/trees{/sha}",
        "updated_at": "2021-07-30T20:39:40Z",
        "url": "https://api.github.com/repos/jlangy/Test",
        "watchers": 0,
        "watchers_count": 0
      },
      "sha": "e021c1a2247ea73bf05e2b8e33f9149076d940ec",
      "user": {
        "avatar_url": "https://avatars.githubusercontent.com/u/37274633?v=4",
        "events_url": "https://api.github.com/users/jlangy/events{/privacy}",
        "followers_url": "https://api.github.com/users/jlangy/followers",
        "following_url": "https://api.github.com/users/jlangy/following{/other_user}",
        "gists_url": "https://api.github.com/users/jlangy/gists{/gist_id}",
        "gravatar_id": "",
        "html_url": "https://github.com/jlangy",
        "id": 37274633,
        "login": "jlangy",
        "node_id": "MDQ6VXNlcjM3Mjc0NjMz",
        "organizations_url": "https://api.github.com/users/jlangy/orgs",
        "received_events_url": "https://api.github.com/users/jlangy/received_events",
        "repos_url": "https://api.github.com/users/jlangy/repos",
        "site_admin": false,
        "starred_url": "https://api.github.com/users/jlangy/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/jlangy/subscriptions",
        "type": "User",
        "url": "https://api.github.com/users/jlangy"
      }
    },
    "body": "",
    "changed_files": 2,
    "closed_at": null,
    "comments": 0,
    "comments_url": "https://api.github.com/repos/jlangy/Test/issues/20/comments",
    "commits": 18,
    "commits_url": "https://api.github.com/repos/jlangy/Test/pulls/20/commits",
    "created_at": "2021-07-29T20:42:59Z",
    "deletions": 7,
    "diff_url": "https://github.com/jlangy/Test/pull/20.diff",
    "draft": false,
    "head": {
      "label": "jlangy:b",
      "ref": "b",
      "repo": {
        "allow_merge_commit": true,
        "allow_rebase_merge": true,
        "allow_squash_merge": true,
        "archive_url": "https://api.github.com/repos/jlangy/Test/{archive_format}{/ref}",
        "archived": false,
        "assignees_url": "https://api.github.com/repos/jlangy/Test/assignees{/user}",
        "blobs_url": "https://api.github.com/repos/jlangy/Test/git/blobs{/sha}",
        "branches_url": "https://api.github.com/repos/jlangy/Test/branches{/branch}",
        "clone_url": "https://github.com/jlangy/Test.git",
        "collaborators_url": "https://api.github.com/repos/jlangy/Test/collaborators{/collaborator}",
        "comments_url": "https://api.github.com/repos/jlangy/Test/comments{/number}",
        "commits_url": "https://api.github.com/repos/jlangy/Test/commits{/sha}",
        "compare_url": "https://api.github.com/repos/jlangy/Test/compare/{base}...{head}",
        "contents_url": "https://api.github.com/repos/jlangy/Test/contents/{+path}",
        "contributors_url": "https://api.github.com/repos/jlangy/Test/contributors",
        "created_at": "2018-08-11T19:55:24Z",
        "default_branch": "master",
        "delete_branch_on_merge": false,
        "deployments_url": "https://api.github.com/repos/jlangy/Test/deployments",
        "description": "Test repository",
        "disabled": false,
        "downloads_url": "https://api.github.com/repos/jlangy/Test/downloads",
        "events_url": "https://api.github.com/repos/jlangy/Test/events",
        "fork": false,
        "forks": 0,
        "forks_count": 0,
        "forks_url": "https://api.github.com/repos/jlangy/Test/forks",
        "full_name": "jlangy/Test",
        "git_commits_url": "https://api.github.com/repos/jlangy/Test/git/commits{/sha}",
        "git_refs_url": "https://api.github.com/repos/jlangy/Test/git/refs{/sha}",
        "git_tags_url": "https://api.github.com/repos/jlangy/Test/git/tags{/sha}",
        "git_url": "git://github.com/jlangy/Test.git",
        "has_downloads": true,
        "has_issues": true,
        "has_pages": false,
        "has_projects": true,
        "has_wiki": true,
        "homepage": null,
        "hooks_url": "https://api.github.com/repos/jlangy/Test/hooks",
        "html_url": "https://github.com/jlangy/Test",
        "id": 144414403,
        "issue_comment_url": "https://api.github.com/repos/jlangy/Test/issues/comments{/number}",
        "issue_events_url": "https://api.github.com/repos/jlangy/Test/issues/events{/number}",
        "issues_url": "https://api.github.com/repos/jlangy/Test/issues{/number}",
        "keys_url": "https://api.github.com/repos/jlangy/Test/keys{/key_id}",
        "labels_url": "https://api.github.com/repos/jlangy/Test/labels{/name}",
        "language": "JavaScript",
        "languages_url": "https://api.github.com/repos/jlangy/Test/languages",
        "license": null,
        "merges_url": "https://api.github.com/repos/jlangy/Test/merges",
        "milestones_url": "https://api.github.com/repos/jlangy/Test/milestones{/number}",
        "mirror_url": null,
        "name": "Test",
        "node_id": "MDEwOlJlcG9zaXRvcnkxNDQ0MTQ0MDM=",
        "notifications_url": "https://api.github.com/repos/jlangy/Test/notifications{?since,all,participating}",
        "open_issues": 1,
        "open_issues_count": 1,
        "owner": {
          "avatar_url": "https://avatars.githubusercontent.com/u/37274633?v=4",
          "events_url": "https://api.github.com/users/jlangy/events{/privacy}",
          "followers_url": "https://api.github.com/users/jlangy/followers",
          "following_url": "https://api.github.com/users/jlangy/following{/other_user}",
          "gists_url": "https://api.github.com/users/jlangy/gists{/gist_id}",
          "gravatar_id": "",
          "html_url": "https://github.com/jlangy",
          "id": 37274633,
          "login": "jlangy",
          "node_id": "MDQ6VXNlcjM3Mjc0NjMz",
          "organizations_url": "https://api.github.com/users/jlangy/orgs",
          "received_events_url": "https://api.github.com/users/jlangy/received_events",
          "repos_url": "https://api.github.com/users/jlangy/repos",
          "site_admin": false,
          "starred_url": "https://api.github.com/users/jlangy/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/jlangy/subscriptions",
          "type": "User",
          "url": "https://api.github.com/users/jlangy"
        },
        "private": false,
        "pulls_url": "https://api.github.com/repos/jlangy/Test/pulls{/number}",
        "pushed_at": "2021-07-30T20:50:31Z",
        "releases_url": "https://api.github.com/repos/jlangy/Test/releases{/id}",
        "size": 120,
        "ssh_url": "git@github.com:jlangy/Test.git",
        "stargazers_count": 0,
        "stargazers_url": "https://api.github.com/repos/jlangy/Test/stargazers",
        "statuses_url": "https://api.github.com/repos/jlangy/Test/statuses/{sha}",
        "subscribers_url": "https://api.github.com/repos/jlangy/Test/subscribers",
        "subscription_url": "https://api.github.com/repos/jlangy/Test/subscription",
        "svn_url": "https://github.com/jlangy/Test",
        "tags_url": "https://api.github.com/repos/jlangy/Test/tags",
        "teams_url": "https://api.github.com/repos/jlangy/Test/teams",
        "trees_url": "https://api.github.com/repos/jlangy/Test/git/trees{/sha}",
        "updated_at": "2021-07-30T20:39:40Z",
        "url": "https://api.github.com/repos/jlangy/Test",
        "watchers": 0,
        "watchers_count": 0
      },
      "sha": "c087f5ff76475ec94d6261d67597dc5a8f7043d5",
      "user": {
        "avatar_url": "https://avatars.githubusercontent.com/u/37274633?v=4",
        "events_url": "https://api.github.com/users/jlangy/events{/privacy}",
        "followers_url": "https://api.github.com/users/jlangy/followers",
        "following_url": "https://api.github.com/users/jlangy/following{/other_user}",
        "gists_url": "https://api.github.com/users/jlangy/gists{/gist_id}",
        "gravatar_id": "",
        "html_url": "https://github.com/jlangy",
        "id": 37274633,
        "login": "jlangy",
        "node_id": "MDQ6VXNlcjM3Mjc0NjMz",
        "organizations_url": "https://api.github.com/users/jlangy/orgs",
        "received_events_url": "https://api.github.com/users/jlangy/received_events",
        "repos_url": "https://api.github.com/users/jlangy/repos",
        "site_admin": false,
        "starred_url": "https://api.github.com/users/jlangy/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/jlangy/subscriptions",
        "type": "User",
        "url": "https://api.github.com/users/jlangy"
      }
    },
    "html_url": "https://github.com/jlangy/Test/pull/20",
    "id": 699829347,
    "issue_url": "https://api.github.com/repos/jlangy/Test/issues/20",
    "labels": [
      {
        "color": "d73a4a",
        "default": true,
        "description": "Something isn't working",
        "id": 1021582882,
        "name": "bug",
        "node_id": "MDU6TGFiZWwxMDIxNTgyODgy",
        "url": "https://api.github.com/repos/jlangy/Test/labels/bug"
      }
    ],
    "locked": false,
    "maintainer_can_modify": false,
    "merge_commit_sha": "676f9f764cc8e60001634734344b611c809a1d1b",
    "mergeable": null,
    "mergeable_state": "unknown",
    "merged": false,
    "merged_at": null,
    "merged_by": null,
    "milestone": null,
    "node_id": "MDExOlB1bGxSZXF1ZXN0Njk5ODI5MzQ3",
    "number": 20,
    "patch_url": "https://github.com/jlangy/Test/pull/20.patch",
    "rebaseable": null,
    "requested_reviewers": [],
    "requested_teams": [],
    "review_comment_url": "https://api.github.com/repos/jlangy/Test/pulls/comments{/number}",
    "review_comments": 0,
    "review_comments_url": "https://api.github.com/repos/jlangy/Test/pulls/20/comments",
    "state": "open",
    "statuses_url": "https://api.github.com/repos/jlangy/Test/statuses/c087f5ff76475ec94d6261d67597dc5a8f7043d5",
    "title": "B",
    "updated_at": "2021-07-30T20:50:32Z",
    "url": "https://api.github.com/repos/jlangy/Test/pulls/20",
    "user": {
      "avatar_url": "https://avatars.githubusercontent.com/u/37274633?v=4",
      "events_url": "https://api.github.com/users/jlangy/events{/privacy}",
      "followers_url": "https://api.github.com/users/jlangy/followers",
      "following_url": "https://api.github.com/users/jlangy/following{/other_user}",
      "gists_url": "https://api.github.com/users/jlangy/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/jlangy",
      "id": 37274633,
      "login": "jlangy",
      "node_id": "MDQ6VXNlcjM3Mjc0NjMz",
      "organizations_url": "https://api.github.com/users/jlangy/orgs",
      "received_events_url": "https://api.github.com/users/jlangy/received_events",
      "repos_url": "https://api.github.com/users/jlangy/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/jlangy/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jlangy/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/jlangy"
    }
  },
  "repository": {
    "archive_url": "https://api.github.com/repos/jlangy/Test/{archive_format}{/ref}",
    "archived": false,
    "assignees_url": "https://api.github.com/repos/jlangy/Test/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/jlangy/Test/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/jlangy/Test/branches{/branch}",
    "clone_url": "https://github.com/jlangy/Test.git",
    "collaborators_url": "https://api.github.com/repos/jlangy/Test/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/jlangy/Test/comments{/number}",
    "commits_url": "https://api.github.com/repos/jlangy/Test/commits{/sha}",
    "compare_url": "https://api.github.com/repos/jlangy/Test/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/jlangy/Test/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/jlangy/Test/contributors",
    "created_at": "2018-08-11T19:55:24Z",
    "default_branch": "master",
    "deployments_url": "https://api.github.com/repos/jlangy/Test/deployments",
    "description": "Test repository",
    "disabled": false,
    "downloads_url": "https://api.github.com/repos/jlangy/Test/downloads",
    "events_url": "https://api.github.com/repos/jlangy/Test/events",
    "fork": false,
    "forks": 0,
    "forks_count": 0,
    "forks_url": "https://api.github.com/repos/jlangy/Test/forks",
    "full_name": "jlangy/Test",
    "git_commits_url": "https://api.github.com/repos/jlangy/Test/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/jlangy/Test/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/jlangy/Test/git/tags{/sha}",
    "git_url": "git://github.com/jlangy/Test.git",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": false,
    "has_projects": true,
    "has_wiki": true,
    "homepage": null,
    "hooks_url": "https://api.github.com/repos/jlangy/Test/hooks",
    "html_url": "https://github.com/jlangy/Test",
    "id": 144414403,
    "issue_comment_url": "https://api.github.com/repos/jlangy/Test/issues/comments{/number}",
    "issue_events_url": "https://api.github.com/repos/jlangy/Test/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/jlangy/Test/issues{/number}",
    "keys_url": "https://api.github.com/repos/jlangy/Test/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/jlangy/Test/labels{/name}",
    "language": "JavaScript",
    "languages_url": "https://api.github.com/repos/jlangy/Test/languages",
    "license": null,
    "merges_url": "https://api.github.com/repos/jlangy/Test/merges",
    "milestones_url": "https://api.github.com/repos/jlangy/Test/milestones{/number}",
    "mirror_url": null,
    "name": "Test",
    "node_id": "MDEwOlJlcG9zaXRvcnkxNDQ0MTQ0MDM=",
    "notifications_url": "https://api.github.com/repos/jlangy/Test/notifications{?since,all,participating}",
    "open_issues": 1,
    "open_issues_count": 1,
    "owner": {
      "avatar_url": "https://avatars.githubusercontent.com/u/37274633?v=4",
      "events_url": "https://api.github.com/users/jlangy/events{/privacy}",
      "followers_url": "https://api.github.com/users/jlangy/followers",
      "following_url": "https://api.github.com/users/jlangy/following{/other_user}",
      "gists_url": "https://api.github.com/users/jlangy/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/jlangy",
      "id": 37274633,
      "login": "jlangy",
      "node_id": "MDQ6VXNlcjM3Mjc0NjMz",
      "organizations_url": "https://api.github.com/users/jlangy/orgs",
      "received_events_url": "https://api.github.com/users/jlangy/received_events",
      "repos_url": "https://api.github.com/users/jlangy/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/jlangy/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jlangy/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/jlangy"
    },
    "private": false,
    "pulls_url": "https://api.github.com/repos/jlangy/Test/pulls{/number}",
    "pushed_at": "2021-07-30T20:50:31Z",
    "releases_url": "https://api.github.com/repos/jlangy/Test/releases{/id}",
    "size": 120,
    "ssh_url": "git@github.com:jlangy/Test.git",
    "stargazers_count": 0,
    "stargazers_url": "https://api.github.com/repos/jlangy/Test/stargazers",
    "statuses_url": "https://api.github.com/repos/jlangy/Test/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/jlangy/Test/subscribers",
    "subscription_url": "https://api.github.com/repos/jlangy/Test/subscription",
    "svn_url": "https://github.com/jlangy/Test",
    "tags_url": "https://api.github.com/repos/jlangy/Test/tags",
    "teams_url": "https://api.github.com/repos/jlangy/Test/teams",
    "trees_url": "https://api.github.com/repos/jlangy/Test/git/trees{/sha}",
    "updated_at": "2021-07-30T20:39:40Z",
    "url": "https://api.github.com/repos/jlangy/Test",
    "watchers": 0,
    "watchers_count": 0
  },
  "sender": {
    "avatar_url": "https://avatars.githubusercontent.com/u/37274633?v=4",
    "events_url": "https://api.github.com/users/jlangy/events{/privacy}",
    "followers_url": "https://api.github.com/users/jlangy/followers",
    "following_url": "https://api.github.com/users/jlangy/following{/other_user}",
    "gists_url": "https://api.github.com/users/jlangy/gists{/gist_id}",
    "gravatar_id": "",
    "html_url": "https://github.com/jlangy",
    "id": 37274633,
    "login": "jlangy",
    "node_id": "MDQ6VXNlcjM3Mjc0NjMz",
    "organizations_url": "https://api.github.com/users/jlangy/orgs",
    "received_events_url": "https://api.github.com/users/jlangy/received_events",
    "repos_url": "https://api.github.com/users/jlangy/repos",
    "site_admin": false,
    "starred_url": "https://api.github.com/users/jlangy/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jlangy/subscriptions",
    "type": "User",
    "url": "https://api.github.com/users/jlangy"
  }
}