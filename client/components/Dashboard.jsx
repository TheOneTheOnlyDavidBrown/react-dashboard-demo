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
    };
    constructor() {
        super();
    }
    // mock backend call
    getData() {
        // should use a third party promise (or observable) library because fetch is still experimental. using it for demo purposes
        MockApi.getData()
            .then(this.handleReponse.bind(this), this.handleReponse.bind(this));
    }
    handleReponse(response) {
        const { data } = response;
        this.setState({ data });
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return <ReactTable { ...this.state } />;
    }
}
export default Dashboard;
