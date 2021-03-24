const fetch = require("node-fetch")

const getData = async () => {
  const response = await fetch("https://codequiz.azurewebsites.net/", {
    credentials: "include",
    headers: { Cookie: "hasCookie=true" },
  })
  const data = await response.text()
  if (data.includes(process.argv[2])) {
    let index = data.indexOf(process.argv[2])
    let nav = data.slice(index, index + 50).split("</td><td>")
    console.log(nav[1])
  }
}
getData()
