const music = new Audio('');

// create Array 

const songs = [{
        id: '1',
        songName: ` Do You Know <br>
        <div class="subtitle">Diljit Dosanjh </div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: `Apna Bana Le  <br>
        <div class="subtitle">Bhediya</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id: "3",
        songName: `Aadha Main Aadhi Vo _ Tabu _ B Praak_ Irshad Kamil_ Ravi Basrur _ Bhushan Kumar(MP3_160K)
         <br><div class="subtitle"> _ Bholaa_ Ajay Devgn Levi</div>`,
        poster: "img/3.jpg",
    },
    {
        id: "4",
        songName: `Bapu Tere Karke (Full Song) _ Lovely Noor _ MixSingh _ New Punjabi Songs 2019(MP3_160K) <br><div class="subtitle">Amar Sandhu _ </div>`,
        poster: "img/4.jpg",
    },
    {
        id: "5",
        songName: ` Lahore (Official Video) Bhushan Kumar _ Vee _ DirectorGifty _ T-Series(MP3_160K)<br><div class="subtitle">Guru Randhawa_</div>`,
        poster: "img/5.jpg",
    },
    {
        id: "6",
        songName: `KAKA Shape  <br><div class="subtitle">kaka</div>`,
        poster: "img/6.jpg",
    },

    {
        id: "7",

        songName: `genda fool <br><div class="subtitle">Baadsha</div>`,
        poster: "img/7.jpg",
    },
    {
        id: "8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id: "9",
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },
    {
        id: "10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },
    {
        id: "11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },
    {
        id: "12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id: "13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },
    {
        id: "14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id: "15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",

    },
    {
        id: "16",
        songName: `Baby Doll <br><div class="subtitle">Ragini MMS 2</div>`,
        poster: "img/16.jpg",
    },
    {
        id: "17",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/17.jpg",
    },
    {
        id: "18",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/18.jpg",
    },
    {
        id: "19",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/19.jpg",
    },
    {
        id: "20",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/20.jpg",
    },

    {
        id: "21",
        songName: `Diamond _ Official Music Video  _ Songs 2018 _ Jass Records(MP3_160K) <br><div class="subtitle">Gurnam Bhullar</div>`,
        poster: "img/21.jpg",
    },
    {
        id: "22",
        songName: `Aaya Ye Jhund Hai (Video) Jhund _  _ Ajay-Atul _ Nagraj _ Bhushan Kumar(MP3_160K) <br><div class="subtitle">Amitabh Bachchan</div>`,
        poster: "img/22.jpg",
    },
    {
        id: "23",
        songName: `Aladdin _ Sab Sahi Hai Bro - Badshah(MP3_160K)<br><div class="subtitle">Badshah</div>`,
        poster: "img/23.jpg",
    },
    {
        id: "24",
        songName: `Alcoholia_Vikram Vedha _  _ Vishal-Sheykhar_ Manoj M _Snigdhajit_Ananya(MP3_160K)<br><div class="subtitle">Hrithik Roshan_ Saif Ali Khan</div>`,
        poster: "img/24.jpg",
    },
    {
        id: "25",
        songName: ` THUG LIFE _ Jatinder Shah _ Ranbi(MP3_160K) <br><div class="subtitle">Diljit Dosanjh _</div>`,
        poster: "img/25.jpg",
    },
    {
        id: "26",
        songName: `Arijit Singh_ Pachtaoge _ _ Nora Fate(MP3_160K) <br><div class="subtitle">Vicky Kaushal</div>`,
        poster: "img/26.jpg",
    },


    {
        id: "27",
        songName: ` LYRICAL_ Dil Todeya _ Arjun Patiala _ Diljit Dosan(MP3_160K) <br><div class="subtitle">Diljit Dosan</div>`,
        poster: "img/27.jpg",
    },
    {
        id: "28",
        songName: ` Gaal Ni Kadni _  _ Desi Crew _ Latest(MP3_160K) <br><div class="subtitle">Parmish Verma</div>`,
        poster: "img/28.jpg",
    },
    {
        id: "29",
        songName: `Bad Boy _ Saaho _ Prabhas_ Jacqueline(MP3_160K)<br><div class="subtitle">Saaho _ Prabhas</div>`,
        poster: "img/29.jpg",
    },
    {
        id: "30",
        songName: ` Baadshaho_ Socha Hai Lyrical _ Emraan Hashmi_ E(M4A_128K) <br><div class="subtitle">Emraan Hashmi</div>`,
        poster: "img/30.jpg",
    },
    {
        id: "31",
        songName: `Birthday Gift  _ Mistabaaz(MP3_160K) <br><div class="subtitle"> Sharry Mann</div>`,
        poster: "img/31.jpg",
    },
    {
        id: "32",
        songName: `Dasi Na Mere Bare (Full Video) _ Goldy _ Latest Pu(MP3_160K) <br><div class="subtitle">Goldy </div>`,
        poster: "img/32.jpg",
    },
    {
        id: "33",
        songName: ` GIRLFRIEND _ JASS MANAK (Official Video) Satti Dhi(MP3_160K) <br><div class="subtitle">JASS MANAK</div>`,
        poster: "img/33.jpg",
    },
    {
        id: "34",
        songName: `Laembadgini(MP3_160K)<br><div class="subtitle">Diljit Dusanj</div>`,
        poster: "img/34.jpg",
    },
    {
        id: "35",
        songName: ` Garmi Song _ Street Dancer 3D _ Varun D_ Nora F_ S(MP3_160K) <br><div class="subtitle">Varun D_ Nora F</div>`,
        poster: "img/35.jpg",
    },
    {
        id: "36",
        songName: ` Ik Mulaqaat - Dream Girl __ Nus(MP3_160K) <br><div class="subtitle"> Ayushmann Khurrana</div>`,
        poster: "img/36.jpg",
    },
    {
        id: "37",
        songName: ` Je Yaar Ni Banana Goriye Menu Jhaanjar Bana Le Per ki _ B Praak_ Janni _ Gippy G_ Jasmin b_ New Song(MP3_320K) <br><div class="subtitle">B Praak_ Janni _ Gippy G_ </div>`,
        poster: "img/37.jpg",
    },
    {
        id: "38",
        songName: ` Ikk Vaari Hor Soch Lae _ Harish Verma _ Jaani _ B Praak _ Latest Punjabi Song 2016 _ Speed Records(MP3_320K) <br><div class="subtitle">Harish Verma _ Jaani _ B Praak </div>`,
        poster: "img/38.jpg",
    },
    {
        id: "39",
        songName: ` - Siftan  _ Khushboo Khan _ New Song 2023 _ Punjabi Song _ Kaka Song(MP3_160K) <br><div class="subtitle">Kaka </div>`,
        poster: "img/39.jpg",
    },
    {
        id: "40",
        songName: `  Viah Di Khabar Ek Khat Bewaqt Bhejya Kyon Kargi Khata kudiye New Punjabi Songs 2022(MP3_320K) <br><div class="subtitle">Kaka </div>`,
        poster: "img/40.jpg",
    },

    {
        id: "41",
        songName: `  Thumkeshwari - Bhediya _ Varun Dhawan_ Kriti S_ Shraddha K _ Sachin-Jigar_Rashmeet_ Ash K_ Amitabh B(MP3_160K) <br><div class="subtitle">Bhediya _ Varun Dhawan_  </div>`,
        poster: "img/41.jpg",
    },
    {
        id: "42",
        songName: `  THE LAST RIDE   Sidhu Moose Wala _ Wazir Patar(MP3_160K) <br><div class="subtitle">Sidhu Moose Wala  </div>`,
        poster: "img/42.jpg",
    },
    {
        id: "43",
        songName: `Seeti Maar _ Radhe - Your Most Wanted Bhai _ Salman Khan_ Disha Patani_Kamaal K_ Iulia V_DSP_Shabbir(MP3_160K) <br><div class="subtitle">Radhe </div>`,
        poster: "img/43.jpg",
    },

    {
        id: "44",
        songName: `Same Beef Song _ BOHEMIA _ Ft. Sidhu Moose Wala _ Byg Byrd _ Punjabi Song _sidhumoosewala _bohemia(MP3_160K) <br><div class="subtitle">Sidhu Moose  </div>`,
        poster: "img/44.jpg",
    },
    {
        id: "45",
        songName: `Same Time Same Jagah (Chaar Din) ●  ● Kulwinder Billa ● New Punjabi Songs(MP3_160K) <br><div class="subtitle">Sandeep Brar </div>`,
        poster: "img/45.jpg",
    },
    {
        id: "46",
        songName: `sachiyan mhobat <br><div class="subtitle">Diljit Dusanjh </div>`,
        poster: "img/46.jpg",
    },
    {
        id: "47",
        songName: `Phulkari _ Karan Randhawa (Official Video) Simar Kaur _ Rav Dhillon _ GK Digital _ Geet(MP3_160K) <br><div class="subtitle">Karan Randhawa </div>`,
        poster: "img/47.jpg",
    },
    {
        id: "48",
        songName: ` Raat Di Gedi [THE G-MIX] _InTheMixWithGSP _ <br><div class="subtitle">Diljit</div>`,
        poster: "img/48.jpg",
    },
    {
        id: "49",
        songName: `Preet Harpal_  Full Song _ Latest Punjabi Song 2016 _ T-Series Apnapunjab(MP3_160K) <br><div class="subtitle">Yaar Berozgaar</div>`,
        poster: "img/49.jpg",
    },
    {
        id: "50",
        songName: `O Bedardeya (Full Video)  _ Ranbir_ Shraddha _ Pritam_Arijit Singh_ Amitabh B(MP3_160K) <br><div class="subtitle">Tu Jhoothi Main Makkaar </div>`,
        poster: "img/50.jpg",
    },
    {
        id: "51",
        songName: `Naiyo Lagda - Kisi Ka Bhai Kisi Ki Jaan _  _ Himesh R_ Kamaal K_ Palak M(MP3_160K) <br><div class="subtitle">Salman Khan _ Pooja Hegde </div>`,
        poster: "img/51.jpg",
    },
    {
        id: "52",
        songName: `Pyaar Hota Kayi Baar Hai (Full video)  _Ranbir_Shraddha_Pritam_Arijit_Amitabh(MP3_160K) <br><div class="subtitle">Tu Jhoothi Main Makkaar </div>`,
        poster: "img/52.jpg",
    },
    {
        id: "53",
        songName: `Nashe Si Chadh Gayi _ Full Song _ Befikre_ Ranveer Singh_ Vaani Kapoor_ Arijit Singh_ Vishal-Shekhar(MP3_160K) <br><div class="subtitle">Befikre_ </div>`,
        poster: "img/53.jpg",
    },
    {
        id: "54",
        songName: `Mumbai Saga_ Danka Baja (Official Video) Payal Dev Feat. Dev Negi _ (MP3_160K) <br><div class="subtitle">John Abraham _ Kajal Aggarwal </div>`,
        poster: "img/54.jpg",
    },
    {
        id: "55",
        songName: `Milegi Milegi Video Song _  STREE _ Mika Singh _ (MP3_160K)<br><div class="subtitle">Sachin-Jigar _ Rajkummar Rao_ Shraddha Kapoor </div>`,
        poster: "img/55.jpg",
    },
    {
        id: "56",
        songName: `MAGNET Song _ (MP3_160K)<br><div class="subtitle">Karan Singh Arora Ft. Natasa Stankov </div>`,
        poster: "img/56.jpg",
    },
    {
        id: "57",
        songName: `Mann Bharryaa 2.0 – Official Video _  – Kiara _ B Praak _ Jaani(MP3_320K)(MP3_160K) <br><div class="subtitle">Shershaah _ Sidharth </div>`,
        poster: "img/57.jpg",
    },
    {
        id: "58",
        songName: `OFFICIAL_ _Mitti Di Khushboo_ FULL VIDEO Song _ Ay(MP3_160K)<br><div class="subtitle"Aaushman khurana </div>`,
        poster: "img/58.jpg",
    },

    {
        id: "59",
        songName: `pindu (MP3_160K) <br><div class="subtitle">pindu</div>`,
        poster: "img/59.jpg",
    },
    {
        id: "60",
        songName: `Let Me Love You - Lyrics _ KHS India(MP3_160K) <br><div class="subtitle">Let Me Love You </div>`,
        poster: "img/60.jpg",
    },

]

Array.from(document.getElementsByClassName('song_item')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('song_item')).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended', () => {
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('song_item'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('song_item')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";

})
next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('song_item')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";

})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', () => {
    item.scrollLeft += 330;
})