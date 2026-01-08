function StudentRow({ student, toggleStatus, updateRemarks }) {
  return (
    <tr className="border-b">
      <td className="p-2">{student.roll}</td>
      <td className="p-2">{student.name}</td>

      <td className="p-2">
        <button
          onClick={() => toggleStatus(student.id)}
          className={`px-3 py-1 rounded ${
            student.status === "present"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {student.status}
        </button>
      </td>

      <td className="p-2">
        <input
          value={student.remarks}
          onChange={(e) =>
            updateRemarks(student.id, e.target.value)
          }
          placeholder="Add remark"
          className="w-full border rounded px-2 py-1"
        />
      </td>
    </tr>
  );
}

export default StudentRow;