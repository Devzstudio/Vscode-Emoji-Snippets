const fs = require("fs");
const path = require("path");

const pathToSnippets = path.resolve(__dirname, "../snippets/snippets.json");
const snippets = JSON.parse(fs.readFileSync(pathToSnippets, "utf8"));

for (const snippetKey in snippets) {
  const snippet = snippets[snippetKey];
  const emoji = snippet.body[0].split(" ")[0];
  snippet.description = `${emoji} ${snippet.description}`;
}

fs.writeFileSync(pathToSnippets, JSON.stringify(snippets));
