import React, { PropTypes } from 'react';

// Components.
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  CheckBox,
} from '../components/';

// Render the table cell content
// const renderTableCellContent = (order) => {
//   if (order)
// }

const PackagesTable = ({
  campaignSelected,
  campaignTable,
  onReceivedOrder
}) => {
  return (
    <TableContainer>
      <TableHead titles={campaignTable.titles} />
      {campaignSelected.zones.map((zone, zoneKey) => (
        <TableRow key={`${zone.id}_${zoneKey}`}>
          {zone.orders.map((order, orderKey) => (
            <TableCell key={`${order.orderId}_${orderKey}`}>
              {/*{if()}*/}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableContainer>
  );
}

PackagesTable.propTypes = {
  campaignsTable: PropTypes.shape(),
  campaignSelected: PropTypes.string,
};

export default PackagesTable;
