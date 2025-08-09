import { User } from './user.model'

const getAllUser = async () => {
  try {
    // Retrieve all users who are not deleted and whose role is not admin
    const users = await User.find({
      isDeleted: false,
      role: { $ne: 'admin' },
    })

    return users
  } catch (error) {
    throw new Error('Failed to retrieve users')
  }
}

const getUserById = async (userId: string) => {
  try {
    // Find user by ID and check if not deleted
    const user = await User.findOne({ _id: userId, isDeleted: false })
    if (!user) {
      throw new Error('User not found')
    }
    return user
  } catch (error) {
    throw new Error('Failed to retrieve user')
  }
}

const deleteUserById = async (userId: string) => {
  try {
    // Find user by ID and check if not deleted
    const user = await User.findOne({ _id: userId, isDeleted: false })
    if (!user) {
      throw new Error('User not found')
    }
    user.isDeleted = true
    await user.save()
    return user
  } catch (error) {
    throw new Error('Failed to delete user')
  }
}

export const UserServices = {
  getAllUser,
  getUserById,
  deleteUserById,
}
