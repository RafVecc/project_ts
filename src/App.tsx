import React from 'react';
import logo from './logo.svg';
import './App.css';
import data_json from './data.json';
import { DataEditor, GridCell, GridCellKind, GridColumn, Item } from '@glideapps/glide-data-grid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@glideapps/glide-data-grid/dist/index.css";

const teste: Record<string, any> = data_json
console.log(teste[0])
// Object.keys(teste).forEach(k => {
//   Object.keys(teste[k]).forEach(j => {
//     teste[k][j] = '' + teste[k][j]
//   })
// });
// console.log(typeof(teste[0].Date))

// const teste = [
//   {
//     firstName: "John",
//     lastName: 123
//   },
//   {
//     firstName: "Maria",
//     lastName: 345
//   },
//   {
//     firstName: "Nancy",
//     lastName: 567
//   },
//   {
//     firstName: "James",
//     lastName: 789
//   }
// ];

const columns: GridColumn[] = [
  {
    title: "Date",
    id: "Date", width: 200
  },
  {
    title: "Domain",
    id: "Domain", width: 200
  },
  {
    title: "Location",
    id: "Location", width: 200
  },
  {
    title: "Transaction count",
    id: "Transaction_count", width: 200
  },
  {
    title: "Value",
    id: "Value", width: 200
  }
]

// const columns: GridColumn[] = [
//   { title: "First Name", width: 100 },
//   { title: "Last Name", width: 100 }
// ];

// function getData([col, row]: Item): GridCell {
//   const person = teste[row];

//   if (col === 0) {
//     return {
//       kind: GridCellKind.Text,
//       data: person.firstName,
//       allowOverlay: false,
//       displayData: person.firstName
//     };
//   } else if (col === 1) {
//     return {
//       kind: GridCellKind.Number,
//       data: person.lastName,
//       allowOverlay: false,
//       displayData: ''+person.lastName
//     };
//   } else {
//     throw new Error();
//   }
// }

function getData([col, row]: Item): GridCell {
  const person = teste[row];
  // console.log(person.Date)
  if (col === 0) {
    return {
      kind: GridCellKind.Number,
      data: person.Date,
      allowOverlay: false,
      displayData: '' + person.Date
    };
  } else if (col === 1) {
    return {
      kind: GridCellKind.Text,
      data: person.Domain,
      allowOverlay: false,
      displayData: person.Domain
    };
  } else if (col === 2) {
    return {
      kind: GridCellKind.Text,
      data: person.Location,
      allowOverlay: false,
      displayData: person.Location
    };
  } else if (col === 3) {
    return {
      kind: GridCellKind.Number,
      data: person.Transaction_count,
      allowOverlay: false,
      displayData: '' + person.Transaction_count
    };
  } else if (col === 4) {
    return {
      kind: GridCellKind.Number,
      data: person.Value,
      allowOverlay: false,
      displayData: '' + person.Value
    };
  } else {
    throw new Error();
  }
}

export default function App() {

  return (
    <DataEditor columns={columns} getCellContent={getData} rows={teste.length} />
  );
};
