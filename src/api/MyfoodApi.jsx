export const myFoodPromise=(email)=>{
    return fetch(`http://localhost:5000/foods?email=${email}`)
        .then(res => res.json())
}