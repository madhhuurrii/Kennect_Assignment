// import { Octokit } from "octokit";

// const octokit = new Octokit({
//     auth: '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'
//   });

//   try {
//     const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
//         owner: "octocat",
//         repo: "Spoon-Knife",
//       });
  
//     const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})
  
//     console.log(titleAndAuthor)
  
//   } catch (error) {
//     console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
//   }