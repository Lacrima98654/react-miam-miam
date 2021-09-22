import React from 'react';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name :"",
            email : "",
            tel : "",
            msg: ""
        }
    }
    handleChange(e){
        this.setState(
            {[e.target.name]:e.target.value}
        )
    }
    handleSubmit(e){
        //Vérification des données soumis
        for (const input in this.state) {
           if(this.state[input] === '') {
               this.error = 1;
               break;
           }
        }
        e.preventDefault();
    }
    render(){
       return(
           <React.Fragment>
               <form onSubmit={this.handleSubmit.bind(this)} className="w-50 mb-3 contact">
                       <div className="mb-3">
                           <p>
                           <label htmlFor="name" className="form-label">Nom</label>
                           <input type="text" name="name" className="form-control" id="name"
                            value={this.state.name} onChange={this.handleChange.bind(this)}
                           />
                           </p>
                       </div>
                       <div className="mb-3">
                           <p>
                           <label htmlFor="mail" className="form-label">Adresse Email</label>
                           <input type="email" name="email" className="form-control" id="mail" placeholder="nom@exemple.com"
                           value={this.state.email} onChange={this.handleChange.bind(this)}
                           />
                           </p>
                       </div>
                       <div className="mb-3">
                           <p>
                           <label htmlFor="num" className="form-label">Numéro téléphonique</label>
                           <input type="tel" name="tel" className="form-control" id="num"
                           value={this.state.tel} onChange={this.handleChange.bind(this)}
                           />
                           </p>
                       </div>
                       <div className="pb-3">
                           <p>
                                <label htmlFor="msg" className="form-label">Laissez votre message...</label>
                                <textarea name="msg" className="form-control" id="msg" rows="5"
                                value={this.state.msg} onChange={this.handleChange.bind(this)}
                                />
                           </p>
                       </div>
                       <button type="submit" className="btn btn-submit w-100">Send</button>
               </form>

           </React.Fragment>
       );
    }
}

export default Form;