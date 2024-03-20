import LineItem from './LineItem'

let ItemList = ({items, hanldeCheck, deletItem})=> {
  return (
    <ul>
    {items.map((item)=> (
      <LineItem
      key={item.id}
      item={item}
      hanldeCheck={hanldeCheck}
      deletItem={deletItem}
      />
    ))}
   </ul>
  )
}

  export default ItemList