import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
export default function Signup() {
//yup
let validationSchema= new Yup.object({
name:Yup.string().min(3,'minlengh is 3').max(15,'maxlength is 10').required('this name is requird'),
email:Yup.string().required('email is requird').email('enter avalid email'),
phone:Yup.string().required('phone is required').matches(/^01[012345][0-9]{9}$/,'enter avalid phone'),
password:Yup.string().required('password is required').matches(/^[A-z][a-z0-9]{6,15}$/),
rePassword:Yup.string().required('confirm password is required').oneOf([Yup.ref('password')],'not match')
})




  //custom validation
//   function validate(values){
//     let errors={}
//     if(!values.name){
//       errors.name='name is required'
//     }else if(values.name.length <3){
//       errors.name='minLength 3 char'
//     }else if(values.name.length >10){
//       errors.name='maxLength is 10 char'
//     }
// if(!values.phone){
//   errors.phone='phone is required'
// }else if(!/^01[1234][0-9]$/.test(values.phone))
// {
//   errors.phone='enter availd phone number'
// }

// if(!values.email){
//   errors.email='email is required'
// }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
// {
//   errors.email='enter availd email '
// }

// if(!values.password){
//   errors.password='password is required'
// }else if(!/^[A-z][a-z0-9]{6,8}$/.test(values.password))
// {
//   errors.password='enter availd password '
// }


// if(!values.rePassword){
//   errors.rePassword='confirm password is required'
// }else if(values.password!==values.rePassword)
// {
//   errors.rePassword='not match'
// }
//     return errors
//   }



 function signUp(values){ //connect with api
  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values).then(({data})=>console.log(data)).catch((error)=>console.log(error))

  }
let {values,dirty,touched,isValid,errors,handleSubmit,handleChange,handleBlur}=useFormik({
initialValues:{
name:'',
email:'',
password:'',
rePassword:'',
phone:''
},
// validate:validate,
validationSchema:validationSchema
,
onSubmit:()=>{signUp(values)}
  
})


  return (
    <div className='my-5 overflow-hidden'>
      <h1 className='text-main text-center fw-400'>Register Form</h1>
      <form onSubmit={handleSubmit} >
        <div className="row mx-3 ">
          <div className="col-md-8  m-auto bg-light shadow p-4 ">
            <div className="row gy-4">
            <div className="col-md-12">
            <label htmlFor='userName'>name</label>
            <input type='text' className='form-control' onBlur={handleBlur} value={values.name} id='userName' name='name' onChange={handleChange}/>
            {errors.name && touched.name ?
          <p className='text-danger'>{errors.name}</p>  :''
          }
          </div>
          <div className="col-md-12">
            <label htmlFor='userEmail'>email</label>
            <input type='email' className='form-control'  onBlur={handleBlur}  value={values.email} id='userEmail' name='email' onChange={handleChange}/>
          </div>
          {errors.email && touched.email ?
          <p className='text-danger'>{errors.email}</p>  :''
          }
          
          <div className="col-md-12">
            <label htmlFor='userPhone'>phone</label>
            <input type='tel' className='form-control'  onBlur={handleBlur} id='userPhone' value={values.phone} name='phone' onChange={handleChange}/>
          </div>
          {errors.phone && touched.phone ?
          <p className='text-danger'>{errors.phone}</p>  :''
          }
          <div className="col-md-12">
            <label htmlFor='userPassword'>password</label>
            <input type='password' className='form-control' onBlur={handleBlur} value={values.password} id='userPassword' name='password' onChange={handleChange}/>
          </div>
          {errors.password && touched.password ?
          <p className='text-danger'>{errors.password}</p>  :''
          }
          <div className="col-md-12">
            <label htmlFor='userConfirm'>rePassword</label>
            <input type='password' className='form-control' onBlur={handleBlur} id='userConfirm' name='rePassword'onChange={handleChange}/>
            </div>
            {errors.rePassword&& touched.rePassword ?
          <p className='text-danger'>{errors.rePassword}</p>  :''
          }
            <div className="col-md-12 text-end my-3">
              <button disabled={!(isValid && dirty)} type='submit' className='btn  bg-main text-light'>Register</button>
          </div>
         

            </div>
          </div>
        
        </div>
      </form>
    </div>
  )
}
