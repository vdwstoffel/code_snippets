# Include Stylesheet in HTML

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- set the path to css file-->
  <link rel="stylesheet" href="path/to/file.css" />
  <title>Document</title>
</head>
```

# Reset all values

```css
* {
  /* The width and height of the element include the content, padding, and border. */
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
```

# Grid Display

## Grid Sizing

Create a 2x2 grid

```css
.grid-example {
  display: grid;
  /* the 2nd column will be twice the size of the 2nd column */
  grid-template-columns: 1fr 2fr; /* 1:2 ratio*/
  grid-template-rows: 1fr 1fr; /* 1:1 ration */
  gap: 10px; /* gap between grids*/
}
```

Repeat the same x times: repeat (times, size)

```css
.container {
  display: grid;
  grid-template-columns: repeat(8, 4em);
  grid-template-rows: repeat(8, 4em);
  gap: 10px;
}
```

## Grid Placement

```css
.container {
  grid-column: span 2;
  grid-row: span 3;
}
```

# Center Page

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

# Font Awesome

Adding Font Awesome

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
  integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
  crossorigin="anonymous"
/>
```
