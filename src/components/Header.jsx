import { useState } from "react";

function Header({ addAttendance }) {
  const [open, setOpen] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName || !date) {
      alert("Please fill all fields");
      return;
    }

    addAttendance({ studentName, date });

    setStudentName("");
    setDate("");
    setOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <h1 className="text-xl font-semibold">Student Attendance</h1>
          <button
            onClick={() => setOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Add New Student
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl w-96"
          >
            <h2 className="text-lg font-semibold mb-4">New Student</h2>

            <input
              placeholder="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mb-4 px-3 py-2 border rounded"
            />

            <div className="flex justify-end gap-3">
              <button type="button" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Header;