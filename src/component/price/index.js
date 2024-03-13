import "./index.css";
import Box from "../box";

export default function Price({
  price,
  discount,
  currency,
  cleaning,
  service,
  checkin,
  checkout,
}) {
  return (
    <Box className="price">
      <div className="price__header">
        <span className={`price__value ${discount ? "price__value--has-discount" : ""}`}>
          {currency}
          {price}
        </span>
        {discount && (
          <span className={`price__value`}>
            {currency}
            {discount}
          </span>
        )}
      </div>
  </Box>;
  )
}
