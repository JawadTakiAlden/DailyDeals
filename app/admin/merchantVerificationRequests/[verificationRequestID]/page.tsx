import React from 'react'

interface Props {
    params : {
        verificationRequestID : number
    }

    searchParams : {
        redirectLink? :string
    }
}

const VerificationRequestDetail = ({params : {verificationRequestID} , searchParams : {redirectLink}} : Props) => {
  return (
    <div>VerificationRequestDetail {verificationRequestID}</div>
  )
}

export default VerificationRequestDetail