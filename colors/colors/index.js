const allColors = require('./colorNames')
let colorValues = {};
for (const name in allColors) {
    if (Object.hasOwnProperty.call(allColors, name) && name.includes('content') == false && name.includes('focus') == false) {
        colorValues[name] = allColors[name];
    }
}
let colorObject = {
    "transparent": "transparent",
    "current": "currentColor",
}

for (const [key, item] of Object.entries(colorValues)) {
    colorObject[key] = ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
            return `hsla(var(` + item + `) / ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
            return `hsla(var(` + item + `) / var(${opacityVariable}, 1))`
        }
        return `hsl(var(` + item + `))`
    }
}

module.exports = colorObject
