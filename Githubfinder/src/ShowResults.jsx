function ShowResults({ results }) {
  if (!results) return null;

  return (
    <div>
      <img src={results.avatar_url} alt={results.login} width="150" />

      <h2>{results.name}</h2>

      <p>{results.bio}</p>

      <p>Followers: {results.followers}</p>

      <p>Following: {results.following}</p>

      <p>Public Repositories: {results.public_repos}</p>
    </div>
  );
}

export default ShowResults;