import { db } from "@/db";
import Image from "next/image";
import Link from "next/link";

export default async function UserPage({ params }) {
  const { userId } = await params;
  console.log(userId);

  const { rows: users } = await db.query(`SELECT * FROM users WHERE id = $1`, [
    userId,
  ]);
  const user = users[0];

  const { rows: posts } = await db.query(
    `SELECT * FROM posts WHERE user_id = $1`,
    [user.id]
  );
  console.log(posts);

  return (
    <>
      <div className="flex gap-10 justify-center items-center">
        <Image
          className="rounded-full"
          src={user.image}
          alt={`${user.name}'s profile picture`}
          width={150}
          height={150}
        />
        <h1 className="text-3xl">{user.name}</h1>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col">
          <h2>{`Posts by ${user.name}`}</h2>
          {posts.map((post) => {
            return (
              <Link
                key={`${post.id}`}
                href={`/post/${post.id}`}
                className="hover:underline"
              >
                {post.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
