import bcrypt from 'bcrypt'

import config from '../../config'
import { User } from './user.model'

const superUser = {
  firstName: 'SkillCertify',
  lastName: 'Admin',
  email: config.admin_email,
  password: config.admin_password,
  role: 'admin',
  canTakeStepOne: false,
  isVerified: true,
}

export const seedAdmin = async () => {
  const isAdminExits = await User.findOne({ role: 'admin' })

  const hashedPassword = await bcrypt.hash(
    superUser.password,
    Number(config.bcrypt_salt_rounds),
  )

  const adminDataWithHashedPass = {
    ...superUser,
    password: hashedPassword,
  }

  if (!isAdminExits) {
    await User.create(adminDataWithHashedPass)
    // console.log('Admin created successfully!')
  }
}
