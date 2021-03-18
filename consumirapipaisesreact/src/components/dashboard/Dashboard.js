import React, { Component } from 'react';
import axios from 'axios';

const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/countries/";
const headers = {
    'x-rapidapi-key': '8243d659a5mshf16d5fa09f8b03cp128f5ajsn5e62a49e9184',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
}

class Dashboard extends Component {
    state = {name: String, capital: String, code: Number, currencyCodes: String, numRegions: Number, flagImageUri: String}
    codigo = null;
    peticionGet = () =>{
        axios.get((url+this.codigo), {headers: headers}).then(response =>{
            this.setState({name: response.data.data.name,
                capital: response.data.data.capital,
                code: response.data.data.code,
                currencyCodes: response.data.data.currencyCodes,
                numRegions: response.data.data.numRegions,
                flagImageUri: response.data.data.flagImageUri
            });
        });
    }
    verInfo = () => {
        this.codigo = document.getElementById("button-addon").value;
        this.peticionGet();
    }
    render() {
        return(
            <React.Fragment>
                <br/>
                <div className="container">
                    <center>
                        <div className="form-group col-md-6">
                            <input type="text" id="button-addon" className="form-control" placeholder="Ingrese código del país a consultar:"/>
                            <button type="button" className="btn btn-success btn-block" onClick={this.verInfo}>VER INFORMACIÓN</button>
                        </div>
                    </center>
                </div>
                <br/>
                <div className="container">
                    <table className='table table-dark table-hover'>
                        <thead>
                            <th>País</th>
                            <th>Capital</th>
                            <th>Código</th>
                            <th>Moneda</th>
                            <th>Regiones</th>
                        </thead>
                        <tbody>
                            {<tr>
                                <td>{this.state.name}</td>
                                <td>{this.state.capital}</td>
                                <td>{this.state.code}</td>
                                <td>{this.state.currencyCodes}</td>
                                <td>{this.state.numRegions}</td>
                            </tr>}   
                        </tbody>
                    </table>
                </div>
                <br/>
                <center>
                    <img alt='Imagen' src={this.state.flagImageUri}/>
                </center>
            </React.Fragment>
        );
    }
}

export default Dashboard;