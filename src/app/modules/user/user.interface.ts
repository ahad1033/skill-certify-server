import { USER_ROLE } from './user.constant'

export interface IUser {
  firstName: string
  lastName: string
  email: string
  gender: 'male' | 'female'
  password: string
  role: TUserRole
  currentLevel?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  canTakeStepOne?: boolean
  canTakeStepTwo?: boolean
  canTakeStepThree?: boolean
  isVerified?: boolean
  isDeleted?: boolean
}

export type TUserRole = keyof typeof USER_ROLE
