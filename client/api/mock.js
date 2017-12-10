import mockResponse from './data/mockResponse';
export default {
    getData: () => fetch('api/react-demo/getdata')
        .then((response) => mockResponse)
};
