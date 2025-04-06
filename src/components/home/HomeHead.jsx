



const HomeHead = () => {
    return <>
    <section className="max-w-[1400px] mx-auto">
        <div>
            <div className="bg-gray-200  flex items-center px-[20px] py-[4px] h-[40px] w-[350px] rounded-[8px] md:mx-[40px] mx-auto md:mt-[80px] mt-[50px] ">
            <i className="fa-solid fa-magnifying-glass md:mr-[10px] "></i>
       <input  className="w-[100%]  outline-none" type="text" placeholder="Search for Products, Brands and More"  /> 
            </div>
            <img loading="lazy" className="mt-[30px]" src="https://rukminim2.flixcart.com/fk-p-flap/2700/233/image/764fb9b9dd00ade5.jpg?q=60" alt="" />
        </div>
    </section>
    </>
}

export default HomeHead;