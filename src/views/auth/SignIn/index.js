import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {
    return (
        <>
            <div className="mb-8">
                <h3 className="mb-1 text-black">歡迎！</h3>
            </div>
            <SignInForm disableSubmit={false} />
        </>
    )
}

export default SignIn
