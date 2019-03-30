import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {signIn} from '../../actions'
import { connect } from 'react-redux'
import history from '../../history'



class ChatApp extends React.Component {

  renderError({error,touched}){
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

 renderField = ({input,Type, label,meta}) => {
  const className= `field ${meta.error && meta.touched ? 'error' : '' }`;
  return (
    <div className={className}>
      <label>
        {label}
      </label>
      <input {...input}  type={Type} placeholder={label} autoComplete="off"/>
      {this.renderError(meta)}
    </div>
  )
}

renderSelect =({input,label,meta}) => {
    const className=`Field ${meta.error && meta.touched ? 'error' : ' '}`;
    return (
        <div className={className}>
          <label>
            {label}
          </label>
          <select {...input} placeholder ={label}>
            <option>Select doctor</option>
            <option value="Heart specialist">Heart Specialist</option>
            <option value="Bone Specialist">Bone Specialist</option>
            <option value="Eye Specialist">Eye Specialist</option>
            <option value="Lungs Specialist ">Lungs Specialist</option>
            <option value="Kidney Specialist">Kidney Specialist</option>
          </select>
          {this.renderError(meta)}
        </div>
    )
  }

  onSubmit = formValues => {
    this.props.signIn(formValues);
  }
 

  render () {
    if(!localStorage.getItem("validToken")){
      return (
        <div>
            <center><h2>Request Docter</h2></center>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
            <Field 
              Type='text'
              name='requestId'
              component={this.renderField}
              label='Request Id'
            />
            <Field 
              Type='text'
              name='doctertype'
              component={this.renderSelect}
              label='Docter Type'
            />
            <Field 
              Type='text'
              name='doctername'
              component={this.renderField}
              label='Docter Name'
            />
            <Field 
              Type='text'
              name='docterid'
              component={this.renderField}
              label='Docter Id'
            />
            <Field 
              Type='text'
              name='qualification'
              component={this.renderField}
              label='Qualification'
            />
             
            <button className="ui button primary" >Submit</button>
            <button className='ui button red' disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
              Cancel 
            </button>
          </form>
        </div>      
      );
    }else {
      return (
        <div>
          {history.push('/')}
        </div>);
    }
    
  }
}


const validate = formValues => {
  const errors = {};
  
  if(!formValues.doctertype){
    errors.doctertype = "Select doctor type......!!!";  
  }
  if(!formValues.doctername){
    errors.doctername = "Name required......!!!";  
  }
  if(!formValues.docterid){
    errors.docterid = "Id required......!!!";  
  }

  return errors;
};

 const form = reduxForm({
    form: 'loginForm',
    validate
  })(ChatApp);

  export default connect(null,{signIn})(form);

