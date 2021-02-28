import axios from 'axios'

export const get = (user) =>{
    return {type:'GET' ,payload:user}
}

export const startGetUsers = () =>{
    return (dispatch) =>{
        axios.get('https://panorbit.in/api/users.json')
        .then((response)=>{
            const user = response.data.users
            ///console.log(user);
            dispatch(get(user))
        })
        .catch((error)=>[
            alert(error.message)
        ])
    }
}