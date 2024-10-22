:writing_hand: **_Working with images_**  

- angular.json
```ts
// inside build:
            "assets": [
              {
                "glob": "**/*",
                "input": "public",
                "output": "/public"
              },
              {
                "glob": "**/*",
                "input": "src/assets",
                "output": "/assets"
              }
            ],
```
- app.component.html
```html
<img src="assets/background.jpg" alt="background">
```
- app.component.css

```css
/* src/app/app.component.css */
body {
  background-image: url('assets/background.jpg');
  background-size: cover; /* Optional: Adjusts the size of the background image. */
  /* scale the background image to be as large as possible so that the background area is completely covered by the background image. */
  background-repeat: no-repeat; /* Optional: Prevents the background image from repeating */
  background-position: center; /* Optional: Centers the background image */
}
```

- index.html
```html
<head>
  <meta charset="UTF-8">
  <title>My Angular App</title>
  <style>
    body {
      background-image: url('assets/background.jpg');
      background-size: cover; /* Adjusts the size of the background image */
      background-repeat: no-repeat; /* Prevents the background image from repeating */
      background-position: center; /* Centers the background image */
    }
  </style>
</head>
<body>
</body>

```