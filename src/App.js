import Cards from "./components/Cards";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";




const App = () => {
  return (
    <div className="flex flex-col">
        <div class="">
          <Sidebar/>
        </div>
        <div className="col-span-2 mt-0">
          
          <br />
            <div className="grid grid-cols-4 gap-7 mx-50">
              <div className="mx-50" >
                <h3>Topic</h3>
              </div>
              <div>
              <h3>Topic</h3>
                <Dropdown/>
              </div>
              <div>
              <h3>Activity</h3>
                <Dropdown/>
              </div>

              <div>
                <Search/>
              </div>

            </div>
          </div>

            <br />


<br />
        <div className="mx-20">

            <Cards/>
        </div>
        <footer className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
          <div className="grid grid-cols-2 gap-60 mx-50">
            <div className="">
          {/* <Dropdown/> */}
            </div>
            <div >
          {/* <Dropdown/> */}
            </div>
            <div>
              <input type="Ask me anything" className="w-full border-spacing-1 bg-black" />
            </div>
          </div>

        </footer>
            


            


    </div>


/* <section className="flex md:flex-row flex-col sm:py-16 py-6">
  <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
    <Sidebar/>
    
  <div className="flex flex-row justify-between items-center w-full">
    <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
      <div className="grid grid-cols-5 mx-12 w-full">
      <div  >
                 <h3>Topic</h3>
                 <Dropdown/>
               </div>
               <div>
               <h3>Activity</h3>
                 <Dropdown/>
               </div>

               <div>
                 <Search/>
               </div>
             </div>

      <Cards/>
      </div>
    </div>
</div>

</section>  */
  );
}

export default App;
