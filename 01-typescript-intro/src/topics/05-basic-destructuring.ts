interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 30,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

const {
    song:anotherSong, 
    songDuration:duration,
    //details:{ author }
    details
} = audioPlayer;

const { author } = details;

// console.log('Song: ',anotherSong);
// console.log('Duration: ',duration);
// console.log('Author: ',author);

const [goku, vegeta, trunks]: string[] = ['Goku','Vegeta','Trunks']

const [, , trunks1 = 'Not Found']: string[] = ['Goku','Vegeta']

console.log('Personaje: ', trunks1);

export{};