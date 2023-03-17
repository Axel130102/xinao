import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component{
  state = {
    productos:[
      { name: 'Smart Watch', price: '$6000', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPH43ref_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO_GEO_MX+watch-face-45-nike7s-desertberry-spruceaura_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660757976267%2C1661968921046%2C1662143432353'},
      { name: 'Engrosador', price: '$39', img: 'https://falabella.scene7.com/is/image/Falabella/110498708_1?wid=800&hei=800&qlt=70'},
      { name: 'Cargador', price: '$1000', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPG02?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1619024741000'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
          ? ({
            ...x,
            cantidad: x.cantidad + 1
          })
          : x)
      return this.setState({ carro: newCarro }) 
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1, 
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState( {esCarroVisible: !this.state.esCarroVisible} )
  }

  render(){
    const { esCarroVisible } = this.state
    return (
      <div>
        <Navbar 
          carro={ this.state.carro } 
          esCarroVisible = { esCarroVisible } 
          mostrarCarro= {this.mostrarCarro}/>
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={ this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
