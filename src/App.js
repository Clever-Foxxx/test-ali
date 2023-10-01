import { useEffect, useState } from "react";

function App() {
  const [bookCount, setBookCount] = useState(null);

  useEffect(() => {
    fetch("https://us-central1-pirelly360.cloudfunctions.net/book-demo/counter")
      .then((res) => res.json()) // Fix the typo here
      .then((data) => {
        setBookCount(data);
        console.log(data, "is data gotten from the API");
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(bookCount, "book count");
  return (
    <div>
      <h1>shervan</h1>
    </div>
  );
}

export default App;
