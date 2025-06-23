export const myFoodPromise=(email,accessToken)=>{
    return fetch(`http://localhost:5000/foods?email=${email}`,{
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
}