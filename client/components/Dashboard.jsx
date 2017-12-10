import React from 'react';
import ReactTable from 'react-table';
import MockApi from '../api/mock';

class Dashboard extends React.Component {
    state = {
        data: [],
        columns: [{
            Header: 'Host',
            accessor: 'host'
        }, {
            Header: 'TLD',
            accessor: 'tld'
        }]
    }
    constructor() {
        super();
    }
    // mock backend call
    getData() {
        // should use a third party promise (or observable) library because fetch is still experimental. using it for demo purposes
        MockApi.getData()
            .then(this.handleResponse, this.handleResponse);
    }
    handleResponse = (response) => {
        const { data } = response;
        this.setState({ data });
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        // Prevent double render before the data is set.
        // In this case the componentDidMount and the setState
        // in handleResponse both trigger render but we only need
        // it to trigger after handleResponse
        if (this.state.data.length === 0) return '';
        return <ReactTable { ...this.state } />;
    }
}
export default Dashboard;
