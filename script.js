const predefinedPalettes = {
  // Original Themes
  dark: ['#1C2526', '#2E3532', '#4A5859', '#6B728E', '#8B9A9B'],
  calm: ['#A0C4FF', '#B9E4C9', '#D4E6F1', '#F0F8FF', '#E6F3FA'],
  pleasant: ['#FFD1DC', '#FFECB3', '#C8E6C9', '#B2EBF2', '#D1C4E9'],
  aggressive: ['#FF0000', '#D32F2F', '#B71C1C', '#8E0000', '#4A0000'],
  warm: ['#FF6F61', '#FF8A65', '#FFAB91', '#FFCCBC', '#FBE9E7'],
  sunlight: ['#FFF176', '#FFD54F', '#FFB300', '#FF9800', '#F57C00'],
  spooky: ['#2A1B3D', '#44318D', '#663399', '#A13D63', '#E07A5F'],
  forest: ['#2F4F4F', '#3C5A47', '#5D7A5F', '#8A9A5B', '#B2C248'],
  ocean: ['#00CED1', '#4682B4', '#191970', '#87CEEB', '#B0E0E6'],
  stormy: ['#37474F', '#546E7A', '#78909C', '#B0BEC5', '#CFD8DC'],
  icy: ['#E0F7FA', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6'],
  desert: ['#D2A96A', '#E8C39E', '#F4D9B2', '#D68A59', '#8B5A2B'],
  twilight: ['#4B3F72', '#6B5B95', '#957DAD', '#D4A5A5', '#F1D4D4'],
  retro: ['#FF69B4', '#FFD700', '#00CED1', '#ADFF2F', '#FF4500'],
  pastel: ['#F8BBD0', '#C5CAE9', '#B2DFDB', '#F0F4C0', '#FFCCBC'],
  vibrant: ['#FF4081', '#3F51B5', '#4CAF50', '#FFC107', '#F44336'],
  serene: ['#E1F5FE', '#B3E0FF', '#81D4FA', '#4FC3F7', '#0288D1'],
  mystical: ['#4A235A', '#6C3483', '#9B59B6', '#D2B4DE', '#EBDEF0'],
  earthy: ['#5D4037', '#6D4C41', '#8D6E63', '#BCAAA4', '#D7CCC8'],
  cosmic: ['#1B263B', '#415A77', '#778DA9', '#E0E1DD', '#FF6F61'],
  tropical: ['#FF6F61', '#26A69A', '#4DD0E1', '#FFCA28', '#D81B60'],
  lunar: ['#263238', '#455A64', '#607D8B', '#90A4AE', '#CFD8DC'],
  golden: ['#FFD700', '#FFA500', '#FF8C00', '#DAA520', '#B8860B'],
  midnight: ['#0D1B2A', '#1B263B', '#415A77', '#778DA9', '#E0E1DD'],
  spring: ['#A8E6CF', '#DCEDC1', '#FFD3B6', '#FFAAA5', '#FF8C94'],
  autumn: ['#D84315', '#F4511E', '#FF7043', '#FF8A65', '#FFB300'],
  winter: ['#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#607D8B'],
  summer: ['#FFD700', '#FFA500', '#FF8C00', '#FF7F50', '#FF6347'],
  futuristic: ['#00E5FF', '#00B8D4', '#0288D1', '#E91E63', '#FF4081'],
  cyberpunk: ['#FF00FF', '#00FFFF', '#FF4444', '#4444FF', '#FFFF00'],
  steampunk: ['#8D6E63', '#6D4C41', '#D4A017', '#FFB300', '#3E2723'],
  industrial: ['#616161', '#424242', '#78909C', '#B0BEC5', '#263238'],
  gothic: ['#1C2526', '#4A235A', '#6A1B9A', '#B71C1C', '#212121'],
  victorian: ['#6D4C41', '#D4A5A5', '#F1D4D4', '#BCAAA4', '#8D6E63'],
  romantic: ['#FFCDD2', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A'],
  modern: ['#212121', '#757575', '#B0BEC5', '#FFFFFF', '#E0E0E0'],
  minimal: ['#FAFAFA', '#EEEEEE', '#CFD8DC', '#B0BEC5', '#78909C'],
  abstract: ['#FF4081', '#3F51B5', '#FFC107', '#4CAF50', '#F44336'],
  surreal: ['#9C27B0', '#FF5722', '#00BCD4', '#FFCA28', '#E91E63'],
  impressionist: ['#FFD1DC', '#B2DFDB', '#C5CAE9', '#F0F4C0', '#FFECB3'],
  cubist: ['#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#F44336'],

  // New Themes (Nature, Emotions, Aesthetics)
  meadow: ['#4CAF50', '#AED581', '#DCEDC1', '#F1F8E9', '#C5E1A5'],
  volcano: ['#D32F2F', '#FF5722', '#FFB300', '#616161', '#212121'],
  sunrise: ['#FFCA28', '#FF9800', '#FF5722', '#F06292', '#FFCDD2'],
  sunset: ['#F44336', '#FF9800', '#FFB300', '#D4A5A5', '#9575CD'],
  rain: ['#607D8B', '#90A4AE', '#B0BEC5', '#CFD8DC', '#ECEFF1'],
  fog: ['#B0BEC5', '#CFD8DC', '#E0E0E0', '#F5F5F5', '#ECEFF1'],
  hope: ['#FFD54F', '#FFECB3', '#B2EBF2', '#81D4FA', '#AED581'],
  chaos: ['#F44336', '#FF9800', '#9C27B0', '#2196F3', '#FFEB3B'],
  dream: ['#D1C4E9', '#B39DDB', '#9575CD', '#E1F5FE', '#B3E0FF'],
  nostalgia: ['#8D6E63', '#BCAAA4', '#FFCCBC', '#FFD1DC', '#F0EAD6'],
  adventure: ['#4CAF50', '#FF9800', '#2196F3', '#FF5722', '#FFD700'],
  tranquility: ['#B3E5FC', '#81D4FA', '#4FC3F7', '#E0F7FA', '#B9E4C9'],
  mystery: ['#4A235A', '#6C3483', '#9B59B6', '#263238', '#607D8B'],
  passion: ['#D81B60', '#F06292', '#FF4081', '#FF5722', '#FF8A65'],
  dawn: ['#FFECB3', '#FFD1DC', '#FFAB91', '#81D4FA', '#B3E0FF'],

  // Original Colors
  red: ['#FF0000', '#D32F2F', '#B71C1C', '#8E0000', '#4A0000'],
  blue: ['#2196F3', '#1976D2', '#0D47A1', '#0288D1', '#01579B'],
  green: ['#4CAF50', '#388E3C', '#2E7D32', '#66BB6A', '#1B5E20'],
  yellow: ['#FFEB3B', '#FBC02D', '#F9A825', '#FFCA28', '#FFB300'],
  purple: ['#9C27B0', '#7B1FA2', '#6A1B9A', '#AB47BC', '#4A148C'],
  orange: ['#FF9800', '#F57C00', '#EF6C00', '#FF5722', '#E64A19'],
  pink: ['#E91E63', '#C2185B', '#AD1457', '#F06292', '#880E4F'],
  black: ['#212121', '#424242', '#616161', '#757575', '#9E9E9E'],
  white: ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#CFD8DC'],
  gray: ['#9E9E9E', '#757575', '#616161', '#424242', '#212121'],
  brown: ['#795548', '#5D4037', '#4E342E', '#3E2723', '#8D6E63'],
  teal: ['#26A69A', '#00897B', '#00695C', '#4DB6AC', '#00796B'],
  cyan: ['#00BCD4', '#00ACC1', '#0097A7', '#4DD0E1', '#26C6DA'],
  magenta: ['#E91E63', '#C2185B', '#AD1457', '#F06292', '#D81B60'],
  lime: ['#CDDC39', '#C0CA33', '#AFB42B', '#D4E157', '#9E9D24'],

  // Original Secondary Colors (Combinations)
  redorange: ['#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C'],
  yelloworange: ['#FFCA28', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00'],
  yellowgreen: ['#D4E157', '#C0CA33', '#AFB42B', '#9CCC65', '#8BC34A'],
  bluegreen: ['#26A69A', '#4DB6AC', '#80CBC4', '#26C6DA', '#00BCD4'],
  bluepurple: ['#3F51B5', '#5C6BC0', '#7986CB', '#9575CD', '#AB47BC'],
  redpurple: ['#D81B60', '#C2185B', '#AD1457', '#BA68C8', '#8E24AA'],

  // Original Additional Named Sub-Colors
  turquoise: ['#40C4FF', '#26C6DA', '#00BCD4', '#4DD0E1', '#80DEEA'],
  violet: ['#8E24AA', '#AB47BC', '#BA68C8', '#CE93D8', '#E1BEE7'],
  indigo: ['#3F51B5', '#303F9F', '#283593', '#5C6BC0', '#7986CB'],
  olive: ['#827717', '#AFB42B', '#C0CA33', '#9E9D24', '#8BC34A'],
  coral: ['#FF7043', '#FF8A65', '#FFAB91', '#FFCCBC', '#FBE9E7'],
  salmon: ['#FF8A65', '#FA8072', '#F4A460', '#E9967A', '#FF9999'],
  peach: ['#FFCCBC', '#FFAB91', '#FF8A65', '#FFE4B5', '#FFDAB9'],
  lavender: ['#E6E6FA', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2'],
  maroon: ['#B71C1C', '#8E0000', '#800000', '#A52A2A', '#4A0000'],
  gold: ['#FFD700', '#FFC107', '#FFA000', '#FF8F00', '#DAA520'],
  silver: ['#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C', '#607D8B'],
  bronze: ['#CD7F32', '#8D5524', '#A97142', '#C68E17', '#D4A017'],

  // Original More Sub-Colors and Variations
  skyblue: ['#87CEEB', '#4FC3F7', '#29B6F6', '#03A9F4', '#81D4FA'],
  forestgreen: ['#2E7D32', '#388E3C', '#4CAF50', '#66BB6A', '#1B5E20'],
  deepblue: ['#0D47A1', '#1565C0', '#1976D2', '#0288D1', '#01579B'],
  hotpink: ['#FF69B4', '#F06292', '#EC407A', '#F48FB1', '#C2185B'],
  lightgray: ['#F5F5F5', '#EEEEEE', '#E0E0E0', '#CFD8DC', '#B0BEC5'],
  darkgray: ['#616161', '#424242', '#212121', '#757575', '#9E9E9E'],
  navy: ['#1A237E', '#283593', '#303F9F', '#3F51B5', '#5C6BC0'],
  emerald: ['#2ECC71', '#27AE60', '#1B5E20', '#4CAF50', '#66BB6A'],
  ruby: ['#D32F2F', '#C62828', '#B71C1C', '#8E0000', '#4A0000'],
  sapphire: ['#0D47A1', '#1976D2', '#0288D1', '#42A5F5', '#64B5F6'],
  amber: ['#FFB300', '#FFA000', '#FF8F00', '#FFCA28', '#FFC107'],
  plum: ['#8E24AA', '#7B1FA2', '#6A1B9A', '#AB47BC', '#4A148C'],
  mint: ['#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#A7FFEB'],
  beige: ['#F5F5DC', '#EEE8AA', '#F0EAD6', '#D2B48C', '#DEB887'],
  ivory: ['#FFFFF0', '#FFF8E7', '#FDF5E6', '#F8F1E9', '#F0EDE5'],
  charcoal: ['#263238', '#37474F', '#455A64', '#546E7A', '#607D8B'],

  // Original Even More Combinations
  tealblue: ['#26A69A', '#4DB6AC', '#00BCD4', '#4DD0E1', '#80DEEA'],
  limeyellow: ['#D4E157', '#CDDC39', '#C0CA33', '#FFEB3B', '#FBC02D'],
  cyanblue: ['#00BCD4', '#26C6DA', '#4DD0E1', '#29B6F6', '#03A9F4'],
  magentapink: ['#E91E63', '#F06292', '#EC407A', '#FF69B4', '#D81B60'],
  purpleblue: ['#6A1B9A', '#7B1FA2', '#3F51B5', '#5C6BC0', '#7986CB'],
  orangeyellow: ['#FF9800', '#FFCA28', '#FFB300', '#FFA000', '#FF8F00'],
  greenteal: ['#4CAF50', '#66BB6A', '#26A69A', '#4DB6AC', '#80CBC4'],
  pinkpurple: ['#E91E63', '#F06292', '#CE93D8', '#BA68C8', '#AB47BC'],
  brownred: ['#795548', '#5D4037', '#4E342E', '#8D0000', '#A52A2A'],
  grayblue: ['#607D8B', '#78909C', '#90A4AE', '#B0BEC5', '#CFD8DC'],

  // New Color Combinations
  tealpurple: ['#26A69A', '#4DB6AC', '#9575CD', '#7E57C2', '#AB47BC'],
  limeorange: ['#CDDC39', '#D4E157', '#FFCA28', '#FF9800', '#F57C00'],
  cyanpink: ['#00BCD4', '#26C6DA', '#F06292', '#EC407A', '#FF69B4'],
  redyellow: ['#FF0000', '#D32F2F', '#FFCA28', '#FFB300', '#FFA000'],
  blueyellow: ['#2196F3', '#1976D2', '#FFEB3B', '#FBC02D', '#F9A825'],
  greenpurple: ['#4CAF50', '#66BB6A', '#9C27B0', '#AB47BC', '#7B1FA2'],
  pinkorange: ['#E91E63', '#F06292', '#FF9800', '#FF5722', '#FF8A65'],
  graygreen: ['#9E9E9E', '#757575', '#AED581', '#8BC34A', '#4CAF50'],
  brownpurple: ['#795548', '#5D4037', '#8E24AA', '#AB47BC', '#BA68C8'],
  blackred: ['#212121', '#424242', '#B71C1C', '#8E0000', '#FF0000'],

  // New Filter-Inspired Palettes
  'pleasant vignette': ['#FFD1DC', '#E6B8A8', '#C8E6C9', '#AEDFF2', '#8DB6C9'], // Soft edges, muted center
  'dark sepia': ['#403D2E', '#5C5540', '#73694E', '#8B7F5C', '#A3956A'], // Warm, vintage brown tones
  'calm noir': ['#A0C4FF', '#829DBF', '#64768F', '#4A5A6F', '#2E3D4F'], // Desaturated, moody blues
  'spooky haze': ['#2A1B3D', '#3F2D5A', '#544077', '#7A5E9C', '#A084B8'], // Misty purples
  'warm glow': ['#FF6F61', '#FF8F77', '#FFB38F', '#FFD7A7', '#FFF1C3'], // Radiant, soft warmth
  'sunlight fade': ['#FFF176', '#FFE066', '#FFCF56', '#FFB846', '#FFA636'], // Gradual fade to darker yellows
  'forest mist': ['#2F4F4F', '#486767', '#628080', '#7C9999', '#96B2B2'], // Foggy greens
  'ocean vintage': ['#00CED1', '#3AA8B3', '#548295', '#6D5C77', '#873659'], // Faded, old-photo blues
  'stormy grain': ['#37474F', '#4F5E66', '#67757D', '#808C94', '#99A3AB'], // Textured, muted grays
  'icy frost': ['#E0F7FA', '#C6E2E8', '#ACD0D6', '#92BEC4', '#78ABB2'], // Cold, frosty fade
  'desert dusk': ['#D2A96A', '#C89C5A', '#BE8F4A', '#B4823A', '#AA752A'], // Warm, dimming tones
  'twilight blur': ['#4B3F72', '#64568F', '#7D6DAC', '#9684C9', '#AF9BE6'], // Soft, hazy purples
  'retro fade': ['#FF69B4', '#E65A9F', '#CC4B8A', '#B33C75', '#992D60'], // Faded vibrant pinks
  'pastel wash': ['#F8BBD0', '#E6A9BE', '#D497AC', '#C2859A', '#B07388'], // Watercolor-like fade
  'vibrant pop': ['#FF4081', '#E63974', '#CC3267', '#B32B5A', '#99244D'], // Bold, saturated shift
  'serene mist': ['#E1F5FE', '#CDE6F5', '#B8D7EC', '#A4C8E3', '#90B9DA'], // Gentle blue haze
  'mystical glow': ['#4A235A', '#5F2E72', '#74398A', '#8944A2', '#9E4FBA'], // Radiant purple sheen
  'earthy sepia': ['#5D4037', '#6F5045', '#816053', '#937061', '#A5806F'], // Warm, vintage earth tones
  'cosmic dust': ['#1B263B', '#2F3A55', '#434E6F', '#576289', '#6B76A3'], // Starry, muted blues
  'tropical fade': ['#FF6F61', '#E66558', '#CC5B4F', '#B35146', '#99473D'] // Faded tropical reds
};
// Function to generate a dynamic palette for unrecognized inputs
function generateDynamicPalette(theme) {
  const seed = theme.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const baseHue = seed % 360;
  const palette = [];

  for (let i = 0; i < 5; i++) {
    const hue = (baseHue + i * 60) % 360;
    const saturation = 70 + (seed % 20);
    const lightness = 50 + (i * 5);
    const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    palette.push(hslToHex(hue, saturation, lightness));
  }
  return palette;
}

// HSL to Hex conversion
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function generatePalette() {
  const input = document.getElementById('theme-input').value.toLowerCase().trim();
  const paletteDiv = document.getElementById('palette');
  paletteDiv.innerHTML = ''; // Clear previous palette

  if (!input) {
    alert('Please enter a theme or color!');
    return;
  }

  // Check if input is a predefined theme
  let palette = predefinedPalettes[input];
  if (palette) {
    displayPalette(palette);
    return;
  }

  // Check if input is a color name
  palette = colorPalettes[input];
  if (palette) {
    displayPalette(palette);
    return;
  }

  // If neither, generate a dynamic palette
  palette = generateDynamicPalette(input);
  displayPalette(palette);
}

function displayPalette(palette) {
  const paletteDiv = document.getElementById('palette');
  palette.forEach(color => {
    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = color;
    swatch.innerText = color;
    paletteDiv.appendChild(swatch);
  });
  document.getElementById('copy-btn').style.display = 'block';
}

function copyToClipboard() {
  const paletteText = Array.from(document.querySelectorAll('.swatch'))
    .map(swatch => swatch.innerText)
    .join(', ');
  navigator.clipboard.writeText(paletteText);
  alert('Hex codes copied to clipboard!');
}