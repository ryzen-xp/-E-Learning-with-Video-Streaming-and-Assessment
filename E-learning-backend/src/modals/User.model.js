// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
    lowercase: true, // Store email in lowercase
  },
  password: {
    type: String,
    required: true,
    select: false, // Don't return the password by default
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true, // Ensure mobile numbers are unique
    match: [/^\d{10}$/, 'Please enter a valid mobile number'], // Regex for validation
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'], // Options for gender
  },
  role: {
    type: String,
    enum: ['student', 'instructor', 'admin'], // Role options
    default: 'student', // Default role
  },
  profileImage: {
    type: String,
    default: 'default-profile.png', // Default profile image URL
  },
  bio: {
    type: String,
    maxlength: 500, // Maximum length for bio
  },
  coursesEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Reference to the Course model
  }],
  coursesCreated: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Reference to the Course model
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the updatedAt field on save
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
