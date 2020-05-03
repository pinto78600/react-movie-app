import React from 'react';
import axios from 'axios'
import "./FormMovie.css"

class FormMovie extends React.Component{
        state = {
      title: '',
      poster: '',
      comment: '',
    }
   
  
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm = (e) => {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/'
    axios.post(url, this.state)
    .then(res => res.data)
    .then(res => {
    alert(`Film ajouté avec succès !`);
    })
    .catch(e => {
    console.error(e);
    alert(`Erreur lors de l'ajout du film `);
  });
  
}
  render(){
     
    return(
      <div className="FormMovie">
  <h1>Saisie ton film préféré</h1>

  <form onSubmit={this.submitForm}>
    <fieldset>
      <legend>Informations</legend>
      <div className="form-movie">
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div className="form-movie">
        <label htmlFor="poster">Url</label>
        <input
          type="text"
          id="poster"
          name="poster"
          onChange={this.onChange}
          value={this.state.poster}
        />
      </div>

      <div className="form-movie">
        <label htmlFor="comment">Commentaire</label>
        <textarea 
            type='text' 
            id="comment" 
            name="comment" 
            onChange={this.onChange} 
            value={this.state.comment} 
        />
      </div>
      <hr />
      <div className="form-movie">
        <input type="submit" value="Envoyer" />
      </div>
    </fieldset>
  </form>
</div>
    )
  }
}
export default FormMovie ;