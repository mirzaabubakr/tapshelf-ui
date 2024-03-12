import { inventoryData } from "../../Services/Constants/Products";

export default function ProductDetails() {
  return (
    <>
      <h2>Overall Inventory</h2>
      <div className="inventory-items">
        {inventoryData.map((item, index) => (
          <div key={index} className={`inventory-card ${item.type}`}>
            <h3>{item.title}</h3>
            <div>
              {item.values.map((value, idx) => (
                <h4 key={idx}>{value}</h4>
              ))}
            </div>
            <div>
              {item.subValues.map((subValue, idx) => (
                <span key={idx}>{subValue}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
