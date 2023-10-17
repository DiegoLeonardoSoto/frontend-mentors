import ItemList from './ItemList'

const List = () => {
  return (
    // list-inside list-image-[url('../public/assets/images/icon-list.svg')]
    <ul className="flex flex-col gap-y-5 sm:gap-y-3">
      <ItemList text="Product discovery and building what matters" />

      <ItemList text="Measuring to ensure updates are a success" />

      <ItemList text="And much more!" />
    </ul>
  )
}

export default List
