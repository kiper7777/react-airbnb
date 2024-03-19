import { Fragment } from "react";
import Box from "../box";
import Heading from "../heading";
import "./index.css";
import ListItem from "../list-item";

export default function Attractions({ list }) {
  return (
    <Box shadow>
      <ul className="attractions__block">
        <Heading border>Пам'ятки поблизу</Heading>

        <li className="attractions">
          {list.map(({ id, ...rest }) => (
            <Fragment key={id}>
              <Item {...rest} />
            </Fragment>
          ))}
        </li>
      </ul>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem>
      <a className="attractions__name" href={link}>
        {name}
      </a>
    </ListItem>
  );
}
