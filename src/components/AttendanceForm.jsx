function AttendanceForm({ search, setSearch, present, absent, total }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-lg font-semibold mb-6">Attendance Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block mb-2">Select Class</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Attendance Date</label>
          <input type="date" className="w-full px-4 py-2 border rounded-lg" />
        </div>

        <div>
          <label className="block mb-2">Search Student</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter student name..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="flex items-end">
          <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg">
            Mark Attendance
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="flex gap-6 border-t pt-4">
        <span>Present: {present}</span>
        <span>Absent: {absent}</span>
        <span>Total: {total}</span>
      </div>
    </div>
  );
}

export default AttendanceForm;
