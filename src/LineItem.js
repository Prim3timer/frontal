import {FaTrashAlt} from 'react-icons/fa'
let LineItem = ({item, hanldeCheck, deletItem})=> {
    return (
              <li className="item">
         <input type="checkbox" 
         checked={item.checked}
         onChange={()=> hanldeCheck(item.id)}  
          />
         <label
         style={(item.checked)? {textDecoration: 'line-through'} : null }
         onDoubleClick={()=>hanldeCheck(item.id)}
         >{item.item}</label>
         <FaTrashAlt 
         onClick={()=> deletItem(item.id)}
         role="button" tabIndex='0'
         aria-label={`Delete ${item.item}`}/>
        </li>
    )
}

export default LineItem