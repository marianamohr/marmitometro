import React from 'react';
import { Link } from 'react-router-dom';
import CardAlimento from './CardAlimento';
import listAcompanhamentos from '../data/acompanhamentos';
import listCarboidratos from '../data/carboidratos';
import listProteinas from '../data/proteinas';

class Infos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carboidratos: [],
            proteinas: [],
            acompanhamentos: [],
            quantidade: 0,
            peso: 0,
        }
    }
    onChangeUpdateState = (field, newValue) => {
        this.setState({ [field]: newValue });
    }

    updateOptionsState = (title, opcoes) => {
        this.setState({ [title]: opcoes });
    }

    render() {
        const { carboidratos, proteinas, acompanhamentos, quantidade, peso } = this.state;
        const dados = {listcarboidratos:[carboidratos],listProteinas:[proteinas], listAcompanhamentos:[acompanhamentos], quantidade: quantidade, peso: peso};
        return (
            <section>
                <h1>Infos</h1>
                <div>
                    <div>
                        <label>
                            Quantidade de marmitas:
                    <input
                                id="quantidade"
                                type="number"
                                step={1}
                                min={1}
                                max={50}
                                value={quantidade}
                                onChange={(event) => this.onChangeUpdateState('quantidade', event.target.value)}
                            />
                        </label>

                        <label>
                            Peso da Marmita: (em gramas)
                    <input
                                id="peso"
                                type="number"
                                step={1}
                                min={1}
                                max={500}
                                value={peso}
                                onChange={(event) => this.onChangeUpdateState('peso', event.target.value)}
                            />
                        </label>
                    </div>
                    <div className="alimentos">
                        <CardAlimento updateOptionsState={this.updateOptionsState} opcoes={listCarboidratos} title="carboidratos" />
                        <CardAlimento updateOptionsState={this.updateOptionsState} opcoes={listProteinas} title="proteinas" />
                        <CardAlimento updateOptionsState={this.updateOptionsState} opcoes={listAcompanhamentos} title="acompanhamentos" />

                    </div>
                </div>
                <Link
                    to={{ pathname: '/calculos', state: { dados } }}
                    data-testid="calc-btn" >
                    Calcular
                </Link>


            </section>
        );
    }


}
export default Infos;