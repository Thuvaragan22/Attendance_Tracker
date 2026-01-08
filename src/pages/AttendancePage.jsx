import { useState, useEffect } from "react";
import Header from "../components/Header";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../omponents/AttendanceTable";
const initialStudents = [
  { id: 1, roll: "001", name: "Saji", status: "present", remarks: "" },
  { id: 2, roll: "002", name: "Api", status: "absent", remarks: "" },
  { id: 3, roll: "003", name: "Kapi", status: "present", remarks: "" },
  { id: 4, roll: "004", name: "Thuva", status: "absent", remarks: "" },
  { id: 5, roll: "005", name: "Saran", status: "present", remarks: "" },
  { id: 6, roll: "006", name: "Roni", status: "absent", remarks: "" },
];
function AttendancePage() {
  // :white_tick: Load from localStorage
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("attendance_students");
    return saved ? JSON.parse(saved) : initialStudents;
  });
  const [search, setSearch] = useState("");
  // :white_tick: Save to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem(
      "attendance_students",
      JSON.stringify(students)
    );
  }, [students]);
  // Toggle Present / Absent
  const toggleStatus = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "present" ? "absent" : "present",
            }
          : student
      )
    );
  };
  // :white_tick: Update remarks (auto-saved)
  const updateRemarks = (id, value) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, remarks: value } : s
      )
    );
  };
  // Search
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );
  // Stats
  const total = students.length;
  const present = students.filter((s) => s.status === "present").length;
  const absent = total - present;
  // Export CSV
  const exportCSV = () => {
    const header = "Roll,Name,Status,Remarks\n";
    const rows = students
      .map(
        (s) => `${s.roll},${s.name},${s.status},${s.remarks}`
      )
      .join("\n");
    const blob = new Blob([header + rows], {
      type: "text/csv",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "attendance.csv";
    a.click();
  };
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <AttendanceForm
          search={search}
          setSearch={setSearch}
          present={present}
          absent={absent}
          total={total}
        />
        {/* Summary Dashboard */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            Total: {total}
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            Present: {present}
          </div>
          <div className="bg-red-100 p-4 rounded shadow">
            Absent: {absent}
          </div>
        </div>
        <AttendanceTable
          students={filteredStudents}
          toggleStatus={toggleStatus}
          updateRemarks={updateRemarks}
        />
        <div className="flex justify-end mt-6">
          <button
            onClick={exportCSV}
            className="border px-6 py-2 rounded-lg"
          >
            Export CSV
          </button>
        </div>
      </main>
    </>
  );
}
export default AttendancePage;