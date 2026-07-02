import { useState } from "react";
import ShowResults from "./ShowResults";

function App() {
  const [username, setUsername] = useState("");
  const [results, setResults] = useState(null);

  async function fetchGitHubProfile(username) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();

      setResults(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>GitHub Profile Search</h1>

      <form>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            if (username.trim() === "") return;

            fetchGitHubProfile(username);
          }}
        >
          Search
        </button>
      </form>

      <ShowResults results={results} />
    </div>
  );
}

export default App;
