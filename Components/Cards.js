import React from 'react';

const Cards = () => {
    return (
        <div id='EVENTS' className='py-10 items-center jusitfy-center px-10'>
            <div>   
                <h1 className='text-center text-xl lg:text-4xl'>Technical Events</h1>
                <div className='flex lg:flex-row  flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:py-5 mx-auto lg:pl-40'>
                    {/* KAATHUVAKKULA ORU CIRCUIT */}
                    <div className='flex flex-col bg-white  lg:w-4/6 items-center justify-center  px-3 py-2 my-10 rounded-xl'>
                        <div className='flex lg:h-44 h-36 w-36 lg:w-44 items-center justify-center'><img src="https://imgs.search.brave.com/-f_LweFmPuBkhYmOIFDsz4PTuTpFf9tDKOqzEF1CDDo/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZGF0YS1hbmFs/eXNpcy03Lzk2LzEz/LTUxMi5wbmc" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 py-5 font-bold underline'>KAATHUVAAKULA ORU CIRCUIT</h1>
                            <h1 className='text-black'>SIMULATE THE GIVEN CIRCUIT USING MATLAB SOFTWARE.</h1></div>
                    </div>
                    {/* -----------------------CONNECTIONS----------------------------------- */}
                    <div className='flex flex-col bg-white  lg:w-4/6 items-center justify-center my-10 px-3 py-2 rounded-xl'>
                        <div className='flex lg:h-44 h-36 w-36 lg:w-44 items-center justify-center '><img src="https://imgs.search.brave.com/icKq7CQJlxJ-6_lt2XvFbUyN_BUBW1CwuFR_1bn8EF0/rs:fit:980:980:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z180MTMxODgucG5n" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>CONNEXIONS</h1>
                            <h1 className='text-black'>DEBUG THE ELECTRICAL CIRCUITS</h1></div>
                    </div>
                    {/* --------------------------------EXJECT--------------------------------- */}
                    <div className='flex flex-col bg-white  lg:w-4/6 w-6/6 items-center justify-center  px-3 py-2 my-10 rounded-xl'>
                        <div className='flex lg:h-44 h-36 w-36 lg:w-44 items-center justify-center'><img src="https://imgs.search.brave.com/KoBb5c6mKAkYZ1tHpEb426obwhA2hOJ-mkfxxFniON8/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvcGVvcGxlLWxp/bmVhci1ibGFjay8y/MDQ4LzYxMDlfLV9C/dXNpbmVzc19FeHBv/c2l0aW9uLTEwMjQu/cG5n" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>EXJECT</h1>
                            <h1 className='text-black'>PROTOTYPES/PROJECTS SHALL BE PRESENTED IN HERE! </h1></div>
                    </div>
                </div>
                {/* ------------------------------------TIK TALK--------------------------------- */}
                <div className='flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:py-10 mx-auto lg:pl-64'>
                
                    <div className='flex flex-col bg-white  lg:w-3/6 items-center justify-center my-10 px-3 py-2 rounded-xl'>
                        <div className='flex lg:h-44 h-36 w-36 lg:w-44 items-center justify-center'><img src="https://imgs.search.brave.com/CnFDGrGiu57NC3blr9Pg8TDDMXiJNrY9wN9RvUiqqjg/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvcGl4ZWwtcGVy/ZmVjdC1hdC0xNnB4/LXZvbHVtZS0xLzE2/LzUwMjgtNTEyLnBu/Zw" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>TIK TALK</h1>
                            <h1 className='text-black'>SUIT YOURSELF FOR A FUN RIDE OF QUIZ.</h1></div>
                    </div>
                {/* -------------------------------------BREAKING COde---------------------------- */}
                    <div className='flex flex-col bg-white  lg:w-3/6 items-center justify-center my-10 px-3 py-2 rounded-xl'>
                        <div className='flex lg:h-44 h-36 w-36 lg:w-44 items-center justify-center'><img src="https://imgs.search.brave.com/CKC_V_uGmqBE_zWZ_1yDruFC_0LfO4Ae7XHDD94J1bM/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYmxhY2stcm91/bmQtd2ViLWljb25z/LzEwMC9yb3VuZC13/ZWItaWNvbnMtYmxh/Y2stNDAtNTEyLnBu/Zw" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>BREAKING CODE</h1>
                            <h1 className='text-black'>IT’S A RED ALERT! THIS IS AN CODE DEBUGGING EVENT(C LANGUAGE)</h1></div>
                    </div>
                    </div>
                    <hr className='py-5 w-24'></hr>
                <h1 className='text-center text-bold text-xl lg:text-4xl'>Non Technical Events</h1>
                <div className='flex lg:flex-row  flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:py-5 mx-auto lg:pl-40'>
                    {/* ZAINESNESS */}
                    <div className='flex flex-col bg-white  lg:w-4/6 items-center justify-center  px-3 py-2 my-10 rounded-xl'>
                        <div className='flex lg:h-44 h-36 w-36 lg:w-44 items-center justify-center'><img src="https://imgs.search.brave.com/_R7qllIR25AFJ8EUc6JiAeuqQgm2Veyt0JJs8wGgAoI/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvcG9wdWxhci1t/ZW1lcy80OC9KRC0w/MS01MTIucG5n" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>ZAINESNESS</h1>
                            <h1 className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1></div>
                    </div>
                    {/* -----------------------SHUTTER BUG----------------------------------- */}
                    <div className='flex flex-col bg-white  lg:w-4/6 items-center justify-center my-10 px-3 py-2 rounded-xl'>
                        <div className='flex lg:h-44 h-36 w-36 lg:w-44 items-center justify-center'><img src="https://imgs.search.brave.com/tDboASQRABRK8Ye4pkdXFOCrLrC21K5UqxAnOEpOLAs/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/Uzhhb3R4YmdlRVZq/ZXBpVzh4TlJ3SGFI/YSZwaWQ9QXBp" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>SHUTTER BUG</h1>
                            <h1 className='text-black'>SEIZE THE MOMENT WITH YOUR AMAZING LENS.</h1></div>
                    </div>
                    {/* --------------------------------CINELOGY--------------------------------- */}
                    <div className='flex flex-col bg-white  lg:w-4/6 items-center justify-center my-10 px-3 py-2 rounded-xl'>
                        <div className='flex lg:h-32 h-32 w-32 lg:w-32 items-center justify-center'><img src="https://imgs.search.brave.com/tpYgyadIzmyTgD1wGI3Ki6hkucJsuqioHsOoQgZMdeA/rs:fit:980:872:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z180OTc1NjIucG5n" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>CINELOGY</h1>
                            <h1 className='text-black text-justify'>ANY CINEPHILES OUT THERE PICK YOUR BRAIN OF THE QUESTIONS FRAMED FROM CINE FRAMES.</h1></div>
                    </div>
                    {/* --------------------------------SINGOPHOBIA----------------------------------------- */}
                    <div className='flex flex-col bg-white  lg:w-4/6 items-center justify-center my-10 px-3 py-2 rounded-xl'>
                        <div className='flex lg:h-44 h-36 w-36 lg:w-44 items-center justify-center'><img src="https://imgs.search.brave.com/RTjxcCpar4KERu-NwMBgj-tCn_X29fqhwWsI71k8j1U/rs:fit:980:980:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z180MDcyMy5wbmc" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>SINGOPHOBIA</h1>
                            <h1 className='text-black text-justify'>TUNE YOURSELF INTO THIS SURESHOT FUNFILLED MUSICAL EVENT.</h1></div>
                    </div>
                    {/* --------------------------------TAXIC----------------------------------------------- */}
                    <div className='flex flex-col bg-white  lg:w-4/6 items-center justify-center my-10 px-3 py-2 rounded-xl'>
                        <div className='flex lg:h-32 h-36 w-36 lg:w-32   items-center justify-center'><img src="https://imgs.search.brave.com/RRxtAiWzHpZe8PwZS-yeyAbRuLMgQjw-tjVBkEV4SbY/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZGVtb2NyYWN5/LzUwMC9Qb2xpdGlj/YWxfMTMtNTEyLnBu/Zw" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>TAXIC</h1>
                            <h1 className='text-black text-justify'>IS THIS THE ‘ARGUABLY’ BEST, EVENT SO FAR.GET YOUR ARGUMENT POINTS IN THIS DEBATE CONTEST.</h1></div>
                    </div>
                    <div className='flex flex-col bg-white  lg:w-4/6 items-center justify-center my-10 px-3 py-2 rounded-xl'>
                        <div className='flex lg:h-44 h-36 w-36 lg:w-44 items-center justify-center'><img src="https://imgs.search.brave.com/WdBSGk7TVRqHk9wKOBwOVjUuQd4oIp6jqe-nQzJfu8I/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbWVkaWEtYW5k/LWVudGVydGFpbm1l/bnQtNC81MC82NC01/MTIucG5n" alt="" /></div>
                        <div className='text-center p-5'>
                            <h1 className='text-orange-400 lg:text-2xl py-5 font-bold underline'>COMICSTAAN</h1>
                            <h1 className='text-black'>OPEN UP IN THIS OPEN MIC EVENT AND LET YOUR WITTY HUMOUR SEIZE THE STAGE. </h1></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
