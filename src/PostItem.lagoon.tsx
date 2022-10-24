import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function PostItem() {
  let { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const fetcher = (url: string) =>
axios.get(url).then((res: any) => res.data);
  const { data, error } = useSWR(url, fetcher, { suspense: true });
  if (error) return <div>failed to load</div>;

  return (
    <main>
      <h1>{data.name}</h1>
      <img src={data.image}></img>
      <section>Status: {data.status}</section>
      <section>Species: {data.species}</section>
      <section>Number of episodes featured: {data.episode.length}</section>
      <section>
        <h5>Location: {data.location.name}</h5>
        <h5>Gender: {data.gender}</h5>
      </section>
      <Link to="/">Back Home</Link>
    </main>
  );
}
