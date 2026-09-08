/*count how many times each tag appears across a list of article objects and store the result in a tagCounter object
const articles = [
  {
    title: "Article 1",
    tags: ["JavaScript", "JS", "Advanced"]
  },
  {
    title: "Article 2",
    tags: ["JavaScript", "Playwright", "Automation"]
  },
  {
    title: "Article 3",
    tags: ["JS", "Automation", "Testing"]
  }
];
*/

const articles = [
  {
    title: "Article 1",
    tags: ["Automation", "JavaScript", "JS", "Advanced"]
  },
  {
    title: "Article 2",
    tags: ["JavaScript", "Playwright", "Automation"]
  },
  {
    title: "Article 3",
    tags: ["JS", "Automation", "Testing"]
  }
];
// Store the number of articles associated with each tag.
const tagCounter = {};
/*
articles.forEach(article => {
  article.tags.forEach(tag => {
    tagCounter[tag] = (tagCounter[tag] || 0) + 1;
  });
});
*/
for (let article of articles) {
  // Process every tag in the current article.
  for (let tag of article.tags) {
     // Initialize the tag count to 0 if it does not exist, then increment it.
    tagCounter[tag] = (tagCounter[tag] || 0) + 1;
    // if (tagCounter[tag]) {
    //   tagCounter[tag] = tagCounter[tag] + 1;
    // } else {
    //   tagCounter[tag] = 1;
    // }
  }
}
// Display the final tag counts.
console.log(tagCounter);
/*
output:
{
  Automation: 3,
  JavaScript: 2,
  JS: 2,
  Advanced: 1,
  Playwright: 1,
  Testing: 1
}
*/