# Task for Front End Developer

## Few simple steps

1. Fork this repo
2. Create a single-page application for a blogging website using Vue.js.
3. Prepare pull request and let us know that you are done

## General guidelines

- Use common sense and don't spend too much time on a single task if you get stuck
- This task might not specify every single detail of how it should be implemented. When in doubt, improvise and go with a solution that you think would work best for a project like this.
- Optional tasks are not required for you to complete. But if you're going to do them, start with them as they require some extra initial set up.

## Requirements

- Use the latest version of Vue.js (`axios` for making HTTP requests). You can use NPM for this but it is not necessary. Locally downloaded files or files from a CDN are fine too.
- Use Boostrap 4
- Use the API to retrieve data (details below)
- Make sure the app is responsive and looks clean
- Use `vue-router` to manage different pages and their URLs
- Use components where applicable

## Functional requirements

The website should have the following pages:

**Homepage**

Should contain a list of all blog posts.

**Post page**

Should contain post title, full content, post author details and a list of comments for the post being viewed. Should also contain a link to the post's edit page.

**Post creation page**

Should contain a form for creating a new post. It should have three inputs: author (a drop-down of users), title and post body. Once the form is submitted it should make a `POST` request to a corresponding API endpoint with the all inputs in request body.

**Post edit page**

Form should be the same as with post creation. The only difference is that inputs should be pre-filled and that the app should run a `PUT` request to another endpoint.

## Optional tasks

- Use [vue-templates](https://github.com/vuejs-templates/webpack) package to set up your development environment (or set up your own webpack config)
- Write your components in `.vue` files
- If you proceed with `vue-templates`, make sure ES-lint (`npm run lint`) produces no errors
- Make sure app is responsive
- Add custom styling but don't go overboard: keep things simple
- Use CSS preprocessor (SCSS preferred)
- Use Laravel framework for Back-End and DB manipulation instead of https://jsonplaceholder.typicode.com/
- Use Laravel Authentication

## API guidelines

Use this API service that provides random data for a blog project like this:
https://jsonplaceholder.typicode.com/

For example, to retrieve a list of all available posts you would run a `GET` request to the following URL:

```
https://jsonplaceholder.typicode.com/posts
```

Similarly, you would run a `PUT` request to the following URL to update a post with an ID of `3`:

```
https://jsonplaceholder.typicode.com/posts/3
```

Please note that when updating or creating new entries the API might not actually save the changes. That is fine as long as you actually make the necessary `POST` / `PUT` requests.

### Few tips

- We always prefer the code that is robust, easy to read and re-usable
- Make design user friendly
- Have fun!
