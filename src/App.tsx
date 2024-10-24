//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App () {
const [alertVisible, setAlerrtVisiblity] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={ () => setAlerrtVisiblity(false)}> My alert</Alert>}
      <Button  onClick={() => setAlerrtVisiblity(true) }>My Button</Button>
    </div>
  )
}

//   return (
//     <div>
//       <Alert>
//       Hello <span>world!</span> 
//         </Alert>
//     </div>
//   )
// }
  // let items = ["Nepal", "Bhutan", "Banladesh", "India"];

  // const handleSelecteItem = (item: string) => {
  //   console.log(item);
  // }
//   return (
//   <div>
//     /* <ListGroup items={items} heading= {"Country"} onSelectItem={handleSelecteItem} /> */
//     </div> 
//     );
// }

export default App; 