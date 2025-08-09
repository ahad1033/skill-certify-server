import express from 'express'

import { UserControllers } from './user.controller'

import { USER_ROLE } from './user.constant'
import { authMiddleware } from '../../middleware/authMiddleware'

const router = express.Router()

// GET ALL USERS
router.get(
  '/all-user',
  authMiddleware(USER_ROLE.admin),
  UserControllers.getAllUser,
)

// GET USER BY ID
router.get(
  '/single-user/:id',
  authMiddleware(USER_ROLE.admin),
  UserControllers.getUserById,
)

// DELETE USER BY ID
router.delete(
  '/delete-user/:id',
  authMiddleware(USER_ROLE.admin),
  UserControllers.deleteUserById,
)

export const UserRoutes = router
