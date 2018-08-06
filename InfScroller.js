import React from 'react';
import ReactDOM from 'react-dom';
import { InfiniteLoader, List } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

// This example assumes you have a way to know/load this information
const remoteRowCount = 20
                                                                          
var list = ['1','2','3','4','5','6','7','8','9','10',];

function isRowLoaded ({ index }) {
  return !!list[index];
}

function loadMoreRows ({ startIndex, stopIndex }) {
  return fetch(`http://localhost:59549/api/values/${startIndex}/${stopIndex}`)
  .then(function(response) { return response.json(); })
  .then(function(data) {
      list = list.concat(data);
    }
  )};


function rowRenderer ({ key, index, style}) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}
  class InfLoader extends React.Component {
    render() {
      return (
        <InfiniteLoader
    isRowLoaded={isRowLoaded}
    loadMoreRows={loadMoreRows}
    rowCount={remoteRowCount}
  >
    {({ onRowsRendered, registerChild }) => (
      <List
        height={200}
        onRowsRendered={onRowsRendered}
        ref={registerChild}
        rowCount={remoteRowCount}
        rowHeight={20}
        rowRenderer={rowRenderer}
        width={300}
      />
    )}
  </InfiniteLoader>
      );
    }
  }
  
  export default InfLoader;
  