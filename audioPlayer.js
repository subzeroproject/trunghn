        function audioPlayer(){
            var currentSong = 0;
            $("#audioPlayer")[0].src = $("#playlist li a")[0];
            $("#audioPlayer")[0].play();
            $("#playlist li a").click(function(e){
                e.preventDefault();
                $("#audioPlayer")[0].src = this;
                $("#audioPlayer")[0].play();
                $("#playlist li").removeClass("current_song");
                 currentSong = $(this).parent().index();
                 $(this).parent().addClass("current_song");
             });
        
             $("#audioPlayer")[0].addEventListener("ended", function(){
                currentSong++;
                 if(currentSong == $("#playlist li a").length)
                    currentSong = 0;
                $("#playlist li").removeClass("current_song");
                $("#playlist li:eq("+currentSong+")").addClass("current_song");
                $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
                $("#audioPlayer")[0].play();
             });
        }