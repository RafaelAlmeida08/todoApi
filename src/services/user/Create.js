class CreateUserService {
  constructor (userModel, hashPassword) {
    this.userModel = userModel
    this.hashPassword = hashPassword
  }

  async execute ({ name, email, password }) {
    const hashedPassword = await this.hashPassword(password, 8)
    return await this.userModel.create({
      name,
      email,
      password: hashedPassword
    })
  }
}

module.exports = CreateUserService
