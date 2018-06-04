export interface Profile {
  id: string
  name: string
  gender: string
  picture: string
  location: string
}
export interface User {
  id: string
  profile: Profile
}