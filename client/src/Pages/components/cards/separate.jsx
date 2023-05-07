{
  data2.map((item, i) => (
    <div
      key={item._id}
      className="   pb-3 mb-10 card-shadow-1 rounded-md cursor-pointer"
      onClick={() => navigate(`/list/package/${item._id}`)}
    >
      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"></div>

        <img
          src={item.images[0]}
          alt=""
          className="aspect-video skeleton w-full rounded-md h-auto w-full "
        />
        <div className="absolute opacity-90 bottom-2 w-[96%] z-50 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2">
          <h1 className="font-bold text-white  text-sm sm:text-base">
            {item.offerdescription}
          </h1>
        </div>
      </div>

      {/*Texts*/}

      <div className="px-2 py-4 flex flex-col items-start">
        <div className="flex items-start justify-between w-full ">
          {" "}
          <span className="w-[70%] text-blacky-medium font-semibold sm:font-bold text-lg card-text ">
            {item.title}
          </span>
          <span className="w-[30%] text-[#03965e] flex items-center justify-end text-sm text-right font-bold">
            {item.duration}
          </span>
        </div>
        <p className="card-text text-base my-2 text-[gray]">
          {item.description}
        </p>
        <h3 className="text-xs px-2 py-[4px] rounded md:text-base mb-0 bg-[red] text-[white]">
          <b>{item.offertitle}</b>
        </h3>
      </div>

      {/*Buttons*/}
      <div className="px-2 flex flex-col">
        <div className="flex justify-start items-center gap-2">
          <span className="font-bold text-lg sm:text-2xl">
            {item.offerprice &&
              item.offerprice
                .toString()
                .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}{" "}
            &#8377;
          </span>
          <strike className="text-xs sm:text-base text-graydust-medium">
            <span>5,000 &#8377;</span>
          </strike>
        </div>
        <span className="text-xs sm:text-sm text-graydust-medium">
          per person
        </span>
      </div>
    </div>
  ));
}
