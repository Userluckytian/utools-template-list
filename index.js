
var colourIsLight = function (r, g, b) {

    // Counting the perceptive luminance
    // human eye favors green color... 
    var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    console.log(a);
    return (a < 0.5);
}

var randomRgb = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return [r, g, b];
};

var colourFromRgb = function (r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

function setbgColorAndTextColor() {
    var colorPancel = document.getElementById('result');
    var el = document.createElement('div');
    el.setAttribute('class', 'box');
    el.textContent = "Hello";

    var bgRgb = randomRgb();
    var bgColour = colourFromRgb(bgRgb[0], bgRgb[1], bgRgb[2]);
    var textColour = colourIsLight(bgRgb[0], bgRgb[1], bgRgb[2]) ? 'black' : 'white';
    el.setAttribute('style', 'background-color: ' + bgColour + '; color: ' + textColour);
    colorPancel.appendChild(el);
    document.querySelector('.bgColor').setAttribute('value', bgColour);
    document.querySelector('.textColor').setAttribute('value', textColour);
}
utools.onPluginReady(() => {
    console.log('插件装配完成，已准备好')
    // setbgColorAndTextColor();
});

export default function getTextColorByBgColor(color) {
    const arrayRGB = color.slice(4, color.length - 1).split(',');
    return colourIsLight(arrayRGB[0], arrayRGB[1], arrayRGB[2]) ? '#000000' : '#FFFFFF';
}