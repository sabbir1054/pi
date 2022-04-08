import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { db } from "../../../Firebase/DbInit";

const SingleUmbrella = ({ umbrella }) => {
  const [umbrellaData, setUmbrellaData] = useState([]);
  const [returnData, setReturnData] = useState("");
    const [status, setStatus] = useState("Not return");
  

  useEffect(() => {
    //umbrella data scan
    const umbrellaCollectRef = collection(db, "umbrella");
    const umbrellaMake = onSnapshot(umbrellaCollectRef, (snapshot) => {
      setUmbrellaData(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      umbrellaMake();
    };
  }, []);

  let getId;
    let getStatus;
  const umDb = (id) => {
    const docRef = doc(db, "umbrella", id);
    updateDoc(docRef, { status })
      .then((res) => {
        //  console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  for (let i = 0; i < umbrellaData.length; i++) {
    const element = umbrellaData[i];

    if (umbrella.stu_id == element.data.take_um_id) {
      //    setGetId(element.id);
        getId = element.id;
        getStatus = element.data.status;
        
      // set machine mood status
    }
  }

    const statusHandler = () => {
      
    setStatus("Return done");
    umDb(getId);
  };

  return (
    <tr>
      <td>{umbrella.stu_id}</td>
      <td>{umbrella.name}</td>
      <td>{umbrella.email}</td>
      <td>{umbrella.class}</td>
      <td>{umbrella.section}</td>
      <td>
        {
          <div onClick={statusHandler}>
            <h4>
              <button
                className={`btn btn-warning text-dark`}
                onClick={statusHandler}
              >
                {getStatus}
              </button>
            </h4>
          </div>
        }

   
      </td>
    </tr>
  );
};

export default SingleUmbrella;
