images=["flower.jpeg",
       "elephant.jpeg",
       "egypt.jpeg",
       "drstrange.jpeg",
       "dragons.jpeg",
       "bees.jpeg",
       "gemstone.jpeg",
       "giraffe.jpeg",
       "grimreaper.jpeg",
        "lizard.jpeg",
        "mountain.jpeg",
        "pattern.jpeg",
        "temple.jpeg"  ]

reasons=["The Plant of Shades: Drawn by pencil in the shape of a plant with small little details",
       "Earth Day Poster: made to symbolise the damage we need to fix on earth as well as showing an innocent creature that too suffers from us humans",
       "Egyptian Papyrus Anubis, God of death: Drawn on Papyrus paper and a symbol of death, the god Anubis",
       "Dr. Strange into the blank: Made by water colors and outlined in pen of the famous hero, Dr. Strange",
       "A production in year 3 about the elemental dragons(water, wind, fire and earth)",
       "A production in year 2 about how bees work and what they do",
        "The G stone: A painting drawn with Acryllic on a canvas made with a dark purple and streaks of blue to make it seem glowing",
       "Giraffe in the sunset: Drwan with watercolor, this is a harmless creature, the giraffe behind a pinkish sky of sunset",
       "The Grim Reaper: A small drawing of a symbol of death, the grim reaper, drawn in pencil and smudged to give it an eerie look",
       "1 shape of a lizard: One shape that looks like a lizard, is copied out fitting perfectly like a jigsaw but each lizard is different",
       "Land of blue: painted with acryllic on a long canvas, the painting has a large blue mountain surrounded by the blue forest",
       "The Jigsaw Shape: One shape that does not look like a jigsaw but slides in perfectly with each other like a jigsaw",
       "Japanese/chinese Temple: Made with a background of chinese characters and displayed as one of the top 3 artworks for the show: Dragons of Water, Wind, Fire and Earth."      ]
var a=0;

function info(){
  document.getElementById("album").src=images[a];
  document.getElementById("reason").innerHTML=reasons[a];
  a++;
  if(a>12){
    a=0
  }
}
