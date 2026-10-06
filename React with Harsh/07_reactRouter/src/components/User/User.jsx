import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">

        {/* User Image */}
        <img
          src="https://i.pravatar.cc/400?img=12"
          alt="User"
          className="h-64 w-full object-cover"
        />

        {/* Card Content */}
        <div className="p-6 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            User Profile
          </h2>

          <p className="text-lg text-gray-600">
            User:{" "}
            <span className="font-semibold text-orange-600">
              {userid}
            </span>
          </p>

          <button className="mt-5 rounded-lg bg-orange-600 px-6 py-2.5 font-medium text-white transition hover:bg-orange-700">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;