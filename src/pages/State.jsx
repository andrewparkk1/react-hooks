import {useState} from 'react'

function State() {
  const [person, setperson] = useState({ name: 'andrew', age: 5 })

  const onChange = (e) => {
    // const { name, value } = e.target
    console.log([e.target.name])
    setperson((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const age = e.target.age.value
    console.log(name, age)
  }

  return (
    <>
      <h1 className='font-bold text-5xl'>State</h1>


      <div>
        <p>{person.name}</p>
        <p>{person.age}</p>
      </div>


      <form onSubmit={onSubmit}>
        <div className="grid gap-5 py-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Change Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input type="text" placeholder="Your name" className="input input-bordered" name='name' id='name' onChange={(onChange)} value={person.name} />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Change Age</span>
            </label>
            <label className="input-group">
              <span>Age</span>
              <input type="text" placeholder="Your age" className="input input-bordered" name='age' id='age' onChange={onChange} value={person.age} />
            </label>
          </div>
          {/* <div className="form-control">
            <button className='btn btn-primary btn-square btn-wide'>Submit</button>
          </div> */}
        </div>

      </form>
    </>
  );
}



export default State