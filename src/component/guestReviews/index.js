import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function GuestReviews({ list }) {
  return (
    <div className="guestReviews__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="guestReviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="guestReviews">
      <div className="guestReviews__header">
        <span className="guestReviews__name">{guestName}</span>
        <span className="guestReviews__rating">Рейтинг: {rating}</span>
      </div>
      <span className="guestReviews__review">{review}</span>
    </Box>
  );
}
