import { Component } from "react";

const styles = {
    bubbleAlert:{
        backgroundColor: 'white',
        borderRadius: '15px',
        color: 'black',
        border: '0 solid',
        boxShadow: '0 2px 3px rgb(0,0,0,0.3)',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px',
    }
}



class BubbleAlert extends Component{
    getNumber(n) {
        if (!n) { return ''} 
        return n > 9 ? '9+' : n
        }
        

    render(){
        const { value } = this.props
        return(
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert