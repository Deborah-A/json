let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [{
    "name": "Mack Morris",
    "picture_url": "headshots/1.png",
    "position": "Co-Founder",
    "quote": "Shoot for the moon. Even if you miss, you'll land among the stars."
  },
  {
    "name": "Kristen Holland",
    "picture_url": "headshots/5.png",
    "position": "Co-Founder",
    "quote": "Keep calm and carry on."
  },
  {
    "name": "Mitchell West",
    "picture_url": "headshots/2.png",
    "position": "Creative Director",
    "quote": "It's not the number of breaths we take, but the number of moments that take our breath away."
  },
  {
    "name": "Eloise Barber",
    "picture_url": "headshots/4.png",
    "position": "Product Manager",
    "quote": "If life gives you lemons, make lemonade."
  },
  {
    "name": "Christopher Gross",
    "picture_url": "headshots/3.png",
    "position": "Data Scientist",
    "quote": "Yesterday is history, tomorrow a mystery and today is a gift. That's why we call it the present."
  },
  {
    "name": "Tara Colon",
    "picture_url": "headshots/6.png",
    "position": "Programmer",
    "quote": "Keep calm and carry on."
  },
  {
    "name": "Sylvia Rodriguez",
    "picture_url": "headshots/7.png",
    "position": "Digital Marketer",
    "quote": "You miss 100% of the shots you don't take."
  },
  {
    "name": "Flora Riley",
    "picture_url": "headshots/8.png",
    "position": "UX Designer",
    "quote": "Everything happens for a reason."
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createBio(jsonDatabase[i]);
}

function createBio(incomingJSON) {
  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newName = document.createElement("H3");
  newName.classList.add('contentTitle');
  newName.innerHTML = incomingJSON['name'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newName);

  /// Create & add LIST HEADLINE to the item
  let newPosition = document.createElement("H4");
  newPosition.innerHTML = incomingJSON['position'];
  newContentElement.appendChild(newPosition);

  /// Create & add footer image
  let newHeadshot = document.createElement("DIV");
  newHeadshot.classList.add("imageContainer");
  newHeadshot.style.backgroundImage = "url('" + incomingJSON['picture_url'] + "')";
  newContentElement.appendChild(newHeadshot);

  /// Create & add LIST HEADLINE to the item
  let newQuote = document.createElement("P");
  newQuote.innerHTML = incomingJSON['quote'];
  newContentElement.appendChild(newQuote);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}
