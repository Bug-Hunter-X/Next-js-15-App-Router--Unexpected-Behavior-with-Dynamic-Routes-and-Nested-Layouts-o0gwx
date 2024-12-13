# Next.js 15 App Router Bug: Unexpected Behavior with Dynamic Routes and Nested Layouts

This repository demonstrates an unexpected behavior in Next.js 15's App Router when using dynamic routes and nested layouts.  The issue involves a mismatch between the expected route and the actual component rendered, leading to incorrect content display or other unexpected behavior.

## Bug Description

When navigating to a dynamic route within a nested layout, the route parameters are not correctly passed down to the nested components, causing them to render unexpected content or errors. This is particularly problematic when dealing with complex applications with multiple nested layouts and deeply nested dynamic routes.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to various dynamic routes, for example, `/posts/1`, `/posts/2`, etc.
5. Observe the unexpected behavior, where the correct content based on the dynamic route segment is not rendered.

## Expected Behavior

The application should render content correctly depending on the dynamic route parameter. For example, `/posts/1` should display content specific to post ID 1.

## Actual Behavior

The application either renders a default or incorrect content, indicating the dynamic route parameters are not being properly passed to the nested components within the layout.