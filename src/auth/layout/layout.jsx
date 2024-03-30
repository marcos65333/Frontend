import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import slogan from '../../assets/slogan.png';
import Footer from '../../shared/footer.jsx';

const Layout = () => {
    return (
        <div className={`flex justify-center`} >
            <header>
                    <div className="grid grid-rows-1 gap-2  items-center justify-center">
                        
                        <div className="flex items-center justify-center">
                            <img src={slogan} alt="slogan" style={{minHeight:'350px',height:'150px'}} />
                        </div>

                        <h1 className='font-light text-4xl text-black  text-center'>Lo que está pasando ahora</h1>

                        <div className='items-center justify-center m-5'>
                            <h1 className='mb-2 text-center'>
                                ¿Nuevo en Social Latin?
                            </h1>
                            <Link to="/register"  className="flex text-center items-center justify-center text-white border-2 rounded-lg p-2 bg-blue-500 ">Crear cuenta</Link>
                        </div>

                        <div className=" m-5">
                            <h1 className='mb-2 text-center'>
                                ¿Ya tienes una cuenta?
                            </h1>
                            <Link to="/login"  className="flex text-center items-center justify-center text-white border-2 rounded-lg p-2 bg-blue-500 ">Ingresa ahora</Link>
                        </div>

                </div>
                <Footer />
            </header>
        </div>
    );
};

export default Layout;
