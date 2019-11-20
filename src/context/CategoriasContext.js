import React, { Component } from 'react'

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = '6OPP4XB63PRNKONERW'

    state = {

    }

    componentDidMount(){
        this.obtenerCategorias()
    }

    obtenerCategorias = () => {
        
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default CategoriasProvider