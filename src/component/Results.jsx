import React, { Component } from "react";

class Results extends Component {
  state = {
    Results: [{}]
  };
  async getResultsByName() {
    this.setState({
      Results: []
    });
    if (this.props.name !== "") {
      fetch("http://localhost/ba4/api/Imone/search_by_name.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.props.name
        })
      })
        .then(response => response.json())
        .then(myJson => {
          if (myJson["message"] === "Not Found") {
            alert("NOT FOUND");
            return;
          } else {
            for (let i = 0; i < myJson.data.length; i++) {
              this.setState({
                Results: [
                  ...this.state.Results,
                  {
                    code: myJson["data"][i].code,
                    jarCode: myJson["data"][i].jarCode,
                    name: myJson["data"][i].name,
                    month: myJson["data"][i].month,
                    avgWage: myJson["data"][i].avgWage,
                    avgWage2: myJson["data"][i].avgWage2,
                    numInsured: myJson["data"][i].numInsured,
                    numInsured2: myJson["data"][i].numInsured2,
                    tax: myJson["data"][i].tax,
                    ecoActName: myJson["data"][i].ecoActName,
                    ecoActCode: myJson["data"][i].ecoActCode,
                    municipality: myJson["data"][i].municipality
                  }
                ]
              });
            }
          }
        });
    }
  }
  async getResultsByCode() {
    this.setState({
      Results: []
    });
    if (this.props.code !== "") {
      fetch("http://localhost/ba4/api/Imone/search_by_code.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: this.props.code
        })
      })
        .then(response => response.json())
        .then(myJson => {
          if (myJson["message"] === "Not Found") {
            alert("NOT FOUND");
            return;
          } else {
            for (let i = 0; i < myJson.data.length; i++) {
              this.setState({
                Results: [
                  ...this.state.Results,
                  {
                    code: myJson["data"][i].code,
                    jarCode: myJson["data"][i].jarCode,
                    name: myJson["data"][i].name,
                    month: myJson["data"][i].month,
                    avgWage: myJson["data"][i].avgWage,
                    avgWage2: myJson["data"][i].avgWage2,
                    numInsured: myJson["data"][i].numInsured,
                    numInsured2: myJson["data"][i].numInsured2,
                    tax: myJson["data"][i].tax,
                    ecoActName: myJson["data"][i].ecoActName,
                    ecoActCode: myJson["data"][i].ecoActCode,
                    municipality: myJson["data"][i].municipality
                  }
                ]
              });
            }
          }
        });
    } else {
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.getResultsByName();
    } else if (this.props.code !== prevProps.code) {
      this.getResultsByCode();
    }
  }

  render() {
    if (this.props.name === "" && this.props.code === "") {
      return <div></div>;
    } else {
      return (
        <div className="container-fluid">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">code</th>
                <th scope="col">JarCode</th>
                <th scope="col">Name</th>
                <th scope="col">municipality</th>
                <th scope="col">ecoActCode</th>
                <th scope="col">ecoActName</th>
                <th scope="col">month</th>
                <th scope="col">avgWage</th>
                <th scope="col">numInsured</th>
                <th scope="col">avgWage2</th>
                <th scope="col">numInsured2</th>
                <th scope="col">tax</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Results.map(data => (
                <tr key={data.code + data.month}>
                  <th scope="row">
                    <a href={`/imone/${data.code}/${data.month}`}>
                      {data.code}
                    </a>
                  </th>
                  <td>{data.jarCode}</td>
                  <td>{data.name}</td>
                  <td>{data.municipality}</td>
                  <td>{data.ecoActCode}</td>
                  <td>{data.ecoActName}</td>
                  <td>{data.month}</td>
                  <td>{data.avgWage}</td>
                  <td>{data.numInsured}</td>
                  <td>{data.avgWage2}</td>
                  <td>{data.numInsured2}</td>
                  <td>{data.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Results;
