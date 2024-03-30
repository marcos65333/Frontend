//REGEX TO VERIFY EMAIL
export const verify_email = (email =  String) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
};

//VERIFY AGE MIN OR EQUAL TO 18 YEARS
export const verify_age = (age = String) => { 
    const current_year = getCurrentYear();
    const format_age = age.split('-');
    const year = parseInt(format_age[0]);
    const user_age =parseInt(current_year - year);
    return  user_age >= 18 ?   true :  false;
};

//REGEX TO VERIFY USERNAME
export const verify_username = (username = String) => {
    const regex = /^[a-zA-Z0-9._-]+$/;
    return regex.test(username);
}

//REGEX TO VERIFY PASSWORD
export const verify_password = (password = String) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return regex.test(password);
}
