import { xml2json } from 'xml-js';
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://www.goodreads.com',
  withCredentials: true,
  responseType: 'text',
  headers: {
    Cookie: `${'csid=BAhJIhg5NDMtNDI0Nzc4MC0xNTIxNjA0BjoGRVQ%3D--73b3ec7373becef1918931b8d9f46012980027d9; __qca=P0-1914583562-1553940994667; never_show_interstitial=true; fbm_2415071772=base_domain=.goodreads.com; csm-sid=989-0738097-0763199; fblo_2415071772=y; __gads=ID=325855e86021397a:T=1553948272:S=ALNI_MadbHyvrXutLk619jmOsTO-le-TJw; locale=en; __utmc=250562704; __utmz=250562704.1554123586.8.4.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); u=VgzLA8SwO9s0t2n-sLws2mmfJUaU26Z2TOAMp3PyBC7p5wjO; p=EH7evx0TXXePvkIikbmYF52K14hqsxrdGGZEyht77Xz1i6g3; _session_id2=c06f6009cae499f1ce4572465cd3e755; __utma=250562704.1908463853.1553940994.1554123586.1554127579.9'}`,
  },
});
const searchBooks = {
  GoodreadsResponse: {
    Request: {
      authentication: 'true',
      key: {
        __cdata: ' gxoRqRP8GeTiwHuouSA ',
      },
      method: {
        __cdata: ' search_index ',
      },
    },
    search: {
      query: {
        __cdata: " Ender's Game ",
      },
      'results-start': '1',
      'results-end': '20',
      'total-results': '668',
      source: 'Goodreads',
      'query-time-seconds': '0.20',
      results: {
        work: [
          {
            id: {
              _type: 'integer',
              __text: '2422333',
            },
            books_count: {
              _type: 'integer',
              __text: '241',
            },
            ratings_count: {
              _type: 'integer',
              __text: '994947',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '40895',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '1985',
            },
            original_publication_month: {
              _type: 'integer',
              _nil: 'true',
            },
            original_publication_day: {
              _type: 'integer',
              _nil: 'true',
            },
            average_rating: '4.30',
            best_book: {
              id: {
                _type: 'integer',
                __text: '375802',
              },
              title: "Ender's Game (Ender's Saga, #1)",
              author: {
                id: {
                  _type: 'integer',
                  __text: '589',
                },
                name: 'Orson Scott Card',
              },
              image_url: 'https://images.gr-assets.com/books/1408303130m/375802.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1408303130s/375802.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '55447683',
            },
            books_count: {
              _type: 'integer',
              __text: '40',
            },
            ratings_count: {
              _type: 'integer',
              __text: '26362',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '1751',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2017',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '11',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '14',
            },
            average_rating: '4.15',
            best_book: {
              id: {
                _type: 'integer',
                __text: '34368113',
              },
              title: 'End Game (Will Robie, #5)',
              author: {
                id: {
                  _type: 'integer',
                  __text: '9291',
                },
                name: 'David Baldacci',
              },
              image_url: 'https://images.gr-assets.com/books/1495976812m/34368113.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1495976812s/34368113.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '938064',
            },
            books_count: {
              _type: 'integer',
              __text: '58',
            },
            ratings_count: {
              _type: 'integer',
              __text: '79603',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '795',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '1984',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '12',
            },
            original_publication_day: {
              _type: 'integer',
              _nil: 'true',
            },
            average_rating: '4.18',
            best_book: {
              id: {
                _type: 'integer',
                __text: '44687',
              },
              title: "Enchanters' End Game (The Belgariad, #5)",
              author: {
                id: {
                  _type: 'integer',
                  __text: '8732',
                },
                name: 'David Eddings',
              },
              image_url: 'https://images.gr-assets.com/books/1217735909m/44687.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1217735909s/44687.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '42437887',
            },
            books_count: {
              _type: 'integer',
              __text: '7',
            },
            ratings_count: {
              _type: 'integer',
              __text: '5265',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '643',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2015',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '9',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '8',
            },
            average_rating: '4.10',
            best_book: {
              id: {
                _type: 'integer',
                __text: '22874150',
              },
              title: 'The End Game',
              author: {
                id: {
                  _type: 'integer',
                  __text: '6876994',
                },
                name: 'Kate McCarthy',
              },
              image_url: 'https://images.gr-assets.com/books/1423089153m/22874150.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1423089153s/22874150.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '44223038',
            },
            books_count: {
              _type: 'integer',
              __text: '20',
            },
            ratings_count: {
              _type: 'integer',
              __text: '5513',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '428',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2015',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '9',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '15',
            },
            average_rating: '4.26',
            best_book: {
              id: {
                _type: 'integer',
                __text: '24611928',
              },
              title: 'The End Game (A Brit in the FBI, #3)',
              author: {
                id: {
                  _type: 'integer',
                  __text: '1239',
                },
                name: 'Catherine Coulter',
              },
              image_url: 'https://images.gr-assets.com/books/1425319746m/24611928.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1425319746s/24611928.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '11571577',
            },
            books_count: {
              _type: 'integer',
              __text: '1',
            },
            ratings_count: {
              _type: 'integer',
              __text: '1112',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '46',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2010',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '4',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '30',
            },
            average_rating: '4.13',
            best_book: {
              id: {
                _type: 'integer',
                __text: '8782597',
              },
              title: "Ender's Game",
              author: {
                id: {
                  _type: 'integer',
                  __text: '2940867',
                },
                name: 'Frederic P. Miller',
              },
              image_url:
                'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
              small_image_url:
                'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '6581562',
            },
            books_count: {
              _type: 'integer',
              __text: '5',
            },
            ratings_count: {
              _type: 'integer',
              __text: '33504',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '223',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2009',
            },
            original_publication_month: {
              _type: 'integer',
              _nil: 'true',
            },
            original_publication_day: {
              _type: 'integer',
              _nil: 'true',
            },
            average_rating: '4.38',
            best_book: {
              id: {
                _type: 'integer',
                __text: '6393082',
              },
              title: "Ender's Game, Volume 1: Battle School (Ender's Saga)",
              author: {
                id: {
                  _type: 'integer',
                  __text: '38491',
                },
                name: 'Christopher Yost',
              },
              image_url:
                'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
              small_image_url:
                'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '12530',
            },
            books_count: {
              _type: 'integer',
              __text: '3',
            },
            ratings_count: {
              _type: 'integer',
              __text: '1834',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '61',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2002',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '9',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '16',
            },
            average_rating: '4.49',
            best_book: {
              id: {
                _type: 'integer',
                __text: '9735',
              },
              title: "Ender's Game Boxed Set: Ender's Game, Ender's Shadow, Shadow of the Hegemon",
              author: {
                id: {
                  _type: 'integer',
                  __text: '589',
                },
                name: 'Orson Scott Card',
              },
              image_url:
                'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
              small_image_url:
                'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '46873310',
            },
            books_count: {
              _type: 'integer',
              __text: '6',
            },
            ratings_count: {
              _type: 'integer',
              __text: '391',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '38',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2015',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '9',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '26',
            },
            average_rating: '4.05',
            best_book: {
              id: {
                _type: 'integer',
                __text: '31868870',
              },
              title: 'End Game',
              author: {
                id: {
                  _type: 'integer',
                  __text: '7473922',
                },
                name: 'Ginger Booth',
              },
              image_url: 'https://images.gr-assets.com/books/1473280564m/31868870.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1473280564s/31868870.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '45665816',
            },
            books_count: {
              _type: 'integer',
              __text: '14',
            },
            ratings_count: {
              _type: 'integer',
              __text: '718',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '51',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2014',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '11',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '6',
            },
            average_rating: '3.89',
            best_book: {
              id: {
                _type: 'integer',
                __text: '25809834',
              },
              title: 'The End Game (Templar, #5)',
              author: {
                id: {
                  _type: 'integer',
                  __text: '26011',
                },
                name: 'Raymond Khoury',
              },
              image_url: 'https://images.gr-assets.com/books/1451140269m/25809834.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1451140269s/25809834.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '7272274',
            },
            books_count: {
              _type: 'integer',
              __text: '3',
            },
            ratings_count: {
              _type: 'integer',
              __text: '13336',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '53',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2010',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '3',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '24',
            },
            average_rating: '4.61',
            best_book: {
              id: {
                _type: 'integer',
                __text: '7025086',
              },
              title: "Ender's Game, Volume 2: Command School",
              author: {
                id: {
                  _type: 'integer',
                  __text: '38491',
                },
                name: 'Christopher Yost',
              },
              image_url:
                'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
              small_image_url:
                'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '51609213',
            },
            books_count: {
              _type: 'integer',
              __text: '7',
            },
            ratings_count: {
              _type: 'integer',
              __text: '1078',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '270',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2018',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '1',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '2',
            },
            average_rating: '4.24',
            best_book: {
              id: {
                _type: 'integer',
                __text: '30985221',
              },
              title: 'End Game (Dirty Money, #4)',
              author: {
                id: {
                  _type: 'integer',
                  __text: '73977',
                },
                name: 'Lisa Renee Jones',
              },
              image_url: 'https://images.gr-assets.com/books/1497740135m/30985221.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1497740135s/30985221.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '56238306',
            },
            books_count: {
              _type: 'integer',
              __text: '4',
            },
            ratings_count: {
              _type: 'integer',
              __text: '1452',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '62',
            },
            original_publication_year: {
              _type: 'integer',
              _nil: 'true',
            },
            original_publication_month: {
              _type: 'integer',
              _nil: 'true',
            },
            original_publication_day: {
              _type: 'integer',
              _nil: 'true',
            },
            average_rating: '4.30',
            best_book: {
              id: {
                _type: 'integer',
                __text: '34963329',
              },
              title: 'End Game (Jack Noble #12)',
              author: {
                id: {
                  _type: 'integer',
                  __text: '6151659',
                },
                name: 'L.T. Ryan',
              },
              image_url:
                'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
              small_image_url:
                'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '56991591',
            },
            books_count: {
              _type: 'integer',
              __text: '5',
            },
            ratings_count: {
              _type: 'integer',
              __text: '844',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '47',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2017',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '7',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '7',
            },
            average_rating: '4.24',
            best_book: {
              id: {
                _type: 'integer',
                __text: '35563236',
              },
              title: 'End Game (Langthorne #4)',
              author: {
                id: {
                  _type: 'integer',
                  __text: '6422267',
                },
                name: 'Charlie Gallagher',
              },
              image_url: 'https://images.gr-assets.com/books/1500842571m/35563236.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1500842571s/35563236.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '53830455',
            },
            books_count: {
              _type: 'integer',
              __text: '4',
            },
            ratings_count: {
              _type: 'integer',
              __text: '1835',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '134',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2016',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '11',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '27',
            },
            average_rating: '4.42',
            best_book: {
              id: {
                _type: 'integer',
                __text: '33144572',
              },
              title: 'End Game (Fallen Empire, #8)',
              author: {
                id: {
                  _type: 'integer',
                  __text: '4512224',
                },
                name: 'Lindsay Buroker',
              },
              image_url:
                'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
              small_image_url:
                'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '61846440',
            },
            books_count: {
              _type: 'integer',
              __text: '2',
            },
            ratings_count: {
              _type: 'integer',
              __text: '923',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '224',
            },
            original_publication_year: {
              _type: 'integer',
              _nil: 'true',
            },
            original_publication_month: {
              _type: 'integer',
              _nil: 'true',
            },
            original_publication_day: {
              _type: 'integer',
              _nil: 'true',
            },
            average_rating: '4.43',
            best_book: {
              id: {
                _type: 'integer',
                __text: '39947220',
              },
              title: 'End Game (Bellevue Bullies, #4)',
              author: {
                id: {
                  _type: 'integer',
                  __text: '5255580',
                },
                name: 'Toni Aleo',
              },
              image_url: 'https://images.gr-assets.com/books/1526291653m/39947220.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1526291653s/39947220.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '66029652',
            },
            books_count: {
              _type: 'integer',
              __text: '2',
            },
            ratings_count: {
              _type: 'integer',
              __text: '807',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '118',
            },
            original_publication_year: {
              _type: 'integer',
              _nil: 'true',
            },
            original_publication_month: {
              _type: 'integer',
              _nil: 'true',
            },
            original_publication_day: {
              _type: 'integer',
              _nil: 'true',
            },
            average_rating: '4.01',
            best_book: {
              id: {
                _type: 'integer',
                __text: '42372731',
              },
              title: 'The End Game: The Game Duet',
              author: {
                id: {
                  _type: 'integer',
                  __text: '15996299',
                },
                name: 'Mickey Miller',
              },
              image_url:
                'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
              small_image_url:
                'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '17050695',
            },
            books_count: {
              _type: 'integer',
              __text: '2',
            },
            ratings_count: {
              _type: 'integer',
              __text: '576',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '25',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2010',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '3',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '10',
            },
            average_rating: '4.35',
            best_book: {
              id: {
                _type: 'integer',
                __text: '12082688',
              },
              title: "Ender's Game Ultimate Collection",
              author: {
                id: {
                  _type: 'integer',
                  __text: '38491',
                },
                name: 'Christopher Yost',
              },
              image_url: 'https://images.gr-assets.com/books/1372911791m/12082688.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1372911791s/12082688.jpg',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '10523104',
            },
            books_count: {
              _type: 'integer',
              __text: '4',
            },
            ratings_count: {
              _type: 'integer',
              __text: '741',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '30',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2009',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '12',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '9',
            },
            average_rating: '3.95',
            best_book: {
              id: {
                _type: 'integer',
                __text: '7734468',
              },
              title: "Ender's Game: War of Gifts",
              author: {
                id: {
                  _type: 'integer',
                  __text: '236462',
                },
                name: 'Jake Black',
              },
              image_url:
                'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png',
              small_image_url:
                'https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png',
              _type: 'Book',
            },
          },
          {
            id: {
              _type: 'integer',
              __text: '62571166',
            },
            books_count: {
              _type: 'integer',
              __text: '3',
            },
            ratings_count: {
              _type: 'integer',
              __text: '1013',
            },
            text_reviews_count: {
              _type: 'integer',
              __text: '138',
            },
            original_publication_year: {
              _type: 'integer',
              __text: '2018',
            },
            original_publication_month: {
              _type: 'integer',
              __text: '8',
            },
            original_publication_day: {
              _type: 'integer',
              __text: '1',
            },
            average_rating: '4.09',
            best_book: {
              id: {
                _type: 'integer',
                __text: '40281801',
              },
              title: 'End Game (Dawson Family, #2)',
              author: {
                id: {
                  _type: 'integer',
                  __text: '1635425',
                },
                name: 'Emily Goodwin',
              },
              image_url: 'https://images.gr-assets.com/books/1533204256m/40281801.jpg',
              small_image_url: 'https://images.gr-assets.com/books/1533204256s/40281801.jpg',
              _type: 'Book',
            },
          },
        ],
      },
    },
  },
};

export const useBookNameFetch = async (url: string) => {
  // const booksResponse = await fetch(query, {
  //   method: 'GET',
  //   mode: 'no-cors',
  // });
  try {
    const booksResponse = await axiosInstance.get(url);
    const searchBooks = xml2json(booksResponse.data, { compact: true, spaces: 4 });
    const searchBooksJ = JSON.parse(searchBooks);
    const books = searchBooksJ.GoodreadsResponse.search.results.work;
    console.log(books);
    return books;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const useBookDetails = async (url: string) => {
  // const booksResponse = await fetch(query, {
  //   method: 'GET',
  //   mode: 'no-cors',
  // });
  try {
    const booksResponse = await axiosInstance.get(url);
    const searchBooks = xml2json(booksResponse.data, { compact: true, spaces: 4 });
    // const searchBooksJ = JSON.parse(searchBooks);
    // const books = searchBooksJ.GoodreadsResponse.search.results.work;
    console.log('searchBooks', searchBooks);
    return [];
  } catch (error) {
    console.log(error);
  }
  return [];
};
