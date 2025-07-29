export const loginUser = () => {
    localStorage.setItem('isLoggedIn', 'true');
}

export const logoutUser = () => {
    localStorage.removeItem('isLoggedIn');
}

export const isLoggedIn = () => {
   return  localStorage.getItem('isLoggedIn' ) ==='true' ;
};