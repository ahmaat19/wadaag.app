import { getData } from '../components/Storage'

export default async function Access() {
  const res = await getData('user')

  if (res) {
    return true
  } else {
    return false
  }
}
