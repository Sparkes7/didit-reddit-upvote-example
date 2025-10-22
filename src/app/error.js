"use client";

export default function Error({ error }) {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1>An error has occured!</h1>
      <p>{error.message}</p>
    </div>
  );
}
