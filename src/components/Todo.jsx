import React, { useState } from 'react'

export default function Todo() {
    const data = ['Cong Viecj 1','Cong viec 2'];
    const [jobs, setJobs] = useState(data);
    const [job, setjob] = useState('');
    const [isUpdate,setIsUpdate] = useState(false);
    const [indexUpdate,setIndexUpdate] = useState(-1);
    const handleChange = (event)=>{
        setjob(event.target.value);
    }

    const handleEdit = (index)=>{
        let jd = jobs[index]
        setjob(jd);
        setIsUpdate(true)
        setIndexUpdate(index);
    }
    const save = (event)=>{
        event.preventDefault();
        setJobs([...jobs,job]);
        setjob('');
    }   

    const update = (event)=>{
        event.preventDefault();
        jobs[indexUpdate] = job;
        setJobs([...jobs]);
        setjob('')
        setIsUpdate(false)
    }

    const handleDelete = (index)=>{
        jobs.splice(index,1);
        setJobs([...jobs])
    }
    return (
        <>
            <div className='text-center text-danger'>Todo</div>
            <div className="container">
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" value={job} onChange={handleChange} name="" id="" className="form-control" placeholder="Tên công việc" />
                    </div>
                    {isUpdate ?
                    <button className="btn btn-primary" onClick={update}>Update</button> :
                    <button className="btn btn-success" onClick={save}>Save</button>
                     }
                    
                </form>

                <ul className="list-group">
                    {jobs.map((item,index)=>{
                        return (
                            <li key={index} className="list-group-item">{item}
                                <button className='btn btn-primary' onClick={()=>handleEdit(index)}>Eidt</button>
                                <button className='btn btn-danger' onClick={()=>handleDelete(index)}>Delete</button>
                            </li>
                        )
                        
                    })}
                 
                </ul>
            </div>

        </>
    )
}
