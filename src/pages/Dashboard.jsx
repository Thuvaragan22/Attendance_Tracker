import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to Attendance Dashboard
      </h1>

      <Link to="/attendance">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Go to Attendance
        </button>
      </Link>
      </div>
    </div>
  );
}

export default Dashboard;
