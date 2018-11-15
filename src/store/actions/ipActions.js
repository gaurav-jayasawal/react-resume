export const addIp = ip => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection("addresses").add({
      ...ip
    });
    dispatch({ type: "CREATE_IP", ip });
  };
};
