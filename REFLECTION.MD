# Reflection

## Requirements

✅ Deployed to Vercel

## Stretch

✅ Dynamic Metadata to make page title the post title

✅ Error page to handle the error when attempting to vote while not logged in

✅ Stop a user from voting more than once - This logic is already implemented

✅ User Profiles

## Dynamic Metadata

To get dynamic metadata I knew that we needed to use a function to generate new metadata for the page, but I couldn't remember the exact steps. To resolve this, I checked out the NextJS documentation and found the appropriate page to follow.

I wanted the title of the post as the page title, so to do this, I queried the database to `SELECT` the `title` of the post where the `id` matched the `params.postId` of the route.

## Error page

The codebase already throws an error to state that voting cannot happen when the user is not logged in. To handle this error better, I created an `error.js` page in the `/app` route to handle the error. To do this, I first ensured that the file had the `"use client"` directive as errors are client sided, and used the `{error}` parameter to display the bespoke error thrown from the existing code using `{error.message}`.

## Stop a user from voting multiple times

Looking at the codebase, I can see that there is already logic within the Vote.jsx component that checks if there is an existing vote. If there is an existing vote and the new vote is the same as the existing, it will essentially toggle the vote and `DELETE` the vote from the table. If the new vote is not the same as the previous vote, then it runs an `UPDATE` SQL command to change the vote. If there is no vote at all, it will `INSERT` a new vote.

I've attempted to break the logic by playing around with the voting, but through manual testing, i've concluded that additional validation isn't required as its currently impossible to vote twice with the implemented logic.

## Tiptap Implementation

I tried to implement Tiptap into the website however I ran into a problem trying to understand the documentation. I felt as though the documentation implied some knowledge that I didn't have about Tiptap and how it worked. I found myself darting across pages in the documentation to different points instead of there being a clear guide on how to implement basic expected functionality that you would use Tiptap for. I got my Tiptap component to render to the page, but didn't understand how to take the content values for my form data. Configuring the editor was particularly confusing, especially since the documentation was in TypeScript and the syntax was harder to follow.

I spent a lot of time playing with Tiptap to try get it working, but eventually decided that ultimately it wasn't worth the time spent as I wasn't feeling like I was even remotely close to getting it working. There are some remnants of Tiptap in the project to show some attempt but is not implemented.

## User Profiles

Created a dynamic endpoint for the user: `/user/:userId`. Linked to this on the `<PostList>` component so user profile page can be accessed by clicking the users name next to the post.

After reading the codebase, I realised that you can destructure a `SELECT` query to the rows specifically and used that way of making the code cleaner. Typically, I would do something such as:

```javascript
const query = await db.query(`SELECT...`);
const data = query.rows;
```

This time i've simply destructured the query to access the rows specifically as such:

```javascript
const { rows: data } = await db.query(`SELECT...`);
```

This way, `data` as a variable is already the result of the `rows` from my database query.

This is very useful and will use this more in the future.

## Resources Used

[Resource: NextJS docs - generate Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
