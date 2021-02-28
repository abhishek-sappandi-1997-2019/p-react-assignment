export const ProfileShow = (profile , id) =>{
    return profile.find(e => e.id === id)
}