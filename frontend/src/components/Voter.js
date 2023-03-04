import { deleteVoter } from "../Api/ApiHandler";
const Voter = (props) => {
  const item = props.item;

  const deleteHandler = () => {
    deleteVoter(item.v_id, props.token).then((response) => {
      sessionStorage.setItem("refreshData", Math.random());
      props.refreshHandler(Math.random());

    });
  };
  return (
    <tr>
      <td>{item.v_id}</td>
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.email}</td>
      <td>{item.dob}</td>
      <td class="action" onClickCapture={deleteHandler}>
        Delete
      </td>
    </tr>
  );
};

export default Voter;
