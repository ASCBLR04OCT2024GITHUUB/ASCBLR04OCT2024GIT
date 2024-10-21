:books: **Angular**  

:beginner: _**Creating your first component**_  
```ts
import {Component} from '@angular/core';

@Component(
  {
    "selector" : 'app-root',
    'template' : `
    <h1>A good app by us! {{message}}</h1>😊
    Result of 1 + 1 = {{1+1}}
    <br> Original Price : 100
    <br> Discounted Price : {{100*.9}}
    `,
    styles : `h1 {
    color : red;
    }
    `,
      standalone : true,
  }
)
export class AppComponent{  
  message:string = 'Happy Lunch!';
}
```

