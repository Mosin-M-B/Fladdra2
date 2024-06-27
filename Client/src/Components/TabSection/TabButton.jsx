import './TabSection.css'
// eslint-disable-next-line react/prop-types
export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button style = {{width:'100%',height:'150px', textAlign:'left' , marginRight:'20px'}}className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
