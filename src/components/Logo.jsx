export  function Logo(){
    return (
      <div className=" relative left-5 text-2xl">
        <a
          href="http://localhost:5173"
          class="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <span class="self-center text-heading font-semibold whitespace-nowrap text-blue-600">
            Learning Hours
          </span>
        </a>
      </div>
    );
}