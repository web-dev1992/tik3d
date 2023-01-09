export interface DefaultUser {
    name?: string | null
    email?: string | null
    image?: string | null
    id?: string | null      // Here
  }
  
  export interface DefaultJWT extends Record<string, unknown> {
    name?: string | null
    email?: string | null
    picture?: string | null
    id?: string | null      // Here
    sub?: string
  }
  
  export interface DefaultSession extends Record<string, unknown> {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      id?: string | null      // Here
    }
    expires?: string
  }