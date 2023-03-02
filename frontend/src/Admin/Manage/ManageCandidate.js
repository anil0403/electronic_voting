const ManageCandidate = () => {
  return (
    <table class="styled-table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Name</th>
          <th>Address</th>
          <th>Citizenship ID</th>
          <th>DOB</th>
          <th>Category</th>
          <th>Party</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Anil Shrestha</td>
          <td>Kathmandu</td>
          <td>9800000000</td>
          <td>2057</td>
          <td>President</td>
          <td>CPN UML</td>
          <td class="action">Delete</td>
        </tr>
      </tbody>
    </table>
  );
};
export default ManageCandidate;
