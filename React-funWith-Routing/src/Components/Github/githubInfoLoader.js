export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/ShubhamK-23')
    return response.json()
}