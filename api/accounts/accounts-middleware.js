const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR 
  console.log('checkAccountPayload middleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR 
  console.log('checkAccountNameUnique middleware')
  next()
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR 
  try {
    const account = await Account.getById(req.params.id)
    if (!account) {
      next({ status: 404, message: 'not found' })
    } else {
      req.account = account
      next()
    }
  } catch (err) {
    next(err)
  }
}
