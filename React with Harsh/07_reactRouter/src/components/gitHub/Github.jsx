import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const fetchGithubUser = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username.trim()}`
  );

  if (!response.ok) {
    throw new Error("GitHub user not found");
  }

  return response.json();
};

function Github() {
  const initialData = useLoaderData();

  const [username, setUsername] = useState("hiteshchoudhary");
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async (e) => {
    e.preventDefault();

    const searchName = username.trim();

    if (!searchName) {
      setError("Please enter a GitHub username");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const user = await fetchGithubUser(searchName);
      setData(user);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Search */}
      <form
        onSubmit={searchUser}
        className="mx-auto mb-8 flex max-w-xl gap-3"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-orange-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Error */}
      {error && (
        <p className="mb-6 text-center font-semibold text-red-600">
          {error}
        </p>
      )}

      {/* User Card */}
      {!error && data && (
        <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-gray-700 text-center text-white shadow-xl">

          <img
            src={data.avatar_url}
            alt={`${data.login}'s profile`}
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold">
              {data.name || data.login}
            </h1>

            <p className="mt-2 text-gray-300">
              @{data.login}
            </p>

            <div className="mt-5 space-y-2 text-lg">
              <p>
                Followers:{" "}
                <span className="font-bold text-orange-400">
                  {data.followers}
                </span>
              </p>

              <p>
                Following:{" "}
                <span className="font-bold">
                  {data.following}
                </span>
              </p>

              <p>
                Repositories:{" "}
                <span className="font-bold">
                  {data.public_repos}
                </span>
              </p>
            </div>

            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-lg bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-700"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}

    </div>
  );
}

export default Github;

/* React Router Loader */
export const githubInfoLoader = () =>
  fetchGithubUser("hiteshchoudhary");


