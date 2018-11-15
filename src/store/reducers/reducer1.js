let time = new Date();
const initState = {
  ips: [
    { timeStamp: time, ip: "test" },
    { timeStamp: time, ip: "test" },
    { timeStamp: time, ip: "test" }
  ]
};

const reducer1 = (state = initState, action) => {
  return state;
};

export default reducer1;
