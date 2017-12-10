import React from 'react';
// Functional stateless component
const styles = {
    wrapper: {
        width: '100%'
    },
    img: {
        width: '100%',
        backgroundPosition: 'center'
    }
};
const NotFound = () => <div style={styles.wrapper}><img style={styles.img} src="https://i.ytimg.com/vi/TSXXi2kvl_0/maxresdefault.jpg" /></div>;
export default NotFound;
