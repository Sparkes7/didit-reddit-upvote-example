# Reflection

## Requirements

✅ Deployed to Vercel

## Stretch

✅ Dynamic Metadata to make page title the post title
✅ Error page to handle the error when attempting to vote while not logged in
✅ Stop a user from voting more than once - This logic is already implemented

## Stop a user from voting multiple times

Looking at the codebase, I can see that there is already logic within the Vote.jsx component that checks if there is an existing vote. If there is an existing vote and the new vote is the same as the existing, it will essentially toggle the vote and `DELETE` the vote from the table. If the new vote is not the same as the previous vote, then it runs an `UPDATE` SQL command to change the vote. If there is no vote at all, it will `INSERT` a new vote.

I've attempted to break the logic by playing around with the voting, but through manual testing, i've concluded that additional validation isn't required as its currently impossible to vote twice with the implemented logic.

## Resources Used

[Resource: NextJS docs - generate Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
