let state = {
    currentStep: 'movie-selection',
    selectedMovie: null,
    selectedScreen: null,
    selectedShowtime: null,
    selectedSeat: null,
    userData: null
};
const SCREEN_TYPES = ["IMAX", "3-D", "HD", "Standard"];
// Movie data
const initData = () => {
    if (!localStorage.getItem('movies')) {
        const movies = [
            {
                id: 1,
                title: "Inception",
                poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
                genre: "Action, Sci-Fi",
                duration: "148 min",
                rating: "PG-13",
                imdb: "8.8",
                director: "Christopher Nolan",
                showtimes: [
    { id: 101, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 102, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 103, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 104, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 105, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 106, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 107, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 108, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 109, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 110, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 111, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 112, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 113, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 114, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 115, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 116, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 117, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 118, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 119, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 120, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 2,
                title: "Interstellar",
                poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                genre: "Drama, Sci-Fi",
                duration: "169 min",
                rating: "PG-13",
                imdb: "8.6",
                director: "Christopher Nolan",
                showtimes: [
    { id: 201, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 202, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 203, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 204, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 205, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 206, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 207, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 208, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 209, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 210, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 211, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 212, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 213, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 214, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 215, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 216, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 217, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 218, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 219, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 220, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 3,
                title: "The Dark Knight",
                poster: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
                genre: "Action, Crime",
                duration: "152 min",
                rating: "PG-13",
                imdb: "9.0",
                director: "Christopher Nolan",
                showtimes: [
    { id: 301, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 302, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 303, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 304, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 305, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 306, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 307, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 308, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 309, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 310, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 311, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 312, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 313, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 314, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 315, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 316, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 317, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 318, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 319, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 320, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 4,
                title: "Avengers: Endgame",
                poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
                genre: "Action, Drama",
                duration: "181 min",
                rating: "PG-13",
                imdb: "8.4",
                director: "Anthony Russo, Joe Russo",
                showtimes: [
    { id: 401, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 402, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 403, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 404, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 405, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 406, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 407, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 408, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 409, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 410, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 411, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 412, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 413, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 414, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 415, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 416, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 417, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 418, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 419, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 420, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 5,
                title: "Kubo and the Two Strings",
                poster: "https://image.tmdb.org/t/p/original/aZJ6KK1Wt7YB4dgZ0qlpaX3PwNV.jpg",
                genre: "Animation, Adventure",
                duration: "101 min",
                rating: "PG",
                imdb: "7.8",
                director: "Travis Knight",
                showtimes: [
    { id: 501, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 502, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 503, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 504, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 505, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 506, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 507, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 508, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 509, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 510, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 511, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 512, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 513, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 514, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 515, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 516, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 517, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 518, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 519, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 520, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 6,
                title: "The Lord of the Rings: The Return of the King",
                poster: "https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
                genre: "Action, Drama",
                duration: "201 min",
                rating: "PG-13",
                imdb: "9.0",
                director: "Peter Jackson",
                showtimes: [
    { id: 601, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 602, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 603, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 604, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 605, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 606, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 607, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 608, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 609, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 610, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 611, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 612, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 613, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 614, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 615, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 616, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 617, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 618, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 619, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 620, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 7,
                title: "The Lord of the Rings: The Two Towers",
                poster: "https://image.tmdb.org/t/p/original/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
                genre: "Action, Adventure",
                duration: "179 min",
                rating: "PG-13",
                imdb: "8.8",
                director: "Peter Jackson",
                showtimes: [
    { id: 701, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 702, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 703, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 704, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 705, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 706, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 707, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 708, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 709, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 710, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 711, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 712, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 713, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 714, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 715, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 716, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 717, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 718, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 719, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 720, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 8,
                title: "Spider Man: Across the Spider-Verse",
                poster: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
                genre: "Animation, Action",
                duration: "117 min",
                rating: "PG",
                imdb: "8.5",
                director: "Joaquim Dos Santos, Justin K. Thompson",
                showtimes: [
    { id: 801, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 802, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 803, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 804, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 805, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 806, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 807, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 808, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 809, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 810, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 811, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 812, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 813, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 814, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 815, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 816, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 817, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 818, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 819, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 820, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 9,
                title: "Se7en",
                poster: "https://image.tmdb.org/t/p/original/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
                genre: "Crime, Horror",
                duration: "127 min",
                rating: "R",
                imdb: "8.6",
                director: "David Fincher",
                showtimes: [
    { id: 901, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 902, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 903, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 904, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 905, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 906, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 907, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 908, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 909, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 910, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 911, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 912, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 913, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 914, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 915, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 916, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 917, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 918, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 919, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 920, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 10,
                title: "Nosferatu",
                poster: "https://image.tmdb.org/t/p/original/d0B8xDdqBZlzlPEzES8lu5LlNQn.jpg",
                genre: "Horror, Fantasy",
                duration: "132 min",
                rating: "R",
                imdb: "7.2",
                director: "Robert Eggers",
                showtimes: [
    { id: 1001, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 1002, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 1003, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 1004, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 1005, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 1006, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 1007, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 1008, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 1009, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 1010, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 1011, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 1012, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 1013, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 1014, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 1015, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 1016, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 1017, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 1018, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 1019, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 1020, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 11,
                title: "Godzilla: Minus One",
                poster: "https://image.tmdb.org/t/p/original/2E2WTX0TJEflAged6kzErwqX1kt.jpg",
                genre: "Action, Sci-Fi",
                duration: "125 min",
                rating: "PG-13",
                imdb: "7.7",
                director: "Takashi Yamazaki",
                showtimes: [
    { id: 1101, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 1102, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 1103, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 1104, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 1105, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 1106, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 1107, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 1108, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 1109, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 1110, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 1111, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 1112, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 1113, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 1114, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 1115, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 1116, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 1117, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 1118, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 1119, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 1120, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 12,
                title: "Oppenheimer",
                poster: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
                genre: "Biography, Drama",
                duration: "180 min",
                rating: "R",
                imdb: "8.3",
                director: "Christopher Nolan",
                showtimes: [
    { id: 1201, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 1202, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 1203, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 1204, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 1205, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 1206, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 1207, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 1208, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 1209, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 1210, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 1211, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 1212, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 1213, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 1214, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 1215, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 1216, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 1217, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 1218, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 1219, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 1220, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 13,
                title: "Split",
                poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/lli31lYTFpvxVBeFHWoe5PMfW5s.jpg",
                genre: "Horror, Thriller",
                duration: "117 min",
                rating: "PG-13",
                imdb: "7.3",
                director: "M. Night Shyamalan",
                showtimes: [
    { id: 1301, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 1302, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 1303, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 1304, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 1305, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 1306, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 1307, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 1308, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 1309, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 1310, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 1311, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 1312, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 1313, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 1314, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 1315, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 1316, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 1317, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 1318, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 1319, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 1320, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 14,
                title: "The Revenant",
                poster: "https://image.tmdb.org/t/p/original/ji3ecJphATlVgWNY0B0RVXZizdf.jpg",
                genre: "Western, Adventure",
                duration: "156 min",
                rating: "R",
                imdb: "8.0",
                director: "Alejandro G. Iñárritu",
                showtimes: [
    { id: 1401, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 1402, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 1403, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 1404, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 1405, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 1406, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 1407, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 1408, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 1409, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 1410, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 1411, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 1412, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 1413, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 1414, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 1415, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 1416, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 1417, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 1418, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 1419, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 1420, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            },
            {
                id: 15,
                title: "Whiplash",
                poster: "https://image.tmdb.org/t/p/original/6qEonhmVYZO7vUkvJzdti3NttOf.jpg",
                genre: "Drama, Music",
                duration: "106 min",
                rating: "R",
                imdb: "8.5",
                director: "Damien Chazelle",
                showtimes: [
    { id: 1501, time: "2025-07-01T09:00:00", seats: 40, screen: "IMAX" },
    { id: 1502, time: "2025-07-01T12:00:00", seats: 40, screen: "IMAX" },
    { id: 1503, time: "2025-07-01T15:00:00", seats: 40, screen: "IMAX" },
    { id: 1504, time: "2025-07-01T18:00:00", seats: 40, screen: "IMAX" },
    { id: 1505, time: "2025-07-01T21:00:00", seats: 40, screen: "IMAX" },
    { id: 1506, time: "2025-07-01T10:00:00", seats: 40, screen: "3-D" },
    { id: 1507, time: "2025-07-01T13:00:00", seats: 40, screen: "3-D" },
    { id: 1508, time: "2025-07-01T16:00:00", seats: 40, screen: "3-D" },
    { id: 1509, time: "2025-07-01T19:00:00", seats: 40, screen: "3-D" },
    { id: 1510, time: "2025-07-01T22:00:00", seats: 40, screen: "3-D" },
    { id: 1511, time: "2025-07-01T11:00:00", seats: 40, screen: "HD" },
    { id: 1512, time: "2025-07-01T14:00:00", seats: 40, screen: "HD" },
    { id: 1513, time: "2025-07-01T17:00:00", seats: 40, screen: "HD" },
    { id: 1514, time: "2025-07-01T20:00:00", seats: 40, screen: "HD" },
    { id: 1515, time: "2025-07-01T23:00:00", seats: 40, screen: "HD" },
    { id: 1516, time: "2025-07-01T08:30:00", seats: 40, screen: "Standard" },
    { id: 1517, time: "2025-07-01T12:30:00", seats: 40, screen: "Standard" },
    { id: 1518, time: "2025-07-01T16:30:00", seats: 40, screen: "Standard" },
    { id: 1519, time: "2025-07-01T20:30:00", seats: 40, screen: "Standard" },
    { id: 1520, time: "2025-07-01T23:30:00", seats: 40, screen: "Standard" }
]
            }
        ];
        localStorage.setItem('movies', JSON.stringify(movies));
    }
    if (!localStorage.getItem('bookings')) {
        localStorage.setItem('bookings', JSON.stringify([]));
    }
};

// RENDERING APPDATA
const renderMovies = () => {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    const movies = JSON.parse(localStorage.getItem('movies'));

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <h3 class="movie-title">${movie.title}</h3>
            <img src="${movie.poster}" alt="${movie.title} Poster" class="movie-poster">
            <div class="movie-genre"><i>${movie.genre}</i></div>
            <div class="movie-info">
                <p class="movie-director"><span>Director:</span> ${movie.director}</p>
                <p class="movie-imdb"><span>IMDb:</span> ${movie.imdb} </p>
                <p class="movie-details"><span>Duration:</span> ${movie.duration} | <span>Rated:</span> ${movie.rating}</p>
            </div>
        `;
        movieCard.addEventListener('click', () => selectMovie(movie));
        movieList.appendChild(movieCard);
    });
};

const renderScreens = () => {
    const screenList = document.getElementById('screen-list');
    screenList.innerHTML = '';
    SCREEN_TYPES.forEach(screen => {
        const btn = document.createElement('button');
        btn.className = 'btn screen-btn';
        btn.textContent = screen;
        btn.addEventListener('click', () => {
            state.selectedScreen = screen;
            showSection('showtime-selection');
            renderShowtimes();
        });
        screenList.appendChild(btn);
    });
};

const selectMovie = (movie) => {
    state.selectedMovie = movie;
    showSection('screen-selection');
    renderScreens();
    const screenSection = document.getElementById('screen-selection');
    if (screenSection) {
        screenSection.setAttribute('tabindex', '-1');
        screenSection.focus();
    }
};

function AmericanDatesAreDumb(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
const renderShowtimes = () => {
    const showtimeList = document.getElementById('showtime-list');
    showtimeList.innerHTML = '';
    const filteredShowtimes = state.selectedMovie.showtimes.filter(
        s => s.screen === state.selectedScreen
    );
    filteredShowtimes.forEach(showtime => {
        const timeCard = document.createElement('div');
        timeCard.className = 'time-card';
        const date = new Date(showtime.time);
        timeCard.innerHTML = `
            <h3>${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h3>
            <p>${AmericanDatesAreDumb(showtime.time)}</p>
        `;
        timeCard.addEventListener('click', () => selectShowtime(showtime));
        showtimeList.appendChild(timeCard);
    });
};

const selectShowtime = (showtime) => {
    state.selectedShowtime = showtime;
    showSection('seat-selection');
    renderSeatMap();
};
let seatsToBook = 1;
let selectedSeats = [];

const renderSeatMap = () => {
    const seatMap = document.getElementById('seat-map');
    seatMap.innerHTML = '';

    const seatContainer = document.createElement('div');
    seatContainer.style.display = 'flex';
    seatContainer.style.flexDirection = 'column';
    seatContainer.style.alignItems = 'center';
    seatContainer.style.gap = '18px';

    const seatInputDiv = document.createElement('div');
    seatInputDiv.style.textAlign = 'center';
    seatInputDiv.innerHTML = `
        <label for="num-seats" style="margin-right:8px;">Choose number of seats to be booked:</label>
        <input type="number" id="num-seats" min="1" max="10" value="${seatsToBook}" style="width:50px;">
        <span style="font-size:0.9em;color:#b8c1ec;">(Max 10)</span>
    `;
    seatContainer.appendChild(seatInputDiv);

    const seatMapGrid = document.createElement('div');
    seatMapGrid.id = 'seat-map-grid';
    seatMapGrid.style.display = 'grid';
    seatMapGrid.style.gridTemplateColumns = 'repeat(10, 1fr)';
    seatMapGrid.style.gap = '10px';
    seatMapGrid.style.maxWidth = '600px';
    seatMapGrid.style.margin = '0 auto';
    seatMapGrid.style.justifyItems = 'center';

    const rows = ['A', 'B', 'C', 'D', 'E'];
    const cols = 10;

    const bookings = JSON.parse(localStorage.getItem('bookings'));
    const currentBookings = bookings.filter(b =>
        b.showtimeId === state.selectedShowtime.id
    ).map(b => b.seat);

    for (let row = 0; row < rows.length; row++) {
        for (let col = 1; col <= cols; col++) {
            const seat = document.createElement('div');
            const seatId = `${rows[row]}${col}`;

            seat.className = 'seat';
            seat.textContent = seatId;

            if (currentBookings.includes(seatId)) {
                seat.classList.add('booked');
            } else {
                seat.classList.add('available');
                if (selectedSeats.includes(seatId)) seat.classList.add('selected');
                seat.addEventListener('click', () => {
                    if (selectedSeats.includes(seatId)) {
                        selectedSeats = selectedSeats.filter(s => s !== seatId);
                    } else if (selectedSeats.length < seatsToBook) {
                        selectedSeats.push(seatId);
                    }
                    renderSeatMap();
                });
            }
            seatMapGrid.appendChild(seat);
        }
    }

    seatContainer.appendChild(seatMapGrid);

    const screen = document.createElement('div');
    screen.className = 'screen';
    screen.style.margin = '30px auto 0 auto';
    screen.style.fontSize = '1.3em';
    screen.style.height = '30px';
    screen.style.width = '200px';
    screen.style.display = 'flex';
    screen.style.alignItems = 'center';
    screen.style.justifyContent = 'center';
    screen.textContent = 'SCREEN';
    seatContainer.appendChild(screen);

    let continueBtn = document.getElementById('continue-to-booking');
    if (!continueBtn) {
        continueBtn = document.createElement('button');
        continueBtn.id = 'continue-to-booking';
        continueBtn.className = 'btn';
        continueBtn.textContent = 'Continue';
    }
    continueBtn.disabled = selectedSeats.length !== seatsToBook;
    continueBtn.onclick = () => {
        if (selectedSeats.length === seatsToBook) {
            state.selectedSeat = [...selectedSeats];
            showSection('booking-form');
        }
    };
    seatContainer.appendChild(continueBtn);
    seatMap.appendChild(seatContainer);

    document.getElementById('num-seats').addEventListener('input', (e) => {
        seatsToBook = Math.max(1, Math.min(10, parseInt(e.target.value) || 1));
        selectedSeats = [];
        renderSeatMap();
    });
};

const selectSeat = (seatId) => { 
    state.selectedSeat = seatId;
    document.querySelectorAll('.seat').forEach(seat => {
        seat.classList.remove('selected');
        if (seat.textContent === seatId) seat.classList.add('selected');
    });
    setTimeout(() => showSection('booking-form'), 500);
};
const handleBooking = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value.trim();
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        document.getElementById('phone').focus();
        return;
    }

    const bookings = JSON.parse(localStorage.getItem('bookings'));
    state.selectedSeat.forEach(seatNum => {
        bookings.push({
            id: Date.now() + Math.random(),
            movieId: state.selectedMovie.id,
            showtimeId: state.selectedShowtime.id,
            seat: seatNum,
            name,
            phone,
            timestamp: new Date().toISOString()
        });
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    const summary = document.getElementById('booking-summary');
    const date = new Date(state.selectedShowtime.time);
    summary.innerHTML = `
        <div class="confirmation-flex">
            <div class="confirmation-ticket-info">
                <div><strong>MOVIE:</strong> ${state.selectedMovie.title}</div>
                <div><strong>SCREEN TYPE:</strong> ${state.selectedScreen}</div>
                <div><strong>TIME:</strong> ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, ${AmericanDatesAreDumb(state.selectedShowtime.time)}</div>
                <div><strong>SEAT(S):</strong> ${state.selectedSeat.join(', ')}</div>
                <div><strong>NAME:</strong> ${name}</div>
                <div><strong>CONTACT NUMBER:</strong> ${phone}</div>
            </div>
            <img class="confirmation-poster" src="${state.selectedMovie.poster}" alt="${state.selectedMovie.title} Poster">
        </div>
    `;
    showSection('confirmation');
};

const showSection = (sectionId) => {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    state.currentStep = sectionId;
};

const setupNavigation = () => {
    document.getElementById('back-to-movies-from-screen').addEventListener('click', () => {
        showSection('movie-selection');
    });
    document.getElementById('back-to-screen-selection').addEventListener('click', () => {
        showSection('screen-selection');
    });
    document.getElementById('back-to-showtimes').addEventListener('click', () => {
        showSection('showtime-selection');
    });
    document.getElementById('back-to-seats').addEventListener('click', () => {
        showSection('seat-selection');
    });
    document.getElementById('new-booking').addEventListener('click', () => {
        state = {
            currentStep: 'movie-selection',
            selectedMovie: null,
            selectedScreen: null,
            selectedShowtime: null,
            selectedSeat: null,
            userData: null
        };
        seatsToBook = 1;
        selectedSeats = [];
        document.getElementById('booking-details').reset();
        showSection('movie-selection');
    });
    document.getElementById('booking-details').addEventListener('submit', handleBooking);
};

document.addEventListener('DOMContentLoaded', () => {
    initData();
    renderMovies();
    setupNavigation();
});