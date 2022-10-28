import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContactQuery } from "../services/contactsApi";
import "./UserInfo.css";

const UserInfo = () => {
  const { id } = useParams();
  const {data, error, isFetching, isLoading} = useContactQuery(id!);
  
  useEffect(() => {
    if(error) {
      toast.error("Something went wrong !");
    }
  }, [error])
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <table>
            <tr>
              <td>
                  <b>ID:</b>
              </td>
              <td>
                {id}
              </td>
            </tr>
            <tr>
              <td>
                <b>Name :</b>
              </td>
              <td>{data && data.name}</td>
            </tr>
            <tr>
              <td>
                <b>Email:</b>
              </td>
              <td>
                {data && data.email}
              </td>
            </tr>
            <tr>
              <td>
                <b>Contact:</b>
              </td>
              <td>{data && data.contact}</td>
            </tr>
          </table>
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
