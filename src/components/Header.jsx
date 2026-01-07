import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <h1 className="text-xl font-semibold">Student Attendance</h1>
          <button
            onClick={() => setOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Add New Attendance
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-lg font-semibold mb-4">New Attendance</h2>

            <input
              placeholder="Class name"
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <input
              type="date"
              className="w-full mb-4 px-3 py-2 border rounded"
            />

            <div className="flex justify-end gap-3">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button
                onClick={() => setOpen(false)}
                className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
