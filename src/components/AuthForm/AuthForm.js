import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {userService} from "../../services";
import {authActions} from "../../redux";

const AuthForm = () => {

    const dispatch = useDispatch();
    const {loginError} = useSelector(state1 => state1.auth);
    const {register, handleSubmit, reset} = useForm();
    const {pathname, state} = useLocation();
    const [isLogin, setIsLogin] = useState(null);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
    }, [pathname])

    const submit = async (user) => {
        try {
            if (!isLogin) {

                await userService.create(user);
                navigate('/login');
            }
            if (isLogin) {
                await dispatch(authActions.login({user}))
                navigate(state?.pathname || '/', {replace: true})
            }
        } catch (e) {
            setErrors(e.response.data)
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>{isLogin ? 'login' : 'register'}</button>
            <div>
                <div>{errors?.username && <span>{errors.username[0]}</span>}</div>
                <div>{errors?.password && <span>{errors.password[0]}</span>}</div>
                {loginError&&<span>Wrong username or password</span>}
            </div>
        </form>
    );
};

export {AuthForm};