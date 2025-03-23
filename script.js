
const predefinedPalettes = {
  dark: ['#1C2526', '#2E3532', '#4A5859', '#6B728E', '#8B9A9B'],
  calm: ['#A0C4FF', '#B9E4C9', '#D4E6F1', '#F0F8FF', '#E6F3FA'],
  pleasant: ['#FFD1DC', '#FFECB3', '#C8E6C9', '#B2EBF2', '#D1C4E9'],
  aggressive: ['#FF0000', '#D32F2F', '#B71C1C', '#8E0000', '#4A0000'],
  warm: ['#FF6F61', '#FF8A65', '#FFAB91', '#FFCCBC', '#FBE9E7'],
  sunlight: ['#FFF176', '#FFD54F', '#FFB300', '#FF9800', '#F57C00'],
  spooky: ['#2A1B3D', '#44318D', '#663399', '#A13D63', '#E07A5F']
};

// Function to generate a dynamic palette based on input string
function generateDynamicPalette(theme) {
  const seed = theme.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0); // Simple hash
  const baseHue = seed % 360; // Hue from 0-359 based on input
  const palette = [];

  for (let i = 0; i < 5; i++) {
    const hue = (baseHue + i * 60) % 360; // Spread hues
    const saturation = 70 + (seed % 20); // 70-90% for vibrancy
    const lightness = 50 + (i * 5); // Gradually lighter, 50-70%
    const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    palette.push(hslToHex(hue, saturation, lightness)); // Convert to hex
  }
  return palette;
}

// HSL to Hex conversion (simplified)
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
  const theme = document.getElementById('theme-input').value.toLowerCase().trim();
  const paletteDiv = document.getElementById('palette');
  paletteDiv.innerHTML = ''; // Clear previous palette

  if (!theme) {
    alert('Please enter a theme!');
    return;
  }

  // Check if theme is predefined
  let palette = predefinedPalettes[theme];
  if (!palette) {
    // Generate dynamic palette for unknown themes
    palette = generateDynamicPalette(theme);
  }

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