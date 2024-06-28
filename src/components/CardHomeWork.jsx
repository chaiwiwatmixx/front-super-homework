export default function CardHomeWork({
  title,
  status,
  startDate,
  dueDate,
  description,
}) {
  return (
    <div className="border rounded p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-sm mt-2 px-3 py-1 border border-red-400 text-red-400 rounded-full hover:bg-red-100 transition duration-200">
          {status}
        </span>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500 mb-1">start: {startDate}</p>
        <p className="text-sm text-gray-500 mb-1">due date: {dueDate}</p>
      </div>
      <p className="mt-2">{description}</p>
    </div>
  );
}
