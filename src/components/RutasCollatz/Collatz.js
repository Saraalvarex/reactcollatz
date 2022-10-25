import React, { Component } from 'react'

export default class Collatz extends Component {
//En este componente vamos a recibir props de numero
    //Inicializar variables
    constructor(props){
      super(props);
      console.log("Numero props: "+ props.numero);
  }
state = {
    numeros: []
}

recibirNumero = () => {
    console.log(this.cajanumero.current.value);
    // this.setState({
    //         numeros : [this.cajanumero.current.value]
    // });
    var num = parseInt(this.cajanumero.current.value);
    var aux=[];

    while (num !=1) {
        if (num%2==0){
            num = num/2; 
        } else {
            num = num*3+1;
        }
        aux.push(num);
        
    }
    this.setState({
        numeros : aux
    });
}

componentDidUpdate = (oldProps) => {
  console.log("Actual Props " + this.props.numero)
  console.log("Old Props "+ oldProps.numero)
  //Solamente realizaremos cambios en la página
  //cuando los props sean diferentes/han cambiado
  if (this.props.numero!=oldProps.numero){
      this.recibirNumero();
  }
}

  render() {
    return (
      <div>
        <h1>Collatz</h1>
        <form onSubmit={this.recibirNumero}>
            <input type="number" ref={this.cajanumero} />
            <br/>
            <button>
                Enviar datos
            </button>
        </form>
        <ul>
        {
           this.state.numeros.map((numero, index) => {
             return (<li key={index}>{numero}</li>);
             })
        }
        </ul>
      </div>
    )
  }
}
