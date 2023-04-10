export const IsLoginCkeck = () => {
    const accesstoken = document.cookie.split(";").filter((el) => {
      return el.includes("accessToken");
    });
    if(accesstoken.length > 0){
        return true
    }else{
        return false
    }
}

export const getUserInfo = () => {
   return localStorage.getItem("user")
}