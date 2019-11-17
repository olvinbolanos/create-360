import React, { Component } from 'react'
import '../../App.css'

class CreateVids extends Component {
    state = {
      bouncingEffect: false,
      darkenPhoto: false,
      blackWhite: false,
      sepiaTone: false,
      blurImage: false,
      wavyEffect: false,
      video: '',
      audio: '',
    }
    updateVideo = (e) => {
       this.setState({[e.currentTarget.name] : e.currentTarget.value})
    }
    
    render() {
       return (
          <form onSubmit={this.props.addVideo.bind(null, this.state)}>
             <label htmlFor='bouncingEffect'>Bouncing Effect:
                <input type='checkbox' name='bouncingEffect' onChange={this.updateVideo} value={this.state.bouncingEffect}/>
             </label>
             <br/>
             <label htmlFor='darkenPhoto'>Darken Photo:
                <input type='checkbox' name='darkenPhoto' onChange={this.darkenPhoto}  value={this.state.darkenPhoto}/>
             </label>
             <br/>
             <label htmlFor='blackWhite'>Black and White:
                <input type='date' name='' onChange={this.updateEmployee}  value={this.state.blackWhite}/>
             </label>
             <br/>
             <label htmlFor='Sepia Tone'>:
                <input type='checkbox' name='sepiaTone' onChange={this.updateEmployee}  value={this.state.sepiaTone}/>
             </label>
             <br/>
             <label htmlFor='blurImage'>Blur Image:
                <input type='checkbox' name='blurImage' onChange={this.updateEmployee}  value={this.state.blurImage}/>
             </label>
             <br/>
             <button type='submit'>
                Create Hypno Video
             </button>
          </form>
       )
    }
 }
 export default CreateVids;
