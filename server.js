const express = require("express");

const app = express();

app.use(express.static("build"));

app.get("*", (request, response) => {
  response.sendFile(`${__dirname}/public/index.html`);
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log(`Server started on port ${listener.address().port}`);
});
