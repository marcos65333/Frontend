import { useState,useEffect } from "react"
import {
    Button,
    Input,
    InputGroup,
    InputRightElement,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import './styles/password.css'


function PasswordInput({ onChange }) {
    const [show, setShow] = useState(false)

    const handleChange = (event) => {
        onChange(event.target.value)
    }

    const handleClick = () => setShow(!show)

    return (
        <>
            <InputGroup size='md'>
                <Input
                    onChange={handleChange} 
                    pr='3rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                />
                <InputRightElement width='4rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        
        </>
    )
}


function PasswordSecurity({ password }) {
    const [show, setShow] = useState(false);
    const [lengthValid, setLengthValid] = useState(false);
    const [uppercaseValid, setUppercaseValid] = useState(false);
    const [lowercaseValid, setLowercaseValid] = useState(false);
    const [specialCharValid, setSpecialCharValid] = useState(false);

    useEffect(() => {
        setShow(true);
        setLengthValid(password.length >= 8);
        setUppercaseValid(/[A-Z]/.test(password));
        setLowercaseValid(/[a-z]/.test(password));
        setSpecialCharValid(/[@#$%^&+=]/.test(password));
    }, [password]);
    
    return (
        <div>
            { password ?
                <>
                {show && (
                    <UnorderedList className="mt-2">
                    <ListItem className={lengthValid ? 'valid' : 'invalid'}>Tamaño minimo 8</ListItem>
                    <ListItem className={uppercaseValid ? 'valid' : 'invalid'}>Al menos una mayuscula</ListItem>
                    <ListItem className={lowercaseValid ? 'valid' : 'invalid'}>Al menos una minuscula</ListItem>
                    <ListItem className={specialCharValid ? 'valid' : 'invalid'}>Un caracter especial</ListItem>
                </UnorderedList>
                )}
                </>
                : null
            }
        </div>
    );
}

export  { PasswordInput,PasswordSecurity };
