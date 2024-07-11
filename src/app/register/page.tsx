

export default function Page() {
    return (
  
        
      <form className="bg-blue-200-alpha p-4 h-2/3 w-1/3 text-white space-y-3 flex flex-col main-cont  ">
        <span style={{fontWeight:"bold",fontSize:"1.5rem"}}>REGISTER</span>
        <div className="space-y-3 w-full">
          <div className="space-x-3 flex flex-col items-start">
              <label htmlFor="FirstName" className="pl-3">First Name</label>
              <input spellCheck={false} name="FirstName" className="bg-white bg-opacity-20 border border-gray-200 outline-none w-3/4"></input>
            </div>
            <div className="space-x-3 flex flex-col items-start">
              <label htmlFor="LastName" className="pl-3">Last Name</label>
              <input spellCheck={false} name="LastName"className="bg-white bg-opacity-20 border border-gray-200 outline-none w-3/4"></input>
            </div>
          </div>
          <div className="line w-full bg-white m-1"></div>
          <div className="space-y-3 w-full">
            <div className="space-x-3 flex flex-col items-start">
              <label htmlFor="Username" className="pl-3">Username</label>
              <input spellCheck={false} name="Username" className="bg-white bg-opacity-20 border border-gray-200 outline-none w-3/4"></input>
            </div>
            <div className="space-x-3 flex flex-col items-start">
              <label htmlFor="Password" className="pl-3">Password</label>
              <input spellCheck={false} name="Password" type="password" className="bg-white bg-opacity-20 border border-gray-200 outline-none w-3/4"></input>
            </div>
            <div className="space-x-3 flex flex-col items-start">
              <label htmlFor="renter" className="pl-3">Re-Enter Password</label>
              <input name="renter" spellCheck={false} type="password" className="bg-white bg-opacity-20 border border-gray-200 outline-none w-3/4"></input>
            </div>
              <div>
                <button className="bg-white text-white bg-opacity-20 float-left w-1/4 h-8 btn border-gray-200 hover:scale-105 transition-all duration-150 ">
                    Register
                </button>
              </div>
          </div>
      </form>
      
  
    );
  }