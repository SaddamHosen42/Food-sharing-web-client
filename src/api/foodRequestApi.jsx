export const foodRequestPromise=(email)=>{
    return fetch(`http://localhost:5000/food-requests?email=${email}`)
        .then(res => res.json())
}