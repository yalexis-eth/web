const { graphql } = require('@octokit/graphql')

const projectId = 'PN_kwDOAyeg-84AAiih' // https://github.com/orgs/shapeshift/projects/8/

// requires a personal access token with org:write perms
const personalAccessToken = process.argv.slice(2)[0]

if (!personalAccessToken) {
	console.log('call script with node add-all-issues.js personalAccessToken')
	process.exit(1)
}

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${personalAccessToken}`,
  },
});

const main = async () => {
	const issues = await graphqlWithAuth(`
		query {
		  organization(login: "shapeshift") {
		    web: repository(name: "web") {
		      id
		      issues(
		        first: 100
		        filterBy: {states: OPEN}
		      ) {
		        edges {
		          node {
		            id
		            title
		          }
		        }
		      }
		    }
		    lib: repository(name: "lib") {
		      id
		      issues(
		        first: 100
		        filterBy: {states: OPEN}
		      ) {
		        edges {
		          node {
		            id
		            title
		          }
		        }
		      }
		    }
		    unchained: repository(name: "unchained") {
		      id
		      issues(
		        first: 100
		        filterBy: {states: OPEN}
		      ) {
		        edges {
		          node {
		            id
		            title
		          }
		        }
		      }
		    }
		  }
		}
	`)

	const issueIds = Object.entries(issues.organization).reduce((acc, [_repoId, v]) => {
		acc.push(...v.issues.edges.map(issue => issue.node.id))
		return acc
	}, [])

	console.log(`Found ${issueIds.length} issues`)

	await Promise.all(issueIds.map(contentId => {
		return graphqlWithAuth(`
		  mutation addIssuesToProject($projectId: ID!, $contentId: ID!) {
		    addProjectNextItem(input: {projectId: $projectId, contentId: $contentId }) {
		      projectNextItem {
		        id
					}
				}
			}
		`,
		{ projectId, contentId }
		)
	}))
}

main()
  .then(() => console.log('Added all open issues from web/lib/unchained to project'))
	.catch(e => console.log(e))
