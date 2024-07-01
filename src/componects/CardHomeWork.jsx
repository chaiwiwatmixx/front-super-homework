import { dateThai } from "../utils/dateThai";

export default function CardHomeWork({
  subject,
  published,
  startdate,
  duedate,
  question,
}) {
  return (
    <div className="border rounded p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2 items-center">
          <h2 className="text-lg font-semibold">{subject?.title}</h2>
          <span className="text-gray-400 text-xs mt-2 px-3 border  rounded-sm transition duration-200">
            {published ? "published" : "Un-published"}
          </span>
        </div>
        <span className="text-sm mt-2 px-3 py-1 border border-red-400 text-red-400 rounded-full hover:bg-red-100 transition duration-200">
          delete
        </span>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500 mb-1">
          start: {dateThai(startdate)}
        </p>
        <p className="text-sm text-gray-500 mb-1">
          due date: {dateThai(duedate)}
        </p>
      </div>
      <p className="mt-2">{question}</p>
    </div>
  );
}
