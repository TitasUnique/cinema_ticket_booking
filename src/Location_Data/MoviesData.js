const movielist = {
  movies: [
    {
      Location: "Kolkata",
      Theatres: {
        Inox: {
          Movies: [
            {
              name: "Ajogyo",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOTg0NjhiOWYtZDE1MS00YjRkLWE0NWUtODUyZTc2NmU3MzU3XkEyXkFqcGdeQXVyOTc5MjUzNjg@._V1_FMjpg_UX1080_.jpg",
              timming: "10:00-13:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi2715534873/1434659607842-pgv4ql-1716041705161.mp4?Expires=1722004097&Signature=LXl0o8JXJC3oRN7Zyr8BL15w6opapTBCb4t0YuuE5oLOVwIlhi6inSpQZGMlKpmWL8m~xaRz0vOVpCBzNISYGogJosbt86c9IeMheRFHQB0vgosFxoWgXCaIvjW2CAjOa0PUZpTLE7OD8GKarK0YcLdV8A-reZF2R4Jjo-auxgq9coUze0mVIkRYSg~SD~xIiqgL9IcmI8xK~n6cGut5p~Q9CcAEFu1c5AvdivKUtaRDb1DnSi4jkEkCpd9d4uPPmpdTbGwudDxsGjM8glwQCNgXd~K1S1tRImYp-fa8gxdihnbK6ngcrVoAxdXSDKohSxf02gLkPZOXqFx068e0oA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.5,
              details:
                "Parna's crisis-ridden family has an unexpected guest - her stay-at-home husband Raktim's confidante - Prosen Mitra. Will Prosen usher in happiness, or will the middle-class couple descend into further chaos?",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: false, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "Sarfira",
              poster:
                "https://m.media-amazon.com/images/M/MV5BYTQxMjk3N2YtOGJhOS00MWM2LTk1MDUtZjJmMTYwNWUzZGU2XkEyXkFqcGc@._V1_FMjpg_UY1687_.jpg",
              timming: "14:00-17:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi792315417/1434659607842-pgv4ql-1718705297245.mp4?Expires=1722276982&Signature=USIOr~nRG-QkVRfahJ0mkYWpE2F5wIC4XXdLQNnKISjwAW1~N67ksbGYq29dd4zR1MU0jtzEfN9nOsH15DAJTORGTEd3jFg5P62a8ENX6KcL8l5QcCXot4AzkJBiF8e6Z8ks6gwQQjwzepibDBV70m2jPH~Q1RPr4bm4YbtjUdFvhLPj8QM3ZBojO2-41n5pKcw14CCmdqiNBTfFyb-nA1VSait1I~VYQGWoOfjc75GKxvVs6~AwgJEgIvXR7MR5j68UZbMDkEnBImTCX38-R6Fi8f0sYdLyGgtZCfTJltumcNx-K7jLxhVoHTbw-AEp6DAIUPE~p3fjTCBptAPLuQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.8,
              details:
                "In the world of startups and aviation, a common man dreams of starting his own airline.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: false, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "Inside Out 2",
              poster:
                "https://m.media-amazon.com/images/M/MV5BZWJlYmU0OWEtOTNkYy00OGMxLThhNWEtOGExMzlmYjBmZTBkXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_FMjpg_UX540_.jpg",
              timming: "18:00-21:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi3946038809/1434659607842-pgv4ql-1718214529104.mp4?Expires=1722276911&Signature=dOIQUS3Gf8K1WJS5W8UR-8RewBt6lj3IWxzG3y40A9XB9VGOGwTnpB4bu4Ct3y6yE67ThQ9BFxZPI1f1IG7-xpCzDRPK657uqWKeNHPJd0plCjodFv3tuCuQQMU8X5dA5QgfhBAwUevJ3BqpaQqYMCmdtn-Bs~Or3X2wFSuL95fksVQ4Co~gmCdeIUJ6TCxtRNoieOhv4~BE3MsyO47BTveFVejVD2vCYy1hFUXGKbyPwdD5w~ZAp6XKsmKbbyL1siSkayq-Caw7BYJomk-1xm2CgTssyX9h~GPnu9OVJSwKSk-wl46XoVcegk66oGHFNK4KxwvhNtT~VRo3RBxyGg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.9,
              details:
                "Joy, Sadness, Anger, Fear and Disgust have been running a successful operation by all accounts. However, when Anxiety shows up, they aren't sure how to feel.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
          ],
        },
        Cinepolis: {
          Movies: [
            {
              name: "Mishawr Rawhoshyo",
              poster:
                "https://m.media-amazon.com/images/M/MV5BZWUzYmVjOTQtOWMxZS00OWFkLWEyYzMtYzBlYThmNDAzOTdjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UY2500_.jpg",
              timming: "11:00-14:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi1552334361/1434659607842-pgv4ql-1585926427974.mp4?Expires=1722277461&Signature=oJRGlk-qTIiSQclBGXk555pZAVLcZ59zZTvz9vSSUpJi95~Tp38D112BjF4GkOjCdNoLYJawrf9sQpfBk-O8d7n7WQU2YVACYaWGh33XQXwW3Xd8wmYC76-hFYkkWOEXD0m0PoAexT9zl0nmvAlj2eY4vs9tb8F94XKH-iQ5wqfr6wvu0Ae6x6CbfwShIam8Y2XLgyBUA0f-DgwCAO1~gVWPOmVpdSydG9xwhvZTSRhiUSI0mvza-B50Mv3xqo0Vi-tIV-N675bQ06q-fsAsc~ZpErz-lFrW2Z0XnnXoJ~jjcGMnDovWBX1gUpFaULPgY4a6LA-EDFm-Wt5e7clE5g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 6.2,
              details:
                "Al Mamun, an Egyptian business tycoon, asks his friend Kakababu to help him decode some hieroglyphic symbols that will help trace the will of his teacher, Mufti Mohammad.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "Guptodhoner Sondhane",
              poster:
                "https://m.media-amazon.com/images/M/MV5BODIwOTIyZWEtNzQxYS00NjlhLTgyZTItNzYyM2QwNjRkMzc3XkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_FMjpg_UX1052_.jpg",
              timming: "15:00-18:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi1933490969/1434659607842-pgv4ql-1533633829316.mp4?Expires=1722277651&Signature=dgqZEV2TdEkRN5HXmCR8lOX9CeDUArOY-W73vs7hUyvbuKfLUAZxHlWPUlrPOv-zsuwLGZXJ4qpH~GZrECDG9EdLFKJCbgFmVO~uPRd9S2lez-u7nAoly1Bxbt4MzY632WtLngtFj6Sqp5clbKNl3Prj5tVJpfw1qZoq~drX2wyHdjI0YLrs-oqNfQ83eb2JP9todsiFl9TDaCKQma9NBkfWgT4Wr4O7ryA-Xe0gKxIQS88dMpMgy35MpoORsYQMZIqun98MYaJWtEm2keo7Czil-rv0wHjVImN0xMEllZTQ9M6YEjZrRVI4Z1tQyHY-~GIBzfvmmInkdDouQ3neGQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 6.8,
              details:
                "Abir and his companions visit his ancestral mansion only to find that his dead uncle has left behind a series of clues for him to unearth the hidden treasure of Mughal prince Shah Suza kept secured within the property.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "Chander Pahar",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMjE4MDE1Mjg5Nl5BMl5BanBnXkFtZTgwMTAyNzA4MDE@._V1_FMjpg_UX790_.jpg",
              timming: "19:00-22:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi3160451097/1434659607842-pgv4ql-1616198628525.mp4?Expires=1722277743&Signature=LAU-25xCSUw4CCm81vc3wqEzvpgiFeUCNTmP0T3-sc1VkA~1smSeBwOfpNEjU-s-yu2mpLFu8D4nyggowkaux-R5dGX2r3~oqYgh5KOJofBQVtA5AV8w6ij9Z-ipVse9C9jUqL0-C8y6Ia-UMcUqJkKhGoqB1q~njalCRb3uFT7RyconBmLTdz0HlnaVY3LtlTrSKEo5-oIOdcSFkbzF1c0pm-ZDHXDrfiSLxZ7oNaUlikMOtbIy8Y2g9qdC939zSyTePWsPYp66Ypj37ITnTpomKCKqOTTW~IVo65z9PLs2LhWv7cEhSXlsXN2c1VEarJCma~24TVAXSXxr56Ky0Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 6.4,
              details:
                "Shankar Roy Chowdhary, a 20-year-old man from Bengal, leaves his family and goes to Africa to the Mountain of the Moon in search of gold and diamond mines.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
          ],
        },
        SVF_Cinemas: {
          Movies: [
            {
              name: "The Eken Ruddhaswas Rajasthan",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMjU4MTI0MjQtNDUwZC00ZjIxLWE0YjMtYTZmMDYyMDlmNGFmXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX590_.jpg",
              timming: "10:00-13:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi2889794585/1434659607842-pgv4ql-1678880519026.mp4?Expires=1722014532&Signature=T6jGbVdWwy9Ak53gl~mgPDnhXUX-7380rPE7pPi452QqXKOkidtOMaKYxAGcauru9cS~5oS-sGWoEdUsTnCcmXR4QHf097upvY9RAZ~XUISUMcwYB4mRc1xrPOsVmd7qfBxzSourPIxiBTFW297FoR~z810je0ocawCfgxdr82apSIHhhdm3PJ6oeL~ViWCRS1LLdbndfAjGoKtHYx9qCStEiv-NJ8z-DjRuNIUvsOzq3B4cO~XhlfRGdyobRb1NE0Y8XGOmgahmeR12RFZFrkJYrtvpN6zQ1yqF40iPTg9li~H1Y7Iw-ZslJ3Lc~5r38R4i2XWwrrhsUGxMmAL01w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 6.6,
              details:
                "Ekendra Sen is enjoying his vacation in Rajasthan when Shatadru Ghosh, a Professor of Archaeology at Oxford University, tells him that he believes an idol he saw in London has gone missing.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: false, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "Pather Panchali",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMmFkNDY5OTktNzY3Yy00OTFlLThhNjktOTRhMmZjZmIxYjAxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UY2000_.jpg",
              timming: "14:00-17:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi3114774553/1401497881123-xszl4z-1430514845919.mp4?Expires=1722277291&Signature=fzNzaD-IuWc1qeXF7x1UzmNkv8GV4dY1kKAt1fOIOa0PZwpH~241cZbdr914Vu-RHcGnnNfOHasEv9rX4xBcUGOml0vcSeqGJYPEbHQpKjn34Bzi~kfciuwmN7SilwUVivs-jAjGS~aDFpG70GZaKSGFgZ84GG2XrEJdxsHkXMR54NWcVhNsplsnzJX95AxeZ7bxi3ZLUihMmU0lOkHrYWbIQthCAY9IqPuShELsRGTTc-1hnVDa6dy2WgMeV9H2Qny4LWIgQNAmiLWMVASKTDWL1Y~3dwypbMhgSUa-xtrVeiiuoT8tlTerfMjGjfEVwuTaUeT1EGsI7vXjAk9lhg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.2,
              details:
                "Impoverished priest Harihar Ray, dreaming of a better life for himself and his family, leaves his rural Bengal village in search of work. Alone, his wife, Sarbojaya, looks after her rebellious daughter, Durga, and her young son, Apu, as well as Harihar's elderly aunt Indir. The children enjoy the small pleasures of their difficult life, while their parents suffer the daily indignities heaped upon them.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "Praktan",
              poster:
                "https://m.media-amazon.com/images/M/MV5BZjE2MjZiODctMThkYy00NzBhLWFhZTAtYzQ1NDk2Y2JjM2JlXkEyXkFqcGdeQXVyNTAwNTgzMzc@._V1_FMjpg_UX500_.jpg",
              timming: "18:00-21:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi534757145/1434659607842-pgv4ql-1573648016750.mp4?Expires=1722277209&Signature=pIDFE5APS01vw2vgqprydrLo7lZJ02yeiWevlNruvKfVxMeCfnLa8sQIoH3dKtU6IdcpYglq~4xk9zs8VOmOjHARdLeuo8PKBsebiHn7iHg3NQEhHwIl5RrOwICAEWFgH7dRF~BFmMOoUOU2uMMqJHBb4jpa29wFH-BwoHkHDqbljlJ~fbh1NuQBKthVKile1~XIeW5CmyTYcJxdp4GO2aWx9Ukm-arMKrrY-mgbg2mkyUIQF-3zb0rGOLqRem4YKVS4k5JA6KpuMNAE3DrVeZ2FXBHBUW2u6JqGGFAZF3-keMp0tq7mqm6IjC9qi~WN5UTy3Dgt0df1l3G~mG7zfQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.7,
              details:
                "Sudipa and Ujaan are a married couple who go their separate ways due to differences in ideologies. Years later, they bump into each other on a train journey from Mumbai to Howrah.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
          ],
        },
      },
    },
    {
      Location: "Bangalore",
      Theatres: {
        PVR: {
          Movies: [
            {
              name: "Ra.One",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTYzNzI0NDgwNV5BMl5BanBnXkFtZTgwMjgyMzAxODE@._V1_FMjpg_UX493_.jpg",
              timming: "12:00-14:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi1860607513/1434659607842-pgv4ql-1563960013291.mp4?Expires=1721464518&Signature=oFPdAEGA5ePxVi5iKLAB1AqAlzGh-rIvybXYpg7HXzf5tT8~7d1DgTIc5jNtR6vQ6a-056fHBoggbh~MSprj6Az7qsr6P5mO9dr9wMySa937g9FAvAUNpMBltPp1KqDLfmlRP1GxDqseJU9Fa9apThntI1v9tX1meBqzIfhE47BxfXGt1qjiaavdo9b2qcHep0jSxxhWp-MTWLcB6AiH~6EzMLzcLKBMRn85vJT18wiWWlKcWAIQvJpA5xFlY8i5TyWXVhIGMtz16IT3Ob~YVuJt0uc1KbCUtGY48JW32tnRVSrSzqCvdBcgTis1dquPAPc-6LRB3AUB5xpKVPkzjw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 4.8,
              details:
                "Shekhar, a game developer, is on the verge of introducing his next big thing. However, he pays with his life when his robot Ra.One goes rogue and the only one to stop it is his virtual self, G.One.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "K.G.F",
              poster:
                "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX500_.jpg",
              timming: "15:00-17:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi2623519769/1434659607842-pgv4ql-1565370291904.mp4?Expires=1721464671&Signature=tj3phHluZx3rNOoJAqC0G2WZwiWoJdPddWLy5kaNzE6nrHi6yImIXGpptSl-6rPJ5BwY9q4atWI1Dh3icR6vszYP083WOcTBE2LlccX3z4IX-MrfAZex6KTtEl~8OAN0Jtc5C5fBZZKeCVRKONXGzputFMT86tQhuwjssSyQmo2C8PVO2PAlw~X-FMH8wpcgSBpVo2ucrksyK27ZeEFmFcR5Gmb83c65xtJGqXlEJvQ6di1tcB9IdFUXhZ-Nx2pc0R6rKjgRTgPD-BoCzqCqNGLnIcVRTf2-eX7CFfCToFXVfJ7MhvAk-knpHoaODf3NsSDJzj4uf~0SThJJxTXpfw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.2,
              details:
                "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he becomes involved with the notorious gold mafia.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "Thupparivaalan",
              poster:
                "https://m.media-amazon.com/images/M/MV5BNGI3M2MzYzktMzEzNy00Y2QxLThjOGQtZWUwNjVlM2IxOThkXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UX991_.jpg",
              timming: "18:00-20:00",
              trailer:
                "https://imdb-video-wab.media-imdb.com/vi578533401/1434659607842-pgv4ql-1523276192391.mp4?Expires=1721465017&Signature=auHF~9oZxeYW-jONJeOsXuv2D-sY0dItUV~g0c53cYDvsrwYIoi2plxBhta6vQCxZMC15zB1pgvkt1puJJjIzU8oOPoCCQHekxF29DMcVQhHF0hTfQtsuEA8OuG92vCMTk3oz0GMPQz9Ypqoptdl3j1LleWESQyIv2G6eLNOqobYXVzdMGY-N8dO9yYvnREjJTeLk2SI7IxzDVwnDgpn2aDZ5gY8nGXdrF1cf93S1QxoyIcPAh4q1LMM8L8jy3XrFMPfSYvysUaTr9sWO~ZiF5Vvvr4b2C-zDp7XsBP4aKjljAnjyBhIPUuH7leWVqrewZ2CmSvCbOUd9IqGddlJgA__&Key-Pair-Id=APKAJLOTGGE6P3RA3PTA",
              rating: 7.5,
              details:
                "Kaniyan, a detective from Visakhapatnam, is approached by a child to investigate the mystery behind his pet dog's death. However, it leads Kaniyan to a larger conspiracy involving a deadly assassin.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: false, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
          ],
        },
        Cinepolis: {
          Movies: [
            {
              name: "Raatchasan",
              poster:
                "https://m.media-amazon.com/images/M/MV5BYjg1Y2YwNTgtZGQxMi00NTk1LTgyMjgtZmM4ODZiNzE0YjM4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg",
              timming: "12:00-14:30",
              trailer:
                "https://imdb-video-wab.media-imdb.com/vi2162473497/1434659607842-pgv4ql-1542625126585.mp4?Expires=1721464479&Signature=WdT~Maw44Tgr4WE23mcSmgUOTE9xrb-UCFTI7wbnH4V7MeTvkh9yh8e-YJ5Kr1UBYLuBCFfGqmZFD3p7cd9r2yQUROqlFQAPt8hbTeuoD04AspKEArjdXCOd0od3JdNNFAJ~eAoTUn6KagWLhHBLhhDQr~7HlrZVWrIuBVkYBPQB4RjGX-FAMgrACuWtQaZ0n0LjA9xOiCJOixK6FQD1CGhrb4VMTaQ9EfRYnqUij1gA~DmxeeHtABc89XU~Yg7Ay6zoGayHKnRN0ZxQZ4wEAKwf2zjwvU3bUdsq9yRZMULleI9kWr2cqGifr6JRyt3QKmlM4n-iGqyq0AuUoYhwjw__&Key-Pair-Id=APKAJLOTGGE6P3RA3PTA",
              rating: 8.3,
              details:
                "Arun gives up on his dream of becoming a filmmaker and takes up the job of a police officer after his father's death. He then attempts to track down a psychotic killer who targets schoolgirls.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "Veerappan",
              poster:
                "https://m.media-amazon.com/images/M/MV5BZThiNDBmMDctMDhjYS00M2I3LTk4ZjEtZDI5MmFjZjRjOGYxXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_FMjpg_UX885_.jpg",
              timming: "15:30-18:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi106543385/1434659607842-pgv4ql-1508324877417.mp4?Expires=1721465216&Signature=h-z8mnvB~PVOzqXUGlnl3DmAYLEWaiCzi3zVm6NsCFgXgwX~Vi5SSY8RPM6U3ua-DYQ3QqLNQApVjKntSOcspXxmU39QJ6d2m1Hgn1sEk3sBSVOAV-4gKknArQvf13inRqmB4ADrQQsVgRW-skG1q7ZTZop3m~90zjkl0a13y0~BRSq4feAT-fCe5oND6pnAyZuW2J6aDwcsUBCcYd6M7v-RNGxF167vDgoN-XFk1keAnL7LSriZOK2y9nV~93qtbXeY3gfY9Mlr4KtKZ~ZiGMF9aasi2XuiAqf9f1A-Vg4KzEXy29Ack2fzyxSgks7ddTM2uQasZXzNxAKK3hCQCw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 5.3,
              details:
                "Veerappan, a teenager, trains under his smuggler uncle, Sevi Gounder, and becomes a notorious dacoit. When he learns about a covert operation to arrest him, he does his best to thwart the police.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "Baahubali: The Beginning",
              poster:
                "https://m.media-amazon.com/images/M/MV5BZTQ3MjU2Y2UtZjI1My00NDc5LWE1OTgtYWZkMmMyMmUxNjkyXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX620_.jpg",
              timming: "19:00-21:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi3834163993/1434659607842-pgv4ql-1438191196090.mp4?Expires=1721464884&Signature=DgAlOGkVKgc2nH6eIH5GCm1m5JcvZSCWIrEpb5MTQftGunjTOEsNGTG6-PwEGKlhkx9Rp2qgXBCAZwSk8whea~~f~bUcePGfJfkoe~ge6MY9J9SopNs-lcZP-61QvUGvFPO2Qg4h7IRtUYVxsXXrUuxefkSCUWf-88z3vrGFZOFPypUs0ZLAHZZaiwhnw0lJh6XvdSLz7o9lsZWreLmG9X3oobCyOVG6OFLuihJHZs24wzOG-nb2duX13CEy~elK8CtQBndMxT6NV3Esel0vUlnbGCVbBflBa13vGFzV3IVqB33VvPL252PUXAL5YF1KLaTK363kUrgew-shccYkNw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.0,
              details:
                "In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
          ],
        },
        Inox: {
          Movies: [
            {
              name: "I (2015)",
              poster:
                "https://m.media-amazon.com/images/M/MV5BYmU4MzFlOTQtMTIyYS00ZmQxLTg3OTYtYjM3YmM1NzFkZmJhXkEyXkFqcGdeQXVyODE4MTg5NjQ@._V1_FMjpg_UX663_.jpg",
              timming: "11:00-13:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi2950016537/1434659607842-pgv4ql-1616202787567.mp4?Expires=1721464766&Signature=nhlrpeAiOBWhJ0YvZowS~MBN-oGzTHEJlOSz~N32F2y4~l4LkQ9JGH-muMAVOLH6XUH2PF~ohcJxRvzfXus8xCyNSOXG8WlAXHiNDUY~Y~uLlR9-jpRhlMSxls~Ec7zgQXoVl1X1uAvKXSlNplNqWWpdx7RZqp~ODeZ4qDC5EmY5a0uL8rMMkiuwxyTb~pQ4up~J1LYRVSPRYym8bCBv9NSrWvQR7ToGGkmWlf0dLHQ5ywvJnaDs7aXx76Eas6V-qnskH~CXfTUNrmbSuk1JWXMFIk0124IYCcu4eb3wIE4rJLQ0i7K2du9bwq6K2rga6pClVpRU8SQsmigQdSY74Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.4,
              details:
                "Lingesan, a successful model, falls in love with his co-model Diya and the two decide to marry. However, their happiness is short-lived as he starts suffering from physical deformities.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: false, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "RRR",
              poster:
                "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX750_.jpg",
              timming: "14:30-16:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi1153549081/1434659607842-pgv4ql-1639067219083.mp4?Expires=1721464756&Signature=qvA~lbyC6X47Bs7BxdSfaa3tYlciHpHUnyFA1iiLZpir0AqGayEYZ1OJbRX~NeFmLrLX-nV3dtInsb6eLPoDhbQAvBdFg7WMQtu4lWe9WdEpHuJ9RPj3VaG4OitQZ2HlG2YC7h-ugnCy2QaJVgjT0ZsBdJpxcqnfp6lzK8PjAwP8F2A46Kjq-xiRocwJYvP451JUrITkwWA710jLz~udGiZg46JnrNyb5icNW-MD2D~DOru0PFzBTuQ7wxEsPsFuiehVU1ATBPDMmZbL02zKBJJmHPOMmrTjHtEefGjA170IIHhnbEqONSABn8IBVmWt48ZSeL~ye9GLZah7yuBflw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.8,
              details:
                "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "M.S. Dhoni: The Untold Story",
              poster:
                "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UY3000_.jpg",
              timming: "17:30-20:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi1246279449/1434659607842-pgv4ql-1471371705520.mp4?Expires=1721464831&Signature=PzrzxUscKJ~vmLubJfIvNhAkE3qARpebCcjzi71wAGYrvQR82h-HjaeinQc8MWpBkF~mwSxr6bSQ2XQnbFn-ux6i5hp~~yjXhADmMg7Jk2C3REEc-OWqrwr9Rvch8NYeX0eI5h3vjRz4zUvnFlY~Y~F-yujkLo~huw-~2qzSV5W~qkzHnICiMESxKJxwJsclEPEnMcER2dx9M8KTRuOtmZj0ru73n5b5uEN736vllTy1Gy1yVzTTAOw40St9wsmEuF6tdudYqAPwLNcMOPhht~BTSvwvZeorJa~ewIACo6x6Ol8qY~XpDvV8BDUmSMiPHjsO7E5qeG9c8lNAW74~OQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.0,
              details:
                "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
          ],
        },
      },
    },
    {
      Location: "Hyderabad",
      Theatres: {
        Inox: {
          Movies: [
            {
              name: "Adipurush",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTIwZWI0Y2YtZGJhZC00MjU4LTliZTUtODVjZjk4Y2FlYzI1XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_FMjpg_UX1080_.jpg",
              timming: "13:00-16:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi1615643673/1434659607842-pgv4ql-1686201638913.mp4?Expires=1721465089&Signature=DFgNRQ-kFLY3nh2~rxgMiu2VqR8zWmrbYsAw822UtotAfkHf5IoUcxd0eTkLYpIF3SwuiNAOeurcIjjG746n7kPS7-sud4JdQ5mcQt9Tinv82GQAp~67h4GeN9czEoZTQVda~TPaPwukycYyw46LO5xZXEFxv7479F5JSfHjXUr1Wh4uzdUd5YN6b1RZwiFbZA2f-j58gFf2UdjR~Oyi7N-pk~HHhDYNRfLLLXcVWz6lprwRjW2fBtQOB-Wi0gh7wx6r0nlk-PjwaL3UB7CchUaYVLjUf6X7-4ouEqj9FZe~WFDfP-d5rpb8Eobjg6nN0xvP1iEU8izT5QOPBLdsRw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 2.7,
              details:
                "Raghav, the prince of the Ikshvaku dynasty from Kosala, tries to rescue his wife, Janaki, from the demon king Lankesh.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "Pushpa: The Rise - Part 1",
              poster:
                "https://m.media-amazon.com/images/M/MV5BZjA4ZDJmNmQtZTA4NS00NzhmLTg2ODktZjg3MDliZmUzYTZmXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_FMjpg_UX1067_.jpg",
              timming: "17:00-20:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi3325018905/1434659607842-pgv4ql-1642633452878.mp4?Expires=1721465649&Signature=Gal-b9-2qEltl1b5Wq6IWw24NIf8H8a5bEtmDdZpjUStkHMYedSaBziZobDkMyRKCZvIxXnr2RaEiVWPhBAoSF~QbSZ0QPh-AM6w1ObHV9yMEUkxxzhIkuGu7XteaznQdudRmla5GWSL4nIxjyJIpCv6H84yWwHn~dOLAleWgFuRwawE1jc62mjBFy1Gke6Wjm6uT14ZVtznHiUMPiQM7-CNAkHR9uj7oCV8YAWTBVDfPtlDFTwHBV-5An4-erbltSJQ7T7IDvrGp8x1CcJLXGAXAhRc8MT4D2ciYy3BM6ivCSUwLPDZagm6jM3HzLO-AfMMvMGR23n3d4j22jtA8g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.6,
              details:
                "A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "Baahubali 2: The Conclusion",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMmY0YzM0NmEtMzVhNi00YWE2LWFiNmItYjllYmFiZTRkMDkxXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_FMjpg_UX800_.jpg",
              timming: "21:00-23:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi1969010201/1434659607842-pgv4ql-1489965351201.mp4?Expires=1721465508&Signature=uk-4Xjzsq-eXWjyd64T4r9ogBV49q1sJ3gcbzQCh82DWDoNZDW7HhxoSa3aX9u5lsrfFNbrwAKE8uJmUQtDnIY9kK5HvfktxRjPKVc6gtFqxH3I8YniktNi4FC9SLsYFRP7BAa952BswmVXGh5RtClBaxfdp6yTQ6sXDnWAHIIwK9CcpSbFTf61hlupB5Irn9lA5jJavly2vnZxYTqMKfZtz9k-iuKKH1rpf1fpbJ1KZdPyH-DSNHfEPKsyIzbjjjxBd0GKlvOz17SzUxGfsU7YSnonst1dwsgUDH~c05ZOj1yQzUuaP05RUrOe0quXT3-cbkYMm6uUygn2tUOlJJg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.2,
              details:
                "When Bhallaladeva conspires against his brother to become the king of Mahishmati, he has him killed by Katappa and imprisons his wife. Years later, his brother's son returns to avenge his father's death.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
          ],
        },
        PVR: {
          Movies: [
            {
              name: "KGF Chapter 2",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMjI2Njg2Y2EtZjgwMC00ZGVkLWJmMWYtYjVhYjk2ZTkwNWE1XkEyXkFqcGdeQXVyMTMxMjA5NDU1._V1_FMjpg_UX1080_.jpg",
              timming: "10:00-13:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi481411609/1434659607842-pgv4ql-1648495185921.mp4?Expires=1721465021&Signature=AVPafuEUqJ9DbM~bj60AcNfR8lZ7XRawxs3O8ftYvNnHpBCwVAy0uoYEICVrd9JtAUomBzHIV4xylJp0JZ-a4uMltRiVpDwuJYIMabBf8zmB-fFASLQrqNMoXrv~1RLfLrI8Z8fMK4PCeWLuUODT6JHfAordV~ZHkCmr75lrI~TJyL4T5ghScDrHE0DrCdEaIL6vM4FwL9iVR4jVPoKJM05keuqA3wik9DT9SAJRA9ehb0uE5A~mJXd8xAXHQcmwO8DmxMP4VVPQBdiiWMLBQ9rYrn-n8-~smv5MhaMlkDagkI0zdbn93n2oDEXVIhgMwodk4uSLzWGKTSuoVVUl7A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.3,
              details:
                "The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "Sarileru Neekevvaru",
              poster:
                "https://m.media-amazon.com/images/M/MV5BODllNjZkODEtMGRkNS00YWQzLTg3MTYtMzg2N2U0ODI0Zjk0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UY2048_.jpg",
              timming: "14:00-17:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi2289221401/1434659607842-pgv4ql-1578482418202.mp4?Expires=1721465883&Signature=cXBAume~m91~p0SklcKiGU9eBX5CAmi19bfrInYi2VwN4i3it4N3mCv2vlVsFgpV9-PFPSp-7I8DLCw1WM8fKj2RBamcSFQiBUhO3R7UDLHwnGdEZf-G7-S6entl1ou3rlkwZnXmexIy2WhSASYkw0MEjEdu74hSNrxmoP1b7xMKJPIO7~5w4b9VIxur0M6TFFPUFKfpDpernXgGQPe~S9dp3qzfultbmPUaLWqALhqRIJB5wfoenGAi~DEa79M3w2QHAmvV~wvRfV-i6QJd0rElZrNyuVhVf1tpDsZoOYX-jtL4FkDC81RBjftjGcPdcqN6l5zpZQQdGkiWBH7z1Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 5.8,
              details:
                "Ajay, an army official, sets out for Kurnool after being assigned a covert mission. Soon, he finds himself in the middle of uncovering a major scam",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "Bhool Bhulaiyaa",
              poster:
                "https://m.media-amazon.com/images/M/MV5BN2Q1ODU2NzQtMDE4Mi00M2ViLTg5NmItYWNlMzBmMDdjNGY0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX473_.jpg",
              timming: "18:00-21:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi2915416345/1434659607842-pgv4ql-1499930374433.mp4?Expires=1721465433&Signature=VlDC3~4a2vDqLrDb7oiDA3IrLbuj3gAOKhFpnzwNYgbuJcrxCcQsYPOYct8yR86geb0S~jliaJoxYOw3gIGGusAEb~TrhfDgbAsB97hhrvAPX~GlrcVIfZIdkVaAy93u3MwNBxxi3qD42KwRpEi44BavHswk--sx~Jpg32lKf5NGRvf7g7pbGWyIVBsKxOFYgG8WxzwacaI0SPyOdIYjYB6IpLj31P7aoFqPTZ7T3RNwIkcZc38aR92jfBQIDdt3gvon1WprlqcetcN7ZVTKaY6E9seKIAAEpJnKXG6eVSUuX53-qFNcu-EnIZOMfEnQxXVbkY8vxdv~1xg2qnVAlw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.4,
              details:
                "An NRI and his wife decide to stay in his ancestral home, paying no heed to the warnings about ghosts. Soon, inexplicable occurrences cause him to call a psychiatrist to help solve the mystery.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
          ],
        },
        Cinepolis: {
          Movies: [
            {
              name: "Koi Mil Gaya",
              poster:
                "https://m.media-amazon.com/images/M/MV5BOGM4ZjFkZjktMTEwMS00NWNmLWI1NTAtYTAwYWNhNzAxMjA2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1036_.jpg",
              timming: "12:00-15:00",
              trailer:
                "https://imdb-video-wab.media-imdb.com/vi2773006361/1434659607842-pgv4ql-1525684470845.mp4?Expires=1721466101&Signature=PFerw85ARFit488LHfwWEBkiz7wUpaPq8uG8dIY6gSxBC2NzSMkVUDgBYEGWxEwwWn~YD5q3Cw8rB-NedyFS7etmPwCej3xHs7c6-i7dbdj4cBx5MNcVqOUd6a4s1hYByFz~UAGgaVh60DXc~Qa7rkGb5r5F7THmCWrjNOmJZASo-wycuw8LujVNa7MEPAUCsPlPppeV59UIlF03t9PMzBWxryo9XEQ5oGUz0lBewCpG2r-obdP3nAGZyymKPRTLrrmxfMJi8Rep2nmpjTiMRqQI6TqpwgxAoDphG536kAcLTtk6IcxqzOSkxxi1CNrMzQOMw-Z9c4q8KZOLMa6l9w__&Key-Pair-Id=APKAJLOTGGE6P3RA3PTA",
              rating: 7.1,
              details:
                "Indian scientist Sanjay Mehra is convinced life exists beyond the earth and manages to send a message into space. When at last he receives an answer, no one believes there may be aliens out there but Sanjay and his pregnant wife, Sonia, see a UFO at first hand. Following a car accident, Sanjay dies and Sonia has their son, Rohit Mehra but as the boy grows physically, his mind remains that of a child.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "The karate Kid",
              poster:
                "https://m.media-amazon.com/images/M/MV5BYjQ1NzRhYjYtMWY3My00ODA0LTk5ZDctYjQ4YjE0M2RhMGNiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_FMjpg_UX510_.jpg",
              timming: "16:00-19:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi1258882073/1434659607842-pgv4ql-1616202425304.mp4?Expires=1721465395&Signature=efi8hmkM457ozxBsgy5QMnxlL34mNGLwmoWoRkQJ1ci5MALAykolOaeN5XexKhvQw9nrkO-lroYoehzpLLaLrezyui6RjfDHxGG7rqDQF4GfFpW~f7dUe~SO067XsvDniZ0PZAJgahBC6xjGLC5KviUtRA3wZYGYw20GiE2mY2bOUgVP5Gxee2lAvNGIZAKaGCppqokZCxCThHTWIDdE8ju42Ph5zSEvGA6q6OZwNmu1XDjJ4cfSflB9Ic6RjChCdWTdpIdZkZ0ouHZiTtYGYAZRTu7KMSFaEKTbdXx-q0QlEChPORV0Ck~OkjgQQ5u1XX7YY9sYqgD0pC~s1FM0pA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 6.2,
              details:
                "When his mother's career results in a move to China, 12-year-old Dre Parker (Jaden Smith) finds that he is a stranger in a strange land. Though he knows a little karate, his fighting skills are no match for Cheng, the school bully. Dre finds a friend in Mr. Han (Jackie Chan), a maintenance man who is also a martial-arts master. Mr. Han teaches Dre all about kung fu in the hope that Dre will be able to face down Cheng and perhaps win the heart of a pretty classmate named Mei Ying.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "Dangal",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_FMjpg_UY2048_.jpg",
              timming: "20:00-23:00",
              trailer:
                "https://imdb-video.media-imdb.com/vi2094904857/1434659607842-pgv4ql-1480442703628.mp4?Expires=1721466103&Signature=n0wML44Z-ETnUbpREYN~KMKct6F~ygJrEBFgshw5p3hXKJILGSva7kPcqh-QTUDkDgZei0vxB3yBv8H1gNEbX4VPBny5DcVDN5fQiDoDi0OWQAq2nFAtjucMhAQLsaM9~Y6PubT6E74j8hTBCWKDwvBVk4vSA6-7HWvhSEm04whLmVTPFWjJXeYNGO7Rxr1xn5D5-eDwjElCxZL9x-EHFdRqKsMAhEJYWYpsNNcoV1SAYj6ryVtIAmgomVtmrsrOKUy2R0MSdORLzhbRd3tJP14RcDKZMlOrCLto~t33KgY--eqxcsNDJY7bp~gIj-P5z~kgNsEs6QDikRrBD1G8Vw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.3,
              details:
                "Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
          ],
        },
      },
    },
    {
      Location: "Mumbai",
      Theatres: {
        Inox: {
          Movies: [
            {
              name: "The Avengers",
              poster:
                "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX800_.jpg",
              timming: "10:00-12:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi1891149081/1434659607842-pgv4ql-1616202397016.mp4?Expires=1721466360&Signature=PGuqO73m8h2QtrQOMpTM0eMwPAdJLwCgA-KkdL9Uc94pId-0i7xKJqFhViY-oqZet5fqB74FJwY1ldumJQm-yCuy3iHL6VPnci8~4TX1t4h0pa5TXqcDlUme1W~HC8hT1OpxjTe0KuT6eLHVNe5gJUpXYyzhjUVH31OOA9BGPfGsmCumtthZ8sMP6MI0X5-3klFhoKgs2fKoTrthASJEUepEkynAZ4ihNyZ0OOjS2Bh4Fz~I0nFK5jLAW0~l9gqx72SnDF9b4Cr2hBAqUYTQseftv5fwjxyXndmdao1FArqQqvEVtvjdmxduBIiQ2pXLurDdSGzsbdte8sLnx40vTw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.0,
              details:
                "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "John Wick",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UY2048_.jpg",
              timming: "14:00-16:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi2273816345/1434659607842-pgv4ql-1616202348059.mp4?Expires=1721466630&Signature=NSlk7iBvmHQVHQNP7bAEW~JapADtrFjwYNg18VwINZp-54Gq0Lk~MIKaLJ793IGYKpEN0AjqxcnRbnorpg-Mgf0bSNxyGwn0NgfSbXqRA9Sm1~DGaWdt6pNi2od2sAW2YSdxig8TLgoy2S9XfNTR1yqMIY3DGt2kXfxHrCF5pUL1YMRRkV1MbEH2OmO~z9rAYgcS6IM8-yRumeUMgSc99asv6c0EtPMsKPwO2-oMvBMcF8woEm7IWgeAuCcwUg2UbQHCEWjEG37HP2GuwuzNqzPiRcOyP6NmqjmhzO9WGarar16Z16kIZalmN8AWMKDiYSiJhUW6YJax9KWsZTe3Yw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.4,
              details:
                "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: false, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "Train to Busan",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_FMjpg_UX406_.jpg",
              timming: "18:00-20:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi3430988569/1434659607842-pgv4ql-1563979656521.mp4?Expires=1721466554&Signature=XHqTjkDyexNG7si7fAAaIc55-4De3S0bTgBD3qXt5OPysyfDDEXvaYIZxT15AxUPuwZj1CBjRLUTgYhKhK~ddqjevjRbDzZxUNRmF4oST~xOnuOobGjEDEy~uCtWaSI~tpiCGXpEsqMoVEU8HVbDF4aCKced0BdNMpPNi~jWAL8VpNViHzEGDqFOWwHk6ftHTiB-Nb6N8fAQpC1G0-20VnkTFalQq8ldYVfzRoXYR7uLOenJD5CVziGJ~ws54avuvSiFKvU5jLnC6vEAZ0j3PLzwGLgenZsvg5a977aVthNGGuUgKtwEmWBXPkK-x70ro~Zu9m81C0FtmEbn8dMELg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.6,
              details:
                "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
          ],
        },
        Cinepolis: {
          Movies: [
            {
              name: "The Martian",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_FMjpg_UX865_.jpg",
              timming: "11:00-13:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi113423129/1434659607842-pgv4ql-1439998747831.mp4?Expires=1721466187&Signature=eXVZnWmHdK5KhxKpP-xoPCCQ7yygoAukR8seho~yYkKHHb44VlkFXpskr-zUL8lbdOyHmgsawV5nnXfDHtlKGaz3ZVnZ04CU~xq6L-rhS3V4Z1ZKPfFyFSA1h636J2QP6frF8UtutcX4KYq~f-UM2kV9jd9XR9m7~76aXFyO4TsxuMCgtoB5GKFEmlrFuOV3dH0fRo5pLDB~M-9x9MMSd4nMBPPCNwLoc8if-Bt0OG49U0AstenhdGJkZTpU0lHGDIoXCQSEQNaFGdJj3VaOT7-siVRJcqEqVZ5yr9aiyOd9RsHy4~awLrttCtPvvtYDga~Ujr29MsyR6~VDbrEqMQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 8.0,
              details:
                "When astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet. Meanwhile, back on Earth, members of NASA and a team of international scientists work tirelessly to bring him home, while his crew mates hatch their own plan for a daring rescue mission.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "Fast & Furious 5",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_FMjpg_UX1013_.jpg",
              timming: "15:00-17:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi3883123993/1434659607842-pgv4ql-1675630485706.mp4?Expires=1721466754&Signature=mPO65ajeQ2xeEdSJPq-aIt7~vx3mLyof1v6101A3wQdaw8vO6r3RXmChEmzhNkN~mSgDkJcieqxm8bFFUZxFePAlDxZg-Kxh-4ja9gn17nKnSlogBvCfgTm3E9zm7Lvzmrqsje249kkbdZEkdmzr41158XcuLurmVEG~o7YtmLQBf3n3PsIjvci~NmCBnvN7dWJHlGYay07uybQUqXRtQjXst4B-uGt-NID3TAS3qMPSClKDVB1G-U-I0Q-bEZDRQIc4kYkD79xO5NXwyNPP9gEHJbLAWg-SErrV7BzLHP0TciXhQ73dTBwnKD1suHJOdWbWAw~6psr7cMMlJRXV-w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.3,
              details:
                "Ever since ex-cop Brian O'Conner (Paul Walker) and Mia Torretto (Jordana Brewster) broke her brother Dom (Vin Diesel) out of custody, they've traveled border to border to evade authorities. In Rio de Janeiro, they must do one final job before they can gain their freedom for good. Assembling their elite team of car racers, Brian and Dom know they must confront the corrupt businessman who wants them dead, before the federal agent (Dwayne Johnson) on their trail finds them.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: false, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: false, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "Godzilla",
              poster:
                "https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX1000_.jpg",
              timming: "19:00-21:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi2242293017/1434659607842-pgv4ql-1616202389780.mp4?Expires=1721466470&Signature=iF0HD9vvjxZrDO89bTU5e1YfpwS3rZZQk6gDP8CBzpKqKIh7OmYwqZVNrmm9XRD~7OEMXc4Bp-atAcQf954NKtFZxCyv6-p2Y33GsCiv-y8pR7B~prWE4ewD2hQNhhD-afT72cyP4PluOR7F5ZmC5Laql2dTQJKcYJHHWche6TdYGOkA8Am~XKQOrKrbKG6bZosFfKqbPmk96lV6wVvJoTkYBcDe6tEY5JX386DWArSjc4DZrU85ff5XzaMwcKTJ6WvNqrsOAKSoIuOU9HWBXluCVocUZWJm9kNGPbH9njvMBbAKWQqsQSG0uO~jr5b5SSRpYd2xdafx1rUe6CT1kQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 6.4,
              details:
                "Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: false, seatId: 2 },
                  { booked: false, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
          ],
        },
        PVR: {
          Movies: [
            {
              name: "The Polar Express",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_FMjpg_UY2048_.jpg",
              timming: "12:00-14:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi2954167065/1434659607842-pgv4ql-1563553228198.mp4?Expires=1721467049&Signature=BHGQP5cWexIm8ePdMW-xnvMp1pa2Sxf-Ps9EO7AjImva7FjFRB~SZkokZyB1-~zugyAuurD5V5OR9CmaXh0rUzUHTsBe4YfQiOmgx8tzwtogXZo0Q-n1b~N-~3rdvqe7u4IIocrlHZZ~53Lw6nIT8Co-Z5wPOcYeRKXFUZXMKcv-ZEwRzbb0FOyKIHJs~cO4bAmY7TqlcFSIOrHnaCMDzII7cBLBNz0OwgRdc8Pceb7CtmBMBlGMbCM99VTGZQbVj0Y7eRmDDfgW2CK~kHJXkgF-ma3dNinYniQxHfP3sUln2B322ecrfLD5W4LAbWtDLvjPAhd5fUKboj2xGvJbew__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 6.6,
              details:
                "An inspiring adventure based on the beloved children's book by Chris Van Allsburg. When a doubting young boy takes an extraordinary train ride to the North Pole, he embarks on a journey of self-discovery that shows him that the wonder of life never fades for those who believe.",
              bookedSeats: [
                [
                  { booked: true, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: false, seatId: 4 },
                  { booked: false, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: true, seatId: 7 },
                  { booked: true, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: true, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
            {
              name: "The Theory of Everything",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_FMjpg_UX1012_.jpg",
              timming: "16:00-18:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi3801067289/1434659607842-pgv4ql-1616202806100.mp4?Expires=1721467116&Signature=YXtIGs1WxYVpO6~mlX6o1qUetAdk-uHFEsX-6kBY7VYtZXKTi9Nf4EjJUy8qTfeI5CljOzXUWePCweEDRfqttv6MNlaa82Ym7KKiQufSAkMFuaTSbhQVKqByrc6IaQiEVej8Sn62iusavbWE4NlGzMmJwcLdZhDQsnDGWyXP9qixZ75nbFoBAMmfFYVDBxQuX62c5wDGNFN1LAAjjI3Caz9Wp4Wf3MkkFBr26OPfl76wv13Kvc5YBuprW1OcE-8CioVPoRDcxqjl4L537vZXoICFOp2OxIw5-zAEcYdkIzlHUCjSLuaAWBjmdXU7b6EluLY4VrRA-kmjlOTy6-RCLg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 7.7,
              details:
                "In the 1960s, Cambridge University student and future physicist Stephen Hawking (Eddie Redmayne) falls in love with fellow collegian Jane Wilde (Felicity Jones). At 21, Hawking learns that he has motor neuron disease. Despite this -- and with Jane at his side -- he begins an ambitious study of time, of which he has very little left, according to his doctor. He and Jane defy terrible odds and break new ground in the fields of medicine and science, achieving more than either could hope to imagine.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: true, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: false, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: true, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: false, seatId: 14 },
                  { booked: true, seatId: 15 },
                ],
              ],
            },
            {
              name: "2012 (2009)",
              poster:
                "https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_FMjpg_UY2048_.jpg",
              timming: "19:00-21:30",
              trailer:
                "https://imdb-video.media-imdb.com/vi3444113945/1434659607842-pgv4ql-1616202398734.mp4?Expires=1721466814&Signature=is4D-5QJPaL1Vb9t5uRiK7Sa3vUjB8lVCr0jNFzdp0AmJJh5ebj7CaJ~t~UaedBiv~hKHDnN-13bQJsJbALj2vEMYY1qf3jXMHACqQ6laNM8DNvIxwy~zlzyZalwObueN5RRlJp0PzTsjGhoUsGcjBlR5hTl2K6~roSFZrXEAyqZvP7484G2AmJxD2u-I~l5lvVmUGi-r18XNhonwZJcgYnglkYfMd16y2fqxGX66GMdOnlgCLiRITi5~YBBYNBs7z2CazISckAIwg2NkMY1yADKWqL8eRCix5hpC6bisgCpfJpJ6v00WQbiE9vsLmt5J~5O1ZGMyT7P-EU7Iw7fpQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
              rating: 5.8,
              details:
                "Earth's billions of inhabitants are unaware that the planet has an expiration date. With the warnings of an American scientist (Chiwetel Ejiofor), world leaders begin secret preparations for the survival of select members of society. When the global cataclysm finally occurs, failed writer Jackson Curtis (John Cusack) tries to lead his family to safety as the world starts falling apart.",
              bookedSeats: [
                [
                  { booked: false, seatId: 1 },
                  { booked: true, seatId: 2 },
                  { booked: true, seatId: 3 },
                  { booked: true, seatId: 4 },
                  { booked: true, seatId: 5 },
                ],
                [
                  { booked: false, seatId: 6 },
                  { booked: false, seatId: 7 },
                  { booked: false, seatId: 8 },
                  { booked: true, seatId: 9 },
                  { booked: true, seatId: 10 },
                ],
                [
                  { booked: false, seatId: 11 },
                  { booked: false, seatId: 12 },
                  { booked: true, seatId: 13 },
                  { booked: true, seatId: 14 },
                  { booked: false, seatId: 15 },
                ],
              ],
            },
          ],
        },
      },
    },
  ],
};

export default movielist;
