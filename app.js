const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  const userObject = {
    slackUsername: "hayzedDev",
    backend: true,
    age: 25,
    bio: `Hi. I am Azeez, a backend engineer who writes Node.js😎. I started my jouorney as a software developer around the thrid quarter of 2021, where i learnt basic technologies such as HTML and CSS. I proceeded to learning JavaScript and later moved to learning Node.js whnich i used in building some fascinating projects which can be accessed on my GitHub profile. I am currently looking for Internships and Junior DEveloper positions Backend/Software Development related companies/startups. My career goal in 5 years to come is to be good at what i do and also become a Senior Backend Engineer in any reputable Company/Startup `,
  };
  res.status(200).json(userObject);
});

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`App started!!! Listening on port ${port}`);
});

// - Setup a server (Host)
// - Create an **(GET)** api endoint that returns the following  json response:

//      { "**slackUsername**": String, "**backend**": Boolean, "**age**": Integer, "**bio**": String }

//     - SlackUsername should be a **string** datatype and your slack username
//     - Backend should be a **boolean** datatype
//     - Age should be an  **integer** datatype
//     - Bio(description about yourself) should be a **string** datatype
// - Push to **GitHub**