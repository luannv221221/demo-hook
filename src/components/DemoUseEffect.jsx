import React, { useEffect, useState } from 'react'

export default function DemoUseEffect() {
    const [title,setTitle] = useState('Hồ Xuân HÙng');
    useEffect(()=>{
        console.log("Use Effect");   
        // thường dùng dể callAPI 
        // có tác vụ gọi API 
        // cách 1 : 
        // cách 2 thêm []
        // cách 3 thêm [d] chứa các dependency (sự phụ thuộc)
    },[title])
  return (
    <>
        {console.log("compnent render")}
        <div>DemoUseEffect{title}</div>
        <button onClick={()=>setTitle('Phạm Tuấn Bình')}>Update</button>
    </>
  )
}
