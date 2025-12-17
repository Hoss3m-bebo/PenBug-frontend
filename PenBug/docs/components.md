# PenBug UI Components Documentation

## Overview

This document provides detailed specifications for all UI components used in the PenBug platform. Components are designed with a dark cyber-security theme featuring neon red accents, glass-morphism effects, and RTL support.

## Color Palette

### Primary Colors
- **Background Primary:** `#0a0a0a` (Deep black)
- **Background Secondary:** `#1a1a1a` (Dark gray for cards)
- **Background Tertiary:** `#2a2a2a` (Lighter gray for accents)
- **Text Primary:** `#ffffff` (White)
- **Text Secondary:** `#cccccc` (Light gray)
- **Text Muted:** `#888888` (Muted gray)
- **Accent Primary:** `#ff0000` (Neon red)
- **Accent Secondary:** `#ff3333` (Lighter red)
- **Border Color:** `#333333` (Subtle borders)

### Special Effects
- **Glass Background:** `rgba(255, 255, 255, 0.1)`
- **Glass Border:** `rgba(255, 255, 255, 0.2)`
- **Shadow Color:** `rgba(255, 0, 0, 0.3)`
- **Glow Effect:** Text-shadow with red tinting

## Core Components

### 1. Navigation Header

**Structure:**
```html
<header class="header">
    <nav class="nav container">
        <div class="logo">PenBug</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <!-- Additional links -->
        </ul>
    </nav>
</header>
```

**Styling:**
- Fixed positioning with backdrop blur
- Glass-morphism effect
- Responsive hamburger menu on mobile
- RTL-aware layout adjustments

**Wireframe:**
```
┌─────────────────────────────────────────────────┐
│ [LOGO]                    [HOME] [PROGRAMS] [..] │
└─────────────────────────────────────────────────┘
```

### 2. Glass-morphism Card

**Structure:**
```html
<div class="card">
    <h3>Card Title</h3>
    <p>Card content...</p>
</div>
```

**Styling:**
- Semi-transparent background with blur effect
- Subtle border and shadow
- Hover animations (lift and glow)
- Responsive padding and margins

**Wireframe:**
```
┌─────────────────────────────────┐
│                                 │
│  [ICON] Title                   │
│                                 │
│  Content text with glass        │
│  morphism background effect     │
│                                 │
└─────────────────────────────────┘
```

### 3. Cyber Button

**Variants:**
- Primary (red background)
- Secondary (transparent with red border)
- Disabled state

**Structure:**
```html
<button class="btn">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
```

**Styling:**
- Neon red color scheme
- Glow effects on hover
- Loading states with spinner animation
- Accessible focus states

**Wireframe:**
```
┌─────────────────┐    ┌─────────────────┐
│  PRIMARY BTN    │    │ SECONDARY BTN   │
└─────────────────┘    └─────────────────┘
```

### 4. Form Components

**Input Fields:**
```html
<div class="form-group">
    <label for="input">Label Text</label>
    <input type="text" id="input" placeholder="Placeholder">
</div>
```

**Select Dropdowns:**
```html
<div class="form-group">
    <label for="select">Select Option</label>
    <select id="select">
        <option>Option 1</option>
    </select>
</div>
```

**Text Areas:**
```html
<div class="form-group">
    <label for="textarea">Description</label>
    <textarea id="textarea" rows="4"></textarea>
</div>
```

**Styling:**
- Dark backgrounds with red focus states
- Consistent spacing and typography
- Validation error states
- RTL text direction support

### 5. Data Tables

**Structure:**
```html
<table class="data-table">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

**Styling:**
- Glass-morphism rows
- Alternating row colors
- Sortable column headers
- Responsive mobile stacking

### 6. Status Badges

**Variants:**
- Critical (red)
- High (orange)
- Medium (yellow)
- Low (green)
- Info (blue)

**Structure:**
```html
<span class="badge badge-critical">Critical</span>
<span class="badge badge-high">High</span>
```

**Styling:**
- Color-coded backgrounds
- Consistent sizing
- Accessible contrast ratios

### 7. Statistics Cards

**Structure:**
```html
<div class="stat-card">
    <h3>Total Submissions</h3>
    <span class="stat-number">1,247</span>
    <span class="stat-change">+12%</span>
</div>
```

**Styling:**
- Large numbers with accent colors
- Trend indicators (up/down arrows)
- Glass-morphism backgrounds

### 8. Progress Bars

**Structure:**
```html
<div class="progress-bar">
    <div class="progress-fill" style="width: 75%"></div>
    <span class="progress-text">75%</span>
</div>
```

**Styling:**
- Animated fill with neon red
- Text labels for accessibility
- Multiple sizes (small, medium, large)

### 9. Notification System

**Structure:**
```html
<div class="notification notification-success">
    <span class="notification-icon">✓</span>
    <span class="notification-text">Action completed successfully</span>
    <button class="notification-close">&times;</button>
</div>
```

**Styling:**
- Positioned overlays
- Auto-dismiss functionality
- Different types (success, error, warning, info)

### 10. Modal/Dialog Components

**Structure:**
```html
<div class="modal-overlay">
    <div class="modal">
        <div class="modal-header">
            <h3>Modal Title</h3>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
            Modal content...
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary">Cancel</button>
            <button class="btn">Confirm</button>
        </div>
    </div>
</div>
```

**Styling:**
- Centered glass-morphism panels
- Backdrop blur effect
- Keyboard navigation support
- Responsive sizing

## Layout Components

### Grid System

**Classes:**
- `.grid` - Base grid container
- `.grid-2` - 2-column grid
- `.grid-3` - 3-column grid
- `.grid-4` - 4-column grid

**Responsive Breakpoints:**
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns max)
- Desktop: > 1024px (full grid)

### Container

**Classes:**
- `.container` - Max-width wrapper with padding
- Responsive padding adjustments

## Typography

### Font Stack
- Primary: 'Courier New', monospace (cyber aesthetic)
- Fallback: system monospace fonts

### Text Sizes
- h1: 2.5rem (40px)
- h2: 2rem (32px)
- h3: 1.5rem (24px)
- h4: 1.25rem (20px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Text Effects
- `.glow-text` - Animated text glow
- `.text-accent` - Red accent color
- `.text-muted` - Muted gray color

## Animations & Effects

### Hover Effects
- Card lift animation
- Button glow enhancement
- Link color transitions

### Loading States
- Button loading spinner
- Skeleton loading for content
- Progress bar animations

### Page Transitions
- Fade-in animations for cards
- Smooth scrolling
- Route transition effects

## Accessibility Features

### Keyboard Navigation
- Tab order for all interactive elements
- Enter/Space activation for buttons
- Escape key for modals

### Screen Reader Support
- ARIA labels and descriptions
- Semantic HTML structure
- Color-independent information

### RTL Support
- Automatic layout flipping
- Text direction handling
- Icon mirroring where appropriate

## Responsive Design

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Mobile Optimizations
- Touch-friendly button sizes (44px minimum)
- Simplified navigation
- Stacked layouts for complex components

## Implementation Notes

### CSS Architecture
- CSS Variables for theming
- BEM methodology for class naming
- Modular component styles
- Utility classes for common patterns

### JavaScript Integration
- Vanilla JS for core interactions
- Progressive enhancement approach
- No external dependencies for core functionality

### Performance Considerations
- CSS containment for complex layouts
- Lazy loading for images and content
- Optimized animations with `will-change` property

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Modern browser features used:
- CSS Grid and Flexbox
- CSS Custom Properties
- Backdrop-filter for glass-morphism
- Intersection Observer API
