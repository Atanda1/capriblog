import { Posts } from "./Posts.island";

export function Home() {
  return (
    <main>
      <h1>
        Welcome To Our Rick and Morty Blog
      </h1>
      <h5>Each blog post contains information about individual characters in the series.</h5>
      <Posts/>
    </main>
  );
}
