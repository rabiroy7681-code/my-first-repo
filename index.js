require('dotenv').config()

console.log("Chai aur code")

const express = require('express')
const app = express()
// const port = 3000

const ab = `<h1>Welcome Jhilik Maji 💝</h1> </br> <button> Click Me Jhilu </button>`
const githubData = {
  "login": "rabiroy7681-code",
  "id": 258742922,
  "node_id": "U_kgDOD2waig",
  "avatar_url": "https://avatars.githubusercontent.com/u/258742922?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rabiroy7681-code",
  "html_url": "https://github.com/rabiroy7681-code",
  "followers_url": "https://api.github.com/users/rabiroy7681-code/followers",
  "following_url": "https://api.github.com/users/rabiroy7681-code/following{/other_user}",
  "gists_url": "https://api.github.com/users/rabiroy7681-code/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rabiroy7681-code/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rabiroy7681-code/subscriptions",
  "organizations_url": "https://api.github.com/users/rabiroy7681-code/orgs",
  "repos_url": "https://api.github.com/users/rabiroy7681-code/repos",
  "events_url": "https://api.github.com/users/rabiroy7681-code/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rabiroy7681-code/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-02-02T06:00:26Z",
  "updated_at": "2026-02-02T06:03:48Z"
}
app.get('/', (req, res) => {
  res.send(ab)
})

app.get('/facebook', (req, res)=>{
  res.send("You are in Facebook")
})
app.get('/linkdine', (req, res)=>{
  res.send("<h1>You are on Linkdine Page</h1>")
})

app.get('/github', (req, res)=>{
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
