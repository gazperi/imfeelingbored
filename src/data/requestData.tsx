// REQUEST DATA
/*
    TODO
    - Basic data request
    - Loading
    - Erros
    - Receive params and default
*/

import { useEffect, useState } from "react";
import axios from "axios";

function requestData() {
  const apiURl = "https://www.boredapi.com/api/activity";

  useEffect(() => {
    axios.get(apiURl).then((r) => {
      console.log(r.data);
    });
  });

  return;
}

export { requestData };
