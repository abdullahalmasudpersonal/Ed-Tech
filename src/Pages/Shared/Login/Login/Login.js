import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../../img/SocialLogin/google-logo3.png';
import facebook from '../../../../img/SocialLogin/facebook.png';
import github from '../../../../img/SocialLogin/github-icon.png';
import auth from '../../../../firebase.init';
import Loading from '../../Loading/Loading';
import './Login.css';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
     
    /* const [token] = useToken(user || gUser); */

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    if (loading || gLoading) {
        return <Loading />
    }
    if (error || gError) {
        signInError = <p className='text-red-500 mb-1 mt-0'><small>{error?.message || gError?.message}</small></p>
    }

    if (gUser || user) {
        navigate(from, {replace: true});
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='login'>
            <div className='login-dev'>
            <h2 className='login-hd'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
                    <div>
                        <input className='login-input' type='email'
                            placeholder=' Email' autoComplete="off"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className='label ml-12'>
                            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                        </label>
                    </div>

                    <div>
                        <input className='login-input ' type='password'
                            placeholder=' Password' autocomplete="off"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className='label ml-12'>
                            {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                    <input type='submit' className='login-input input-submit' value='Login' />
                </form>
                <p className='forgot-btn'>Forgot Password</p>
                <div className='login-or mb-2 mt-2'>
                    <hr /> <p className='ml-1 mr-1' style={{ color: 'blue' }}>OR</p> <hr />
                </div>
                <div>
                    <div className='socialLogin'>
                        <img height='40px' width='40px' src={github} alt='' />

                        <img height='40px' width='40px'
                            onClick={() => signInWithGoogle()}
                            src={google} alt='' />

                        <img height='40px' width='40px' src={facebook} alt='' />
                    </div>
                </div>
                <div className='user mt-4'>
                    <p style={{ textAlign: 'center' }}>New to Af Electronics Ltd? <Link to='/register' style={{ textDecoration: 'none' }}>
                        <span>SignUp</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;