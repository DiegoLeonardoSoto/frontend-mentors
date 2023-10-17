type Props = {
  text: string
}

const ItemList = ({ text }: Props) => {
  return (
    <div className="flex gap-4 items-start">
      <img src="../public/assets/images/icon-list.svg" alt="" />
      <li>{text}</li>
    </div>
  )
}

export default ItemList
