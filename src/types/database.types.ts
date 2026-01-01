export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    email: string | null
                    first_name: string | null
                    last_name: string | null
                    full_name: string | null
                    college: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id: string
                    email?: string | null
                    first_name?: string | null
                    last_name?: string | null
                    full_name?: string | null
                    college?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    email?: string | null
                    first_name?: string | null
                    last_name?: string | null
                    full_name?: string | null
                    college?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            applications: {
                Row: {
                    id: string
                    user_id: string
                    status: 'pending' | 'accepted' | 'rejected' | 'waitlisted'
                    answers: Json
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    status?: 'pending' | 'accepted' | 'rejected' | 'waitlisted'
                    answers?: Json
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    status?: 'pending' | 'accepted' | 'rejected' | 'waitlisted'
                    answers?: Json
                    created_at?: string
                    updated_at?: string
                }
            }
        }
    }
}
