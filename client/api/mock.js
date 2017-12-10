import mockResponse from './data/mockResponse';
const mockApi = {
    getData: () => fetch('api/react-demo/getdata')
        .then((response) => mockResponse)
};
export default mockApi;
