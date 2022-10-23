import { Link } from "react-router-dom";

export default function Posts() {
  const container = {
    display: "grid",
  };
  const containerItem = {
    paddingBottom: "3rem",
  };

  return (
    <div style={container}>
      {[...Array(10)].map((x, i) => (
        <div style={containerItem}>
          dbdfv
          {/* <Link to={`/post/${i + 1}`}>Post/{i + 1}</Link> */}
        </div>
      ))}
    </div>
  );
}
