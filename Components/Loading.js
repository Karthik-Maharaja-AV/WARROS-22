const Loading = () => {
   
    return (
        <div id='loader' className={`centers flex items-center justify-center text-center h-screen `}>
            <div className="rings absolute w-52 h-52  rounded-full "></div>
            <span>Loading...</span>
        </div>
    );
}

export default Loading;
