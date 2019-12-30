import React from "react";
import MaterialTable from "material-table";
import PostData from "../rawData.json";
export default function DataTable() {
  const [state] = React.useState({
    columns: [
      { title: "Title", field: "title" },
      { title: "Topic", field: "topic" },
      { title: "Year", field: "start_year", type: "numeric" },
      {
        title: "Intensity",
        field: "intensity",
        type: "numeric"
      },
      { title: "Sector", field: "sector" },
      { title: "Region", field: "region" },
      { title: "Pestle", field: "pestle" },
      { title: "Country", field: "country" }
    ],
    data: PostData
  });

  return (
    <MaterialTable
      title="Data_Table"
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: "show_chart",

          onClick: (event, rowData) => window.open(rowData.url)
        }
      ]}
      options={{
        headerStyle: {
          backgroundColor: "#2980b9",
          color: "#FFF"
        },
        rowStyle: {
          backgroundColor: "#EEE"
        },
        exportButton: true
      }}
    />
  );
}
