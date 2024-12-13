```javascript
// app/layout.js

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

// app/page.js

export default function Page() {
  return (
    <div>This is the home page</div>
  );
}

// app/posts/[postId]/page.js

export default function Post({ params }) {
  return (
    <div>This is post {params.postId}</div>
  );
}
```