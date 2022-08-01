import DataTable from 'react-data-table-component';

import movies from '../data/tableItems.js';

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Directior',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Runtime (m)',
    selector: 'runtime',
    sortable: true,
    right: true,
  },
];

const DataTables = () => {
  return (
    <div className="card mt-5">
      <div class="table-responsive py-4">
        <table class="table table-flush" id="datatable">
          <DataTable title="Movies" columns={columns} data={movies} pagination selectableRows />
        </table>
      </div>
    </div>
  );
};

export default DataTables;
