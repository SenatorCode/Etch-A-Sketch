# ✨ Etch A Sketch

A modern, interactive drawing application inspired by the classic Etch A Sketch toy. Create beautiful pixel art with an intuitive grid-based interface and multiple color modes.

## 🎮 Features

- **Interactive Drawing Grid** - Hover over cells to draw and create pixel art
- **Color Picker** - Choose any color from the native color palette
- **Rainbow Mode** - Toggle random colors for vibrant, unpredictable art
- **Custom Grid Sizes** - Create grids from 2x2 to 100x100 cells with an elegant modal interface
- **Clear Canvas** - Instantly clear your artwork with the "New Grid" button
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern Design** - Beautiful gradient backgrounds, smooth animations, and professional UI
- **Dark Theme** - Easy on the eyes with a sleek dark color scheme

## 🚀 How to Use

1. **Open the Application** - Save as `index.html` and open in any modern web browser

2. **Draw** - Hover over the grid cells to draw with the currently selected color

3. **Change Colors** - Click "Pick Color" to open the color picker and select your preferred color

4. **Rainbow Mode** - Click "Rainbow Mode" to enable random colors on each cell you hover over

5. **Resize Grid** - Click "Custom Grid" to open a modal where you can specify a custom grid size (2-100)

6. **Clear Canvas** - Click "New Grid" to clear all drawings and start fresh

## 🎨 Color Modes

### Standard Color Mode
- Click "Pick Color" to select any color using the browser's native color picker
- Draw with your chosen color by hovering over grid cells

### Rainbow Mode
- Click "Rainbow Mode" to toggle rainbow drawing
- Each cell you hover over will be filled with a random color
- Create vibrant, colorful artwork with dynamic colors

## 💻 Tech Stack

- **HTML5** - Semantic markup and form elements
- **CSS3** - Modern styling with:
  - Linear gradients
  - Flexbox layout
  - Smooth transitions and animations
  - Responsive design with clamp()
  - Backdrop blur effects
- **JavaScript (ES6+)** - Interactive features including:
  - DOM manipulation
  - Event listeners (mouseenter, click)
  - Color generation algorithms
  - Modal management

## 📱 Responsive Design

The application is fully responsive and adapts beautifully to all screen sizes:
- **Desktop** - Full interface with all features optimized for larger screens
- **Tablet** - Touch-friendly buttons and responsive grid sizing
- **Mobile** - Optimized layout with touch-hover compatibility

All text sizes, buttons, and spacing scale fluidly using CSS `clamp()` for the ultimate responsive experience.

## 🎯 Key Features Explained

### Custom Grid Modal
Instead of using JavaScript prompts, a beautiful modal dialog allows users to:
- Enter a custom grid size (2-100)
- See real-time input validation
- Cancel without applying changes
- Press Enter to confirm quickly

### Hover Effects
- Smooth color transitions on hover
- Visual feedback with subtle brightness changes
- Responsive cursor interactions

### Visual Design
- **Color Scheme**: Deep blue gradient background with cyan accents
- **Typography**: Clean, modern Inter font for excellent readability
- **Spacing**: Generous padding and gaps for comfortable viewing
- **Shadows**: Subtle box shadows for depth and visual hierarchy

## 📊 Grid Customization

Create grids of any size between 2x2 and 100x100 cells:
- **2x2** - Large cells for detailed work
- **16x16** - Default grid for balanced detail and speed
- **50x50** - Smaller cells for detailed artwork
- **100x100** - Maximum detail with small cells

The application automatically calculates cell sizes based on the container dimensions.

## 🎪 Project Structure

The entire application is contained in a single `index.html` file with:
- Inline CSS for styling
- Vanilla JavaScript for functionality
- No external dependencies required

## 🚦 Browser Compatibility

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Future Enhancements

Potential features for future versions:
- Eraser tool
- Brush size adjustment
- Undo/Redo functionality
- Save artwork as image
- Download drawings as PNG
- Preset color palettes
- Drawing history
- Opacity/transparency control

## 📝 Code Highlights

### Color Generation
```javascript
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
```

### Dynamic Grid Creation
```javascript
function createGrid(cellNum = 16) {
    grid.innerHTML = "";
    for (let i = 0; i < cellNum * cellNum; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        const cellWidth = gridWidth / cellNum;
        const cellHeight = gridHeight / cellNum;
        cell.style.width = cellWidth + "px";
        cell.style.height = cellHeight + "px";
        grid.appendChild(cell);
    }
    attachListeners();
}
```

## 👨‍💻 Author

Created by [SenatorCode](https://github.com/SenatorCode)

This project demonstrates core web development skills including DOM manipulation, event handling, responsive design, and modern CSS techniques.

## 📄 License

Open source and available for personal and educational use.

---

**Enjoy creating pixel art! ✨**