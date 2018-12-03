const initState = {};

const ipreducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_IP":
      console.log("created ip", action.ip);
      break;
    default:
      break;
  }
  return state;
};

export default ipreducer;
