import React from 'react';

class Calculos extends React.Component {
    render() {
        const { location: { state: { dados } } } = this.props;
        const { listcarboidratos, listProteinas, listAcompanhamentos, quantidade, peso } = dados
        const pesoTotal = quantidade * peso;
        const pesoTotalCarboidratos = pesoTotal * 0.25;
        const pesoTotalProteinas = pesoTotal * 0.25;
        const pesoTotalAcompanhamentos = pesoTotal * 0.50;


        return (
            <section>
                <h1>Cálculos</h1>
                <section>
                    <h4> Quantidade de marmitas: {quantidade}</h4>
                    <h4> Peso por marmitas: {peso} gramas. </h4>
                    <h4> Peso total marmitas: {pesoTotal} gramas. </h4>
                    
                </section>
                <section className="alimentos">
                    <section className="alimento-card">
                        <h2> Carboidratos</h2>
                        <h3> Peso total Carboidratos Cozidos: {pesoTotalCarboidratos} gramas.</h3>
                         <h3> {listcarboidratos[0][0].name}: {(pesoTotalCarboidratos/3).toFixed(2)} gramas</h3>
                        <h3> {listcarboidratos[0][1].name}: {(pesoTotalCarboidratos/3).toFixed(2)} gramas</h3>
                        <h3> {listcarboidratos[0][2].name}: {(pesoTotalCarboidratos/3).toFixed(2)} gramas</h3> 
                    </section>
                    <section className="alimento-card">
                        <h2> Proteina</h2>
                        <h3> Peso total Proteinas Cozidas: {pesoTotalProteinas} gramas.</h3>
                         <h3> {listProteinas[0][0].name}: {(pesoTotalProteinas/3).toFixed(2)} gramas</h3>
                        <h3> {listProteinas[0][1].name}: {(pesoTotalProteinas/3).toFixed(2)} gramas</h3>
                        <h3> {listProteinas[0][2].name}: {(pesoTotalProteinas/3).toFixed(2)} gramas</h3>
                    </section> 
                    <section className="alimento-card">
                        <h2> Acompanhamentos</h2>
                        <h3> Peso total Acompanhamentos Cozidos: {pesoTotalAcompanhamentos} gramas.</h3>
                        <h3> {listAcompanhamentos[0][0].name}: {(pesoTotalAcompanhamentos/3).toFixed(2)} gramas</h3>
                        <h3> {listAcompanhamentos[0][1].name}: {(pesoTotalAcompanhamentos/3).toFixed(2)} gramas</h3>
                        <h3> {listAcompanhamentos[0][2].name}: {(pesoTotalAcompanhamentos/3).toFixed(2)} gramas</h3>
                    </section>
                </section>

            </section>
        );
    }


}
export default Calculos;