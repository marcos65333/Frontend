import {
    Link,
    Text 
    
} from '@chakra-ui/react'

const Footer=()=>{
    return(
        <>
        <footer className="grid grid-cols-1 gap-4 ">
            <div className="flex justify-center items-center  gap-5">
                <Link href="https://github.com/marcos65333" target="_blank" rel="noopener noreferrer" color="blue.500">Github</Link>
                <Link href="https://www.instagram.com/marcos_tovar_/" target="_blank" rel="noopener noreferrer" color="blue.500">Instagram</Link>
                <Link href="https://www.linkedin.com/in/marcos-tovar-751bb7183/" target="_blank" rel="noopener noreferrer" color="blue.500">LinkedIn</Link>
                <Link href="https://portafolio-git-main-marcos65333.vercel.app/" target="_blank" rel="noopener noreferrer" color="blue.500">Portafolio</Link>
            </div>

            <div className="flex justify-center items-center  gap-5 ">
                <Text>© [Marcos Tovar] [2024] Todos los derechos reservados.</Text>
            </div>
        </footer>
        </>
    )
}

export default Footer