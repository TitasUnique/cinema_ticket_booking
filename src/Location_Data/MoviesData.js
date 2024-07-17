const movielist = {
    movies: [
      {
        Location: "Kolkata",
        Theatres: {
          Inox: {
            Movies: [
              {
                name: "Ajogyo",
                poster: "https://m.media-amazon.com/images/M/MV5BOTg0NjhiOWYtZDE1MS00YjRkLWE0NWUtODUyZTc2NmU3MzU3XkEyXkFqcGdeQXVyOTc5MjUzNjg@._V1_FMjpg_UX1080_.jpg",
                timming: "10:00-13:00"
              },
              {
                name: "Hindustani 2",
                poster: "https://m.media-amazon.com/images/M/MV5BYTQxMjk3N2YtOGJhOS00MWM2LTk1MDUtZjJmMTYwNWUzZGU2XkEyXkFqcGc@._V1_FMjpg_UY1687_.jpg",
                timming: "14:00-17:00"
              },
              {
                name: "Inside Out 2",
                poster: "https://m.media-amazon.com/images/M/MV5BZWJlYmU0OWEtOTNkYy00OGMxLThhNWEtOGExMzlmYjBmZTBkXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_FMjpg_UX540_.jpg",
                timming: "18:00-21:00"
              }
            ]
          },
          Cinepolis: {
            Movies: [
              {
                name: "Mishawr Rawhoshyo",
                poster: "https://m.media-amazon.com/images/M/MV5BZWUzYmVjOTQtOWMxZS00OWFkLWEyYzMtYzBlYThmNDAzOTdjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UY2500_.jpg",
                timming: "11:00-14:00"
              },
              {
                name: "Guptodhoner Sondhane",
                poster: "https://m.media-amazon.com/images/M/MV5BODIwOTIyZWEtNzQxYS00NjlhLTgyZTItNzYyM2QwNjRkMzc3XkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_FMjpg_UX1052_.jpg",
                timming: "15:00-18:00"
              },
              {
                name: "Chander Pahar",
                poster: "https://m.media-amazon.com/images/M/MV5BMjE4MDE1Mjg5Nl5BMl5BanBnXkFtZTgwMTAyNzA4MDE@._V1_FMjpg_UX790_.jpg",
                timming: "19:00-22:00"
              }
            ]
          },
          SVF_Cinemas: {
            Movies: [
              {
                name: "The Eken Ruddhaswas Rajasthan",
                poster: "https://m.media-amazon.com/images/M/MV5BMjU4MTI0MjQtNDUwZC00ZjIxLWE0YjMtYTZmMDYyMDlmNGFmXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX590_.jpg",
                timming: "10:00-13:00"
              },
              {
                name: "Pather Panchali",
                poster: "https://m.media-amazon.com/images/M/MV5BMmFkNDY5OTktNzY3Yy00OTFlLThhNjktOTRhMmZjZmIxYjAxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UY2000_.jpg",
                timming: "14:00-17:00"
              },
              {
                name: "Praktan",
                poster: "https://m.media-amazon.com/images/M/MV5BZjE2MjZiODctMThkYy00NzBhLWFhZTAtYzQ1NDk2Y2JjM2JlXkEyXkFqcGdeQXVyNTAwNTgzMzc@._V1_FMjpg_UX500_.jpg",
                timming: "18:00-21:00"
              }
            ]
          }
        }
      },
      {
        Location: "Bangalore",
        Theatres: {
          PVR: {
            Movies: [
              {
                name: "Ra.One",
                poster: "https://m.media-amazon.com/images/M/MV5BMTYzNzI0NDgwNV5BMl5BanBnXkFtZTgwMjgyMzAxODE@._V1_FMjpg_UX493_.jpg",
                timming: "12:00-14:00"
              },
              {
                name: "K.G.F",
                poster: "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX500_.jpg",
                timming: "15:00-17:00"
              },
              {
                name: "Thupparivaalan",
                poster: "https://m.media-amazon.com/images/M/MV5BNGI3M2MzYzktMzEzNy00Y2QxLThjOGQtZWUwNjVlM2IxOThkXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX991_.jpg",
                timming: "18:00-20:00"
              }
            ]
          },
          Cinepolis: {
            Movies: [
              {
                name: "Raatchasan",
                poster: "https://m.media-amazon.com/images/M/MV5BYjg1Y2YwNTgtZGQxMi00NTk1LTgyMjgtZmM4ODZiNzE0YjM4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
                timming: "12:00-14:30"
              },
              {
                name: "Veerappan",
                poster: "https://m.media-amazon.com/images/M/MV5BZThiNDBmMDctMDhjYS00M2I3LTk4ZjEtZDI5MmFjZjRjOGYxXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_FMjpg_UX885_.jpg",
                timming: "15:30-18:00"
              },
              {
                name: "Baahubali: The Beginning",
                poster: "https://m.media-amazon.com/images/M/MV5BZTQ3MjU2Y2UtZjI1My00NDc5LWE1OTgtYWZkMmMyMmUxNjkyXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX620_.jpg",
                timming: "19:00-21:30"
              }
            ]
          },
          Inox: {
            Movies: [
              {
                name: "I (2015)",
                poster: "https://m.media-amazon.com/images/M/MV5BYmU4MzFlOTQtMTIyYS00ZmQxLTg3OTYtYjM3YmM1NzFkZmJhXkEyXkFqcGdeQXVyODE4MTg5NjQ@._V1_FMjpg_UX663_.jpg",
                timming: "11:00-13:30"
              },
              {
                name: "RRR",
                poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX750_.jpg",
                timming: "14:30-16:30"
              },
              {
                name: "M.S. Dhoni: The Untold Story",
                poster: "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UY3000_.jpg",
                timming: "17:30-20:00"
              }
            ]
          }
        }
      },
      {
        Location: "Hyderabad",
        Theatres: {
          Inox: {
            Movies: [
              {
                name: "Adipurush",
                poster: "https://m.media-amazon.com/images/M/MV5BM2YwMGZjMzctZGVjZC00N2FkLTg5ZWMtNDY3OWMxM2Y5YjQ3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UY2569_.jpg",
                timming: "13:00-16:00"
              },
              {
                name: "Pushpa: The Rise - Part 1",
                poster: "https://m.media-amazon.com/images/M/MV5BMGZjM2MzNTMtOTJhYi00ZDEwLTkwZTItZTg4OTU4ZmZhMzlhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX665_.jpg",
                timming: "17:00-20:00"
              },
              {
                name: "Baahubali 2: The Conclusion",
                poster: "https://m.media-amazon.com/images/M/MV5BNDY3Mzg1Mzg3OF5BMl5BanBnXkFtZTgwNTczNzQyMTI@._V1_FMjpg_UY1341_.jpg",
                timming: "21:00-23:30"
              }
            ]
          },
          PVR: {
            Movies: [
              {
                name: "KGF Chapter 2",
                poster: "https://m.media-amazon.com/images/M/MV5BMjI2YmY4NDQtMzQwMC00YmI2LThhOTItNTY0MTAwNTRhYmM5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX680_.jpg",
                timming: "10:00-13:00"
              },
              {
                name: "Sarileru Neekevvaru",
                poster: "https://m.media-amazon.com/images/M/MV5BM2I1YzIzNDktZTg3OS00OTgyLTg0OTYtZTE1NDRmNTEyZTA2XkEyXkFqcGdeQXVyOTE1MTY3NDg@._V1_FMjpg_UX1052_.jpg",
                timming: "14:00-17:00"
              },
              {
                name: "Sye",
                poster: "https://m.media-amazon.com/images/M/MV5BMzkwMjczM2UtY2EwNy00NTZiLTg4YWQtNzU0ZDg1NjU4Mzg1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1053_.jpg",
                timming: "18:00-21:00"
              }
            ]
          },
          Cinepolis: {
            Movies: [
              {
                name: "Magadheera",
                poster: "https://m.media-amazon.com/images/M/MV5BNmU4YjVlNDUtN2E0YS00NmZlLTk5NjgtMmJkMjhhMGJlNTU2XkEyXkFqcGdeQXVyNjA3MzY2NzA@._V1_FMjpg_UY890_.jpg",
                timming: "12:00-15:00"
              },
              {
                name: "Jersey",
                poster: "https://m.media-amazon.com/images/M/MV5BNTU5MmQ1ZjgtOWI0Mi00NTk5LWI2YTMtNGRkNTg0ZjQ4NmM0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UY800_.jpg",
                timming: "16:00-19:00"
              },
              {
                name: "Rangasthalam",
                poster: "https://m.media-amazon.com/images/M/MV5BMTQzMzkzYTQtNzhiZC00MGQ0LWI4YzAtZDc0MWZlZTgxYzRiXkEyXkFqcGdeQXVyOTE1OTg5NzA@._V1_FMjpg_UX1000_.jpg",
                timming: "20:00-23:00"
              }
            ]
          }
        }
      },
      {
        Location: "Mumbai",
        Theatres: {
          Inox: {
            Movies: [
              {
                name: "The Avengers",
                poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX800_.jpg",
                timming: "10:00-12:30"
              },
              {
                name: "John Wick",
                poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UY2048_.jpg",
                timming: "14:00-16:30"
              },
              {
                name: "Train to Busan",
                poster: "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_FMjpg_UX406_.jpg",
                timming: "18:00-20:30"
              }
            ]
          },
          Cinepolis: {
            Movies: [
              {
                name: "The Martian",
                poster: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_FMjpg_UX865_.jpg",
                timming: "11:00-13:30"
              },
              {
                name: "Fast & Furious 5",
                poster: "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_FMjpg_UX1013_.jpg",
                timming: "15:00-17:30"
              },
              {
                name: "Godzilla",
                poster: "https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX1000_.jpg",
                timming: "19:00-21:30"
              }
            ]
          },
          PVR: {
            Movies: [
              {
                name: "The Polar Express",
                poster: "https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_FMjpg_UY2048_.jpg",
                timming: "12:00-14:30"
              },
              {
                name: "The Theory of Everything",
                poster: "https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_FMjpg_UX1012_.jpg",
                timming: "16:00-18:30"
              },
              {
                name: "2012 (2009)",
                poster: "https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_FMjpg_UY2048_.jpg",
                timming: "19:00-21:30"
              }
            ]
          }
        }
      }
    ]
  };
  

export default movielist;
