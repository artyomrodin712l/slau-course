import React from "react";
import { Input, Label, FlexBox, Button } from "@ui5/webcomponents-react";
import { Shellbar, InfoLabel, Table, FormInput } from "fundamental-react";

class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.handleRowsChange = this.handleRowsChange.bind(this);
    this.handleColumnsChange = this.handleColumnsChange.bind(this);
    this.handleGetRandomInt = this.handleGetRandomInt.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }
  handleCalculate(){
      this.props.onClickCalculate()
  }
  handleRowsChange(e) {
    this.props.onRowsChange(e.target.value);
  }
  handleColumnsChange(e) {
    this.props.onColumnsChange(e.target.value);
  }
  handleGetRandomInt() {
    this.props.onClickGetRandom()
  }
  render() {
    var tableRowData = this.props.tableRowData;
    var tableData = tableRowData.map((item, j) => {
      var rowData = [];

      item.map((itemRowData, i) => {
        console.log(i);
        rowData.push(
          <FormInput
            aria-label={i + j}
            defaultValue={itemRowData}
            name={i + j}
          />
        );
      });
      return {
        rowData: rowData,
      };
    });
    console.log(tableRowData);
    console.log(tableData);
    return (
      <React.Fragment>
        {console.log(this.props.tableData)}
        <Shellbar
          logo={
            <img
              alt="GGTU"
              src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png"
            />
          }
          productTitle="System of linear algebraic equations"
        />
        <InfoLabel color={7}>
          Enter matrix size<br></br>
        </InfoLabel>
        <FlexBox
          alignItems="Stretch"
          direction="Column"
          justifyContent="Start"
          wrap="NoWrap"
        >
          <Label>Enter rows:</Label>
          <Input
            tooltip="Enter rows"
            type="Text"
            valueState="None"
            value={this.props.rows}
            onChange={this.handleRowsChange}
          />
          <Label>Enter columns:</Label>
          <Input
            tooltip="Enter columns"
            type="Text"
            valueState="None"
            value={this.props.columns}
            onChange={this.handleColumnsChange}
          />
          <FlexBox
            alignItems="Start"
            direction="Row"
            displayInline={false}
            justifyContent="Start"
            wrap="NoWrap"
          >
            <Button
              className=""
              design="Default"
              disabled={false}
              icon="employee"
              iconEnd={false}
              onClick={this.handleGetRandomInt}
              slot=""
              style={{}}
              submits={false}
              tooltip=""
            >
              Random
            </Button>
            <Button
              className=""
              design="Positive"
              disabled={false}
              icon="employee"
              iconEnd={false}
              onClick={this.handleCalculate}
              slot=""
              style={{}}
              submits={false}
              tooltip=""
            >
             Calculate
            </Button>
          </FlexBox>
        </FlexBox>

        {console.log(this.props.headers)}
        <Table
          compact={true}
          condensed={true}
          headers={this.props.headers}
          tableData={tableData}
        />
      </React.Fragment>
    );
  }
}
export default InputData;