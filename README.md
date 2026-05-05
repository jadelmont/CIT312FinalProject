# Course Visualization Tool – Final Project  
CIT 312 – Advanced Web Design  
Jasly Delmonte
Date: May 4, 2026

## 1. Project Overview
The Course Visualization Tool is an interactive web application designed to showcase the nine undergraduate programs within Purdue University’s School of Applied & Creative Computing. The project uses Bootstrap, SCSS, semantic HTML, and JavaScript to create a professional, responsive, and accessible experience.

The application includes:
- A card based layout displaying all 9 programs  
- A modal for each program listing required courses and career paths  
- A 10 question interactive quiz recommending programs  
- A responsive hamburger menu  
- A custom favicon  
- Fully responsive layout  
- Accessibility friendly structure  

---

## 2. Use of SCSS (SASS Preprocessor)
SCSS was used to organize and enhance the styling of the application.

### SCSS Features Used
- **Variables** – Used to store Purdue branded colors for consistent styling.  
- **Nesting** – Applied to structure selectors cleanly and logically.  
- **Color Functions** – `darken()` used to create subtle hover effects.  
- **Compilation Workflow** – SCSS was compiled into `main.css` using the Live Sass Compiler in VS Code.  

### Purpose
Using SCSS allowed for:
- Cleaner, more maintainable code  
- Consistent color usage  
- Easier responsive adjustments  
- Professional level styling  

---

## 3. Responsiveness
Responsiveness was achieved through a combination of Bootstrap’s layout system and custom SCSS.

### Bootstrap Grid System
- `.container`, `.row`, `.col`  
- Responsive column classes such as `row-cols-1` and `row-cols-md-3`  
- Utility spacing classes like `my-5`, `g-4`, and `p-4`  

### Media Queries
Custom SCSS media queries adjust:
- Card image heights on smaller screens  
- Navigation width on larger screens  

### Mobile Navigation
The hamburger menu collapses into a slide in panel on small screens and displays as a static horizontal menu on larger screens.

---

## 4. Hamburger Menu
The navigation menu was built using a CSS only slide down technique.

### Key Features
- Font Awesome icons for open/close  
- `nav:target` used to reveal the menu  
- CSS transforms for smooth sliding  
- No JavaScript required  
- Fully responsive  

### Why This Matters
This demonstrates understanding of:
- CSS transforms  
- Target selectors  
- Mobile first navigation patterns  

---

## 5. Favicon
A custom favicon was included using:

```html
<link rel="icon" type="image/png" href="images/favicon.png">
