import crypto from 'crypto'

const randomGenerator = () => {
  const radom = crypto.randomBytes(5).toString('hex')
  return radom
}
export default randomGenerator
