import { useEffect, useState } from "react";

function App() {
  const [bookCout, setBookCout] = useState(null);

  useEffect(() => {
    fetch("https://us-central1-pirelly360.cloudfunctions.net/book-demo/count")
      .then((res) => {
        return res.josn();
      })
      .then((data) => setBookCout(data))
      .catch((err) => console.log(err));

    console.log(bookCout, "is a data get from api");
  }, []);
  return (
    <div>
      <h1>shervan</h1>
    </div>
  );
}

export default App;
