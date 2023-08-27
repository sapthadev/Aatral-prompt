import DataTable from 'react-data-table-component';
import fetchApi from '../../api';
import "./style.css";

const MainPanel = ({columns,data}) => {
    
    return (
        <div className="main-panel">
            <DataTable
                columns={columns}
                data={data}
                selectableRows
            />
        </div>
    )
}

export default MainPanel;