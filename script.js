const facts =
[
  "Penguins can swim up to 15 miles per hour.",
  "Some penguins can dive deeper than 500 meters.",
  "Penguins are birds, but they cannot fly.",
  "Emperor penguins are the tallest penguin species."
];

function showFact()
{
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact-output").innerHTML = facts[randomIndex];
}
