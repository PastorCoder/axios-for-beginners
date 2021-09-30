import React from "react";
import "./App.css";
import axios from "axios";

function App() {

  axios.defaults.headers.common["authorization"] = "function  getting token from localStorage"

  const instance = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 1000,
    headers: { "X-Custom-Headers": "foobar"}
  })


  const instanceData = () => {
    instance.get("/users?page=2").then((res) => console.log(res))
  };

  axios.defaults.baseURL = "https://reqres.in/api";

  const getData = () => {
    axios.get("/users?page=2").then(({ data: seeData }) => console.log(seeData));
    // axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => console.log(res));
  };

  const config = {
    data: {
      name: "John Doe",
      job: "Junior Developer",
    },
    headers: {
      "content-type": "application/json",
    },
  };

  const postData = () => {
    axios
      .post("/users?page=2", config)
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };

  const updateData = async () => {
    try{
      const res =  await axios.put("/2",{
        name: "Jane Doe",
        Job: "Senior Developer"
      });
      console.log(res.data);
    }catch(err){
      console.log(err)
    }
  };

  const deleteData = () => {
    axios.delete("/2").then((res) => console.log(res));
  };

  const multiple = () => {
    Promise.all([axios.get("https://reqres.in/api/users?page=2"),
    axios.post("https://reqres.in/api/users?page=2", config)
  ]).then((res) => console.log(res[0],res[1]))
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-3 box1">
            <br />

            <button className="get-btn" onClick={getData}>
              Get
            </button>

            <button className="update-btn" style={style} onClick={updateData}>
              Update
            </button>

            <button className="instance-btn" onClick={instanceData}>
              Instance
            </button>
          </div>
          <br />

          <div className="col-md-3 box2">
            <br />

            <button className="post-btn" onClick={postData}>
              Post
            </button>

            <button className="delete-btn" onClick={deleteData}>
              Delete
            </button>

            <button className="multiple-btn" style={style} onClick={multiple}>
              Multiple
            </button>
            <br />
            <br />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}

export default App;

const style = {
  backgroundColor: "black",
  color: "white",
  padding: "4px 8px",
  border: "none",
  borderRadius: "4px",
  marginBottom: "20px",
  fontWeight: "bold",
  width: "400px",
  height: "30px",
  marginLeft: "120px",
};
