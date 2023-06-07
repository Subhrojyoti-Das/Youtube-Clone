function video_learn(){
    document.getElementById("myContent").append(`
        <div>
    `);
    const mysrc=[
              "https://www.youtube.com/embed/w7BnjCOpclY"
            , "https://www.youtube.com/embed/KpfJ-glIwR8"
            , "https://www.youtube.com/embed/BsDoLVMnmZs"
            , "https://www.youtube.com/embed/Edsxf_NBFrw"
            , "https://www.youtube.com/embed/ER9SspLe4Hg"
            , "https://www.youtube.com/embed/yz7nYlnXLfE"
            , "https://www.youtube.com/embed/RGOj5yH7evk"
            , "https://www.youtube.com/embed/SyIN_YMfoQs"
            , "https://www.youtube.com/embed/Bs68k6xfR3E"
            , "https://www.youtube.com/embed/yRpLlJmRo2w"
            , "https://www.youtube.com/embed/-mJFZp84TIY"
            , "https://www.youtube.com/embed/Oe421EPjeBE"
            , "https://www.youtube.com/embed/J6mDkcqU_ZE"
            , "https://www.youtube.com/embed/3qBXWUpoPHo"
            , "https://www.youtube.com/embed/q_JsgpiuY98"
            , "https://www.youtube.com/embed/RSIstPUiEjY"
            , "https://www.youtube.com/embed/y3WTwzx5ABk"
            , "https://www.youtube.com/embed/9SGDpanrc8U"
        ];
    for(let i=0; i<mysrc.length; i++){
        document.getElementById("myContent").append(`
            <iframe class="myContent" width="393px" height="250px" src="${mysrc[i]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `);
    }
    document.getElementById("myContent").append(`
        </div>
    `);
    document.getElementById("myContent").innerHTML=document.getElementById("myContent").innerText;
}