import crypto from 'crypto'

const skuGenerator = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < 8; i++) {
    const randomIndex = crypto.randomInt(0, chars.length)
    result += chars[randomIndex]
  }
  return result
}

export default skuGenerator
