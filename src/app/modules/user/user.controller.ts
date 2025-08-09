import { Request, Response } from 'express'

import { UserServices } from './user.service'

// GET ALL USER
const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await UserServices.getAllUser()

    res.status(200).json({
      success: true,
      message: 'Users retrieved successfully!',
      data: users,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve users',
    })
  }
}

// GET A USER BY ID
const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id

    const user = await UserServices.getUserById(userId as string)
    res.status(200).json({
      success: true,
      message: 'User retrieved successfully!',
      data: user,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve user',
    })
  }
}

// DELETE A USER BY ID
const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id

    const user = await UserServices.deleteUserById(userId as string)

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: user,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete user',
    })
  }
}

export const UserControllers = {
  getAllUser,
  getUserById,
  deleteUserById,
}
