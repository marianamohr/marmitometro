import React from 'react';

class CardAlimento extends React.Component {
    constructor() {
        super()
        this.state = {
            opcoes: [],
        }
    }
    updateOptionInfo = (event) => {
        const { updateOptionsState } = this.props;
        const { opcoes } = this.state;
        let opcoesTemp = opcoes;
        if (opcoes.length === 3) {
           opcoesTemp.splice(event.target.id, 1, {id: event.target.id, name: event.target.value});
            this.setState({ 
                opcoes: opcoesTemp,
            });
        } else if (opcoes.length === 0) {
            this.setState({
                opcoes: [{
                    id: event.target.id,
                    name: event.target.value
                }]
            },
                () => {
                    const { title } = this.props;
                    updateOptionsState(title, this.state.opcoes);
                }
            );
        } else {
            this.setState((oldState) => (
                {
                    opcoes: [...oldState.opcoes,
                    {
                        id: event.target.id,
                        name: event.target.value
                    }
                    ]
                }),
                () => {
                    const { title } = this.props;
                    updateOptionsState(title, this.state.opcoes);
                })
        };
    };
    render() {
        const { title, opcoes, } = this.props
        return (
            <div className="alimento-card">
                <h2>{title}</h2>
                <section className="options">
                    <select
                        id='0'
                        onChange={(event) =>
                            this.updateOptionInfo(event)
                        }>
                        <option
                            id='vazio'
                            key='vazio'
                            defaultValue
                            value='vazio'
                        >
                            Escolha uma opção
                            </option>
                        {opcoes.map((opcao) => {
                            return (
                                <option
                                    value={opcao.name}
                                    key={opcao.id}
                                    id={opcao.id}
                                >
                                    {opcao.name}
                                </option>
                            )
                        }
                        )}
                    </select>
                    <select
                        id='1'
                        onChange={
                            (event) =>
                                this.updateOptionInfo(event)
                        }>
                        <option
                            defaultValue
                            value='vazio'
                        >
                            Escolha uma opção
                        </option>
                        {opcoes.map((opcao) => {
                            return (
                                <option
                                    key={opcao.id}
                                    value={opcao.name}
                                    id={opcao.id}
                                >
                                    {opcao.name}
                                </option>
                            )
                        }
                        )}
                    </select>
                    <select
                        id='2'
                        onChange={(event) =>
                            this.updateOptionInfo(event)
                        }>
                        <option defaultValue value='vazio' > Escolha uma opção </option>
                        {opcoes.map((opcao) => {
                            return (
                                <option id={opcao.id} key={opcao.id} value={opcao.name} >{opcao.name}</option>
                            )
                        }
                        )}
                    </select>
                </section>
            </div>
        );
    }


}
export default CardAlimento;