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
      {[...Array(10)].map((x, i) => {
        const link = `/post/${i + 1}`
        return (
          <div style={containerItem}>
            <Link to={link}>Post/{i + 1}</Link>
          </div>
        );
      })}
    </div>
  );
}
