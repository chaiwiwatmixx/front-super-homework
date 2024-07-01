/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import CardHomeWork from "../components/CardHomeWork";

function TeacherHome() {
  const [homeworks, setHomeworks] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("homeworks = ", homeworks)


  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const rs = await axios.get("http://localhost:8888/homework", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHomeworks(rs.data.homeworks);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  if (loading) {
    return <p className="text-xl">Loading...</p>;
  }

  return (
    // <>
    //   <div>TeacherHome</div>
    //   <hr />
    //   {JSON.stringify(homeworks)}
    // </>
    <>
      <div className="w-4/5 mx-auto mt-8">
        <h1 className="text-xl text-center mb-4">All Homeworks</h1>
        {homeworks.map((hw, index) => (
          <CardHomeWork key={index} {...hw} />
        ))}
      </div>
    </>
  );
}

export default TeacherHome;
