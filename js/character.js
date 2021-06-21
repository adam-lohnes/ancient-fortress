var charOptions = document.getElementById('character-options');

var version = '0.0.1';
var name, gender, height, weight, availPts, str, int, agi, con, firstColor, secondColor;
var skinTone, hairColor, hairStyle, faceShape, facialExpression, facialHair;

var skinColors = ['beige', 'tan', 'chocolate', 'brown', 'saddlebrown'];
var hairColors = ['yellow', 'orange', 'brown', 'black', 'blue'];
var hairStyles = ['bald', 'buzzed', 'short', 'medium', 'long'];
var faceShapes = ['triangle', 'round', 'oval', 'boxy', 'square', 'rectangular'];
var expressions = ['bubbly', 'happy', 'serious', 'angry', 'bored'];
var facialHairs = ['none', 'moustache', 'handlebar', 'soul-patch', 'goatee', 'chinstrap', 'short-beard', 'medium-beard', 'long-beard'];

console.log('Character Builder v' + version);

function onLoad() {

}

function updateStat(id) {

}

function showPreviewOptions(tab) {
  charOptions.innerHTML = '';
  var optionsTable = document.createElement('table');
  var options = document.createElement('tr');

  for (var i=0; i<tab.length; i++) {
    var option = document.createElement('td');
    option.classList.add('character-option');

    if ( tab === skinColors || tab === hairColors ) {
      option.style.backgroundColor = tab[i];
    } else {
      option.innerHTML = tab[i];
    }

    options.appendChild(option);
  }

  optionsTable.appendChild(options);
  charOptions.appendChild(optionsTable);
}

function updatePreview() {

}