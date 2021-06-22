var charOptions = document.getElementById('character-options');

var version = '0.0.1';
var name, gender, height, weight, availPts, str, int, agi, con, firstColor, secondColor;
var skinTone, hairColor, hairStyle, faceShape, facialExpression, facialHair;

var skinColor = ['beige', 'tan', 'chocolate', 'brown', 'saddlebrown'];
var hairColor = ['yellow', 'orange', 'brown', 'black', 'blue'];
var hairStyle = ['bald', 'buzzed', 'short', 'medium', 'long'];
var faceShape = ['triangle', 'round', 'oval', 'boxy', 'square', 'rectangular'];
var expression = ['bubbly', 'happy', 'serious', 'angry', 'bored'];
var facialHair = ['none', 'moustache', 'handlebar', 'soul-patch', 'goatee', 'chinstrap', 'short-beard', 'medium-beard', 'long-beard'];

var currentBuild = {
  'skinColor': 'tan',
  'hairColor': 'brown',
  'hairStyle': 'buzzed',
  'faceShape': 'oval',
  'expression': 'serious',
  'facialHair': 'short-beard'
};

console.log('Character Builder v' + version);

function onLoad() {

}

function updateStat(id) {

}

function showPreviewOptions(tab) {
  var list = window[tab];
  charOptions.innerHTML = '';
  var optionsTable = document.createElement('table');
  var options = document.createElement('tr');

  for (var i=0; i<list.length; i++) {
    var option = document.createElement('td');
    option.classList.add('character-option');

    if ( list === skinColor || list === hairColor ) {
      option.style.backgroundColor = list[i];
      option.onclick = updatePreview(tab, list[i]);
    } else {
      option.innerHTML = list[i];
    }

    options.appendChild(option);
  }

  optionsTable.appendChild(options);
  charOptions.appendChild(optionsTable);
}

function updatePreview(option, value) {
  return function() {
    console.log(option + '=>' + value);
    currentBuild[option] = value;
  };
}