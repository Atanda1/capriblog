import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function PostItem() {
  let { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const fetcher = async (url: string) =>
    await axios.get(url).then((res: any) => res.data);
  const { data, error } = useSWR(url, fetcher, { suspense: true });
  if (error) return <div>failed to load</div>;

  return (
    <main>
      <h1>{data.name}</h1>
      <img src={data.image}></img>
      <h3>Status: {data.status}</h3>
      <h5>Species: {data.species}</h5>
      <h5>Number of episodes featured: {data.episode.length}</h5>
        <h5>Location: {data.location.name}</h5>
        <h5>Gender: {data.gender}</h5>
      <Link to="/">Back Home</Link>
    </main>
  );
}
