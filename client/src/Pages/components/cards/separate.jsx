<div className="flex flex-wrap justify-center  items-center w-[90%] md:w-[80%] mx-auto gap-4 pt-8">
               

{/*Drop down of categories */}

<Dropdown
    label="Categories"
    dismissOnClick={false}
    class=" flex md:justify-center sm:justify-start items-center text-blacky-light px-6 py-1  shadow-sm shadow-[#00b777] rounded-full text-xs">
    <Dropdown.Item>
        <input type="checkbox" className=" accent-evergreen" id="honeymoon" name="dom" value="domestic" onChange={handleCataChange}
        /><label for="honeymoon" className="pl-3 text-base text-blacky-bright"> Domestic</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="family" name="int" value="international" onChange={handleCataChange} 
        /><label for="family" className="pl-3 text-base text-blacky-bright"> International</label><br />
    </Dropdown.Item>    
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="friends" name="hon" value="honeymoon"  onChange={handleCataChange}
        /><label for="friends" className="pl-3 text-base text-blacky-bright"> Honeymoon</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="holiday" name="hol" value="holiday" onChange={handleCataChange}
        /><label for="holiday" className="pl-3 text-base text-blacky-bright"> Holiday</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="holiday" name="fam" value="family" onChange={handleCataChange}
        /><label for="holiday" className="pl-3 text-base text-blacky-bright"> Family</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="checkbox" className="accent-evergreen" id="holiday" name="fri" value="friends" onChange={handleCataChange}
        /><label for="holiday" className="pl-3 text-base text-blacky-bright"> Friends</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="submit" className="ml-3 my-2 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" onClick={handleClick}/>
    </Dropdown.Item>
</Dropdown>

<Dropdown
    label="Budget"
    dismissOnClick={false}
    class=" flex md:justify-center sm:justify-start items-center text-blacky-light px-6 py-1  shadow-sm shadow-[#00b777] rounded-full text-xs">
    <Dropdown.Item>
        <input type="radio" className="accent-evergreen" id="budget1" name="budget" value="b1" onChange={handlebudgetChange}
        />   <label for="budget1" className="pl-3 text-base text-blacky-bright"> Less than 10,000</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className="accent-evergreen" id="family" name="budget" value="b2" onChange={handlebudgetChange} />
        <label for="family" className="pl-3 text-base text-blacky-bright"> 10,000 - 20,000</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="friends" name="budget" value="b3" onChange={handlebudgetChange} />
        <label for="friends" className="pl-3 text-base text-blacky-bright"> 20,000 - 40,000</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="holiday" name="budget" value="b4" onChange={handlebudgetChange} />
        <label for="holiday" className="pl-3 text-base text-blacky-bright"> 40,000 - 50,000</label><br />
    </Dropdown.Item>

    <div className="flex">
        <div className="flex items-center">
            <Dropdown.Item>
                <label for="min_budget" className="text-blacky-bright">Min</label>
                <input type="number" id="min_budget" name="min_budget" placeholder="₹1000" className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl" onChange={handleMinValueChange}/>
            </Dropdown.Item>
        </div>
        <div className="flex items-center">
            <Dropdown.Item>
                <label for="max_budget" className="ml-6 text-blacky-bright">Max</label>
                <input type="number" id="max_budget" name="max_budget" placeholder="₹3000" className="ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl"  onChange={handleMaxValueChange}/>
            </Dropdown.Item>
        </div>
    </div>
    <Dropdown.Item>
        <input type="submit" className="align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" onClick={handleSubmitClick} />
    </Dropdown.Item>
</Dropdown>

{/* <Dropdown
    label="Activities"
    dismissOnClick={false}
    class=" w flex md:justify-center sm:justify-start items-center text-blacky-light  shadow-sm shadow-gray-500 rounded-2xl text-xs">
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="adventure" name="activity" value="" />
        <label for="adventure" className="pl-3 text-base text-blacky-bright">Adventure</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="nature" name="activity" value="" />
        <label for="nature" className="pl-3 text-base text-blacky-bright"> Nature</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="hill" name="activity" value="" />
        <label for="hill" className="pl-3 text-base text-blacky-bright"> Hill Station</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="radio" className=" accent-evergreen" id="religious" name="activity" value="" />
        <label for="religious" className="pl-3 text-base text-blacky-bright"> Religious</label><br />
    </Dropdown.Item>
    <Dropdown.Item>
        <input type="submit" className=" rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none" value="Apply" />
    </Dropdown.Item>
</Dropdown> */}



</div>











<div key={item._id} className="pb-16 md:w-[45%] lg:w-[30%] pb-8">
              <img
                className="aspect-video rounded-lg skeleton  w-full rounded-lg"
                src={item.images[0]}
              />
              <div className="pt-5">
                <h3 className="text-xl font-bold text-blacky-medium">
                  {item.title}
                </h3>
                <p className="text-sm md:text-[17px] text-blacky-light card-text">
                  {item.description}
                </p>
              </div>
              <div className=" pb-5 flex justify-between items-center">
                <p className="text-evergreen text-xl font-bold">
                  ₹{item.cheapestPrice}
                </p>
                <Link to={`/list/hotel/${item._id}`}>
                  <button className="bg-evergreen text-whiteglow font-semibold text-sm px-8 py-2 rounded-md ">
                    View
                  </button>
                </Link>
              </div>
            </div>






<DataGrid className='data-grid'
                    rows={bids }
                    columns= {columns.concat(actionColumn)}
                    sx={{
                        boxShadow: 5,
                        my:5,
                        px:2,
                        py:2,
                        fontSize:18,
                        
                      }}
                      pageSize={count}
                      rowsPerPageOptions={[count]}
                      getRowId={(row) => row._id}
                    />