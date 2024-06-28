import CardHomeWork from "../components/CardHomeWork";

export default function TeacherHome() {
  const homeworks = [
    {
      title: "HTML",
      status: "delete",
      startDate: "พฤ. 23 พ.ค. 2567",
      dueDate: "พ. 22 พ.ค. 2567",
      description: "How HTTP work?",
    },
    {
      title: "CSS",
      status: "delete",
      startDate: "พฤ. 23 พ.ค. 2567",
      dueDate: "ศ. 24 พ.ค. 2567",
      description: "CSS stand for...?",
    },
  ];
  return (
    <div className="w-4/5 mx-auto mt-8">
      <h1 className="text-xl text-center mb-4">All Homeworks</h1>
      {homeworks.map((hw, index) => (
        <CardHomeWork key={index} {...hw} />
      ))}
    </div>
  );
}
