import { useEffect, useState } from "react";
import Header from "../components/Header";
import AttendanceTable from "../components/AttendanceTable";
import Form from "../components/AttendanceForm";

function AttendancePage() {
  // ✅ Load ONLY from localStorage
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  // ✅ Save EVERY change (remarks, status, add student)
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addAttendance = ({ studentName, date }) => {
    setStudents((prev) => [
      ...prev,
      {
        id: Date.now(),
        roll: String(prev.length + 1).padStart(3, "0"),
        name: studentName,
        date,
        status: "absent",
        remarks: "",
      },
    ]);
  };

  const toggleStatus = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "present" ? "absent" : "present" }
          : s
      )
    );
  };

  const updateRemarks = (id, value) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, remarks: value } : s))
    );
  };

  return (
    <div className="p-6 space-y-6">
      <Header addAttendance={addAttendance} />

      <AttendanceTable
        students={students}
        toggleStatus={toggleStatus}
        updateRemarks={updateRemarks}
      />

      <Form
        search={search}
        setSearch={setSearch}
        present={students.filter((s) => s.status === "present").length}
        absent={students.filter((s) => s.status === "absent").length}
        total={students.length}
      />
    </div>
  );
}

export default AttendancePage;