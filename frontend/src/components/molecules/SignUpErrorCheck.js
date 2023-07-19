import React from 'react'
import EmptyAlert from '../atoms/EmptyAlert'
import MailAlert from '../atoms/MailAlert'
import PasswordAlert from '../atoms/PasswordAlert'
import SignUpAlert from '../atoms/SignUpAlert'
import PasswordFormAlert from '../atoms/PasswordFormAlert'


export default function SignUpErrorCheck(props) {
  return (
    <>
      {
        props.emptyError ?
          <EmptyAlert setEmptyError={props.setEmptyError} />
        : props.mailError ?
          <MailAlert setMailError={props.setMailError} />
        : props.passwordError ?
          <PasswordAlert setPasswordError={props.setPasswordError} />
        : props.signUpError ?
          <SignUpAlert setSignUpError={props.setSignUpError} /> 
        : props.passwordFormError ?
          <PasswordFormAlert setPasswordFormError={props.setPasswordFormError} />
        :
          ""
      }
    </>
  )
}
