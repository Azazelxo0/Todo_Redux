
import { useState } from 'react';
import './App.css'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addCompleted, addTodo, deleteTodo } from './redux/todoSlice';

function App() {
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);
  const todoItem = useSelector((state) => state.todoReducer.list)
  const completedItem = useSelector((state)=>state.todoReducer.completed)
  console.log('completed values');
  console.log(completedItem);
  
  
  console.log('value pushed');
  console.log(todoItem);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if(inputValue){
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
   

  }
  const handleRemove = (id) => {
    dispatch(deleteTodo(id));  
  };

  const handleCompleted= (text,id)=>{
    dispatch(addCompleted(text));
    dispatch(deleteTodo(id));  
  }
  




  return (
    <>
      <Row className='m-5'>
        <Col md={2}></Col>
        <Col md={8} className=''>
          <h1 className='text-center text-primary'>TO-DO </h1>
          <div className='mt-5 d-flex justify-content-center ' >

            <input type="text" name="" id="todo" className='form-control w-50 ' value={inputValue}  placeholder="Add a new task"
              onChange={(e) => setInputValue(e.target.value)} />
            <Button className='btn btn-success ms-3' onClick={handleAdd} > ADD</Button>

          </div>
          <div className='d-flex mt-5'>
            <Col md={6} className='border border-info rounded'>
              <h2 className='text-center text-info'>LIST</h2>
              {
                todoItem?.length > 0 ?
                  todoItem.map((items) => (
                    <div className='d-flex justify-content-center mt-5 mb-5'>
                      <h5 style={{ color: "red" }}>  {items.text}</h5>
                      <Button className='ms-5 ' variant="outline-success" onClick={()=>handleCompleted(items.text,items.id)}><i class="fa-duotone fa-solid fa-check" ></i></Button>
                      <Button className='ms-2 ' variant="outline-danger" 
                      onClick={() => handleRemove(items.id)} ><i class="fa-solid fa-trash"></i></Button>

                    </div>
                  )) :
                  <p className='text-center text-danger'>Your To-Do List is Empty</p>
              }


            </Col>
            <Col md={6} className='border ms-3 border-warning rounded'>
              <h3 className='text-center text-warning'>Completed</h3>
              {
                completedItem?.length>0?
                completedItem.map((item)=>(
                  <div className='d-flex justify-content-center mt-5 mb-5'>
                    <h5 style={{ color: "green" }} >{item.text}</h5>
                  </div>
                  

                )):
                <p className='text-center text-danger'>No Task Completed</p>
              }

            </Col>
          </div>
        </Col>
        <Col md={2}></Col>

      </Row>
    </>
  )
}

export default App
