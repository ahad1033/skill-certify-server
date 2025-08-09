import { model, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: {
      type: String,
      enum: ['admin', 'student', 'supervisor'],
    },
    gender: { type: String, enum: ['male', 'female'] },
    currentLevel: {
      type: String,
      enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    },
    canTakeStepOne: { type: Boolean, default: true },
    canTakeStepTwo: { type: Boolean, default: false },
    canTakeStepThree: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
)

// Add a virtual `id` field
userSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

export const User = model('User', userSchema)
