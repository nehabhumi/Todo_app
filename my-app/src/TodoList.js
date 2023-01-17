import React,{useState} from 'react'

 function TodoList() {
    const [activity ,setActivity] = useState("");
    const [listData ,setlistData] = useState([]);
    function AddActivity(){
        setlistData((listData)=> {
            const updatedList =[...listData,activity]
            console.log(updatedList);
            setActivity('');
            return updatedList;
        })

    }
    function removeActivity(i){
        const updatedListData = listData.filter((elem ,id)=>{
           return i!=id;
        })
        setlistData(updatedListData);
    }
    
  return (
    <>
        <div className='Container'>
          <div className='header'>TODO LIST</div>
          <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
          <button onClick={AddActivity}>Add</button>
          <p className='list-heading'>Here is your list:{")"}</p>
          {listData!=[] && listData.map((data, i)=>{
            return(
                <>
                <p key={i}>
                        <div className='ListData'>{data}</div>
                        <div className='btn-position'><button onClick={() =>removeActivity
                       (i)}>remove(-)</button></div>
                    </p>
                </>
            )
          
           })}
        </div>
    </>
  )
}
export default TodoList;
