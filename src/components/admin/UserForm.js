import React from 'react'
import { Field, reduxForm } from 'redux-form'

class UserForm extends React.Component {
  
  renderError({error,touched}) {
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

 renderField = ({input,Type, label,meta }) => {
   const className= `field ${meta.error && meta.touched ? 'error' : '' }`;
    return (
      <div className={className}>
        <label>
          {label}
        </label>
        <input {...input} type={Type} placeholder={label} autoComplete="off"/>
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
            <option></option>
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
   
    this.props.onSubmit(formValues);
  }

  render () {
    return (
      <div>
       <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field 
          Type='text'
          name='id'
          component={this.renderField}
          label='Doctor id'
          placeholder='Enter doctor id'
        />
        <Field 
          Type='text'
          name='type'
          component={this.renderSelect}
          label='Type of Doctor'
          placeholder='Select the type'
        />
        <Field 
          Type='text'
          name='First_name'
          component={this.renderField}
          label='Enter first name'
          placeholder='First name'
        />
        <Field 
          Type='text'
          name='Last_name'
          component={this.renderField}
          label='Enter Last name'
          placeholder='Last name'
        />
        <Field 
          Type='text'
          name='qualification'
          component={this.renderField}
          label='Enter Doctor Qulification'
          placeholder='Enter username'
        />
        <Field 
          Type='password' 
          name='password' 
          component={this.renderField} 
          label='Enter Password'
          placeholder='Enter password'
          
        />
        <Field 
          Type='number' 
          name='number' 
          component={this.renderField}  
          label='Mobile no.'
          placeholder='Enter mobile no.'
          
        />

        <Field 
          Type='email' 
          name='email' 
          component={this.renderField}  
          label='Email Id'
          placeholder='Enter email id'
          
        />
        <button className="ui button primary" >Submit</button>
        <button className='ui button red' disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
          Reset
        </button>
      </form>
      </div>      
    )
  }
}


const validate = formValues => {
  const errors = {};
  
  if(!formValues.id){
    errors.id = "Doctor id required !!!";
  }else if(formValues.id.length>10){
    errors.id = 'Max length is 10 character'
  }

  if(!formValues.type){
    errors.type = "Select doctor type!!!";
  }


  if(!formValues.First_name){
    errors.First_name = "Doctor name required !!!";
  }else if(formValues.First_name.length>30){
    errors.First_name = 'Max length is 30 character'
  }

  if(!formValues.Last_name){
    errors.Last_name = "Doctor name required !!!";
  }else if(formValues.Last_name.length>30){
    errors.Last_name = 'Max length is 30 character'
  }

  if(!formValues.qualification){
    errors.qualification = "Qualification required!!!";
  }

  if(!formValues.password){
    errors.password = "Password required.....!!!";
  }else if(formValues.password.length<6 ){
    errors.password = 'Minimum length is 6'  
  }else if(formValues.password.length>20 ){
    errors.password = 'Minimum length is 20' 
  }
  else if (!/[^a-zA-Z0-9 ]/i.test(formValues.password)) {
    errors.password = 'Only Alfanumeric value will aceepted'
  }

  if(!formValues.number){
    errors.number = "Mobile number required !!!";
  }else if(formValues.number.length>10){
    errors.number = 'Max length is 10'
  }

  if(!formValues.email){
    errors.email = "Email required!!!"; 
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Enter Valid Email'
  }
};

export default reduxForm({
    form: 'registerForm',
    validate
  })(UserForm);

