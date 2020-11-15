import { ChangeEvent } from 'react'

interface Props {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, onChange }: Props) => (
  <input
    type="text"
    placeholder="タイトルで絞り込み"
    value={value}
    onChange={onChange}
  />
)

export default Input
