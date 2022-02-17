import React from "react";
import Main from "../templates/Main";


const headerProps = {

    icon: 'users',
    title: 'usuarios',
    subtitle: 'Cadastro de Usuarios : Incluir , Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}


export default class UserCrud extends Component{

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    UpdateField(event){
        const user = {... this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})

    }

    renderForm(){
        return(

            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name"
                            value={this.state.user.name}
                            onChange={e=>this.UpdateField(e)}
                            placeholder="Digite o Nome"/>
                        </div>

                    </div>
                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" name="email"
                            value={this.state.user.email}
                            onChange={e=>this.UpdateField(e)}
                            placeholder="Digite o E-mail"/>

                        </div>
                    </div>

                    <hr/>

                    <div className="row">
                        
                    </div>
                    
                    
                </div>
            </div>
        )


    }

    render(){

        return(

           <Main{...headerProps}> 
                Cadastro de Usuario
           
           </Main>


           )

    }

}