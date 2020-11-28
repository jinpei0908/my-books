import { ChangeEvent } from 'react'

interface Props {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, onChange }: Props) => (
  <div className={'container-sm'}>
    <input
      type="text"
      placeholder="タイトルで絞り込み"
      value={value}
      onChange={onChange}
      className={'form-control input'}
    />
  </div>
)

export default Input
