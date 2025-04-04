import React from "react";
import XLSX from "xlsx";
import { make_cols } from "./makeColumn";
import { SheetJSFT } from "./types.js";

/*install xlsx*/

export class ExcelReader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      file: {},
      data: [],
      cols: [],
      result: [],
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  }

  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws["!ref"]) }, () => {
        //console.log(JSON.stringify(this.state.data, null, 2));
      });
    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
      this.setState({ result: this.state.file });
    } else {
      reader.readAsArrayBuffer(this.state.file);
      this.setState({ result: this.state.file });
    }
  }
  render() {
    return (
      <div>
        <br />
        <input
          type="file"
          className="form-control"
          id="file"
          accept={SheetJSFT}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Get Json" onClick={this.handleFile} />
        <p>{JSON.stringify(this.state.data, null, 2)}</p>
      </div>
    );
  }
}

export default ExcelReader;
