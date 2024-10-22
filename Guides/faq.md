:question: **Adding image**
- The src/assets folder is the standard location for static files like images, fonts, and other assets in an Angular project.

```sh
your-project/
└── src/
    ├── assets/
    │   └── images/
    │       ├── image1.jpg
    │       └── image2.png
    └── app/
```

```html
<!-- The src attribute should use a relative path starting from the src directory. -->
<img src="assets/images/image1.jpg" alt="Description of Image 1">
```
```css
/* In component-name.component.css */
/* Use an absolute path starting with a forward slash (/) when referencing images in CSS files.
This tells the browser to start from the root of the application. */
.background {
  background-image: url('/assets/images/image2.png');
}
```





