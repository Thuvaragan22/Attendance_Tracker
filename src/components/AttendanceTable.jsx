import StudentRow from "./StudentRow.jsx";

function AttendanceTable({ students, toggleStatus, updateRemarks }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Roll</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              toggleStatus={toggleStatus}
              updateRemarks={updateRemarks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;