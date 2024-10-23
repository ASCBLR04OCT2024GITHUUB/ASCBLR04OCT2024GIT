:writing_hand: **_Angular project structure:_**  
```sh
my-angular-app/
├── public/                   # Public assets
│   └── another-image.jpg     # Example image in public folder
├── src/                      # Source files
│   ├── app/                  # Angular components, services, etc.
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/               # Static assets (images, fonts, etc.)
│   │   └── background.jpg    # Example image in assets folder
│   ├── environments/         # Environment-specific configuration
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico           # Favicon
│   ├── index.html            # Main HTML file
│   ├── main.ts               # Main entry point for Angular
│   ├── polyfills.ts          # Polyfills for older browsers
│   ├── styles.css            # Global styles
│   ├── test.ts               # Test entry point
│   └── tsconfig.app.json     # TypeScript configuration for the app
├── angular.json              # Angular CLI configuration
├── package.json              # Node.js dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── tslint.json               # TSLint configuration
```

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