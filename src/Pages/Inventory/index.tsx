import BoxWrapper from "../../Components/BoxWrapper";
import PaginationTable from "../../Components/Table";
import ProductDetails from "../../Components/ProductDetail";

import "./index.css";
function Inventory() {
  return (
    <BoxWrapper>
      <div className="inventory">
        <ProductDetails />
      </div>
      <div className="products">
        <PaginationTable />
      </div>
    </BoxWrapper>
  );
}

export default Inventory;
