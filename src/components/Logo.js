import { Component } from "react";

const styles = {
    logo:{
        fontWeight: '700',
        fontSize: '2rem',
        color: 'red'
    }
}

class Logo extends Component{
    render(){
        return (
            <div style={styles.logo}>
                Xinao
            </div>
        )

    }
}

export default Logo