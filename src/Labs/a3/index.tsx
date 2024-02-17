import JavaScript from "./JavaScript";
import Styles from "./Styles";
import Classes from "./classes";
import PathParameters from "./routing/PathParameters";
import Highlight from "./Highlight";
import Add from "./Add";
function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
      <Add a={3} b={4} />
    </div>
  );
}
export default Assignment3;
