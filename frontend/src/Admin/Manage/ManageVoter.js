const ManageVoter = () => {
  return (
    <table class="styled-table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sandesh Bhusal</td>
          <td>Butwal</td>
          <td>bhusalshandesh0@gmail.com</td>
          <td>2057</td>
          <td class="action">Delete</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ManageVoter;
