require('dotenv/config')

class AuthUserService {
  constructor (tokenService) {
    this.tokenService = tokenService
  }

  async execute (userId) {
    const key = process.env.TOKEN_KEY
    const expiresTime = '120s'
    return await this.tokenService({}, key, {
      subject: userId.toString(),
      expiresIn: expiresTime
    })
  }
}

module.exports = AuthUserService
