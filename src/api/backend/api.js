const auth = process.env.REACT_APP_AUTH_SERVER
const db = process.env.REACT_APP_DB_SERVER

export const login = async (data) => {
   const tokens = await fetch(`${auth}/login`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data})
        }).then(res => res.json())
    
    const response = await fetch(db, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${tokens.accessToken}`
        }
    })
    return response.json();
}

export const register = async (data) => {
    const newUser = await fetch(db, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data})
    })
    return newUser.json();
}

export const logFood = async (data) => {
    console.log(data)
    return "hello"
}